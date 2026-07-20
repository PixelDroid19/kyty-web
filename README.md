# Kyty Web

Landing page for the **[Kyty](https://github.com/PixelDroid19/Kyty)** emulator —
an experimental open-source PlayStation 4/5 emulator.

Live site: **https://pixeldroid19.github.io/kyty-web/**

Bilingual (EN/ES), static, zero dependencies. Deployed with GitHub Pages.

## Structure

```
index.html            Page markup (all text via data-i18n keys)
assets/css/styles.css Theme (dark · neon · Orbitron/Rajdhani)
assets/js/config.js   ★ Site name, repo URL, gallery manifest, compat data
assets/js/i18n.js     EN/ES dictionary + language switch
assets/js/main.js     Particles, nav, compat table, gallery
screenshots/          Drop game captures here (see its README)
```

## Editing

- **Rename the emulator / change repo URL:** edit `SITE_CONFIG` in
  `assets/js/config.js` — the whole site follows.
- **Add a game to the compatibility list:** append a row to `COMPAT_DATA` in
  `assets/js/config.js` (`status`: `playable | ingame | intro | nothing | untested`).
- **Add screenshots:** copy files into `screenshots/` and register them in
  `SITE_CONFIG.gallery` (details in `screenshots/README.md`).
- **Change text:** edit `assets/js/i18n.js` (both `en` and `es` blocks).

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Push to `main`; GitHub Pages serves the branch root automatically.

## License

MIT. Not affiliated with Sony Interactive Entertainment.
"PlayStation" and "PS5" are trademarks of Sony Interactive Entertainment Inc.
