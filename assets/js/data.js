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

/* Official scheme directory copied as data, not as UI, from the
   Krishi Sethi reference. Keep every external destination explicit
   so the Help screen can render the same safe card component. */
export const GOVERNMENT_SCHEMES = [
  {
    id: 'pm-kisan',
    category: 'Income support',
    title: 'PM-Kisan Samman Nidhi',
    description: 'Income support information and beneficiary status for eligible landholding farmers.',
    url: 'https://pmkisan.gov.in/',
    helplines: [
      { label: '155261', href: 'tel:155261' },
      { label: '011-24300606', href: 'tel:01124300606' },
    ],
  },
  {
    id: 'pmfby',
    category: 'Crop insurance',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    description: 'Crop insurance information, claim guidance, and policy status through the official portal.',
    url: 'https://pmfby.gov.in/',
    helplines: [
      { label: '14447', href: 'tel:14447' },
      { label: '1800-180-1551', href: 'tel:18001801551' },
    ],
  },
  {
    id: 'machinery',
    category: 'Equipment subsidy',
    title: 'Farm Equipment & Machinery Subsidies',
    description: 'Government assistance information for eligible farm machinery and equipment purchases.',
    url: 'https://agrimachinery.nic.in/index/index',
    helplines: [],
  },
  {
    id: 'kcc',
    category: 'Credit & loans',
    title: 'Kisan Credit Card (KCC)',
    description: 'Learn about crop-credit access, interest support, and the application route through official channels.',
    url: 'https://agricoop.nic.in',
    helplines: [{ label: '1800-11-2211', href: 'tel:1800112211' }],
  },
  {
    id: 'pmksy',
    category: 'Irrigation',
    title: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
    description: 'Official irrigation and water-use assistance information for eligible farmers.',
    url: 'https://pmksy.gov.in',
    helplines: [],
  },
  {
    id: 'enam',
    category: 'Mandi trading',
    title: 'National Agriculture Market (e-NAM)',
    description: 'Electronic trading information for connecting participating agricultural markets across India.',
    url: 'https://enam.gov.in',
    helplines: [{ label: '1800-270-0224', href: 'tel:18002700224' }],
  },
];
