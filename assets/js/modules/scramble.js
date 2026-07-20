/* ============================================================
   SCRAMBLE + REVEAL — text decode effect on scroll-reveal
   ============================================================ */

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
