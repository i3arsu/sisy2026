// Nav scroll effect
const nav = document.getElementById('topbar') || document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 12) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
if (nav) {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// Reveal on scroll
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      reveal.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

// Submission deadline countdown — May 28, 2026, 23:59 AoE (UTC-12)
const deadline = new Date('2026-05-29T11:59:00Z').getTime();
const pad = n => String(n).padStart(2, '0');
function tickCountdown() {
  const now = Date.now();
  const diff = deadline - now;
  const ids = [['cd-d','cd-h','cd-m','cd-s'], ['cd-d2','cd-h2','cd-m2','cd-s2']];
  if (diff <= 0) {
    ids.flat().forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '00'; });
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  ids.forEach(([di, hi, mi, si]) => {
    const setIf = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setIf(di, pad(d));
    setIf(hi, pad(h));
    setIf(mi, pad(m));
    setIf(si, pad(s));
  });
}
if (document.getElementById('cd-d') || document.getElementById('cd-d2')) {
  tickCountdown();
  setInterval(tickCountdown, 1000);
}

document.querySelectorAll('.section, .topic, .keynote, .t-item, .stat, .org').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  reveal.observe(el);
});
