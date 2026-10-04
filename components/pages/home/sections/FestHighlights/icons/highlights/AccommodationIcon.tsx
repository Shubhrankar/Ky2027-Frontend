"use client";

import { memo } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Accommodation Icon - Traditional building/haveli
 */
export const AccommodationIcon = memo(function AccommodationIcon({
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
      {/* Main building */}
      <path
        d="M12 54V28l20-16 20 16v26"
        stroke="url(#accom-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,215,0,0.08)"
      />
      {/* Roof dome */}
      <path
        d="M24 28c0-6 8-10 8-10s8 4 8 10"
        stroke="url(#accom-grad)"
        strokeWidth="2"
        fill="none"
      />
      {/* Kalash on top */}
      <circle
        cx="32"
        cy="14"
        r="3"
        stroke="url(#accom-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.2)"
      />
      <path d="M32 11V8" stroke="url(#accom-grad)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Door */}
      <path
        d="M26 54V42a6 6 0 0112 0v12"
        stroke="url(#accom-grad)"
        strokeWidth="2"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Windows left */}
      <rect
        x="14"
        y="34"
        width="8"
        height="10"
        rx="4"
        stroke="url(#accom-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Windows right */}
      <rect
        x="42"
        y="34"
        width="8"
        height="10"
        rx="4"
        stroke="url(#accom-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Base/steps */}
      <path d="M8 54h48" stroke="url(#accom-grad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Decorative arches */}
      <path
        d="M16 28c0-4 4-6 4-6M44 28c0-4-4-6-4-6"
        stroke="url(#accom-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="accom-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});
