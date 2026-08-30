#!/usr/bin/env python3
"""
Krishi Saathi - Agricultural Advisory & Distress Prevention Platform Server
Powered by Gnani.ai (Vachana) Timbre v2.5 Neural Indic TTS Engine.
"""

import http.server
import socketserver
import os
import sys
import json
import urllib.request
import urllib.error
import base64
import wave
import io

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
WEATHER_API_KEY = "752a5e2ee7904399afd175843262808"
GNANI_API_KEY = "vach_1ytE2CY5X2P5Mg5wCyCUoWAaLuO2KPZXk8eb71x1bvAKfoX9Xa7ihTpYpSWzdPU75IFPRFaW3o7OVs4CKYPzXoHv8G3uHaGe_87629e5e11ea6e5ce4f27aa487de06fc"

def pcm_to_wav(pcm_bytes, sample_rate=24000, channels=1, sampwidth=2):
    """Wraps raw 16-bit PCM bytes into standard RIFF WAV format for browser playback."""
    if pcm_bytes.startswith(b'RIFF'):
        return pcm_bytes
    wav_buf = io.BytesIO()
    with wave.open(wav_buf, 'wb') as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(sampwidth)
        wf.setframerate(sample_rate)
        wf.writeframes(pcm_bytes)
    return wav_buf.getvalue()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-API-Key-ID')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()


    def do_GET(self):
        # WeatherAPI proxy
        if self.path.startswith("/api/weather"):
            self.handle_weather_api()
            return
        # Mandi API proxy & day-over-day price comparison
        elif self.path.startswith("/api/mandi/prices") or self.path.startswith("/api/mandi/history") or self.path.startswith("/api/mandi"):
            self.handle_mandi_api()
            return
        # Default static file serving
        super().do_GET()

    def handle_mandi_api(self):
        try:
            from urllib.parse import urlparse, parse_qs
            import mandi_engine
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            state = params.get("state", ["Punjab"])[0]
            district = params.get("district", [""])[0]
            crop = params.get("crop", ["wheat"])[0].lower()
            if self.path.startswith("/api/mandi/goods"):
                result = mandi_engine.fetch_all_city_goods_prices(state, district)
            else:
                result = mandi_engine.fetch_mandi_prices_with_comparison(state, crop, district)
            response_json = json.dumps(result, ensure_ascii=False).encode('utf-8')

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(response_json)
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))


    def handle_weather_api(self):
        try:
            from urllib.parse import urlparse, parse_qs
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            location = params.get("q", [""])[0]
            
            if not location:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Missing location parameter 'q'"}).encode('utf-8'))
                return

            # Geocode
            geo_url = f"https://geocoding-api.open-meteo.com/v1/search?name={urllib.parse.quote(location)}&count=1&language=en"
            req_geo = urllib.request.Request(geo_url, headers={"User-Agent": "KrishiSaathi/1.0"})
            with urllib.request.urlopen(req_geo, timeout=5) as resp:
                geo_data = json.loads(resp.read().decode('utf-8'))
            
            lat, lon = 20.0, 73.8
            if geo_data.get("results") and len(geo_data["results"]) > 0:
                lat = geo_data["results"][0]["latitude"]
                lon = geo_data["results"][0]["longitude"]

            # Fetch forecast
            weather_url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=3"
            req_wx = urllib.request.Request(weather_url, headers={"User-Agent": "KrishiSaathi/1.0"})
            with urllib.request.urlopen(req_wx, timeout=5) as resp:
                wx_data = json.loads(resp.read().decode('utf-8'))
            
            # Map to weatherapi.com format
            mapped = {
                "location": {
                    "name": location.split(",")[0],
                    "region": location.split(",")[1].strip() if "," in location else ""
                },
                "current": {
                    "temp_c": wx_data["current"]["temperature_2m"],
                    "humidity": wx_data["current"]["relative_humidity_2m"],
                    "precip_mm": wx_data["current"]["precipitation"],
                    "wind_kph": wx_data["current"]["wind_speed_10m"],
                    "wind_dir": "ESE",  # Simplified
                    "feelslike_c": wx_data["current"]["apparent_temperature"],
                    "condition": { "text": "Clear" if wx_data["current"]["precipitation"] < 1 else "Rain" }
                },
                "forecast": {
                    "forecastday": []
                }
            }
            
            for i in range(len(wx_data["daily"]["time"])):
                mapped["forecast"]["forecastday"].append({
                    "date": wx_data["daily"]["time"][i],
                    "day": {
                        "maxtemp_c": wx_data["daily"]["temperature_2m_max"][i],
                        "mintemp_c": wx_data["daily"]["temperature_2m_min"][i],
                        "daily_chance_of_rain": wx_data["daily"]["precipitation_probability_max"][i],
                        "totalprecip_mm": wx_data["daily"]["precipitation_sum"][i],
                        "avghumidity": wx_data["current"]["relative_humidity_2m"],
                        "maxwind_kph": wx_data["daily"]["wind_speed_10m_max"][i],
                        "condition": { "text": "Clear" if wx_data["daily"]["precipitation_sum"][i] < 1 else "Rain" }
                    }
                })

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(mapped).encode('utf-8'))

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))

    def handle_gnani_tts(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(body)

            text_input = (data.get("text") or "").strip()
            target_lang = data.get("language", data.get("target_language_code", "en-IN"))
            voice = data.get("voice", "Nalini")
            model = data.get("model", "timbre-v2.5")
            speed = float(data.get("speed", 1.0))

            # Format payload for Gnani.ai (Vachana) TTS API
            gnani_payload = json.dumps({
                "text": text_input,
                "model": model,
                "language": target_lang,
                "voice": voice,
                "speed": speed,
                "audio_config": {
                    "encoding": "linear_pcm",
                    "container": "wav",
                    "num_channels": 1,
                    "sample_rate": 24000,
                    "sample_width": 2
                }
            }).encode('utf-8')

            req = urllib.request.Request(
                "https://api.vachana.ai/api/v1/tts/inference",
                data=gnani_payload,
                headers={
                    "Content-Type": "application/json",
                    "X-API-Key-ID": GNANI_API_KEY,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
                }
            )

            with urllib.request.urlopen(req, timeout=30) as resp:
                raw_bytes = resp.read()
                # Wrap raw PCM into full RIFF WAV container
                wav_bytes = pcm_to_wav(raw_bytes, sample_rate=24000)
                base64_audio = base64.b64encode(wav_bytes).decode('utf-8')
                
                response_json = json.dumps({
                    "success": True,
                    "audio_base64": base64_audio,
                    "audio_format": "audio/wav",
                    "language": target_lang,
                    "model": model,
                    "voice": voice
                }).encode('utf-8')

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(response_json)

        except urllib.error.HTTPError as e:
            err_body = e.read()
            self.send_response(e.code)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(err_body)
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))

def start_daily_mandi_sync():
    """Background daemon thread that refreshes Mandi prices daily."""
    import threading, time
    def sync_worker():
        while True:
            time.sleep(10) # delay initial background sync so server starts up instantly
            try:
                import mandi_engine
                print("[Mandi Sync] Starting daily background price fetch & comparison update...")
                for st in ["Punjab", "Maharashtra", "Madhya Pradesh", "Uttar Pradesh", "Karnataka"]:
                    for cr in ["wheat", "paddy", "cotton", "mustard", "soybean", "onion", "tomato"]:
                        try:
                            mandi_engine.fetch_mandi_prices_with_comparison(st, cr)
                        except Exception:
                            pass
                print("[Mandi Sync] Daily price refresh complete. Local history cache updated.")
            except Exception as e:
                print(f"[Mandi Sync Error] {e}")
            # Sleep 24 hours (86400 seconds)
            time.sleep(86400)
            
    t = threading.Thread(target=sync_worker, daemon=True)
    t.start()

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

def run_server(port=PORT):
    start_daily_mandi_sync()
    for attempt_port in range(port, port + 10):
        try:
            httpd = ThreadedHTTPServer(("", attempt_port), Handler)
            print("=" * 60)
            print(f"Krishi Saathi Server (Gnani.ai Timbre v2.5 WAV Engine) Active on Port {attempt_port}")
            print(f"URL: http://localhost:{attempt_port}")
            print(f"TTS Endpoint: /api/gnani/tts")
            print(f"Weather Endpoint: /api/weather")
            print(f"Mandi Endpoint: /api/mandi/prices")
            print("=" * 60)
            sys.stdout.flush()
            httpd.serve_forever()
            break
        except OSError as e:
            if "address already in use" in str(e).lower() or getattr(e, 'errno', 0) in (10048, 48):
                continue
            else:
                raise e

if __name__ == "__main__":
    run_server()

