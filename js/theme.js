function applyTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-theme-set]');
  if (!button) return;

  applyTheme(button.dataset.themeSet);
});