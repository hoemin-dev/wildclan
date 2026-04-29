function initLangSwitch() {
  const langSwitch = document.querySelector('.lang-switch');
  const currentBtn = document.querySelector('.lang-current');
  const menu = document.querySelector('.lang-menu');

  if (!langSwitch || !currentBtn || !menu) return;

  currentBtn.addEventListener('click', () => {
    langSwitch.classList.toggle('is-open');
  });

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      const { pathname, search, hash } = window.location;

      let newPath;

      if (/^\/(ko|en|ja|zh)(\/|$)/.test(pathname)) {
        newPath = pathname.replace(/^\/(ko|en|ja|zh)/, `/${targetLang}`);
      } else if (pathname === "/" || pathname === "") {
        newPath = `/${targetLang}/`;
      } else {
        newPath = `/${targetLang}${pathname}`;
      }

      window.location.href = newPath + search + hash;
    });
  });

  const match = location.pathname.match(/^\/(ko|en|ja|zh)/);
  const currentLang = match ? match[1] : 'en';
  currentBtn.innerHTML = `<span class="lang-icon">🌐</span><span>${currentLang.toUpperCase()}</span><span>▾</span>`;
}