/* ============================================================
   MAIN — particles, nav, reveal + scramble, compat, gallery
   ============================================================ */

/* ---------- Brand injection (rename in config.js only) ---------- */
function applyBrand() {
  document.querySelectorAll("[data-site-name]").forEach((el) => {
    el.textContent = SITE_CONFIG.name;
  });
  const heroTitle = document.querySelector("[data-site-name-glitch]");
  if (heroTitle) {
    heroTitle.textContent = SITE_CONFIG.name;
    heroTitle.dataset.text = SITE_CONFIG.name;
  }
  document.querySelectorAll("[data-repo-link]").forEach((el) => {
    el.href = SITE_CONFIG.repoUrl;
  });
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Starfield (monochrome, quiet) ---------- */
function initParticles() {
  const canvas = document.getElementById("fx-canvas");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas || reduced) return;

  const ctx = canvas.getContext("2d");
  let w, h, dpr, stars;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(innerWidth * dpr);
    h = canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    const count = Math.min(160, Math.floor((innerWidth * innerHeight) / 12000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.1 + 0.4) * dpr,
      vy: (Math.random() * 0.1 + 0.02) * dpr,
      vx: (Math.random() - 0.5) * 0.04 * dpr,
      a: Math.random() * 0.45 + 0.1,
      tw: Math.random() * Math.PI * 2,
      sq: Math.random() < 0.25,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.y += s.vy;
      s.x += s.vx;
      s.tw += 0.02;
      if (s.y > h + 4) { s.y = -4; s.x = Math.random() * w; }
      if (s.x < -4) s.x = w + 4;
      if (s.x > w + 4) s.x = -4;
      const alpha = s.a * (0.7 + Math.sin(s.tw) * 0.3);
      ctx.fillStyle = `rgba(244, 244, 245, ${alpha})`;
      if (s.sq) {
        ctx.fillRect(s.x, s.y, s.r * 1.6, s.r * 1.6);
      } else {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(frame);
  }

  resize();
  addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

/* ---------- Navbar ---------- */
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav__links");

  addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", scrollY > 24);
  }, { passive: true });

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Text scramble (decode effect on reveal) ---------- */
const SCRAMBLE_CHARS = "█▓▒░<>/\\[]{}=+*#";

function scramble(el) {
  if (el.dataset.scrambled) return;
  el.dataset.scrambled = "1";
  const finalText = el.textContent;
  const finalHTML = el.innerHTML;
  const len = finalText.length;
  let frame = 0;
  const total = Math.max(14, Math.min(34, len + 8));
  const iv = setInterval(() => {
    frame++;
    const reveal = Math.floor((frame / total) * len);
    let out = finalText.slice(0, reveal);
    for (let i = reveal; i < len; i++) {
      out += finalText[i] === " " ? " " : SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
    }
    el.textContent = out;
    if (frame >= total) {
      el.innerHTML = finalHTML; // restore any markup (e.g. <em>)
      clearInterval(iv);
    }
  }, 26);
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          e.target.querySelectorAll("[data-scramble]").forEach(scramble);
          if (e.target.hasAttribute("data-scramble")) scramble(e.target);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Compatibility table ---------- */
const TAG_CLASS = {
  playable: "tag--playable",
  ingame: "tag--ingame",
  intro: "tag--intro",
  nothing: "tag--nothing",
  untested: "tag--untested",
};

function renderCompat() {
  const body = document.getElementById("compat-body");
  if (!body) return;
  const lang = I18n.lang();
  body.innerHTML = COMPAT_DATA.map(
    (row) => `
    <tr data-status="${row.status}" data-game="${row.game.toLowerCase()}">
      <td class="compat-game">${row.game}</td>
      <td><span class="tag ${TAG_CLASS[row.status]}">${I18n.t("status." + row.status)}</span></td>
      <td class="compat-notes">${row.notes[lang] || row.notes.en}</td>
      <td class="compat-build">${row.build}</td>
    </tr>`
  ).join("");
  filterCompat();
}

function filterCompat() {
  const q = (document.getElementById("compat-search").value || "").trim().toLowerCase();
  const filter = document.querySelector("#compat-filters .filter-btn.is-active").dataset.filter;
  let visible = 0;
  document.querySelectorAll("#compat-body tr").forEach((tr) => {
    const okStatus = filter === "all" || tr.dataset.status === filter;
    const okText = !q || tr.dataset.game.includes(q);
    const show = okStatus && okText;
    tr.hidden = !show;
    if (show) visible++;
  });
  document.getElementById("compat-empty").hidden = visible !== 0;
}

function initCompat() {
  renderCompat();
  document.getElementById("compat-search").addEventListener("input", filterCompat);
  document.querySelectorAll("#compat-filters .filter-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll("#compat-filters .filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterCompat();
    })
  );
  I18n.onChange(renderCompat); // re-render notes in the new language
}

/* ---------- Gallery ---------- */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = SITE_CONFIG.gallery
    .map((item) => {
      const inner = item.src
        ? `<img src="${item.src}" alt="${item.label}" loading="lazy" />`
        : `<div class="shot-placeholder">
             <div class="shot-placeholder__core">
               <span class="shot-placeholder__nosignal glitch-hard" data-text="NO SIGNAL">NO SIGNAL</span>
             </div>
             <div class="shot-placeholder__sweep"></div>
           </div>`;
      return `<figure class="gallery-item">${inner}<figcaption class="gallery-item__label">${item.label}</figcaption></figure>`;
    })
    .join("");
}

/* ---------- Petting (hero mascot) ---------- */
function initPetting() {
  const mascot = document.getElementById("hero-mascot");
  if (!mascot) return;
  const hint = document.getElementById("mascot-hint");
  let petting = false;
  let heartTimer = null;
  let stopTimer = null;

  function spawnHeart() {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.style.setProperty("--dx", `${(Math.random() * 70 - 35).toFixed(0)}px`);
    heart.style.width = `${(10 + Math.random() * 7).toFixed(0)}px`;
    heart.innerHTML =
      '<svg viewBox="0 0 20 18"><path d="M10 17 C4 12.4 1 9.2 1 5.8 C1 2.9 3.3 1 5.6 1 C7.4 1 9 2.3 10 4 C11 2.3 12.6 1 14.4 1 C16.7 1 19 2.9 19 5.8 C19 9.2 16 12.4 10 17 Z"/></svg>';
    heart.addEventListener("animationend", () => heart.remove());
    mascot.appendChild(heart);
  }

  function startPet(e) {
    if (e.type === "pointerdown" && e.button !== 0) return;
    petting = true;
    clearTimeout(stopTimer);
    mascot.classList.add("is-petted");
    if (hint) hint.classList.add("is-hidden");
    spawnHeart();
    if (!heartTimer) heartTimer = setInterval(spawnHeart, 150);
  }

  function stopPet() {
    if (!petting) return;
    petting = false;
    clearInterval(heartTimer);
    heartTimer = null;
    stopTimer = setTimeout(() => mascot.classList.remove("is-petted"), 220);
  }

  mascot.addEventListener("pointerdown", startPet);
  mascot.addEventListener("pointerenter", (e) => { if (e.buttons & 1) startPet(e); });
  mascot.addEventListener("pointerup", stopPet);
  mascot.addEventListener("pointerleave", stopPet);
  mascot.addEventListener("pointercancel", stopPet);
  mascot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      startPet(e);
      setTimeout(stopPet, 700);
    }
  });
}

/* ---------- Peeker (mascot visits from a screen edge) ---------- */
function initPeeker() {
  const el = document.getElementById("peeker");
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function schedule() {
    setTimeout(peek, 11000 + Math.random() * 13000); // every ~11–24s
  }

  function peek() {
    const side = Math.random() < 0.5 ? "left" : "right";

    // 1. Ensure no peek class and remove old side
    el.classList.remove("is-peek", "peeker--left", "peeker--right");

    // 2. Apply the new side class (puts it off-screen)
    el.classList.add(`peeker--${side}`);

    // 3. Force the browser to render the off-screen position
    void el.offsetWidth;

    // 4. Now trigger the slide-in transition
    el.classList.add("is-peek");

    // 5. After a while, slide back out
    setTimeout(() => {
      el.classList.remove("is-peek");
      setTimeout(schedule, 900); // wait for exit transition before rescheduling
    }, 2600 + Math.random() * 1800);
  }

  schedule();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyBrand();
  initParticles();
  initNav();
  initReveal();
  initCompat();
  renderGallery();
  initPetting();
  initPeeker();
});
