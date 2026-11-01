import { FILTERS } from '../../data/portfolio';

export default function PortfolioFilters({ value, onChange }) {
  return (
    <div className="filters flex flex-wrap gap-1.5" role="group" aria-label="Filter portfolio">
      {FILTERS.map((f) => (
        <button key={f.key} type="button" aria-pressed={value === f.key} onClick={() => onChange(f.key)}>
          {f.label}
        </button>
      ))}
    </div>
  );
}
