import sys
sys.stdout.reconfigure(encoding='utf-8')
from mandi_engine import fetch_mandi_prices_with_comparison, SEED_MANDI_REGISTRY, CROP_COMMODITY_MAP
from geo_distance import calculate_distance_to_city
import datetime

COMMODITIES_INFO = {
    "wheat": {"nameEn": "Wheat", "nameHi": "गेहूं", "unit": "Qtl", "msp": 2425, "category": "Cereal"},
    "paddy": {"nameEn": "Paddy / Rice", "nameHi": "धान / चावल", "unit": "Qtl", "msp": 2320, "category": "Cereal"},
    "cotton": {"nameEn": "Cotton (Kapas)", "nameHi": "कपास", "unit": "Qtl", "msp": 7521, "category": "Fiber"},
    "mustard": {"nameEn": "Mustard (Sarson)", "nameHi": "सरसों", "unit": "Qtl", "msp": 5950, "category": "Oilseed"},
    "soybean": {"nameEn": "Soybean", "nameHi": "सोयाबीन", "unit": "Qtl", "msp": 4892, "category": "Oilseed"},
    "onion": {"nameEn": "Onion", "nameHi": "प्याज", "unit": "Qtl", "msp": 1850, "category": "Vegetable"},
    "tomato": {"nameEn": "Tomato", "nameHi": "टमाटर", "unit": "Qtl", "msp": 1600, "category": "Vegetable"},
    "sugarcane": {"nameEn": "Sugarcane", "nameHi": "गन्ना", "unit": "Qtl", "msp": 340, "category": "Commercial"},
    "gram": {"nameEn": "Gram / Chana", "nameHi": "चना / दाल", "unit": "Qtl", "msp": 5650, "category": "Pulse"}
}

def get_all_city_goods_prices(state, district):
    """
    Fetches and compiles the price board for ALL goods/commodities present in the selected city/closest mandi.
    """
    selected_city = district or "Bathinda"
    all_goods = []
    
    # For each crop/commodity, fetch the city or closest city price
    for crop_key, crop_meta in COMMODITIES_INFO.items():
        res = fetch_mandi_prices_with_comparison(state, crop_key, selected_city)
        mandis = res.get("data", [])
        if mandis:
            best_m = mandis[0] # primary matching mandi
            modal_p = best_m["modal_price"]
            min_p = best_m["min_price"]
            max_p = best_m["max_price"]
            diff = best_m["diff"]
            diff_pct = best_m["diff_pct"]
            trend = best_m["trend"]
            arr_date = best_m["arrival_date"]
            msp = crop_meta["msp"]
            msp_diff = round(modal_p - msp)
            price_per_kg = round(modal_p / 100, 1)

            all_goods.append({
                "crop_key": crop_key,
                "nameEn": crop_meta["nameEn"],
                "nameHi": crop_meta["nameHi"],
                "category": crop_meta["category"],
                "market": best_m["market"],
                "district": best_m["district"],
                "modal_price": modal_p,
                "price_per_kg": price_per_kg,
                "min_price": min_p,
                "max_price": max_p,
                "diff": diff,
                "diff_pct": diff_pct,
                "trend": trend,
                "msp": msp,
                "msp_diff": msp_diff,
                "arrival_date": arr_date,
                "dist_km": best_m["dist_km"],
                "is_exact_city": best_m.get("is_exact_city", False)
            })

    # Sort goods: Cereals & Pulses first, or by highest value
    return {
        "success": True,
        "selected_city": selected_city,
        "state": state,
        "goods_count": len(all_goods),
        "data": all_goods,
        "synced_at": datetime.datetime.now().strftime("%d %b %Y, %I:%M %p")
    }

if __name__ == "__main__":
    for c in ["Bathinda", "Pune", "Nashik", "Indore", "Kota"]:
        res = get_all_city_goods_prices("Punjab" if c == "Bathinda" else ("Maharashtra" if c in ["Pune", "Nashik"] else "Madhya Pradesh"), c)
        print(f"=== {c} ({res['goods_count']} Goods Listed) ===")
        for g in res['data'][:4]:
            print(f"  {g['nameEn']} ({g['nameHi']}): ₹{g['modal_price']}/Qtl (₹{g['price_per_kg']}/kg) | Trend: {g['trend']} {g['diff']:+}₹ | Mandi: {g['market']}")
