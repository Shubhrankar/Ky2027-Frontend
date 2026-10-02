"use client";

import { COLORS } from "@/components/pages/complete-profile/constants/palette";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface VerifyErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function VerifyErrorState({
  message,
  onRetry,
}: VerifyErrorStateProps) {
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
          Verification Failed
        </h2>
        <p style={{ color: `${COLORS.CREAM}60` }} className="max-w-md mx-auto">
          {message}
        </p>
      </div>

      {/* Suggestions */}
      <div
        className="p-4 rounded-xl max-w-md mx-auto"
        style={{
          background: `${COLORS.GOLD}08`,
          border: `1px solid ${COLORS.GOLD}20`,
        }}
      >
        <p className="text-sm font-medium mb-2" style={{ color: COLORS.GOLD }}>
          Tips for better verification:
        </p>
        <ul className="text-xs space-y-1" style={{ color: `${COLORS.CREAM}50` }}>
          <li>• Ensure the image is clear and not blurry</li>
          <li>• All text on the Aadhaar should be readable</li>
          <li>• Avoid glare or shadows on the card</li>
          <li>• Make sure the full card is visible</li>
        </ul>
      </div>

      {/* Retry Button */}
      <div className="flex justify-center">
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${COLORS.GOLD} 0%, ${COLORS.GOLD_DARK} 100%)`,
            color: COLORS.BG_DEEP,
            boxShadow: `0 8px 24px ${COLORS.GOLD}40`,
          }}
        >
          <RefreshCw className="h-5 w-5" />
          Try Again
        </button>
      </div>
    </div>
  );
}
