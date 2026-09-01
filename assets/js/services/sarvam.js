/* ============================================================
   sarvam.js — live translation of geographic names via the
   Sarvam.ai Translate API (pathway.md PART 3 §2, "Indic text").

   Behaviour:
   • No API key (config.js)  → resolves immediately with English.
   • Cache hit (localStorage)→ instant, works offline.
   • Cache miss              → POST /translate, store, render.
   • Any failure             → English silently; the wizard never
                               blocks on translation.

   Only names flow through here. Advisory/instruction strings stay
   hand-curated in i18n.js — machine-translating agronomy advice is
   explicitly out of bounds (docs/DECISIONS.md §3).
   ============================================================ */

import { SARVAM_API_KEY, SARVAM_LOCALES } from '../config.js';
import { getTranslationCache, saveTranslationCache } from '../storage.js';

const ENDPOINT = 'https://api.sarvam.ai/translate';
const TRANSLATION_TIMEOUT_MS = 5000;

export function sarvamEnabled() {
  return Boolean(SARVAM_API_KEY);
}

function cacheFor(locale) {
  const cache = getTranslationCache();
  return cache[locale] ?? {};
}

function storeInCache(locale, pairs) {
  const cache = getTranslationCache();
  cache[locale] = { ...(cache[locale] ?? {}), ...pairs };
  saveTranslationCache(cache);
}

async function translateOne(text, locale) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TRANSLATION_TIMEOUT_MS);
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': SARVAM_API_KEY,
      },
      body: JSON.stringify({
        input: text,
        source_language_code: 'en-IN',
        target_language_code: locale,
        mode: 'formal',
      }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`sarvam ${response.status}`);
    const data = await response.json();
    const out = data.translated_text ?? data.output ?? null;
    if (!out) throw new Error('sarvam: empty response');
    return out;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Translate an array of English strings into `locale` (e.g. 'hi-IN').
 * @returns {Promise<Record<string,string>>} english → translated
 */
export async function translateNames(texts, locale) {
  const unique = [...new Set(texts.filter(Boolean))];
  if (!sarvamEnabled() || locale === 'en-IN' || unique.length === 0) return {};

  const cached = cacheFor(locale);
  const result = {};
  const pending = [];

  unique.forEach((text) => {
    if (cached[text]) result[text] = cached[text];
    else pending.push(text);
  });

  /* Sequential on purpose: the free tier rate-limits, and this runs
     while the farmer reads the screen — latency is hidden by the cache. */
  for (const text of pending) {
    try {
      const translated = await translateOne(text, locale);
      result[text] = translated;
    } catch {
      /* leave this name in English; keep translating the rest */
    }
  }

  if (Object.keys(result).length) storeInCache(locale, result);
  return result;
}
