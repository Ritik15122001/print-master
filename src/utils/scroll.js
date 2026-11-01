export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const pad = (n) => String(n).padStart(2, '0');

/** Scroll to a section id with the original 80px header offset. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const offset = id === 'home' ? 0 : 80;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
  return true;
}
