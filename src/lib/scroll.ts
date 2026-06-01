import { initOnce, onScroll, prefersReducedMotion } from './dom';

/** Curva suave tipo Material — aceleración y frenado equilibrados */
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;
}

let activeScrollFrame: number | null = null;
let scrollTargetHash: string | null = null;

function getScrollMarginTop(element: Element): number {
  const margin = parseFloat(getComputedStyle(element).scrollMarginTop);
  return Number.isFinite(margin) ? margin : 112;
}

function resolveScrollTop(element: Element, offsetOverride?: number): number {
  if (offsetOverride !== undefined) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY - offsetOverride;
  }
  const rect = element.getBoundingClientRect();
  return rect.top + window.scrollY - getScrollMarginTop(element);
}

function getScrollDuration(distance: number): number {
  const abs = Math.abs(distance);
  if (abs < 300) return 520;
  if (abs < 900) return 520 + (abs - 300) * 0.12;
  return Math.min(820, 592 + abs * 0.08);
}

function setActiveNavLink(hash: string | null): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
  links.forEach((link) => {
    const isActive = hash !== null && link.getAttribute('data-nav') === hash;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

export function smoothScrollTo(
  target: Element,
  offsetOverride?: number,
  hash?: string,
): void {
  if (activeScrollFrame !== null) {
    cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  const reduced = prefersReducedMotion();
  const start = window.scrollY;
  const end = resolveScrollTop(target, offsetOverride);
  const distance = end - start;
  const targetHash = hash ?? (target.id ? `#${target.id}` : null);

  if (reduced || Math.abs(distance) < 2) {
    window.scrollTo({ top: end, behavior: reduced ? 'auto' : 'smooth' });
    scrollTargetHash = null;
    document.documentElement.classList.remove('is-smooth-scrolling');
    if (targetHash) setActiveNavLink(targetHash);
    return;
  }

  scrollTargetHash = targetHash;
  if (targetHash) setActiveNavLink(targetHash);
  document.documentElement.classList.add('is-smooth-scrolling');

  const duration = getScrollDuration(distance);
  let startTime: number | null = null;

  function finish(): void {
    activeScrollFrame = null;
    scrollTargetHash = null;
    document.documentElement.classList.remove('is-smooth-scrolling');
    window.scrollTo(0, end);
  }

  function step(timestamp: number): void {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutQuart(progress));

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(step);
    } else {
      finish();
    }
  }

  activeScrollFrame = requestAnimationFrame(step);
}

function initAnchorScroll(): void {
  document.addEventListener('click', (event) => {
    const anchor = (event.target as Element).closest<HTMLAnchorElement>(
      'a[href^="#"]',
    );
    if (!anchor) return;

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    smoothScrollTo(target, undefined, hash);
    history.pushState(null, '', hash);
  });
}

function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;

  onScroll(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollHeight > 0 ? Math.min(window.scrollY / scrollHeight, 1) : 0;
    bar.style.setProperty('--scroll-progress', String(progress));
  });
}

function initHeaderScroll(): void {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScrolled = header.classList.contains('is-scrolled');

  onScroll(() => {
    const scrolled = window.scrollY > 24;
    if (scrolled === lastScrolled) return;
    lastScrolled = scrolled;
    header.classList.toggle('is-scrolled', scrolled);
  });
}

function initBackToTop(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-back-to-top]');
  if (!button) return;

  onScroll(() => {
    const visible = window.scrollY > 480;
    button.classList.toggle('is-visible', visible);
    button.setAttribute('aria-hidden', visible ? 'false' : 'true');
    button.tabIndex = visible ? 0 : -1;
  });

  button.addEventListener('click', () => {
    const hero = document.querySelector('#hero') ?? document.body;
    smoothScrollTo(hero, 0);
  });
}

export function initScrollReveals(): void {
  const reduced = prefersReducedMotion();
  const elements = document.querySelectorAll('.reveal-on-scroll');

  if (reduced) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.revealDelay || 0);

        window.setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);

        observer.unobserve(el);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
  );

  elements.forEach((el) => {
    if (!el.classList.contains('is-visible')) observer.observe(el);
  });
}

function initNavSpy(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
  const sections = Array.from(links)
    .map((link) => {
      const id = link.getAttribute('data-nav');
      return id ? document.querySelector<HTMLElement>(id) : null;
    })
    .filter(Boolean) as HTMLElement[];

  if (!sections.length) return;

  onScroll(() => {
    if (scrollTargetHash) {
      setActiveNavLink(scrollTargetHash);
      return;
    }

    const probe = window.scrollY + window.innerHeight * 0.32;
    let current: string | null = `#${sections[0]!.id}`;

    for (const section of sections) {
      if (section.offsetTop <= probe) {
        current = `#${section.id}`;
      }
    }

    setActiveNavLink(current);
  });
}

function initTimelineProgress(): void {
  const section = document.querySelector<HTMLElement>('#experience');
  const line = document.querySelector<HTMLElement>('[data-timeline-progress]');
  if (!section || !line) return;

  if (prefersReducedMotion()) {
    line.style.setProperty('--timeline-progress', '1');
    return;
  }

  onScroll(() => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = section.offsetHeight;
    const viewportMid = window.scrollY + window.innerHeight * 0.55;
    const raw = (viewportMid - sectionTop) / sectionHeight;
    const progress = Math.min(Math.max(raw, 0), 1);
    line.style.setProperty('--timeline-progress', String(progress));
  });
}

export function initScrollExperience(): void {
  initOnce('scroll-experience', () => {
    initAnchorScroll();
    initScrollProgress();
    initHeaderScroll();
    initBackToTop();
    initScrollReveals();
    initNavSpy();
    initTimelineProgress();
  });
}
