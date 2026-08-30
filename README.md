# SIH26 - Kisan Saathi

Hey everyone! This is the official repo for our Kisan Saathi project for SIH 26. We're building a Team Based Project on Smart Crop Advisory & Farmer Distress Early-Warning System. 

### Core Features:
- **Precision Agronomy Dashoard:** Tracks crop phenology, live wheather (using Open-Meteo API), and microclimatic spray feasiblity.
- **Mandi Intelligence:** Helps farmers find exactly where to sell for the best *take-home net profit*, instead of just looking at the highest gross price. Shows live modal rates, ranges, and Gov MSP status.
- **Multilingual Support:** Built-in i18n for English, Hindi, Marathi, Bengali, Tamil, and Telugu.
- **Distress Early Warning:** Predictive risk scoring based on weather failures, loan EMIs, and mandi price crashes to route help from Agri-Officers.

### How to run:
Because we use modern ES6 modules, if you just double click the `index.html` file in your browser, it might throw a CORS error. 

To fix this, we created a standlaone bundled version! Just open `KisanSaathi_Standalone.html` directly in your browser. No server needed at all.

If u want to edit the code, make sure you rebuild the bundle using esbuild:
`.\package\esbuild.exe assets/js/farmer.js --bundle --outfile=assets/js/bundle.js`

We're still working on hooking up all the backend API integrations, but the UI is mostly complete for the core demo pathways. 

Feel free to open a PR if u find any bugs!

Credits : Prasanna | Shreyas | Peeyush | Devum | Tejas | XerumGG
