/** Claves y valores compartidos — mantener sincronizado con el script inline del tema en Layout.astro */
export const STORAGE_KEYS = {
  theme: 'cv-theme',
} as const;

export const THEME_TRANSITION_MS = 450;

export const MEDIA_QUERIES = {
  reducedMotion: '(prefers-reduced-motion: reduce)',
  finePointer: '(hover: hover) and (pointer: fine)',
} as const;

export type Theme = 'dark' | 'light';

export const THEMES: readonly Theme[] = ['dark', 'light'];
