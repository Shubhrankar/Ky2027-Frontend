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

// DJ Turntable/Vinyl (static)
export function DJIcon({ color }: { color: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Outer ring */}
        <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="3" fill="none" />
        {/* Vinyl grooves */}
        <circle cx="24" cy="24" r="14" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
        {/* Center label */}
        <circle cx="24" cy="24" r="6" fill={color} />
        <circle cx="24" cy="24" r="2" fill="#0a0a15" />
        {/* Tonearm */}
        <g>
          <line
            x1="40"
            y1="8"
            x2="28"
            y2="20"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="8" r="3" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}

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

// Icon renderer component
export function HighlightIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "mic":
      return <MicIcon color={color} />;
    case "dj":
      return <DJIcon color={color} />;
    case "star":
      return <StarIcon color={color} />;
    case "bolt":
      return <BoltIcon color={color} />;
    default:
      return null;
  }
}
