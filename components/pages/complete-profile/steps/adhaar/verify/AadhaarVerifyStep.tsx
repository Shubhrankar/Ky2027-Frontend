"use client";

import { useAadhaarVerify } from "@/lib/api/hooks";
import { Shield, CheckCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { COLORS } from "@/components/pages/complete-profile/constants/palette";
import { VerifyLoader } from "./loader/VerifyLoader";
import { VerifySuccessState } from "./success/VerifySuccessState";
import { VerifyErrorState } from "./error/VerifyErrorState";

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export function AadhaarVerifyStep({
  refetchProgress,
}: {
  refetchProgress: () => void;
}) {
  const { data: session } = useSession();
  const [hasStarted, setHasStarted] = useState(false);

  // Aadhaar verify hook
  const {
    verifyAadhaar,
    isLoading,
    isVerified,
    errorMessage,
    extractedData,
    reset: resetVerify,
  } = useAadhaarVerify(session?.user?.id);

  // ─── Handlers ──────────────────────────────────────────────────────

  const handleStartVerification = useCallback(async () => {
    setHasStarted(true);
    await verifyAadhaar();
  }, [verifyAadhaar]);

  const handleRetry = useCallback(() => {
    resetVerify();
    setHasStarted(false);
  }, [resetVerify]);

  const handleConfirm = useCallback(() => {
    refetchProgress();
  }, [refetchProgress]);

  // ─── Render: Loading ───────────────────────────────────────────────

  if (isLoading) {
    return <VerifyLoader />;
  }

  // ─── Render: Error ─────────────────────────────────────────────────

  if (errorMessage && hasStarted) {
    return (
      <VerifyErrorState
        message={errorMessage}
        onRetry={handleRetry}
      />
    );
  }

  // ─── Render: Success ───────────────────────────────────────────────

  if (isVerified && extractedData) {
    return (
      <VerifySuccessState
        data={extractedData.data}
        onConfirm={handleConfirm}
      />
    );
  }

  // ─── Render: Start Verification ────────────────────────────────────

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
          style={{
            background: `linear-gradient(135deg, ${COLORS.GOLD}20 0%, ${COLORS.GOLD_DARK}10 100%)`,
            border: `1px solid ${COLORS.GOLD}30`,
          }}
        >
          <Shield className="h-8 w-8" style={{ color: COLORS.GOLD }} />
        </div>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-2"
          style={{ color: COLORS.CREAM }}
        >
          Verify Your Aadhaar
        </h2>
        <p style={{ color: `${COLORS.CREAM}60` }}>
          We&apos;ll use AI to extract and verify your details from the uploaded image
        </p>
      </div>

      {/* Info Card */}
      <div
        className="rounded-2xl p-6 max-w-md mx-auto"
        style={{
          background: `linear-gradient(145deg, ${COLORS.BG_DEEP}80 0%, ${COLORS.BG_ROYAL}80 100%)`,
          border: `1px solid ${COLORS.GOLD}20`,
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-5 w-5" style={{ color: COLORS.SUCCESS }} />
          <span className="font-medium" style={{ color: COLORS.CREAM }}>
            Aadhaar image uploaded
          </span>
        </div>
        <p className="text-sm" style={{ color: `${COLORS.CREAM}60` }}>
          Your Aadhaar image has been securely uploaded. Click the button below to start the AI-powered verification process.
        </p>
      </div>

      {/* What happens next */}
      <div
        className="flex items-start gap-3 p-4 rounded-xl max-w-md mx-auto"
        style={{
          background: `${COLORS.GOLD}08`,
          border: `1px solid ${COLORS.GOLD}20`,
        }}
      >
        <Shield
          className="h-5 w-5 shrink-0 mt-0.5"
          style={{ color: COLORS.GOLD }}
        />
        <div>
          <p
            className="text-sm font-medium mb-1"
            style={{ color: COLORS.GOLD }}
          >
            What happens next?
          </p>
          <ul className="text-xs space-y-1" style={{ color: `${COLORS.CREAM}50` }}>
            <li>• AI extracts your name, DOB, and gender</li>
            <li>• Only last 4 digits of Aadhaar are stored</li>
            <li>• Original image is deleted after verification</li>
          </ul>
        </div>
      </div>

      {/* Start Verification Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={handleStartVerification}
          className="group relative w-full max-w-sm py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: `linear-gradient(135deg, ${COLORS.GOLD} 0%, ${COLORS.GOLD_DARK} 100%)`,
            color: COLORS.BG_DEEP,
            boxShadow: `0 8px 24px ${COLORS.GOLD}40, inset 0 1px 0 ${COLORS.GOLD_LIGHT}50`,
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${COLORS.GOLD_LIGHT}30 45%, ${COLORS.GOLD_LIGHT}40 50%, ${COLORS.GOLD_LIGHT}30 55%, transparent 60%)`,
            }}
          />
          <span className="relative flex items-center justify-center gap-2">
            <Shield className="h-5 w-5" />
            Start Verification
          </span>
        </button>
      </div>
    </div>
  );
}
