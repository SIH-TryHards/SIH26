/* ============================================================
   advisory.js — Pure Agronomic Decision & Calculation Engines.
   No DOM, no storage, no network.
   Strict Compliance: Zero Emojis, Strict Professional Tone.
   Interface Contract: PROJECT.md § Interface Contracts
   ============================================================ */

const DAY_MS = 86400000;

/**
 * Standardized 6-Stage Growth Keys and Display Names
 */
export const STAGE_KEYS = [
  'sowing',
  'vegetative',
  'flowering',
  'grain_fill',
  'maturity',
  'harvest_ready'
];

export const STAGE_DISPLAY_NAMES = [
  'Sowing / Germination',
  'Vegetative Canopy',
  'Flowering / Reproductive',
  'Grain Fill / Bulking',
  'Maturity / Ripening',
  'Harvest Ready'
];

/**
 * Agronomic Master Phenology Models for 12 Major Indian Crops.
 * Standardized to 6 lifecycle stages, stage thresholds, crop duration,
 * stage-specific FAO-56 crop coefficients (Kc), base temperature (Tbase),
 * and thermal heat unit targets (GDD).
 */
export const CROP_WINDOWS = {
  wheat: {
    name: 'Wheat',
    botanicalName: 'Triticum aestivum',
    season: 'Rabi',
    stages: [15, 50, 80, 110, 130],
    duration: 140,
    kc: [0.40, 0.80, 1.15, 1.10, 0.65, 0.25],
    tBase: 5.0,
    targetGdd: 1800
  },
  rice: {
    name: 'Rice',
    botanicalName: 'Oryza sativa',
    season: 'Kharif/Rabi',
    stages: [15, 45, 70, 95, 115],
    duration: 125,
    kc: [1.05, 1.15, 1.25, 1.10, 0.85, 0.50],
    tBase: 10.0,
    targetGdd: 2100
  },
  cotton: {
    name: 'Cotton',
    botanicalName: 'Gossypium hirsutum',
    season: 'Kharif',
    stages: [15, 50, 85, 120, 155],
    duration: 170,
    kc: [0.45, 0.75, 1.20, 1.05, 0.70, 0.40],
    tBase: 15.0,
    targetGdd: 2400
  },
  maize: {
    name: 'Maize',
    botanicalName: 'Zea mays',
    season: 'Kharif/Rabi',
    stages: [12, 35, 60, 85, 105],
    duration: 115,
    kc: [0.40, 0.80, 1.20, 1.05, 0.60, 0.35],
    tBase: 10.0,
    targetGdd: 1650
  },
  mustard: {
    name: 'Mustard',
    botanicalName: 'Brassica juncea',
    season: 'Rabi',
    stages: [12, 35, 60, 85, 105],
    duration: 115,
    kc: [0.40, 0.75, 1.15, 1.00, 0.55, 0.30],
    tBase: 5.0,
    targetGdd: 1500
  },
  soybean: {
    name: 'Soybean',
    botanicalName: 'Glycine max',
    season: 'Kharif',
    stages: [12, 40, 65, 85, 100],
    duration: 110,
    kc: [0.40, 0.75, 1.15, 1.05, 0.60, 0.35],
    tBase: 10.0,
    targetGdd: 1600
  },
  tomato: {
    name: 'Tomato',
    botanicalName: 'Solanum lycopersicum',
    season: 'Multi',
    stages: [10, 35, 55, 75, 90],
    duration: 100,
    kc: [0.45, 0.75, 1.15, 1.10, 0.80, 0.60],
    tBase: 10.0,
    targetGdd: 1750
  },
  potato: {
    name: 'Potato',
    botanicalName: 'Solanum tuberosum',
    season: 'Rabi',
    stages: [15, 35, 55, 80, 95],
    duration: 105,
    kc: [0.45, 0.80, 1.15, 1.10, 0.70, 0.40],
    tBase: 7.0,
    targetGdd: 1450
  },
  sugarcane: {
    name: 'Sugarcane',
    botanicalName: 'Saccharum officinarum',
    season: 'Annual',
    stages: [35, 100, 210, 290, 330],
    duration: 360,
    kc: [0.45, 0.85, 1.25, 1.10, 0.75, 0.50],
    tBase: 12.0,
    targetGdd: 4800
  },
  chilli: {
    name: 'Chilli',
    botanicalName: 'Capsicum annuum',
    season: 'Multi',
    stages: [15, 45, 75, 100, 130],
    duration: 140,
    kc: [0.40, 0.75, 1.10, 1.05, 0.80, 0.50],
    tBase: 10.0,
    targetGdd: 2000
  },
  onion: {
    name: 'Onion',
    botanicalName: 'Allium cepa',
    season: 'Rabi/Kharif',
    stages: [10, 30, 50, 70, 90],
    duration: 100,
    kc: [0.50, 0.75, 1.05, 1.00, 0.75, 0.50],
    tBase: 6.0,
    targetGdd: 1400
  },
  groundnut: {
    name: 'Groundnut',
    botanicalName: 'Arachis hypogaea',
    season: 'Kharif/Rabi',
    stages: [12, 40, 65, 90, 110],
    duration: 120,
    kc: [0.40, 0.75, 1.15, 1.05, 0.65, 0.40],
    tBase: 13.0,
    targetGdd: 1850
  }
};

const GENERIC_CROP_MODEL = {
  name: 'Generic Crop',
  botanicalName: 'Plantae',
  season: 'Kharif',
  stages: [15, 45, 75, 100, 120],
  duration: 120,
  kc: [0.45, 0.75, 1.15, 1.05, 0.70, 0.40],
  tBase: 10.0,
  targetGdd: 1600
};

/**
 * Calculate multi-variable crop phenology metrics based on sowing date and crop model.
 * Conforms to PROJECT.md § Interface Contracts.
 * @param {string} cropType - Crop name or key (e.g. 'wheat', 'rice')
 * @param {string|Date} sowingDate - Sowing date ('YYYY-MM-DD' or Date)
 * @param {Date} [currentDate] - Evaluation date (defaults to now)
 * @param {Array<number>} [tempHistory] - Optional daily average temperature array for actual GDD
 * @returns {Object} Phenology status object
 */
export function calculateCropPhenology(cropType, sowingDate, currentDate = new Date(), tempHistory = null) {
  let today = (currentDate instanceof Date && !isNaN(currentDate.getTime()))
    ? currentDate
    : new Date(currentDate || Date.now());
  if (isNaN(today.getTime())) today = new Date();
  
  let sown;
  if (sowingDate instanceof Date && !isNaN(sowingDate.getTime())) {
    sown = sowingDate;
  } else if (typeof sowingDate === 'string' && sowingDate.trim()) {
    const parsed = new Date(`${sowingDate.trim().slice(0, 10)}T00:00:00`);
    sown = !isNaN(parsed.getTime()) ? parsed : new Date(today);
  } else {
    sown = new Date(today);
  }

  const daysElapsed = Math.max(0, Math.floor((today.getTime() - sown.getTime()) / DAY_MS));

  const cropKey = (cropType || '').toString().toLowerCase().trim().replace(/[^a-z]/g, '');
  const model = CROP_WINDOWS[cropKey] || GENERIC_CROP_MODEL;

  const thresholds = model.stages; // [T1, T2, T3, T4, T5]
  const totalDuration = model.duration;

  let stageIndex = thresholds.findIndex(t => daysElapsed < t);
  if (stageIndex === -1) {
    stageIndex = STAGE_KEYS.length - 1; // stage 5: harvest_ready
  }

  const stageKey = STAGE_KEYS[stageIndex];
  const stageName = STAGE_DISPLAY_NAMES[stageIndex];

  // Stage duration & days in stage derivation
  let stageStartDay = 0;
  let stageEndDay = thresholds[0];
  if (stageIndex === 0) {
    stageStartDay = 0;
    stageEndDay = thresholds[0];
  } else if (stageIndex < 5) {
    stageStartDay = thresholds[stageIndex - 1];
    stageEndDay = thresholds[stageIndex];
  } else {
    stageStartDay = thresholds[4];
    stageEndDay = totalDuration;
  }

  const stageDuration = Math.max(1, stageEndDay - stageStartDay);
  const daysInStage = Math.max(0, Math.min(stageDuration, daysElapsed - stageStartDay));

  const progressPct = Math.min(100, Math.max(0, Math.round((daysElapsed / totalDuration) * 100)));

  const harvestTime = new Date(sown.getTime() + totalDuration * DAY_MS);
  const expectedHarvestDate = !isNaN(harvestTime.getTime()) ? harvestTime.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);

  const kc = model.kc[stageIndex] ?? 0.80;

  // Growing Degree Days (GDD) Calculation
  let gddAccrued = 0;
  if (Array.isArray(tempHistory) && tempHistory.length > 0) {
    gddAccrued = Math.round(
      tempHistory.reduce((sum, t) => sum + Math.max(0, t - model.tBase), 0)
    );
  } else {
    // Standard thermal climatology approximation (assuming daily mean of 27.5 °C)
    const dailyMeanTemp = 27.5;
    const dailyGdd = Math.max(0, dailyMeanTemp - model.tBase);
    gddAccrued = Math.round(Math.min(model.targetGdd, daysElapsed * dailyGdd));
  }

  return {
    crop: cropKey,
    cropName: model.name,
    sowingDate: sown.toISOString().slice(0, 10),
    daysElapsed,
    totalDuration,
    stageIndex,
    stageKey,
    stageName,
    progressPct,
    daysInStage,
    stageDuration,
    expectedHarvestDate,
    kc,
    gddAccrued,
    targetGdd: model.targetGdd,
    tBase: model.tBase
  };
}

/**
 * Backward-compatible wrapper for legacy callers of calculateStage.
 * @param {string} sownOnISO
 * @param {string|Date} [crop]
 * @param {Date} [today]
 * @returns {Object}
 */
export function calculateStage(sownOnISO, crop, today = new Date()) {
  if (crop instanceof Date) {
    today = crop;
    crop = undefined;
  }
  const phenology = calculateCropPhenology(crop, sownOnISO, today);
  return {
    stage: phenology.stageKey === 'grain_fill' ? 'grain-fill' : (phenology.stageKey === 'harvest_ready' ? 'harvest-ready' : phenology.stageKey),
    stageKey: phenology.stageKey,
    stageIndex: phenology.stageIndex,
    stageName: phenology.stageName,
    daysSinceSowing: phenology.daysElapsed,
    expectedHarvest: phenology.expectedHarvestDate,
    progressPct: phenology.progressPct,
    kc: phenology.kc,
    gddAccrued: phenology.gddAccrued
  };
}

/**
 * FAO-56 Crop Water Demand (ETc) & Volumetric Requirement Engine.
 * Formulations:
 *   ETc (mm/day) = ET0 (mm/day) * Kc
 *   Volume (Liters/Acre) = ETc (mm) * 4046.8564 Liters/(mm * Acre)
 * @param {number} et0Mm - Reference evapotranspiration (mm/day)
 * @param {string} cropType - Crop name
 * @param {number|string} stage - Stage index (0-5) or stage key
 * @param {number} areaAcres - Farm area in acres
 * @returns {Object}
 */
export function calculateCropWaterDemand(et0Mm = 4.0, cropType = 'wheat', stage = 1, areaAcres = 1.0) {
  const cropKey = (cropType || '').toString().toLowerCase().trim().replace(/[^a-z]/g, '');
  const model = CROP_WINDOWS[cropKey] || GENERIC_CROP_MODEL;

  let stageIdx = 0;
  if (typeof stage === 'number') {
    stageIdx = Math.max(0, Math.min(5, Math.floor(stage)));
  } else if (typeof stage === 'string') {
    const norm = stage.toLowerCase().replace('-', '_');
    const found = STAGE_KEYS.indexOf(norm);
    stageIdx = found >= 0 ? found : 0;
  }

  const kc = model.kc[stageIdx] ?? 0.80;
  const et0 = Math.max(0, typeof et0Mm === 'number' && !isNaN(et0Mm) ? et0Mm : 4.0);
  const acres = Math.max(0, typeof areaAcres === 'number' && !isNaN(areaAcres) ? areaAcres : 1.0);

  const etcMm = Math.round(et0 * kc * 100) / 100;
  const litersPerAcre = Math.round(etcMm * 4046.8564);
  const totalLiters = Math.round(litersPerAcre * acres);

  return {
    crop: cropKey,
    cropName: model.name,
    stageIndex: stageIdx,
    stageKey: STAGE_KEYS[stageIdx],
    kc,
    et0Mm: et0,
    etcMm,
    litersPerAcre,
    totalLiters,
    areaAcres: acres
  };
}

/**
 * Microclimatic Chemical Spray Feasibility Engine.
 * Evaluates Delta T, surface thermal inversion, wind drift, rainfastness, and temperature boundaries.
 * Precedence-ranked safety rating: 'optimal' | 'caution' | 'unsafe'.
 * Conforms to PROJECT.md § Interface Contracts.
 * @param {Object} currentWeather - Current weather telemetry
 * @param {Array|Object} hourlyForecast - Hourly telemetry or 7-day forecast array
 * @returns {Object} Spray safety decision result
 */
export function evaluateSprayWindow(currentWeather = {}, hourlyForecast = []) {
  const temp = typeof currentWeather.temperature === 'number' ? currentWeather.temperature
    : (typeof currentWeather.temperature_2m === 'number' ? currentWeather.temperature_2m
      : (typeof currentWeather.tempMaxC === 'number' ? currentWeather.tempMaxC : 26));

  const rh = typeof currentWeather.humidity === 'number' ? currentWeather.humidity
    : (typeof currentWeather.relative_humidity_2m === 'number' ? currentWeather.relative_humidity_2m
      : (typeof currentWeather.humidityPct === 'number' ? currentWeather.humidityPct : 60));

  const windSpeed = typeof currentWeather.windSpeed === 'number' ? currentWeather.windSpeed
    : (typeof currentWeather.wind_speed_10m === 'number' ? currentWeather.wind_speed_10m : 8);

  const currentRain = typeof currentWeather.precipitation === 'number' ? currentWeather.precipitation
    : (typeof currentWeather.rain === 'number' ? currentWeather.rain : 0);

  // Tomorrow rain assessment
  let tomorrowRain = 0;
  if (Array.isArray(hourlyForecast) && hourlyForecast.length > 0) {
    if (hourlyForecast[1]?.precipitationSum !== undefined) {
      tomorrowRain = hourlyForecast[1].precipitationSum;
    } else if (hourlyForecast[1]?.rainMm !== undefined) {
      tomorrowRain = hourlyForecast[1].rainMm;
    } else if (typeof hourlyForecast[0]?.precipitation === 'number') {
      tomorrowRain = hourlyForecast.slice(0, 24).reduce((s, h) => s + (h.precipitation || 0), 0);
    }
  } else if (hourlyForecast && typeof hourlyForecast === 'object') {
    tomorrowRain = hourlyForecast.precipitationSum ?? hourlyForecast.rainMm ?? hourlyForecast.precipitation ?? 0;
  }

  // Delta T Approximation: Delta T ~= Tdry * (1 - RH/100) * 0.7
  const deltaT = Math.round(temp * (1 - (rh / 100)) * 0.7 * 10) / 10;

  const params = {
    tempC: temp,
    rhPct: rh,
    windSpeedKmH: windSpeed,
    rainMm: currentRain,
    tomorrowRainMm: tomorrowRain,
    deltaTC: deltaT
  };

  // Precedence 1: Rain Active or Imminent Rainfastness Hazard
  if (currentRain > 0 || tomorrowRain >= 2.0) {
    return {
      status: 'unsafe',
      severity: 'danger',
      titleKey: 'spray.unsafeTitle',
      reasonKey: 'spray.rainImminent',
      reasonText: 'Rainfall active or imminent within rainfastness window (risk of chemical wash-off)',
      reason: 'Rainfall active or imminent within rainfastness window (risk of chemical wash-off)',
      score: 10,
      windowTimeSlot: 'Prohibited',
      recommendedSlots: [],
      deltaT,
      params,
      constraints: { rainHazard: true }
    };
  }

  // Precedence 2: Thermal Inversion Hazard (Calm wind < 3 km/h)
  if (windSpeed < 3.0) {
    return {
      status: 'unsafe',
      severity: 'danger',
      titleKey: 'spray.unsafeTitle',
      reasonKey: 'spray.thermalInversion',
      reasonText: 'Surface thermal inversion hazard (calm wind < 3 km/h traps chemical vapor)',
      reason: 'Surface thermal inversion hazard (calm wind < 3 km/h traps chemical vapor)',
      score: 20,
      windowTimeSlot: 'Prohibited',
      recommendedSlots: [],
      deltaT,
      params,
      constraints: { thermalInversion: true }
    };
  }

  // Precedence 3: High Wind Drift Hazard (> 20 km/h)
  if (windSpeed > 20.0) {
    return {
      status: 'unsafe',
      severity: 'danger',
      titleKey: 'spray.unsafeTitle',
      reasonKey: 'spray.windHigh',
      reasonText: 'High wind drift hazard (wind speed > 20 km/h causes off-target drift)',
      reason: 'High wind drift hazard (wind speed > 20 km/h causes off-target drift)',
      score: 15,
      windowTimeSlot: 'Prohibited',
      recommendedSlots: [],
      deltaT,
      params,
      constraints: { windDrift: true }
    };
  }

  // Precedence 4: Extreme Temperature / Heat Scorch Hazard (> 35 C)
  if (temp > 35.0) {
    return {
      status: 'unsafe',
      severity: 'danger',
      titleKey: 'spray.unsafeTitle',
      reasonKey: 'spray.heatScorch',
      reasonText: 'Extreme heat hazard (temperature > 35 C causes leaf scorch and droplet evaporation)',
      reason: 'Extreme heat hazard (temperature > 35 C causes leaf scorch and droplet evaporation)',
      score: 25,
      windowTimeSlot: 'Prohibited',
      recommendedSlots: [],
      deltaT,
      params,
      constraints: { heatScorch: true }
    };
  }

  // Precedence 5: Excessive Delta T (> 10 C)
  if (deltaT > 10.0) {
    return {
      status: 'unsafe',
      severity: 'danger',
      titleKey: 'spray.unsafeTitle',
      reasonKey: 'spray.deltaTHigh',
      reasonText: 'High Delta T (> 10 C causes rapid droplet evaporation before canopy contact)',
      reason: 'High Delta T (> 10 C causes rapid droplet evaporation before canopy contact)',
      score: 30,
      windowTimeSlot: 'Prohibited',
      recommendedSlots: [],
      deltaT,
      params,
      constraints: { deltaTHigh: true }
    };
  }

  // Precedence 6: Moderate Wind Drift (15-20 km/h)
  if (windSpeed >= 15.0) {
    return {
      status: 'caution',
      severity: 'warning',
      titleKey: 'spray.cautionTitle',
      reasonKey: 'spray.windModerate',
      reasonText: 'Moderate wind (15-20 km/h) - use low-drift nozzles and reduced boom height',
      reason: 'Moderate wind (15-20 km/h) - use low-drift nozzles and reduced boom height',
      score: 60,
      windowTimeSlot: '06:00 - 08:30',
      recommendedSlots: ['06:00 - 08:30'],
      deltaT,
      params,
      constraints: { moderateWind: true }
    };
  }

  // Precedence 7: Elevated Temperature (30-35 C)
  if (temp >= 30.0) {
    return {
      status: 'caution',
      severity: 'warning',
      titleKey: 'spray.cautionTitle',
      reasonKey: 'spray.heatMorningOnly',
      reasonText: 'Elevated temperature (30-35 C) - restrict spraying strictly to early morning',
      reason: 'Elevated temperature (30-35 C) - restrict spraying strictly to early morning',
      score: 65,
      windowTimeSlot: '06:00 - 08:30',
      recommendedSlots: ['06:00 - 08:30'],
      deltaT,
      params,
      constraints: { elevatedTemp: true }
    };
  }

  // Precedence 8: Suboptimal Humidity (RH < 40% or > 80%)
  if (rh < 40 || rh > 80) {
    return {
      status: 'caution',
      severity: 'warning',
      titleKey: 'spray.cautionTitle',
      reasonKey: 'spray.rhSuboptimal',
      reasonText: 'Suboptimal relative humidity - monitor droplet evaporation or fungal risk',
      reason: 'Suboptimal relative humidity - monitor droplet evaporation or fungal risk',
      score: 70,
      windowTimeSlot: '06:30 - 09:00',
      recommendedSlots: ['06:30 - 09:00'],
      deltaT,
      params,
      constraints: { suboptimalRh: true }
    };
  }

  // Precedence 9: Marginal Delta T (Delta T < 2.0 C or between 8.0 and 10.0 C)
  if (deltaT < 2.0 || deltaT > 8.0) {
    return {
      status: 'caution',
      severity: 'warning',
      titleKey: 'spray.cautionTitle',
      reasonKey: 'spray.deltaTCaution',
      reasonText: 'Marginal Delta T - droplet survival or evaporation slightly off ideal range',
      reason: 'Marginal Delta T - droplet survival or evaporation slightly off ideal range',
      score: 75,
      windowTimeSlot: '06:00 - 09:00',
      recommendedSlots: ['06:00 - 09:00'],
      deltaT,
      params,
      constraints: { marginalDeltaT: true }
    };
  }

  // Default: Optimal Spray Conditions
  return {
    status: 'optimal',
    severity: 'success',
    titleKey: 'spray.optimalTitle',
    reasonKey: 'spray.optimal',
    reasonText: 'Optimal microclimatic conditions for chemical application',
    reason: 'Optimal microclimatic conditions for chemical application',
    score: 95,
    windowTimeSlot: '06:00 - 09:30',
    recommendedSlots: ['06:00 - 09:30', '16:30 - 18:30'],
    deltaT,
    params,
    constraints: {}
  };
}

/**
 * Generate Forward-Looking Precision Agronomy Tomorrow's Action Plan.
 * Synthesizes forecast agro-meteorology, active crop phenology, and soil hydrology.
 * Conforms to PROJECT.md § Interface Contracts.
 * @param {Object} profile - Farmer profile ({ crop, sowingDate, areaAcres, soilType, irrigation })
 * @param {Object} tomorrowWeather - Tomorrow forecast record or full weather object
 * @param {Object|string} [phenologyStage] - Crop phenology object or stage key
 * @param {Object|string} [soilHydration] - Soil status object or tier string
 * @returns {Object} Tomorrow action plan
 */
export function buildTomorrowActionPlan(profile = {}, tomorrowWeather = {}, phenologyStage = null, soilHydration = null) {
  // 1. Resolve tomorrow's weather summary
  let tw = tomorrowWeather;
  if (tw?.forecast && Array.isArray(tw.forecast) && tw.forecast[1]) {
    tw = tw.forecast[1];
  } else if (tw?.forecast7d && Array.isArray(tw.forecast7d) && tw.forecast7d[1]) {
    tw = tw.forecast7d[1];
  }

  const tmax = tw?.tempMax ?? tw?.tmax ?? 32;
  const tmin = tw?.tempMin ?? tw?.tmin ?? 22;
  const rain = tw?.precipitationSum ?? tw?.rainMm ?? tw?.precipitation ?? 0;
  const et0 = tw?.et0 ?? tw?.et0_fao_evapotranspiration ?? 4.5;
  const condition = tw?.condition ?? (rain >= 40 ? 'storm' : (rain >= 10 ? 'rain' : (rain >= 2 ? 'cloud' : 'clear')));

  const weatherSummary = {
    tmax,
    tmin,
    rainMm: rain,
    et0Mm: et0,
    condition
  };

  const synopsis = `${condition.toUpperCase()} - Temp: ${tmin}-${tmax} C, Rain: ${rain} mm, ET0: ${et0} mm/day.`;

  // 2. Resolve crop phenology stage
  let stageKey = 'vegetative';
  let stageName = 'Vegetative Canopy';
  if (typeof phenologyStage === 'string') {
    stageKey = phenologyStage.toLowerCase().replace('-', '_');
    const idx = STAGE_KEYS.indexOf(stageKey);
    stageName = idx >= 0 ? STAGE_DISPLAY_NAMES[idx] : phenologyStage;
  } else if (phenologyStage && typeof phenologyStage === 'object') {
    stageKey = (phenologyStage.stageKey || phenologyStage.stage || 'vegetative').toLowerCase().replace('-', '_');
    stageName = phenologyStage.stageName || phenologyStage.stage || 'Vegetative Canopy';
  } else if (profile.sowingDate && profile.crop) {
    const pheno = calculateCropPhenology(profile.crop, profile.sowingDate);
    stageKey = pheno.stageKey;
    stageName = pheno.stageName;
  }

  // 3. Resolve soil hydration
  let hydStatus = 'optimal';
  if (typeof soilHydration === 'string') {
    hydStatus = soilHydration.toLowerCase();
  } else if (soilHydration && typeof soilHydration === 'object') {
    hydStatus = (soilHydration.hydrationStatus || soilHydration.tier || 'optimal').toLowerCase();
  }

  // 4. Operational Stage Priority
  const cropName = (profile.crop || 'Crop').toString().toUpperCase();
  const stagePriorities = {
    sowing: {
      title: 'Seedbed Moisture & Germination Inspection',
      body: `Inspect seedbed emergence for ${cropName}. Maintain topsoil moisture and prevent soil crusting.`
    },
    vegetative: {
      title: 'Canopy Aeration & Nitrogen Management',
      body: `Support active vegetative growth for ${cropName}. Monitor tiller count and apply scheduled split nutrients.`
    },
    flowering: {
      title: 'Pollination Protection & Critical Moisture Watch',
      body: `Critical reproductive stage for ${cropName}. Prevent moisture stress and scout daily for sucking pests.`
    },
    grain_fill: {
      title: 'Kernel Bulking & Nutrient Translocation',
      body: `Ensure consistent moisture for ${cropName} grain development. Apply foliar potassium if recommended.`
    },
    maturity: {
      title: 'Pre-Harvest Desiccation & Storage Prep',
      body: `Monitor grain moisture reduction for ${cropName}. Taper irrigation and prepare harvesting machinery.`
    },
    harvest_ready: {
      title: 'Harvest Mobilization & Moisture Sampling',
      body: `Field moisture optimal for ${cropName} harvesting. Coordinate picking/threshing during dry morning weather.`
    }
  };

  const priority = stagePriorities[stageKey] || stagePriorities.vegetative;
  const cropPriority = {
    stage: stageKey,
    stageName,
    priorityTitle: priority.title,
    priorityBody: priority.body
  };

  // 5. Irrigation Directive
  const irrigationType = (profile.irrigation || '').toLowerCase();
  const areaAcres = parseFloat(profile.areaAcres) || 1.0;
  const demand = calculateCropWaterDemand(et0, profile.crop || 'wheat', stageKey, areaAcres);

  let irrigationDirective = {
    action: 'APPLY',
    quantityLitersPerAcre: demand.litersPerAcre,
    totalLiters: demand.totalLiters,
    rationale: `Apply crop water demand of ${demand.litersPerAcre.toLocaleString()} Liters/Acre (${demand.totalLiters.toLocaleString()} L total) during early morning (06:00 - 08:30).`
  };

  if (rain >= 10.0) {
    irrigationDirective = {
      action: 'SUSPEND',
      quantityLitersPerAcre: 0,
      totalLiters: 0,
      rationale: `Heavy rainfall predicted (${rain} mm). Suspend all irrigation to prevent root waterlogging and nutrient runoff.`
    };
  } else if (rain >= 2.0) {
    irrigationDirective = {
      action: 'POSTPONE',
      quantityLitersPerAcre: 0,
      totalLiters: 0,
      rationale: `Moderate rainfall forecast (${rain} mm). Postpone irrigation and reassess root zone moisture tomorrow afternoon.`
    };
  } else if (irrigationType === 'rainfed') {
    irrigationDirective = {
      action: 'CONSERVE',
      quantityLitersPerAcre: 0,
      totalLiters: 0,
      rationale: 'Rainfed cultivation active. Implement organic mulching and inter-row weed clearance to conserve soil moisture.'
    };
  } else if (hydStatus === 'saturated') {
    irrigationDirective = {
      action: 'DRAIN',
      quantityLitersPerAcre: 0,
      totalLiters: 0,
      rationale: 'Soil is at saturation (> 40% VWC). Open field drainage ditches to prevent root asphyxiation.'
    };
  }

  // 6. Spray Window Evaluation for Tomorrow
  const spraySafety = evaluateSprayWindow({
    temperature: tmax - 2,
    humidity: tw?.humidity ?? 60,
    windSpeed: tw?.windSpeedMax ?? 10,
    precipitation: rain
  }, tw);

  // 7. 3-Point Field Checklist
  let waterTask = '';
  if (irrigationDirective.action === 'APPLY') {
    waterTask = `Irrigation: Apply ${demand.litersPerAcre.toLocaleString()} Liters/Acre before 08:30`;
  } else if (irrigationDirective.action === 'SUSPEND') {
    waterTask = `Irrigation: Suspend all pumping due to ${rain} mm rain forecast`;
  } else if (irrigationDirective.action === 'POSTPONE') {
    waterTask = `Irrigation: Postpone pumping and check root zone moisture post-rain`;
  } else if (irrigationDirective.action === 'CONSERVE') {
    waterTask = 'Soil Moisture: Maintain mulch cover and clear weeds to conserve moisture';
  } else {
    waterTask = 'Drainage: Inspect and clear field drainage channels immediately';
  }

  let sprayTask = '';
  if (spraySafety.status === 'optimal') {
    sprayTask = `Plant Protection: Safe spray window active from ${spraySafety.windowTimeSlot}`;
  } else if (spraySafety.status === 'caution') {
    sprayTask = `Plant Protection: Caution window ${spraySafety.windowTimeSlot} (Use low-drift nozzles)`;
  } else {
    sprayTask = `Plant Protection: Spray prohibited (${spraySafety.reasonText})`;
  }

  let scoutTask = `Crop Scouting: ${priority.title} for ${cropName} (${stageName})`;

  const checklist = [waterTask, sprayTask, scoutTask];

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const dateISO = tomorrowDate.toISOString().slice(0, 10);

  return {
    dateISO,
    synopsis,
    weatherSummary,
    cropPriority,
    operationalPriority: `${priority.title}: ${priority.body}`,
    irrigationDirective,
    spraySafety,
    checklist
  };
}

/* ------------------------------------------------------------
   buildAdvisories — Ordered Rule Set for farmer dashboard.
   Maintains backward compatibility with S7 advisory components.
   ------------------------------------------------------------ */

const SEVERITY_ORDER = { urgent: 0, warning: 1, info: 2 };
const GROWTH_STAGES = ['sowing', 'vegetative', 'flowering'];

export function buildAdvisories(draft, weather) {
  const out = [];
  const rawStage = draft?.growthStage ?? 'vegetative';
  const stage = rawStage.replace('_', '-');
  const crop = draft?.crop ?? '';
  const soil = draft?.soilType ?? '';
  const irrigation = draft?.irrigation ?? '';

  if (!weather || (!weather.forecast7d && !weather.forecast)) {
    out.push({
      severity: 'info',
      titleKey: 'adv.allClear.title',
      bodyKey: 'adv.allClear.body',
      whyKey: 'adv.allClear.why',
      params: { crop, stage }
    });
    return out;
  }

  const forecast = weather.forecast7d || weather.forecast || [];

  // Rule 1+2: Heavy rain within 48h
  const heavy = forecast.slice(0, 2).find(d => (d.rainMm || d.precipitationSum || 0) >= 40);

  if (heavy && (stage === 'harvest-ready' || stage === 'harvest_ready')) {
    out.push({
      severity: 'urgent',
      titleKey: 'adv.harvestRain.title',
      bodyKey: 'adv.harvestRain.body',
      whyKey: 'adv.harvestRain.why',
      params: { mm: heavy.rainMm || heavy.precipitationSum, crop, dayIndex: heavy.dayIndex }
    });
  } else if (heavy) {
    out.push({
      severity: 'warning',
      titleKey: 'adv.holdSpray.title',
      bodyKey: 'adv.holdSpray.body',
      whyKey: 'adv.holdSpray.why',
      params: { mm: heavy.rainMm || heavy.precipitationSum, dayIndex: heavy.dayIndex }
    });
  }

  // Rule 3: Seasonal rainfall deficit during growth stages
  if ((weather.devPct ?? 0) <= -40 && GROWTH_STAGES.includes(stage)) {
    out.push({
      severity: 'warning',
      titleKey: 'adv.irrigate.title',
      bodyKey: 'adv.irrigate.body',
      whyKey: 'adv.irrigate.why',
      params: {
        district: draft.districtName || 'Farm',
        pct: Math.abs(weather.devPct),
        crop,
        stage
      }
    });
  }

  // Rule 4: Heat stress
  const tmax = weather.tempMaxC ?? weather.current?.temperature ?? weather.daily?.tempMax ?? 30;
  if (tmax >= 38) {
    out.push({
      severity: 'warning',
      titleKey: 'adv.heat.title',
      bodyKey: 'adv.heat.body',
      whyKey: 'adv.heat.why',
      params: { tmax }
    });
  }

  // Rule 5: Waterlogging risk
  const rainNext3 = forecast.slice(0, 3).reduce((s, d) => s + (d.rainMm || d.precipitationSum || 0), 0);
  if (rainNext3 >= 80 && (soil === 'sandy' || soil === 'lateritic') && GROWTH_STAGES.includes(stage)) {
    out.push({
      severity: 'warning',
      titleKey: 'adv.waterlog.title',
      bodyKey: 'adv.waterlog.body',
      whyKey: 'adv.waterlog.why',
      params: { mm: Math.round(rainNext3), crop, soil }
    });
  }

  // Rule 6: Rainfed drought vulnerability
  if (irrigation === 'rainfed' && (weather.devPct ?? 0) <= -25 && (weather.devPct ?? 0) > -40 && GROWTH_STAGES.includes(stage)) {
    out.push({
      severity: 'warning',
      titleKey: 'adv.rainfedStress.title',
      bodyKey: 'adv.rainfedStress.body',
      whyKey: 'adv.rainfedStress.why',
      params: {
        crop,
        stage,
        pct: Math.abs(weather.devPct),
        district: draft.districtName || 'Farm'
      }
    });
  }

  // Rule 7: Flowering-stage fungal watch for black soil
  const humidity = weather.humidityPct ?? weather.current?.humidity ?? 60;
  if (soil === 'black' && stage === 'flowering' && humidity >= 75) {
    out.push({
      severity: 'info',
      titleKey: 'adv.fungalWatch.title',
      bodyKey: 'adv.fungalWatch.body',
      whyKey: 'adv.fungalWatch.why',
      params: { crop, humidity }
    });
  }

  // Fallback info advisory
  if (!out.length) {
    out.push({
      severity: 'info',
      titleKey: 'adv.allClear.title',
      bodyKey: 'adv.allClear.body',
      whyKey: 'adv.allClear.why',
      params: { crop, stage }
    });
  }

  return out
    .sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity])
    .slice(0, 2);
}
