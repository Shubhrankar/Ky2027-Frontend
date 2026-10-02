"use client";

import { COLORS } from "@/components/pages/complete-profile/constants/palette";
import { AlertTriangle, RefreshCw, Search } from "lucide-react";

interface CollegeErrorStateProps {
  message: string;
  onRetry: () => void;
  onSearchAgain: () => void;
}

export function CollegeErrorState({
  message,
  onRetry,
  onSearchAgain,
}: CollegeErrorStateProps) {
  return (
    <div className="space-y-8">
      {/* Error Header */}
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{
            background: `linear-gradient(135deg, ${COLORS.ERROR}20 0%, ${COLORS.ERROR}10 100%)`,
            border: `2px solid ${COLORS.ERROR}40`,
          }}
        >
          <AlertTriangle className="h-10 w-10" style={{ color: COLORS.ERROR }} />
        </div>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-2"
          style={{ color: COLORS.CREAM }}
        >
          Failed to Update College
        </h2>
        <p style={{ color: `${COLORS.CREAM}60` }} className="max-w-md mx-auto">
          {message}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${COLORS.GOLD} 0%, ${COLORS.GOLD_DARK} 100%)`,
            color: COLORS.BG_DEEP,
            boxShadow: `0 8px 24px ${COLORS.GOLD}40`,
          }}
        >
          <RefreshCw className="h-5 w-5" />
          Try Again
        </button>
        <button
          onClick={onSearchAgain}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-[1.02]"
          style={{
            background: COLORS.BG_ROYAL,
            border: `1px solid ${COLORS.GOLD}30`,
            color: COLORS.CREAM,
          }}
        >
          <Search className="h-5 w-5" />
          Search Different College
        </button>
      </div>
    </div>
  );
}
