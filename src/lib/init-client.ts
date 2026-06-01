import { paletteCommands } from '../data/palette-commands';
import { initCommandPalette } from './command-palette';
import { initDevInteractions } from './dev-interactions';
import { initScrollExperience } from './scroll';
import { initTerminal } from './terminal';
import { toggleTheme } from './theme';
import { initOnce } from './dom';

/** Punto de entrada único para todo el JS del cliente. */
export function initClient(): void {
  initOnce('client-root', () => {
    initScrollExperience();
    initDevInteractions();
    initCommandPalette(paletteCommands);
    initTerminal();
    initThemeToggle();
  });
}

function initThemeToggle(): void {
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
}
