import type { NavbarTheme, BadgeStyleConfig } from "../types";

// ═══════════════════════════════════════════════════════════════════
// BADGE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════

// Theme-specific badge positioning and sizing
export const BADGE_STYLES: Record<NavbarTheme, BadgeStyleConfig> = {
  main: {
    position: "left-[13%] top-[50%]",
    size: "h-[145%] sm:h-[155%]",
  },
  about: {
    position: "left-[16%] top-[52%]",
    size: "h-[116%] sm:h-[180%]",
  },
  sponsor: {
    position: "left-[16%] top-[52%]",
    size: "h-[116%] sm:h-[230%]",
  },
};
