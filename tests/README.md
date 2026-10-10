# Tests

- `test_modules.py` - unit tests for the Python modules (no network, no Decky):
  `python3 -I -m unittest discover -s tests -p 'test_*.py'`
- `e2e_backend.py` - the real backend talking to a local test server (see the file header).
- `ts/` - unit tests for the plaza rules (layout, nothing-happens-by-itself, quality, walking, collisions, people,
  polling): `node tests/ts/run.mjs` (needs `npm i esbuild` once, or `ESBUILD=/path/to/esbuild/lib/main.js`).
