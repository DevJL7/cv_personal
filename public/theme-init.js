(() => {
  const key = 'cv-theme';
  const stored = localStorage.getItem(key);
  const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';

  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(theme);
})();
