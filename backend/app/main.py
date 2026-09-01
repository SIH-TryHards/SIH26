"""Kisan Saathi auth + account service - FastAPI + SQLite.
Schema v2 implements the ACCOUNT SETUP CONTRACT (pathway.md):
account -> farmer_profile -> farm -> crop_cycle, with officer
profiles and OTP challenges. SQLite is the sanctioned local
fallback; PostgreSQL + SQLAlchemy arrive with the persistence
increment.

Run:  python -m uvicorn backend.app.main:app --port 8001
Docs: http://localhost:8001/docs
"""

import hashlib
import hmac
import json
import math
import os
import re
import secrets
import sqlite3
import urllib.request
import urllib.parse
import logging
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Literal

import jwt
from fastapi import FastAPI, Header, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator

BASE_DIR = Path(__file__).resolve().parent.parent
SCHEMA_VERSION = 3

APP_ENV = os.environ.get("APP_ENV", "development").strip().lower()
IS_PRODUCTION = APP_ENV in {"production", "prod"}


def _setting(name: str, default: str | None = None, *, required_in_production: bool = False) -> str | None:
    value = os.environ.get(name, default)
    if required_in_production and IS_PRODUCTION and not value:
        raise RuntimeError(f"{name} must be set when APP_ENV=production")
    return value.strip() if isinstance(value, str) else value


def _minutes(name: str, default: str, minimum: int, maximum: int) -> int:
    raw = _setting(name, default, required_in_production=True)
    try:
        value = int(raw)
    except (TypeError, ValueError) as exc:
        raise RuntimeError(f"{name} must be an integer") from exc
    if not minimum <= value <= maximum:
        raise RuntimeError(f"{name} must be between {minimum} and {maximum}")
    return value


OTP_MODE = _setting("OTP_MODE", "stub", required_in_production=True)
if OTP_MODE != "stub":
    raise RuntimeError("OTP_MODE must remain 'stub'; provider delivery is not implemented")

JWT_SECRET = _setting(
    "JWT_SECRET",
    None if IS_PRODUCTION else "dev-only-local-jwt-secret-7b9c4d2e1f6a8c0b",
    required_in_production=True,
)
if not JWT_SECRET or len(JWT_SECRET.encode("utf-8")) < 32:
    raise RuntimeError("JWT_SECRET must be at least 32 UTF-8 bytes")

FARMER_TOKEN_MIN = _minutes("FARMER_TOKEN_MINUTES", "10080", 5, 30 * 24 * 60)
OFFICER_TOKEN_MIN = _minutes("OFFICER_TOKEN_MINUTES", "480", 5, 7 * 24 * 60)

OFFICER_STAFF_ID = _setting("OFFICER_STAFF_ID", "OFF-1001", required_in_production=True)
OFFICER_NAME = _setting("OFFICER_NAME", "A. Kulkarni", required_in_production=True)
OFFICER_DISTRICT = _setting("OFFICER_DISTRICT", "Nashik", required_in_production=True)
OFFICER_PASSWORD = _setting(
    "OFFICER_PASSWORD",
    "dev-only-officer-password" if not IS_PRODUCTION else None,
    required_in_production=True,
)
if not OFFICER_PASSWORD or len(OFFICER_PASSWORD) < 12:
    raise RuntimeError("OFFICER_PASSWORD must be at least 12 characters")

DATAGOVIN_API_KEY = _setting("DATAGOVIN_API_KEY", "") or ""

DEFAULT_CORS_ORIGINS = (
    "http://localhost:8000,http://127.0.0.1:8000,"
    "http://localhost:4173,http://127.0.0.1:4173,"
    "http://localhost:5500,http://127.0.0.1:5500"
)
cors_raw = _setting("CORS_ORIGINS", None if IS_PRODUCTION else DEFAULT_CORS_ORIGINS,
                    required_in_production=True)
CORS_ORIGINS = [origin.strip().rstrip("/") for origin in (cors_raw or "").split(",") if origin.strip()]
if "*" in CORS_ORIGINS:
    raise RuntimeError("CORS_ORIGINS must not contain '*'")
if IS_PRODUCTION and "https://kisan-saathi.pages.dev" not in CORS_ORIGINS:
    raise RuntimeError("CORS_ORIGINS must include https://kisan-saathi.pages.dev in production")

configured_db_path = Path(_setting("KISAN_DB_PATH", "data/kisan.db"))
DB_PATH = configured_db_path if configured_db_path.is_absolute() else BASE_DIR / configured_db_path
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

logger = logging.getLogger("kisan_saathi")
logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO").upper(),
                    format="%(asctime)s %(levelname)s %(name)s %(message)s")

PHONE_RE = re.compile(r"^[6-9]\d{9}$")
OTP_TTL_SECONDS = 300
OTP_MAX_ATTEMPTS = 5
OTP_RESEND_COOLDOWN = 30

app = FastAPI(title="Kisan Saathi API", version="0.3.0")

CORS_ORIGINS = [
    o.strip() for o in os.environ.get(
        "CORS_ORIGINS",
        "http://localhost:8000,http://127.0.0.1:8000,"
        "http://localhost:4173,http://127.0.0.1:4173,"
        "http://localhost:5500,http://127.0.0.1:5500"
    ).split(",") if o.strip()
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

# ---------------------------------------------------------------- database

def db() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db() -> None:
    """Create or upgrade schema v3 without deleting existing data.

    SQLite's ``CREATE TABLE IF NOT EXISTS`` makes startup idempotent. A
    database with a newer schema is rejected rather than being rewritten.
    """
    with db() as c:
        c.executescript(
            """
            CREATE TABLE IF NOT EXISTS meta (
                key   TEXT PRIMARY KEY,
                value TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS accounts (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                role          TEXT NOT NULL DEFAULT 'farmer',
                phone_e164    TEXT UNIQUE,
                status        TEXT NOT NULL DEFAULT 'active',
                created_at    TEXT NOT NULL,
                updated_at    TEXT NOT NULL,
                last_login_at TEXT
            );
            CREATE TABLE IF NOT EXISTS farmer_profiles (
                account_id          INTEGER PRIMARY KEY REFERENCES accounts(id),
                display_name        TEXT,
                language_code       TEXT,
                state_name          TEXT,
                district_name       TEXT,
                village_name        TEXT,
                assigned_officer_id TEXT,
                created_at          TEXT NOT NULL,
                updated_at          TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS farms (
                id              INTEGER PRIMARY KEY AUTOINCREMENT,
                account_id      INTEGER NOT NULL REFERENCES accounts(id),
                village_name    TEXT,
                area_acres      REAL,
                soil_type       TEXT,
                irrigation_type TEXT,
                is_active       INTEGER NOT NULL DEFAULT 1,
                created_at      TEXT NOT NULL,
                updated_at      TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS crop_cycles (
                id               INTEGER PRIMARY KEY AUTOINCREMENT,
                farm_id          INTEGER NOT NULL REFERENCES farms(id),
                crop             TEXT NOT NULL,
                variety          TEXT,
                sown_on          TEXT,
                growth_stage     TEXT,
                expected_harvest TEXT,
                status           TEXT NOT NULL DEFAULT 'active',
                created_at       TEXT NOT NULL,
                updated_at       TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS officer_profiles (
                staff_id       TEXT PRIMARY KEY,
                display_name   TEXT NOT NULL,
                jurisdiction   TEXT NOT NULL,
                password_hash  TEXT NOT NULL,
                salt           TEXT NOT NULL,
                status         TEXT NOT NULL DEFAULT 'active'
            );
            CREATE TABLE IF NOT EXISTS otp_challenge (
                phone                TEXT PRIMARY KEY,
                code_hash            TEXT NOT NULL,
                salt                 TEXT NOT NULL,
                expires_at           TEXT NOT NULL,
                attempts             INTEGER NOT NULL DEFAULT 0,
                resend_available_at  TEXT,
                created_at           TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS distress_alerts (
                id              INTEGER PRIMARY KEY AUTOINCREMENT,
                farmer_account_id INTEGER NOT NULL REFERENCES accounts(id),
                officer_id      TEXT REFERENCES officer_profiles(staff_id),
                district        TEXT,
                risk_score      INTEGER NOT NULL,
                risk_level      TEXT NOT NULL,
                rainfall_signal REAL,
                price_signal    REAL,
                loan_signal     REAL,
                reason_summary  TEXT,
                status          TEXT NOT NULL DEFAULT 'open',
                created_at      TEXT NOT NULL,
                updated_at      TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS interventions (
                id              INTEGER PRIMARY KEY AUTOINCREMENT,
                alert_id        INTEGER NOT NULL REFERENCES distress_alerts(id),
                officer_id      TEXT NOT NULL,
                action_type     TEXT NOT NULL,
                notes           TEXT,
                created_at      TEXT NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_alerts_officer_created
                ON distress_alerts (officer_id, created_at DESC);
            CREATE INDEX IF NOT EXISTS idx_alerts_status_risk
                ON distress_alerts (status, risk_score DESC);
            """
        )

        version_row = c.execute(
            "SELECT value FROM meta WHERE key='schema_version'"
        ).fetchone()
        version = int(version_row["value"]) if version_row else 0
        if version > SCHEMA_VERSION:
            raise RuntimeError(
                f"Database schema v{version} is newer than supported v{SCHEMA_VERSION}"
            )
        c.execute(
            "INSERT INTO meta (key, value) VALUES ('schema_version', ?) "
            "ON CONFLICT(key) DO UPDATE SET value=excluded.value",
            (str(SCHEMA_VERSION),),
        )
        _seed_officer(c)
    logger.info("database schema v%s ready at %s", SCHEMA_VERSION, DB_PATH)


def _seed_officer(c: sqlite3.Connection) -> None:
    salt = secrets.token_hex(16)
    c.execute(
        "INSERT INTO officer_profiles"
        " (staff_id, display_name, jurisdiction, password_hash, salt)"
        " VALUES (?, ?, ?, ?, ?)"
        " ON CONFLICT(staff_id) DO UPDATE SET"
        " display_name=excluded.display_name,"
        " jurisdiction=excluded.jurisdiction,"
        " password_hash=excluded.password_hash,"
        " salt=excluded.salt",
        (OFFICER_STAFF_ID, OFFICER_NAME, OFFICER_DISTRICT,
         hash_password(OFFICER_PASSWORD, salt), salt),
    )


# ---------------------------------------------------------------- crypto

def hash_password(password: str, salt_hex: str) -> str:
    return hashlib.pbkdf2_hmac(
        "sha256", password.encode(), bytes.fromhex(salt_hex), 200_000
    ).hex()


def make_token(sub: str, role: str, minutes: int) -> str:
    now = datetime.now(timezone.utc)
    return jwt.encode(
        {"sub": sub, "role": role, "iat": now,
         "exp": now + timedelta(minutes=minutes)},
        JWT_SECRET, algorithm="HS256",
    )


def decode_token(authorization: str | None) -> dict:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(401, {"error": {"code": "NO_TOKEN",
                                            "message": "Sign in first."}})
    token = authorization.removeprefix("Bearer ").strip()
    try:
        claims = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        if not isinstance(claims.get("sub"), str) or claims.get("role") not in {"farmer", "officer"}:
            raise jwt.InvalidTokenError("missing identity claims")
        return claims
    except jwt.ExpiredSignatureError:
        raise HTTPException(401, {"error": {"code": "TOKEN_EXPIRED",
                                            "message": "Session expired."}})
    except jwt.InvalidTokenError:
        raise HTTPException(401, {"error": {"code": "TOKEN_INVALID",
                                            "message": "Bad token."}})


def require_role(authorization: str | None, role: str) -> dict:
    claims = decode_token(authorization)
    if claims.get("role") != role:
        raise HTTPException(403, {"error": {"code": "FORBIDDEN",
                                            "message": "Wrong role."}})
    return claims

# ---------------------------------------------------------------- helpers

def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def now_iso() -> str:
    return utcnow().isoformat()


def normalize_phone(raw: str) -> str:
    if not isinstance(raw, str):
        raise HTTPException(422, {"error": {"code": "INVALID_PHONE",
                                            "message": "Not a valid Indian mobile number."}})
    compact = re.sub(r"[\s()-]", "", raw)
    if compact.startswith("+91"):
        compact = compact[3:]
    elif compact.startswith("91") and len(compact) == 12:
        compact = compact[2:]
    digits = compact
    if not PHONE_RE.fullmatch(digits):
        raise HTTPException(422, {"error": {"code": "INVALID_PHONE",
                                            "message": "Not a valid Indian mobile number."}})
    return digits


def mask_phone(phone: str) -> str:
    return f"••• {phone[-3:]}" if phone and len(phone) >= 3 else "•••"

# ---------------------------------------------------------------- schemas

class StrictModel(BaseModel):
    model_config = ConfigDict(extra="forbid")


class PhoneIn(StrictModel):
    phone: str = Field(min_length=10, max_length=16)

    @field_validator("phone")
    @classmethod
    def phone_format(cls, value: str) -> str:
        compact = re.sub(r"[\s()-]", "", value)
        if compact.startswith("+91"):
            compact = compact[3:]
        elif compact.startswith("91") and len(compact) == 12:
            compact = compact[2:]
        if not PHONE_RE.fullmatch(compact):
            raise ValueError("Not a valid Indian mobile number")
        return value


class OtpIn(PhoneIn):
    otp: str = Field(pattern=r"^\d{6}$")


class OfficerIn(StrictModel):
    staff_id: str = Field(min_length=1, max_length=40)
    password: str = Field(min_length=1, max_length=200)


class ProfileIn(StrictModel):
    display_name: str = Field(min_length=1, max_length=80)
    language_code: str | None = Field(default=None, max_length=10)
    state_name: str | None = Field(default=None, max_length=80)
    district_name: str | None = Field(default=None, max_length=80)
    village_name: str | None = Field(default=None, max_length=120)
    area_acres: float | None = Field(default=None, gt=0, le=10_000)
    soil_type: str | None = Field(default=None, max_length=40)
    irrigation_type: str | None = Field(default=None, max_length=40)
    crop: str | None = Field(default=None, max_length=60)
    variety: str | None = Field(default=None, max_length=80)
    sown_on: str | None = Field(default=None, max_length=10)
    growth_stage: str | None = Field(default=None, max_length=40)
    expected_harvest: str | None = Field(default=None, max_length=10)

    @field_validator("sown_on", "expected_harvest")
    @classmethod
    def iso_date_or_empty(cls, value: str | None) -> str | None:
        if value in (None, ""):
            return None
        try:
            date.fromisoformat(value)
        except ValueError as exc:
            raise ValueError("Date must use YYYY-MM-DD format") from exc
        return value


class DistressScoreIn(StrictModel):
    farmer_account_id: int = Field(gt=0)
    rainfall_deviation_pct: float = Field(ge=-100, le=100, allow_inf_nan=False)
    price_change_pct: float = Field(ge=-100, le=100, allow_inf_nan=False)
    loan_days_remaining: int = Field(ge=0, le=3650)


class InterventionIn(StrictModel):
    action_type: Literal["acknowledge", "contacted", "resolved"]
    notes: str | None = Field(default=None, max_length=1000)
    resolve: bool = False

    @model_validator(mode="after")
    def resolve_must_be_explicit(self):
        if self.resolve and self.action_type != "resolved":
            raise ValueError("resolve is only valid with action_type='resolved'")
        return self

# ---------------------------------------------------------------- routes

@app.get("/healthz")
@app.get("/api/v1/health")
def health():
    return {"data": {"ok": True, "otp_mode": OTP_MODE, "schema": SCHEMA_VERSION}}


# ---------------------------------------------------------------- mandi prices (data.gov.in)

DATAGOVIN_RESOURCE = "3514c18b-79f5-44e4-a86a-70e1fa65ed3c"
DATAGOVIN_TIMEOUT_SECONDS = 8

def _fetch_datagovin_mandi(commodity: str, state: str = "", district: str = "") -> list[dict]:
    """Try data.gov.in AGMARKNET API. Returns list of price records or empty."""
    if not DATAGOVIN_API_KEY:
        return []
    params = {
        "api-key": DATAGOVIN_API_KEY,
        "format": "json",
        "limit": 20,
        "filters[commodity]": commodity.title(),
    }
    if state:
        params["filters[state]"] = state.title()
    if district:
        params["filters[district]"] = district.title()

    url = f"https://api.data.gov.in/resource/{DATAGOVIN_RESOURCE}?{urllib.parse.urlencode(params)}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "KisanSaathi/1.0"})
        with urllib.request.urlopen(req, timeout=DATAGOVIN_TIMEOUT_SECONDS) as resp:
            data = json.loads(resp.read())
        records = data.get("records", [])
        return [
            {
                "mandi": r.get("market", r.get("mandi_name", "Unknown")),
                "price": float(r.get("modal_price", r.get("min_price", 0)) or 0),
                "commodity": r.get("commodity", commodity),
                "date": r.get("arrival_date", ""),
            }
            for r in records if float(r.get("modal_price", 0) or 0) > 0
        ]
    except Exception as e:
        logger.warning("data.gov.in mandi request failed: %s", type(e).__name__)
        return []


@app.get("/api/v1/mandi/prices")
def get_mandi_prices(
    commodity: str = Query(min_length=1, max_length=80),
    district: str = Query(default="", max_length=80),
    state: str = Query(default="", max_length=80),
):
    """Server-side mandi price fetch with data.gov.in + fallback."""
    records = _fetch_datagovin_mandi(commodity, state, district)
    if records:
        return {"data": {"source": "data.govin", "records": records}}
    return {"data": {"source": "unavailable", "records": []}}


@app.post("/api/v1/auth/otp/request")
def otp_request(body: PhoneIn):
    phone = normalize_phone(body.phone)
    now = utcnow()

    with db() as c:
        row = c.execute(
            "SELECT * FROM otp_challenge WHERE phone = ?", (phone,)
        ).fetchone()
        if row:
            created = datetime.fromisoformat(row["created_at"])
            if (now - created).total_seconds() < OTP_RESEND_COOLDOWN:
                raise HTTPException(429, {"error": {"code": "RATE_LIMITED",
                                                    "message": "Wait 30s before resending."}})

        code = f"{secrets.randbelow(1_000_000):06d}"
        salt = secrets.token_hex(16)
        expires = (now + timedelta(seconds=OTP_TTL_SECONDS)).isoformat()
        c.execute(
            "INSERT INTO otp_challenge (phone, code_hash, salt, expires_at,"
            " attempts, resend_available_at, created_at)"
            " VALUES (?, ?, ?, ?, 0, ?, ?)"
            " ON CONFLICT(phone) DO UPDATE SET code_hash=excluded.code_hash,"
            " salt=excluded.salt, expires_at=excluded.expires_at, attempts=0,"
            " resend_available_at=excluded.resend_available_at,"
            " created_at=excluded.created_at",
            (phone, hash_password(code, salt), salt, expires,
             (now + timedelta(seconds=OTP_RESEND_COOLDOWN)).isoformat(), now.isoformat()),
        )

    if OTP_MODE == "stub":
        logger.info("stub OTP challenge created for phone ending %s", phone[-3:])
        data = {"expires_in": OTP_TTL_SECONDS, "sent": False}
        if not IS_PRODUCTION:
            data["dev_code"] = code
        return {"data": data}
    return {"data": {"expires_in": OTP_TTL_SECONDS, "sent": True}}


@app.post("/api/v1/auth/otp/verify")
def otp_verify(body: OtpIn):
    """Verify the challenge, then create OR RECOVER the account
    (ACCOUNT SETUP CONTRACT section 3.9) - never a duplicate."""
    phone = normalize_phone(body.phone)
    now = utcnow()

    with db() as c:
        row = c.execute(
            "SELECT * FROM otp_challenge WHERE phone = ?", (phone,)
        ).fetchone()
        if not row:
            raise HTTPException(400, {"error": {"code": "OTP_EXPIRED",
                                                "message": "Request a new code."}})
        if now > datetime.fromisoformat(row["expires_at"]):
            c.execute("DELETE FROM otp_challenge WHERE phone = ?", (phone,))
            raise HTTPException(400, {"error": {"code": "OTP_EXPIRED",
                                                "message": "Code expired, request a new one."}})
        if row["attempts"] >= OTP_MAX_ATTEMPTS:
            raise HTTPException(429, {"error": {"code": "TOO_MANY_ATTEMPTS",
                                                "message": "Too many wrong attempts."}})

        candidate = hash_password(body.otp, row["salt"])
        if not hmac.compare_digest(candidate, row["code_hash"]):
            c.execute("UPDATE otp_challenge SET attempts = attempts + 1 WHERE phone = ?",
                      (phone,))
            raise HTTPException(400, {"error": {"code": "INVALID_OTP",
                                                "message": "That code did not match."}})

        c.execute("DELETE FROM otp_challenge WHERE phone = ?", (phone,))

        e164 = f"+91{phone}"
        account = c.execute(
            "SELECT id, status FROM accounts WHERE phone_e164 = ?", (e164,)
        ).fetchone()

        if account and account["status"] != "active":
            raise HTTPException(403, {"error": {"code": "ACCOUNT_INACTIVE",
                                                "message": "This account is inactive."}})

        new_account = account is None
        if new_account:
            cur = c.execute(
                "INSERT INTO accounts (role, phone_e164, status, created_at,"
                " updated_at, last_login_at) VALUES ('farmer', ?, 'active', ?, ?, ?)",
                (e164, now_iso(), now_iso(), now_iso()),
            )
            account_id = cur.lastrowid
        else:
            account_id = account["id"]
            c.execute("UPDATE accounts SET last_login_at = ?, updated_at = ? WHERE id = ?",
                      (now_iso(), now_iso(), account_id))

        profile = c.execute(
            "SELECT display_name FROM farmer_profiles WHERE account_id = ?",
            (account_id,),
        ).fetchone()
        has_profile = profile is not None and bool(profile["display_name"])

    token = make_token(e164, "farmer", FARMER_TOKEN_MIN)
    return {"data": {"token": token, "role": "farmer",
                     "farmer": {"phone": phone, "masked": mask_phone(phone),
                                "new_account": new_account,
                                "has_profile": has_profile}}}


@app.post("/api/v1/auth/officer/login")
def officer_login(body: OfficerIn):
    with db() as c:
        row = c.execute(
            "SELECT * FROM officer_profiles WHERE staff_id = ? AND status = 'active'",
            (body.staff_id.strip(),),
        ).fetchone()
    if not row:
        raise HTTPException(401, {"error": {"code": "INVALID_CREDENTIALS",
                                            "message": "Wrong staff ID or password."}})
    candidate = hash_password(body.password, row["salt"])
    if not hmac.compare_digest(candidate, row["password_hash"]):
        raise HTTPException(401, {"error": {"code": "INVALID_CREDENTIALS",
                                            "message": "Wrong staff ID or password."}})
    token = make_token(row["staff_id"], "officer", OFFICER_TOKEN_MIN)
    return {"data": {"token": token, "role": "officer",
                     "officer": {"staff_id": row["staff_id"],
                                 "name": row["display_name"],
                                 "district": row["jurisdiction"]}}}


@app.get("/api/v1/auth/session")
def session_info(authorization: str | None = Header(default=None)):
    claims = decode_token(authorization)
    return {"data": {"role": claims["role"], "id": claims["sub"]}}


@app.post("/api/v1/auth/logout")
def logout(authorization: str | None = Header(default=None)):
    decode_token(authorization)
    return {"data": {"ok": True}}

# ---------------------------------------------------------------- farmer profile

@app.post("/api/v1/farmers/me/profile")
def save_profile(body: ProfileIn,
                 authorization: str | None = Header(default=None)):
    """Attach the reviewed onboarding draft to the authenticated
    account (ACCOUNT SETUP CONTRACT section 3.8). Upserts profile,
    the single active farm, and its active crop cycle."""
    claims = require_role(authorization, "farmer")
    e164 = claims["sub"]
    now = now_iso()

    with db() as c:
        account = c.execute(
            "SELECT id FROM accounts WHERE phone_e164 = ? AND status = 'active'", (e164,)
        ).fetchone()
        if not account:
            raise HTTPException(404, {"error": {"code": "NO_ACCOUNT",
                                                "message": "Verify your phone first."}})
        account_id = account["id"]

        c.execute(
            "INSERT INTO farmer_profiles (account_id, display_name, language_code,"
            " state_name, district_name, village_name, created_at, updated_at)"
            " VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
            " ON CONFLICT(account_id) DO UPDATE SET"
            " display_name=excluded.display_name,"
            " language_code=excluded.language_code,"
            " state_name=excluded.state_name,"
            " district_name=excluded.district_name,"
            " village_name=excluded.village_name,"
            " updated_at=excluded.updated_at",
            (account_id, body.display_name.strip(), body.language_code,
             body.state_name, body.district_name, body.village_name, now, now),
        )

        farm = c.execute(
            "SELECT id FROM farms WHERE account_id = ? AND is_active = 1",
            (account_id,),
        ).fetchone()
        if farm:
            farm_id = farm["id"]
            c.execute(
                "UPDATE farms SET village_name=?, area_acres=?, soil_type=?,"
                " irrigation_type=?, updated_at=? WHERE id=?",
                (body.village_name, body.area_acres, body.soil_type,
                 body.irrigation_type, now, farm_id),
            )
        else:
            cur = c.execute(
                "INSERT INTO farms (account_id, village_name, area_acres,"
                " soil_type, irrigation_type, is_active, created_at, updated_at)"
                " VALUES (?, ?, ?, ?, ?, 1, ?, ?)",
                (account_id, body.village_name, body.area_acres, body.soil_type,
                 body.irrigation_type, now, now),
            )
            farm_id = cur.lastrowid

        if body.crop:
            c.execute(
                "UPDATE crop_cycles SET status='archived', updated_at=?"
                " WHERE farm_id=? AND status='active'",
                (now, farm_id),
            )
            c.execute(
                "INSERT INTO crop_cycles (farm_id, crop, variety, sown_on,"
                " growth_stage, expected_harvest, status, created_at, updated_at)"
                " VALUES (?, ?, ?, ?, ?, ?, 'active', ?, ?)",
                (farm_id, body.crop, body.variety, body.sown_on,
                 body.growth_stage, body.expected_harvest, now, now),
            )

        me = get_me_internal(c, account_id, e164)
    return {"data": me}


def get_me_internal(c: sqlite3.Connection, account_id: int, e164: str) -> dict:
    profile = c.execute(
        "SELECT * FROM farmer_profiles WHERE account_id = ?", (account_id,)
    ).fetchone()
    farm = c.execute(
        "SELECT * FROM farms WHERE account_id = ? AND is_active = 1", (account_id,)
    ).fetchone()
    cycle = None
    if farm:
        cycle = c.execute(
            "SELECT * FROM crop_cycles WHERE farm_id = ? AND status = 'active'"
            " ORDER BY id DESC LIMIT 1",
            (farm["id"],),
        ).fetchone()

    phone = (e164 or "").removeprefix("+91")
    return {
        "account_id": account_id,
        "phone_masked": mask_phone(phone),
        "display_name": profile["display_name"] if profile else None,
        "language_code": profile["language_code"] if profile else None,
        "profile": dict(profile) if profile else None,
        "farm": dict(farm) if farm else None,
        "crop_cycle": dict(cycle) if cycle else None,
    }


@app.get("/api/v1/farmers/me")
def get_me(authorization: str | None = Header(default=None)):
    claims = require_role(authorization, "farmer")
    e164 = claims["sub"]
    with db() as c:
        account = c.execute(
            "SELECT id FROM accounts WHERE phone_e164 = ? AND status = 'active'", (e164,)
        ).fetchone()
        if not account:
            return {"data": {"phone_masked": mask_phone(e164.removeprefix("+91")),
                             "display_name": None, "farm": None, "crop_cycle": None}}
        return {"data": get_me_internal(c, account["id"], e164)}


@app.on_event("startup")
def on_startup():
    init_db()
    logger.info("startup complete app_env=%s otp_mode=%s officer_staff_id=%s",
                APP_ENV, OTP_MODE, OFFICER_STAFF_ID)

# ---------------------------------------------------------------- distress prediction

def score_distress(rainfall_deviation_pct: float, price_change_pct: float, loan_days_remaining: int):
    """Return a deterministic 0-100 score from three bounded signals."""
    if not all(math.isfinite(float(value)) for value in (rainfall_deviation_pct, price_change_pct)):
        raise ValueError("rainfall and price signals must be finite numbers")
    rainfall_deviation_pct = max(-100.0, min(100.0, float(rainfall_deviation_pct)))
    price_change_pct = max(-100.0, min(100.0, float(price_change_pct)))
    loan_days_remaining = max(0, min(3650, int(loan_days_remaining)))

    # Weights: Rainfall (max 40), Price Drop (max 35), Loan Proximity (max 25).
    r_score = min(40.0, (abs(rainfall_deviation_pct) / 50.0) * 40.0) if rainfall_deviation_pct < 0 else 0.0
    p_score = min(35.0, (abs(price_change_pct) / 50.0) * 35.0) if price_change_pct < 0 else 0.0

    l_score = 0.0
    if loan_days_remaining <= 0:
        l_score = 25.0
    elif loan_days_remaining < 60:
        l_score = 25.0 * (1.0 - (loan_days_remaining / 60.0))

    score = int(r_score + p_score + l_score)

    if score < 25:
        risk_level = "low"
    elif score < 50:
        risk_level = "medium"
    elif score < 75:
        risk_level = "high"
    else:
        risk_level = "critical"

    reasons = []
    if r_score > 0:
        reasons.append(f"Rainfall is {abs(rainfall_deviation_pct):.0f}% below the expected level.")
    if p_score > 0:
        reasons.append(f"Market price has fallen {abs(price_change_pct):.0f}%.")
    if l_score > 0:
        if loan_days_remaining <= 0:
            reasons.append("Loan payment is overdue.")
        else:
            reasons.append(f"Loan payment is due in {loan_days_remaining} days.")

    if not reasons:
        reasons.append("Conditions are currently stable.")

    return {
        "score": max(0, min(100, score)),
        "risk_level": risk_level,
        "rainfall_signal": rainfall_deviation_pct,
        "price_signal": price_change_pct,
        "loan_signal": loan_days_remaining,
        "reasons": reasons
    }

@app.post("/api/v1/distress/score")
def distress_score(body: DistressScoreIn, authorization: str | None = Header(default=None)):
    claims = require_role(authorization, "officer") # Only authenticated officers/system for now
    now = now_iso()

    res = score_distress(body.rainfall_deviation_pct, body.price_change_pct, body.loan_days_remaining)

    with db() as c:
        account = c.execute("SELECT id FROM accounts WHERE id = ?", (body.farmer_account_id,)).fetchone()
        if not account:
            raise HTTPException(404, {"error": {"code": "NO_ACCOUNT", "message": "Account not found."}})

        account_id = account["id"]

        # Routing priority
        assigned_officer = None
        district = None

        profile = c.execute(
            "SELECT assigned_officer_id, district_name FROM farmer_profiles WHERE account_id = ?",
            (account_id,),
        ).fetchone()
        if profile:
            district = profile["district_name"]
            if profile["assigned_officer_id"]:
                officer = c.execute(
                    "SELECT staff_id FROM officer_profiles "
                    "WHERE staff_id = ? AND status = 'active'",
                    (profile["assigned_officer_id"],),
                ).fetchone()
                if officer:
                    assigned_officer = officer["staff_id"]
            if assigned_officer is None and district:
                officer = c.execute(
                    "SELECT staff_id FROM officer_profiles "
                    "WHERE lower(trim(jurisdiction)) = lower(trim(?)) "
                    "AND status = 'active' ORDER BY staff_id LIMIT 1",
                    (district,),
                ).fetchone()
                if officer:
                    assigned_officer = officer["staff_id"]

        reason_summary = json.dumps(res["reasons"])

        cur = c.execute(
            "INSERT INTO distress_alerts (farmer_account_id, officer_id, district, risk_score, risk_level, "
            "rainfall_signal, price_signal, loan_signal, reason_summary, status, created_at, updated_at)"
            " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'open', ?, ?)",
            (account_id, assigned_officer, district, res["score"], res["risk_level"],
             res["rainfall_signal"], res["price_signal"], res["loan_signal"], reason_summary, now, now)
        )
        alert_id = cur.lastrowid

    return {
        "data": {
            "alert_id": alert_id,
            "farmer_account_id": account_id,
            "risk_score": res["score"],
            "risk_level": res["risk_level"],
            "signals": {
                "rainfall": res["rainfall_signal"],
                "price": res["price_signal"],
                "loan": res["loan_signal"]
            },
            "reasons": res["reasons"]
        }
    }


@app.get("/api/v1/officer/alerts")
def get_officer_alerts(
    authorization: str | None = Header(default=None),
    status: Literal["open", "acknowledge", "contacted", "resolved"] | None = None,
    risk_level: Literal["low", "medium", "high", "critical"] | None = None,
):
    claims = require_role(authorization, "officer")
    staff_id = claims["sub"]

    where = ["d.officer_id = ?"]
    params: list[object] = [staff_id]
    if status:
        where.append("d.status = ?")
        params.append(status)
    if risk_level:
        where.append("d.risk_level = ?")
        params.append(risk_level)

    with db() as c:
        rows = c.execute(
            "SELECT d.*, p.display_name, a.phone_e164 "
            "FROM distress_alerts d "
            "JOIN accounts a ON d.farmer_account_id = a.id "
            "LEFT JOIN farmer_profiles p ON a.id = p.account_id "
            f"WHERE {' AND '.join(where)} "
            "ORDER BY d.created_at DESC, d.risk_score DESC, d.id DESC",
            params,
        ).fetchall()

    alerts = []
    counts = {"critical": 0, "high": 0, "medium": 0, "low": 0}
    for r in rows:
        lvl = r["risk_level"].lower()
        if lvl in counts:
            counts[lvl] += 1

        alerts.append({
            "id": r["id"],
            "farmer_account_id": r["farmer_account_id"],
            "district": r["district"],
            "risk_score": r["risk_score"],
            "risk_level": r["risk_level"],
            "status": r["status"],
            "reason_summary": r["reason_summary"],
            "created_at": r["created_at"]
        })

    return {"data": {"alerts": alerts, "counts": counts}}


@app.get("/api/v1/officer/alerts/{alert_id}")
def get_officer_alert_detail(alert_id: int, authorization: str | None = Header(default=None)):
    claims = require_role(authorization, "officer")
    staff_id = claims["sub"]

    with db() as c:
        r = c.execute(
            "SELECT d.*, p.display_name, p.village_name, p.district_name, a.phone_e164 "
            "FROM distress_alerts d "
            "JOIN accounts a ON d.farmer_account_id = a.id "
            "LEFT JOIN farmer_profiles p ON a.id = p.account_id "
            "WHERE d.id = ? AND d.officer_id = ?",
            (alert_id, staff_id)
        ).fetchone()

        if not r:
            raise HTTPException(404, {"error": {"code": "NOT_FOUND", "message": "Alert not found or access denied."}})

        interventions = c.execute(
            "SELECT * FROM interventions WHERE alert_id = ? ORDER BY created_at ASC",
            (alert_id,)
        ).fetchall()

    return {
        "data": {
            "id": r["id"],
            "farmer_account_id": r["farmer_account_id"],
            "district": r["district"],
            "risk_score": r["risk_score"],
            "risk_level": r["risk_level"],
            "signals": {
                "rainfall": r["rainfall_signal"],
                "price": r["price_signal"],
                "loan": r["loan_signal"]
            },
            "reasons": json.loads(r["reason_summary"] or "[]"),
            "status": r["status"],
            "created_at": r["created_at"],
            "updated_at": r["updated_at"],
            "farmer": {
                "name": r["display_name"],
                "phone_masked": mask_phone((r["phone_e164"] or "").removeprefix("+91")),
                "village": r["village_name"]
            },
            "interventions": [dict(i) for i in interventions]
        }
    }


@app.post("/api/v1/officer/alerts/{alert_id}/action")
def officer_alert_action(alert_id: int, body: InterventionIn, authorization: str | None = Header(default=None)):
    claims = require_role(authorization, "officer")
    staff_id = claims["sub"]
    now = now_iso()

    with db() as c:
        r = c.execute("SELECT id FROM distress_alerts WHERE id = ? AND officer_id = ?", (alert_id, staff_id)).fetchone()
        if not r:
            raise HTTPException(404, {"error": {"code": "NOT_FOUND", "message": "Alert not found or access denied."}})

        c.execute(
            "INSERT INTO interventions (alert_id, officer_id, action_type, notes, created_at)"
            " VALUES (?, ?, ?, ?, ?)",
            (alert_id, staff_id, body.action_type, body.notes, now)
        )

        if body.action_type in ["resolved", "acknowledge", "contacted"]:
            c.execute("UPDATE distress_alerts SET status = ?, updated_at = ? WHERE id = ?", (body.action_type, now, alert_id))

    return {"data": {"ok": True}}
