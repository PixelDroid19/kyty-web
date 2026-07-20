/* ============================================================
   PARTICLES — monochrome starfield canvas
   ============================================================ */

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
