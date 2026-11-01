import { useEffect, useRef, useState } from 'react';

// One shared observer for every reveal element.
let observer;
const callbacks = new WeakMap();
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          callbacks.get(en.target)?.();
          observer.unobserve(en.target);
          callbacks.delete(en.target);
        }
      }),
      { threshold: 0.12 },
    );
  }
  return observer;
}

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const io = getObserver();
    callbacks.set(el, () => setShown(true));
    io.observe(el);
    return () => { io.unobserve(el); callbacks.delete(el); };
  }, []);
  return [ref, shown ? 'rv in' : 'rv'];
}

export default function RevealOnScroll({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, rv] = useReveal();
  return (
    <Tag ref={ref} className={`${rv} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
