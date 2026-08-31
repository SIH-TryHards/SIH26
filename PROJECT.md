# Project: Kisan Saathi UI Restoration & 5-Language I18N Localization

## Architecture
- **Frontend Stack**: Vanilla HTML5, Tailwind CSS, JavaScript (ES6 Modules).
- **Core Modules**:
  - `index.html`: Main single-page application shell containing dashboard views, setup wizard, telemetry, distress planner, loan calculator, and government schemes.
  - `assets/js/i18n.js`: Centralized internationalization dictionary and translation engine (`t(key, params)`, `setLanguage(lang)`, event dispatching).
  - `assets/js/farmer.js`: Main UI controller handling profile state, language binding (`applyCopy`), telemetry cards, spray windows, phenology, distress risk monitor, and loan schedule.
  - `assets/js/advisory.js`: Agronomic decision engine generating tomorrow's action plan, spray window safety status, and crop stage advisory with dynamic translation keys.
  - `assets/js/services/simPrices.js` & `assets/js/mandi.js`: Mandi price simulation, arrival trends, and APMC intelligence.
  - `assets/js/loan.js`: Reducing balance loan EMI calculator, distress index computations, and installment scheduling.
  - `assets/js/data.js` & `assets/js/data/locations.js`: Crop phenology baselines, soil types, irrigation methods, government scheme metadata, and district mappings.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Distress Risk Planner UI | 3-factor distress risk score card (rain, price, loan due proximity), slider simulator, high distress warning banner (>80), root-cause analysis list, emergency helpline buttons. | M1 | R1 |
| 2 | Loan Schedule & Calculator UI | 2-column loan calculator with preset quick-fill buttons (₹50K, 1 Year, 4% KCC), repayment summary card, countdown urgency badge, and 1st-of-month installment schedule table. | M1 | R1 |
| 3 | Government Relief Schemes & Real URLs | Dynamic card rendering for 6 official schemes (PM-Kisan, PMFBY, SMAM, KCC/Kisan Rin Portal, PMKSY, e-NAM) with verified `.gov.in` URLs and duplicate static block cleanup. | M1 | R1, R2 |
| 4 | Setup Wizard Dropdown Localization | Translation of States, Districts, Soil types, Irrigation methods, and Crop options when opened/rendered in any selected language. | M2 | R3 |
| 5 | Tomorrow's Action Plan Dynamic Keys | Refactoring `advisory.js` to emit translation keys and structured parameters for titles, synopsis, directives, and 3-point checklists. | M2 | R3 |
| 6 | Live Telemetry & Safe-to-Spray Localization | Dynamic translation keys for 9 telemetry cards, compass directions, units, and 10 spray precedence reason strings. | M2 | R3 |
| 7 | Mandi Intelligence Table Localization | Translation keys for APMC Mandi table headers, arrival varieties, operating days, and price trend statuses in `simPrices.js` and `mandi.js`. | M2 | R3 |
| 8 | Restored Components String Extraction | Translation keys for distress planner, loan calculator, payment checklist, and government scheme cards. | M2 | R3 |
| 9 | 5-Language Dictionary Completion | Complete, high-quality translation dictionaries in `assets/js/i18n.js` for Hindi (`hi`), Marathi (`mr`), Bengali (`bn`), Tamil (`ta`), and Telugu (`te`) replacing all raw English placeholders. | M3 | R4 |
| 10 | Parameter Interpolation Standard | Standardized `{param}` token replacement across all 5 languages ensuring numbers, crop names, and metrics interpolate cleanly without syntax errors. | M3 | R4 |
| 11 | E2E & Browser Visual Verification | Multi-tier test verification and automated browser inspection (Hindi, Bengali, Marathi, Tamil, Telugu) verifying DOM translation completeness, dropdowns, and `.gov.in` link destinations. | M4 | AC |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: UI Components & Real URLs | Restore Distress Planner, Loan Schedule, dynamic Government Schemes with real `.gov.in` URLs; remove duplicate static markup in `index.html`. | none | DONE |
| 2 | M2: String Extraction & Engine Refactor | Refactor `advisory.js`, `farmer.js`, `simPrices.js`, `loan.js`, and `data.js` to emit translation keys with `{param}` interpolation; replace hardcoded English strings. | M1 | IN_PROGRESS |
| 3 | M3: 5-Language Translation Dictionary | Populate complete Hindi, Marathi, Bengali, Tamil, Telugu dictionaries in `assets/js/i18n.js` with zero English fallbacks. | M2 | PLANNED |
| 4 | M4: Final Browser & Visual Verification | Run automated test suites, Chrome browser tests across languages, verify dropdowns, check official links, and pass integrity audit. | M3 | PLANNED |

## Interface Contracts
### `i18n.js` ↔ `farmer.js`, `advisory.js`, `loan.js`
- `t(key, params)`: Takes string key (e.g. `'advisory.spray.wind_high'`) and optional params object `{ speed: 18 }`. Returns localized string. If key missing, returns fallback English or key.
- `setLanguage(lang)`: Sets current language in state and `localStorage`, updates DOM elements with `data-i18n`, and dispatches `'languageChanged'` custom event.

### `advisory.js` ↔ `farmer.js`
- `evaluateSprayWindow(weather)`: Returns object `{ status: 'SAFE'|'CAUTION'|'UNSAFE', reasonKey: string, reasonParams: object }`.
- `buildTomorrowActionPlan(profile, weather, phenology)`: Returns object `{ stageKey: string, synopsisKey: string, synopsisParams: object, directiveKey: string, directiveParams: object, checklist: Array<{ itemKey: string, itemParams: object }> }`.

### `loan.js` ↔ `farmer.js`
- `calculateDistressScore(rainForecastMm, mandiPrice, mspPrice, daysUntilDue)`: Returns `{ score: number, level: string, breakdown: Array<{ factorKey: string, impact: string, noteKey: string, noteParams: object }> }`.
- `generateLoanSchedule(principal, rate, tenureMonths, startDate)`: Returns `{ monthlyEmi: number, totalInterest: number, totalPayable: number, installments: Array<{ number: number, dueDate: string, principal: number, interest: number, remaining: number, statusKey: string }> }`.

## Code Layout
- `index.html`: UI Shell & View containers
- `assets/js/i18n.js`: Localization dictionary & helper
- `assets/js/farmer.js`: Dashboard & Profile coordinator
- `assets/js/advisory.js`: Agronomic decision rules
- `assets/js/loan.js`: Loan & distress algorithms
- `assets/js/services/simPrices.js`: Price simulation
- `assets/js/data.js`: Agronomic baseline constants & government schemes data
