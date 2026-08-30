/* ============================================================
   data.js — demo seed data ONLY. Screens must not import this
   file directly; they go through the repository layer
   (pathway.md PART 3 §1). In connected mode this tree comes
   from GET /geo/location-tree and nothing else changes.
   ============================================================ */

export { LOCATION_TREE } from './data/locations.js';

/* Soil / irrigation / crop seeds for the S3+S4 forms. `key` is the
   i18n key the UI renders; `value` is what engines and storage see. */
export const SOIL_TYPES = [
  { value: 'black', key: 'soil.black' },
  { value: 'red', key: 'soil.red' },
  { value: 'sandy', key: 'soil.sandy' },
  { value: 'loamy', key: 'soil.loamy' },
  { value: 'alluvial', key: 'soil.alluvial' },
  { value: 'lateritic', key: 'soil.lateritic' },
];

export const IRRIGATION_TYPES = [
  { value: 'rainfed', key: 'irrig.rainfed' },
  { value: 'canal', key: 'irrig.canal' },
  { value: 'borewell', key: 'irrig.borewell' },
  { value: 'well', key: 'irrig.well' },
  { value: 'drip', key: 'irrig.drip' },
  { value: 'sprinkler', key: 'irrig.sprinkler' },
];

/* Varieties are proper names — never machine-translated. */
export const CROP_CATALOGUE = [
  { value: 'cotton', key: 'crop.cotton', varieties: ['Bt Cotton', 'Suraj', 'Bunny'] },
  { value: 'onion', key: 'crop.onion', varieties: ['Nashik Red', 'Agrifound Light Red', 'Pusa Red'] },
  { value: 'soybean', key: 'crop.soybean', varieties: ['JS-9305', 'JS-335', 'MAUS-71'] },
  { value: 'chilli', key: 'crop.chilli', varieties: ['Teja', 'Byadgi', 'G4'] },
  { value: 'tomato', key: 'crop.tomato', varieties: ['Abhinav', 'Arka Rakshak', 'Pusa Ruby'] },
  { value: 'wheat', key: 'crop.wheat', varieties: ['HD-2967', 'Lokwan', 'Shresth'] },
  { value: 'rice', key: 'crop.rice', varieties: ['Sona Masuri', 'IR-64', 'Basmati 1121'] },
  { value: 'groundnut', key: 'crop.groundnut', varieties: ['TAG-24', 'JL-24', 'Girnar-2'] },
];

/* ---- mandi economics knobs (mandi.js) ---- */
export const FREIGHT_PER_KM = 40;   /* ₹/km, hired tempo, round trip */
export const MANDI_FEE_PCT = 0.01;  /* commission, share of gross */

/* ---- assigned officer (S10 contact card) ----
   Demo identity; the real assignment comes from farmer_profile
   .assigned_officer_id in connected mode. */
export const OFFICER = {
  name: 'A. Kulkarni',
  designation: 'Agriculture Officer',
  district: 'Nashik',
  phone: '+919000010001',   /* demo number */
};
