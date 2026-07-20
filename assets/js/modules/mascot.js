/* ============================================================
   MASCOT — petting interaction, peeker edge visitor, eye tracking
   ============================================================ */

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

    // 1. Temporarily disable transitions so side repositioning happens instantly off-screen
    el.style.transition = "none";
    el.classList.remove("is-peek", "peeker--left", "peeker--right");

    // 2. Set new side class (positions element off-screen)
    el.classList.add(`peeker--${side}`);

    // 3. Force reflow to commit off-screen position with no transition
    void el.offsetWidth;

    // 4. Restore CSS transition and force reflow before triggering slide-in
    el.style.transition = "";
    void el.offsetWidth;

    // 5. Trigger smooth slide-in transition
    el.classList.add("is-peek");

    // 6. After a while, slide back out off-screen
    setTimeout(() => {
      el.classList.remove("is-peek");
      setTimeout(schedule, 900); // wait for exit transition before rescheduling
    }, 2600 + Math.random() * 1800);
  }

  schedule();
}

/* ---------- Peeker eye tracking ---------- */
function initPeekerEyes() {
  const eyes = document.getElementById("mascot-peeker-eyes");
  if (!eyes) return;
  document.addEventListener("mousemove", (e) => {
    const rect = eyes.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
    const dist = Math.min(Math.hypot(e.clientX - cx, e.clientY - cy) / 80, 4);
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist;
    eyes.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 0.15}deg)`;
  });
}
