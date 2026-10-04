"use client";

import { memo } from "react";
import { JAZZ_COLORS } from "@/components/pages/home/constants/palette";

// ═══════════════════════════════════════════════════════════════════
// SCROLLING TEXT BACKGROUND
// Subtle infinite marquee text for ambient visual interest
// ═══════════════════════════════════════════════════════════════════

const SCROLLING_PHRASES = [
  "THE ULTIMATE FEST EXPERIENCE",
  "KASHI YATRA 2027",
  "CULTURE × MUSIC × MEMORIES",
  "WHERE LEGENDS ARE MADE",
  "VARANASI VIBES",
  "FEEL THE ENERGY",
  "THE ULTIMATE FEST EXPERIENCE",
  "KASHI YATRA 2027",
  "CULTURE × MUSIC × MEMORIES",
  "WHERE LEGENDS ARE MADE",
];

// Duplicate phrases for seamless loop
const ROW_CONTENT = [...SCROLLING_PHRASES, ...SCROLLING_PHRASES];

interface ScrollingRowProps {
  phrases: string[];
  direction: "left" | "right";
  duration: number;
  top: string;
  opacity: number;
}

const ScrollingRow = memo(function ScrollingRow({
  phrases,
  direction,
  duration,
  top,
  opacity,
}: ScrollingRowProps) {
  return (
    <div
      className="pointer-events-none absolute left-0 w-full overflow-hidden whitespace-nowrap"
      style={{ top }}
    >
      <div
        className={`inline-flex gap-8 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {/* First set */}
        {phrases.map((phrase, i) => (
          <span
            key={`a-${i}`}
            className="text-4xl font-black tracking-wider uppercase select-none sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              color: JAZZ_COLORS.ROYAL_PURPLE,
              opacity,
              WebkitTextStroke: `1px ${JAZZ_COLORS.GOLD}20`,
              textShadow: `0 0 40px ${JAZZ_COLORS.ROYAL_PURPLE}40`,
            }}
          >
            {phrase}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {phrases.map((phrase, i) => (
          <span
            key={`b-${i}`}
            className="text-4xl font-black tracking-wider uppercase select-none sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              color: JAZZ_COLORS.ROYAL_PURPLE,
              opacity,
              WebkitTextStroke: `1px ${JAZZ_COLORS.GOLD}20`,
              textShadow: `0 0 40px ${JAZZ_COLORS.ROYAL_PURPLE}40`,
            }}
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
});

export const ScrollingTextBG = memo(function ScrollingTextBG() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        // Mask to fade edges
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* Row 1 */}
      <ScrollingRow phrases={ROW_CONTENT} direction="left" duration={200} top="2%" opacity={0.12} />

      {/* Row 2 */}
      <ScrollingRow
        phrases={[...ROW_CONTENT].reverse()}
        direction="right"
        duration={220}
        top="14%"
        opacity={0.1}
      />

      {/* Row 3 */}
      <ScrollingRow
        phrases={ROW_CONTENT}
        direction="left"
        duration={190}
        top="26%"
        opacity={0.11}
      />

      {/* Row 4 */}
      <ScrollingRow
        phrases={[...ROW_CONTENT].reverse()}
        direction="right"
        duration={210}
        top="38%"
        opacity={0.09}
      />

      {/* Row 5 */}
      <ScrollingRow
        phrases={ROW_CONTENT}
        direction="left"
        duration={195}
        top="50%"
        opacity={0.12}
      />

      {/* Row 6 */}
      <ScrollingRow
        phrases={[...ROW_CONTENT].reverse()}
        direction="right"
        duration={205}
        top="62%"
        opacity={0.1}
      />

      {/* Row 7 */}
      <ScrollingRow
        phrases={ROW_CONTENT}
        direction="left"
        duration={215}
        top="74%"
        opacity={0.11}
      />

      {/* Row 8 */}
      <ScrollingRow
        phrases={[...ROW_CONTENT].reverse()}
        direction="right"
        duration={200}
        top="86%"
        opacity={0.09}
      />
    </div>
  );
});
