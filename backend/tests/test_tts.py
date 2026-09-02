"""Mocked correctness and abuse-protection tests for the Gnani TTS bridge."""

import base64
import json
import os
import sys
import urllib.error
from unittest.mock import MagicMock, patch

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))

# Never use a real provider key in tests.
os.environ["GNANI_TTS_ENABLED"] = "true"
os.environ["GNANI_TTS_API_KEY"] = "mock-key-only"

from fastapi import HTTPException
from pydantic import ValidationError
from starlette.requests import Request

from backend.app import main as module
from backend.app.main import (
    GNANI_LANG_MAP,
    GNANI_TTS_API_URL,
    GNANI_TTS_AUDIO_CONFIG,
    GNANI_TTS_MODEL,
    GNANI_VOICE_MAP,
    TTS_CACHE,
    TTSRequestIn,
    TTS_RATE_BUCKETS,
    generate_tts,
    synthesize_tts,
)


def _provider_response(body=b"fake-mp3", content_type="audio/mpeg"):
    response = MagicMock()
    response.read.return_value = body
    response.headers = {"Content-Type": content_type}
    context = MagicMock()
    context.__enter__.return_value = response
    return context


def _request(host="198.51.100.20"):
    return Request({
        "type": "http",
        "method": "POST",
        "path": "/api/v1/tts",
        "headers": [],
        "client": (host, 1234),
        "server": ("testserver", 80),
        "scheme": "http",
        "query_string": b"",
    })


def _fresh_state():
    TTS_CACHE.clear()
    TTS_RATE_BUCKETS.clear()
    module.GNANI_TTS_ENABLED = True
    module.GNANI_TTS_API_KEY = "mock-key-only"


def test_locale_and_voice_mapping():
    expected = {
        "en": ("en-IN", "Kaveri"),
        "hi": ("hi-IN", "Nalini"),
        "mr": ("mr-IN", "Zahira"),
        "bn": ("bn-IN", "Kirra"),
        "ta": ("ta-IN", "Asmita"),
        "te": ("te-IN", "Suhana"),
    }
    assert {code: (GNANI_LANG_MAP[code], GNANI_VOICE_MAP[locale])
            for code, (locale, _) in expected.items()} == expected
    assert set(GNANI_VOICE_MAP.values()) != {"Nalini"}

    for code, (locale, voice) in expected.items():
        request = TTSRequestIn(text="Hello", language=code)
        assert request.language == locale
        assert GNANI_VOICE_MAP[request.language] == voice


@patch("backend.app.main.urllib.request.urlopen")
def test_official_url_payload_header_audio_and_cache(mock_urlopen):
    _fresh_state()
    mock_urlopen.return_value = _provider_response()

    result = synthesize_tts(TTSRequestIn(text="नमस्ते किसान", language="hi-IN", speed=1.05))
    assert result.body == b"fake-mp3"
    assert result.media_type == "audio/mpeg"

    request = mock_urlopen.call_args.args[0]
    payload = json.loads(request.data.decode("utf-8"))
    assert request.full_url == GNANI_TTS_API_URL == "https://api.vachana.ai/api/v1/tts/inference"
    assert request.get_header("X-api-key-id") == "mock-key-only"
    assert request.get_header("User-agent") == "KisanSaathi/1.0"
    assert payload == {
        "text": "नमस्ते किसान",
        "voice": "Nalini",
        "model": "timbre-v2.5",
        "language": "hi-IN",
        "speed": 1.05,
        "audio_config": GNANI_TTS_AUDIO_CONFIG,
    }
    assert GNANI_TTS_MODEL == "timbre-v2.5"
    assert mock_urlopen.call_args.kwargs["timeout"] == 8

    mock_urlopen.reset_mock()
    cached = synthesize_tts(TTSRequestIn(text="नमस्ते किसान", language="hi-IN", speed=1.05))
    assert cached.body == b"fake-mp3"
    mock_urlopen.assert_not_called()


@patch("backend.app.main.urllib.request.urlopen")
def test_json_base64_response_is_only_decoded_for_json(mock_urlopen):
    _fresh_state()
    encoded = base64.b64encode(b"json-audio").decode("ascii")
    mock_urlopen.return_value = _provider_response(
        json.dumps({"audioContent": encoded}).encode("utf-8"),
        "application/json; charset=utf-8",
    )
    result = synthesize_tts(TTSRequestIn(text="JSON response", language="en"))
    assert result.body == b"json-audio"


@patch("backend.app.main.urllib.request.urlopen")
def test_provider_errors_and_unavailable(mock_urlopen):
    _fresh_state()
    mock_urlopen.side_effect = urllib.error.HTTPError("url", 400, "bad", {}, None)
    try:
        synthesize_tts(TTSRequestIn(text="Bad request", language="en"))
        assert False
    except HTTPException as exc:
        assert exc.status_code == 502
        assert exc.detail["error"]["code"] == "TTS_PROVIDER_ERROR"

    mock_urlopen.side_effect = urllib.error.HTTPError("url", 429, "rate", {}, None)
    try:
        synthesize_tts(TTSRequestIn(text="Provider rate", language="mr"))
        assert False
    except HTTPException as exc:
        assert exc.status_code == 429

    mock_urlopen.side_effect = urllib.error.URLError("offline")
    try:
        synthesize_tts(TTSRequestIn(text="Offline", language="bn"))
        assert False
    except HTTPException as exc:
        assert exc.status_code == 503
        assert exc.detail["error"]["code"] == "TTS_UNAVAILABLE"


def test_validation_and_fallback_behavior():
    _fresh_state()
    for bad in ("", " ", "A" * 2001):
        try:
            TTSRequestIn(text=bad, language="en")
            assert False, "oversized/empty text must be rejected"
        except ValidationError:
            pass
    for bad_language in ("kn-IN", "xx-IN", "en-GB"):
        try:
            TTSRequestIn(text="Hello", language=bad_language)
            assert False, "unsupported locale must be rejected"
        except ValidationError:
            pass
    try:
        TTSRequestIn(text="Hello", language="en", voice="Nalini")
        assert False, "mismatched voice must be rejected"
    except ValidationError:
        pass

    module.GNANI_TTS_ENABLED = False
    try:
        synthesize_tts(TTSRequestIn(text="Fallback", language="te"))
        assert False
    except HTTPException as exc:
        assert exc.status_code == 503
        assert exc.detail["error"]["code"] == "TTS_DISABLED"

    module.GNANI_TTS_ENABLED = True
    module.GNANI_TTS_API_KEY = ""
    try:
        synthesize_tts(TTSRequestIn(text="No key", language="ta"))
        assert False
    except HTTPException as exc:
        assert exc.status_code == 503
        assert exc.detail["error"]["code"] == "TTS_DISABLED"
    _fresh_state()


@patch("backend.app.main.urllib.request.urlopen")
def test_endpoint_rate_limit_is_bounded(mock_urlopen):
    _fresh_state()
    mock_urlopen.return_value = _provider_response()
    request = _request()
    for index in range(10):
        result = generate_tts(TTSRequestIn(text=f"Rate test {index}", language="en"), request)
        assert result.media_type == "audio/mpeg"
    try:
        generate_tts(TTSRequestIn(text="Rate test blocked", language="en"), request)
        assert False
    except HTTPException as exc:
        assert exc.status_code == 429
        assert exc.headers["Retry-After"] == "60"


if __name__ == "__main__":
    test_locale_and_voice_mapping()
    test_official_url_payload_header_audio_and_cache()
    test_json_base64_response_is_only_decoded_for_json()
    test_provider_errors_and_unavailable()
    test_validation_and_fallback_behavior()
    test_endpoint_rate_limit_is_bounded()
    print("All TTS tests passed.")
