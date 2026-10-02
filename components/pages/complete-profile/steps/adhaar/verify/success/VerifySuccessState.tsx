"use client";

import {
  UserCheck,
  User,
  Calendar,
  Users,
  CreditCard,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { type AadhaarExtractedData } from "@/lib/api/hooks";
import { COLORS } from "@/components/pages/complete-profile/constants/palette";

interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div
      className="p-4 rounded-xl"
      style={{
        background: `linear-gradient(145deg, ${COLORS.BG_DEEP}60 0%, ${COLORS.BG_ROYAL}60 100%)`,
        border: `1px solid ${COLORS.GOLD}20`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="p-2 rounded-lg"
          style={{
            background: `${COLORS.GOLD}15`,
            border: `1px solid ${COLORS.GOLD}25`,
          }}
        >
          <Icon className="h-4 w-4" style={{ color: COLORS.GOLD }} />
        </div>
        <div>
          <p className="text-xs mb-0.5" style={{ color: `${COLORS.CREAM}50` }}>
            {label}
          </p>
          <p className="font-medium" style={{ color: COLORS.CREAM }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

interface VerifySuccessStateProps {
  data: AadhaarExtractedData;
  onConfirm: () => void;
}

export function VerifySuccessState({
  data,
  onConfirm,
}: VerifySuccessStateProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
          style={{
            background: `${COLORS.SUCCESS}20`,
            border: `1px solid ${COLORS.SUCCESS}30`,
          }}
        >
          <UserCheck className="h-8 w-8" style={{ color: COLORS.SUCCESS }} />
        </div>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-2"
          style={{ color: COLORS.CREAM }}
        >
          Aadhaar Verified Successfully
        </h2>
        <p style={{ color: `${COLORS.CREAM}60` }}>
          Your details have been extracted and verified
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard icon={User} label="Full Name" value={data.name} />
        <InfoCard
          icon={Calendar}
          label="Date of Birth"
          value={data.dateOfBirth}
        />
        <InfoCard icon={Users} label="Gender" value={data.gender} />
        <InfoCard
          icon={CreditCard}
          label="Aadhaar (Last 4)"
          value={`XXXX XXXX ${data.aadhaarLast4}`}
        />
      </div>

      <div
        className="flex items-center justify-center gap-3 p-4 rounded-xl"
        style={{
          background: `${COLORS.SUCCESS}10`,
          border: `1px solid ${COLORS.SUCCESS}25`,
        }}
      >
        <CheckCircle2 className="h-5 w-5" style={{ color: COLORS.SUCCESS }} />
        <p className="text-sm font-medium" style={{ color: COLORS.SUCCESS }}>
          Identity verified successfully
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onConfirm}
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
            Continue to Next Step
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      </div>
    </div>
  );
}
