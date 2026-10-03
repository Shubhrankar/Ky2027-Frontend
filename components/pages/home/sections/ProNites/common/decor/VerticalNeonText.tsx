"use client";

import { memo } from "react";
import { CONCERT_COLORS } from "../../constants";

export const VerticalNeonText = memo(function VerticalNeonText() {
  return (
    <div className="hidden lg:block absolute right-4 xl:right-8 top-0 bottom-0 pointer-events-none" style={{ zIndex: 15 }}>
      {/* Neon border line */}
      <div
        className="absolute right-0 top-[15%] bottom-[20%] w-1"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${CONCERT_COLORS.NEON_GOLD} 15%, ${CONCERT_COLORS.NEON_PINK} 40%, ${CONCERT_COLORS.NEON_PURPLE} 60%, ${CONCERT_COLORS.NEON_GOLD} 85%, transparent 100%)`,
          boxShadow: `0 0 20px ${CONCERT_COLORS.NEON_GOLD}, 0 0 40px ${CONCERT_COLORS.NEON_PINK}80`,
          borderRadius: "2px",
          animation: "neonBorderPulse 3s ease-in-out infinite",
        }}
      />
      
      {/* Outer glow */}
      <div
        className="absolute right-[-4px] top-[15%] bottom-[20%] w-2"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${CONCERT_COLORS.NEON_GOLD}50 15%, ${CONCERT_COLORS.NEON_PINK}50 40%, ${CONCERT_COLORS.NEON_PURPLE}50 60%, ${CONCERT_COLORS.NEON_GOLD}50 85%, transparent 100%)`,
          filter: "blur(8px)",
          borderRadius: "4px",
          animation: "neonBorderPulse 3s ease-in-out infinite 0.5s",
        }}
      />

      {/* Floating Vertical Text - "PRO" */}
      <div
        className="absolute right-6 top-[22%]"
        style={{ 
          writingMode: "vertical-rl", 
          textOrientation: "mixed",
          animation: "floatTextUp 4s ease-in-out infinite",
        }}
      >
        <span
          className="text-3xl xl:text-4xl font-black tracking-[0.25em]"
          style={{
            background: `linear-gradient(180deg, ${CONCERT_COLORS.NEON_GOLD}, ${CONCERT_COLORS.NEON_PINK}, ${CONCERT_COLORS.NEON_PURPLE})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: `drop-shadow(0 0 20px ${CONCERT_COLORS.NEON_GOLD}80) drop-shadow(0 0 40px ${CONCERT_COLORS.NEON_PINK}50)`,
          }}
        >
          PRO
        </span>
      </div>

      {/* Floating Vertical Text - "NITES" */}
      <div
        className="absolute right-6 top-[45%]"
        style={{ 
          writingMode: "vertical-rl", 
          textOrientation: "mixed",
          animation: "floatTextDown 4s ease-in-out infinite 0.5s",
        }}
      >
        <span
          className="text-3xl xl:text-4xl font-black tracking-[0.25em]"
          style={{
            background: `linear-gradient(180deg, ${CONCERT_COLORS.NEON_PINK}, ${CONCERT_COLORS.NEON_PURPLE}, ${CONCERT_COLORS.NEON_CYAN})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: `drop-shadow(0 0 20px ${CONCERT_COLORS.NEON_PINK}80) drop-shadow(0 0 40px ${CONCERT_COLORS.NEON_PURPLE}50)`,
          }}
        >
          NITES
        </span>
      </div>

      {/* Pulsing light nodes */}
      {[20, 35, 50, 65, 80].map((pos, i) => (
        <div
          key={`node-${i}`}
          className="absolute right-[-3px] w-2.5 h-2.5 rounded-full"
          style={{
            top: `${pos}%`,
            background: [CONCERT_COLORS.NEON_GOLD, CONCERT_COLORS.NEON_PINK, CONCERT_COLORS.NEON_PURPLE, CONCERT_COLORS.NEON_PINK, CONCERT_COLORS.NEON_GOLD][i],
            boxShadow: `0 0 12px ${[CONCERT_COLORS.NEON_GOLD, CONCERT_COLORS.NEON_PINK, CONCERT_COLORS.NEON_PURPLE, CONCERT_COLORS.NEON_PINK, CONCERT_COLORS.NEON_GOLD][i]}, 0 0 24px ${[CONCERT_COLORS.NEON_GOLD, CONCERT_COLORS.NEON_PINK, CONCERT_COLORS.NEON_PURPLE, CONCERT_COLORS.NEON_PINK, CONCERT_COLORS.NEON_GOLD][i]}80`,
            animation: `pulseSlow 1.5s ease-in-out infinite ${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
});
