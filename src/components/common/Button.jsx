/** Print-style button: ink slides up on hover. variant: 'outline' | 'ink' | 'wa' */
export default function Button({ as: Tag = 'a', variant = 'outline', className = '', children, ...rest }) {
  const v = variant === 'ink' ? 'btn-ink' : variant === 'wa' ? 'btn-wa' : '';
  return (
    <Tag className={`btn ${v} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
