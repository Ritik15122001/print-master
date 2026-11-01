import { TICKER_ITEMS } from '../../data/navigation';

/** Infinite yellow ticker — list rendered twice for a seamless -50% loop. */
export default function ServicesTicker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].flatMap((pass) => TICKER_ITEMS.map((t) => <span key={`${pass}-${t}`}>{t}</span>))}
      </div>
    </div>
  );
}
