"use client";

import { memo } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Cultural Access Icon - Ticket/Pass with classical dance motif
 */
export const CulturalAccessIcon = memo(function CulturalAccessIcon({
  className = "",
  size = 48,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ticket shape */}
      <path
        d="M8 18h48a2 2 0 012 2v6a4 4 0 000 8v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a4 4 0 000-8v-6a2 2 0 012-2z"
        stroke="url(#access-grad)"
        strokeWidth="2.5"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Perforated line */}
      <path
        d="M44 18v24"
        stroke="url(#access-grad)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      {/* Classical dancer silhouette */}
      <g transform="translate(16, 22)">
        {/* Head */}
        <circle
          cx="10"
          cy="2"
          r="3"
          stroke="url(#access-grad)"
          strokeWidth="1.5"
          fill="rgba(255,215,0,0.2)"
        />
        {/* Body */}
        <path
          d="M10 5v8M6 10l4 3 4-3M7 13l3 7M13 13l-3 7"
          stroke="url(#access-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Raised arm */}
        <path
          d="M10 8l-6-3M10 8l6-3"
          stroke="url(#access-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      {/* Star/VIP indicator */}
      <path
        d="M50 30l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z"
        stroke="url(#access-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.3)"
      />
      <defs>
        <linearGradient id="access-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});
