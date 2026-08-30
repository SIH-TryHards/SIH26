# Kisan Saathi — Precision Crop Advisory & Early Warning

Smart crop advisory and farmer distress early-warning platform for SIH 2026. Built for smallholders: plain language, low bandwidth, works on basic smartphones.

### Core Features
- **Precision Agronomy Dashboard** — Live weather (Open-Meteo), 12-crop phenology tracker, FAO-56 evapotranspiration, soil hydration tiers, spray-window decision engine and tomorrow's action plan. All telemetry renders from `services/weather.js` with full offline fallback via `simWeather.js`.
- **Mandi Intelligence** — Net take-home ranking (price × quantity − freight − mandi fee). Compares nearby mandis by actual profit, not just quoted price. Live AGMARKNET via backend (`/api/v1/mandi/prices`) with deterministic fallback.
- **Multilingual (6 languages)** — Hand-curated `i18n.js` with 385 English keys (polished, farmer-friendly, grade-6 reading level) + Hindi, Marathi, Bengali, Tamil, Telugu. Missing keys fall back to English gracefully; geography names can live-translate via Sarvam AI when a key is configured.
- **Distress Early Warning** — Interactive risk explorer (rain × price × EMI timing) for farmer planning; officer triage dashboard with prioritised caseload, search and action logging.
- **Advisory Engine** — 7 pure rules (harvest-rain, hold-spray, irrigate, heat, waterlog, rainfed-stress, fungal-watch) emitting `severity/title/body/why` keys — never raw sentences.

### How to Run (ES Modules — needs a server)

**Frontend + Backend (recommended):**
```bash
# Terminal 1 — API (port 8001)
python -m uvicorn backend.app.main:app --port 8001

# Terminal 2 — Frontend (port 8000)
python -m http.server 8000
# open http://localhost:8000/
```

**Offline demo (no server):**
Open `KisanSaathi_Standalone.html` directly — no server needed.

**Environment:**
Copy `backend/.env.example` → `backend/.env` and set `JWT_SECRET`, `DATAGOVIN_API_KEY` (optional, for live mandi prices) and `CORS_ORIGINS` if needed.

### Project Structure
- `index.html` — Single-page app shell with 7 farmer views + officer dashboard
- `assets/js/farmer.js` — Main controller (~2.9k lines, all UI wiring)
- `assets/js/i18n.js` — 385-key English source + 5 Indian languages
- `assets/js/advisory.js` — Pure agronomy engines
- `assets/js/services/weather.js` — Live Open-Meteo provider
- `backend/app/main.py` — FastAPI + SQLite (port 8001)

Credits: Prasanna · Shreyas · Peeyush · Devum · Tejas · XerumGG
