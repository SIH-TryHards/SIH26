/* ============================================================
   voice.js — browser SpeechSynthesis wrapper (DECISIONS.md §3).
   Zero payload, works offline where the OS has the voice,
   degrades quietly: the UI is told when audio is unavailable
   instead of failing silently.
   ============================================================ */

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

export const isSupported = () => Boolean(synth);

let cachedVoices = [];
function loadVoices() {
  if (!synth) return [];
  cachedVoices = synth.getVoices();
  return cachedVoices;
}
if (synth) {
  loadVoices();
  synth.addEventListener?.('voiceschanged', loadVoices);
}

/** Best available voice for a BCP-47 tag, falling back to the bare language. */
function voiceFor(bcp47) {
  const voices = cachedVoices.length ? cachedVoices : loadVoices();
  const base = bcp47.split('-')[0];
  return voices.find((v) => v.lang === bcp47)
    ?? voices.find((v) => v.lang?.replace('_', '-') === bcp47)
    ?? voices.find((v) => v.lang?.startsWith(base))
    ?? null;
}

/**
 * Speak a queue of strings as one utterance chain.
 * @returns {{ok:boolean, reason?:'unsupported'|'empty'|'fallback-voice'}}
 */
export function speak(parts, bcp47, { onStart, onEnd } = {}) {
  if (!synth) return { ok: false, reason: 'unsupported' };
  synth.cancel();

  const text = (Array.isArray(parts) ? parts : [parts]).filter(Boolean).join('. ');
  if (!text.trim()) return { ok: false, reason: 'empty' };

  const utter = new SpeechSynthesisUtterance(text);
  const voice = voiceFor(bcp47);
  if (voice) utter.voice = voice;
  utter.lang = bcp47;
  utter.rate = 0.92; /* slightly slow — instructional content */
  utter.pitch = 1;

  utter.addEventListener('start', () => onStart?.());
  utter.addEventListener('end', () => onEnd?.());
  utter.addEventListener('error', () => onEnd?.());

  synth.speak(utter);
  return { ok: true, reason: voice ? 'voice' : 'fallback-voice' };
}

export function stop() {
  synth?.cancel();
}

export function isSpeaking() {
  return Boolean(synth?.speaking);
}
