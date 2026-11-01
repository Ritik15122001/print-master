import { ChevronLeft, ChevronRight } from '../common/Icons';
import { pad } from '../../utils/scroll';

export default function PortfolioControls({ current, total, onPrev, onNext }) {
  return (
    <div className="pf-ctrl flex items-center gap-2.5 max-sm:hidden">
      <button type="button" aria-label="Scroll portfolio left" onClick={onPrev} disabled={!total}><ChevronLeft /></button>
      <span className="count mono min-w-16 text-center" aria-live="polite">
        {total ? `${pad(current)} / ${pad(total)}` : '00 / 00'}
      </span>
      <button type="button" aria-label="Scroll portfolio right" onClick={onNext} disabled={!total}><ChevronRight /></button>
    </div>
  );
}
