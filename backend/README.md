# Kisan Saathi Backend

FastAPI + Uvicorn + SQLite backend for the Kisan Saathi public demo. The
architecture intentionally remains small: no SQLAlchemy, migrations package,
external worker, or real SMS provider is introduced here.

## Configuration

Copy `.env.example` to `.env` for local work. In production set
`APP_ENV=production` and provide `JWT_SECRET`, `OFFICER_STAFF_ID`,
`OFFICER_NAME`, `OFFICER_DISTRICT`, `OFFICER_PASSWORD`, `OTP_MODE`, and
`CORS_ORIGINS`. Production startup fails if required secrets are missing,
weak, or if the live frontend origin is not explicitly allowed.

`OTP_MODE=stub` is retained for this demo. Local development receives
`dev_code` in the OTP response; production never exposes that field. A real
SMS provider is intentionally out of scope for this increment.

The SQLite database is demo/prototype persistence, not durable production
storage. By default it is created at `backend/data/kisan.db`; set
`KISAN_DB_PATH` to a writable mounted path when the hosting platform has an
ephemeral filesystem. Startup is idempotent and preserves existing data.

## Distress Alert Module & Officer Routing

Distress risk is an explainable weighted score using rainfall deviation, market price movement, and loan due proximity. High-risk alerts are routed to the farmer\'s assigned/local agriculture officer.

### Scoring Engine Formula
The module computes a risk score (0-100) using three core signals (deterministic, no ML):
1. **Rainfall Deviation**: Max 40 points (scaled up to -50% deficit).
2. **Market Price Drop**: Max 35 points (scaled up to -50% price drop).
3. **Loan Proximity**: Max 25 points (scaled from 60 days remaining down to 0 days).

### Risk Thresholds
- **0-24**: LOW
- **25-49**: MEDIUM
- **50-74**: HIGH
- **75-100**: CRITICAL

### Alert Routing Logic
1. **Priority 1**: Matches the existing assigned officer.
2. **Priority 2**: Matches an officer whose jurisdiction equals the farmer\'s district.
3. **Fallback**: Left unassigned.

### Local Testing

From `backend/`:

```text
python -m uvicorn app.main:app --reload --port 8001
```

Production start command:

```text
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```
