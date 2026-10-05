/**
 * Gen-Z Concert Footer Constants
 * Dark concert vibe with harmonious Gold/Saffron/Coral text colors
 */

// ═══════════════════════════════════════════════════════════════════
// COLOR PALETTE - Harmonious warm tones (Analogous color scheme)
// ═══════════════════════════════════════════════════════════════════

export const FOOTER_COLORS = {
  // Harmonious warm accents (Gold → Orange → Coral)
  NEON_CYAN: "#FFD700", // Bright Gold (primary)
  NEON_PINK: "#FF9933", // Saffron Orange (secondary)
  NEON_PURPLE: "#FF6B6B", // Coral/Soft Red (tertiary)
  NEON_LIME: "#FFEC8B", // Light Gold/Cream (highlight)
  NEON_ORANGE: "#E07020", // Deep Saffron
  ELECTRIC_BLUE: "#FFC04D", // Warm Yellow
  HOT_MAGENTA: "#FF8C69", // Salmon/Light Coral

  // Backgrounds - Keep dark concert vibe
  BG_DEEP: "#030308",
  BG_DARK: "#050510",
  BG_PURPLE: "#0a0815",
  BG_CARD: "rgba(15, 10, 25, 0.6)",

  // Text
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_SECONDARY: "rgba(255, 255, 255, 0.7)",
  TEXT_MUTED: "rgba(255, 255, 255, 0.5)",
} as const;

// ═══════════════════════════════════════════════════════════════════
// GRADIENTS
// ═══════════════════════════════════════════════════════════════════

export const FOOTER_GRADIENTS = {
  // Main background - deep concert venue
  BG_MAIN: `linear-gradient(180deg, 
    #030308 0%,
    #050510 15%,
    #0a0815 35%,
    #0d0a1a 50%,
    #0a0815 65%,
    #050510 85%,
    #030308 100%
  )`,

  // Glassmorphism card background
  CARD_GLASS: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.05) 0%, 
    rgba(255, 255, 255, 0.02) 100%
  )`,

  // Rotating border gradient (for cards)
  BORDER_ROTATE: `conic-gradient(
    from 0deg,
    ${FOOTER_COLORS.NEON_CYAN},
    ${FOOTER_COLORS.NEON_PINK},
    ${FOOTER_COLORS.NEON_PURPLE},
    ${FOOTER_COLORS.NEON_LIME},
    ${FOOTER_COLORS.NEON_CYAN}
  )`,

  // Spotlight cone gradient
  SPOTLIGHT: `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 100%
  )`,

  // Glitch line gradient
  GLITCH_LINE: `linear-gradient(90deg, 
    transparent 0%, 
    ${FOOTER_COLORS.NEON_CYAN}40 20%, 
    ${FOOTER_COLORS.NEON_PINK}60 50%, 
    ${FOOTER_COLORS.NEON_CYAN}40 80%, 
    transparent 100%
  )`,
} as const;

// ═══════════════════════════════════════════════════════════════════
// FLOATING STICKERS DATA
// ═══════════════════════════════════════════════════════════════════

export const FLOATING_STICKERS = [
  { emoji: "🔥", label: "FIRE", color: FOOTER_COLORS.NEON_ORANGE },
  { emoji: "✨", label: "VIBES", color: FOOTER_COLORS.NEON_LIME },
  { emoji: "🎤", label: "LIVE", color: FOOTER_COLORS.NEON_PINK },
  { emoji: "🎵", label: "2027", color: FOOTER_COLORS.NEON_CYAN },
  { emoji: "💜", label: "EPIC", color: FOOTER_COLORS.NEON_PURPLE },
  { emoji: "⚡", label: "LIT", color: FOOTER_COLORS.ELECTRIC_BLUE },
] as const;

// ═══════════════════════════════════════════════════════════════════
// ANIMATION TIMINGS
// ═══════════════════════════════════════════════════════════════════

export const ANIMATION_CONFIG = {
  // Glitch effect
  GLITCH_DURATION: 0.1,
  GLITCH_INTERVAL: 3000,

  // Pulse rings
  PULSE_DURATION: 2,
  PULSE_DELAY: 0.5,

  // Floating stickers
  FLOAT_DURATION: 6,
  FLOAT_AMPLITUDE: 20,

  // Spotlight sweep
  SPOTLIGHT_DURATION: 8,

  // Border rotation
  BORDER_ROTATION_DURATION: 4,
} as const;
