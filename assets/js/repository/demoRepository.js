/* ============================================================
   Demo repository — demo mode's single data door (pathway.md
   PART 3 §1). Screens call these methods; they never import
   data.js or touch fetch(). Swapping to ApiRepository later
   must not require a screen change.
   ============================================================ */

import { LOCATION_TREE, SOIL_TYPES, IRRIGATION_TYPES, CROP_CATALOGUE,
         FREIGHT_PER_KM, MANDI_FEE_PCT, OFFICER, GOVERNMENT_SCHEMES } from '../data.js';
import { simulateWeather } from '../services/simWeather.js';
import { getMandisForDistrict, getPrices } from '../services/simPrices.js';
import { buildAdvisories, calculateStage } from '../advisory.js';
import { rankMandis } from '../mandi.js';

/* demo-mode account store (in-memory, mirrors the backend lifecycle) */
const demoAccounts = new Map();

export const demoRepository = {
  mode: 'demo',

  /* State → districts → villages for the S2 cascading selects. */
  getLocationTree() {
    return LOCATION_TREE;
  },

  /* S3 land form options. */
  getLandOptions() {
    return { soils: SOIL_TYPES, irrigation: IRRIGATION_TYPES };
  },

  /* S4 crop catalogue with varieties. */
  getCropCatalogue() {
    return CROP_CATALOGUE;
  },

  /* ---- demo auth fallback (pathway.md §8 demo-safety) ----
     Used only when the FastAPI service is unreachable. Same
     shapes as the real API; OTP fixed at 000000 per DECISIONS.md
     §3, officer creds mirror the seeded backend account. */
  async ping() {
    return false;
  },

  async requestOtp() {
    return { expires_in: 300, dev_code: '000000', sent: false };
  },

  async verifyOtp(phone, otp) {
    if (otp !== '000000') {
      throw { code: 'INVALID_OTP', message: 'Demo code is 000000.' };
    }
    /* demo recovery: same phone → same account (ACCOUNT §3.9) */
    const known = demoAccounts.get(phone);
    return { token: `demo-farmer-${phone}`, role: 'farmer',
             farmer: { phone, masked: `••• ${phone.slice(-3)}`,
                       new_account: !known,
                       has_profile: Boolean(known?.display_name) } };
  },

  async saveProfile(payload, token) {
    const phone = token?.replace('demo-farmer-', '') ?? '';
    const prev = demoAccounts.get(phone) ?? {};
    const record = { ...prev, ...payload };
    demoAccounts.set(phone, record);
    return { display_name: record.display_name, farm: {
      village_name: record.village_name, area_acres: record.area_acres,
      soil_type: record.soil_type, irrigation_type: record.irrigation_type,
    }, crop_cycle: {
      crop: record.crop, variety: record.variety, sown_on: record.sown_on,
      growth_stage: record.growth_stage, expected_harvest: record.expected_harvest,
    } };
  },

  async getMe(token) {
    const phone = token?.replace('demo-farmer-', '') ?? '';
    const rec = demoAccounts.get(phone);
    if (!rec) {
      return { phone_masked: `••• ${phone.slice(-3)}`, display_name: null,
               farm: null, crop_cycle: null };
    }
    return this.saveProfile(rec, token);
  },

  async loginOfficer(staffId, password) {
    if (staffId !== 'OFF-1001' || password !== 'Kisan@2026') {
      throw { code: 'INVALID_CREDENTIALS', message: 'Wrong staff ID or password.' };
    }
    return { token: `demo-officer-${Date.now()}`, role: 'officer',
             officer: { staff_id: staffId, name: 'A. Kulkarni', district: 'Nashik' } };
  },

  async logout() {
    return true;
  },

  /* ---- S7 farmer home (pathway.md P4) ----
     Composes the simulated weather provider + the pure advisory
     rules — the same composition the backend service will run.
     The farmer NEVER receives a risk score here (DECISIONS.md §6). */
  getFarmerHome(draft) {
    const weather = simulateWeather(draft.districtCode || draft.stateCode);
    const advisories = buildAdvisories(draft, weather);
    return { weather, advisories };
  },

  /* ---- S9 mandi comparison (pathway.md P6) ----
     SimulatedPriceProvider + pure rankMandis engine, composed here
     so the screen never touches data.js or the provider. */
  compareMandis(draft, quintals) {
    const mandis = getMandisForDistrict(draft.districtCode, draft.districtName ?? '');
    const prices = getPrices(draft.districtCode, draft.crop);
    const result = rankMandis({
      mandis, prices, quintals,
      freightPerKm: FREIGHT_PER_KM,
      feePct: MANDI_FEE_PCT,
    });
    return { ...result, quintals };
  },

  /* ---- S10 officer contact card ---- */
  getOfficerContact() {
    return OFFICER;
  },

  getGovernmentSchemes() {
    return GOVERNMENT_SCHEMES;
  },

  /* ---- O1–O6 Officer triage and caseload (pathway.md P9–P11) ---- */
  getOfficerCaseload(district = 'Nashik') {
    const list = [
      {
        id: 'F-101',
        name: 'Mohan Deshmukh',
        village: 'Niphad',
        district: district || 'Nashik',
        acres: 4.5,
        crop: 'Cotton',
        stage: 'Flowering',
        score: 88,
        band: 'CRITICAL',
        phone: '+919822012345',
        drivers: [
          { icon: 'rain', label: '48% Monsoon Deficit' },
          { icon: 'trend_down', label: '34% Mandi Price Crash' },
          { icon: 'alert', label: 'Flowering Heat Stress' },
          { icon: 'credit', label: 'Loan EMI Due in 12 days' },
        ],
        latestAction: null,
      },
      {
        id: 'F-102',
        name: 'Sanjay Shinde',
        village: 'Dindori',
        district: district || 'Nashik',
        acres: 3.0,
        crop: 'Onion',
        stage: 'Bulb Formation',
        score: 76,
        band: 'HIGH',
        phone: '+919822067890',
        drivers: [
          { icon: 'trend_down', label: '45% Price Drop vs 3mo Avg' },
          { icon: 'rain', label: '28% Rain Deficit' },
        ],
        latestAction: null,
      },
      {
        id: 'F-103',
        name: 'Sunita Patil',
        village: 'Lasalgaon',
        district: district || 'Nashik',
        acres: 5.2,
        crop: 'Soybean',
        stage: 'Grain Filling',
        score: 68,
        band: 'HIGH',
        phone: '+919822045678',
        drivers: [
          { icon: 'rain', label: '32% Rain Deficit' },
          { icon: 'sprout', label: 'Yield Critical Moisture Gap' },
        ],
        latestAction: null,
      },
      {
        id: 'F-104',
        name: 'Ramesh Gaikwad',
        village: 'Yeola',
        district: district || 'Nashik',
        acres: 2.5,
        crop: 'Tomato',
        stage: 'Harvest Ready',
        score: 52,
        band: 'MEDIUM',
        phone: '+919822089012',
        drivers: [
          { icon: 'trend_down', label: '22% Price Volatility' },
          { icon: 'rain', label: 'Heavy Rain Forecast on Ready Crop' },
        ],
        latestAction: null,
      },
      {
        id: 'F-105',
        name: 'Anil Jadhav',
        village: 'Sinnar',
        district: district || 'Nashik',
        acres: 6.0,
        crop: 'Wheat',
        stage: 'Vegetative',
        score: 24,
        band: 'LOW',
        phone: '+919822034567',
        drivers: [
          { icon: 'check', label: 'Crop on Track' },
          { icon: 'water', label: 'Canal Irrigation Active' },
        ],
        latestAction: null,
      },
    ];

    const counts = {
      CRITICAL: list.filter((c) => c.band === 'CRITICAL').length,
      HIGH: list.filter((c) => c.band === 'HIGH').length,
      MEDIUM: list.filter((c) => c.band === 'MEDIUM').length,
      LOW: list.filter((c) => c.band === 'LOW').length,
      TOTAL: list.length,
    };

    return { list, counts };
  },

  scoreDistress(payload, token) {
    return Promise.resolve({ alert_id: 999, risk_score: 80, risk_level: 'high', reasons: ['Mock reasons'] });
  },
  getOfficerAlerts(token) {
    return Promise.resolve({ alerts: [], counts: { critical: 0, high: 0, medium: 0, low: 0 } });
  },
  getOfficerAlertDetail(alertId, token) {
    return Promise.resolve({ id: alertId, risk_score: 80, risk_level: 'high', status: 'open', reasons: [], farmer: {name: 'Demo'}, interventions: [] });
  },

  officerAlertAction(alertId, actionType, notes, resolve, token) {
    return Promise.resolve({ ok: true });
  },

  async getTTS(payload) {
    return Promise.reject({ code: 'OFFLINE', message: 'TTS requires network.' });
  }
};

