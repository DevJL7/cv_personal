import { hasFinePointer, initOnce, lerp, prefersReducedMotion } from './dom';

function initDevCursor(): void {
  if (!hasFinePointer() || prefersReducedMotion()) return;

  const dot = document.querySelector<HTMLElement>('[data-cursor-dot]');
  const ring = document.querySelector<HTMLElement>('[data-cursor-ring]');
  if (!dot || !ring) return;

  document.body.classList.add('dev-cursor-active');

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener(
    'mousemove',
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    { passive: true },
  );

  const animate = (): void => {
    dotX = lerp(dotX, mouseX, 0.55);
    dotY = lerp(dotY, mouseY, 0.55);
    ringX = lerp(ringX, mouseX, 0.18);
    ringY = lerp(ringY, mouseY, 0.18);

    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  document.body.addEventListener('mouseover', (event) => {
    const target = event.target as Element;
    const interactive = target.closest(
      'a, button, input, textarea, [role="button"], .chip, .dev-card, .terminal',
    );
    document.body.classList.toggle('dev-cursor-hover', Boolean(interactive));
  });
}

function bindCardInteraction(
  selector: string,
  initKey: string,
  onMove: (el: HTMLElement, event: MouseEvent) => void,
  onLeave: (el: HTMLElement) => void,
): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    if (el.dataset[initKey] === 'true') return;
    el.dataset[initKey] = 'true';

    el.addEventListener('mousemove', (event) => onMove(el, event));
    el.addEventListener('mouseleave', () => onLeave(el));
  });
}

function initSpotlight(): void {
  if (!hasFinePointer()) return;

  bindCardInteraction(
    '[data-spotlight]',
    'spotlightInit',
    (el, event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--spot-x', `${x}%`);
      el.style.setProperty('--spot-y', `${y}%`);
    },
    (el) => {
      el.style.setProperty('--spot-x', '50%');
      el.style.setProperty('--spot-y', '50%');
    },
  );
}

function initTilt(): void {
  if (!hasFinePointer() || prefersReducedMotion()) return;

  bindCardInteraction(
    '[data-tilt]',
    'tiltInit',
    (el, event) => {
      const max = Number(el.dataset.tiltMax || 6);
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--tilt-x', `${-y * max}deg`);
      el.style.setProperty('--tilt-y', `${x * max}deg`);
    },
    (el) => {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    },
  );
}

function initMagnetic(): void {
  if (!hasFinePointer() || prefersReducedMotion()) return;

  bindCardInteraction(
    '[data-magnetic]',
    'magneticInit',
    (el, event) => {
      const strength = Number(el.dataset.magneticStrength || 0.35);
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    (el) => {
      el.style.transform = '';
    },
  );
}

function initTypewriter(): void {
  const el = document.querySelector<HTMLElement>('[data-typewriter]');
  if (!el || el.dataset.typewriterInit === 'true') return;
  el.dataset.typewriterInit = 'true';

  const phrases = JSON.parse(el.dataset.phrases ?? '[]') as string[];
  if (!phrases.length) return;

  if (prefersReducedMotion()) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = (): void => {
    const current = phrases[phraseIndex] ?? '';
    const speed = deleting ? 28 : 55;

    if (!deleting) {
      charIndex += 1;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        window.setTimeout(tick, 2200);
        return;
      }
    } else {
      charIndex -= 1;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    window.setTimeout(tick, speed);
  };

  window.setTimeout(tick, 600);
}

function initSkillChips(): void {
  const section = document.querySelector('#skills');
  if (!section || section.dataset.skillChipsInit === 'true') return;
  section.dataset.skillChipsInit = 'true';

  const preview = document.querySelector<HTMLElement>('[data-skill-preview]');
  const codeEl = preview?.querySelector<HTMLElement>('[data-skill-preview-code]');
  if (!preview || !codeEl) return;

  const defaultMessage = '// hover a skill para ver código';

  section.addEventListener('mouseover', (event) => {
    const chip = (event.target as Element).closest<HTMLElement>('[data-skill-code]');
    if (!chip) return;
    codeEl.textContent = chip.dataset.skillCode ?? '';
    preview.classList.add('is-active');
  });

  section.addEventListener('focusin', (event) => {
    const chip = (event.target as Element).closest<HTMLElement>('[data-skill-code]');
    if (!chip) return;
    codeEl.textContent = chip.dataset.skillCode ?? '';
    preview.classList.add('is-active');
  });

  section.addEventListener('mouseleave', () => {
    preview.classList.remove('is-active');
    codeEl.textContent = defaultMessage;
  });
}

export function initDevInteractions(): void {
  initOnce('dev-interactions', () => {
    initDevCursor();
    initSpotlight();
    initTilt();
    initMagnetic();
    initTypewriter();
    initSkillChips();
  });
}
