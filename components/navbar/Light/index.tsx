"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { NavbarDesktopLight } from "./NavbarDesktop";
import { NavbarMobileLight } from "./NavbarMobile";
import { NAV_ASPECT } from "../config/links.config";
import { NavBadgeLight } from "./NavBadge";
import { NavbarProvider } from "../config/NavbarContext";

/**
 * Light Navbar - Golden/cream theme for light pages
 *
 * Visual composition:
 *   - Nav background → golden sandstone bar
 *   - NavBadge → bronze IIT BHU crest
 */

type NavPositionType = "fixed" | "sticky" | "relative" | "absolute";

type LightNavbarProps = {
  className?: string;
  position?: NavPositionType;
  topOffset?: number;
};

export function LightNavbar({
  className = "",
  position = "fixed",
  topOffset = 0,
}: LightNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (position !== "fixed") return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [position]);

  const edgePinned = position === "fixed" || position === "absolute";

  return (
    <NavbarProvider>
      <header
        className={`${position} ${edgePinned ? "left-0 right-0" : ""} z-[200] transition-all duration-500 ${className}`}
        style={{
          top: position === "relative" ? undefined : topOffset,
          marginTop: position === "relative" ? topOffset : undefined,
          filter: scrolled
            ? "drop-shadow(0 8px 24px rgba(0,0,0,0.55))"
            : "drop-shadow(0 4px 16px rgba(0,0,0,0.35))",
        }}
      >
        {/* Wrapper keeps the bar centered and constrained on large screens */}
        <div className="relative mx-auto w-full max-w-[1600px] px-2 sm:px-3 pt-2">
          {/* The ornate bar — its height is driven by width to preserve aspect */}
          <div
            className="relative w-full"
            style={{
              aspectRatio: `${NAV_ASPECT}`,
              minHeight: 56,
              maxHeight: 85,
            }}
          >
            {/* Background carved bar */}
            <Image
              src={IMAGES.navbar.background}
              alt=""
              fill
              priority
              className="object-fill pointer-events-none select-none"
            />

            {/* IIT BHU Badge */}
            <NavBadgeLight />

            {/* Desktop Navigation */}
            <NavbarDesktopLight />

            {/* Mobile Navigation */}
            <NavbarMobileLight />
          </div>
        </div>
      </header>
    </NavbarProvider>
  );
}

export { NavbarDesktopLight } from "./NavbarDesktop";
export { NavbarMobileLight } from "./NavbarMobile";
export { NavBadgeLight } from "./NavBadge";
