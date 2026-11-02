import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SectionTop from '../common/SectionTop';
import RevealOnScroll from '../common/RevealOnScroll';
import PortfolioFilters from '../portfolio/PortfolioFilters';
import PortfolioControls from '../portfolio/PortfolioControls';
import PortfolioCard from '../portfolio/PortfolioCard';
import PortfolioLightbox from '../portfolio/PortfolioLightbox';
import { PORTFOLIO } from '../../data/portfolio';
import { prefersReducedMotion } from '../../utils/scroll';

export default function PortfolioSection({ filter, onFilterChange }) {
  const stripRef = useRef(null);
  const cardRefs = useRef([]);
  const lastFocus = useRef(null);
  const drag = useRef({ down: false, moved: false, sx: 0, sl: 0 });
  const [dragging, setDragging] = useState(false);
  const [current, setCurrent] = useState(1);
  const [lightbox, setLightbox] = useState(null); // index within visible list

  // Cards stay mounted (hidden with .hide) so the original nth-child sizing rhythm is preserved.
  const visible = useMemo(
    () => PORTFOLIO.map((p, i) => ({ ...p, i })).filter((p) => filter === 'all' || p.cat === filter),
    [filter],
  );

  const updateCount = useCallback(() => {
    const strip = stripRef.current;
    if (!strip || !visible.length) return;
    const x = strip.scrollLeft;
    let n = 0;
    visible.forEach((p, idx) => {
      const el = cardRefs.current[p.i];
      if (el && el.offsetLeft - strip.offsetLeft <= x + 10) n = idx;
    });
    setCurrent(n + 1);
  }, [visible]);

  // Reset scroll + counter whenever the filter changes.
  useEffect(() => {
    const strip = stripRef.current;
    if (strip) strip.scrollTo({ left: 0 });
    setCurrent(1);
    updateCount();
  }, [filter, updateCount]);

  const step = () => (cardRefs.current[visible[0]?.i]?.offsetWidth || 300) + 20;
  const scrollByStep = (dir) =>
    stripRef.current?.scrollBy({ left: dir * step(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });

  // Mouse drag-to-scroll (touch uses native scrolling).
  useEffect(() => {
    const onMove = (e) => {
      const d = drag.current;
      if (!d.down) return;
      const dx = e.clientX - d.sx;
      if (Math.abs(dx) > 5 && !d.moved) { d.moved = true; setDragging(true); }
      stripRef.current.scrollLeft = d.sl - dx;
    };
    const onUp = () => {
      const d = drag.current;
      if (!d.down) return;
      d.down = false;
      setTimeout(() => setDragging(false), 0);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => { window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); };
  }, []);

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { down: true, moved: false, sx: e.clientX, sl: stripRef.current.scrollLeft };
  };

  const onStripKey = (e) => {
    if (e.target !== stripRef.current) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByStep(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep(-1); }
  };

  const openCard = (visIdx, el) => {
    if (drag.current.moved) { drag.current.moved = false; return; }
    lastFocus.current = el;
    setLightbox(visIdx);
  };
  const closeLightbox = useCallback(() => {
    setLightbox(null);
    lastFocus.current?.focus();
  }, []);
  const navLightbox = useCallback(
    (dir) => setLightbox((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  return (
    <section id="portfolio" aria-labelledby="pf-h" className="pt-0">
      <div className="wrap">
        <SectionTop
          label="Selected creative work"
          headingId="pf-h"
          heading={<>Good design makes a <span className="it alt">lasting</span> impression.</>}
          text="Explore selected branding, print, digital, and creative projects from our portfolio. Drag, scroll or use the arrows."
        />
        <RevealOnScroll className="mb-7 flex flex-wrap items-center justify-between gap-5 border-b border-rule pb-[18px]">
          <PortfolioFilters value={filter} onChange={onFilterChange} />
          <PortfolioControls
            current={Math.min(current, visible.length)}
            total={visible.length}
            onPrev={() => scrollByStep(-1)}
            onNext={() => scrollByStep(1)}
          />
        </RevealOnScroll>
      </div>
      {/* PORTFOLIO REPLACEMENT POINTS: edit src/data/portfolio.js */}
      <div className="wrap">
        <div
          ref={stripRef}
          className={`strip ${dragging ? 'drag' : ''}`}
          tabIndex={0}
          role="region"
          aria-label="Portfolio items"
          onScroll={updateCount}
          onPointerDown={onPointerDown}
          onKeyDown={onStripKey}
        >
          {PORTFOLIO.map((p, i) => {
            const visIdx = visible.findIndex((v) => v.i === i);
            return (
              <PortfolioCard
                key={p.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                item={p}
                index={i}
                hidden={visIdx === -1}
                onOpen={(e) => openCard(visIdx, e.currentTarget)}
              />
            );
          })}
        </div>
        {!visible.length && <p className="mono text-muted">No work in this category yet.</p>}
      </div>
      {lightbox !== null && visible.length > 0 && (
        <PortfolioLightbox items={visible} index={lightbox} onClose={closeLightbox} onNavigate={navLightbox} />
      )}
    </section>
  );
}
