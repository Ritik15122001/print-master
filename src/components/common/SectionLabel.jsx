export default function SectionLabel({ children, className = '', style }) {
  return (
    <p className={`label mono ${className}`} style={style}>
      <i aria-hidden="true"><b /><b /><b /><b /></i>
      {children}
    </p>
  );
}
