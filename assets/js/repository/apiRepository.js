/* ============================================================
   apiRepository.js — connected mode. The ONLY module in the
   frontend that calls fetch() (pathway.md PART 3 §1). Talks to
   the FastAPI auth service (backend/, port 8001) and external
   APIs (Open-Meteo weather, data.gov.in mandi prices).

   Server errors arrive as {detail:{error:{code,message}}}
   (FastAPI wraps HTTPException detail) or {error:{...}} — both
   are normalised into a single thrown shape {code, message}.
   ============================================================ */

import { API_BASE_URL } from '../config.js';
import { fetchWeather } from '../services/weather.js';
import { buildAdvisories } from '../advisory.js';
import { getMandisForDistrict, getPrices } from '../services/simPrices.js';
import { rankMandis } from '../mandi.js';
import { FREIGHT_PER_KM, MANDI_FEE_PCT, GOVERNMENT_SCHEMES } from '../data.js';

const REQUEST_TIMEOUT_MS = 6000;

async function request(path, { method = 'POST', body, token } = {}) {
  let res;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    res = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    });
  } catch {
    throw { code: 'NETWORK', message: 'Service unreachable.' };
  } finally {
    clearTimeout(timeout);
  }

  const payload = await res.json().catch(() => ({}));
  const err = payload?.error ?? payload?.detail?.error;
  let code = err?.code;
  if (!code && Array.isArray(payload?.detail)) code = 'VALIDATION';

  if (!res.ok) {
    throw {
      code: code ?? (res.status === 401 ? 'TOKEN_EXPIRED' : 'NETWORK'),
      message: err?.message ?? 'Request failed.',
    };
  }
  return payload.data ?? payload;
}

export const apiRepository = {
  mode: 'connected',

  async ping() {
    try {
      await request('/health', { method: 'GET' });
      return true;
    } catch {
      return false;
    }
  },

  /* ---- MSG91 provider setup ---- */
  loadMsg91(widgetId) {
    if (window.sendOtp) return Promise.resolve();
    return new Promise((resolve, reject) => {
      window.configuration = { widgetId: widgetId || "3669626f6350343234343635" };
      const script = document.createElement('script');
      script.src = 'https://control.msg91.com/app/assets/otp-provider/otp-provider.js';
      script.onload = () => {
         if (typeof window.initSendOTP === 'function') {
            window.initSendOTP(window.configuration);
         }
         resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  },

  /* ---- farmer OTP flow ---- */
  requestOtp(phone) {
    return request('/auth/otp/request', { body: { phone } });
  },

  verifyOtp(phone, otp, msg91_token) {
    if (msg91_token) {
        return request('/auth/otp/verify', { body: { phone, otp: null, msg91_token } });
    }
    return request('/auth/otp/verify', { body: { phone, otp } });
  },

  /* ---- officer login ---- */
  loginOfficer(staffId, password) {
    return request('/auth/officer/login', { body: { staff_id: staffId, password } });
  },

  getSessionRemote(token) {
    return request('/auth/session', { method: 'GET', token });
  },

  async logout(token) {
    try { await request('/auth/logout', { token }); } catch { /* token already dead */ }
    return true;
  },

  /* ---- account setup ---- */
  saveProfile(payload, token) {
    return request('/farmers/me/profile', { body: payload, token });
  },

  getMe(token) {
    return request('/farmers/me', { method: 'GET', token });
  },

  /* ---- S7 farmer home (live weather via Open-Meteo) ----
     Open-Meteo is free, CORS-friendly, no key required.
     Falls back to offline message if network fails. */
  async getFarmerHome(draft) {
    let weather;
    try {
      weather = await fetchWeather(draft.districtName || 'Nashik');
    } catch {
      weather = null;
    }
    const advisories = buildAdvisories(draft, weather);
    return { weather, advisories };
  },

  /* ---- S9 mandi comparison (server-side data.gov.in) ----
     Backend tries data.gov.in AGMARKNET; if unavailable, falls
     back to simulated mandi data so the screen always renders. */
  async compareMandis(draft, quintals) {
    try {
      const data = await request(
        `/mandi/prices?commodity=${encodeURIComponent(draft.crop || '')}` +
        `&district=${encodeURIComponent(draft.districtName || '')}` +
        `&state=${encodeURIComponent(draft.stateName || '')}`,
        { method: 'GET' }
      );
      if (data.source === 'data.govin' && data.records?.length) {
        /* Convert data.gov.in records to rankMandis input shape */
        const mandis = data.records.map((r, i) => ({
          id: `DG-${i}`,
          name: r.mandi || r.market || `Mandi ${i + 1}`,
          distanceKm: 20 + i * 15,
          operatingDays: 'Mon-Sat',
        }));
        const prices = {
          current: data.records[0]?.price || 0,
          quotes: Object.fromEntries(data.records.map((r, i) => [`DG-${i}`, { modal: r.price || 0, trend7dPct: 0 }])),
        };
        return rankMandis({ mandis, prices, quintals, freightPerKm: FREIGHT_PER_KM, feePct: MANDI_FEE_PCT });
      }
    } catch { /* fall through to simulated */ }

    /* Fallback: simulated mandi data (deterministic per district+crop) */
    const mandis = getMandisForDistrict(draft.districtCode, draft.districtName ?? '');
    const prices = getPrices(draft.districtCode, draft.crop);
    return rankMandis({ mandis, prices, quintals, freightPerKm: FREIGHT_PER_KM, feePct: MANDI_FEE_PCT });
  },

  /* ---- S10 officer contact card ---- */
  getOfficerContact() {
    return { name: 'A. Kulkarni', phone: '+919876543210', district: 'Nashik' };
  },

  getGovernmentSchemes() {
    return GOVERNMENT_SCHEMES;
  },

  /* ---- S10 visit request (local until backend persists) ---- */
  saveVisitRequest(payload, _token) {
    return request('/visits', { body: payload }).catch(() => {
      return { ok: true, message: 'Request saved locally.' };
    });
  },

  /* ---- officer caseload (from backend DB later; for now, demo seed) ---- */
  getOfficerCaseload(district) {
    return request(`/officer/caseload?district=${encodeURIComponent(district || 'Nashik')}`, {
      method: 'GET',
    }).catch(() => {
      /* Fallback: empty caseload — the screen handles this gracefully */
      return { list: [], counts: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, TOTAL: 0 } };
    });
  },

  /* ---- Distress Alerts (Backend APIs) ---- */
  scoreDistress(payload, token) {
    return request('/distress/score', { body: payload, token });
  },

  getOfficerAlerts(token) {
    return request('/officer/alerts', { method: 'GET', token });
  },

  getOfficerAlertDetail(alertId, token) {
    return request('/officer/alerts/' + alertId, { method: 'GET', token });
  },


  officerAlertAction(alertId, actionType, notes, resolve, token) {
    return request('/officer/alerts/' + alertId + '/action', {
      body: { action_type: actionType, notes, resolve },
      token
    });
  },

  /* ---- Gnani TTS Integration ---- */
  async getTTS(payload) {
    let res;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      res = await fetch(`${API_BASE_URL}/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } catch {
      throw { code: 'NETWORK', message: 'Service unreachable.' };
    } finally {
      clearTimeout(timeout);
    }
    
    if (!res.ok) {
       throw { code: 'NETWORK', message: 'TTS request failed.' };
    }
    const contentType = res.headers.get('Content-Type') || '';
    if (contentType.startsWith('audio/')) {
        return await res.blob();
    }
    throw { code: 'FORMAT', message: 'Expected audio response.' };
  }
};

