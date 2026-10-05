"use client";

// Star/Sparkle for Cultural Events (static)
export function StarIcon({ color }: { color: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id={`starGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        {/* Main star */}
        <path
          d="M24 2 L28 18 L44 18 L31 28 L36 44 L24 34 L12 44 L17 28 L4 18 L20 18 Z"
          fill={`url(#starGrad-${color})`}
        />
      </svg>
    </div>
  );
}
