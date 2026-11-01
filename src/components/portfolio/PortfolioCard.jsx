import { forwardRef } from 'react';
import ImageFrame from '../common/ImageFrame';
import { CATEGORIES } from '../../data/portfolio';
import { pad } from '../../utils/scroll';

const PortfolioCard = forwardRef(function PortfolioCard({ item, index, hidden, onOpen }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={`card ${hidden ? 'hide' : ''}`}
      aria-label={`View ${CATEGORIES[item.cat]} work`}
      onClick={onOpen}
    >
      <ImageFrame src={item.src} alt={item.alt} label={item.ph} draggable="false" />
      <span className="cap">
        <b>{CATEGORIES[item.cat]}</b>
        <span className="mono">{pad(index + 1)}</span>
      </span>
    </button>
  );
});

export default PortfolioCard;
