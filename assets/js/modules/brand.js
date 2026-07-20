/* ============================================================
   BRAND — inject site name, repo links, year
   ============================================================ */

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
