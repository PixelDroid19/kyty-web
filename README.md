# Kyty Web

Landing page for the **[Kyty](https://github.com/PixelDroid19/Kyty)** emulator —
an experimental open-source PlayStation 4/5 emulator.

Live site: **https://pixeldroid19.github.io/kyty-web/**

Bilingual (EN/ES), built with [Astro](https://astro.build) as a static site and
deployed with GitHub Pages. Visual identity: monochrome + single accent, glitch
FX, and **Kit**, the mascot (single source in `MascotDefs.astro`; static mark in
`public/assets/img/logo.svg`).

## Structure

```
src/pages/index.astro           Page: composes the sections below
src/layouts/BaseLayout.astro    <head>, background canvas, classic scripts
src/components/*.astro          One component per section (Hero, Releases, …)
src/lib/asset.ts                Base-path-aware URLs for files in public/
src/styles/                     Theme and component CSS (imported by the layout)
public/assets/js/config.js      ★ Site name, repo URL, gallery manifest, compat data
public/assets/js/i18n.js        EN/ES dictionary + language switch
public/assets/js/modules/       Page behavior, including live GitHub Releases data
public/screenshots/             Game captures (see its README)
```

The behavior scripts in `public/assets/js/` are plain classic scripts that share
globals (`SITE_CONFIG`, `I18n`, …), so they are served as-is rather than bundled.

## Editing

- **Rename the emulator / change repo URL:** edit `SITE_CONFIG` in
  `public/assets/js/config.js` — the whole site follows.
- **Add a game to the compatibility list:** append a row to `COMPAT_DATA` in
  `public/assets/js/config.js` (`status`: `playable | ingame | intro | nothing | untested`).
- **Add screenshots:** copy files into `public/screenshots/` and register them in
  `SITE_CONFIG.gallery` as `screenshots/<file>` (details in `public/screenshots/README.md`).
- **Change text:** edit `public/assets/js/i18n.js` (both `en` and `es` blocks).
- **Release downloads and changelog:** loaded from the Kyty GitHub Releases API;
  configure the endpoints in `public/assets/js/config.js`.

## Local preview

Requires Node 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321/kyty-web/
npm run build      # static output in dist/
npm run preview    # serves dist/ under the same base path
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the Astro
site and publishes `dist/` to GitHub Pages. In the repository settings, Pages
must use **Source: GitHub Actions**.

## License

MIT. Not affiliated with Sony Interactive Entertainment.
"PlayStation" and "PS5" are trademarks of Sony Interactive Entertainment Inc.
