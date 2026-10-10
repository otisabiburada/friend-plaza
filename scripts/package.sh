#!/bin/sh
# Makes the zip you attach to a GitHub release: build/Friend-Plaza.zip, with one folder "Friend Plaza" inside.
# Needs only zip. It packs the committed dist/index.js as it is (no pnpm, no build).
set -e
cd "$(dirname "$0")/.."
[ -f dist/index.js ] || { echo "dist/index.js is missing. Run 'pnpm i && pnpm build' once and commit dist/."; exit 1; }
rm -rf build && mkdir -p "build/Friend Plaza"
cp -R dist py_modules main.py plugin.json package.json LICENSE README.md FEATURES.md server.txt "build/Friend Plaza/"
find "build/Friend Plaza" -name "__pycache__" -type d -prune -exec rm -rf {} +
(cd build && zip -qr Friend-Plaza.zip "Friend Plaza")
echo "Made build/Friend-Plaza.zip"
