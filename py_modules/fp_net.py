"""Talking to the Friend Plaza server (curl first, urllib as a fallback)."""
import asyncio
import json
import os
from typing import Any, Dict, Optional, Tuple

SYNC_TIMEOUT = 15


def clean_env() -> Dict[str, str]:
    env = dict(os.environ)
    orig = env.pop("LD_LIBRARY_PATH_ORIG", None)
    if orig is not None:
        env["LD_LIBRARY_PATH"] = orig
    else:
        env.pop("LD_LIBRARY_PATH", None)
    env.pop("LD_PRELOAD", None)
    return env


class ApiError(Exception):
    def __init__(self, status: int, message: str):
        super().__init__(message)
        self.status = status
        self.message = message








async def _curl_json(method: str, url: str, body: Optional[str], token: str, timeout: int) -> Tuple[int, str]:
    """Request with a JSON body through curl. URL, token and body go in through stdin, not the command line."""
    def q(t: str) -> str:
        return t.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "")
    cfg = 'url = "%s"\nrequest = "%s"\nheader = "Accept: application/json"\n' % (q(url), method)
    if token:
        cfg += 'header = "Authorization: Bearer %s"\n' % q(token)
    if body is not None:
        cfg += 'header = "Content-Type: application/json"\ndata = "%s"\n' % q(body)
    proc = await asyncio.create_subprocess_exec(
        "curl", "-sS", "--max-time", str(timeout), "-w", "\n%{http_code}", "--config", "-",
        stdin=asyncio.subprocess.PIPE, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE,
        env=clean_env())
    out, err = await proc.communicate(cfg.encode())
    if proc.returncode != 0:
        raise ApiError(0, (err.decode("utf-8", "replace").strip() or "curl failed").splitlines()[-1][:160])
    text = out.decode("utf-8", "replace")
    resp, _, code = text.rpartition("\n")
    return int(code or 0), resp


async def _urllib_json(method: str, url: str, body: Optional[str], token: str, timeout: int) -> Tuple[int, str]:
    def run() -> Tuple[int, str]:
        import urllib.request
        import urllib.error
        headers = {"Accept": "application/json"}
        if token:
            headers["Authorization"] = "Bearer " + token
        if body is not None:
            headers["Content-Type"] = "application/json"
        req = urllib.request.Request(url, data=body.encode("utf-8") if body is not None else None,
                                     headers=headers, method=method)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.status, r.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            return e.code, e.read().decode("utf-8", "replace")
        except Exception as e:  # noqa: BLE001
            raise ApiError(0, str(e)[:160])
    return await asyncio.to_thread(run)


async def http_json(method: str, url: str, payload: Optional[Dict[str, Any]], token: str = "",
                    timeout: int = SYNC_TIMEOUT) -> Tuple[int, Dict[str, Any]]:
    body = json.dumps(payload, separators=(",", ":")) if payload is not None else None
    try:
        status, text = await _curl_json(method, url, body, token, timeout)
    except FileNotFoundError:
        status, text = await _urllib_json(method, url, body, token, timeout)
    try:
        data = json.loads(text) if text else {}
    except ValueError:
        data = {"ok": False, "message": "The server sent something that is not JSON (HTTP %d)" % status}
    return status, data if isinstance(data, dict) else {}




