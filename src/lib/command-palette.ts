import type { PaletteCommand } from '../types/content';
import { initOnce } from './dom';
import { smoothScrollTo } from './scroll';
import { toggleTheme } from './theme';

function createPaletteItem(
  cmd: PaletteCommand,
  isActive: boolean,
  onSelect: () => void,
): HTMLLIElement {
  const li = document.createElement('li');
  li.setAttribute('role', 'option');
  li.setAttribute('aria-selected', String(isActive));

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `palette-item${isActive ? ' is-active' : ''}`;

  const label = document.createElement('span');
  label.className = 'palette-item-label';
  label.textContent = cmd.label;
  btn.append(label);

  if (cmd.hint) {
    const kbd = document.createElement('kbd');
    kbd.className = 'palette-item-hint';
    kbd.textContent = cmd.hint;
    btn.append(kbd);
  }

  btn.addEventListener('click', onSelect);
  li.append(btn);
  return li;
}

function openExternalLink(cmd: PaletteCommand): void {
  if (!cmd.target) return;

  if (cmd.id === 'cv') {
    const anchor = document.createElement('a');
    anchor.href = cmd.target;
    anchor.download = 'Jackson-Londono-CV.pdf';
    anchor.rel = 'noopener';
    anchor.click();
    return;
  }

  if (cmd.target.startsWith('/')) {
    window.location.assign(cmd.target);
    return;
  }

  window.open(cmd.target, '_blank', 'noopener,noreferrer');
}

function focusTerminal(): void {
  const terminal = document.getElementById('terminal');
  const input = document.getElementById('terminal-input') as HTMLInputElement | null;
  if (!terminal || !input) return;

  smoothScrollTo(terminal, undefined, '#hero');
  window.setTimeout(() => input.focus(), 640);
}

export function initCommandPalette(commands: PaletteCommand[]): void {
  initOnce('command-palette', () => {
    const dialog = document.querySelector<HTMLDialogElement>('[data-command-palette]');
    const form = dialog?.querySelector<HTMLFormElement>('[data-palette-form]');
    const input = dialog?.querySelector<HTMLInputElement>('[data-palette-input]');
    const list = dialog?.querySelector<HTMLElement>('[data-palette-list]');
    const empty = dialog?.querySelector<HTMLElement>('[data-palette-empty]');

    if (!dialog || !form || !input || !list || !empty) return;

    let filtered = [...commands];
    let activeIndex = 0;

    function render(): void {
      list.replaceChildren();
      empty.hidden = filtered.length > 0;

      filtered.forEach((cmd, index) => {
        list.append(
          createPaletteItem(cmd, index === activeIndex, () => execute(cmd)),
        );
      });
    }

    function filter(query: string): void {
      const q = query.trim().toLowerCase();

      filtered = q
        ? commands.filter((cmd) => {
            const haystack =
              `${cmd.label} ${cmd.keywords ?? ''} ${cmd.hint ?? ''}`.toLowerCase();
            return haystack.includes(q);
          })
        : [...commands];

      activeIndex = 0;
      render();
    }

    function execute(cmd: PaletteCommand): void {
      close();

      switch (cmd.action) {
        case 'navigate':
          if (cmd.target) {
            const el = document.querySelector(cmd.target);
            if (el) smoothScrollTo(el, undefined, cmd.target);
          }
          break;
        case 'link':
          openExternalLink(cmd);
          break;
        case 'theme':
          toggleTheme();
          break;
        case 'terminal':
          focusTerminal();
          break;
      }
    }

    function open(): void {
      filter('');
      dialog.showModal();
      input.value = '';
      window.setTimeout(() => input.focus(), 50);
    }

    function close(): void {
      dialog.close();
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const cmd = filtered[activeIndex];
      if (cmd) execute(cmd);
    });

    input.addEventListener('input', () => filter(input.value));

    input.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        activeIndex = Math.min(activeIndex + 1, filtered.length - 1);
        render();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        render();
      }
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) close();
    });

    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (dialog.open) close();
        else open();
      }
    });

    document.querySelectorAll<HTMLElement>('[data-open-palette]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        open();
      });
    });
  });
}
