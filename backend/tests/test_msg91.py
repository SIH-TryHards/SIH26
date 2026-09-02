import os
import json
import urllib.request
import urllib.error
from unittest.mock import patch, MagicMock

import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

# Mock env
os.environ["OTP_MODE"] = "msg91"
os.environ["MSG91_AUTHKEY"] = "mocked_secret_authkey"

from backend.app.main import otp_request, otp_verify, PhoneIn, OtpIn
import backend.app.main as m
from fastapi import HTTPException

def test_stub_mode():
    m.OTP_MODE = "stub"
    res = otp_request(PhoneIn(phone="8888888888"))
    assert res["data"]["sent"] is False
    assert "dev_code" in res["data"]

@patch('backend.app.main.urllib.request.urlopen')
def test_msg91_mode(mock_urlopen):
    m.OTP_MODE = "msg91"
    
    # test request
    res = otp_request(PhoneIn(phone="8888888888"))
    assert res["data"]["mode"] == "msg91"
    
    # test valid mocked access token accepted
    mock_res = MagicMock()
    mock_res.read.return_value = b'{"type": "success"}'
    
    cm = MagicMock()
    cm.__enter__.return_value = mock_res
    mock_urlopen.return_value = cm
    
    res = otp_verify(OtpIn(phone="8888888888", msg91_token="valid_token", otp=None))
    assert "token" in res["data"]
    
    # check that mock was called with correct auth key (no exposure)
    called_req = mock_urlopen.call_args[0][0]
    payload = json.loads(mock_urlopen.call_args.kwargs["data"].decode("utf-8"))
    assert payload["authkey"] == "mocked_secret_authkey"
    assert payload["access-token"] == "valid_token"
    
    # test invalid MSG91 access token rejected
    mock_res.read.return_value = b'{"type": "error", "message": "Invalid token"}'
    try:
        otp_verify(OtpIn(phone="8888888888", msg91_token="invalid_token", otp=None))
        assert False
    except HTTPException as e:
        assert e.status_code == 400
        assert e.detail["error"]["code"] == "INVALID_OTP"

if __name__ == '__main__':
    print("Testing MSG91 auth...")
    test_stub_mode()
    test_msg91_mode()
    print("All tests passed.")
