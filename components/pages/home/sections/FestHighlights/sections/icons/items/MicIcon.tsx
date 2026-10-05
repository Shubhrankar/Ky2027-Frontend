"use client";

// Microphone - Sleek concert mic (static)
export function MicIcon({ color }: { color: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id={`micGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        {/* Mic body */}
        <rect x="17" y="4" width="14" height="24" rx="7" fill={`url(#micGrad-${color})`} />
        {/* Mic stand arc */}
        <path
          d="M12 24 C12 34 24 38 24 38 C24 38 36 34 36 24"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Mic stand */}
        <line
          x1="24"
          y1="38"
          x2="24"
          y2="44"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="44"
          x2="30"
          y2="44"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Static sound waves */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-60">
        <svg width="16" height="24" viewBox="0 0 16 24">
          <path
            d="M2 8 Q8 12 2 16"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M6 4 Q14 12 6 20"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-60">
        <svg width="16" height="24" viewBox="0 0 16 24">
          <path
            d="M14 8 Q8 12 14 16"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M10 4 Q2 12 10 20"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}
