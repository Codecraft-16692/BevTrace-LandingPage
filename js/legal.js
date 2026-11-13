/* Idioma de las páginas legales: comparte la preferencia con la landing (misma clave). */
(() => {
  'use strict';
  const KEY = 'bevtrace-lang';
  const get = () => { try { const l = localStorage.getItem(KEY); return l === 'en' ? 'en' : 'es'; } catch (e) { return 'es'; } };
  const apply = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-option]').forEach((b) => b.classList.toggle('is-active', b.dataset.langOption === lang));
    const t = document.querySelector('title');
    if (t && t.dataset[lang]) t.textContent = t.dataset[lang];
    try { localStorage.setItem(KEY, lang); } catch (e) { /* sin storage */ }
  };
  document.querySelectorAll('[data-lang-option]').forEach((b) => b.addEventListener('click', () => apply(b.dataset.langOption)));
  apply(get());
})();
