import { IMAGES } from "@/lib/images";

// ═══════════════════════════════════════════════════════════════════
// NAVBAR THEME CONFIGURATION
// ═══════════════════════════════════════════════════════════════════

export type NavbarTheme = "main" | "about" | "sponsor";

// Theme-specific visual configurations
export const THEME_CONFIG = {
  main: {
    getBackground: () => IMAGES.navbar.main.background,
    getBadge: () => IMAGES.navbar.main.badge,
    badgeGlow: {
      outer:
        "radial-gradient(circle, rgba(255,210,90,0.55) 0%, rgba(255,160,50,0.3) 45%, rgba(255,120,30,0) 72%)",
      inner:
        "radial-gradient(circle, rgba(255,248,220,0.7) 0%, rgba(255,215,0,0.35) 50%, transparent 75%)",
    },
    linkStyle: {
      color: "#3a1505",
      activeColor: "#3a1505",
      activeBg:
        "linear-gradient(135deg, rgba(255,215,0,0.85) 0%, rgba(255,180,0,0.75) 30%, rgba(255,230,100,0.9) 50%, rgba(255,180,0,0.75) 70%, rgba(255,215,0,0.85) 100%)",
      inactiveBg:
        "linear-gradient(135deg, rgba(255,215,0,0.28) 0%, rgba(212,168,83,0.18) 50%, rgba(184,134,11,0.28) 100%)",
      activeBorder: "2px solid rgba(255,230,100,1)",
      inactiveBorder: "1px solid rgba(255,215,0,0.55)",
      activeShadow:
        "0 0 25px rgba(255,215,0,0.9), 0 0 50px rgba(255,180,0,0.7), 0 0 80px rgba(255,215,0,0.5), inset 0 0 20px rgba(255,255,200,0.5), 0 2px 8px rgba(0,0,0,0.3)",
      inactiveShadow: "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,245,200,0.35)",
      activeTextShadow:
        "0 0 8px rgba(255,215,0,0.8), 0 0 15px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.9)",
      inactiveTextShadow: "0 1px 1px rgba(255,245,215,0.7)",
    },
    hamburgerGradient: "linear-gradient(90deg, #8a5a1a, #d4a853)",
    mobileMenuBg:
      "radial-gradient(ellipse at 30% 20%, rgba(245,222,164,0.98) 0%, rgba(214,176,110,0.98) 45%, rgba(168,124,64,0.98) 100%)",
    mobileMenuBorder: "2px solid rgba(255,215,0,0.55)",
    mobileMenuShadow:
      "0 14px 34px rgba(0,0,0,0.55), inset 0 0 24px rgba(120,72,20,0.4), inset 0 0 2px rgba(255,240,200,0.6)",
  },
  about: {
    getBackground: () => IMAGES.navbar.about.background,
    getBadge: () => IMAGES.navbar.about.badge,
    badgeGlow: {
      outer:
        "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(99,102,241,0.3) 45%, rgba(79,70,229,0) 72%)",
      inner:
        "radial-gradient(circle, rgba(196,181,253,0.6) 0%, rgba(139,92,246,0.35) 50%, transparent 75%)",
    },
    linkStyle: {
      color: "#3a1505",
      activeColor: "#3a1505",
      activeBg:
        "linear-gradient(135deg, rgba(255,215,0,0.85) 0%, rgba(255,180,0,0.75) 30%, rgba(255,230,100,0.9) 50%, rgba(255,180,0,0.75) 70%, rgba(255,215,0,0.85) 100%)",
      inactiveBg:
        "linear-gradient(135deg, rgba(255,215,0,0.28) 0%, rgba(212,168,83,0.18) 50%, rgba(184,134,11,0.28) 100%)",
      activeBorder: "2px solid rgba(255,230,100,1)",
      inactiveBorder: "1px solid rgba(255,215,0,0.55)",
      activeShadow:
        "0 0 25px rgba(255,215,0,0.9), 0 0 50px rgba(255,180,0,0.7), 0 0 80px rgba(255,215,0,0.5), inset 0 0 20px rgba(255,255,200,0.5), 0 2px 8px rgba(0,0,0,0.3)",
      inactiveShadow: "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,245,200,0.35)",
      activeTextShadow:
        "0 0 8px rgba(255,215,0,0.8), 0 0 15px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.9)",
      inactiveTextShadow: "0 1px 1px rgba(255,245,215,0.7)",
    },
    hamburgerGradient: "linear-gradient(90deg, #8a5a1a, #d4a853)",
    mobileMenuBg:
      "radial-gradient(ellipse at 30% 20%, rgba(45,27,78,0.98) 0%, rgba(30,20,50,0.98) 45%, rgba(26,26,46,0.98) 100%)",
    mobileMenuBorder: "2px solid rgba(139,92,246,0.6)",
    mobileMenuShadow:
      "0 14px 34px rgba(0,0,0,0.7), inset 0 0 24px rgba(139,92,246,0.2), inset 0 0 2px rgba(196,181,253,0.3)",
  },
  sponsor: {
    getBackground: () => IMAGES.navbar.sponsor.background,
    getBadge: () => IMAGES.navbar.sponsor.badge,
    badgeGlow: {
      outer:
        "radial-gradient(circle, rgba(74,222,128,0.45) 0%, rgba(34,197,94,0.3) 45%, rgba(22,163,74,0) 72%)",
      inner:
        "radial-gradient(circle, rgba(187,247,208,0.6) 0%, rgba(74,222,128,0.35) 50%, transparent 75%)",
    },
    linkStyle: {
      color: "#1a3a1a",
      activeColor: "#052e05",
      activeBg:
        "linear-gradient(135deg, rgba(134,239,172,0.95) 0%, rgba(74,222,128,0.9) 50%, rgba(134,239,172,0.95) 100%)",
      inactiveBg: "rgba(74,222,128,0.2)",
      activeBorder: "2px solid rgba(187,247,208,1)",
      inactiveBorder: "1px solid rgba(74,222,128,0.4)",
      activeShadow:
        "0 0 20px rgba(74,222,128,0.8), 0 0 40px rgba(34,197,94,0.5), inset 0 0 10px rgba(255,255,255,0.3)",
      inactiveShadow: "0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
      activeTextShadow: "0 1px 2px rgba(0,0,0,0.15)",
      inactiveTextShadow: "0 1px 1px rgba(255,255,255,0.3)",
    },
    hamburgerGradient: "linear-gradient(90deg, #4ade80, #86efac)",
    mobileMenuBg:
      "radial-gradient(ellipse at 30% 20%, rgba(20,50,30,0.98) 0%, rgba(15,40,20,0.98) 45%, rgba(10,30,15,0.98) 100%)",
    mobileMenuBorder: "2px solid rgba(74,222,128,0.6)",
    mobileMenuShadow:
      "0 14px 34px rgba(0,0,0,0.6), inset 0 0 24px rgba(22,163,74,0.3), inset 0 0 2px rgba(187,247,208,0.3)",
  },
} as const;

// Theme-specific aspect ratios based on actual image dimensions
export const THEME_ASPECT_RATIOS: Record<NavbarTheme, number> = {
  main: 2928 / 209, // ≈ 14.01
  about: 2928 / 209, // Same as main for consistency
  sponsor: 2928 / 160, // ≈ 18.3 - thinner strip for sponsor
};

// Theme-specific height constraints
export const THEME_HEIGHT_CONSTRAINTS: Record<
  NavbarTheme,
  { minHeight: number; maxHeight: number }
> = {
  main: { minHeight: 56, maxHeight: 85 },
  about: { minHeight: 56, maxHeight: 85 },
  sponsor: { minHeight: 50, maxHeight: 68 },
};

// Theme-specific top offset adjustments
export const THEME_TOP_OFFSETS: Record<NavbarTheme, number> = {
  main: 0,
  about: 0,
  sponsor: 0,
};

// Theme-specific layout adjustments for desktop
export const THEME_LAYOUT: Record<
  NavbarTheme,
  {
    navTranslateY: string;
    secondaryTranslateY: string;
    primaryLeft: string;
    primaryRight: string;
    secondaryRight: string;
  }
> = {
  main: {
    navTranslateY: "8%",
    secondaryTranslateY: "11%",
    primaryLeft: "22%",
    primaryRight: "26%",
    secondaryRight: "3%",
  },
  about: {
    navTranslateY: "8%",
    secondaryTranslateY: "11%",
    primaryLeft: "22%",
    primaryRight: "28%",
    secondaryRight: "4%",
  },
  sponsor: {
    navTranslateY: "8%",
    secondaryTranslateY: "11%",
    primaryLeft: "22%",
    primaryRight: "28%",
    secondaryRight: "5%",
  },
};

// Theme-specific badge positioning and sizing
export const BADGE_STYLES: Record<NavbarTheme, { position: string; size: string }> = {
  main: {
    position: "left-[13%] top-[50%]",
    size: "h-[145%] sm:h-[155%]",
  },
  about: {
    position: "left-[16%] top-[52%]",
    size: "h-[116%] sm:h-[124%]",
  },
  sponsor: {
    position: "left-[16%] top-[52%]",
    size: "h-[116%] sm:h-[124%]",
  },
};

// Theme-specific mobile menu styles
export const MOBILE_THEME_STYLES = {
  main: {
    hamburgerGradient: "linear-gradient(90deg, #8a5a1a, #d4a853)",
    panelBg:
      "radial-gradient(ellipse at 30% 20%, rgba(245,222,164,0.98) 0%, rgba(214,176,110,0.98) 45%, rgba(168,124,64,0.98) 100%)",
    panelBorder: "2px solid rgba(255,215,0,0.55)",
    panelShadow:
      "0 14px 34px rgba(0,0,0,0.55), inset 0 0 24px rgba(120,72,20,0.4), inset 0 0 2px rgba(255,240,200,0.6)",
    textColor: "#3a1505",
    textColorSecondary: "#6b3f14",
    textColorInactive: "#3d1e0a",
    dividerColor: "#8a5a1a",
    accentGold: "#FFD700",
    accentBronze: "#b8860b",
    activeGradient:
      "linear-gradient(135deg, rgba(255,215,0,0.7) 0%, rgba(255,230,100,0.8) 50%, rgba(255,215,0,0.7) 100%)",
    activeShadow:
      "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,180,0,0.5), inset 0 0 15px rgba(255,255,200,0.6)",
    activeTextShadow:
      "0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.8)",
    inactiveTextShadow: "0 1px 1px rgba(255,245,215,0.6)",
    headerGradient: "linear-gradient(135deg, #FFF3C4, #FFD700 45%, #B8860B)",
    mandalaStroke: "%235a3410",
  },
  about: {
    hamburgerGradient: "linear-gradient(90deg, #8a5a1a, #d4a853)",
    panelBg:
      "radial-gradient(ellipse at 30% 20%, rgba(45,27,78,0.98) 0%, rgba(30,20,50,0.98) 45%, rgba(26,26,46,0.98) 100%)",
    panelBorder: "2px solid rgba(139,92,246,0.6)",
    panelShadow:
      "0 14px 34px rgba(0,0,0,0.7), inset 0 0 24px rgba(139,92,246,0.2), inset 0 0 2px rgba(196,181,253,0.3)",
    textColor: "#e9d5ff",
    textColorSecondary: "#c4b5fd",
    textColorInactive: "#d8b4fe",
    dividerColor: "#8b5cf6",
    accentGold: "#a855f7",
    accentBronze: "#7c3aed",
    activeGradient:
      "linear-gradient(135deg, rgba(139,92,246,0.8) 0%, rgba(168,85,247,0.9) 50%, rgba(139,92,246,0.8) 100%)",
    activeShadow:
      "0 0 25px rgba(139,92,246,0.8), 0 0 50px rgba(168,85,247,0.5), inset 0 0 15px rgba(196,181,253,0.5)",
    activeTextShadow: "0 0 10px rgba(139,92,246,0.9), 0 0 20px rgba(168,85,247,0.7)",
    inactiveTextShadow: "0 1px 2px rgba(0,0,0,0.5)",
    headerGradient: "linear-gradient(135deg, #E9D5FF, #A855F7 45%, #6D28D9)",
    mandalaStroke: "%238b5cf6",
  },
  sponsor: {
    hamburgerGradient: "linear-gradient(90deg, #22c55e, #86efac)",
    panelBg:
      "radial-gradient(ellipse at 30% 20%, rgba(15,35,20,0.98) 0%, rgba(20,50,25,0.98) 45%, rgba(10,30,15,0.98) 100%)",
    panelBorder: "2px solid rgba(74,222,128,0.6)",
    panelShadow:
      "0 14px 34px rgba(0,0,0,0.6), inset 0 0 24px rgba(22,163,74,0.3), inset 0 0 2px rgba(187,247,208,0.3)",
    textColor: "#dcfce7",
    textColorSecondary: "#bbf7d0",
    textColorInactive: "#a7f3d0",
    dividerColor: "#22c55e",
    accentGold: "#4ade80",
    accentBronze: "#16a34a",
    activeGradient:
      "linear-gradient(135deg, rgba(74,222,128,0.8) 0%, rgba(134,239,172,0.9) 50%, rgba(74,222,128,0.8) 100%)",
    activeShadow:
      "0 0 25px rgba(74,222,128,0.8), 0 0 50px rgba(34,197,94,0.5), inset 0 0 15px rgba(187,247,208,0.5)",
    activeTextShadow: "0 0 10px rgba(74,222,128,0.9), 0 0 20px rgba(34,197,94,0.7)",
    inactiveTextShadow: "0 1px 2px rgba(0,0,0,0.5)",
    headerGradient: "linear-gradient(135deg, #DCFCE7, #4ADE80 45%, #166534)",
    mandalaStroke: "%2322c55e",
  },
} as const;
