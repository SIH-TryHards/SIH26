"""
Comprehensive update script:
1. Rebrand Kisan Setu → Krishi Saathi (index.html, app.js, server.py)
2. Remove Agri-Officer Portal nav button + tab section
3. Remove Low-Bandwidth toggle
4. Add WeatherAPI proxy to server.py
5. Add dynamic weather fetch to app.js
"""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

# ============================================================
# 1. UPDATE index.html
# ============================================================
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1a. Title tag
html = html.replace(
    'Kisan Setu - Smart Agricultural Advisory, Mandi Intelligence & Distress Prevention',
    'Krishi Saathi - Smart Agricultural Advisory, Mandi Intelligence & Distress Prevention'
)

# 1b. Brand header h1
html = html.replace(
    'data-i18n="appTitle">Kisan Setu</h1>',
    'data-i18n="appTitle">Krishi Saathi</h1>'
)

# 1c. Hero badge
html = html.replace(
    '🌾 Kisan Setu Smart Agro-Advisory',
    '🌾 Krishi Saathi Smart Agro-Advisory'
)

# 1d. Footer brand
html = html.replace(
    '<span class="font-bold text-white">Kisan Setu</span>',
    '<span class="font-bold text-white">Krishi Saathi</span>'
)

# 2. Remove Low-Bandwidth toggle (lines 47-52 approx)
low_bw_block = '''        <!-- Low-Bandwidth Mode Toggle -->
        <label class="flex items-center gap-2 bg-black/15 hover:bg-black/25 px-3 py-2 rounded-xl border border-white/20 text-xs cursor-pointer text-white transition select-none min-h-[44px] backdrop-blur-sm">
          <input type="checkbox" id="lowBandwidthToggle" class="w-4 h-4 accent-amber-300 rounded cursor-pointer">
          <span class="hidden sm:inline font-medium" data-i18n="lowBandwidthToggle">📶 Low-Bandwidth / 2G</span>
          <span class="sm:hidden font-medium">2G</span>
        </label>

'''
html = html.replace(low_bw_block, '')

# Also try the \r\n version
low_bw_block_crlf = low_bw_block.replace('\n', '\r\n')
html = html.replace(low_bw_block_crlf, '')

# 3. Remove Agri-Officer Portal nav button (line 111-113)
officer_nav = '''        <button class="nav-tab-btn px-4 py-2 rounded-lg font-medium text-white/90 hover:text-white hover:bg-black/20 flex items-center gap-2 whitespace-nowrap transition min-h-[40px]" data-tab="tab-officer" data-i18n="navOfficer">
          🏛️ Agri-Officer Portal (DAO)
        </button>
'''
html = html.replace(officer_nav, '')
html = html.replace(officer_nav.replace('\n', '\r\n'), '')

# 4. Remove entire TAB 4: Officer section (from comment to </section>)
# Find and remove the officer tab section
officer_start = '    <!-- ============================================================= -->\r\n    <!-- TAB 4: DISTRICT AGRI-OFFICER & NGO PORTAL'
officer_end_marker = '</section>\r\n\r\n    <!-- ============================================================= -->\r\n    <!-- TAB 5:'

idx_start = html.find('<!-- TAB 4: DISTRICT AGRI-OFFICER')
if idx_start == -1:
    idx_start = html.find('<!-- TAB 4:')
    
if idx_start > 0:
    # Go back to find the preceding comment line
    search_back = html.rfind('<!-- ====', 0, idx_start)
    if search_back > 0:
        idx_start = search_back
    
    # Find the end: the </section> after tab-officer, then the start of tab-schemes
    idx_end = html.find('<!-- TAB 5:', idx_start)
    if idx_end == -1:
        idx_end = html.find('tab-schemes', idx_start)
    
    if idx_end > 0:
        # Go back to the preceding ===== comment
        search_back2 = html.rfind('<!-- ====', idx_start + 10, idx_end)
        if search_back2 > 0:
            idx_end = search_back2
        
        # Find the </section> before idx_end
        section_end = html.rfind('</section>', idx_start, idx_end)
        if section_end > 0:
            # Remove from idx_start to after </section>\r\n\r\n
            actual_end = section_end + len('</section>') 
            # Skip whitespace after
            while actual_end < len(html) and html[actual_end] in '\r\n ':
                actual_end += 1
            removed = html[idx_start:actual_end]
            print(f"Removing officer tab section ({len(removed)} chars)")
            html = html[:idx_start] + html[actual_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("✅ index.html updated")

# ============================================================
# 2. UPDATE app.js
# ============================================================
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 2a. Rebrand all "Kisan Setu" references
js = js.replace('Kisan Setu', 'Krishi Saathi')
# Also किसान सेतु → कृषि साथी in Hindi  
js = js.replace('किसान सेतु', 'कृषि साथी')

# 2b. Update appTitle in all languages TRANSLATIONS
# en already handled by Kisan Setu -> Krishi Saathi

# 2c. Remove renderOfficerQueue() from initApp
js = js.replace('  renderOfficerQueue();\n', '')
js = js.replace('  renderOfficerQueue();\r\n', '')

# 2d. Remove navOfficer and officerBadge translation keys (they'll just be unused, not harmful)
# But let's keep them harmless since the nav button is gone

# 2e. Add WeatherAPI fetch function
# Insert it right before the generateAdvisoryAndAnalysis function
weather_api_code = '''
// ==========================================
// WEATHER API INTEGRATION (WeatherAPI.com)
// ==========================================
const WEATHER_API_KEY = "752a5e2ee7904399afd175843262808";
const WEATHER_API_BASE = "https://api.weatherapi.com/v1";

// District → location mapping for WeatherAPI queries
function getWeatherLocation(district, state) {
  return `${district}, ${state}, India`;
}

// Fetch live weather data from WeatherAPI via server proxy
async function fetchLiveWeather(district, state) {
  try {
    const location = getWeatherLocation(district, state);
    const response = await fetch(`/api/weather?q=${encodeURIComponent(location)}`);
    if (!response.ok) throw new Error(`Weather API error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn("Weather API fetch failed, using fallback:", err.message);
    return null;
  }
}

// Update weather display with live API data
function updateWeatherDisplay(weatherData, isEn) {
  if (!weatherData || !weatherData.current) return false;

  const current = weatherData.current;
  const tempC = current.temp_c;
  const humidity = current.humidity;
  const conditionText = current.condition?.text || "";
  const precip = current.precip_mm || 0;
  const windKph = current.wind_kph || 0;
  const feelsLike = current.feelslike_c || tempC;
  const locationName = weatherData.location?.name || "";

  let weatherAlert = "";
  let alertBorderClass = "border-l-4 border-l-emerald-600 bg-emerald-50/70 text-emerald-950";
  let weatherIcon = "🌤️";

  // Determine weather condition
  const isRainy = conditionText.toLowerCase().includes("rain") || precip > 5;
  const isHot = tempC > 40;
  const isCold = tempC < 10;

  if (isRainy && precip > 20) {
    weatherIcon = "🌧️";
    alertBorderClass = "border-l-4 border-l-emerald-600 bg-emerald-50/70 text-emerald-950";
    weatherAlert = isEn
      ? `${locationName}: Heavy rain today (${precip}mm). Make sure your field drains well. Temperature: ${tempC}°C, Humidity: ${humidity}%.`
      : `${locationName}: आज भारी बारिश (${precip}mm)। खेत में पानी न भरने दें। तापमान: ${tempC}°C, आर्द्रता: ${humidity}%.`;
  } else if (isRainy) {
    weatherIcon = "🌦️";
    alertBorderClass = "border-l-4 border-l-emerald-600 bg-emerald-50/70 text-emerald-950";
    weatherAlert = isEn
      ? `${locationName}: Light rain expected (${precip}mm). Good for your crops. Temperature: ${tempC}°C, Humidity: ${humidity}%.`
      : `${locationName}: हल्की बारिश (${precip}mm) की संभावना। फसल के लिए अच्छी। तापमान: ${tempC}°C, आर्द्रता: ${humidity}%.`;
  } else if (isHot) {
    weatherIcon = "☀️";
    alertBorderClass = "border-l-4 border-l-amber-500 bg-amber-50/80 text-amber-950";
    weatherAlert = isEn
      ? `${locationName}: Very hot today (${tempC}°C, feels like ${feelsLike}°C). Water your crops in the early morning or evening. Humidity: ${humidity}%.`
      : `${locationName}: आज बहुत गर्मी (${tempC}°C, महसूस ${feelsLike}°C)। सुबह या शाम को सिंचाई करें। आर्द्रता: ${humidity}%.`;
  } else if (isCold) {
    weatherIcon = "❄️";
    alertBorderClass = "border-l-4 border-l-sky-500 bg-sky-50/80 text-sky-950";
    weatherAlert = isEn
      ? `${locationName}: Cold weather today (${tempC}°C). Protect young plants from frost if possible. Humidity: ${humidity}%.`
      : `${locationName}: आज ठंडा मौसम (${tempC}°C)। छोटे पौधों को पाले से बचाएं। आर्द्रता: ${humidity}%.`;
  } else {
    weatherIcon = "🌤️";
    weatherAlert = isEn
      ? `${locationName}: ${conditionText}, ${tempC}°C. Good conditions for your crop. Humidity: ${humidity}%, Wind: ${windKph} km/h.`
      : `${locationName}: ${conditionText}, ${tempC}°C। फसल के लिए अनुकूल मौसम। आर्द्रता: ${humidity}%, हवा: ${windKph} km/h.`;
  }

  // Update DOM
  const weatherBox = document.getElementById("advisoryWeatherBox");
  if (weatherBox) {
    weatherBox.className = `p-4 rounded-xl border border-slate-200 ${alertBorderClass} mb-6 flex items-start gap-3.5 shadow-sm`;
    const iconEl = document.getElementById("advisoryWeatherIcon");
    const textEl = document.getElementById("advisoryWeatherText");
    if (iconEl) iconEl.textContent = weatherIcon;
    if (textEl) textEl.textContent = weatherAlert;
  }
  return true;
}

'''

# Insert before "// 4. HYPERLOCAL ADVISORY ENGINE"
js = js.replace(
    '// ==========================================\n// 4. HYPERLOCAL ADVISORY ENGINE',
    weather_api_code + '// ==========================================\n// 4. HYPERLOCAL ADVISORY ENGINE'
)
js = js.replace(
    '// ==========================================\r\n// 4. HYPERLOCAL ADVISORY ENGINE',
    weather_api_code.replace('\n', '\r\n') + '// ==========================================\r\n// 4. HYPERLOCAL ADVISORY ENGINE'
)

# 2f. Add weather API call inside generateAdvisoryAndAnalysis
# After the existing weather DOM update, add the async fetch call
weather_fetch_call = '''
  // Fetch live weather from WeatherAPI (async, updates DOM when ready)
  fetchLiveWeather(district, state).then(weatherData => {
    updateWeatherDisplay(weatherData, isEn);
  });

'''

# Insert after the existing weather DOM update block
js = js.replace(
    '  const fertEl = document.getElementById("advFertText");\r\n  if (fertEl) fertEl.textContent = fertAdvice;',
    '  const fertEl = document.getElementById("advFertText");\r\n  if (fertEl) fertEl.textContent = fertAdvice;\r\n' + weather_fetch_call.replace('\n', '\r\n')
)
# Also try \n version
js = js.replace(
    '  const fertEl = document.getElementById("advFertText");\n  if (fertEl) fertEl.textContent = fertAdvice;',
    '  const fertEl = document.getElementById("advFertText");\n  if (fertEl) fertEl.textContent = fertAdvice;\n' + weather_fetch_call
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)
print("✅ app.js updated")

# ============================================================
# 3. UPDATE server.py
# ============================================================
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

# 3a. Rebrand
srv = srv.replace('Kisan Setu', 'Krishi Saathi')

# 3b. Add WeatherAPI key and proxy handler
srv = srv.replace(
    'GNANI_API_KEY = ',
    'WEATHER_API_KEY = "752a5e2ee7904399afd175843262808"\nGNANI_API_KEY = '
)

# 3c. Add GET handler for /api/weather
# Add do_GET override before do_POST
weather_get_handler = '''
    def do_GET(self):
        # WeatherAPI proxy
        if self.path.startswith("/api/weather"):
            self.handle_weather_api()
            return
        # Default static file serving
        super().do_GET()

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

            weather_url = f"https://api.weatherapi.com/v1/current.json?key={WEATHER_API_KEY}&q={urllib.parse.quote(location)}&aqi=no"
            req = urllib.request.Request(weather_url, headers={
                "User-Agent": "KrishiSaathi/1.0"
            })
            
            with urllib.request.urlopen(req, timeout=10) as resp:
                weather_data = resp.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(weather_data)

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

'''

# Insert before do_OPTIONS
srv = srv.replace(
    '    def do_OPTIONS(self):',
    weather_get_handler + '    def do_OPTIONS(self):'
)

# 3d. Add urllib.parse import
if 'urllib.parse' not in srv:
    srv = srv.replace('import urllib.error', 'import urllib.error\nimport urllib.parse')

with open('server.py', 'w', encoding='utf-8') as f:
    f.write(srv)
print("✅ server.py updated")

print("\n🎉 All updates complete!")
