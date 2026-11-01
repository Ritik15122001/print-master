import { forwardRef } from 'react';

/** Hamburger toggle that morphs into a close icon (visible ≤1100px). */
const MobileMenuButton = forwardRef(function MobileMenuButton({ open, onToggle }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className="burger"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="menu"
      onClick={onToggle}
    >
      <span /><span /><span />
    </button>
  );
});

export default MobileMenuButton;
