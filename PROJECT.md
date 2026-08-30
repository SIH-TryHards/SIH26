# Project: Kisan Saathi Precision Agronomy

## Architecture
- **Platform**: Vanilla JavaScript (ES Modules), HTML5, CSS3 Single-Page Application (SPA).
- **Core Modules & Boundaries**:
  - `assets/js/services/weather.js`: Live Open-Meteo telemetry fetcher with complete precision agronomy parameters.
  - `assets/js/services/simWeather.js`: Offline & simulated telemetry generator with full schema parity.
  - `assets/js/advisory.js`: Pure mathematical & agronomic calculation engines (12-crop phenology, FAO-56 evapotranspiration/crop water demand, soil hydrology classification, multi-variable spray window feasibility, and Tomorrow's Action Plan).
  - `assets/js/icons.js`: Semantic, vector SVG icons replacing all emojis.
  - `assets/css/app.css`: HSL tokenized design system styles for agronomy telemetry grids, phenology progress tracker, spray advisory cards, and action plan checklist.
  - `index.html`: Semantic DOM mounting points (`#cropPhenologySection`, `#agronomyTelemetrySection`, `#sprayWindowSection`, `#tomorrowActionPlanSection`).
  - `assets/js/farmer.js`: Dashboard controller hydrating data, rendering components, and updating real-time DOM states.
  - `assets/js/repository/demoRepository.js` & `assets/js/i18n.js`: Clean repository profiles and localization with strict zero-emoji compliance.
  - `tests/`: 4-Tier test suite and zero-emoji compliance audit harness.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Live Open-Meteo Telemetry Expansion | Query current (temp, humidity, apparent temp, UV index, surface pressure, cloud cover, wind speed/dir, precip), hourly soil moisture (0-1cm, 1-3cm, 3-9cm, 9-27cm), daily (ET0 FAO, UV max, temp max/min, precip sum). | M1 | ORIGINAL_REQUEST §1 |
| 2 | Simulated Weather Parity | Full schema parity in `simWeather.js` for offline & demo modes. | M1 | Codebase Survey |
| 3 | Soil Hydrology Conversion Engine | Convert $m^3/m^3$ to % VWC and classify into 5 hydration tiers (Saturated, Optimal, Adequate, Depleted, Stress). | M1 | Spec Miner §1 |
| 4 | FAO-56 ET0 & Crop Water Demand ($ET_c$) | Calculate daily $ET_c = ET_0 \times K_c$ and Acreage volumetric demand in Liters/Acre. | M1 | Spec Miner §1 |
| 5 | 12-Crop Phenology Model Engine | Lifecycle stages, DAS thresholds, progress percentage, days in stage, expected harvest date for 12 crops. | M1 | ORIGINAL_REQUEST §2, Spec Miner §2 |
| 6 | Microclimatic Spray Window Evaluator | Multi-variable decision algorithm evaluating wind speed, inversion, drift, rainfastness, Delta T, and temp. | M1 | ORIGINAL_REQUEST §3, Spec Miner §3 |
| 7 | Tomorrow's Action Plan Generator | Generates weather synopsis, operational stage priority, context-aware irrigation directive, and 3-point field checklist. | M1 | ORIGINAL_REQUEST §3, Spec Miner §3 |
| 8 | Semantic DOM Mounting & HTML Layout | Restructure `#viewHome` with dedicated semantic containers. | M2 | Codebase Survey |
| 9 | Precision Agronomy CSS Design System | Responsive card grids, gauge badges, phenology stepper timeline, spray radar card, and action plan layout in `app.css`. | M2 | Codebase Survey |
| 10 | SVG Icon Library Integration | Implement hand-authored, accessible SVG icons in `icons.js` for all agronomy metrics. | M2 | Strict Rule |
| 11 | Dashboard UI Controller & Hydration | Render real-time telemetry cards, phenology timeline, spray card, and action plan in `farmer.js`. | M2 | ORIGINAL_REQUEST §1, 2, 3 |
| 12 | Zero-Emoji Repository & UI Hardening | Eradicate all emojis from `index.html`, `farmer.js`, `i18n.js`, `demoRepository.js`, and test files. | M2 | Strict Rule |
| 13 | 4-Tier Opaque-Box E2E Testing Suite | Author comprehensive test suite in `tests/` across Tiers 1-4 + Tier 5 Adversarial & Zero-Emoji audit. | E2E-Track | E2E Testing Track |
| 14 | 100% E2E Verification & Audit Gate | Execute all tests, verify 100% pass, run Challenger verification and Forensic Auditor clean check. | M3 | Project Pattern §Dual Track |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E-Track | E2E Test Suite Creation | Build test harness and 4-tier test cases in `tests/`, produce `TEST_READY.md` | Survey | DONE |
| M1 | Data & Agronomy Engines | Implement telemetry query, simulated parity, hydrology conversions, 12-crop phenology, spray evaluator, tomorrow action plan in `weather.js`, `simWeather.js`, `advisory.js` | Survey | DONE |
| M2 | UI Components, Styling & Zero-Emoji Hardening | Build DOM structure, CSS styling, SVG icons, dashboard controller rendering, and clean repo emojis | M1 | DONE |
| M3 | E2E Integration, Verification & Audit Gate | Execute test suite against complete system, adversarial challenge, and forensic audit | M1, M2, E2E-Track | DONE |
| M4 | i18n Polish & Full Wiring (Aug 31) | Rewrite all 385 English strings for farmer-friendly plain language (FAO/ICAR-verified terms, grade-6 reading level), add 20+ new keys for phenology/telemetry/spray/tomorrow/distress/loan tables, wire every hard-coded label in `farmer.js` via `t()`, fix missing severity.watch and mandi/loan table headers | M2 | DONE |

## Interface Contracts
### `assets/js/services/weather.js` ↔ `assets/js/farmer.js`
- `fetchAgriWeather(lat, lon)`: Returns Promise resolving to:
  ```javascript
  {
    current: {
      temperature: Number,
      apparentTemperature: Number,
      humidity: Number,
      windSpeed: Number,
      windDirection: Number,
      precipitation: Number,
      cloudCover: Number,
      surfacePressure: Number,
      uvIndex: Number,
      weatherCode: Number
    },
    soil: {
      currentMoistureVwc: Number, // percentage (0-100)
      topsoilMoistureVwc: Number,
      subsoilMoistureVwc: Number,
      deepMoistureVwc: Number,
      soilTemp: Number,
      hydrationStatus: String, // 'saturated'|'optimal'|'adequate'|'depleted'|'stress'
      hydrationLabel: String
    },
    daily: {
      et0: Number, // mm/day
      tempMax: Number,
      tempMin: Number,
      precipSum: Number,
      uvIndexMax: Number,
      windSpeedMax: Number
    },
    forecast: Array // 7-day daily forecast objects
  }
  ```

### `assets/js/advisory.js` Pure Functions
- `calculateCropPhenology(cropType, sowingDate, currentDate)`:
  - Returns: `{ crop, sowingDate, daysElapsed, totalDuration, stageIndex, stageKey, stageName, progressPct, daysInStage, stageDuration, expectedHarvestDate, kc, gddAccrued }`
- `evaluateSprayWindow(currentWeather, hourlyForecast)`:
  - Returns: `{ status: 'optimal'|'caution'|'unsafe', score: Number, reason: String, deltaT: Number, recommendedSlots: Array, constraints: Object }`
- `buildTomorrowActionPlan(profile, tomorrowWeather, phenologyStage, soilHydration)`:
  - Returns: `{ synopsis: String, operationalPriority: String, irrigationDirective: { action: 'APPLY'|'SUSPEND'|'POSTPONE'|'CONSERVE'|'DRAIN', quantityLitersPerAcre: Number, rationale: String }, checklist: Array<String> }`

## Code Layout
- Implementation Files:
  - `assets/js/services/weather.js`
  - `assets/js/services/simWeather.js`
  - `assets/js/advisory.js`
  - `assets/js/icons.js`
  - `assets/js/farmer.js`
  - `assets/js/i18n.js`
  - `assets/js/repository/demoRepository.js`
  - `assets/css/app.css`
  - `index.html`
- Test Files:
  - `tests/test_runner.js`
  - `tests/tier1_features.test.js`
  - `tests/tier2_boundary.test.js`
  - `tests/tier3_combinations.test.js`
  - `tests/tier4_real_world.test.js`
  - `tests/tier5_adversarial.test.js`
  - `tests/zero_emoji_audit.test.js`
