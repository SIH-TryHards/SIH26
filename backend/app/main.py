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
import os
import re
import secrets
import sqlite3
import urllib.request
import urllib.parse
from datetime import datetime, timedelta, timezone
from pathlib import Path

import jwt
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)
DB_PATH = DATA_DIR / "kisan.db"
SCHEMA_VERSION = 2

OTP_MODE = os.environ.get("OTP_MODE", "stub")
JWT_SECRET = os.environ.get("JWT_SECRET", "change-me-in-production")
FARMER_TOKEN_MIN = int(os.environ.get("FARMER_TOKEN_MINUTES", "10080"))
OFFICER_TOKEN_MIN = int(os.environ.get("OFFICER_TOKEN_MINUTES", "480"))

OFFICER_STAFF_ID = os.environ.get("OFFICER_STAFF_ID", "OFF-1001")
OFFICER_NAME = os.environ.get("OFFICER_NAME", "A. Kulkarni")
OFFICER_DISTRICT = os.environ.get("OFFICER_DISTRICT", "Nashik")
OFFICER_PASSWORD = os.environ.get("OFFICER_PASSWORD", "Kisan@2026")

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
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------- database

def db() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db() -> None:
    """Schema v2 per ACCOUNT SETUP CONTRACT section 6.
    Dev migration policy: a version mismatch recreates the database
    (demo data only - never acceptable in production)."""
    with db() as c:
        row = c.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='meta'"
        ).fetchone()
        version = 0
        if row:
            version = c.execute(
                "SELECT value FROM meta WHERE key='schema_version'"
            ).fetchone()["value"]

        if version and int(version) == SCHEMA_VERSION:
            return

        for table in ("meta", "accounts", "farmer_profiles", "farms",
                      "crop_cycles", "officer_profiles", "otp_challenge"):
            c.execute(f"DROP TABLE IF EXISTS {table}")

        c.executescript(
            """
            CREATE TABLE meta (
                key   TEXT PRIMARY KEY,
                value TEXT NOT NULL
            );
            CREATE TABLE accounts (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                role          TEXT NOT NULL DEFAULT 'farmer',
                phone_e164    TEXT UNIQUE,
                status        TEXT NOT NULL DEFAULT 'active',
                created_at    TEXT NOT NULL,
                updated_at    TEXT NOT NULL,
                last_login_at TEXT
            );
            CREATE TABLE farmer_profiles (
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
            CREATE TABLE farms (
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
            CREATE TABLE crop_cycles (
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
            CREATE TABLE officer_profiles (
                staff_id       TEXT PRIMARY KEY,
                display_name   TEXT NOT NULL,
                jurisdiction   TEXT NOT NULL,
                password_hash  TEXT NOT NULL,
                salt           TEXT NOT NULL,
                status         TEXT NOT NULL DEFAULT 'active'
            );
            CREATE TABLE otp_challenge (
                phone                TEXT PRIMARY KEY,
                code_hash            TEXT NOT NULL,
                salt                 TEXT NOT NULL,
                expires_at           TEXT NOT NULL,
                attempts             INTEGER NOT NULL DEFAULT 0,
                resend_available_at  TEXT,
                created_at           TEXT NOT NULL
            );
            INSERT INTO meta (key, value) VALUES ('schema_version', '2');
            """
        )
        _seed_officer(c)
    print(f"[auth] schema v{SCHEMA_VERSION} ready at {DB_PATH}")


def _seed_officer(c: sqlite3.Connection) -> None:
    salt = secrets.token_hex(16)
    c.execute(
        "INSERT OR REPLACE INTO officer_profiles"
        " (staff_id, display_name, jurisdiction, password_hash, salt)"
        " VALUES (?, ?, ?, ?, ?)",
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
        return jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
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
    digits = re.sub(r"\D", "", raw)[-10:]
    if not PHONE_RE.fullmatch(digits):
        raise HTTPException(422, {"error": {"code": "INVALID_PHONE",
                                            "message": "Not a valid Indian mobile number."}})
    return digits


def mask_phone(phone: str) -> str:
    return f"••• {phone[-3:]}" if phone and len(phone) >= 3 else "•••"

# ---------------------------------------------------------------- schemas

class PhoneIn(BaseModel):
    phone: str = Field(min_length=10, max_length=13)


class OtpIn(BaseModel):
    phone: str
    otp: str = Field(min_length=6, max_length=6)


class OfficerIn(BaseModel):
    staff_id: str
    password: str


class ProfileIn(BaseModel):
    display_name: str = Field(min_length=1, max_length=80)
    language_code: str | None = None
    state_name: str | None = None
    district_name: str | None = None
    village_name: str | None = None
    area_acres: float | None = Field(default=None, gt=0, le=10_000)
    soil_type: str | None = None
    irrigation_type: str | None = None
    crop: str | None = None
    variety: str | None = None
    sown_on: str | None = None
    growth_stage: str | None = None
    expected_harvest: str | None = None

# ---------------------------------------------------------------- routes

@app.get("/healthz")
@app.get("/api/v1/health")
def health():
    return {"data": {"ok": True, "otp_mode": OTP_MODE, "schema": SCHEMA_VERSION}}


# ---------------------------------------------------------------- mandi prices (data.gov.in)

DATAGOVIN_API_KEY = os.environ.get("DATAGOVIN_API_KEY", "")
DATAGOVIN_RESOURCE = "3514c18b-79f5-44e4-a86a-70e1fa65ed3c"

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
        with urllib.request.urlopen(req, timeout=8) as resp:
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
        print(f"[mandi] data.gov.in fetch failed: {e}")
        return []


@app.get("/api/v1/mandi/prices")
def get_mandi_prices(commodity: str, district: str = "", state: str = ""):
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
        print(f"[OTP] {phone} -> {code}")
        return {"data": {"expires_in": OTP_TTL_SECONDS, "dev_code": code, "sent": False}}
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
            "SELECT id FROM accounts WHERE phone_e164 = ?", (e164,)
        ).fetchone()

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
            "SELECT id FROM accounts WHERE phone_e164 = ?", (e164,)
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
            "SELECT id FROM accounts WHERE phone_e164 = ?", (e164,)
        ).fetchone()
        if not account:
            return {"data": {"phone_masked": mask_phone(e164.removeprefix("+91")),
                             "display_name": None, "farm": None, "crop_cycle": None}}
        return {"data": get_me_internal(c, account["id"], e164)}


@app.on_event("startup")
def on_startup():
    init_db()
    print(f"[auth] otp_mode={OTP_MODE} officer={OFFICER_STAFF_ID}")
