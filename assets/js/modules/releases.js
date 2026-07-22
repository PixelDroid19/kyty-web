/* ============================================================
   RELEASES — latest Kyty version, changelog and downloads
   ============================================================ */

const Releases = (() => {
  const CACHE_KEY = "kyty-latest-release-v1";
  const CACHE_MAX_AGE_MS = 15 * 60 * 1000;
  let latest = null;

  function cachedRelease() {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (!cached || Date.now() - cached.savedAt > CACHE_MAX_AGE_MS) return null;
      return cached.release;
    } catch (_) {
      return null;
    }
  }

  function saveRelease(release) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), release }));
    } catch (_) {
      // Storage can be disabled; the live response is still usable.
    }
  }

  function assetFor(release, platform) {
    const marker = `-${platform}-`;
    return (release.assets || []).find((asset) => asset.name.toLowerCase().includes(marker));
  }

  function formatDate(value) {
    if (!value) return "—";
    const locale = I18n.lang() === "es" ? "es-CO" : "en-US";
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(value));
  }

  function appendLinkedText(parent, text) {
    const urlPattern = /https:\/\/[^\s)]+/g;
    let offset = 0;
    for (const match of text.matchAll(urlPattern)) {
      parent.append(document.createTextNode(text.slice(offset, match.index)));
      const link = document.createElement("a");
      link.href = match[0];
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = match[0];
      parent.append(link);
      offset = match.index + match[0].length;
    }
    parent.append(document.createTextNode(text.slice(offset)));
  }

  function renderNotes(container, body) {
    container.replaceChildren();
    const lines = (body || I18n.t("release.noNotes")).split(/\r?\n/);
    let list = null;

    lines.forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || /^##\s+What's Changed$/i.test(line) || /^\*\*Full Changelog\*\*:/i.test(line)) return;

      if (/^[-*]\s+/.test(line)) {
        if (!list) {
          list = document.createElement("ul");
          container.append(list);
        }
        const item = document.createElement("li");
        appendLinkedText(item, line.replace(/^[-*]\s+/, ""));
        list.append(item);
        return;
      }

      list = null;
      const paragraph = document.createElement("p");
      appendLinkedText(paragraph, line.replace(/^#{1,6}\s+/, ""));
      container.append(paragraph);
    });

    if (!container.childElementCount) {
      const paragraph = document.createElement("p");
      paragraph.textContent = I18n.t("release.noNotes");
      container.append(paragraph);
    }
  }

  function render(release) {
    if (!release) return;
    latest = release;

    const version = document.getElementById("release-version");
    const date = document.getElementById("release-date");
    const notes = document.getElementById("release-notes");
    const releaseLink = document.getElementById("release-link");
    const sourceLink = document.getElementById("release-source-link");

    version.textContent = release.tag_name || I18n.t("release.unknown");
    date.textContent = formatDate(release.published_at);
    renderNotes(notes, release.body);
    releaseLink.href = release.html_url || SITE_CONFIG.releasesUrl;
    sourceLink.href = `${SITE_CONFIG.repoUrl}/tree/${encodeURIComponent(release.tag_name)}`;

    ["windows", "linux", "macos"].forEach((platform) => {
      const link = document.querySelector(`[data-release-platform="${platform}"]`);
      const asset = assetFor(release, platform);
      link.hidden = !asset;
      if (asset) {
        link.href = asset.browser_download_url;
        link.querySelector("[data-asset-name]").textContent = asset.name;
      }
    });

    document.getElementById("release-loading").hidden = true;
    document.getElementById("release-fallback").hidden = true;
    document.getElementById("release-content").hidden = false;
  }

  function renderError() {
    const status = document.getElementById("release-loading");
    status.textContent = I18n.t("release.error");
    const fallback = document.getElementById("release-fallback");
    fallback.href = SITE_CONFIG.releasesUrl;
    fallback.hidden = false;
  }

  async function init() {
    const fallback = document.getElementById("release-fallback");
    fallback.href = SITE_CONFIG.releasesUrl;

    const cached = cachedRelease();
    if (cached) render(cached);

    try {
      const response = await fetch(SITE_CONFIG.releasesApiUrl, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!response.ok) throw new Error(`GitHub Releases API returned ${response.status}`);
      const release = await response.json();
      saveRelease(release);
      render(release);
    } catch (error) {
      console.warn("Unable to load the latest Kyty release:", error);
      if (!cached) renderError();
    }

    I18n.onChange(() => {
      if (latest) render(latest);
      else renderError();
    });
  }

  return { init };
})();

function initReleases() {
  Releases.init();
}
