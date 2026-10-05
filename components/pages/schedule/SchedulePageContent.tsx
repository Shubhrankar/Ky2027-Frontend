"use client";

import { JAZZ_COLORS } from "@/components/pages/home/constants/palette";
import { LightNavbar } from "@/components/navbar/Navbar";
import { ScheduleHero, SchedulePlaceholder } from ".";

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE CONTENT
// Mirrors the Contact/About page structure: fixed navbar + full-height
// royal-jazz gradient backdrop, with content stacked above.
// ═══════════════════════════════════════════════════════════════════
export function SchedulePageContent() {
  return (
    <>
      {/* Fixed navbar - always visible (matches events/passes/about/contact internal pages) */}
      <div className="fixed inset-x-0 top-0 z-[200]">
        <LightNavbar position="relative" topOffset={18} theme="main" />
      </div>

      <main
        className="relative min-h-screen overflow-hidden pt-20 sm:pt-24"
        style={{
          background: `linear-gradient(180deg, 
            ${JAZZ_COLORS.BG_DEEP} 0%, 
            ${JAZZ_COLORS.BG_ROYAL} 12%,
            ${JAZZ_COLORS.BG_WINE} 35%,
            ${JAZZ_COLORS.BG_ROYAL} 60%,
            ${JAZZ_COLORS.BG_WINE} 80%,
            ${JAZZ_COLORS.BG_DEEP} 100%
          )`,
        }}
      >
        {/* Content sits above the background layer */}
        <div className="relative z-10">
          <ScheduleHero />
          <SchedulePlaceholder />
        </div>
      </main>
    </>
  );
}
