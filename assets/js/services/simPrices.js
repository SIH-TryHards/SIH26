/* ============================================================
   simPrices.js — SimulatedPriceProvider (pathway.md §5).
   Deterministic per district+crop: same inputs → same prices,
   so the net-revenue ranking is stable across the whole demo.
   A live AGMARKNET/data.gov.in adapter later replaces this via
   the repository — consumers never change.
   ============================================================ */

function hashCode(str) {
  let h = 7;
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/* rough ₹/quintal baselines, kharif 2026 */
const MSP_RATES = {
  cotton: 6620, onion: 1200, soybean: 4600, chilli: 11000,
  tomato: 1000, wheat: 2425, rice: 2300, groundnut: 6377,
};

const CROP_BASE = {
  cotton: 6800, onion: 1750, soybean: 4700, chilli: 15000,
  tomato: 1500, wheat: 2400, rice: 2200, groundnut: 6200,
};

const DAY_SUFFIXES = [
  { suffix: 'APMC', days: 'Mon–Sat', extraKm: 0 },
  { suffix: 'Krishi Upaj Mandi', days: 'Mon–Fri', extraKm: 18 },
  { suffix: 'Rural Market', days: 'Tue, Fri', extraKm: 34 },
];

/**
 * Three deterministic mandis for any district (762-district coverage).
 */
export function getMandisForDistrict(districtCode, districtName) {
  const baseSeed = hashCode(`${districtCode}:mandis`);
  return DAY_SUFFIXES.map((s, i) => {
    const seed = hashCode(`${districtCode}:m${i}`);
    return {
      id: `${districtCode}-m${i + 1}`,
      name: `${districtName} ${s.suffix}`,
      distanceKm: 8 + (seed % 26) + s.extraKm,
      operatingDays: s.days,
      _seed: seed,
    };
  }).map(({ _seed, ...m }) => ({ ...m, baseSeed }));
}

/**
 * Price series for one crop in one district, with per-mandi quotes.
 * avg3mo is the baseline; current can sit below (crash) or above it.
 */
export function getPrices(districtCode, crop) {
  const base = CROP_BASE[crop] ?? 3000;
  const seed = hashCode(`${districtCode}:${crop}`);

  const avg3mo = Math.round(base * (0.9 + (seed % 30) / 100));
  /* 25% of the time prices sit far below average (a crash worth advising on) */
  const crashFactor = (seed % 4) === 0 ? 0.62 + (seed % 12) / 100 : 0.94 + (seed % 14) / 100;
  const current = Math.round(avg3mo * crashFactor);

  const mandis = getMandisForDistrict(districtCode, '');
  const quotes = {};
  mandis.forEach((m) => {
    const q = hashCode(`${districtCode}:${crop}:${m.id}`);
    quotes[m.id] = {
      modal: Math.round(current * (0.95 + (q % 12) / 100)),
      trend7dPct: Math.round(((q % 130) - 55) / 10 * 10) / 10, // −5.5…+7.4 %
    };
  });

  return { crop, avg3mo, current, quotes };
}
