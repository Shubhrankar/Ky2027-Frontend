"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { JAZZ_COLORS } from "@/components/pages/home/constants/palette";

interface DesktopDJProps {
  ref?: React.Ref<HTMLDivElement>;
}

// ═══════════════════════════════════════════════════════════════════
// DESKTOP DJ — Desktop only, scroll-revealed via GSAP (ref passed through)
// The parent passes djRef via ref prop for GSAP scroll animation.
// ═══════════════════════════════════════════════════════════════════
export const DesktopDJ = memo(function DesktopDJ({ ref }: DesktopDJProps) {
  return (
    <div
      ref={ref}
      className="hidden sm:block absolute -bottom-[10%] -right-[19%] w-[70vw] max-w-[1300px] pointer-events-none"
      style={{
        zIndex: 20,
        opacity: 0,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 70%, ${JAZZ_COLORS.HOT_PINK}50 0%, ${JAZZ_COLORS.ROYAL_PURPLE}30 40%, transparent 70%)`,
          filter: "blur(80px)",
          transform: "scale(1.5)",
        }}
      />
      <Image
        src={IMAGES.festivalVibes.dj}
        alt="DJ"
        width={1200}
        height={1400}
        className="relative w-full h-auto"
        style={{
          filter: `drop-shadow(0 0 60px ${JAZZ_COLORS.HOT_PINK}70) drop-shadow(0 0 120px ${JAZZ_COLORS.GOLD}40)`,
        }}
      />
    </div>
  );
});
