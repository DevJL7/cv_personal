import type { TerminalCommand } from '../types/content';
import { initOnce } from './dom';

interface TerminalElements {
  terminal: HTMLElement;
  outputEl: HTMLElement;
  form: HTMLFormElement;
  input: HTMLInputElement;
  commands: Record<string, TerminalCommand>;
  welcomeLines: string[];
}

function getElements(): TerminalElements | null {
  const terminal = document.getElementById('terminal');
  const outputEl = document.getElementById('terminal-output');
  const form = document.getElementById('terminal-form') as HTMLFormElement | null;
  const input = document.getElementById('terminal-input') as HTMLInputElement | null;

  if (!terminal || !outputEl || !form || !input) return null;

  const commands = JSON.parse(
    terminal.dataset.commands ?? '{}',
  ) as Record<string, TerminalCommand>;

  const welcomeLines = JSON.parse(
    terminal.dataset.welcome ?? '[]',
  ) as string[];

  return { terminal, outputEl, form, input, commands, welcomeLines };
}

function createTerminalController({
  outputEl,
  form,
  input,
  commands,
  welcomeLines,
  terminal,
}: TerminalElements) {
  const history: string[] = [];
  let historyIndex = -1;

  function appendLine(text: string, className = 'terminal-line text-muted'): void {
    const line = document.createElement('p');
    line.className = className;
    line.textContent = text;
    outputEl.append(line);
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function appendCommandLine(cmd: string): void {
    appendLine(`$ ${cmd}`, 'terminal-line text-accent-emerald/90');
  }

  function renderOutput(result: string | string[]): void {
    const lines = Array.isArray(result) ? result : [result];
    lines.forEach((line) => {
      appendLine(line, line === '' ? 'terminal-line' : 'terminal-line text-muted');
    });
  }

  function showWelcome(): void {
    outputEl.replaceChildren();
    welcomeLines.forEach((line) =>
      appendLine(line, 'terminal-line text-muted-foreground'),
    );
  }

  function pushHistory(cmd: string): void {
    if (history.at(-1) !== cmd) history.push(cmd);
    historyIndex = history.length;
  }

  function runCommand(raw: string): void {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    appendCommandLine(cmd);
    pushHistory(cmd);

    if (cmd === 'clear') {
      showWelcome();
      return;
    }

    const entry = commands[cmd];
    if (entry) {
      renderOutput(entry.output);
      return;
    }

    appendLine(`command not found: ${cmd}`, 'terminal-line text-red-400/90');
    appendLine('Prueba: help', 'terminal-line text-muted-foreground');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    runCommand(input.value);
    input.value = '';
    historyIndex = history.length;
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!history.length) return;
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex] ?? '';
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!history.length) return;
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = historyIndex >= history.length ? '' : (history[historyIndex] ?? '');
    }
  });

  terminal.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('a, button[type="submit"]')) return;
    input.focus();
  });

  terminal.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && document.activeElement !== input) {
      event.preventDefault();
      input.focus();
    }
  });
}

export function initTerminal(): void {
  initOnce('terminal', () => {
    const elements = getElements();
    if (!elements) return;
    createTerminalController(elements);
  });
}
