/* ============================================================
   config.js — client configuration.
   Sarvam.ai key: check localStorage first, then fall back to
   the hardcoded value. Add your key via the Settings prompt
   or paste it into localStorage key 'sarvam_api_key'.
   ============================================================ */

function getSarvamKey() {
  try {
    const stored = localStorage.getItem('sarvam_api_key');
    if (stored) return stored;
  } catch { /* ignore */ }
  return '';
}

export const SARVAM_API_KEY = getSarvamKey();

export function setSarvamKey(key) {
  try { localStorage.setItem('sarvam_api_key', key); } catch { /* ignore */ }
}

/* Sarvam Translate API target codes for our six UI languages. */
export const SARVAM_LOCALES = {
  en: 'en-IN',
  hi: 'hi-IN',
  mr: 'mr-IN',
  bn: 'bn-IN',
  ta: 'ta-IN',
  te: 'te-IN',
};

/* ---- connected mode (deployment-aware) ----
   Browser on localhost → local API; otherwise → deployed Render service.
   Replace YOUR-RENDER-SERVICE with the actual Render URL after deploying. */
export const API_BASE_URL =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8001/api/v1'
    : 'https://YOUR-RENDER-SERVICE.onrender.com/api/v1';
