import os
import sqlite3
import json
import urllib.request
import urllib.error
import time
import subprocess
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
from backend.app.main import db, init_db, score_distress, make_token

BASE_URL = "http://localhost:8004/api/v1"

def request(method, path, body=None, token=None):
    req = urllib.request.Request(BASE_URL + path, method=method)
    if body:
        req.data = json.dumps(body).encode('utf-8')
        req.add_header('Content-Type', 'application/json')
    if token:
        req.add_header('Authorization', f'Bearer {token}')
    try:
        with urllib.request.urlopen(req) as response:
            return response.status, json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode())
        except:
            return e.code, {}

def test_distress_scoring_engine():
    res = score_distress(0.0, 0.0, 180)
    assert res["risk_level"] == "low"
    
    res = score_distress(-50.0, -50.0, 0)
    assert res["risk_level"] == "critical"

def test_api_score_generation():
    init_db()
    with db() as c:
        c.execute("INSERT OR IGNORE INTO accounts (id, role, phone_e164, status, created_at, updated_at) VALUES (1, 'farmer', '+919999999999', 'active', '2026', '2026')")
        c.execute("INSERT OR IGNORE INTO farmer_profiles (account_id, display_name, district_name, assigned_officer_id, created_at, updated_at) VALUES (1, 'Test Farmer', 'Nashik', 'OFF-1001', '2026', '2026')")

    token = make_token("OFF-1001", "officer", 480)
    
    status, res = request("POST", "/distress/score", body={
        "farmer_account_id": 1,
        "rainfall_deviation_pct": -45.0,
        "price_change_pct": -30.0,
        "loan_days_remaining": 5
    }, token=token)
    
    assert status == 200, res
    data = res["data"]
    assert data["farmer_account_id"] == 1
    assert data["risk_level"] in ["high", "critical"]
    alert_id = data["alert_id"]
    
    s2, r2 = request("GET", "/officer/alerts", token=token)
    assert s2 == 200
    
    s3, r3 = request("GET", f"/officer/alerts/{alert_id}", token=token)
    assert s3 == 200
    
    s4, r4 = request("POST", f"/officer/alerts/{alert_id}/action", body={
        "action_type": "resolved",
        "notes": "Spoke to farmer",
        "resolve": True
    }, token=token)
    assert s4 == 200

def test_existing_apis():
    token = make_token("OFF-1001", "officer", 480)
    # health
    s, r = request("GET", "/health")
    assert s == 200, f"Expected 200, got {s}"
    s, r = request("GET", "/health")
    assert s == 200
    # otp
    s, r = request("POST", "/auth/otp/request", body={"phone": "+918888888888"})
    assert s == 200
    ftok = make_token("+919692225447", "farmer", 480)
    # session
    s, r = request("GET", "/auth/session", token=ftok)
    assert s == 200
    # farmer profile
    s, r = request("GET", "/farmers/me", token=ftok)
    assert s == 200
    s, r = request("POST", "/farmers/me/profile", body={"display_name": "Testing", "language_code": "en", "state_name": "MH", "district_name": "Nashik", "village_name": "V1"}, token=ftok)
    assert s == 200
    print("All existing APIs verified")

if __name__ == '__main__':
    print("Running unit tests...")
    test_distress_scoring_engine()
    
    print("Starting server for integration tests...")
    server = subprocess.Popen(["python", "-m", "uvicorn", "backend.app.main:app", "--port", "8004"])
    time.sleep(2)
    try:
        test_api_score_generation()
        test_existing_apis()
        print('All tests passed.')
    finally:
        server.terminate()
