"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { NavbarDesktopLight } from "./NavbarDesktop";
import { NavbarMobileLight } from "./NavbarMobile";
import { NavBadgeLight } from "./NavBadge";
import { NavbarProvider } from "../config/NavbarContext";

/**
 * Light Navbar - Supports multiple theme variants
 *
 * Themes:
 *   - main: Golden/cream theme (default, for home and most pages)
 *   - about: Purple/blue concert theme
 *   - sponsor: Green/gold nature theme
 */

export type NavbarTheme = "main" | "about" | "sponsor";
type NavPositionType = "fixed" | "sticky" | "relative" | "absolute";

type LightNavbarProps = {
  className?: string;
  position?: NavPositionType;
  topOffset?: number;
  theme?: NavbarTheme;
};

// Theme-specific configurations
const THEME_CONFIG = {
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
      color: "#3a1505", // Dark brown text like main
      activeColor: "#3a1505", // Dark text on gold active
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
      color: "#1a3a1a", // Dark green text
      activeColor: "#052e05", // Darker green on active
      activeBg:
        "linear-gradient(135deg, rgba(134,239,172,0.95) 0%, rgba(74,222,128,0.9) 50%, rgba(134,239,172,0.95) 100%)",
      inactiveBg: "rgba(74,222,128,0.2)", // Subtle green glass chip
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

export { THEME_CONFIG };

// Theme-specific aspect ratios based on actual image dimensions
const THEME_ASPECT_RATIOS = {
  main: 2928 / 209, // ≈ 14.01
  about: 2928 / 209, // Same as main for consistency
  sponsor: 2928 / 160, // ≈ 18.3 - thinner strip for sponsor
};

// Theme-specific height constraints
const THEME_HEIGHT_CONSTRAINTS = {
  main: { minHeight: 56, maxHeight: 85 },
  about: { minHeight: 56, maxHeight: 85 }, // Same as main
  sponsor: { minHeight: 50, maxHeight: 68 }, // Much shorter
};

// Theme-specific top offset adjustments
const THEME_TOP_OFFSETS = {
  main: 0,
  about: 0, // Same as main now
  sponsor: 0,
};

export function LightNavbar({
  className = "",
  position = "fixed",
  topOffset = 0,
  theme = "main",
}: LightNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const config = THEME_CONFIG[theme];
  const aspectRatio = THEME_ASPECT_RATIOS[theme];
  const heightConstraints = THEME_HEIGHT_CONSTRAINTS[theme];
  const themeOffset = THEME_TOP_OFFSETS[theme];
  const finalTopOffset = topOffset + themeOffset;

  useEffect(() => {
    if (position !== "fixed") return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [position]);

  const edgePinned = position === "fixed" || position === "absolute";

  return (
    <NavbarProvider theme={theme}>
      <header
        className={`${position} ${edgePinned ? "right-0 left-0" : ""} z-[200] transition-all duration-500 ${className}`}
        style={{
          top: position === "relative" ? undefined : finalTopOffset,
          marginTop: position === "relative" ? finalTopOffset : undefined,
          filter: scrolled
            ? "drop-shadow(0 8px 24px rgba(0,0,0,0.55))"
            : "drop-shadow(0 4px 16px rgba(0,0,0,0.35))",
        }}
      >
        {/* Wrapper keeps the bar centered and constrained on large screens */}
        <div className="relative mx-auto w-full max-w-[1600px] px-2 pt-2 sm:px-3">
          {/* The ornate bar — its height is driven by width to preserve aspect */}
          <div
            className="relative w-full"
            style={{
              aspectRatio: `${aspectRatio}`,
              minHeight: heightConstraints.minHeight,
              maxHeight: heightConstraints.maxHeight,
            }}
          >
            {/* Background carved bar */}
            <Image
              src={config.getBackground()}
              alt=""
              fill
              priority
              className="pointer-events-none object-fill select-none"
            />

            {/* IIT BHU Badge */}
            <NavBadgeLight theme={theme} />

            {/* Desktop Navigation */}
            <NavbarDesktopLight theme={theme} />

            {/* Mobile Navigation */}
            <NavbarMobileLight theme={theme} />
          </div>
        </div>
      </header>
    </NavbarProvider>
  );
}

export { NavbarDesktopLight } from "./NavbarDesktop";
export { NavbarMobileLight } from "./NavbarMobile";
export { NavBadgeLight } from "./NavBadge";
