/* ============================================================
   simWeather.js — Deterministic Precision Agronomy Simulator.
   Provides complete schema parity with LiveWeatherProvider.
   Strict Compliance: Zero Emojis, Strict Professional Tone.
   Interface Contract: PROJECT.md § Interface Contracts
   ============================================================ */

function hashCode(str) {
  let h = 7;
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const RAIN_BUCKETS = [0, 0, 2, 5, 12, 28, 48]; // mm per day

/**
 * Classify soil hydration into 5 agronomic tiers based on Volumetric Water Content (% VWC or m3/m3).
 * @param {number} input
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
 * Deterministically simulate precision agronomy weather telemetry.
 * Conforms to PROJECT.md § Interface Contracts.
 * @param {number|string} latOrCode
 * @param {number|Date} [lonOrDate]
 * @param {Date} [today]
 * @returns {Object}
 */
export function simulateAgriWeather(latOrCode = 20.0, lonOrDate = 73.8, today = new Date()) {
  let targetDate = today;
  let codeStr = '20.0_73.8';

  if (lonOrDate instanceof Date) {
    targetDate = lonOrDate;
    codeStr = String(latOrCode);
  } else if (typeof latOrCode === 'string') {
    codeStr = latOrCode;
  } else if (typeof latOrCode === 'number' && typeof lonOrDate === 'number') {
    codeStr = `${latOrCode.toFixed(2)}_${lonOrDate.toFixed(2)}`;
  }

  const dateKey = targetDate.toISOString().slice(0, 10);
  const seed = hashCode(`${codeStr}:${dateKey}`);
  const weekday = (targetDate.getDay() + 6) % 7;

  // 7-day daily forecast simulation
  const forecast = [];
  for (let i = 0; i < 7; i += 1) {
    const daySeed = hashCode(`${codeStr}:${dateKey}:${i}`);
    const rainMm = RAIN_BUCKETS[daySeed % RAIN_BUCKETS.length];
    const tmax = 28 + (daySeed % 12);
    const tmin = tmax - 6 - (daySeed % 3);
    const et0 = Math.round((3.2 + ((daySeed % 38) / 10)) * 10) / 10;
    const uvIndexMax = Math.round((5.0 + ((daySeed % 60) / 10)) * 10) / 10;
    const windSpeedMax = 8 + (daySeed % 16);
    const condition = rainMm >= 40 ? 'storm'
      : rainMm >= 10 ? 'rain'
        : rainMm >= 2 ? 'cloud' : 'clear';

    const dayDate = new Date(targetDate);
    dayDate.setDate(dayDate.getDate() + i);

    forecast.push({
      date: dayDate.toISOString().slice(0, 10),
      dayIndex: (weekday + i) % 7,
      tempMax: tmax,
      tempMin: tmin,
      precipitationSum: rainMm,
      et0,
      uvIndexMax,
      windSpeedMax,
      rainMm,
      tmax,
      tmin,
      condition
    });
  }

  const currentTemp = forecast[0].tmin + 3 + (seed % 6);
  const currentHumidity = 45 + (seed % 45);
  const currentWind = 5 + (seed % 15);
  const currentPrecip = forecast[0].rainMm > 15 ? 2.5 : 0;
  const currentApparent = Math.round((currentTemp + (currentHumidity > 70 ? 2.5 : -1.0)) * 10) / 10;

  const current = {
    temperature: currentTemp,
    apparentTemperature: currentApparent,
    humidity: currentHumidity,
    windSpeed: currentWind,
    windDirection: (seed * 37) % 360,
    precipitation: currentPrecip,
    cloudCover: 10 + (seed % 80),
    surfacePressure: 1005 + (seed % 18),
    uvIndex: Math.round((3.0 + ((seed % 80) / 10)) * 10) / 10,
    weatherCode: forecast[0].condition === 'storm' ? 95 : (forecast[0].condition === 'rain' ? 63 : (forecast[0].condition === 'cloud' ? 2 : 0))
  };

  const vwcBase = 16.0 + (seed % 24);
  const topsoilMoistureVwc = Math.round((vwcBase - 2.0 + (seed % 5)) * 10) / 10;
  const subsoilMoistureVwc = Math.round(vwcBase * 10) / 10;
  const deepMoistureVwc = Math.round((vwcBase + 4.0 + (seed % 4)) * 10) / 10;
  const currentMoistureVwc = subsoilMoistureVwc;
  const soilTemp = currentTemp - 2;

  const hydration = classifySoilHydration(currentMoistureVwc);

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
    et0: forecast[0].et0,
    tempMax: forecast[0].tempMax,
    tempMin: forecast[0].tempMin,
    precipSum: forecast[0].precipitationSum,
    uvIndexMax: forecast[0].uvIndexMax,
    windSpeedMax: forecast[0].windSpeedMax
  };

  return {
    current,
    soil,
    daily,
    forecast
  };
}

/**
 * Standard Simulated Weather Service for district codes.
 * Returns legacy interface properties alongside enriched precision agronomy structures.
 * @param {string} districtCode - e.g. 'NS'
 * @param {Date} [today]
 * @returns {Object}
 */
export function simulateWeather(districtCode = 'NS', today = new Date()) {
  const dateKey = today.toISOString().slice(0, 10);
  const seed = hashCode(`${districtCode}:${dateKey}`);
  const agri = simulateAgriWeather(districtCode, today);
  const forecast7d = agri.forecast;

  const normal = 480 + (seed % 220);
  const actual = Math.round(normal * (0.55 + (seed % 90) / 100));
  const devPct = Math.round(((actual - normal) / normal) * 100);
  const rainfall7dMm = forecast7d.reduce((sum, d) => sum + d.rainMm, 0);

  return {
    districtCode,
    dateKey,
    tempMaxC: forecast7d[0].tmax,
    humidityPct: agri.current.humidity,
    rainfall7dMm,
    seasonNormalMm: normal,
    seasonActualMm: actual,
    devPct,
    current: {
      temperature_2m: agri.current.temperature,
      relative_humidity_2m: agri.current.humidity,
      apparent_temperature: agri.current.apparentTemperature,
      precipitation: agri.current.precipitation,
      rain: agri.current.precipitation,
      weather_code: agri.current.weatherCode,
      cloud_cover: agri.current.cloudCover,
      surface_pressure: agri.current.surfacePressure,
      wind_speed_10m: agri.current.windSpeed,
      wind_direction_10m: agri.current.windDirection,
      uv_index: agri.current.uvIndex
    },
    soil: agri.soil,
    daily: agri.daily,
    dailyEt0: forecast7d.map(d => d.et0),
    soilMoisture: (agri.soil.currentMoistureVwc / 100).toFixed(2),
    forecast7d,
    forecast: forecast7d,
    agri
  };
}
