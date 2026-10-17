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
    { src: "screenshots/hkvoid.jpg", label: "Hollow Knight: Voidheart Edition — gameplay (Intel, main)" },
    { src: "screenshots/silksong.jpg", label: "Hollow Knight: Silksong — gameplay (Intel, main)" },
    { src: "screenshots/formula.jpg", label: "Formula Legends — gameplay (Intel, main)" },
    { src: "screenshots/dredge.jpg", label: "DREDGE — gameplay (Intel, main)" },
    { src: "screenshots/minecraft.jpg", label: "Minecraft — gameplay (Intel, main)" },
    { src: "screenshots/hades.jpg", label: "Hades — gameplay (Intel, main)" },
    { src: "screenshots/blasphemous2.jpg", label: "Blasphemous II — gameplay (Intel, main)" },
    { src: "screenshots/deadcells.jpg", label: "Dead Cells — gameplay (Intel, main)" },
    { src: "screenshots/balatro.jpg", label: "Balatro — gameplay (Intel, main)" },
    { src: "screenshots/pvz.jpg", label: "Plants vs. Zombies: Replanted — gameplay (Intel, main)" },
    { src: "screenshots/zoo.jpg", label: "Let's Build a Zoo — gameplay (Intel, main)" },
    { src: "screenshots/gris.jpg", label: "GRIS — gameplay (Intel, main)" },
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
    id: "balatro",
    game: "Balatro",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "156–202", amd: "45–51" },
    shot: "screenshots/balatro.jpg",
    notes: { en: "Runs and menus at full speed on both hosts; music streams.", es: "Partidas y menús a velocidad completa en ambos equipos; la música se reproduce." },
  },
  {
    id: "hkvoid",
    game: "Hollow Knight: Voidheart Edition",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "59–61", amd: "30–31" },
    shot: "screenshots/hkvoid.jpg",
    notes: { en: "Gameplay holds the 60 fps target on Intel; text readable since the command-buffer fix.", es: "El gameplay mantiene los 60 fps en Intel; el texto es legible desde el arreglo de command buffers." },
  },
  {
    id: "silksong",
    game: "Hollow Knight: Silksong",
    status: "ingame",
    build: "main @ 7181434",
    fps: { intel: "54–57", amd: "22" },
    shot: "screenshots/silksong.jpg",
    notes: { en: "Gameplay reached; a black region appears when walking right from the start area (open).", es: "Llega al gameplay; aparece una mancha negra al avanzar a la derecha desde el área inicial (abierto)." },
  },
  {
    id: "formula",
    game: "Formula Retro Racing: World Tour – Special Edition",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "36–42", amd: "29–31" },
    shot: "screenshots/formula.jpg",
    notes: { en: "Races run with correct shadows; below 60 fps on Intel.", es: "Las carreras corren con sombras correctas; por debajo de 60 fps en Intel." },
  },
  {
    id: "dredge",
    game: "DREDGE",
    status: "ingame",
    build: "main @ 7181434",
    fps: { intel: "15–20", amd: "12" },
    shot: "screenshots/dredge.jpg",
    notes: { en: "Fishing and docks render correctly; CPU-bound command processing limits fps.", es: "Pesca y muelles se ven bien; el procesamiento de comandos en CPU limita los fps." },
  },
  {
    id: "absolum",
    game: "Absolum",
    status: "ingame",
    build: "main @ 7181434",
    fps: { intel: "14–16", amd: "7–10" },
    shot: "screenshots/absolum.jpg",
    notes: { en: "Story and first area reached; slow.", es: "Llega a la historia y la primera zona; lento." },
  },
  {
    id: "minecraft",
    game: "Minecraft",
    status: "ingame",
    build: "main @ 7181434",
    fps: { intel: "52–67 (menus) · 8–10 (world)", amd: "8–9" },
    shot: "screenshots/minecraft.jpg",
    notes: { en: "World loads with textured terrain; in-world fps is low.", es: "El mundo carga con terreno texturizado; fps bajos dentro del mundo." },
  },
  {
    id: "deadcells",
    game: "Dead Cells",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "82–127", amd: "30–31" },
    shot: "screenshots/deadcells.jpg",
    notes: { en: "Combat and levels at full speed on Intel.", es: "Combate y niveles a velocidad completa en Intel." },
  },
  {
    id: "gris",
    game: "GRIS",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "146–202", amd: "30–65" },
    shot: "screenshots/gris.jpg",
    notes: { en: "Watercolour scenes render correctly.", es: "Las escenas de acuarela se ven correctamente." },
  },
  {
    id: "hades",
    game: "Hades",
    status: "ingame",
    build: "main @ 7181434",
    fps: { intel: "18–23", amd: "23–25" },
    shot: "screenshots/hades.jpg",
    notes: { en: "Tartarus gameplay reached; below 30 fps.", es: "Llega al gameplay en el Tártaro; por debajo de 30 fps." },
  },
  {
    id: "messenger",
    game: "The Messenger",
    status: "intro",
    build: "main @ 7181434",
    fps: { intel: "400–590", amd: "164–171" },
    shot: "screenshots/messenger.jpg",
    notes: { en: "Intro and title screen; the test route does not enter gameplay. One intermittent early stall seen.", es: "Intro y pantalla de título; la ruta de prueba no entra al gameplay. Se vio un bloqueo intermitente al arrancar." },
  },
  {
    id: "blasphemous2",
    game: "Blasphemous 2",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "124–159", amd: "— (black screen)" },
    shot: "screenshots/blasphemous2.jpg",
    notes: { en: "Gameplay on Intel. On AMD the screen stays black at ~55 fps (open).", es: "Gameplay en Intel. En AMD la pantalla queda negra a ~55 fps (abierto)." },
  },
  {
    id: "dreamingsarah",
    game: "Dreaming Sarah",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "224–228", amd: "72–74" },
    shot: "screenshots/dreamingsarah.jpg",
    notes: { en: "Platforming at full speed.", es: "Plataformas a velocidad completa." },
  },
  {
    id: "zoo",
    game: "Let's Build A Zoo",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "299–379", amd: "62–82" },
    shot: "screenshots/zoo.jpg",
    notes: { en: "Zoo management gameplay.", es: "Gameplay de gestión del zoológico." },
  },
  {
    id: "peppa",
    game: "My Friend Peppa Pig",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "196–296", amd: "16 (menu)" },
    shot: "screenshots/peppa.jpg",
    notes: { en: "Gameplay on Intel; the AMD run ended in the pause menu.", es: "Gameplay en Intel; la prueba en AMD terminó en el menú de pausa." },
  },
  {
    id: "animalwell",
    game: "ANIMAL WELL",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "35–36", amd: "21–22" },
    shot: "screenshots/animalwell.jpg",
    notes: { en: "Exploration reached; below 60 fps.", es: "Llega a la exploración; por debajo de 60 fps." },
  },
  {
    id: "worms",
    game: "Worms Armageddon: Anniversary Edition",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "60", amd: "60" },
    shot: "screenshots/worms.jpg",
    notes: { en: "Matches play at a locked 60 fps on both hosts; maps are randomly generated.", es: "Partidas a 60 fps fijos en ambos equipos; los mapas se generan al azar." },
  },
  {
    id: "voidterrarium",
    game: "void tRrLM();++ //Void Terrarium++",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "169–288", amd: "15–16 (intro)" },
    shot: "screenshots/voidterrarium.jpg",
    notes: { en: "Dungeon gameplay on Intel; the AMD run did not get past the first dark room.", es: "Gameplay de mazmorra en Intel; en AMD no pasó de la primera sala oscura." },
  },
  {
    id: "pvz",
    game: "Plants vs. Zombies: Replanted",
    status: "playable",
    build: "main @ 7181434",
    fps: { intel: "74–110", amd: "27 (menu)" },
    shot: "screenshots/pvz.jpg",
    notes: { en: "Lawn gameplay on Intel; the AMD run stopped at name entry.", es: "Gameplay en el jardín en Intel; en AMD se quedó en la entrada de nombre." },
  },
  {
    id: "octopath2",
    game: "OCTOPATH TRAVELER II",
    status: "intro",
    build: "main @ 7181434",
    fps: { intel: "4–9", amd: "— (device lost)" },
    shot: "screenshots/octopath2.jpg",
    notes: { en: "Reaches traveler selection; starting a new game stops on a missing shader instruction. Device lost on AMD.", es: "Llega a la selección de viajero; iniciar partida se detiene por una instrucción de shader faltante. En AMD se pierde el dispositivo." },
  },
  {
    id: "jojo",
    game: "JoJo's Bizarre Adventure: All-Star Battle R",
    status: "intro",
    build: "main @ 7181434",
    fps: { intel: "9", amd: "7–20" },
    shot: "screenshots/jojo.jpg",
    notes: { en: "Story intro only; slow.", es: "Solo la intro de historia; lento." },
  },
  {
    id: "superliminal",
    game: "Superliminal",
    status: "nothing",
    build: "main @ 7181434",
    fps: { intel: "—", amd: "—" },
    notes: { en: "Stops presenting at boot (frame 332); device lost on AMD.", es: "Deja de presentar al arrancar (frame 332); en AMD se pierde el dispositivo." },
  },
];
