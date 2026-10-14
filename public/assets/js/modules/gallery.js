/* ============================================================
   GALLERY — render screenshot grid from config
   ============================================================ */

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
