import { forwardRef } from 'react';
import { NAV_LINKS } from '../../data/navigation';

/** Primary menu list — inline on desktop, full-screen overlay ≤1100px. */
const Navigation = forwardRef(function Navigation({ open, active, onNavigate }, firstLinkRef) {
  return (
    <ul className={`menu ${open ? 'open' : ''}`} id="menu">
      {NAV_LINKS.map((l, i) => (
        <li key={l.id}>
          <a
            ref={i === 0 ? firstLinkRef : undefined}
            href={`#${l.id}`}
            data-n={l.n}
            className={active === l.id ? 'active' : undefined}
            aria-current={active === l.id ? 'true' : undefined}
            onClick={onNavigate}
          >
            {l.label}
          </a>
        </li>
      ))}
      <li>
        <a href="#contact" className="btn btn-quote" onClick={onNavigate}>Get a Quote</a>
      </li>
    </ul>
  );
});

export default Navigation;
