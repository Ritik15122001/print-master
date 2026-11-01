export default function ColorBar({ className = '', style }) {
  return (
    <span className={`cbar ${className}`} style={style} aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => <b key={i} />)}
    </span>
  );
}
