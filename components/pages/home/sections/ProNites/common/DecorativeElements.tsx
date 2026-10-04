"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { CONCERT_COLORS } from "../constants";

/**
 * DancingGirlFestiveVibes - Top-left corner (static image)
 * Shown on all screens; lower z-index on mobile.
 */
export const DancingGirlFestiveVibes = memo(function DancingGirlFestiveVibes() {
  return (
    <div className="pointer-events-none absolute top-[15%] -left-[2%] z-[40] w-[55vw] sm:top-[3%] sm:w-[38vw]">
      {/* Glow behind DancingGirlFestiveVibes - subtle dark blue */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(30,30,80,0.4) 0%, rgba(20,20,60,0.2) 40%, transparent 70%)`,
          filter: "blur(30px)",
          transform: "scale(1.3)",
        }}
      />

      {/* DancingGirlFestiveVibes image - Static */}
      <Image
        src={IMAGES.proNites.aerobics}
        alt="DancingGirlFestiveVibes"
        width={400}
        height={500}
        className="relative h-auto w-full"
        style={{
          filter: `drop-shadow(0 0 25px rgba(50,50,120,0.5)) drop-shadow(0 0 50px rgba(30,30,80,0.3))`,
        }}
      />
    </div>
  );
});

/**
 * GlowingMoon - Large moon in top-right corner
 * Positioned so only ~half is visible (3/4 moon feel)
 * Desktop only for performance
 */
export const GlowingMoon = memo(function GlowingMoon() {
  return (
    <div className="pointer-events-none absolute -top-[36vh] -right-[100vw] z-[1] aspect-square w-[180vw] sm:-top-[50%] sm:-right-[45%] sm:left-auto sm:w-[90vw]">
      {/* Radiance rings - bluish-white glow rings around moon */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, 
            transparent 35%, 
            rgba(173,216,255,0.05) 40%, 
            transparent 45%,
            rgba(200,230,255,0.03) 50%,
            transparent 55%,
            rgba(180,220,255,0.02) 60%,
            transparent 65%
          )`,
        }}
      />

      {/* Inner bluish-white glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(200,230,255,0.2) 0%, rgba(150,200,255,0.1) 20%, transparent 50%)`,
          filter: "blur(40px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Soft outer bluish-white radiance */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(180,220,255,0.08) 0%, rgba(140,190,255,0.04) 30%, transparent 60%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Moon image - static on mobile, slow rotation on desktop (via CSS class) */}
      <Image
        src={IMAGES.proNites.moon}
        alt=""
        fill
        className="pronites-moon-rotate object-contain"
        style={{
          filter: `drop-shadow(0 0 40px rgba(180,220,255,0.3)) drop-shadow(0 0 80px rgba(150,200,255,0.2)) drop-shadow(0 0 120px rgba(120,180,255,0.15))`,
        }}
        priority
      />
    </div>
  );
});

/**
 * NeonBorders - Top and bottom neon line borders
 */
export const TopBorder = memo(function TopBorder() {
  return (
    <div className="absolute top-0 right-0 left-0">
      <div
        className="h-[1px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(30, 30, 74, 0.6) 20%,
            rgba(100, 100, 180, 0.4) 50%,
            rgba(30, 30, 74, 0.6) 80%,
            transparent 100%
          )`,
        }}
      />
      <div
        className="hidden h-8 opacity-30 sm:block"
        style={{
          background: `linear-gradient(180deg, rgba(30, 30, 80, 0.5) 0%, transparent 100%)`,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
});

export const BottomBorder = memo(function BottomBorder() {
  return (
    <div className="absolute right-0 bottom-0 left-0">
      <div
        className="hidden h-8 opacity-30 sm:block"
        style={{
          background: `linear-gradient(0deg, rgba(30, 30, 80, 0.5) 0%, transparent 100%)`,
          filter: "blur(10px)",
        }}
      />
      <div
        className="h-[1px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(30, 30, 74, 0.6) 20%,
            rgba(100, 100, 180, 0.4) 50%,
            rgba(30, 30, 74, 0.6) 80%,
            transparent 100%
          )`,
        }}
      />
    </div>
  );
});

/**
 * GridOverlay - Subtle grid pattern
 */
export const GridOverlay = memo(function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden opacity-[0.02] sm:block"
      style={{
        backgroundImage: `
          linear-gradient(${CONCERT_COLORS.NEON_PURPLE}50 1px, transparent 1px),
          linear-gradient(90deg, ${CONCERT_COLORS.NEON_PURPLE}50 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
});

/**
 * CrowdSilhouette - Concert crowd at the bottom
 * Shows on both mobile and desktop
 */
export const CrowdSilhouette = memo(function CrowdSilhouette() {
  return (
    <div className="pointer-events-none z-[500] hidden h-[100px] sm:absolute sm:-bottom-[150px] sm:block sm:h-[400px] sm:w-[1500px]">
      {/* Glow behind the crowd */}
      <div
        className="absolute right-0 bottom-0 left-0 h-full"
        style={{
          background: `linear-gradient(to top, rgba(100,80,180,0.3) 0%, transparent 70%)`,
        }}
      />

      {/* Silhouette image */}
      <Image
        src={IMAGES.proNites.silhouette}
        alt=""
        fill
        className="object-cover object-bottom"
        style={{
          opacity: 0.85,
          filter: "drop-shadow(0 -5px 20px rgba(100,80,180,0.4))",
        }}
      />
    </div>
  );
});
