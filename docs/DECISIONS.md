# Finalized Decisions — Smart Crop Advisory & Farmer Distress Early-Warning

Resolves all 12 sections of `command.txt`. Every item here is a **decision**, not an option list.
Where something is deferred it is labelled STRETCH and must be presented as such.

---

## 1. Product & MVP

**What the prototype does:** a farmer opens the app in their own language, sees today's
hyperlocal advisory for their specific crop and growth stage (as text *and* spoken audio),
checks which nearby mandi actually nets them the most money after transport, and — invisibly
to them — a risk engine scores their distress exposure and pushes the high-risk cases onto a
local agri-officer's dashboard with a full explanation of *why*.

**Must-have (the three stated Expected Outcomes, nothing less):**
1. Regional-language advisory, voice + text, works on a basic smartphone.
2. Explainable distress-risk score with alert routing to an agri-officer.
3. Market price + mandi comparison.

**Stretch (label clearly, never demo as done):** live API integration, PWA offline sync,
SMS/IVR fallback, trained ML risk model, satellite/soil-sensor ingest, scheme auto-eligibility.

**Farmer workflow:** pick language → farm auto-loads → advisory card (read + listen) →
weather strip → mandi comparison → "talk to my officer" → acknowledge advisory.

**Officer workflow:** login → district triage board sorted by risk → open a flagged farmer →
read ranked risk contributions → act (call / schedule visit / refer to scheme) → log outcome.

---

## 2. System Architecture

**Modular monolith.** Not microservices — six people, one week, and a service mesh would
consume the entire budget in DevOps. Not an unstructured monolith either.

One deployable backend with hard internal module boundaries:

```
client/  farmer web app   ─┐
client/  officer dashboard ─┤ HTTPS/JSON
                            ▼
                    api/ (REST controllers)
                            │
        ┌───────────────┬───┴────────┬──────────────┐
   advisory/        distress/     mandi/         alerts/
   (rules)          (scorer)      (net revenue)  (routing)
        └───────────────┴────┬───────┴──────────────┘
                        data/ (repositories)
                             │
                        PostgreSQL
```

**Rule:** engines are pure functions — data in, verdict out, no DB calls, no HTTP, no DOM.
That is what makes them unit-testable and lets the same logic run in the browser for the
offline demo and on the server later. `alerts/` is the only module allowed to write
notifications; engines never notify.

---

## 3. Technology Stack

| Layer | Decision | Why this and not the alternative |
|---|---|---|
| Farmer + officer UI | **Static HTML + hand-written CSS + vanilla ES modules** | The brief's headline constraint is low-bandwidth on basic smartphones. Tailwind Play CDN is ~100 KB of runtime JS; a React SPA adds a build step and a bundle. Our whole shell is a few KB and needs no build. |
| Charts | Inline SVG, hand-drawn | A charting library costs more than the four charts we need. |
| Backend | **FastAPI (Python 3.11)** | Rule engines and any later ML live in Python; auto-generated OpenAPI docs at `/docs` are a free demo asset and a free frontend/backend contract. |
| Database | **PostgreSQL 15** | Relational data with real foreign keys; `JSONB` for advisory payloads. SQLite as the zero-setup local fallback so nobody is blocked on install day. |
| ORM / migrations | SQLAlchemy 2 + Alembic | Standard, and migrations stop the "works on my machine" schema drift. |
| Auth | JWT, two roles (`farmer`, `officer`) | Officer dashboard exposes personal distress data — it must not be public. Farmer login is phone + OTP, OTP stubbed to `000000` in dev. |
| Maps | **Leaflet + OpenStreetMap tiles** | No API key, no billing, no quota surprise mid-demo. Google Maps needs a card on file. |
| Voice (TTS) | **Browser `SpeechSynthesis`**, Bhashini as STRETCH | Zero payload, works offline where the OS has the voice, degrades gracefully. A paid cloud TTS is a live-network dependency in a 3-minute video. |
| Translation | **Hand-curated string catalogue**, not machine translation | Agricultural terms mistranslate badly and a wrong dosage instruction is worse than English. Native speakers on the team verify each string. |
| Hosting | Vercel/Netlify (static) + Render/Railway (API) + Neon (Postgres) | All free tiers, all deploy from a Git push. |

**Indic language set for the internal round:** English, Hindi, Marathi, Bengali, Tamil, Telugu.
Gujarati, Kannada, Malayalam and Odia slot into the same catalogue with no code change — adding
them is a translation task, not an engineering one. Ship six verified rather than ten guessed.

---

## 4. Data & Database Design

Nine tables. Simulated data is explicitly sanctioned by the problem statement, so every table
ships with seeded district-level sample rows.

```
district(id, name, state, lat, lon, normal_rainfall_mm, kharif_start, rabi_start)
farmer(id, name, phone, language, district_id, household_size, annual_income, created_at)
farm(id, farmer_id, area_acres, soil_type, irrigation_type, lat, lon)
crop_cycle(id, farm_id, crop, variety, sown_on, growth_stage, expected_harvest)
weather_record(id, district_id, date, rainfall_mm, temp_max_c, temp_min_c, humidity_pct, forecast_7d JSONB)
mandi(id, name, district_id, lat, lon, distance_km_from, operating_days)
price_record(id, mandi_id, crop, date, modal_price_per_qtl, min_price, max_price)
loan(id, farmer_id, lender_type, principal, outstanding, due_date, interest_rate)
risk_assessment(id, farmer_id, scored_at, score, band, contributions JSONB, officer_id, status)
advisory(id, crop_cycle_id, issued_at, severity, message_key, params JSONB, acknowledged_at)
```

**Simulated vs live:** weather, prices, loans and farmer records are simulated for the internal
round. `weather_record` and `price_record` are the two tables designed to be swapped for live
feeds later — OpenWeatherMap and Agmarknet respectively — because only their loaders change,
not their consumers.

**Data flow:** loaders write `weather_record`/`price_record` → advisory engine reads
weather + crop_cycle + farm → writes `advisory` → distress engine reads weather + price + loan
+ crop_cycle → writes `risk_assessment` → `alerts/` routes HIGH and CRITICAL to the officer
covering that district.

**Storing `contributions` as JSONB is deliberate:** the explanation is part of the record, so an
officer reviewing a three-week-old flag sees the reasoning that existed at scoring time, not a
recomputation against today's data.

---

## 5. Advisory Engine

**Inputs:** crop + variety, growth stage, days since sowing, soil type, irrigation type,
last-7-day rainfall, 7-day forecast, temperature range, humidity.

**Rule-based, not ML.** With simulated data an ML model would learn our own seed generator.
Rules are auditable, an agronomy student on the team can verify them, and a judge can be walked
through one in fifteen seconds. Ordered rule set, each rule emitting
`{severity, message_key, params}`; the top three by severity render as cards.

Representative rules actually implemented:
- forecast rain ≥ 40 mm within 48 h **and** stage = flowering → hold off irrigation and spraying
- rainfall deficit > 40% vs normal **and** stage ∈ {vegetative, flowering} → protective irrigation
- humidity > 85% for 3 days **and** crop = rice → blast-risk scouting advisory
- temp_max > 38 °C **and** stage = grain-fill → early-morning irrigation, avoid midday spray
- harvest window ≤ 10 days **and** local price trending up → hold stock briefly, with the number

**Multilingual output is the reason rules emit keys, not sentences.** A rule returns
`("irrigation.hold", {mm: 45, hours: 48})`; the i18n layer renders it in the farmer's language;
the voice layer speaks that same rendered string. One rule, six languages, zero duplication —
and adding a language never touches engine code.

---

## 6. Distress-Risk Engine

Transparent weighted rule, 0–100. Weights sum to 1.0.

| Signal | Weight |
|---|---|
| Rainfall deviation from district normal | 0.30 |
| Market price crash vs 3-month average | 0.25 |
| Loan due-date proximity × burden ratio | 0.25 |
| Crop stage vulnerability under current stress | 0.10 |
| Prior distress history | 0.10 |

**Bands:** LOW 0–29 · MEDIUM 30–54 · HIGH 55–74 · CRITICAL 75–100.

**Escalation override — this is our headline innovation.** If any two signals independently
score ≥ 80, the result is forced to at least HIGH regardless of the weighted total. Rainfall can
be perfectly normal and the farmer still be in a compound crisis: tomato collapsing from ₹1,600
to ₹260 a quintal *while* a moneylender instalment falls due inside two weeks scores 47 on the
weighted total — MEDIUM, filed as routine — because three calm signals dilute two near-maximal
ones. Naming this failure mode of naive scoring, and fixing it, is the most defensible technical
point we have. Seed farmer Mohan Barela is exactly this case; see §11.

**Explainability:** every score returns a ranked `contributions[]` — signal, raw value,
normalised value, weight, points contributed, and a plain-language reason. The officer UI never
shows a bare number. The farmer UI never shows the band at all; farmers get actionable advice,
because labelling a human being "CRITICAL" to their face is both useless and cruel.

---

## 7. Mandi Comparison

Price alone is the wrong answer and saying so is a differentiator. We rank by **estimated net
revenue**:

```
net = (modal_price_per_qtl × quintals) − (distance_km × 2 × freight_per_km) − mandi_fee
```

Round trip, so `× 2`. The farmer sees, per mandi: modal price, distance, estimated transport
cost, **net take-home**, 7-day price trend arrow, and operating days — with the highest *net*
option highlighted even when it is not the highest *price*. The demo deliberately includes a
mandi that pays the best price but loses on freight; that single comparison communicates the
whole idea faster than any slide.

---

## 8. Frontend / UI

**Farmer screens (5):** language picker → home (advisory + weather + risk-free nudge) →
advisory detail (with Listen) → mandi comparison → my officer / help.
**Officer screens (3):** district triage board → farmer risk detail (ranked contributions) →
action log.

**Low-bandwidth and low-literacy rules, enforced:**
- No image assets at all. Hand-authored inline SVG icons, CSS gradients, system fonts.
- Minimum 44 px touch targets; base font 17 px; nothing critical below 15 px.
- Every advisory has a Listen button — the app must be usable by someone who cannot read.
- Colour never carries meaning alone; every risk state pairs colour with an icon and a word.
- Static shell renders without JavaScript; JS adds interactivity, it is not required to see content.

**Visual system:** field green + harvest amber + sky blue on pale blue-grey paper, taken from the
six palettes in `assets/images/`. Farmer surfaces are warm paper and green; officer surfaces are
slate teal and data-dense, so the two audiences are distinguishable at a glance.
**No AI-generated imagery anywhere**, per the project's negative constraints.

---

## 9. API & Integration

REST, JSON, `/api/v1`. Agreed before either side starts so frontend and backend can be built
against the same contract in parallel.

```
POST /api/v1/auth/otp/request        {phone}
POST /api/v1/auth/otp/verify         {phone, otp}            → {token, role}
GET  /api/v1/farmers/{id}                                    → farmer + farms + crop_cycles
GET  /api/v1/farmers/{id}/advisory?lang=mr                   → [{severity, title, body, params}]
GET  /api/v1/farmers/{id}/risk                               → {score, band, contributions[]}
GET  /api/v1/mandis?crop=cotton&farm_id=…&quintals=20        → [{mandi, price, distance_km, transport_cost, net_revenue, trend}]
GET  /api/v1/weather?district_id=…                           → {current, forecast_7d[]}
GET  /api/v1/officers/{id}/caseload?band=HIGH,CRITICAL       → [{farmer, score, band, top_reason}]
POST /api/v1/officers/{id}/actions   {farmer_id, action, note}
```

Every response is `{"data": …, "meta": {…}}`; every error is
`{"error": {"code": "...", "message": "..."}}`. No exceptions — one shape means one error handler.

**How six people avoid blocking each other:** the contract above is frozen first and committed as
`docs/api-contract.md`. Frontend develops against `assets/js/data.js` (the same shapes, seeded
locally), so the UI is fully functional before the API exists and switching to live endpoints is
a one-line base-URL change. Engines are pure functions with unit tests, so engine authors never
need the UI or the DB running.

---

## 10. Team & GitHub Workflow

Six members, paired so nobody is a single point of failure:

| # | Owner | Scope |
|---|---|---|
| 1 | Frontend lead | farmer app shell, design system, accessibility |
| 2 | Frontend + i18n | officer dashboard, string catalogue, voice layer |
| 3 | Backend lead | FastAPI skeleton, auth, deployment |
| 4 | Data + DB | schema, migrations, seed generator, loaders |
| 5 | Advisory engine | rules, agronomy validation, tests |
| 6 | Distress + mandi | scorer, override logic, net-revenue math, tests |

**Branching:** trunk-based off `main`, short-lived `feat/<area>-<slug>` branches, squash-merge via
PR, minimum one review, `main` always demoable. No long-running `develop` — a week is too short
for a second integration branch to pay for itself.

**Process:** every task is a GitHub Issue with an owner and a label matching the table above.
PR template requires "what changed / how I tested / screenshot". Branch protection on `main`.
A 15-minute standup at day start and a hard integration freeze 12 hours before submission.

**Build order (dependency-correct):** frozen API contract + seed data → farmer UI against seed
data, in parallel with engines as pure functions → officer dashboard → FastAPI wiring →
deploy → record demo. Nothing waits on the backend.

---

## 11. Demo Strategy

**3-minute script:** 0:00 the problem in one line · 0:20 farmer opens the app in Marathi, hears
the advisory spoken · 0:50 mandi comparison reveals the higher-price mandi is the worse deal ·
1:20 cut to the officer dashboard, Lakshmi Rao sitting at CRITICAL · 1:45 open her and walk the
ranked reasons · 2:15 select Mohan Barela — weighted total 47, band HIGH — and read the override
banner aloud; that is the innovation · 2:40 architecture card and stretch roadmap.

**Sample farmers, purpose-built to hit each band.** Scores below are the values the shipped
engine actually returns for the seed data — verified in-browser, not estimates:
- *Sunita Patil*, Nashik, onion — **1 / LOW** (rainfall near normal, price stable, no near-due loan)
- *Ramesh Yadav*, Yavatmal, cotton — **32 / MEDIUM** (mild deficit, soft prices, loan 60 days out)
- *Anil Deshmukh*, Beed, soybean — **67 / HIGH** (deficit plus price drop plus 2 prior flags)
- *Lakshmi Rao*, Warangal, chilli — **95 / CRITICAL** (severe deficit, price collapse, loan imminent,
  3 prior flags — she reaches CRITICAL on the weighted total alone; the override is not needed here)
- *Mohan Barela*, Nashik, tomato — **47 weighted → HIGH by override** (rainfall normal, but price
  signal 100 and loan signal 88 both clear the 80 threshold)

**Mohan is the case to linger on.** His weighted total of 47 reads as MEDIUM, so a plain weighted
average would have filed him as routine. Two independent signals are near-maximal — tomato collapsed
from ₹1,600 to ₹260 a quintal while a moneylender instalment falls due in 12 days — and the override
raises him to HIGH. That is the compound crisis an averaging model structurally cannot see, and the
officer dashboard prints the arithmetic that produced it.

**Highlight:** the explainable compound-risk override plus voice-first regional delivery. Not
"we integrated an API".

---

## 12. Final Decisions — Checklist

| Artifact | Status |
|---|---|
| MVP scope | ✅ §1 — three must-haves, stretch goals fenced off |
| Tech stack | ✅ §3 |
| Architecture | ✅ §2 — modular monolith, pure-function engines |
| Database structure | ✅ §4 — 9 tables, seeded |
| Core algorithms | ✅ §5 rules, §6 weights + bands + override, §7 net revenue |
| API structure | ✅ §9 — frozen contract, uniform envelope |
| Responsibilities | ✅ §10 |
| GitHub workflow | ✅ §10 — trunk-based, PR-reviewed |
| Development order | ✅ §10 — contract-first, nothing blocks on backend |

**Open item requiring the team, not a decision I can make:** the Miro board referenced as both a
positive reference and a negative anti-pattern is auth-gated and unreadable. Export it to PDF or
PNG into `assets/` before anyone claims the UI is aligned with it.
