/* ============================================================
   SITE CONFIG — single source of truth.
   Renaming the emulator or changing the repo? Edit ONLY here.
   ============================================================ */

const SITE_CONFIG = {
  // Brand. Change this once and the whole site (title, hero, nav, footer)
  // follows automatically.
  name: "KYTY",

  // Emulator repository (where visitors are sent to star / contribute).
  repoUrl: "https://github.com/PixelDroid19/Kyty",
  upstreamUrl: "https://github.com/InoriRus/Kyty",
  releasesApiUrl: "https://api.github.com/repos/PixelDroid19/Kyty/releases/latest",
  releasesUrl: "https://github.com/PixelDroid19/Kyty/releases",

  // Gallery: drop your captures into /screenshots and add entries here.
  // Example:
  //   { src: "screenshots/dead-cells-01.png", label: "Dead Cells — gameplay" },
  // Items with no `src` render as styled placeholder slots.
  gallery: [
    { src: "", label: "Dead Cells — capture slot 1" },
    { src: "", label: "Dead Cells — capture slot 2" },
    { src: "", label: "Future title — slot 3" },
    { src: "", label: "Future title — slot 4" },
    { src: "", label: "Future title — slot 5" },
    { src: "", label: "Future title — slot 6" },
  ],
};

/* ============================================================
   COMPATIBILITY LIST — verified strict-run results only.
   status: playable | ingame | intro | nothing | untested
   Add new rows here as results are verified; notes are
   translated via data-i18n keys (compat.n.<id>) in i18n.js.
   ============================================================ */

const COMPAT_DATA = [
  {
    id: "deadcells",
    game: "Dead Cells",
    status: "playable",
    build: "master @ 15d66f6",
    notes: { en: "Menus, loading and sustained gameplay-era frames. Vulkan renderer.", es: "Menús, carga y frames de jugabilidad sostenidos. Renderer Vulkan." },
  },
  {
    id: "yourgame",
    game: "— Your game here —",
    status: "untested",
    build: "—",
    notes: { en: "Not tested yet. Run it, capture the result, report it on GitHub.", es: "Aún no probado. Ejecútalo, captura el resultado y repórtalo en GitHub." },
  },
];
