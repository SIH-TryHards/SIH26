/* ============================================================
   weather.js — Live Precision Agronomy Weather Service.
   Powered by Open-Meteo API (free, open-access, no API key).
   Strict Compliance: Zero Emojis, Strict Professional Tone.
   Interface Contract: PROJECT.md § Interface Contracts
   ============================================================ */

import { simulateAgriWeather } from './simWeather.js';

const GEO_CACHE = new Map();

const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

const CURRENT_PARAMS = [
  'temperature_2m',
  'relative_humidity_2m',
  'apparent_temperature',
  'precipitation',
  'rain',
  'weather_code',
  'cloud_cover',
  'surface_pressure',
  'wind_speed_10m',
  'wind_direction_10m',
  'uv_index'
].join(',');

const HOURLY_PARAMS = [
  'soil_moisture_0_to_1cm',
  'soil_moisture_1_to_3cm',
  'soil_moisture_3_to_9cm',
  'soil_moisture_9_to_27cm',
  'soil_temperature_0cm'
].join(',');

const DAILY_PARAMS = [
  'temperature_2m_max',
  'temperature_2m_min',
  'precipitation_sum',
  'et0_fao_evapotranspiration',
  'uv_index_max',
  'wind_speed_10m_max'
].join(',');

/**
 * Build fully parameterized Open-Meteo URL conforming to Precision Agronomy standards.
 * @param {number} lat
 * @param {number} lon
 * @returns {string}
 */
export function buildOpenMeteoUrl(lat, lon) {
  return `${OPEN_METEO_BASE_URL}?latitude=${lat}&longitude=${lon}&current=${CURRENT_PARAMS}&hourly=${HOURLY_PARAMS}&daily=${DAILY_PARAMS}&timezone=auto&forecast_days=7`;
}

/**
 * Classify soil hydration into 5 agronomic tiers based on Volumetric Water Content (% VWC or m3/m3).
 * @param {number} input - Raw theta (0.0 - 1.0 m3/m3) or percentage VWC (0 - 100%)
 * @returns {{ tier: 'saturated'|'optimal'|'adequate'|'depleted'|'stress', label: string, vwcPct: number, description: string }}
 */
export function classifySoilHydration(input) {
  let vwc = typeof input === 'number' && !isNaN(input) ? input : 25.0;
  if (vwc > 0 && vwc <= 1.0) {
    vwc = vwc * 100;
  }
  vwc = Math.max(0, Math.min(100, Math.round(vwc * 10) / 10));

  if (vwc > 40.0) {
    return {
      tier: 'saturated',
      label: 'Saturated (Drainage Required)',
      vwcPct: vwc,
      description: 'Macropores filled with gravitational water. Immediate drainage required to prevent root hypoxia.'
    };
  }
  if (vwc >= 25.0) {
    return {
      tier: 'optimal',
      label: 'Optimal (Field Capacity)',
      vwcPct: vwc,
      description: 'Field capacity equilibrium. Optimal balance of plant-available water and soil aeration.'
    };
  }
  if (vwc >= 18.0) {
    return {
      tier: 'adequate',
      label: 'Adequate Moisture',
      vwcPct: vwc,
      description: 'Capillary water readily accessible. Routine irrigation schedule recommended.'
    };
  }
  if (vwc >= 10.0) {
    return {
      tier: 'depleted',
      label: 'Depleted (Irrigation Needed)',
      vwcPct: vwc,
      description: 'Management allowed depletion threshold exceeded. Irrigation required to avoid biomass loss.'
    };
  }
  return {
    tier: 'stress',
    label: 'Critical Stress (Wilting Point)',
    vwcPct: vwc,
    description: 'Permanent wilting point reached. Emergency irrigation required to prevent crop mortality.'
  };
}

/**
 * Geocode Indian district name to WGS84 coordinates.
 * @param {string} districtName
 * @returns {Promise<{ lat: number, lon: number }>}
 */
export async function geocodeDistrict(districtName) {
  if (!districtName || typeof districtName !== 'string') {
    return { lat: 20.0, lon: 73.8 };
  }
  const key = districtName.toLowerCase().trim();
  if (GEO_CACHE.has(key)) return GEO_CACHE.get(key);

  try {
    const res = await fetch(
      `${GEOCODING_BASE_URL}?name=${encodeURIComponent(districtName)}&count=1&language=en&format=json`
    );
    const data = await res.json();
    if (data.results?.length) {
      const { latitude, longitude } = data.results[0];
      const loc = { lat: latitude, lon: longitude };
      GEO_CACHE.set(key, loc);
      return loc;
    }
  } catch {
    /* Fall through to default coordinates */
  }

  /* Default Fallback: Nashik (20.0, 73.8) — Central Maharashtra */
  const fallback = { lat: 20.0, lon: 73.8 };
  GEO_CACHE.set(key, fallback);
  return fallback;
}

/**
 * Normalize and parse raw Open-Meteo JSON payload into structured Precision Agronomy schema.
 * @param {Object} data - Raw Open-Meteo JSON
 * @returns {Object} Normalized telemetry payload conforming to PROJECT.md § Interface Contracts
 */
export function parseAgriWeatherResponse(data) {
  const currentData = data.current ?? {};
  const hourlyData = data.hourly ?? {};
  const dailyData = data.daily ?? {};

  // Soil moisture depth resolution
  const rawTopsoil = hourlyData.soil_moisture_0_to_1cm?.[0] ?? 0.22;
  const rawSeedbed = hourlyData.soil_moisture_1_to_3cm?.[0] ?? 0.25;
  const rawSubsoil = hourlyData.soil_moisture_3_to_9cm?.[0] ?? rawSeedbed;
  const rawDeep = hourlyData.soil_moisture_9_to_27cm?.[0] ?? 0.30;
  const soilTemp = Math.round((hourlyData.soil_temperature_0cm?.[0] ?? currentData.temperature_2m ?? 24) * 10) / 10;

  const topsoilMoistureVwc = Math.round(rawTopsoil * 1000) / 10;
  const subsoilMoistureVwc = Math.round(rawSubsoil * 1000) / 10;
  const deepMoistureVwc = Math.round(rawDeep * 1000) / 10;
  const currentMoistureVwc = subsoilMoistureVwc;

  const hydration = classifySoilHydration(currentMoistureVwc);

  const current = {
    temperature: Math.round((currentData.temperature_2m ?? 28) * 10) / 10,
    apparentTemperature: Math.round((currentData.apparent_temperature ?? currentData.temperature_2m ?? 28) * 10) / 10,
    humidity: Math.round(currentData.relative_humidity_2m ?? 60),
    windSpeed: Math.round((currentData.wind_speed_10m ?? 8) * 10) / 10,
    windDirection: Math.round(currentData.wind_direction_10m ?? 180),
    precipitation: Math.round((currentData.precipitation ?? 0) * 10) / 10,
    cloudCover: Math.round(currentData.cloud_cover ?? 20),
    surfacePressure: Math.round((currentData.surface_pressure ?? 1012) * 10) / 10,
    uvIndex: Math.round((currentData.uv_index ?? 5.0) * 10) / 10,
    weatherCode: currentData.weather_code ?? 0
  };

  const soil = {
    currentMoistureVwc,
    topsoilMoistureVwc,
    subsoilMoistureVwc,
    deepMoistureVwc,
    soilTemp,
    hydrationStatus: hydration.tier,
    hydrationLabel: hydration.label,
    hydrationDescription: hydration.description
  };

  const daily = {
    et0: Math.round((dailyData.et0_fao_evapotranspiration?.[0] ?? 4.0) * 10) / 10,
    tempMax: Math.round(dailyData.temperature_2m_max?.[0] ?? 32),
    tempMin: Math.round(dailyData.temperature_2m_min?.[0] ?? 22),
    precipSum: Math.round((dailyData.precipitation_sum?.[0] ?? 0) * 10) / 10,
    uvIndexMax: Math.round((dailyData.uv_index_max?.[0] ?? 6.0) * 10) / 10,
    windSpeedMax: Math.round((dailyData.wind_speed_10m_max?.[0] ?? 12.0) * 10) / 10
  };

  const weekday = (new Date().getDay() + 6) % 7;
  const forecast = [];
  const count = Math.max(
    7,
    dailyData.time?.length || 0,
    dailyData.precipitation_sum?.length || 0
  );

  for (let i = 0; i < Math.min(7, count); i++) {
    const rainMm = Math.round((dailyData.precipitation_sum?.[i] ?? 0) * 10) / 10;
    const tmax = Math.round(dailyData.temperature_2m_max?.[i] ?? 30);
    const tmin = Math.round(dailyData.temperature_2m_min?.[i] ?? 22);
    const et0Val = Math.round((dailyData.et0_fao_evapotranspiration?.[i] ?? 4.0) * 10) / 10;
    const uvVal = Math.round((dailyData.uv_index_max?.[i] ?? 6.0) * 10) / 10;
    const windVal = Math.round((dailyData.wind_speed_10m_max?.[i] ?? 10.0) * 10) / 10;
    const condition = rainMm >= 40 ? 'storm'
      : rainMm >= 10 ? 'rain'
        : rainMm >= 2 ? 'cloud' : 'clear';

    forecast.push({
      date: dailyData.time?.[i] || '',
      dayIndex: (weekday + i) % 7,
      tempMax: tmax,
      tempMin: tmin,
      precipitationSum: rainMm,
      et0: et0Val,
      uvIndexMax: uvVal,
      windSpeedMax: windVal,
      rainMm,
      tmax,
      tmin,
      condition
    });
  }

  return {
    current,
    soil,
    daily,
    forecast
  };
}

/**
 * Primary interface: Fetch precision agronomy telemetry from Open-Meteo API.
 * Conforms to PROJECT.md § Interface Contracts.
 * @param {number} lat - Latitude (-90.0 to 90.0)
 * @param {number} lon - Longitude (-180.0 to 180.0)
 * @returns {Promise<Object>}
 */
export async function fetchAgriWeather(lat, lon) {
  try {
    if (typeof lat !== 'number' || typeof lon !== 'number' || isNaN(lat) || isNaN(lon)) {
      throw new Error(`Invalid geographic coordinates: lat=${lat}, lon=${lon}`);
    }
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      throw new Error(`Coordinates out of bounds: lat=${lat}, lon=${lon}`);
    }

    const url = buildOpenMeteoUrl(lat, lon);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Open-Meteo HTTP ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();
    return parseAgriWeatherResponse(data);
  } catch {
    /* Safe offline simulation fallback */
    return simulateAgriWeather(lat, lon);
  }
}

/**
 * Backward-compatible full weather fetcher for district name.
 * Returns combined shape for legacy dashboard consumers + enriched precision agronomy structures.
 * @param {string} districtName
 * @param {Date} [today]
 * @returns {Promise<Object>}
 */
export async function fetchWeather(districtName, today = new Date()) {
  const dateKey = today.toISOString().slice(0, 10);
  const { lat, lon } = await geocodeDistrict(districtName);

  let agriData;
  try {
    agriData = await fetchAgriWeather(lat, lon);
  } catch {
    agriData = simulateAgriWeather(lat, lon, today);
  }

  const forecast7d = agriData.forecast || [];
  const rainfall7dMm = Math.round(forecast7d.reduce((s, d) => s + (d.rainMm || d.precipitationSum || 0), 0) * 10) / 10;
  const seasonNormalMm = 900;
  const dailyAvg = rainfall7dMm / (forecast7d.length || 7);
  const seasonActualMm = Math.round(dailyAvg * 122);
  const devPct = Math.round(((seasonActualMm - seasonNormalMm) / seasonNormalMm) * 100);

  const dailyEt0 = forecast7d.map(d => d.et0 ?? 4.0);

  return {
    districtCode: (districtName || 'NS').slice(0, 2).toUpperCase(),
    dateKey,
    tempMaxC: forecast7d[0]?.tmax ?? agriData.daily?.tempMax ?? 30,
    humidityPct: agriData.current?.humidity ?? 60,
    rainfall7dMm,
    seasonNormalMm,
    seasonActualMm,
    devPct,
    current: {
      temperature_2m: agriData.current.temperature,
      relative_humidity_2m: agriData.current.humidity,
      apparent_temperature: agriData.current.apparentTemperature,
      precipitation: agriData.current.precipitation,
      rain: agriData.current.precipitation,
      weather_code: agriData.current.weatherCode,
      cloud_cover: agriData.current.cloudCover,
      surface_pressure: agriData.current.surfacePressure,
      wind_speed_10m: agriData.current.windSpeed,
      wind_direction_10m: agriData.current.windDirection,
      uv_index: agriData.current.uvIndex
    },
    soil: agriData.soil,
    daily: agriData.daily,
    dailyEt0,
    soilMoisture: (agriData.soil.currentMoistureVwc / 100).toFixed(2),
    forecast7d,
    forecast: forecast7d,
    agri: agriData
  };
}
