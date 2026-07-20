/* ============================================================
   MAIN — particles, nav, reveal, compat table, gallery
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

/* ---------- Starfield / particle canvas ---------- */
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
    const count = Math.min(220, Math.floor((innerWidth * innerHeight) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.4 + 0.4) * dpr,
      vy: (Math.random() * 0.12 + 0.03) * dpr,
      vx: (Math.random() - 0.5) * 0.05 * dpr,
      hue: Math.random() < 0.72 ? 218 : Math.random() < 0.5 ? 320 : 186,
      tw: Math.random() * Math.PI * 2,
    }));
  }

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.y += s.vy;
      s.x += s.vx;
      s.tw += 0.03;
      if (s.y > h + 4) { s.y = -4; s.x = Math.random() * w; }
      if (s.x < -4) s.x = w + 4;
      if (s.x > w + 4) s.x = -4;
      const alpha = 0.35 + Math.sin(s.tw) * 0.3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 95%, 72%, ${alpha})`;
      ctx.shadowColor = `hsla(${s.hue}, 95%, 65%, 0.9)`;
      ctx.shadowBlur = 6 * dpr;
      ctx.fill();
      ctx.shadowBlur = 0;
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

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Compatibility table ---------- */
function renderCompat() {
  const body = document.getElementById("compat-body");
  if (!body) return;
  const lang = I18n.lang();
  body.innerHTML = COMPAT_DATA.map(
    (row) => `
    <tr data-status="${row.status}" data-game="${row.game.toLowerCase()}">
      <td class="compat-game">${row.game}</td>
      <td><span class="tag status-${row.status}">${I18n.t("status." + row.status)}</span></td>
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
        : `<div class="shot-placeholder"><div class="shot-placeholder__art"></div></div>`;
      return `<figure class="gallery-item">${inner}<figcaption class="gallery-item__label">${item.label}</figcaption></figure>`;
    })
    .join("");
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyBrand();
  initParticles();
  initNav();
  initReveal();
  initCompat();
  renderGallery();
});
