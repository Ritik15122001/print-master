import { useEffect, useState } from 'react';

/** Returns window.scrollY (passive listener, rAF-throttled). */
export function useScrollPosition() {
  const [y, setY] = useState(() => (typeof window === 'undefined' ? 0 : window.scrollY));
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return y;
}
