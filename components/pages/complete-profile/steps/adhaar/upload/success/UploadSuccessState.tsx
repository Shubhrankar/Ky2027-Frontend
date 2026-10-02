"use client";

import { COLORS } from "@/components/pages/complete-profile/constants/palette";
import { CheckCircle, ArrowRight, Shield, RefreshCw } from "lucide-react";

interface UploadSuccessStateProps {
  preview?: string | null;
  onProceed: () => void;
  onReupload: () => void;
}

export function UploadSuccessState({
  preview,
  onProceed,
  onReupload,
}: UploadSuccessStateProps) {
  return (
    <div className="space-y-8">
      {/* Success Header */}
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{
            background: `linear-gradient(135deg, ${COLORS.SUCCESS}20 0%, ${COLORS.SUCCESS}10 100%)`,
            border: `2px solid ${COLORS.SUCCESS}40`,
          }}
        >
          <CheckCircle className="h-10 w-10" style={{ color: COLORS.SUCCESS }} />
        </div>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-2"
          style={{ color: COLORS.CREAM }}
        >
          Aadhaar Uploaded Successfully
        </h2>
        <p style={{ color: `${COLORS.CREAM}60` }}>
          Your Aadhaar image has been uploaded securely. Click below to proceed to verification.
        </p>
      </div>

      {/* Preview Card */}
      {preview && (
        <div
          className="rounded-2xl overflow-hidden max-w-md mx-auto"
          style={{
            background: `linear-gradient(145deg, ${COLORS.BG_DEEP}80 0%, ${COLORS.BG_ROYAL}80 100%)`,
            border: `1px solid ${COLORS.SUCCESS}30`,
          }}
        >
          <div className="relative aspect-[16/10] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Aadhaar Preview"
              className="max-w-full max-h-full object-contain p-4 opacity-80"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: `${COLORS.BG_DEEP}40` }}
            >
              <div
                className="px-4 py-2 rounded-full flex items-center gap-2"
                style={{
                  background: `${COLORS.SUCCESS}20`,
                  border: `1px solid ${COLORS.SUCCESS}40`,
                }}
              >
                <CheckCircle className="h-5 w-5" style={{ color: COLORS.SUCCESS }} />
                <span className="text-sm font-medium" style={{ color: COLORS.SUCCESS }}>
                  Uploaded
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Note */}
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
          <p className="text-sm" style={{ color: `${COLORS.CREAM}70` }}>
            In the next step, we&apos;ll use AI to extract and verify your details from the uploaded image.
          </p>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onProceed}
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
            Proceed to Verification
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* Upload Different */}
      <div className="text-center">
        <button
          onClick={onReupload}
          className="inline-flex items-center gap-2 text-sm transition-colors hover:underline"
          style={{ color: `${COLORS.CREAM}50` }}
        >
          <RefreshCw className="h-4 w-4" />
          Upload a different image
        </button>
      </div>
    </div>
  );
}
