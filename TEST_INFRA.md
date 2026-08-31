# E2E Test Infra: Kisan Saathi Precision Agronomy

## Test Philosophy
- Opaque-box and requirement-driven testing.
- Verification across 5 target languages (Hindi, Marathi, Bengali, Tamil, Telugu) + English reference.
- Direct DOM inspection and browser validation.

## Feature Inventory & Test Matrix
| # | Feature | Requirement | Tier 1 (Unit/Feature) | Tier 2 (Boundary/Corner) | Tier 3 (Cross-Feature) | Tier 4 (Browser E2E) |
|---|---------|-------------|:---------------------:|:------------------------:|:----------------------:|:--------------------:|
| 1 | Distress Risk UI | R1 | 5 | 5 | ✓ | ✓ |
| 2 | Loan Schedule UI | R1 | 5 | 5 | ✓ | ✓ |
| 3 | Government Schemes & URLs | R1, R2 | 5 | 5 | ✓ | ✓ |
| 4 | Setup Wizard Dropdown Localization | R3 | 5 | 5 | ✓ | ✓ |
| 5 | Tomorrow's Action Plan Keys | R3 | 5 | 5 | ✓ | ✓ |
| 6 | Telemetry & Spray Window Keys | R3 | 5 | 5 | ✓ | ✓ |
| 7 | Mandi Table Localization | R3 | 5 | 5 | ✓ | ✓ |
| 8 | 5-Language Dictionary Completeness | R4 | 5 | 5 | ✓ | ✓ |
| 9 | Dynamic Parameter Interpolation | R4 | 5 | 5 | ✓ | ✓ |

## Test Architecture
- **Automated Test Scripts**: Node.js test runners validating:
  - 100% key parity across `en`, `hi`, `mr`, `bn`, `ta`, `te` in `i18n.js` with zero fallback tokens.
  - Parameter token validation (`{param}` syntax balance across translations).
  - Distress risk and loan schedule mathematical calculations.
  - Official `.gov.in` URL resolution and HTTP status checks.
- **Browser Automation Verification**:
  - Launching local HTTP server and using Chrome browser subagent / MCP to load the dashboard in Hindi (`hi`) and Bengali (`bn`).
  - Expanding wizard dropdowns and inspecting DOM text content.
  - Confirming no raw English text remains in rendered telemetry, advisory, mandi, distress, loan schedule, or government scheme cards.
