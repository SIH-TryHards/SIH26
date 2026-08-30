# E2E Test Infra: Kisan Saathi Precision Agronomy

## Test Philosophy
- Opaque-box, requirement-driven, zero-lockup architecture.
- Full verification of calculation engines, API telemetry handling, simulated fallback, and UI DOM hydration without browser automation hangs.
- Strict Zero-Emoji compliance verification across all files and UI components.

## Feature Inventory & Test Mapping
| # | Feature | Source | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|--------|:------:|:------:|:------:|:------:|
| 1 | Live Open-Meteo Telemetry (11 current, 5 hourly, 4 daily params) | ORIGINAL_REQUEST §1 | 5 | 5 | ✓ | ✓ |
| 2 | Simulated Weather Fallback Parity | Codebase Survey | 5 | 5 | ✓ | ✓ |
| 3 | Soil Hydrology Conversion (% VWC & 5 Tiers) | Spec Miner §1 | 5 | 5 | ✓ | ✓ |
| 4 | FAO-56 ET0 & Crop Water Demand ($ET_c$) | Spec Miner §1 | 5 | 5 | ✓ | ✓ |
| 5 | 12-Crop Phenology Timeline & Stage Engine | ORIGINAL_REQUEST §2 | 5 | 5 | ✓ | ✓ |
| 6 | Microclimatic Spray Window Evaluator | ORIGINAL_REQUEST §3 | 5 | 5 | ✓ | ✓ |
| 7 | Tomorrow's Action Plan Generator | ORIGINAL_REQUEST §3 | 5 | 5 | ✓ | ✓ |
| 8 | UI Rendering, SVG Icons & Zero-Emoji Mandate | Strict Rule & Survey | 5 | 5 | ✓ | ✓ |

## Test Architecture
- Test runner: `tests/test_runner.js` executed via Node.js v24.13.0 (`"C:\Program Files\Adobe\Adobe Creative Cloud Experience\libs\node.exe" tests/test_runner.js`).
- Assertions: Custom BDD framework (`describe`, `test`, `it`, `expect`, `isCloseTo`, `isAtLeast`, `isAtMost`, `includes`, `deepEqual`).
- Zero-Emoji Auditor: `tests/zero_emoji_audit.test.js` regex scanner scanning HTML, JS, CSS, JSON for emoji characters.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Kharif Cotton Lifecycle (Sowing to Harvest, High Wind & Rain Management) | F1, F3, F4, F5, F6, F7, F8 | High |
| 2 | Rabi Wheat with Frost Risk & Peak Flowering Evaporative Demand | F1, F2, F3, F4, F5, F6, F7 | High |
| 3 | Drip-Irrigated Tomato in Vegetative Growth under Heatwave | F1, F3, F4, F5, F6, F7, F8 | High |
| 4 | Monsoon Paddy under Heavy Precipitation & Soil Waterlogging | F1, F3, F4, F5, F6, F7 | High |
| 5 | Sugarcane Multi-Month Maturation & Canopy Water Deficit | F1, F4, F5, F7 | Medium |
| 6 | Offline / Simulated Farmer Demo Mode with Dynamic Profile Switching | F2, F3, F4, F5, F6, F7, F8 | High |

## Coverage Thresholds
- Tier 1: >=40 test cases (>=5 per feature across 8 features).
- Tier 2: >=40 boundary cases (physical limits, missing telemetry, extreme delta T, edge sowing dates).
- Tier 3: >=10 pairwise cross-feature combination scenarios.
- Tier 4: >=6 full real-world agricultural scenarios.
- Tier 5 & Compliance: Adversarial fuzzing + repository-wide zero-emoji audit.
