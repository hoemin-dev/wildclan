async function loadHTML(targetId, filePath, callback) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const res = await fetch(filePath);

    if (!res.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }

    const html = await res.text();
    target.innerHTML = html;

    if (typeof callback === 'function') {
      callback();
    }
  } catch (error) {
    console.error(error);
  }
}

loadHTML('header', './/components/header.html', () => {
  if (typeof initLangSwitch === 'function') {
    initLangSwitch();
  }
});

loadHTML('footer', '/components/footer.html');