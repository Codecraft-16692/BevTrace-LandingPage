(() => {
  'use strict';

  /* ───── i18n (ES/EN) ───── */
  const I18N = window.BEVTRACE_I18N || { es: {}, en: {} };
  const LANG_KEY = 'bevtrace-lang';

  function storedLang() {
    try { const l = localStorage.getItem(LANG_KEY); return l === 'en' || l === 'es' ? l : null; } catch (e) { return null; }
  }

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.es;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });
    if (dict['meta.title']) document.title = dict['meta.title'];
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict['meta.description']) meta.setAttribute('content', dict['meta.description']);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-option]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.langOption === lang);
    });
    updatePrices();
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* sin storage: no pasa nada */ }
  }

  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langOption));
  });

  /* ───── Planes: mensual / anual ───── */
  let billing = 'monthly';
  function updatePrices() {
    document.querySelectorAll('[data-price]').forEach((box) => {
      box.querySelector('[data-price-value]').textContent = box.dataset[billing];
    });
    document.querySelectorAll('[data-billed-note]').forEach((n) => { n.hidden = billing !== 'annual'; });
  }
  document.querySelectorAll('[data-billing]').forEach((btn) => {
    btn.addEventListener('click', () => {
      billing = btn.dataset.billing;
      document.querySelectorAll('[data-billing]').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      updatePrices();
    });
  });

  applyLanguage(storedLang() || 'es');

  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ───── Cursor personalizado ───── */
  if (hasFinePointer && document.querySelector('[data-cursor-dot]')) {
    document.body.classList.add('has-custom-cursor');
    const dot = document.querySelector('[data-cursor-dot]');
    const ring = document.querySelector('[data-cursor-ring]');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    (function raf() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll('[data-hover], a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('cursor-ring--active'));
      el.addEventListener('mouseleave', () => ring.classList.remove('cursor-ring--active'));
    });
  }

  /* ───── Header ───── */
  const header = document.querySelector('[data-site-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ───── Nav activa según la sección visible ───── */
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const sectionToLink = new Map();
  navLinks.forEach((link) => {
    const ids = [link.getAttribute('href').slice(1), ...(link.dataset.navAlso || '').split(' ').filter(Boolean)];
    ids.forEach((id) => sectionToLink.set(id, link));
  });
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const active = sectionToLink.get(entry.target.id);
      navLinks.forEach((l) => l.classList.toggle('site-header__link--active', l === active));
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sectionToLink.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  /* ───── Drawer móvil ───── */
  const drawer = document.querySelector('[data-drawer]');
  const backdrop = document.querySelector('[data-drawer-backdrop]');
  const toggle = document.querySelector('[data-drawer-toggle]');
  const setDrawer = (open) => {
    drawer.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
  };
  toggle?.addEventListener('click', () => setDrawer(true));
  document.querySelector('[data-drawer-close]')?.addEventListener('click', () => setDrawer(false));
  backdrop?.addEventListener('click', () => setDrawer(false));
  document.querySelectorAll('[data-drawer-link]').forEach((l) => l.addEventListener('click', () => setDrawer(false)));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });

  /* ───── Botones magnéticos y brillo de vidrio ───── */
  if (hasFinePointer) {
    document.querySelectorAll('[data-magnetic]').forEach((wrap) => {
      const max = parseFloat(wrap.dataset.magneticMax || '14');
      const child = wrap.firstElementChild;
      wrap.addEventListener('mousemove', (e) => {
        const r = wrap.getBoundingClientRect();
        const x = Math.max(-max, Math.min(max, (e.clientX - r.left - r.width / 2) * 0.28));
        const y = Math.max(-max, Math.min(max, (e.clientY - r.top - r.height / 2) * 0.28));
        child.style.transform = `translate(${x}px, ${y}px)`;
      });
      wrap.addEventListener('mouseleave', () => { child.style.transform = 'translate(0, 0)'; });
    });
  }
  document.querySelectorAll('.liquid-glass').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--glass-x', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--glass-y', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });

  /* ───── Reveal al hacer scroll ───── */
  const revealTargets = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ───── Parallax del hero ───── */
  const heroBg = document.querySelector('[data-parallax-bg]');
  const heroMark = document.querySelector('[data-parallax-mark]');
  if ((heroBg || heroMark) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      if (heroBg) heroBg.style.transform = `translateY(${y * 0.18}px)`;
      if (heroMark) heroMark.style.transform = `translateY(${y * 0.08}px) rotate(${y * 0.01}deg)`;
    }, { passive: true });
  }

  /* ───── Segmentos (pager) ───── */
  const pager = document.querySelector('[data-segments-pager]');
  if (pager) {
    const slides = Array.from(pager.querySelectorAll('[data-segments-slide]'));
    const cur = pager.querySelector('[data-segments-current]');
    pager.querySelector('[data-segments-total]').textContent = String(slides.length).padStart(2, '0');
    let index = 0, timer;
    const render = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
      cur.textContent = String(index + 1).padStart(2, '0');
    };
    const auto = () => { clearInterval(timer); timer = setInterval(() => render(index + 1), 7000); };
    pager.querySelector('[data-segments-next]').addEventListener('click', () => { render(index + 1); auto(); });
    pager.querySelector('[data-segments-prev]').addEventListener('click', () => { render(index - 1); auto(); });
    pager.addEventListener('mouseenter', () => clearInterval(timer));
    pager.addEventListener('mouseleave', auto);
    render(0); auto();
  }

  /* ───── Slots de video (YouTube o .mp4) ─────
     En el HTML, pon el link o ID de YouTube en data-video="..." del slot.
     Sin valor → muestra "Video próximamente". */
  function youtubeId(v) {
    const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    if (m) return m[1];
    return /^[\w-]{11}$/.test(v) ? v : null;
  }
  document.querySelectorAll('[data-video-slot]').forEach((slot) => {
    const src = (slot.dataset.video || '').trim();
    const btn = slot.querySelector('[data-video-play]');
    if (!src) return;
    slot.classList.add('has-video');
    // La portada pasa a ser la miniatura del propio video de YouTube
    const thumbId = youtubeId(src);
    if (thumbId) {
      slot.querySelector('.video-slot__cover')?.remove();
      const thumb = document.createElement('img');
      thumb.className = 'video-slot__cover';
      thumb.alt = '';
      thumb.src = `https://img.youtube.com/vi/${thumbId}/hqdefault.jpg`;
      slot.prepend(thumb);
    }
    btn.addEventListener('click', () => {
      const title = slot.dataset.videoTitle || 'Video';
      let el;
      if (/\.(mp4|webm)(\?|$)/i.test(src)) {
        el = document.createElement('video');
        el.className = 'video-slot__player';
        el.src = src; el.controls = true; el.autoplay = true; el.playsInline = true;
      } else {
        const id = youtubeId(src);
        if (!id) return;
        el = document.createElement('iframe');
        el.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        el.title = title;
        el.referrerPolicy = 'strict-origin-when-cross-origin';
        el.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        el.allowFullscreen = true;
      }
      slot.appendChild(el);
      btn.hidden = true;
    });
  });

  /* ───── Scroll suave con compensación del header ───── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = id === '#home' ? 0 : target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
