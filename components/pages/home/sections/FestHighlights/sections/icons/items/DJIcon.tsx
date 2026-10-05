"use client";

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
