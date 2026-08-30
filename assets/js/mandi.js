/* ============================================================
   mandi.js — pure net-revenue engine (pathway.md P6).

   net = (modal_price × quintals)
       − (road_distance_km × 2 × freight_per_km)
       − mandi_fee (share of gross)

   Structured inputs in, ranked rows out. No DOM, no network,
   no clock. Ranking by NET — not by price — is the product
   decision that makes the comparison honest (DECISIONS.md §7).
   ============================================================ */

const round = (n) => Math.round(n);

/**
 * @param {{mandis:Array, prices:Object, quintals:number,
 *          freightPerKm:number, feePct:number}} input
 * @returns {{rows:Array, bestNet:Object, bestPrice:Object,
 *            inversion:Object|null}}
 */
export function rankMandis({ mandis, prices, quintals, freightPerKm, feePct }) {
  const q = Math.max(0, Number(quintals) || 0);

  const rows = mandis.map((m) => {
    const quote = prices.quotes[m.id] ?? {};
    const price = quote.modal ?? prices.current ?? 0;
    const gross = price * q;
    const transport = m.distanceKm * 2 * freightPerKm;
    const fee = gross * feePct;
    const net = round(gross - transport - fee);
    return {
      id: m.id,
      name: m.name,
      price,
      distanceKm: m.distanceKm,
      operatingDays: m.operatingDays,
      trend7dPct: quote.trend7dPct ?? 0,
      min: quote.min ?? price,
      max: quote.max ?? price,
      msp: quote.msp ?? price,
      variety: quote.variety ?? "Standard",
      arrivalDate: quote.arrivalDate ?? "Today",
      gross: round(gross),
      transport: round(transport),
      fee: round(fee),
      net,
      isBestNet: false,
    };
  }).sort((a, b) => b.net - a.net);

  if (rows.length) rows[0].isBestNet = true;
  const bestNet = rows[0] ?? null;
  const bestPrice = rows.length
    ? rows.reduce((best, r) => (r.price > best.price ? r : best), rows[0])
    : null;

  /* the demo's key teaching moment: the higher-price mandi can lose */
  const inversion = bestNet && bestPrice && bestPrice.id !== bestNet.id
    ? {
        priceLeader: bestPrice.name,
        netLeader: bestNet.name,
        gap: bestNet.net - bestPrice.net,
      }
    : null;

  return { rows, bestNet, bestPrice, inversion };
}
