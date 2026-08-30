# Original User Request

## 2026-08-30T13:24:42Z

# Teamwork Project Prompt — Draft

> Status: Launched.
> Goal: Craft prompt → get user approval → delegate to teamwork_preview
> Requested team: [none — teamwork routes from the description]

Implement industry-level precision agronomy features into the Kisan Saathi dashboard.

Working directory: ~/teamwork_projects/kisan_saathi_agronomy
Integrity mode: demo

## Requirements

### R1. Implement Live Agronomy Widgets
Fetch and display real-time soil moisture, ET0 (Evapotranspiration), wind speed/direction, humidity, and temperature using the Open-Meteo API.

### R2. Crop Phenology Tracker
Calculate and display a visual timeline of the crop's current growth stage based on the sowing date.

### R3. Spray Window & Tomorrow's Advisory
Generate a "Safe to Spray" window using wind and rain data. Provide a specific "Tomorrow's Action Plan" card.

## Acceptance Criteria

### Features
- [ ] Open-Meteo API URL includes current=temperature_2m,relative_humidity_2m,wind_speed_10m and daily=et0_fao_evapotranspiration.
- [ ] No emojis are used in the generated UI elements (strictly professional tone).
- [ ] UI seamlessly matches the existing vanilla JavaScript and CSS aesthetic.

## Follow-up — 2026-08-30T14:39:23Z

# Teamwork Project Prompt — Draft

> Status: Launched.
> Goal: Craft prompt → get user approval → delegate to teamwork_preview
> Requested team: [none — teamwork routes from the description]

Implement industry-level precision agronomy features into the Kisan Saathi dashboard, including extreme nit-pick real-time details.

Working directory: ~/teamwork_projects/kisan_saathi_agronomy
Integrity mode: demo

## Requirements

### R1. Implement Live Agronomy Widgets (Expanded)
Fetch and display real-time soil moisture, ET0 (Evapotranspiration), wind speed/direction, humidity, temperature, apparent temperature, UV index, surface pressure, and cloud cover using the Open-Meteo API.

### R2. Crop Phenology Tracker
Calculate and display a visual timeline of the crop's current growth stage based on the sowing date.

### R3. Spray Window & Tomorrow's Advisory
Generate a "Safe to Spray" window using wind and rain data. Provide a specific "Tomorrow's Action Plan" card.

## Acceptance Criteria

### Features
- [ ] Open-Meteo API URL includes all requested nit-pick parameters (e.g., `current=...,apparent_temperature,uv_index,surface_pressure,cloud_cover`).
- [ ] No emojis are used in the generated UI elements (strictly professional tone).
- [ ] UI seamlessly matches the existing vanilla JavaScript and CSS aesthetic.
