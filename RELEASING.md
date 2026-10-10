# Releasing

Users install the zip from a GitHub release. They never run pnpm: `dist/index.js` is committed to the repository.

1. Change the code. If anything under `src/` changed, rebuild once and commit the result: `pnpm i && pnpm build`.
2. Bump `version` in `package.json` and add a line to `CHANGELOG.md`.
3. Commit, then tag and push: `git tag v3.2.0 && git push origin main v3.1.0`.
4. The Release workflow checks the tag matches `package.json`, runs the Python tests, packs `Friend-Plaza.zip` and attaches it to a new release.

To make the zip yourself: `sh scripts/package.sh` (needs only `zip`).

## Decky Plugin Store
To list it in the store, open a pull request on SteamDeckHomebrew/decky-plugin-database that adds this repository as a
submodule (see that repository's README). The store builds from the tag you give it, so keep `dist/index.js` committed.
