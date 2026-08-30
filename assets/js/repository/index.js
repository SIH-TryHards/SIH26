/* ============================================================
   Repository selector — the one import screens use.
   When the FastAPI backend is up, ALL data (auth, weather,
   mandi) flows through apiRepository. When it's down, everything
   falls back to demo (simWeather + simPrices). Screens never
   change — they call repository.compareMandis(), etc.
   ============================================================ */

import { demoRepository } from './demoRepository.js';
import { apiRepository } from './apiRepository.js';

let resolvedRepo = null;

async function resolveRepository() {
  if (resolvedRepo) return resolvedRepo;
  try {
    const up = await apiRepository.ping();
    resolvedRepo = up ? apiRepository : demoRepository;
  } catch {
    resolvedRepo = demoRepository;
  }
  return resolvedRepo;
}

/* Synchronous fallback (used during initial render before async resolves) */
export const repository = demoRepository;

/* Async: use this for screens that can await (home, mandi) */
export async function getRepository() {
  return resolveRepository();
}

/* Auth helper (backward-compatible) */
let authPromise = null;
export function getAuth() {
  if (!authPromise) {
    authPromise = resolveRepository();
  }
  return authPromise;
}
