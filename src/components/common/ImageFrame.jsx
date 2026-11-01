import { useState } from 'react';

/**
 * Dotted "proof" placeholder that shows its label until the image loads.
 * If the image fails, it is removed and the labelled placeholder remains.
 */
export default function ImageFrame({ src, alt, label, className = '', lazy = true, priority = false, ...imgProps }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`ph ${className}`} data-label={label}>
      {!failed && src && (
        <img
          src={src}
          alt={alt}
          loading={lazy && !priority ? 'lazy' : 'eager'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          onError={() => setFailed(true)}
          {...imgProps}
        />
      )}
    </div>
  );
}
