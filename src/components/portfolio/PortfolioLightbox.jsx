import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, CloseIcon } from '../common/Icons';
import { CATEGORIES, largeSrc } from '../../data/portfolio';
import { pad } from '../../utils/scroll';

/** Accessible image viewer: focus trap, Esc to close, ←/→ to navigate. */
export default function PortfolioLightbox({ items, index, onClose, onNavigate }) {
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const [failedId, setFailedId] = useState(null);
  const item = items[index];

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onNavigate(-1);
      else if (e.key === 'ArrowRight') onNavigate(1);
      else if (e.key === 'Tab') {
        const f = [...rootRef.current.querySelectorAll('button:not(:disabled)')];
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNavigate]);

  if (!item) return null;
  const single = items.length < 2;

  return createPortal(
    <div
      ref={rootRef}
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio viewer"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="x" aria-label="Close" onClick={onClose}><CloseIcon /></button>
      <button type="button" className="prev" aria-label="Previous" onClick={() => onNavigate(-1)} disabled={single}><ChevronLeft /></button>
      <figure>
        <div>
          {failedId === item.id ? (
            <div className="missing mono">Artwork to be added from the company profile.</div>
          ) : (
            <img key={item.id} src={largeSrc(item.src)} alt={item.alt} onError={() => setFailedId(item.id)} />
          )}
        </div>
        <figcaption>
          <span>{CATEGORIES[item.cat]}</span>
          <span className="mono text-muted" aria-live="polite">{pad(index + 1)} / {pad(items.length)}</span>
        </figcaption>
      </figure>
      <button type="button" className="next" aria-label="Next" onClick={() => onNavigate(1)} disabled={single}><ChevronRight /></button>
    </div>,
    document.body,
  );
}
