import { useCallback, useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';
import MobileMenuButton from './MobileMenu';
import { useActiveSection } from '../../hooks/useActiveSection';
import { NAV_LINKS } from '../../data/navigation';
import logoUrl from '../../assets/images/logo.png';

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    // wait a frame so the overlay is no longer visibility:hidden
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => firstLinkRef.current?.focus()));
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); burgerRef.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 1100) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <nav className="wrap nav" aria-label="Primary">
        {/* LOGO: src/assets/images/logo.png — replace the file to update it */}
        <a href="#home" className="brand" aria-label="Print Master home" onClick={close}>
          <img src={logoUrl} alt="" width={512} height={460} className="h-[38px] w-auto" />
          <span>Print Master<small>DESIGN · PRINT · DIGITAL</small></span>
        </a>
        <MobileMenuButton ref={burgerRef} open={open} onToggle={() => setOpen((o) => !o)} />
        <Navigation ref={firstLinkRef} open={open} active={active} onNavigate={close} />
      </nav>
    </header>
  );
}
