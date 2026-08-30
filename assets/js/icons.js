/* ============================================================
   icons.js — Hand-authored inline SVG vector icon library.
   Strict Compliance: Zero emojis, professional vector graphics.
   All icons use standard 24x24 viewBox, stroke-based rendering.
   ============================================================ */

const svg = (paths, s = 18, cls = '') =>
  `<svg class="icon${cls ? ' ' + cls : ''}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" ` +
  `stroke="currentColor" stroke-width="2" stroke-linecap="round" ` +
  `stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const logo = (s = 28) => svg(
  `<path d="M12 21c-4-3.5-7-6.8-7-10.4C5 7 8 4.5 12 3c4 1.5 7 4 7 7.6 0 3.6-3 6.9-7 10.4z"/>` +
  `<path d="M12 21V9"/><path d="M12 13l3-2.6M12 15.5L9 13"/>`, s);

export const speaker = (s = 18) => svg(
  `<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M18.5 5.5a9 9 0 010 13"/>`, s);

export const stopIcon = (s = 18) => svg(`<rect x="6" y="6" width="12" height="12" rx="2"/>`, s);

export const check = (s = 18) => svg(`<path d="M4.5 12.5l4.5 4.5L19.5 6.5"/>`, s);

export const checkCircle = (s = 18) => svg(
  `<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>` +
  `<polyline points="22 4 12 14.01 9 11.01"/>`, s);

export const alert = (s = 18) => svg(
  `<path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>` +
  `<line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`, s);

export const alertTriangle = alert;

export const xCircle = (s = 18) => svg(
  `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`, s);

export const info = (s = 18) => svg(
  `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`, s);

/* ---- Precision Agronomy Parameter Icons ---- */

export const thermometer = (s = 18) => svg(
  `<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>`, s);

export const droplet = (s = 18) => svg(
  `<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>`, s);

export const wind = (s = 18) => svg(
  `<path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>`, s);

export const sun = (s = 18) => svg(
  `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`, s);

export const gauge = (s = 18) => svg(
  `<path d="M12 15l3.5-3.5"/><circle cx="12" cy="12" r="9"/><path d="M3.6 9h3.8M16.6 9h3.8"/>`, s);

export const cloud = (s = 18) => svg(
  `<path d="M17.5 19H7a5 5 0 01-.4-9.96A6 6 0 0118 8.7 5 5 0 0117.5 19z"/>`, s);

export const sprayer = (s = 18) => svg(
  `<path d="M7 11V6a2 2 0 012-2h6a2 2 0 012 2v5"/><rect x="5" y="11" width="14" height="10" rx="2"/><line x1="12" y1="4" x2="12" y2="2"/><path d="M21 7l-2 2M21 11l-2-1M3 7l2 2M3 11l2-1"/>`, s);

export const sprout = (s = 18) => svg(
  `<path d="M7 20h10M12 20v-8M12 12c-3-4-8-4-8-4s0 6 5 6h3zM12 12c3-4 8-4 8-4s0 6-5 6h-3z"/>`, s);

export const leaf = (s = 18) => svg(
  `<path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>`, s);

export const calendar = (s = 18) => svg(
  `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`, s);

export const compass = (s = 18) => svg(
  `<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>`, s);

export const clock = (s = 18) => svg(
  `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`, s);

export const activity = (s = 18) => svg(
  `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`, s);

export const phone = (s = 18) => svg(
  `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>`, s);

export const building = (s = 18) => svg(
  `<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1M15 13h1M15 17h1"/>`, s);

export const scale = (s = 18) => svg(
  `<path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10M12 3v18M3 7h18"/>`, s);

export const creditCard = (s = 18) => svg(
  `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>`, s);

export const shield = (s = 18) => svg(
  `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`, s);

export const user = (s = 18) => svg(
  `<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>`, s);

export const logout = (s = 18) => svg(
  `<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>`, s);

export const trendUp = (s = 18) => svg(
  `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`, s);

export const trendDown = (s = 18) => svg(
  `<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>`, s);

/* ---- Weather Condition Icon ---- */

export function weatherIcon(condition, s = 26) {
  if (condition === 'clear') {
    return svg(
      `<circle cx="12" cy="12" r="4.5"/>` +
      `<path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>`, s);
  }
  if (condition === 'cloud') {
    return svg(`<path d="M17.5 18H7a4.5 4.5 0 01-.4-9A6 6 0 0118 8.7 4 4 0 0117.5 18z"/>`, s);
  }
  if (condition === 'rain') {
    return svg(
      `<path d="M17.5 14H7a4.5 4.5 0 01-.4-9A6 6 0 0118 4.7 4 4 0 0117.5 14z"/>` +
      `<path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3"/>`, s);
  }
  /* storm */
  return svg(
    `<path d="M17.5 13H7a4.5 4.5 0 01-.4-9A6 6 0 0118 3.7 4 4 0 0117.5 13z"/>` +
    `<path d="M12.5 13l-2.5 4h3l-2.5 4"/>`, s);
}

export function sprayStatusIcon(status, s = 18) {
  if (status === 'optimal') return checkCircle(s);
  if (status === 'caution') return alertTriangle(s);
  return xCircle(s);
}
