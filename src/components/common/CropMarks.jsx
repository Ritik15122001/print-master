/** Wraps children with four printer's crop marks (two via ::before/::after, two via .cm). */
export default function CropMarks({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`crop ${className}`} {...rest}>
      <span className="cm" aria-hidden="true" />
      {children}
    </Tag>
  );
}
