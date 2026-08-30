import urllib.request, json, urllib.parse

queries = ["Bathinda", "Bhatinda, Punjab", "Ludhiana", "Delhi", "30.21,74.95"]
for q in queries:
    url = f"https://api.weatherapi.com/v1/current.json?key=752a5e2ee7904399afd175843262808&q={urllib.parse.quote(q)}&aqi=no"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Test/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            loc = data.get('location', {})
            cur = data.get('current', {})
            print(f"'{q}' -> {loc.get('name')}, {loc.get('region')} | {cur.get('temp_c')}C {cur.get('condition',{}).get('text')}")
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8')
        print(f"'{q}' -> HTTP {e.code}: {body}")
