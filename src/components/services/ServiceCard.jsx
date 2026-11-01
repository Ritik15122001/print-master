import { useReveal } from '../common/RevealOnScroll';
import { ICON_PATHS, ICON_SHAPES } from '../../data/services';
import { pad } from '../../utils/scroll';

function ServiceIcon({ k, stroke }) {
  return (
    <svg viewBox="0 0 48 48" style={{ stroke }} aria-hidden="true">
      {(ICON_SHAPES[k] || []).map(({ t: Shape, ...a }, i) => <Shape key={`s${i}`} {...a} />)}
      {ICON_PATHS[k].map((d, i) => <path key={`p${i}`} d={d} />)}
    </svg>
  );
}

export default function ServiceCard({ service: s, index, onSeeWork, onQuote }) {
  const [ref, rv] = useReveal();
  const n = pad(index + 1);
  const [chipBg, iconStroke] = s.col;
  return (
    <article ref={ref} className={`swatch ${rv} ${s.cta ? 'cta' : ''}`} style={{ transitionDelay: `${(index % 5) * 60}ms` }}>
      <div className="chip" style={{ background: chipBg }}>
        {s.img && (
          <img
            className="chip-img"
            src={s.img}
            alt=""
            loading="lazy"
            onError={(e) => { e.currentTarget.remove(); }}
          />
        )}
        <span className="code">{s.code || `PM ${n}-C`}</span>
        <span className="chip-badge" style={{ background: chipBg }} aria-hidden="true">
          <ServiceIcon k={s.k} stroke={iconStroke} />
        </span>
      </div>
      <div className="body">
        <span className="pm">PRINT MASTER {n}</span>
        <h3>{s.name}</h3>
        <p>{s.d}</p>
        {s.go ? (
          <a href="#portfolio" onClick={() => onSeeWork(s.go)} aria-label={`See ${s.name} work`}>See work</a>
        ) : (
          <a href="#contact" onClick={() => onQuote(s.service || s.name)} aria-label={`Get a quote for ${s.service || s.name}`}>Get a quote</a>
        )}
      </div>
    </article>
  );
}
