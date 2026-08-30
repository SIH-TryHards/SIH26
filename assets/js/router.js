/* ============================================================
   router.js — minimal hash router. Hash routing gives the
   browser back button for free, which is how "back never loses
   input" is honoured (pathway.md design rule 5). Views register
   handlers; farmer.js decides what each route shows.
   ============================================================ */

const routes = new Map();
let fallbackRoute = 'welcome';

export function register(name, handler) {
  routes.set(name, handler);
}

export function go(name) {
  const target = `#/${name}`;
  if (location.hash === target) {
    handle();
  } else {
    location.hash = target;
  }
}

export function start(fallback) {
  fallbackRoute = fallback;
  window.addEventListener('hashchange', handle);
  handle();
}

function currentRoute() {
  return location.hash.replace(/^#\//, '') || fallbackRoute;
}

function handle() {
  const name = currentRoute();
  const handler = routes.get(name) ?? routes.get(fallbackRoute);
  if (handler) handler(name);
}
