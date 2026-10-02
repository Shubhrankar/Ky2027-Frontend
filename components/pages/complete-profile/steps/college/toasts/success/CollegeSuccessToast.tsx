"use client";

import { GraduationCap } from "lucide-react";

export function CollegeSuccessToast() {
  return (
    <div
      className="flex items-start gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl w-[calc(100vw-32px)] sm:w-auto sm:min-w-[320px] sm:max-w-[420px] mx-auto"
      style={{
        background: `linear-gradient(135deg, #0a1a12 0%, #0a2d18 50%, #0a1a12 100%)`,
        border: `1px solid #22c55e`,
        boxShadow: `
          0 0 20px rgba(34, 197, 94, 0.2),
          0 8px 30px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(34,197,94,0.1)
        `,
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #22c55e 0%, #16a34a 100%)`,
          boxShadow: `0 0 15px rgba(34,197,94,0.4)`,
        }}
      >
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-0.5">
        <p
          className="text-xs sm:text-sm font-semibold tracking-wide"
          style={{
            color: "#4ade80",
            textShadow: "0 0 10px rgba(74,222,128,0.3)",
          }}
        >
          College Updated!
        </p>
        <p
          className="text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-relaxed"
          style={{ color: "rgba(220,255,220,0.8)" }}
        >
          🎓 Your college details have been saved successfully.
        </p>
      </div>

      {/* Decorative checkmark */}
      <div className="hidden xs:flex flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 items-center justify-center opacity-70">
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4ade80"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}
