/* ============================================================
   COMPAT — compatibility table, search, filters
   ============================================================ */

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
