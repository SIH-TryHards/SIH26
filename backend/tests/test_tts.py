import os
import json
import base64
import urllib.request
import urllib.error
from unittest.mock import patch, MagicMock

import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

# Mock env before importing main
os.environ["GNANI_TTS_ENABLED"] = "true"
os.environ["GNANI_TTS_API_KEY"] = "mock_key"

from backend.app.main import app, generate_tts, TTSRequestIn, TTS_CACHE, GNANI_LANG_MAP, GNANI_VOICE_MAP
from fastapi import HTTPException

def test_language_mapping():
    assert GNANI_LANG_MAP["hi"] == "hi-IN"
    assert GNANI_LANG_MAP["te"] == "te-IN"
    assert GNANI_VOICE_MAP["hi-IN"] == "Nalini"

@patch('backend.app.main.urllib.request.urlopen')
def test_tts_engine(mock_urlopen):
    # clear cache
    TTS_CACHE.clear()
    
    # 5. successful TTS response
    mock_res = MagicMock()
    mock_res.read.return_value = b"fake_audio_data"
    mock_res.headers.get.return_value = "audio/mpeg"
    
    cm = MagicMock()
    cm.__enter__.return_value = mock_res
    mock_urlopen.return_value = cm
    
    req = TTSRequestIn(text="Hello world", language="hi-IN")
    res = generate_tts(req)
    
    assert res.body == b"fake_audio_data"
    assert res.media_type == "audio/mpeg"
    
    # 7. cache hit & 8. cache miss
    # Since it was requested above, it should be in cache
    cache_keys = list(TTS_CACHE.keys())
    assert len(cache_keys) == 1
    
    # Reset mock to ensure it's NOT called again
    mock_urlopen.reset_mock()
    res_cached = generate_tts(req)
    assert res_cached.body == b"fake_audio_data"
    mock_urlopen.assert_not_called() # Cache hit
    
    # 9. long-text handling
    req_long = TTSRequestIn(text="A" * 3000, language="hi-IN")
    res_long = generate_tts(req_long)
    assert res_long.body == b"fake_audio_data"
    mock_urlopen.assert_called_once() # Cache miss
    # check that text was truncated to 2000
    called_req = mock_urlopen.call_args[0][0]
    payload = json.loads(mock_urlopen.call_args.kwargs["data"].decode("utf-8"))
    assert len(payload["text"]) == 2000
    
    # 6. failed provider response
    mock_urlopen.side_effect = urllib.error.HTTPError("url", 500, "Error", {}, None)
    req_fail = TTSRequestIn(text="Fail", language="hi-IN")
    try:
        generate_tts(req_fail)
        assert False, "Should have thrown"
    except HTTPException as e:
        assert e.status_code == 502
        assert e.detail["error"]["code"] == "TTS_PROVIDER_ERROR"
        
    mock_urlopen.side_effect = urllib.error.HTTPError("url", 429, "Error", {}, None)
    try:
        generate_tts(TTSRequestIn(text="Rate Limit", language="hi-IN"))
        assert False
    except HTTPException as e:
        assert e.status_code == 429
        
    # 4. missing key fallback
    import backend.app.main as m
    m.GNANI_TTS_API_KEY = ""
    try:
        generate_tts(TTSRequestIn(text="No key", language="hi-IN"))
        assert False
    except HTTPException as e:
        assert e.status_code == 503
        assert e.detail["error"]["code"] == "TTS_DISABLED"
        
    # 3. disabled fallback
    m.GNANI_TTS_API_KEY = "mock_key"
    m.GNANI_TTS_ENABLED = False
    try:
        generate_tts(TTSRequestIn(text="Disabled", language="hi-IN"))
        assert False
    except HTTPException as e:
        assert e.status_code == 503

if __name__ == '__main__':
    print("Running TTS tests...")
    test_language_mapping()
    test_tts_engine()
    print("All TTS tests passed!")
