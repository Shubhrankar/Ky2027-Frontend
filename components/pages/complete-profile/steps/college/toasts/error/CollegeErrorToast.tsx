"use client";

import { GraduationCap } from "lucide-react";

interface CollegeErrorToastProps {
  message?: string;
}

export function CollegeErrorToast({ message }: CollegeErrorToastProps) {
  return (
    <div
      className="flex items-start gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl w-[calc(100vw-32px)] sm:w-auto sm:min-w-[320px] sm:max-w-[420px] mx-auto"
      style={{
        background: `linear-gradient(135deg, #1a0a12 0%, #2d0a18 50%, #1a0a12 100%)`,
        border: `1px solid #ff4444`,
        boxShadow: `
          0 0 20px rgba(255, 68, 68, 0.2),
          0 8px 30px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(255,68,68,0.1)
        `,
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #ff4444 0%, #cc2222 100%)`,
          boxShadow: `0 0 15px rgba(255,68,68,0.4)`,
        }}
      >
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-0.5">
        <p
          className="text-xs sm:text-sm font-semibold tracking-wide"
          style={{
            color: "#ff6b6b",
            textShadow: "0 0 10px rgba(255,107,107,0.3)",
          }}
        >
          Update Failed
        </p>
        <p
          className="text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-relaxed line-clamp-2"
          style={{ color: "rgba(255,220,220,0.8)" }}
        >
          {message || "Could not update college. Please try again."}
        </p>
      </div>

      {/* Decorative X icon */}
      <div className="hidden xs:flex flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 items-center justify-center opacity-70">
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}
