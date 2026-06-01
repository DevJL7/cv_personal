import { MEDIA_QUERIES } from './constants';

const initializedModules = new Set<string>();
const scrollCallbacks = new Set<() => void>();
let scrollCoordinatorStarted = false;

/** Evita registrar listeners duplicados en recargas parciales. */
export function initOnce(key: string, fn: () => void): void {
  if (initializedModules.has(key)) return;
  initializedModules.add(key);
  fn();
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia(MEDIA_QUERIES.reducedMotion).matches;
}

export function hasFinePointer(): boolean {
  return window.matchMedia(MEDIA_QUERIES.finePointer).matches;
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/** Un solo listener de scroll compartido vía requestAnimationFrame. */
export function onScroll(callback: () => void): void {
  scrollCallbacks.add(callback);
  startScrollCoordinator();
}

function startScrollCoordinator(): void {
  if (scrollCoordinatorStarted) return;
  scrollCoordinatorStarted = true;

  let ticking = false;

  const run = (): void => {
    scrollCallbacks.forEach((cb) => cb());
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(run);
        ticking = true;
      }
    },
    { passive: true },
  );

  run();
}

/** Delegación de eventos — un listener para muchos elementos. */
export function delegate<T extends HTMLElement>(
  root: ParentNode,
  selector: string,
  event: keyof HTMLElementEventMap,
  handler: (target: T, event: Event) => void,
): void {
  root.addEventListener(event, (e) => {
    const target = (e.target as Element).closest<T>(selector);
    if (target && root.contains(target)) handler(target, e);
  });
}
