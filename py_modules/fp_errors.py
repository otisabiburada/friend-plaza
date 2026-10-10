"""Turns raw failures into a sentence that says what to do next."""
from typing import Optional


def friendly_error(where: str, raw: Optional[str], status: int = 0) -> str:
    """where: 'server' or 'login'. raw: the technical text. status: HTTP status if known."""
    text = (raw or "").strip()
    low = text.lower()
    if where == "login":
        return "Signing in did not finish. Press Sign in again and complete the Steam page; if it keeps failing, check the server address in Settings."
    # the Friend Plaza server
    if status == 401:
        return "You are signed out of the server. Open Settings > Online and sign in with Steam again."
    if status == 429 or "slow down" in low or "too many" in low:
        return "The server asked you to slow down. It will work again in a minute."
    if status in (500, 502, 503, 504) or "server error" in low:
        return "The server had a problem. Try again in a minute; if it keeps happening, tell whoever runs the server."
    if status == 404 and "not found" in low:
        return "The server doesn't know this address. Check the server address in Settings > Online."
    if status == 0 or "resolve" in low or "connect" in low or "timed out" in low or "refused" in low or "ssl" in low:
        return "Can't reach the server. Check the server address in Settings > Online and the Wi-Fi."
    if "not json" in low:
        return "The address answers, but it is not a Friend Plaza server. Check the server address in Settings > Online."
    return text or "Something went wrong talking to the server."
