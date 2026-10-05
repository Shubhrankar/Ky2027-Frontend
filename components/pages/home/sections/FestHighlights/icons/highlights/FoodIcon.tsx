"use client";

import { memo } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Food/Thali Icon - Banarasi cuisine
 */
export const FoodIcon = memo(function FoodIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Thali plate */}
      <ellipse
        cx="32"
        cy="36"
        rx="26"
        ry="12"
        stroke="url(#food-grad)"
        strokeWidth="2.5"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Inner ring */}
      <ellipse
        cx="32"
        cy="36"
        rx="20"
        ry="8"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Katori 1 - left */}
      <ellipse
        cx="20"
        cy="34"
        rx="6"
        ry="3"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="rgba(255,165,0,0.2)"
      />
      {/* Katori 2 - right */}
      <ellipse
        cx="44"
        cy="34"
        rx="6"
        ry="3"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="rgba(255,165,0,0.2)"
      />
      {/* Center - rice/roti */}
      <ellipse
        cx="32"
        cy="36"
        rx="7"
        ry="4"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.15)"
      />
      {/* Steam lines */}
      <path
        d="M28 26c0-3 2-5 2-8M32 24c0-3 2-5 2-8M36 26c0-3 2-5 2-8"
        stroke="url(#food-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Decorative dots on plate edge */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <circle
          key={angle}
          cx={32 + 23 * Math.cos((angle * Math.PI) / 180)}
          cy={36 + 10 * Math.sin((angle * Math.PI) / 180)}
          r="1.5"
          fill="url(#food-grad)"
          opacity="0.5"
        />
      ))}
      <defs>
        <linearGradient id="food-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});
