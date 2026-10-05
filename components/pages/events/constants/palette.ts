// ═══════════════════════════════════════════════════════════════════
// EVENTS PAGE COLOR PALETTE
// ═══════════════════════════════════════════════════════════════════

// Re-export from home palette for consistency
export { COLORS, JAZZ_COLORS } from "@/components/pages/home/constants/palette";

// Event type colors
export const EVENT_TYPE_COLORS = {
  individual: {
    bg: "rgba(255,20,147,0.2)", // HOT_PINK
    text: "#ff1493",
  },
  duo: {
    bg: "rgba(0,191,255,0.2)", // ELECTRIC_BLUE
    text: "#00bfff",
  },
  team: {
    bg: "rgba(138,43,226,0.2)", // ROYAL_PURPLE
    text: "#e6e6fa", // LAVENDER
  },
} as const;

export type EventType = keyof typeof EVENT_TYPE_COLORS;
