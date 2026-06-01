import { STORAGE_KEYS, THEME_TRANSITION_MS, type Theme } from './constants';

export function getTheme(): Theme {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.add('theme-transition');
  root.classList.remove('dark', 'light');
  root.classList.add(theme);
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  window.setTimeout(
    () => root.classList.remove('theme-transition'),
    THEME_TRANSITION_MS,
  );
}

export function toggleTheme(): void {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

export function readStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  return stored === 'light' || stored === 'dark' ? stored : null;
}
