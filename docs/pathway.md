# Complete Pathway — Every Person, Every Screen, Start to Finish

One map for the whole product: how a **farmer** and an **officer** each travel from
tapping the site link to doing their work, including every loop-back, exit and edge case.

Design rules that hold everywhere:
1. **Language first** — nothing asks a question before the app knows which language to ask it in.
2. **Auth last** — value is shown before identity is demanded; onboarding happens before login.
3. **Two doors, one gate** — one auth page with two clearly separated sections (Farmer / Officer).
4. **Farmers never see risk scores** — only officers do; farmers get actionable advice.
5. Every step works on a basic smartphone, on 2G; back-navigation never loses input.

---

## PRODUCT CONTRACT v1 — What We Are Building

This is the product definition that must be agreed before adding more screens or database
tables. It is the source of truth for the MVP. Anything outside this contract is either a
future feature or a separate product and must not silently enter the hackathon build.

### End product

**Kisan Saathi is a multilingual, low-bandwidth web platform with two role-specific
experiences:**

1. **Farmer application:** a farmer creates or reopens a farm profile, receives crop- and
   location-specific advisory in a selected Indian language, listens to the advice, compares
   nearby mandis by estimated net revenue, and contacts the assigned agricultural officer.
2. **Officer dashboard:** an authorised agricultural officer sees only their jurisdiction,
   reviews explainable HIGH/CRITICAL distress cases, sees why each case was flagged, and records
   calls, visits, referrals, or review outcomes.
3. **Decision services behind both experiences:** deterministic demo data now, replaceable
   weather and market providers later, advisory rules, distress-risk scoring, notification
   routing, and an auditable data layer.

### What the finished MVP must prove

The product is considered complete only when this whole chain works:

- A farmer chooses a language before being asked a question.
- The farmer enters location, land, and crop information without technical knowledge.
- The farmer verifies a phone number and gets a persistent farmer account.
- The account opens a simple home screen showing today's advisory, the next seven days of weather,
  and a clear action the farmer can take.
- The same advisory can be read and played as speech in the selected language.
- The farmer can compare mandis using price, distance, transport cost, and estimated net return.
- A farmer can call the assigned officer or submit a visit request.
- The risk engine (server-side in connected mode, in-browser pure function in demo
  mode) flags a case for the officer without exposing the score or band to the farmer.
- The officer can inspect the ranked reasons for a flag and record a follow-up action.
- The demo still works with deterministic seeded data when external APIs or the network are down.

### Explicitly outside the MVP

These are not account requirements and must not block the internal round:

- Aadhaar, PAN, bank-account, biometric, or document verification.
- Loan disbursement, repayment, insurance claims, or financial transactions.
- Direct government-scheme application submission.
- Open farmer-to-farmer social features or chat.
- Automatic agronomist diagnosis from uploaded photographs.
- Full offline synchronisation, live SMS/IVR, ML prediction, satellite imagery, and sensor ingest.

They may be recorded as roadmap items only after the MVP pathway is stable.

---

## ACCOUNT SETUP CONTRACT — Industry-Standard Identity Pathway

### 1. Separate identity from farm information

The product must not treat a phone number, a farm, and a crop as the same record. They have
different lifecycles and different ownership rules.

| Object | Meaning | Can change? | Primary owner |
|--------|---------|-------------|---------------|
| **Account** | Login identity and role | Phone recovery/status may change through a controlled flow | Platform |
| **Farmer profile** | Farmer name, language, contact and assigned officer | Yes, by the farmer or authorised officer | Farmer |
| **Farm** | Physical land, village, area, soil, irrigation, coordinates | Yes, with history where important | Farmer |
| **Crop cycle** | A crop planted on a farm for a season | Yes; old cycles remain historical | Farmer/system |
| **Officer profile** | Staff identity, district jurisdiction, status | Only by authorised admin | Organisation |
| **Session** | Short-lived authenticated browser session | Expires/revokes | Platform |

The farmer app reads a farmer profile with its active farm and active crop cycle. It never uses
the phone number as a farm ID, and it never lets the browser choose the owner of a record.

### 2. Account states

The account state must be explicit:

| State | Meaning | Allowed action |
|-------|---------|----------------|
| **Anonymous** | No verified identity; language and draft data may exist locally | Browse onboarding and guest demo only |
| **Draft** | Onboarding data is saved locally but no phone is verified | Continue, edit, discard, or start OTP verification |
| **Verification pending** | OTP was requested | Enter OTP, resend after cooldown, or cancel |
| **Active** | Phone verified and profile linked to account | Use farmer application and edit own profile |
| **Locked** | Too many OTP/authentication failures or administrative hold | Contact support; no repeated guessing |
| **Signed out** | No usable session remains in the browser | Start a new authenticated session |

The MVP may implement `Anonymous`, `Draft`, `Verification pending`, `Active`, and `Signed out`.
`Locked` must still exist in the API contract even if the demo only shows its error state.

### 3. Farmer account setup, step by step

1. **Language selection:** choose a language; save only the language preference locally.
2. **Farm draft:** collect state, district, village, land, irrigation, crop, variety, and sowing
   date. Store the draft locally under a versioned key. Do not create a server account yet.
3. **Review:** show every value in the selected language. The farmer can change one row without
   losing the rest of the draft.
4. **Account intent:** show exactly why verification is needed: to save the farm and let the
   assigned officer respond. Guest exploration remains available.
5. **Phone entry:** accept a 10-digit Indian mobile number, normalise it to `+91XXXXXXXXXX`, and
   never display the full number in the home greeting or officer list.
6. **OTP request:** create a short-lived challenge. Enforce expiry, resend cooldown, attempt
   limit, and rate limit. In demo mode, expose the fixed/stub code only in the demo UI.
7. **OTP verification:** verify the challenge server-side. Never accept a client-generated
   `verified=true` flag.
8. **Profile completion:** after successful verification, ask for the farmer's display name if
   it was not already collected. The language and reviewed farm draft are attached to the new
   farmer profile.
9. **Account creation or recovery:** if the phone is new, create one account. If it already
   exists, recover the existing account and show its saved farm instead of creating a duplicate.
10. **Session creation:** issue a session for role `farmer`, then redirect to the farmer home.
11. **Confirmation:** show a short success message and the farm summary. Do not show a risk score,
    risk band, internal IDs, or raw loan data to the farmer.

### 4. Returning farmer pathway

1. Open the site.
2. If the session is valid, open the farmer home directly in the saved language.
3. If the session expired, show the farmer login section with the phone number masked and request
   a fresh OTP. Do not repeat the full onboarding wizard.
4. If the farmer uses a new phone number, start a new account flow and never merge accounts
   automatically.
5. If the farmer has multiple farms, show a farm switcher only after the basic single-farm MVP is
   stable. The first release may support one active farm per farmer.

### 5. Officer account pathway

Officer accounts are provisioned by the organisation; officers do not self-register through the
farmer flow.

1. Officer chooses the Officer section of the shared auth gate.
2. Officer submits staff ID and password through the officer login endpoint.
3. The server verifies credentials and issues a session containing `role=officer` and a
   jurisdiction claim or server-side jurisdiction lookup.
4. The dashboard loads only the officer's assigned district caseload.
5. A farmer token cannot access officer endpoints. An officer cannot access another district by
   changing a URL parameter.
6. Logout revokes or discards the session and returns to the Officer login section.

Demo credentials may be seeded, but they must be clearly labelled as demo credentials and never
be reused as production secrets.

### 6. Canonical account records

The connected implementation should use these records. SQLite may be used locally, but the
relationships must remain the same when PostgreSQL is introduced.

```text
account
  id, role, phone_e164, status, created_at, updated_at, last_login_at

farmer_profile
  account_id, display_name, language_code, district_id, village_name,
  assigned_officer_id, created_at, updated_at

farm
  id, farmer_account_id, village_id, area_acres, soil_type,
  irrigation_type, latitude, longitude, is_active, created_at, updated_at

crop_cycle
  id, farm_id, crop_code, variety, sown_on, growth_stage,
  expected_harvest, status, created_at, updated_at

officer_profile
  account_id, staff_id, jurisdiction_id, display_name, status

otp_challenge
  id, account_id_or_phone, code_hash, expires_at, attempts,
  resend_available_at, consumed_at, created_at

session
  id, account_id, token_hash_or_jti, expires_at, revoked_at,
  created_at, last_seen_at

audit_event
  id, actor_account_id, event_type, subject_type, subject_id,
  request_id, metadata_json, created_at
```

The existing `draft_profile` in browser storage is only a temporary onboarding object. It is not
the account and must be cleared or marked attached after successful account setup.

### 7. Account API contract

The API must expose intent-specific endpoints instead of one unsafe "save everything" endpoint:

```text
POST /api/v1/auth/otp/request
POST /api/v1/auth/otp/verify
POST /api/v1/auth/officer/login
GET  /api/v1/auth/session
POST /api/v1/auth/logout

POST /api/v1/farmers/me/profile           # attach reviewed onboarding draft
GET  /api/v1/farmers/me                  # own profile + active farm summary
PATCH /api/v1/farmers/me                 # editable profile fields only
POST /api/v1/farmers/me/farms
PATCH /api/v1/farms/{farm_id}
POST /api/v1/farms/{farm_id}/crop-cycles
PATCH /api/v1/crop-cycles/{cycle_id}

GET  /api/v1/officers/me
GET  /api/v1/officers/me/caseload
```

Every protected endpoint must return `401` for no/expired session and `403` for the wrong role
or jurisdiction. Validation errors use `422`; rate limits use `429`; successful writes return
the saved resource and a request ID. The browser never decides which account ID is written.

*(These account endpoints complement the full REST table in PART 3 §6 — home feed,
acknowledgements, mandis, visit requests and officer actions live there; identity and
profile writes live here.)*

### 8. Privacy and security baseline

- Store phone numbers in normalised E.164 form and mask them in visible UI wherever possible.
- Use OTP only for farmer identity verification; do not store raw OTP codes.
- Hash officer passwords with a modern password-hashing library; never compare or store plaintext
  passwords in source code in connected mode.
- Use secure, HttpOnly, SameSite cookies for production sessions. `localStorage` tokens are demo
  mode only because browser scripts can read them.
- Do not place phone numbers, farm coordinates, loan details, or tokens in analytics or logs.
- Apply server-side ownership and jurisdiction checks to every read and write.
- Record login, logout, failed verification, profile change, visit request, and officer-action
  events in `audit_event` without storing secrets.
- Use HTTPS, strict CORS allow-listing, CSRF protection for cookie-based writes, and rate limits.
- Provide a clear account deletion/deactivation process in the connected roadmap, even if it is
  not exposed in the internal demo.

### 9. Account setup acceptance criteria

The account milestone is complete when:

- A first-time farmer can go from language selection to verified account without losing the draft.
- Refreshing during onboarding restores the same step and values.
- A wrong or expired OTP does not create an account.
- Re-verifying an existing phone recovers the existing farmer instead of duplicating it.
- Farmer and officer sessions are isolated on the same device.
- Farmer endpoints cannot expose risk fields.
- Officer endpoints enforce role and district on the server.
- Logout clears the local demo session and the connected session becomes unusable.
- The demo works with a deterministic OTP stub, while the API contract is ready for an SMS adapter.

---

## ACCOUNT SETUP UI SPECIFICATION v1 — Position, Content, Options, and States

This is the screen-level specification for S6. It is more specific than a wireframe: every
visible region, field, action, option, validation rule, and state has an owner. The screen must
feel like a trustworthy service used by a farmer, not a generic technology signup form.

### A. Shared account-shell layout

Every account screen uses the same three vertical zones.

| Position | Content | Behaviour |
|----------|---------|-----------|
| **Top bar** | Kisan Saathi mark and name on the left; language button on the right; Back button only when the step can safely go back | Brand and language controls remain stable. Back never deletes the draft. |
| **Main card** | Progress label, title, one-sentence explanation, fields, inline errors, and contextual help | One decision per screen. The card is narrow enough to read on a basic phone. |
| **Action area** | One primary action, optional secondary action, and a low-emphasis support/guest link | Primary action is full-width on mobile and remains reachable without scrolling through unrelated content. |

Implementation rules:

- Use a single-column layout up to 640 px; do not place two input fields side by side on a phone.
- Keep the content card to approximately 560–680 px on desktop and 16–20 px page padding on mobile.
- Use a visible progress label such as `Step 6 of 7`, not a progress bar alone.
- Keep primary actions at least 48 px high; language tiles remain at least 64 px high.
- Put labels above inputs, never use placeholder text as the only label.
- Keep error text directly below the field that needs correction.
- Preserve the selected language for every title, label, hint, validation message, and button.
- Use `autocomplete`, `inputmode`, `aria-describedby`, focus movement, and keyboard submission.
- Never display a raw JWT, internal account ID, database ID, risk score, or raw loan field.

### B. S6-F1 — Farmer account-intent screen

This is the first farmer account screen after S5 review. Its purpose is to explain the value of
an account before asking for a phone number.

**Top bar:**

- Left: Kisan Saathi logo and name.
- Right: selected language, for example `मराठी`, with a globe icon.
- Back: returns to S5 and keeps the complete reviewed draft.

**Main content, in this order:**

1. Progress: `Almost ready — Step 6 of 7`.
2. Title: `Save your farm profile`.
3. Explanation: `Verify your mobile number so we can save your farm and send advice in your language.`
4. Compact reviewed-summary card showing:
   - Village and district
   - Farm area and water source
   - Crop and sowing date
5. Benefits row, with icon plus text:
   - `Get today's crop advice`
   - `Hear advice in your language`
   - `Contact your agriculture officer`
6. Privacy note: `We use your number for secure sign-in and important farm support. We do not show it publicly.`
7. Required consent checkbox:
   - `I agree to the Terms of Use and Privacy Notice.`
   - Terms and Privacy Notice are text links that open lightweight, local content pages or an accessible modal.

**Primary option:**

- Button: `Continue with mobile number`.
- Disabled until the consent checkbox is selected.

**Secondary options:**

- `Change my farm details` → returns to the relevant S2–S4 form.
- `Explore without saving` → creates a guest session and opens the demo home.

The current MVP can combine this intent screen with the phone form in one card, but the copy,
summary, consent, and guest choice must remain visible. A phone field by itself is not a
professional account setup experience.

### C. S6-F2 — Farmer mobile-number screen

**Main content:**

1. Progress: `Step 6 of 7`.
2. Title: `What is your mobile number?`.
3. Hint: `We will send a one-time code to verify it.`
4. Fixed country selector: `🇮🇳 +91 India`.
5. Input label: `Mobile number`.
6. Input: ten digits, numeric keypad, `autocomplete="tel-national"`.
7. Example hint: `Example: 98765 43210`.
8. Security note: `You will not need to remember a password.`

**Options and actions:**

- Primary: `Send verification code`.
- Secondary: `Change number` only after the OTP state is open.
- Help link: `I do not have access to this number` → show a contact/support message; never bypass OTP.
- Guest: `Explore without saving`.

**Validation:**

- Remove spaces, dashes, and the optional `+91` prefix before validation.
- Accept only ten digits beginning with 6, 7, 8, or 9.
- Send `+91XXXXXXXXXX` to the backend; do not send a browser-created account ID.
- Show `Enter a valid 10-digit mobile number.` below the input.
- Do not clear a valid number after a network error.

### D. S6-F3 — Farmer OTP verification screen

**Main content:**

1. Progress: `Step 6 of 7`.
2. Title: `Enter the 6-digit code`.
3. Exact destination text: `We sent a code to +91 •••••• 447`.
4. Single logical OTP input with six visual slots or one six-digit field; accessibility must see it
   as one input with `autocomplete="one-time-code"`.
5. Countdown: `You can request a new code in 30 seconds.`
6. Demo-only note when running in demo mode: `Demo code: 000000`.

**Actions:**

- Primary: `Verify and save my profile`.
- Secondary: `Change mobile number` → clears OTP only, retains the farm draft.
- Tertiary: `Resend code` → disabled until cooldown ends.

**Verification states:**

| State | Visual content | Allowed action |
|-------|----------------|----------------|
| Waiting | Six empty slots, primary disabled until six digits | Enter code |
| Verifying | Button spinner and `Checking your code…` | No duplicate submission |
| Correct | Short success state; proceed to S6-P or S7 | Continue automatically only after a visible confirmation |
| Wrong | `That code did not match. Check it and try again.` | Correct code, within attempt limit |
| Expired | `This code has expired. Request a new code.` | Request new code |
| Too many attempts | `For your security, request a new code.` | Reset challenge; no guessing loop |
| Rate limited | `Please wait before requesting another code.` | Wait for server cooldown |
| Network error | `We could not reach the service. Your details are still on this device.` | Retry explicitly |

The server is the authority for expiry, attempt count, and verification. The browser must never
turn the screen into a success state based only on input shape.

### E. S6-P — Farmer profile-completion screen

This screen appears only for a new account or an existing account without a completed farmer
profile. It is the current `viewProfile` screen and should remain a separate state from OTP.

**Top bar:**

- Left: brand.
- Right: selected language.
- No destructive close button; the farmer can sign out, but an incomplete account must not be
  presented as a completed profile.

**Main content:**

1. Progress: `One last step`.
2. Title: `What should we call you?`.
3. Explanation: `Your name appears on your home screen and helps your officer recognise you.`
4. Label: `Your name`.
5. Input: display name, `autocomplete="name"`, maximum 80 characters.
6. Hint: `Example: Sunita Patil`.
7. Privacy note: `Your mobile number stays private.`
8. Optional non-blocking avatar: not part of MVP; do not request a photo or camera permission.

**Primary action:**

- `Save and open my farm`.

**Validation:**

- Required; trim leading/trailing whitespace.
- Reject empty, all-numeric, control-character, or excessively long values.
- Permit Indian names, spaces, hyphens, apostrophes, and native scripts.
- On success, attach the reviewed draft to the authenticated account and mark the draft
  `attached=true` only after the server/demo repository confirms the write.
- If the write fails, keep the name and draft visible and show an inline retry message.

### F. S6-C — Account-created confirmation

This confirmation is a short transitional state, not a separate dashboard.

**Content order:**

1. Success icon plus `Your farm profile is ready`.
2. `Welcome, {display_name}.`.
3. Read-only summary: village, crop, and current crop stage.
4. `Your first advisory is ready.`
5. Primary: `Open my farm`.
6. Secondary: `Review profile`.

The screen must never say only `Account created` because the farmer's goal is the saved farm and
the next useful action, not the identity record itself.

### G. S6-O — Officer sign-in screen

Officer sign-in remains a separate role path inside the shared gate, but it must not resemble a
farmer signup form.

**Main content:**

- Role selector: `Farmer` and `Agriculture officer`; the selected role is visually and
  programmatically exposed.
- Title: `Officer sign in`.
- Hint: `Use your department-issued staff credentials.`
- Label/input: `Staff ID`, text, `autocomplete="username"`.
- Label/input: `Password`, password type, show/hide control, `autocomplete="current-password"`.
- Primary: `Sign in to officer dashboard`.
- Secondary: `Forgot password? Contact your district administrator.`
- No public officer registration, no OTP farmer form, and no guest access to private cases.

**States:** empty, validating, invalid credentials, locked/disabled staff account, expired
session, and network unavailable. Each state stays inside the officer panel and never reveals
whether a staff ID exists.

### H. Shared options and content catalogue

These options must be centrally defined in `i18n.js`/configuration, not typed separately into
each screen:

| Option | MVP values |
|--------|------------|
| Farmer languages | English, हिंदी, मराठी, বাংলা, தமிழ், తెలుగు |
| Country | India (`+91`) fixed for the internal round |
| Account role | Farmer, Agriculture officer |
| Farmer verification | Mobile OTP; no farmer password |
| Officer verification | Staff ID + password |
| Consent | Terms of Use + Privacy Notice required before OTP |
| Guest mode | Browse sample advice without saving; no private case access |
| Support | Assigned officer contact and emergency/help text where configured |

Every visible string needs a stable key, for example:

```text
account.intent.title
account.intent.privacy
account.phone.label
account.phone.send_code
account.otp.title
account.otp.change_number
account.otp.resend
account.profile.name_label
account.profile.save
account.success.open_farm
account.error.invalid_phone
account.error.invalid_otp
account.error.expired_otp
account.error.rate_limited
account.error.network
```

### I. Account UI to data mapping

| UI item | Canonical field | Validation/source | Write timing |
|---------|-----------------|-------------------|--------------|
| Selected language | `language_code` | six supported locale codes | immediately local; profile write after verification |
| Mobile number | `account.phone_e164` | server normalisation and OTP verification | OTP request; account upsert on verify |
| Display name | `farmer_profile.display_name` | required, 1–80 characters | profile completion submit |
| State/district/village | profile/farm location fields | controlled options plus reviewed free-text village | draft first; attach after profile save |
| Land/soil/irrigation | `farm.*` | numeric/range and controlled options | draft first; attach after profile save |
| Crop/variety/sowing | `crop_cycle.*` | catalogue, text option, valid past date | draft first; attach after profile save |
| Terms acceptance | `consent_event` or audit event | required boolean with version | before OTP request |
| Session | `session` or secure cookie | server-created only | after successful auth |

### J. Professional account edge cases

- Back from phone to review: preserve all reviewed farm data and clear only the OTP challenge.
- Change phone during OTP: preserve draft, invalidate the old challenge, and start a new one.
- Refresh during OTP: restore the masked number and pending state without showing the code.
- Existing verified phone with incomplete profile: go to S6-P, not to a duplicate account.
- Existing verified phone with completed profile: go directly to S7.
- Same device switching farmer/officer: clear the previous role's local session before saving the
  new role session.
- Guest chooses Save: return them to account intent with the current demo draft still visible.
- Network fails after OTP verification but before profile attach: keep the authenticated session
  state locally as pending and offer `Retry save`; never show a false completed message.
- User leaves midway: draft expires or can be discarded according to a visible local-data policy;
  never silently send an unfinished profile to the server.

### K. Reference-image adjustment

The attached farmer-home reference is useful for its calm card layout, advisory hierarchy, and
weather strip. Its greeting displays the full phone number. The professional product contract
changes that content to:

```text
Namaste, Sunita Patil
gaeg · Anakapalli · Andhra Pradesh
```

If a display name is unavailable, use a masked fallback such as `Namaste, ••• 447`. Never show
the complete phone number in the farmer greeting, farmer profile header, officer list, screenshots,
logs, or demo recording.

### L. Account setup definition of done

The account UI is ready for implementation sign-off when a reviewer can verify all of the following:

1. The first screen clearly explains why account verification is requested.
2. The farmer can see and edit the reviewed farm summary before entering a phone number.
3. Consent, phone, OTP, display name, and account-created states are distinct and recoverable.
4. Every field has a visible label, translated helper text, validation, and a clear next action.
5. The role selector cannot accidentally submit farmer credentials to the officer endpoint or vice versa.
6. A returning farmer recovers their account without repeating onboarding.
7. Guest mode is clearly labelled and never claims that data was saved.
8. The screenshot/reference hierarchy is preserved while the full phone number is removed.
9. The same flow works in all six supported languages and on a 2G-sized mobile page.
10. The UI states match the backend response codes and the acceptance criteria in the account contract.

---

## FRAME A — The Master Map (everything at a glance)

```
                        [ SITE LINK TAPPED ]
                                 │
                    ┌────────────▼─────────────┐
                    │  S1 · LANGUAGE PICKER    │  English · हिंदी · मराठी · বাংলা · தமிழ் · తెలుగు
                    └────────────┬─────────────┘
                                 │  app re-renders in chosen language
                    ┌────────────▼─────────────┐
                    │  S2 · WHERE IS YOUR FARM?│  State → District → Village
                    ├──────────────────────────┤
                    │  S3 · YOUR LAND          │  area · soil · irrigation
                    ├──────────────────────────┤
                    │  S4 · YOUR CROP          │  crop · variety · sown-on (stage auto)
                    ├──────────────────────────┤
                    │  S5 · IS THIS RIGHT?     │  review card, per-row Change
                    └────────────┬─────────────┘
                                 ▼
                 ╔═══════════════════════════════╗
                 ║        S6 · AUTH GATE         ║      ← guest escape hatch:
                 ║  ┌────────────┬────────────┐  ║        "Explore without saving"
                 ║  │  FARMER    │  OFFICER   │  ║        jumps straight to S7 demo
                 ║  │ phone +OTP │ ID + pass  │  ║
                 ╚══╪════════════╪════════════╪══╝
                    │            │            │
      verify OTP    │            │  password check (role=officer)
                    ▼            │            │
   ┌─────────────────────────┐   │            │
   │ S6.5 · PROFILE DONE     │   │            │
   │ display name (if new)   │   │            │
   │ draft attached to acct  │   │            │
   │ (ACCOUNT SETUP CONTRACT │   │            │
   │  §3.8 — built later)    │   │            │
   └────────────┬────────────┘   │            │
                ▼                │            ▼
   ╔══════════════════════╗      │       ╔═══════════════════════╗
   ║   FARMER APP         ║      └──────▶║  OFFICER DASHBOARD    ║
   ║   S7 → S11           ║              ║  O1 → O7              ║
   ╚══════════════════════╝              ╚═══════════════════════╝
```

---

## PART 1 — FARMER PATHWAY

### FRAME B — Onboarding wizard (S1 → S5)

```
 S1 LANGUAGE       full-screen tiles ≥64px, native-script names, 🔊 reads each aloud,
                   globe icon lives here permanently (top-right, every later screen)
        │
        ▼
 S2 LOCATION       three cascading selects: State → Districts filter → Villages filter
        │          STRETCH: "Use my location" GPS pre-fill; village stays manual
        ▼
 S3 LAND           area_acres (numeric keypad) · soil type · irrigation source
        ▼
 S4 CROP           crop · variety · sowing date → growth stage + expected harvest
        │          are AUTO-DERIVED (never asked)
        ▼
 S5 REVIEW         plain-language read-back of every answer, [Change] per row,
        │          blocks until all rows filled
        ▼
        └──── draft_profile complete: {language, state, district, village,
              area_acres, soil_type, irrigation_type, crop, variety, sown_on}
```

### FRAME C — The Auth Gate (S6), two separated sections

```
                 ┌──────────────────────────────────────────────┐
                 │               SAVE YOUR PROFILE              │
                 │   ┌──────────────────┬───────────────────┐   │
                 │   │ ▸ FARMER LOGIN   │   OFFICER LOGIN ◂ │   │   two TABS, default = FARMER
                 │   ├──────────────────┴───────────────────┤   │
                 │   │  FARMER SECTION                      │   │
                 │   │  Mobile number  [+91 ________]       │   │
                 │   │  [ SEND CODE ]  → 6-digit OTP box    │   │   dev stub: OTP = 000000
                 │   │  [ VERIFY & START ]                  │   │
                 │   │  resend after 30s countdown          │   │
                 │   └──────────────────────────────────────┘   │
                 │                                              │
                 │   OFFICER SECTION (separate credentials)     │
                 │   Staff ID  [________]                       │
                 │   Password  [________]                       │
                 │   [ SIGN IN TO DASHBOARD ]                   │
                 │   Forgot password? → "Contact your AD"       │
                 │                                              │
                 │   under both: "Explore without saving →"     │   guest fast-path (judges use this)
                 └──────────────────────────────────────────────┘

 RULES
  • Tabs switch sections, NOT accounts — a phone number never authenticates as officer,
    a staff ID never works in the farmer tab. Role travels inside the issued token.
  • Wrong-section attempt → inline error, stays on correct section.
  • Farmer verify success → S6.5 PROFILE COMPLETION (display name if new, draft
    attached — ACCOUNT SETUP CONTRACT §3.8) → token(role=farmer) → S7.
    Until S6.5 is built, the greeting must MASK the phone (contract §3.5).
  • Officer sign-in success  → token(role=officer) → O1
  • Guest link               → no token, demo data  → S7 (banner: sample advice)
```

### FRAME D — Farmer inside the app (S7 → S11), first day and every day

```
   S7 HOME  ─ NAME/farm strip (never the raw phone — contract §3.5) ·
      │      TODAY'S ADVISORY (top-3 cards) · weather strip
     │
     ├──▶ S8 ADVISORY DETAIL   full text + 🔊 Listen (spoken in chosen language)
     │        │                [ ✓ Understood ] acknowledges → card ticks green
     │        └──────────────────────┐
     │◀──────────────────────────────┘
     ├──▶ S9 WHERE TO SELL     mandis ranked by NET revenue (price − freight − fee),
     │        │                best NET highlighted even if not best price,
     │        │                7-day trend arrows, operating days
     │        └─ tap mandi → distance + est. transport cost detail
     ├──▶ S10 NEED HELP        officer card (name/photo/phone) · [ 📞 CALL ]
     │        │                [ REQUEST VISIT ] → logged, officer sees it
     │        └─ emergency helpline numbers
     ├──▶ S11 MY PROFILE       shows draft_profile read-only → [ EDIT ]
     │        │                reopens S3/S4 pre-filled → save → engines re-run
     │        │                language change here too
     │        └─ [ LOG OUT ]
     ▼
   RETURNING FARMER (daily loop):
     open link → token valid? ──yes──▶ S7 straight away (language restored)
                          │
                          no (expired/cleared)
                          ▼
                     S6 FARMER section again (answers remembered, only OTP needed)
```

---

## PART 2 — OFFICER PATHWAY

### FRAME E — Officer inside the dashboard (O1 → O7)

```
   O1 SIGN-IN  (from S6 OFFICER section) → token(role=officer, jurisdiction=district)
     │
     ▼
   O2 TRIAGE BOARD  ────────────────────────────────────────────────────┐
     │  header: officer name + district                                │
     │  stats row: [ LOW n ][ MEDIUM n ][ HIGH n ][ CRITICAL n ]       │
     │  alert ribbon: "3 farmers newly crossed into HIGH since Friday" │
     │                                                                 │
     ├──▶ O3 CASELIST       list sorted CRITICAL→LOW, each row shows
     │     │                name · village · crop · score chip · top reason
     │     │                filter pills: All · Medium+ · High · Critical
     │     │                search by name/village
     │     ▼
     ├──▶ O4 FARMER RISK DETAIL
     │        profile block (farm, crop, stage, loan)
     │        RANKED CONTRIBUTIONS table:
     │           signal · raw value · weight · points · plain-language reason
     │           🔥 override banner when escalation rule fired:
     │           "Scored 47 (Medium) but price 100 + loan 88 → forced HIGH"
     │        ▼
     ├──▶ O5 ACT            [ 📞 CALL ] · [ SCHEDULE VISIT +date ]
     │        │             [ REFER TO SCHEME ▾ ] · [ MARK REVIEWED ]
     │        │             every action requires optional note → saved
     │        ▼
     ├──▶ O6 ACTION LOG     per-farmer timeline of past calls/visits/referrals
     │        │             closes the loop: was the earlier flag acted upon?
     │        └──────────────────┐
     │◀──────────────────────────┘   back to caselist, row now shows last-action
     ├──▶ O7 DISTRICT VIEW (STRETCH)  trend charts, village heat-map, export CSV
     ▼
   LOG OUT → S6 (OFFICER section pre-selected)
```

### FRAME F — How the two pathways touch (and where they must not)

```
   FARMER SIDE                      OFFICER SIDE
   ───────────                      ────────────
   S10 "REQUEST VISIT"  ────────────▶ appears on O2/O3 as an action-needed flag
   farmer acknowledged advisory  ───▶ visible in O4 profile block
   HIGH/CRIT score (engine, server-side or nightly run) ──▶ O2 alert ribbon
   ─────────────────────────────────────────────────────────────
   NEVER crosses: the farmer's own screen shows NO score, NO band, NO colour-coded
   risk anywhere. Only the officer sees the arithmetic. (DECISIONS.md §6)
```

---

## FRAME G — Full screen inventory

| ID | Screen | Owner | Entry from |
|----|--------|-------|-----------|
| S1 | Language picker | everyone | first click, globe icon |
| S2 | State→District→Village | farmer | S1 |
| S3 | Land form | farmer | S2, S11-edit |
| S4 | Crop form | farmer | S3, S11-edit |
| S5 | Review card | farmer | S4 |
| S6-F | Auth · Farmer section (phone+OTP) | farmer | **S6-F1 intent screen**, returning-expired |
| S6-F1 | Account intent — why, reviewed summary, benefits, consent gate | farmer | S5 Save |
| S6-P | Profile completion (display name, draft attach) — ACCOUNT CONTRACT §3.8 | farmer | S6-F (new account) |
| S6-O | Auth · Officer section (ID+password) | officer | S6 tab switch, logout |
| S6-G | Guest escape ("Explore without saving") | anyone | S6 link |
| S7 | Home dashboard | farmer | S6-F, S6-G, returning |
| S8 | Advisory detail + Listen + Acknowledge | farmer | S7 |
| S9 | Mandi comparison | farmer | S7 tab |
| S10 | Help / call officer / request visit | farmer | S7 tab |
| S11 | My profile / edit farm-crop / logout | farmer | S7 |
| O1 | Officer session start | officer | S6-O |
| O2 | District triage board + stats + alerts | officer | O1 |
| O3 | Caselist + filters + search | officer | O2 |
| O4 | Farmer risk detail + ranked reasons | officer | O3 |
| O5 | Act: call / visit / refer / review | officer | O4 |
| O6 | Per-farmer action log | officer | O4/O5 |
| O7 | District trends (STRETCH) | officer | O2 |

---

## FRAME H — Edge cases across the whole map

```
 • Refresh mid-wizard      → draft restored from localStorage, resume same step
 • Token expired           → correct section of S6 shown (farmer↔officer remembered)
 • OTP wrong ×5            → TOO_MANY_ATTEMPTS; resend cooldown 30s keeps same phone
 • No signal during S1–S5  → impossible to hit: zero network until S6
 • Officer of District A opens farmer of District B → blocked by jurisdiction filter
 • Two roles, one device   → logging in as officer clears farmer token (single active role)
 • Judge/demo mode         → guest path uses the farmer's own draft or sample data;
                             a curated 5-farmer seed returns with the officer build
 • New phone, old account  → never auto-merge; a new account starts (ACCOUNT §4.4)
```

## FRAME I — Gap vs today's build

*(Rewritten after the 2026-08-24 reset: the earlier prototype — officer dashboard,
engines, seeded farmers — was removed; the app is being rebuilt from scratch per
PART 3 below. Only what currently exists is marked done.)*

| Step | Status |
|------|--------|
| S1 language picker | ✅ **built** (rebuilt) — full-screen gate, 6 tiles, 🔊 preview, `storage.js` persistence, translated welcome copy |
| S2 State→District→Village | ✅ **built** — cascading selects fed by `repository` → `data.js` tree; per-change draft persistence; refresh resumes |
| S3 land form | ✅ **built** — area (decimal keypad) + soil + irrigation, translated options, inline validation |
| S4 crop form | ✅ **built** — crop + variety (+free-text "Other") + sowing date; **growth stage auto-derived** via `advisory.calculateStage()` and shown as a reassurance chip, never asked |
| S5 review card | ✅ **built** — plain-language read-back of all answers (Location · Land · Crop), per-row **Change** returns to its step with values preserved, Save confirms with a translated note (S6 auth is next) |
| S6-F phone+OTP | ✅ **real** — FastAPI + SQLite backend (`backend/`), hashed OTP with 5-min expiry + attempt limits + 30s resend cooldown, JWT issued on verify; demo fallback (OTP 000000) when API is down |
| S6-O officer login | ✅ **real** — PBKDF2-hashed credentials, seeded officer `OFF-1001` / `Kisan@2026`, JWT `role=officer`; dashboard screen itself is the next increment |
| S7 home / S8 detail / S9 mandi / S10 help / S11 profile | ⚠️ **S7 built** — greeting, top-3 advisory cards (rule engine, severity rail+icon+word), 🔊 Listen (SpeechSynthesis in chosen language), acknowledge, 7-day weather strip + season deviation; S8/S9/S10/S11 next |
| O1–O7 officer flow | ❌ removed with old prototype — rebuild after farmer side |

Foundation modules now in place per PART 3 §3: `storage.js`, `i18n.js`,
`data.js`, `router.js`, `repository/{index,demoRepository}.js`.

**Known deviations from the contracts (fix with the account-setup increment):**
1. ~~**Home greeting shows the raw phone number**~~ — **fixed 2026-08-25**: S6.5
   collects the display name; the greeting shows the name, falling back to a
   masked number (`••• 447`) only until the name exists (ACCOUNT §3.5).
2. ~~**No S6.5 profile-completion screen**~~ — **fixed 2026-08-25**: new
   accounts land on S6.5; the reviewed draft attaches via
   `POST /farmers/me/profile`, which upserts `farmer_profile` + the single
   active `farm` + `crop_cycle` (schema v2 in `backend/app/main.py`).
3. **Sessions are stateless JWTs** — no `session` table/revocation yet
   (ACCOUNT §6); logout is client-side discard only.
4. **`Locked` account state** exists only as the TOO_MANY_ATTEMPTS error;
   no administrative hold flow (sanctioned by ACCOUNT §2).
5. **Guest mode has no curated sample farmers** — the guest sees their own
   draft or blank-slate sample data; the 5-farmer seed returns with the
   officer build (FRAME H).
6. **Sarvam key not configured** — geographic names render in English until
   `config.js` gets a key; UI strings are unaffected (all hand-curated ×6).
7. **Account recovery** — same phone now returns `new_account:false` +
   `has_profile` and recovers the saved profile (ACCOUNT §3.9); the wizard
   never re-runs for a returning farmer with a saved farm.

Build order: ~~S3+S4 forms → S5 review → S6 two-tab gate~~ (done) → **S6.5 account
setup + greeting fix → S9 mandi + S10 help → S11 profile → officer side → persistence.**

---

## FRAME J — Implementation plan (small steps, review after each)

Protocol: each step is one small commit-sized change → **stop → user reviews → remarks → next step**.
Nothing merges ahead of a reviewed step.

```
 PRE-STEP  PRODUCT + ACCOUNT CONTRACT ← defined 2026-08-25
          end product, roles, account states, identity records, API and security rules

 STEP 1  S1 LANGUAGE GATE            ← implemented 2026-08-24
 STEP 2  S2 LOCATION CASCADES        ← implemented (36 states, 762 districts, repository layer)
 STEP 2b DESIGN SYSTEM + SARVAM      ← implemented (shadcn-style tokens, custom select, geo data)
 STEP 3  S3+S4 LAND & CROP FORMS     ← implemented (stage auto-derived)
 STEP 4  S5 REVIEW CARD              ← implemented
 STEP 5  S6 AUTH GATE (two tabs)     ← implemented (real FastAPI + JWT, demo fallback)
 STEP 6  S7 FARMER HOME              ← implemented (advisories + weather + voice + ack)

 STEP 6b ACCOUNT SETUP               ← implemented 2026-08-25 (S6.5 + schema v2)
                                      S6.5 profile completion: display name (if new),
                                      draft attached via POST /farmers/me/profile,
                                      existing-phone → recover account not duplicate,
                                      greeting switches phone → name (masked fallback),
                                      backend schema v2: account / farmer_profile /
                                      farm / crop_cycle / officer_profiles /
                                      otp_challenge per ACCOUNT §6

 STEP 6c S6-F1 ACCOUNT INTENT        ← implemented 2026-08-25
                                      route 'intent' (view viewIntent) between
                                      S5 Save and the phone form: why-verify note,
                                      read-only reviewed summary (village·district /
                                      area·water / crop·variety·sown), three
                                      benefits, privacy note, required Terms+
                                      Privacy checkbox gating 'Continue with mobile
                                      number', 'Change my farm details' → S5 review
                                      hub (per-row Change → S2/S3/S4, draft intact),
                                      guest action repeated here. Consent stored as
                                      versioned LOCAL value only
                                      (draft.consent {version:1,accepted,acceptedAt})
                                      — nothing sent to the API yet. Returning
                                      expired farmers (consent already accepted)
                                      skip intent → farmer login (ACCOUNT §4.3).
                                      Raw phone removed from signed-in chip.
 STEP 7  S9 MANDI + S10 HELP         ← implemented 2026-08-25
                                      route 'mandi' + route 'help' (+ route
                                      'profile' + route 'officer' seeded).
                                      services/simPrices.js: deterministic 3-
                                      mandi-per-district provider (hash-seeded,
                                      CROP_BASE price table, trend7dPct, 25%
                                      crash odds). mandi.js: pure rankMandis
                                      engine (net = price×qtl − 2×dist×FREIGHT
                                      − feePct×gross; bestNET highlight; price-
                                      inversion detection). data.js: FREIGHT_PER_
                                      KM=40, MANDI_FEE_PCT=0.01, OFFICER seed.
                                      demoRepository: compareMandis + getOfficer-
                                      Contact (simPrices + mandi composed here).
                                      apiRepository: placeholder stubs. farmer.js:
                                      renderMandi (crop label, qty input, mandi
                                      cards with price/distance/trend/transport/
                                      fee/net/bestNet badge, inversion callout),
                                      renderHelp (officer card with tel: call,
                                      visit form toggle+submit/cancel, helplines),
                                      farmerNav tab bar wiring (4 tabs: home/
                                      mandi/help/profile, aria-current, showView
                                      integration). index.html: viewMandi, viewHelp,
                                      farmerNav. i18n.js: nav.* + mandi.* + help.*
                                      keys × 6 langs. CSS: farmer-nav, mandi-item,
                                      mandi-inversion, mandi-net, officer-contact,
                                      helpline, visit-form, profile-detail, officer-
                                      card, stat-tile, caseload all added. S7 home
                                      is the Advisory tab; mandi/help/profile tabs
                                      visible only with session.
 STEP 8  S11 PROFILE + S8 DETAIL     ← implemented 2026-08-25
                                      route 'profile' + route 'advisory'.
                                      S11 profile: Mode 1 (display name) +
                                      Mode 2 (overview with per-row Change
                                      buttons → location/land/crop/language
                                      edit; signout). S8 advisory detail:
                                      advisory cards on home now tappable
                                      (role=button, data-index, keyboard
                                      accessible); selectedAdvisoryIndex
                                      drives renderAdvisoryDetail (severity
                                      badge, full title/body/why, per-card
                                      ack via storage.getAckedAdvisories /
                                      ackAdvisory). Back → home. viewAdvisory
                                      HTML with back-btn, severity badge,
                                      body, why section. CSS: advisory-
                                      detail-card, severity[data-severity],
                                      tappable card styles. i18n: adv.detail.why
                                      × 6 langs. storage.js: getAckedAdvisories
                                      (Set) + ackAdvisory (titleKey).
 STEP 9  OFFICER SIDE                ← implemented 2026-08-25
                                      route 'officer' (role: officer guard).
                                      renderOfficer: welcome header with
                                      jurisdiction, 4 stat tiles (CRITICAL/
                                      HIGH/MEDIUM/TOTAL), search bar, filter
                                      chips, caseload cards (5-seed farmer
                                      demo: Deshmukh CRITICAL, Shinde HIGH,
                                      Patil HIGH, Gaikwad MEDIUM, Jadhav LOW;
                                      each with score, drivers, phone). Log
                                      Action: inline form (action type select +
                                      notes input) slides down below card on
                                      click; stores via storage.logOfficerAction
                                      (localStorage); re-renders showing last
                                      2 actions per card with type badge + notes
                                      + date. Action types: call_made, visit_
                                      done, referral, advisory_given, follow_up.
                                      storage.js: getOfficerActions (object by
                                      farmerId), logOfficerAction, getFarmerActions.
                                      i18n: officer.* keys × 6 langs (13 keys).
                                      CSS: caseload-card--expanded, officer-action-
                                      form, caseload-actions-log/entry/type/notes/
                                      time. Officer signout wired.
 STEP 10 PERSISTENCE & POLISH        ← implemented 2026-08-25
                                      End-to-end walkthrough verified:
                                      farmer flow (S1→S2→S3→S4→S5→S6-F1→
                                      S6-F2→S6.5→S7→S9→S10→S11), officer
                                      flow (auth→dashboard→action log→signout),
                                      6 languages, all routes, all i18n keys,
                                      all element refs, demo+connected modes.
                                      Backend: schema v2, CORS for 8000/4173/
                                      5500, health OK. Frontend: 13 views, 13
                                      routes, 0 broken refs, tab bar, all
                                      engines (weather, advisory, mandi, simPrices).
                                      pathway.md: all 10 steps implemented and
                                      sealed. Known deviations: no SQLAlchemy/
                                      Alembic (raw SQLite sufficient for MVP),
                                      no real Sarvam key (geo names stay English),
                                      consent local-only, officer caseload 5-seed
                                      demo, mandi prices simulated.
```

Each step touches only the modules its frame names. The draft_profile is a
temporary onboarding object only — Step 6b attaches it to a real account and
clears/marks it per the ACCOUNT SETUP CONTRACT §6.

**Implementation record — Step 1:** `index.html`, `assets/css/app.css`, and
`assets/js/farmer.js` now provide S1 as a standalone, no-build static page. It renders six
native-script language tiles, persists the chosen language in `localStorage`, uses browser
speech preview where available, applies translated starter copy, and exposes a reusable globe
button for changing language. S2 is intentionally not built yet; the screen stops at the
reviewable Step-1 completion state.

**Product/account record — 2026-08-25:** the product contract and account setup contract were
added above before the next implementation step. Future account UI and API work must follow the
separation between `account`, `farmer_profile`, `farm`, and `crop_cycle`; no screen may invent a
new identity flow or write directly to a database record.

**Implementation record — Step 2 (S2 location cascades + foundations):**
Foundation modules extracted per PART 3 §3: `storage.js` (central keys, guarded
read/write, draft-profile patch API), `i18n.js` (catalogue moved out of farmer.js;
wizard strings added in all six languages), `router.js` (hash-based, free browser
back-button), and the repository layer (`repository/index.js` →
`repository/demoRepository.js` → `data.js`). Screens now import none of those
directly except through the controller.
S2 itself: three cascading selects (State→District→Village) fed by
`repository.getLocationTree()`; each change patches `localStorage.draft-profile`
so a refresh resumes mid-step with values intact; Continue validates all three in
the chosen language (`err.required` inline, never a browser alert); Back preserves
input; completing S2 lands on an S3 stub. First-run language choice auto-advances
into S2; globe reopen changes language in place. Next increment: S3+S4 forms on the
same wizard rails.

**Implementation record — Step 2b (design system + full geo data + Sarvam):**
- **shadcn/ui design language, vanilla port.** `app.css` rebuilt on the shadcn
  token architecture (HSL custom properties: background/foreground/card/primary/
  muted/accent/border/ring) with hues mapped to the farm-green palette. Components
  hand-built to shadcn spec: button (primary/ghost/outline), card, input, label,
  dialog, and a full Select port (`components/select.js`) — trigger + popover
  listbox, chevron rotation, check mark, type-to-search header, full keyboard
  support (arrows/Enter/Escape/Home/End/type-ahead), ARIA roles, outside-click
  close. No React, no Tailwind, per PART 3 §2.
- **Animations (tailwindcss-animate equivalents):** fade-in, zoom-in-95 dialog,
  slide-up view transitions, pop-in select popovers, hover lifts on tiles/buttons;
  everything disabled under `prefers-reduced-motion`.
- **Geo data:** `data/locations.js` — generated from iaseth/data-for-india (MIT),
  the Government-of-India 2024 list: **36 states/UTs, 762 districts**. Villages
  ship for the four demo districts only; every other district offers a translated
  free-text "Other — type my village" option. Full village lists (~650k, LGD) are
  a connected-mode fetch by policy, not an embed.
- **Sarvam.ai translation layer:** `config.js` (subscription key, gitignored
  before any commit) + `services/sarvam.js`. State/district/village names
  translate live into the chosen language via POST /translate; results persist in
  a localStorage cache so repeat visits render instantly and offline. Any failure
  degrades silently to English. UI strings stay hand-curated in `i18n.js`
  (agronomy content is never machine-translated — DECISIONS.md §3).
- **i18n:** new keys (`loc.search`, `loc.other`, `loc.villageFreePh`) added for
  all six languages.

**Implementation record — Step 2c (search fixes) + Step 3 (S3+S4 forms):**
- **Select search hardened:** focus now stays in the search box while typing
  (arrow keys move the highlight, Enter picks); active-item scrolling is manual
  (`popover.scrollTop`) so the page no longer jumps; hover syncs the highlight;
  a translated "No matches found" message shows when a query has zero results;
  search input bumped to 16px (no iOS zoom).
- **S3 Your land:** area (numeric keypad, validated `err.area`), soil type and
  water source as shadcn-style selects with fully translated options
  (6 soils × 6 irrigation sources × 6 languages). Persisted per change.
- **S4 Your crop:** crop catalogue (8 crops × 3 varieties each, varieties kept as
  proper names) + translated "Other — type the variety" free text + sowing date
  (future dates rejected). `advisory.calculateStage()` derives days-since-sowing,
  growth stage and expected harvest — displayed live as a translated chip
  ("Your cotton is at the flowering stage."), never asked as a question.
- **Resume logic:** a returning visitor now lands at their furthest incomplete
  step (location → land → crop → review).
- New modules: `advisory.js` (pure stage derivation). Repository extended with
  `getLandOptions()` / `getCropCatalogue()` — the screen never imports `data.js`.

**Implementation record — Step 4 (S5 review card):**
Read-back rows (Location · Land · Crop) rendered from the draft profile, every
value translated (soil/irrigation/crop/stage through the catalogue, date via
`toLocaleDateString` in the chosen locale). Each row's **Change** button routes
back to its wizard step — values survive because the draft was persisted on every
change. **Save my details** stamps `completed: true` and shows the translated
confirmation; the S6 auth gate is the next increment. Returning visitors now
resume at their furthest incomplete step, ending at review until auth exists.

**Implementation record — Step 5 (S6 auth gate, connected mode):**
- **Real backend service** (`backend/`, FastAPI 0.141 + uvicorn + PyJWT on
  port 8001, SQLite via stdlib): `POST /auth/otp/request` (6-digit hashed OTP,
  5-min expiry, 30s resend cooldown, max 5 verify attempts), `POST /auth/otp/
  verify` (issues JWT `role=farmer`), `POST /auth/officer/login` (PBKDF2-hashed,
  seeded officer `OFF-1001` / `Kisan@2026`), `GET /auth/session`, `POST /logout`,
  `GET /health`. Uniform `{data}` / `{error:{code,message}}` envelopes; CORS
  pinned to the frontend origin. `OTP_MODE=stub` hands the code to the UI and
  console (no SMS gateway yet — that swap touches one backend branch).
- **Frontend speaks to it for real:** `repository/apiRepository.js` is the only
  `fetch()` in the codebase (PART 3 §1 boundary). `getAuth()` pings `/health`
  once per load — real API when up, demo stub (OTP `000000`) when down, so the
  recorded demo can never die (§8 demo-safety).
- **S6 UI:** two-tab gate (Farmer | Officer) with role-isolated forms — a phone
  number can never authenticate as an officer and vice versa (server-side role
  checks + separate endpoints). Farmer: 10-digit validation, send → OTP field +
  demo-code hint + 30s resend countdown, verify → JWT stored in `localStorage`
  (demo-only; HttpOnly cookie in production). Officer: staff ID + password.
  Guest: "Explore without saving" → local-only guest session. Sign-out clears
  the session and calls the API.
- **Funnel:** S5 Save → S6 auth; returning users with a completed draft but no
  session land on S6.
- Run both servers: `python -m http.server 8000` (frontend) +
  `python -m uvicorn backend.app.main:app --port 8001` (API). API docs at
  `http://localhost:8001/docs`.

**Implementation record — Step 6 (S7 farmer home):**
- **SimulatedWeatherProvider** (`services/simWeather.js`): deterministic
  monsoon-plausible weather per district+date (same day → same forecast, so
  demos repeat and rules fire consistently). A live Open-Meteo provider later
  swaps in through the same repository seam.
- **Advisory rule engine** (`advisory.buildAdvisories`): ordered rules —
  harvest-before-rain (urgent, harvest-ready + ≥40 mm in 48 h), hold-spray
  (warning, heavy rain), protective irrigation (warning, deficit ≤ −40 % in
  fragile stages), heat stress (warning, ≥ 38 °C), all-clear fallback (info).
  Rules emit **keys + params, never sentences** — i18n renders them in the
  farmer's language and voice speaks the same string (DECISIONS.md §5). Top 3
  by severity; severity shown as rail + icon + word, never colour alone.
- **S7 screen:** greeting (phone/name per role), village·district line, guest
  banner, advisory cards, 🔊 Listen (reads all cards in the chosen locale,
  degrades with a translated note), acknowledge button, 7-day weather strip
  with locale weekday names + season-deviation callout. **No risk score, band
  or colour reaches this screen** (DECISIONS.md §6).
- **Flow:** auth success → S7 directly; returning users with a completed
  profile + session land on S7. New modules: `voice.js`, `icons.js`.

---

# PART 3 — Complete Technical Pathway

This section turns the screen map into an implementation map. It is deliberately split into
two delivery modes so the team can ship a dependable internal-hackathon demo first, then attach
a real backend without rewriting the user interface.

## 1. Delivery modes and the non-negotiable boundary

| Mode | What runs | Purpose |
|------|-----------|---------|
| **Demo mode — ship first** | Static HTML, CSS, vanilla ES modules, seeded `data.js`, browser storage | Fully functional, fast, offline-safe demo. No account or live API can break the presentation. |
| **Connected mode — Phase 2** | Same frontend + FastAPI REST API + PostgreSQL | Persistent profiles, real officer actions, scheduled engines, and replaceable live data feeds. |

The frontend must consume data through one small repository layer. Screens and engines must
never import `data.js`, call `fetch()`, or query a database directly. This one boundary is what
makes a seed-data demo and a live deployment behave identically.

```text
screen / component
       ↓
frontend repository (DemoRepository | ApiRepository)
       ↓
seed data + localStorage                 REST /api/v1
                                              ↓
                                      FastAPI service modules
                                              ↓
                                         PostgreSQL / providers
```

### Required configuration

```text
APP_MODE=demo | connected
API_BASE_URL=https://api.example.in/api/v1
WEATHER_PROVIDER=simulated | live
PRICE_PROVIDER=simulated | live
OTP_MODE=stub | provider
```

`APP_MODE=demo` is the default used in the recorded demo. `APP_MODE=connected` is only enabled
after the API, database, and authentication flow have been verified together.

---

## 2. Exact technology choices

### Frontend: use now

| Need | Tool | Where it is used | Why it belongs |
|------|------|------------------|----------------|
| Pages | Static HTML5 | `index.html`, `officer.html`, later `onboarding.html` / `auth.html` or route-like views | Zero build step and tiny payload for 2G devices. |
| Styling | Hand-written CSS with custom properties | `assets/css/app.css` | The existing visual system remains lightweight and controllable. |
| Behaviour | Vanilla JavaScript ES modules | `assets/js/*.js` | Native browser modules; no React, Vue, or bundle runtime required. |
| Icons and mini charts | Inline SVG generated by `icons.js` | Farmer weather/advisory cards and officer trends | Sharp, accessible, no image download and no chart library. |
| Language catalogue | Plain JS/JSON dictionaries | `assets/js/i18n.js` | Verified farm terminology is safer than automatic translation during the MVP. |
| Voice | Browser Web Speech API (`SpeechSynthesis`) | `assets/js/voice.js` | Reads the already translated advisory with no cloud dependency. |
| Temporary persistence | `localStorage` | Onboarding draft, language, demo identity, acknowledged cards | Lets refresh/back-navigation work before a backend exists. |
| Network access in connected mode | Native `fetch()` | only `assets/js/repository/apiRepository.js` | No Axios dependency; one error and retry policy. |
| Form validation | Native HTML constraints plus a shared validator module | onboarding and auth forms | No form-library bundle is needed for a few fields. |

Do **not** add React, Tailwind CDN, jQuery, Axios, Bootstrap, or a chart library for this MVP.
They solve problems this static, low-bandwidth app does not have and would make the demo heavier.

### Backend: introduce only for connected mode

| Need | Tool | Where it is used |
|------|------|------------------|
| REST API and OpenAPI documentation | **FastAPI** | `backend/app/main.py`; `/docs` is also useful during judging. |
| Request/response validation | **Pydantic v2** | `backend/app/schemas/` |
| Data access | **SQLAlchemy 2** | `backend/app/models/` and `repositories/` |
| Database migrations | **Alembic** | `backend/alembic/versions/` |
| Database | **PostgreSQL 15+** | persistent farmer, farm, advisory, action, and audit data |
| Local fallback | **SQLite** | developer setup only; never the shared production database |
| Authentication | JWT via `PyJWT` or `python-jose`, password hashing via `pwdlib`/bcrypt | `backend/app/auth/` |
| Scheduled daily work | **APScheduler** for the hackathon | runs weather/price sync, advisory generation, and risk scoring |
| HTTP requests to providers | **httpx** | `backend/app/providers/` |
| Environment settings | **pydantic-settings** | configuration read from `.env`, never hard-coded secrets |
| Automated tests | **pytest** + FastAPI `TestClient` | engine, API, and access-control tests |
| Formatting and linting | **Ruff** | one command for linting and formatting Python |

### External services

| Service | MVP behaviour | Connected-mode role | Fallback |
|---------|---------------|---------------------|----------|
| Weather | `SimulatedWeatherProvider` | `LiveWeatherProvider` calling **Open-Meteo** by farm coordinates | last valid response / simulator |
| Mandi prices | `SimulatedPriceProvider` | AGMARKNET or data.gov.in adapter | seeded price series |
| Indic text/voice | curated strings + browser speech | Bhashini translation/TTS only after language review | show verified text; browser voice if available |
| SMS | write to `sms_log` only | SMS provider adapter when approved | officer call/visit workflow |
| Maps | omitted from core farmer flow | Leaflet + OpenStreetMap on the officer district view | ranked list and distance text |

Every service is an adapter, never embedded in a screen or engine. API keys belong only in the
backend `.env` file. They must never be shipped to the browser or committed to Git.

---

## 3. Recommended file and module layout

```text
SIH26-TryHards/
├── index.html                         # farmer app shell
├── officer.html                       # officer dashboard shell
├── assets/
│   ├── css/app.css
│   └── js/
│       ├── farmer.js                  # farmer screen controller
│       ├── officer.js                 # officer screen controller
│       ├── advisory.js                # pure advisory rules
│       ├── distress.js                # pure risk scoring and override
│       ├── mandi.js                   # pure net-revenue calculation
│       ├── voice.js                   # SpeechSynthesis wrapper
│       ├── i18n.js                    # verified language strings
│       ├── data.js                    # demo seed data only
│       ├── validation.js              # shared form validation
│       ├── storage.js                 # localStorage keys and safe read/write
│       ├── router.js                  # view transitions and back-navigation
│       └── repository/
│           ├── index.js               # selects demo or API repository
│           ├── demoRepository.js      # reads data.js and local state
│           └── apiRepository.js       # the only frontend fetch() calls
├── backend/                            # Phase 2 only
│   ├── app/
│   │   ├── main.py
│   │   ├── api/v1/                    # thin FastAPI routers
│   │   ├── services/                  # orchestration; no HTTP route logic
│   │   ├── engines/                   # pure advisory, risk and mandi logic
│   │   ├── providers/                 # simulated/live weather and price adapters
│   │   ├── models/                    # SQLAlchemy models
│   │   ├── schemas/                   # Pydantic request/response types
│   │   ├── repositories/              # database queries only
│   │   ├── auth/                      # OTP, JWT, role and jurisdiction checks
│   │   ├── jobs/                      # APScheduler tasks
│   │   └── core/                      # settings, logging, errors
│   ├── alembic/
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
├── scripts/seed.py                    # deterministic 80-farmer data seed
└── docs/
    ├── api-contract.md
    └── DECISIONS.md
```

The exact same advisory, distress, and mandi formulas should be maintained as pure functions in
one authoritative backend implementation. During demo mode the current browser engines may
mirror those rules, but every change must update the test cases for both sides.

---

## 4. End-to-end website pathway, including the implementation at each step

### P0 — First page load and application bootstrap

1. The browser downloads `index.html`, `app.css`, and only the JavaScript modules needed for the
   farmer view. No framework bundle, map tiles, or remote font blocks first paint.
2. `farmer.js` calls `repository.getSession()` and `storage.getLanguage()`.
3. If a saved language exists, load the farmer home or resume the unfinished onboarding step.
   Otherwise show S1.
4. In demo mode, `DemoRepository` serves a selected sample farmer. In connected mode,
   `ApiRepository` calls `GET /auth/session` and then loads only the authenticated farmer.
5. A visible but compact "Sample data" banner appears only in demo/guest mode.

**Tools:** HTML5, CSS, ES modules, `localStorage`, native `fetch()` only in `ApiRepository`.

### P1 — S1 Language picker

1. Render six large tiles from `i18n.js`: English, Hindi, Marathi, Bengali, Tamil, Telugu.
2. A tap calls `setLanguage(languageCode)`, persists it locally, and re-renders all labels.
3. The speaker icon calls `voice.speak(languageName, locale)` to pronounce the option.
4. The app moves to S2 without a network call.

**Data:** `language_code`, locale, voice availability.

**Tools:** i18n dictionary, Web Speech API, ARIA labels, CSS 64 px targets.

### P2 — S2–S5 Farmer onboarding wizard

1. S2 requests state, district, and village using cascading local options in demo mode.
2. S3 captures acreage, soil type, and irrigation. The numeric field uses `inputmode="decimal"`.
3. S4 captures crop, variety, and sowing date. `advisory.calculateStage()` derives crop age,
   growth stage, and expected harvest; the farmer never has to estimate them.
4. `validation.js` validates a screen before the Next button works. Errors appear next to the
   field in the selected language, not as browser alerts.
5. After each valid step, `storage.saveDraftProfile()` records the complete partial draft.
6. S5 reads back all answers using language strings. Each Change button returns to its prior step
   with values preserved. Save only becomes available when required data is valid.

**Demo-mode write:** `localStorage.draft_profile`.

**Connected-mode write:** after authentication, `POST /farmers/me/profile`, `POST /farms`, and
`POST /crop-cycles`. The server recomputes all derived stage fields; it never trusts browser
calculations as authoritative.

**Tools:** native forms, `validation.js`, `storage.js`, `i18n.js`, pure advisory stage helper,
Pydantic validation in connected mode.

### P3 — S6 Authentication and guest entry

#### Farmer authentication

1. User submits a valid Indian phone number to `POST /auth/otp/request`.
2. In demo mode the UI accepts OTP `000000`; it never sends an SMS.
3. In connected mode `OtpService` stores a short-lived hashed OTP with retry count and expiry.
4. User submits the code to `POST /auth/otp/verify`.
5. The backend returns a short-lived JWT with `sub`, `role=farmer`, and farmer ID. Store it in a
   secure, HttpOnly cookie in production; local browser storage is demo-only.
6. The draft profile is attached to the authenticated farmer and the app opens S7.

#### Officer authentication

1. Officer submits staff ID and password to `POST /auth/officer/login`.
2. Backend verifies the password hash, returns a JWT with `role=officer` and permitted district IDs.
3. Every officer request checks both role and jurisdiction server-side.
4. A farmer token can never open `officer.html`; an officer token can never read a farmer outside
   their district even if its ID is changed in the browser address bar.

#### Guest entry

1. "Explore without saving" creates an in-memory `guest` session and selects a demo farmer.
2. Guest data is never written to the shared database.
3. A guest can browse S7–S10, but profile save, visit requests, and officer actions prompt for
   sign-in.

**Tools:** FastAPI, Pydantic, JWT library, password-hashing library, rate limiting at the host or
reverse proxy, `localStorage` only for the current demo stub.

### P4 — S7 Farmer home

1. Controller obtains `farmer`, active `farm`, `cropCycle`, today's weather, and current
   advisories from `repository.getFarmerHome()`.
2. Advisory cards are ordered CRITICAL/HIGH action first, then normal care. The app shows a
   maximum of three cards.
3. Weather strip renders seven compact inline SVG weather icons and plain text values.
4. The farmer never receives the distress number, band, or colour. If support is available, a
   neutral nudge links to S10.
5. If no network exists in connected mode, render the last cached successful home payload with a
   "last updated" message; do not display invented current values.

**Endpoint:** `GET /farmers/me/home?lang=mr`.

**Backend composition:** farmer profile + current advisory rows + weather summary. It is a
read-model endpoint, so the browser does not have to make five independent requests.

**Tools:** `farmer.js`, `advisory.js`, `icons.js`, i18n, browser cache/localStorage for last
successful read only.

### P5 — S8 Advisory detail, language, and voice

1. Tap an advisory card to open its full content, severity icon, expiry, and short "why now"
   explanation.
2. The UI renders `message_key` with `params`, for example
   `irrigation.hold({ mm: 45, hours: 48 })`. Rules never return already-translated sentences.
3. Listen invokes the browser voice in the selected locale. If that voice is absent, display text
   normally and tell the user audio is unavailable; it must not fail the screen.
4. Tap "Understood" to acknowledge. In demo mode store `acknowledged_at` locally; in connected
   mode call `POST /advisories/{id}/acknowledgements`.
5. The acknowledgement is visible to the assigned officer as context, not as a compliance score.

**Tools:** `i18n.js`, `voice.js`, Web Speech API, REST write endpoint, JSONB `params` column.

### P6 — S9 Mandi comparison

1. Load the active crop and default estimated quantity from the crop cycle; allow the farmer to
   edit quantity without modifying their farm profile.
2. `mandi.calculateNetRevenue()` ranks the three nearest suitable mandis by:

   ```text
   net = (modal_price_per_qtl × quintals)
         − (road_distance_km × 2 × freight_per_km)
         − mandi_fee
   ```

3. Render current price, road distance, transport cost, net take-home, 7-day arrow, operating
   days, and updated time. Highlight the best net result, not merely the highest price.
4. Explain the recommendation in plain language, especially when a lower-price nearby mandi wins.
5. In the core MVP, use a ranked list. The Leaflet map is optional and should load only after the
   user explicitly opens "View on map".

**Endpoint:** `GET /mandis/compare?farm_id={id}&crop={crop}&quintals={quantity}`.

**Tools:** `mandi.js`, simulated/live `PriceProvider`, Haversine distance helper for MVP;
Leaflet + OpenStreetMap only for the stretch map screen.

### P7 — S10 Help and visit request

1. Load the assigned officer's public contact card from `repository.getOfficerContact()`.
2. The Call button uses a `tel:` link; it does not require an API call.
3. Request Visit opens a two-field form: optional reason and preferred date.
4. In connected mode `POST /visit-requests` validates the farmer identity and creates an
`intervention_action`/visit-request record visible to the correct officer.
5. Show a clear success state and prevent duplicate submissions for the same open request.

**Tools:** native forms, `tel:` protocol, FastAPI route, PostgreSQL unique/open-request query.

### P8 — S11 Profile edits and logout

1. Profile shows farmer-controlled fields but masks phone and never exposes loan details in a
   shared-device view.
2. Edit reopens S2–S4 with saved values. Changing location, acreage, irrigation, crop, or sowing
   date marks advice and risk calculations stale.
3. Connected mode writes updates through `PATCH /farmers/me`, `PATCH /farms/{id}`, and
   `PATCH /crop-cycles/{id}`. The service queues immediate recomputation for that farm.
4. Logout clears local view state and invalidates the server token/session. It redirects to S6.

**Tools:** REST PATCH endpoints, server-side ownership checks, localStorage cleanup,
APScheduler one-off recompute task.

### P9 — O1–O3 Officer entry, triage, filters, and search

1. `officer.js` verifies the officer session before rendering any farmer data.
2. `GET /officers/me/triage` returns counts, newly escalated cases, and the initial paginated list
   for that officer's jurisdiction.
3. The list is sorted CRITICAL → HIGH → MEDIUM → LOW, then by newest assessment.
4. Filter buttons update query parameters; search is debounced in JavaScript by 250–300 ms.
5. Server query always applies the officer's district filter before optional band, village, or name
   filters. The browser is never trusted to filter private data.

**Endpoint:** `GET /officers/me/caseload?band=HIGH,CRITICAL&q=mohan&page=1&page_size=25`.

**Tools:** vanilla JS event delegation, `fetch()` repository, FastAPI, SQLAlchemy query builder,
PostgreSQL indexes on district, band, and latest score time.

### P10 — O4 Risk detail and explainability

1. Tapping a case calls `GET /officers/me/farmers/{farmer_id}/risk-detail`.
2. Backend checks jurisdiction, retrieves the latest assessment, and returns the exact stored
   contribution snapshot—not a fresh score recomputed with today’s data.
3. UI renders raw value, normalised score, weight, points, and plain-language reason.
4. If two signals independently scored at least 80, display the escalation-override banner.
5. Historical score line is an inline SVG sparkline, loaded only after the detail panel opens.

**Tools:** `distress.js` pure scorer, PostgreSQL JSONB `contributions`, inline SVG, FastAPI role
and jurisdiction dependency.

### P11 — O5–O6 Officer action and closed loop

1. Officer selects Call, Schedule Visit, Refer to Scheme, or Mark Reviewed.
2. Form validates action type, optional note length, and visit date. It never lets a client supply
   a different officer ID.
3. `POST /officers/me/actions` creates an immutable `intervention_action` row with server time.
4. The action log reloads and the caseload row displays its latest action/time.
5. When an officer resolves a case, it closes the alert—not the risk history. A new high score may
   open a new alert in the next nightly run.

**Tools:** FastAPI service transaction, SQLAlchemy, PostgreSQL audit fields, Pydantic enum for
action type, optional SMS adapter that only appends delivery status to `sms_log`.

### P12 — O7 District view (stretch)

1. `GET /officers/me/district-summary?range=30d` returns aggregated, non-identifying counts.
2. Render simple inline SVG trend charts first; add Leaflet only for an explicit map tab.
3. CSV export is generated server-side after jurisdiction filtering via
`GET /officers/me/district-summary.csv`.

**Tools:** FastAPI `StreamingResponse`, Python `csv`, inline SVG, optional Leaflet and
OpenStreetMap.

---

## 5. Backend and data-provider pathway

### Daily jobs

| Time (IST) | Job | Input | Output | Failure behaviour |
|------------|-----|-------|--------|-------------------|
| 05:30 | `sync_weather_and_prices` | selected weather/price provider | append validated records | retain last good data and write an error log |
| 06:00 | `generate_advisories` | active farm, crop stage, weather, soil, irrigation | 0–2 advisory rows per active farm | skip only the affected farm; continue batch |
| 23:00 | `calculate_risk` | 30-day rain, price change, loan due date, crop context | immutable risk assessment and alert change | flag job failure to admin/log; do not erase previous assessment |
| after profile change | `recompute_farm` | edited farm/crop data | refreshed advisory and risk state | queue retry; show last result until ready |

For the hackathon, APScheduler runs inside the FastAPI process. A production version should move
these jobs to a separate worker once reliability and scale justify it.

### Provider interfaces

```python
class WeatherProvider(Protocol):
    async def observed(self, district_id: str, start: date, end: date) -> list[WeatherRecord]: ...
    async def forecast(self, latitude: float, longitude: float, days: int) -> list[ForecastDay]: ...

class PriceProvider(Protocol):
    async def prices(self, crop: str, mandi_ids: list[str], date: date) -> list[PriceRecord]: ...
```

`SimulatedWeatherProvider` and `SimulatedPriceProvider` read the deterministic seed series.
`LiveWeatherProvider` and `LivePriceProvider` normalise vendor JSON into the same internal
schemas. Vendor-specific field names must never leave `providers/`.

### Engine rules

1. Advisory, distress, and mandi modules are pure: structured inputs in, structured outputs out.
2. Engines do not call the database, HTTP, send SMS, read the clock, or manipulate DOM.
3. Services fetch inputs, invoke engines, validate output, and persist results.
4. Alert routing reads the stored risk result; it does not rerun the risk engine.
5. Each engine has table-driven pytest cases, including Sunita, Ramesh, Anil, Lakshmi, and Mohan.

---

## 6. REST contract and frontend repository methods

All responses use one envelope:

```json
{ "data": {}, "meta": { "request_id": "...", "generated_at": "..." } }
```

All errors use one envelope:

```json
{ "error": { "code": "FORBIDDEN", "message": "You do not have access to this farmer." } }
```

| UI action | Repository method | Connected endpoint | Method |
|-----------|-------------------|--------------------|--------|
| Restore user/session | `getSession()` | `/auth/session` | GET |
| Request farmer OTP | `requestOtp(phone)` | `/auth/otp/request` | POST |
| Verify farmer OTP | `verifyOtp(phone, otp)` | `/auth/otp/verify` | POST |
| Officer login | `loginOfficer(staffId, password)` | `/auth/officer/login` | POST |
| Save onboarding | `saveProfile(draft)` | `/farmers/me/profile` | POST |
| Farmer home | `getFarmerHome(lang)` | `/farmers/me/home?lang=mr` | GET |
| Acknowledge advice | `acknowledgeAdvisory(id)` | `/advisories/{id}/acknowledgements` | POST |
| Compare mandis | `compareMandis(input)` | `/mandis/compare` | GET |
| Visit request | `requestVisit(input)` | `/visit-requests` | POST |
| Officer caseload | `getCaseload(filters)` | `/officers/me/caseload` | GET |
| Risk detail | `getRiskDetail(farmerId)` | `/officers/me/farmers/{id}/risk-detail` | GET |
| Log officer action | `createAction(action)` | `/officers/me/actions` | POST |
| Logout | `logout()` | `/auth/logout` | POST |

The response types should be written first in `docs/api-contract.md` and copied into Pydantic
schemas before API work starts. Demo repository objects must match those exact shapes.

---

## 7. Data, security, and reliability rules

### Data ownership

- Farmers may read and edit only their own profile, farm, and acknowledgement records.
- Farmers never receive raw loan data, risk scores, bands, or explainability payloads.
- Officers may read only farmers assigned to their jurisdiction.
- Officers may create action records but cannot overwrite historical risk assessments.
- Provider data is service-owned; no frontend writes weather or market price records.

### Minimum database protections

- Foreign keys between farmer → farm → crop cycle and farmer → loan/risk assessment.
- Unique records for `(district_id, date)` weather and `(mandi_id, crop, date)` prices.
- Index `weather_record(district_id, date)`, `price_record(crop, date)`,
  `risk_assessment(farmer_id, scored_at DESC)`, and `advisory(crop_cycle_id, issued_at DESC)`.
- Store money as integer paise or `NUMERIC(12,2)`, never binary floating-point values.
- Store timestamps in UTC; format them in IST only at the API/UI edge.
- Preserve `created_at`, `updated_at`, record source, and job run ID for traceability.

### API protections

- HTTPS only after deployment.
- CORS allow-list limited to the deployed frontend origin.
- JWT expiry, logout invalidation, password hashing, OTP expiry, retry limit, and request rate limit.
- Pydantic validates all request data; no raw SQL built from user input.
- Log request ID, route, latency, and errors, but never password, OTP, full phone number, or token.

### Low-network behaviour

- App shell, language catalogue, and last successful farmer payload are cached locally.
- Writes made without network show "not sent yet" and remain local only; do not claim success.
- Retry from an explicit user action. Full offline synchronisation is a labelled stretch goal.
- Images, web fonts, maps, translation API, and live feeds never block first content.

---

## 8. Testing and deployment pathway

### Tests that must exist before recording the demo

| Area | Test |
|------|------|
| Advisory rules | rainfall, heat, humidity, harvest, and language-template cases emit the correct keys and parameters |
| Risk scorer | expected LOW/MEDIUM/HIGH/CRITICAL scores; Mohan’s two-signal override reaches HIGH |
| Mandi math | farther high-price mandi loses when transport makes net revenue lower |
| Access control | farmer cannot call officer endpoints; officer cannot open another district’s farmer |
| Wizard | refresh preserves draft; Back preserves values; invalid fields do not advance |
| Voice | Listen button degrades to readable text when no local voice exists |
| Demo safety | selected sample farmer always loads with no internet and no API key |

**Frontend:** manual mobile browser checks plus a simple static-page smoke test.

**Backend:** `pytest`, FastAPI `TestClient`, and a temporary SQLite database for automated tests;
run the migration and seed against PostgreSQL before the final demo.

### Deployment sequence

1. Deploy the static frontend to Netlify or Vercel.
2. Deploy FastAPI to Render or Railway only when connected mode is ready.
3. Provision Neon/PostgreSQL, run Alembic migrations, then run `scripts/seed.py`.
4. Set environment variables in host dashboards, never in source files.
5. Configure `API_BASE_URL`, CORS origin, and `APP_MODE=connected` in a staging deployment.
6. Test the same five seed farmers through both roles.
7. Keep a deployed `APP_MODE=demo` URL or local static copy as the video-recording fallback.

---

## 9. Implementation order and definition of done

| Order | Deliverable | Main owner | Done when |
|------:|-------------|------------|-----------|
| 1 | Shared types, seed data, API contract | Data + backend | all existing demo objects validate against contract shapes |
| 2 | S1–S5 wizard and storage | Farmer frontend | refresh/back/change preserve input and review is correct |
| 3 | S6 two-role gate and guest mode | Frontend + backend | stub OTP and officer route protection work |
| 4 | S7–S11 farmer flow | Farmer frontend + advisory/mandi | advisory, voice, mandi ranking, help, and profile edit work on mobile |
| 5 | O2–O6 officer flow | Officer frontend + distress | filter, detail, override explanation, and saved action log work |
| 6 | FastAPI/data wiring | Backend + data | demo repository can be swapped for API repository without screen changes |
| 7 | Jobs, migrations, deployment, tests | Backend + data | fresh deployment seeds, scores, and serves all five demo cases |
| 8 | O7 map/trends and live providers | Optional | labelled stretch; never allowed to risk the MVP |

**The website is complete for the internal round when:** a farmer can choose Marathi, create or
open a farm, hear a specific advisory, compare mandis by net earnings, and request help; an
officer can log in, see a district-filtered high-risk case, understand its ranked reasons and
override, then record an action; and the exact journey works with seeded data even with the
internet disconnected.
