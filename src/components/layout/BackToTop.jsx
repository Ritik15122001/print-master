import { ArrowUp } from '../common/Icons';
import { prefersReducedMotion } from '../../utils/scroll';

export default function BackToTop({ show, tucked }) {
  return (
    <button
      type="button"
      className={`totop ${show ? 'show' : ''} ${tucked ? 'tuck' : ''}`}
      aria-label="Back to top"
      tabIndex={show && !tucked ? undefined : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
    >
      <ArrowUp />
    </button>
  );
}
