/* ============================================================
   I18N — English / Spanish
   Toggle persists to localStorage. Add every UI string here.
   ============================================================ */

const I18N = {
  en: {
    "nav.games": "Games",
    "nav.compat": "Compatibility",
    "nav.gallery": "Gallery",
    "nav.contribute": "Contribute",

    "hero.badge": "EXPERIMENTAL · WORK IN PROGRESS",
    "hero.sub1": "An open-source",
    "hero.sub2": "emulator pushing Sony's next-gen console onto your PC — instruction by instruction, frame by frame.",
    "hero.petHint": "↑ pet him",
    "hero.petAria": "Pet Kit, the mascot",
    "hero.milestone": "LATEST MILESTONE",
    "hero.cta1": "Check Compatibility",
    "hero.cta2": "Star on GitHub",

    "status.playable": "PLAYABLE",
    "status.ingame": "IN-GAME",
    "status.intro": "INTRO/MENUS",
    "status.nothing": "NOTHING",
    "status.untested": "UNTESTED",

    "running.kicker": "// NOW RUNNING",
    "running.title": "Booted. Rendered. <em>Played.</em>",
    "running.desc": "Real games running on real emulated hardware — no shortcuts, no faked frames. Every milestone below was reached through strict, evidence-backed emulation work.",
    "running.shotSoon": "CAPTURE PENDING",
    "running.dcGenre": "Roguelite · Action-Platformer · Motion Twin",
    "running.dcBody": "The first title to break through the full pipeline: Vulkan device creation, Gen5 shader translation, indexed draws, VideoOut presentation, menus, loading and sustained gameplay-era frames under strict flags — no cheats, no permissive skips.",
    "running.f1k": "Renderer",
    "running.f2k": "Shaders",
    "running.f2v": "Gen5 → SPIR-V translation",
    "running.f3k": "Status",
    "running.f3v": "Gameplay-era frames sustained",
    "running.f4k": "Input",
    "running.f4v": "Keyboard / controller edges",
    "running.note": "More titles enter testing as the emulator core matures. Yours could be next — report results on GitHub.",

    "compat.kicker": "// GAME COMPATIBILITY",
    "compat.title": "What runs today?",
    "compat.desc": "Kyty is young. This list tracks verified, strict-run results only — no guesses, no inflated claims. Help us grow it by testing and reporting.",
    "compat.search": "Search a game…",
    "compat.all": "All",
    "compat.colGame": "Game",
    "compat.colStatus": "Status",
    "compat.colNotes": "Notes",
    "compat.colTested": "Tested build",
    "compat.empty": "No results. This title hasn't been tested yet — be the first to report it!",
    "compat.ctaText": "Tested a game that's not listed? Open an issue with your hardware, OS and result.",
    "compat.ctaBtn": "Report a result",

    "gallery.kicker": "// CAPTURES",
    "gallery.title": "Frames from the frontier",
    "gallery.desc": "In-emulator captures, straight from the Vulkan swapchain. New shots land as compatibility grows.",

    "contrib.bubble": "Psst… starring the repo really helps.",
    "contrib.kicker": "// JOIN THE FRONTIER",
    "contrib.title": "Emulators are built by communities.",
    "contrib.desc": "Kyty advances one verified frame at a time. Whether you code C++, hunt GPU bugs, test games, or just spread the word — you can push the frontier forward.",
    "contrib.i1t": "Star the repo",
    "contrib.i1d": "Visibility brings contributors. One click helps more than you think.",
    "contrib.i2t": "Report compatibility",
    "contrib.i2d": "Boot your games, note what happens, file an issue with evidence.",
    "contrib.i3t": "Fork & contribute",
    "contrib.i3d": "HLE exports, GPU parsing, SPIR-V, kernel — pick a seam and PR.",
    "contrib.i4t": "Read the engineering guide",
    "contrib.i4d": "Strict methodology: evidence before code, one frontier at a time.",

    "footer.legal": "Kyty is a free, open-source research project licensed under MIT. It is not affiliated with, endorsed by, or sponsored by Sony Interactive Entertainment. \"PlayStation\" and \"PS5\" are trademarks of Sony Interactive Entertainment Inc. No games, firmware, keys or BIOS files are distributed.",
    "footer.upstream": "Upstream project",
    "footer.made": "Built by the Kyty community",
  },

  es: {
    "nav.games": "Juegos",
    "nav.compat": "Compatibilidad",
    "nav.gallery": "Galería",
    "nav.contribute": "Contribuir",

    "hero.badge": "EXPERIMENTAL · EN DESARROLLO",
    "hero.sub1": "Un emulador de",
    "hero.sub2": "de código abierto que lleva la consola de nueva generación de Sony a tu PC — instrucción a instrucción, frame a frame.",
    "hero.petHint": "↑ acarícialo",
    "hero.petAria": "Acaricia a Kit, la mascota",
    "hero.milestone": "ÚLTIMO HITO",
    "hero.cta1": "Ver Compatibilidad",
    "hero.cta2": "Dale una Estrella",

    "status.playable": "JUGABLE",
    "status.ingame": "EN JUEGO",
    "status.intro": "INTRO/MENÚS",
    "status.nothing": "NO INICIA",
    "status.untested": "SIN PROBAR",

    "running.kicker": "// AHORA CORRE",
    "running.title": "Arranca. Renderiza. <em>Se juega.</em>",
    "running.desc": "Juegos reales corriendo sobre hardware emulado de verdad — sin atajos, sin frames fingidos. Cada hito se alcanzó con trabajo de emulación estricto y respaldado por evidencia.",
    "running.shotSoon": "CAPTURA PENDIENTE",
    "running.dcGenre": "Roguelite · Acción-Plataformas · Motion Twin",
    "running.dcBody": "El primer título en cruzar todo el pipeline: creación de dispositivo Vulkan, traducción de shaders Gen5, draws indexados, presentación VideoOut, menús, carga y frames de jugabilidad sostenidos bajo flags estrictos — sin trucos ni omisiones permisivas.",
    "running.f1k": "Renderer",
    "running.f2k": "Shaders",
    "running.f2v": "Traducción Gen5 → SPIR-V",
    "running.f3k": "Estado",
    "running.f3v": "Frames de jugabilidad sostenidos",
    "running.f4k": "Entrada",
    "running.f4v": "Teclado / mando",
    "running.note": "Más títulos entran a pruebas a medida que el núcleo madura. El tuyo podría ser el próximo — reporta resultados en GitHub.",

    "compat.kicker": "// COMPATIBILIDAD DE JUEGOS",
    "compat.title": "¿Qué funciona hoy?",
    "compat.desc": "Kyty es joven. Esta lista solo registra resultados verificados en ejecuciones estrictas — sin suposiciones ni cifras infladas. Ayúdanos a hacerla crecer probando y reportando.",
    "compat.search": "Busca un juego…",
    "compat.all": "Todos",
    "compat.colGame": "Juego",
    "compat.colStatus": "Estado",
    "compat.colNotes": "Notas",
    "compat.colTested": "Build probada",
    "compat.empty": "Sin resultados. Este título aún no se ha probado — ¡sé el primero en reportarlo!",
    "compat.ctaText": "¿Probaste un juego que no está en la lista? Abre un issue con tu hardware, SO y resultado.",
    "compat.ctaBtn": "Reportar resultado",

    "gallery.kicker": "// CAPTURAS",
    "gallery.title": "Frames desde la frontera",
    "gallery.desc": "Capturas dentro del emulador, directas del swapchain de Vulkan. Nuevas imágenes a medida que crece la compatibilidad.",

    "contrib.bubble": "Psst… darle una estrella al repo ayuda muchísimo.",
    "contrib.kicker": "// ÚNETE A LA FRONTERA",
    "contrib.title": "Los emuladores los construyen las comunidades.",
    "contrib.desc": "Kyty avanza un frame verificado a la vez. Ya sea programando en C++, cazando bugs de GPU, probando juegos o difundiendo el proyecto — puedes empujar la frontera.",
    "contrib.i1t": "Dale una estrella",
    "contrib.i1d": "La visibilidad atrae colaboradores. Un clic ayuda más de lo que crees.",
    "contrib.i2t": "Reporta compatibilidad",
    "contrib.i2d": "Arranca tus juegos, anota qué pasa y abre un issue con evidencia.",
    "contrib.i3t": "Fork y contribuye",
    "contrib.i3d": "Exports HLE, parsing de GPU, SPIR-V, kernel — elige un frente y haz PR.",
    "contrib.i4t": "Lee la guía de ingeniería",
    "contrib.i4d": "Metodología estricta: evidencia antes que código, una frontera a la vez.",

    "footer.legal": "Kyty es un proyecto de investigación libre y de código abierto bajo licencia MIT. No está afiliado, respaldado ni patrocinado por Sony Interactive Entertainment. \"PlayStation\" y \"PS5\" son marcas registradas de Sony Interactive Entertainment Inc. No se distribuyen juegos, firmware, claves ni archivos BIOS.",
    "footer.upstream": "Proyecto original",
    "footer.made": "Construido por la comunidad Kyty",
  },
};

const I18n = (() => {
  const STORAGE_KEY = "kyty-web-lang";
  let current = localStorage.getItem(STORAGE_KEY) || "en";
  if (!I18N[current]) current = "en";
  const listeners = [];

  function t(key) {
    return (I18N[current] && I18N[current][key]) || I18N.en[key] || key;
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPh);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === current);
    });
    document.title = `${SITE_CONFIG.name} — PlayStation 5 Emulator`;
    listeners.forEach((fn) => fn(current));
  }

  function set(lang) {
    if (!I18N[lang] || lang === current) return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
  }

  function onChange(fn) { listeners.push(fn); }
  function lang() { return current; }

  return { t, set, apply, onChange, lang };
})();

document.addEventListener("DOMContentLoaded", () => {
  I18n.apply();
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => I18n.set(btn.dataset.lang));
  });
});
