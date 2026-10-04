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
      color: "#d4c4a8", // Cream/gold text to match navbar
      activeColor: "#ffffff",
      activeBg:
        "linear-gradient(135deg, rgba(255,215,0,0.85) 0%, rgba(255,180,0,0.75) 50%, rgba(255,215,0,0.85) 100%)",
      inactiveBg: "transparent", // No background for inactive links
      activeBorder: "2px solid rgba(255,230,100,0.9)",
      inactiveBorder: "none", // No border for inactive
      activeShadow:
        "0 0 20px rgba(255,215,0,0.7), 0 0 40px rgba(255,180,0,0.5), inset 0 0 10px rgba(255,255,200,0.4)",
      inactiveShadow: "none",
      activeTextShadow: "0 0 8px rgba(255,215,0,0.8), 0 1px 1px rgba(0,0,0,0.3)",
      inactiveTextShadow: "0 1px 2px rgba(0,0,0,0.5)",
    },
    hamburgerGradient: "linear-gradient(90deg, #d4a853, #8a5a1a)",
    mobileMenuBg:
      "radial-gradient(ellipse at 30% 20%, rgba(30,20,50,0.98) 0%, rgba(45,27,78,0.98) 45%, rgba(26,26,46,0.98) 100%)",
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
      activeColor: "#0f2a0f",
      activeBg:
        "linear-gradient(135deg, rgba(74,222,128,0.85) 0%, rgba(34,197,94,0.8) 50%, rgba(74,222,128,0.85) 100%)",
      inactiveBg:
        "linear-gradient(135deg, rgba(74,222,128,0.25) 0%, rgba(34,197,94,0.15) 50%, rgba(22,163,74,0.25) 100%)",
      activeBorder: "2px solid rgba(187,247,208,1)",
      inactiveBorder: "1px solid rgba(74,222,128,0.5)",
      activeShadow:
        "0 0 25px rgba(74,222,128,0.8), 0 0 50px rgba(34,197,94,0.6), inset 0 0 15px rgba(187,247,208,0.4), 0 2px 8px rgba(0,0,0,0.3)",
      inactiveShadow: "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(187,247,208,0.3)",
      activeTextShadow: "0 0 8px rgba(74,222,128,0.8), 0 0 15px rgba(34,197,94,0.6)",
      inactiveTextShadow: "0 1px 1px rgba(187,247,208,0.5)",
    },
    hamburgerGradient: "linear-gradient(90deg, #166534, #4ade80)",
    mobileMenuBg:
      "radial-gradient(ellipse at 30% 20%, rgba(20,40,20,0.98) 0%, rgba(30,60,30,0.98) 45%, rgba(15,35,15,0.98) 100%)",
    mobileMenuBorder: "2px solid rgba(74,222,128,0.6)",
    mobileMenuShadow:
      "0 14px 34px rgba(0,0,0,0.6), inset 0 0 24px rgba(22,163,74,0.3), inset 0 0 2px rgba(187,247,208,0.3)",
  },
} as const;

export { THEME_CONFIG };

// Theme-specific aspect ratios based on actual image dimensions
const THEME_ASPECT_RATIOS = {
  main: 2928 / 209, // ≈ 14.01
  about: 1408 / 237, // ≈ 5.94 - shorter strip
  sponsor: 2928 / 209, // Use main ratio for now (sponsor image may need update)
};

// Theme-specific height constraints
const THEME_HEIGHT_CONSTRAINTS = {
  main: { minHeight: 56, maxHeight: 85 },
  about: { minHeight: 48, maxHeight: 70 },
  sponsor: { minHeight: 56, maxHeight: 85 },
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
          top: position === "relative" ? undefined : topOffset,
          marginTop: position === "relative" ? topOffset : undefined,
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
