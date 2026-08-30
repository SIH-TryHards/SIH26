/* ============================================================
   storage.js — the only module allowed to touch localStorage.
   Keys are centralised here so nothing else can invent a new
   one by accident. Every call is guarded: private browsing or
   file:// must degrade, never crash the app (pathway.md §7,
   "low-network behaviour").
   ============================================================ */

const PREFIX = 'kisan-saathi';

export const KEYS = {
  language: `${PREFIX}.language`,
  draftProfile: `${PREFIX}.draft-profile`,
  session: `${PREFIX}.session`,
  translations: `${PREFIX}.translations.v1`,
  visitRequests: `${PREFIX}.visit-requests`,
  loan: `${PREFIX}.loan`,
  mandiPreferences: `${PREFIX}.mandi-preferences`,
  theme: `${PREFIX}.theme`,
};

function rawGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function rawSet(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

function rawRemove(key) {
  try { localStorage.removeItem(key); } catch { /* ignore */ }
}

/* ---- language ---- */
export function getLanguage() {
  return rawGet(KEYS.language);
}

export function setLanguage(code) {
  return rawSet(KEYS.language, code);
}

/* ---- onboarding draft profile ----
   A single JSON object that grows as the farmer completes wizard
   steps. Screens never parse it themselves — they patch it. */
export function getDraftProfile() {
  const raw = rawGet(KEYS.draftProfile);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function saveDraftProfile(patch) {
  const next = { ...(getDraftProfile() ?? {}), ...patch };
  rawSet(KEYS.draftProfile, JSON.stringify(next));
  return next;
}

export function clearDraftProfile() {
  rawRemove(KEYS.draftProfile);
}

/* ---- Sarvam translation cache ----
   { "<locale>": { "<english text>": "<translated>" } } — persisted so
   names translate once per device, then render instantly offline. */
export function getTranslationCache() {
  const raw = rawGet(KEYS.translations);
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

export function saveTranslationCache(cache) {
  try { rawSet(KEYS.translations, JSON.stringify(cache)); } catch { /* quota — ignore */ }
}

/* ---- auth session ----
   { token, role: 'farmer'|'officer'|'guest', id?, name?, exp? }
   localStorage is demo-only; production moves the JWT to a secure
   HttpOnly cookie (pathway.md P3). */
export function getSession() {
  const raw = rawGet(KEYS.session);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function saveSession(session) {
  return rawSet(KEYS.session, JSON.stringify(session));
}

export function clearSession() {
  rawRemove(KEYS.session);
}

/* ---- visit requests ---- */
export function getVisitRequests() {
  const raw = rawGet(KEYS.visitRequests);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

export function saveVisitRequest(req) {
  const list = getVisitRequests();
  list.push({ ...req, requestedAt: new Date().toISOString() });
  rawSet(KEYS.visitRequests, JSON.stringify(list));
  return list;
}

/* ---- acked advisories (S8 per-card) ----
   Stored as a JSON array of titleKey strings. A Set is returned
   for O(1) membership checks on the home screen. */
const ACKED_KEY = `${PREFIX}.acked-advisories`;

export function getAckedAdvisories() {
  const raw = rawGet(ACKED_KEY);
  if (!raw) return new Set();
  try { return new Set(JSON.parse(raw)); } catch { return new Set(); }
}

export function ackAdvisory(titleKey) {
  const set = getAckedAdvisories();
  set.add(titleKey);
  rawSet(ACKED_KEY, JSON.stringify([...set]));
}

/* ---- officer action log (STEP 9) ----
   { "<farmerId>": [{ type, notes, at }] } */
const ACTIONS_KEY = `${PREFIX}.officer-actions`;

export function getOfficerActions() {
  const raw = rawGet(ACTIONS_KEY);
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

export function logOfficerAction(farmerId, type, notes) {
  const all = getOfficerActions();
  if (!all[farmerId]) all[farmerId] = [];
  all[farmerId].push({ type, notes: notes || null, at: new Date().toISOString() });
  rawSet(ACTIONS_KEY, JSON.stringify(all));
  return all[farmerId];
}

export function getFarmerActions(farmerId) {
  return getOfficerActions()[farmerId] ?? [];
}

/* ---- farmer loan planner (Module 5) ----
   { amount, tenureMonths, rate } */
export function getLoanData() {
  const raw = rawGet(KEYS.loan);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function saveLoanData(data) {
  rawSet(KEYS.loan, JSON.stringify(data));
  return data;
}

/* ---- local farmer preferences ---- */
export function getMandiPreferences() {
  const raw = rawGet(KEYS.mandiPreferences);
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

export function saveMandiPreferences(patch) {
  const next = { ...getMandiPreferences(), ...patch };
  rawSet(KEYS.mandiPreferences, JSON.stringify(next));
  return next;
}

export function getTheme() {
  return rawGet(KEYS.theme) || 'light';
}

export function saveTheme(theme) {
  return rawSet(KEYS.theme, theme === 'dark' ? 'dark' : 'light');
}

/* Clear only Kisan Saathi's own namespace. This deliberately avoids
   localStorage.clear(), which could delete unrelated sites' settings. */
export function clearAllData() {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => localStorage.removeItem(key));
  } catch { /* private browsing may deny enumeration */ }
}
