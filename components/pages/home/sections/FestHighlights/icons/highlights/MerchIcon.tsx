"use client";

import { memo } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Hoodie/Merch Icon - Premium festival merchandise
 */
export const MerchIcon = memo(function MerchIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hoodie body */}
      <path
        d="M16 24v28a2 2 0 002 2h28a2 2 0 002-2V24"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Hood */}
      <path
        d="M16 24c0-8 6-14 16-14s16 6 16 14"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Hood opening */}
      <ellipse
        cx="32"
        cy="22"
        rx="8"
        ry="6"
        stroke="url(#merch-grad)"
        strokeWidth="2"
        fill="rgba(255,215,0,0.05)"
      />
      {/* Sleeves */}
      <path
        d="M16 24L8 32v8l8-4"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,215,0,0.1)"
      />
      <path
        d="M48 24l8 8v8l-8-4"
        stroke="url(#merch-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,215,0,0.1)"
      />
      {/* Pocket */}
      <path
        d="M24 40h16v8H24z"
        stroke="url(#merch-grad)"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.08)"
        rx="1"
      />
      {/* KY logo on chest */}
      <text
        x="32"
        y="35"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="url(#merch-grad)"
        fontFamily="serif"
      >
        KY
      </text>
      <defs>
        <linearGradient id="merch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
});
