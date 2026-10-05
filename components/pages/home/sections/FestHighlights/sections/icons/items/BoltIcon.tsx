"use client";

// Lightning bolt for Epic Vibes (static)
export function BoltIcon({ color }: { color: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id={`boltGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
          <filter id="boltGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Lightning bolt */}
        <path
          d="M28 2 L12 22 L22 22 L18 46 L36 22 L26 22 L32 2 Z"
          fill={`url(#boltGrad-${color})`}
          filter="url(#boltGlow)"
        />
      </svg>
    </div>
  );
}
