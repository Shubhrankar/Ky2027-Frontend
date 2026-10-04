"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NavbarDesign as Navbar } from "@/components/navbar/Design";
import { IMAGES } from "@/lib/images";
import {
  SPONSORS_2026,
  TIER_CONFIG,
  CARD_SIZES,
  groupSponsorsByTier,
  type Sponsor,
  type SponsorTier,
} from "../config/sponsors.config";

// Gen-Z Concert Theme Colors - Greenish White Theme
const COLORS = {
  BG_DEEP: "#030308",
  BG_PURPLE: "#050a08",
  NEON_CYAN: "#00FFAA", // Mint/Teal green
  NEON_PINK: "#00FF88", // Bright green (replacing pink)
  NEON_PURPLE: "#88FFCC", // Light mint
  NEON_LIME: "#BFFF00", // Lime green
  NEON_GREEN: "#00FF66", // Pure neon green
  GOLD: "#CCFFCC", // Pale green-white
  WHITE: "#FFFFFF",
};

// ═══════════════════════════════════════════════════════════════════
// SIDE DECORATIONS - Stage/Theatrical Concert Theme (Unique to Sponsors)
// ═══════════════════════════════════════════════════════════════════

function LeftSideDecor() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-10 hidden h-full w-48 overflow-hidden lg:block lg:w-64">
      {/* Stage curtain effect - dark green */}
      <div
        className="absolute inset-y-0 left-0 w-full"
        style={{
          background: `linear-gradient(90deg, 
            rgba(0, 50, 30, 0.5) 0%, 
            rgba(0, 40, 25, 0.3) 30%,
            transparent 100%
          )`,
        }}
      />

      {/* Curtain drape SVG */}
      <svg
        className="absolute top-0 left-0 h-full w-20 opacity-30"
        viewBox="0 0 50 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curtainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#004d33" />
            <stop offset="50%" stopColor="#002d1a" />
            <stop offset="100%" stopColor="#001a0d" />
          </linearGradient>
        </defs>
        <path
          d="M0 0 Q25 50 15 100 Q5 150 20 200 Q35 250 10 300 Q-5 350 25 400 L0 400 Z"
          fill="url(#curtainGrad)"
        />
      </svg>

      {/* Spotlight beams from top */}
      <motion.div
        className="absolute -top-20 left-10 h-[400px] w-[150px] origin-top"
        style={{
          background: `linear-gradient(180deg, ${COLORS.NEON_PINK}25 0%, ${COLORS.NEON_PINK}05 50%, transparent 100%)`,
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{
          rotate: [-15, 5, -15],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stage rope/rigging */}
      <div className="absolute top-0 left-12 h-full">
        <svg width="4" height="100%" className="opacity-40">
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke={COLORS.GOLD}
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* Stage lights */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`light-l-${i}`}
          className="absolute"
          style={{
            left: 8,
            top: `${15 + i * 22}%`,
          }}
        >
          {/* Light fixture */}
          <div
            className="h-6 w-8 rounded-b-lg"
            style={{
              background: `linear-gradient(180deg, #1a1a1a 0%, #333 100%)`,
              boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
            }}
          />
          {/* Light glow */}
          <motion.div
            className="absolute top-6 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full"
            style={{
              background: [
                COLORS.NEON_PINK,
                COLORS.NEON_CYAN,
                COLORS.NEON_PURPLE,
                COLORS.NEON_LIME,
              ][i],
              boxShadow: `0 0 20px ${[COLORS.NEON_PINK, COLORS.NEON_CYAN, COLORS.NEON_PURPLE, COLORS.NEON_LIME][i]}, 0 0 40px ${[COLORS.NEON_PINK, COLORS.NEON_CYAN, COLORS.NEON_PURPLE, COLORS.NEON_LIME][i]}50`,
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        </motion.div>
      ))}

      {/* "LIVE" sign */}
      <motion.div
        className="absolute top-[85%] left-4 rounded px-3 py-1"
        style={{
          background: COLORS.NEON_LIME,
          boxShadow: `0 0 20px ${COLORS.NEON_LIME}, 0 0 40px ${COLORS.NEON_LIME}50`,
        }}
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        <span className="text-xs font-bold tracking-widest text-black">LIVE</span>
      </motion.div>

      {/* Decorative stars scattered */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-l-${i}`}
          className="absolute text-lg"
          style={{
            left: 30 + (i % 3) * 15,
            top: `${20 + i * 15}%`,
            color: COLORS.GOLD,
            filter: `drop-shadow(0 0 5px ${COLORS.GOLD})`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          ★
        </motion.div>
      ))}
    </div>
  );
}

function RightSideDecor() {
  return (
    <div className="pointer-events-none fixed top-0 right-0 z-10 hidden h-full w-48 overflow-hidden lg:block lg:w-64">
      {/* Stage curtain effect - dark green mirrored */}
      <div
        className="absolute inset-y-0 right-0 w-full"
        style={{
          background: `linear-gradient(-90deg, 
            rgba(0, 50, 30, 0.5) 0%, 
            rgba(0, 40, 25, 0.3) 30%,
            transparent 100%
          )`,
        }}
      />

      {/* Curtain drape SVG - mirrored */}
      <svg
        className="absolute top-0 right-0 h-full w-20 opacity-30"
        viewBox="0 0 50 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curtainGradR" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#004d33" />
            <stop offset="50%" stopColor="#002d1a" />
            <stop offset="100%" stopColor="#001a0d" />
          </linearGradient>
        </defs>
        <path
          d="M50 0 Q25 50 35 100 Q45 150 30 200 Q15 250 40 300 Q55 350 25 400 L50 400 Z"
          fill="url(#curtainGradR)"
        />
      </svg>

      {/* Spotlight beams from top */}
      <motion.div
        className="absolute -top-20 right-10 h-[400px] w-[150px] origin-top"
        style={{
          background: `linear-gradient(180deg, ${COLORS.NEON_CYAN}25 0%, ${COLORS.NEON_CYAN}05 50%, transparent 100%)`,
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{
          rotate: [15, -5, 15],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Stage rope/rigging */}
      <div className="absolute top-0 right-12 h-full">
        <svg width="4" height="100%" className="opacity-40">
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke={COLORS.GOLD}
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* Stage lights */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`light-r-${i}`}
          className="absolute"
          style={{
            right: 8,
            top: `${18 + i * 20}%`,
          }}
        >
          {/* Light fixture */}
          <div
            className="h-6 w-8 rounded-b-lg"
            style={{
              background: `linear-gradient(180deg, #1a1a1a 0%, #333 100%)`,
              boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
            }}
          />
          {/* Light glow */}
          <motion.div
            className="absolute top-6 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full"
            style={{
              background: [
                COLORS.NEON_CYAN,
                COLORS.NEON_LIME,
                COLORS.NEON_PINK,
                COLORS.NEON_PURPLE,
              ][i],
              boxShadow: `0 0 20px ${[COLORS.NEON_CYAN, COLORS.NEON_LIME, COLORS.NEON_PINK, COLORS.NEON_PURPLE][i]}, 0 0 40px ${[COLORS.NEON_CYAN, COLORS.NEON_LIME, COLORS.NEON_PINK, COLORS.NEON_PURPLE][i]}50`,
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        </motion.div>
      ))}

      {/* "ON AIR" sign */}
      <motion.div
        className="absolute top-[85%] right-4 rounded px-3 py-1"
        style={{
          background: COLORS.NEON_CYAN,
          boxShadow: `0 0 20px ${COLORS.NEON_CYAN}, 0 0 40px ${COLORS.NEON_CYAN}50`,
        }}
        animate={{
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      >
        <span className="text-xs font-bold tracking-widest text-black">ON AIR</span>
      </motion.div>

      {/* VIP badge */}
      <motion.div
        className="absolute top-[10%] right-6"
        animate={{
          y: [0, -5, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div
          className="rounded-lg border-2 px-4 py-2"
          style={{
            borderColor: COLORS.NEON_GREEN,
            background: `linear-gradient(135deg, rgba(0,255,102,0.2) 0%, rgba(0,255,102,0.05) 100%)`,
            boxShadow: `0 0 15px ${COLORS.NEON_GREEN}40`,
          }}
        >
          <span
            className="text-sm font-black tracking-[0.2em]"
            style={{ color: COLORS.NEON_GREEN }}
          >
            VIP
          </span>
        </div>
      </motion.div>

      {/* Ticket stub decoration */}
      <div
        className="absolute top-[50%] right-8 h-20 w-12 rounded-lg opacity-60"
        style={{
          background: `linear-gradient(135deg, ${COLORS.NEON_CYAN}30 0%, ${COLORS.NEON_GREEN}20 100%)`,
          border: `1px dashed ${COLORS.NEON_CYAN}50`,
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-1">
          <span className="text-[8px] tracking-wider text-white/60">ADMIT</span>
          <span className="text-lg font-bold" style={{ color: COLORS.NEON_CYAN }}>
            1
          </span>
        </div>
      </div>

      {/* Decorative stars scattered */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-r-${i}`}
          className="absolute text-lg"
          style={{
            right: 35 + (i % 3) * 12,
            top: `${25 + i * 14}%`,
            color: COLORS.GOLD,
            filter: `drop-shadow(0 0 5px ${COLORS.GOLD})`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3 + 0.5,
          }}
        >
          ★
        </motion.div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// BACKGROUND EFFECTS
// ═══════════════════════════════════════════════════════════════════

function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Gradient orbs - green theme */}
      <div
        className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
        style={{ background: COLORS.NEON_GREEN }}
      />
      <div
        className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: COLORS.NEON_CYAN }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-8 blur-[150px]"
        style={{ background: COLORS.NEON_LIME }}
      />

      {/* Grid overlay - green tint */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(${COLORS.NEON_GREEN}20 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.NEON_GREEN}20 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FLOATING ELEMENTS - Scattered across the page
// ═══════════════════════════════════════════════════════════════════

function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {/* Floating geometric shapes - minimal */}
      <motion.div
        className="absolute top-[25%] left-[8%] h-10 w-10 rounded-lg border-2"
        style={{ borderColor: `${COLORS.NEON_GREEN}40` }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-[35%] right-[10%] h-6 w-6 border-2"
        style={{
          borderColor: `${COLORS.NEON_CYAN}40`,
          transform: "rotate(45deg)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[65%] left-[6%] h-8 w-8 rounded-full border-2"
        style={{ borderColor: `${COLORS.NEON_LIME}35` }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[70%] right-[8%] h-7 w-7 rounded-lg border-2"
        style={{ borderColor: `${COLORS.NEON_GREEN}40` }}
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating plus signs - reduced */}
      {[
        { x: "15%", y: "45%" },
        { x: "85%", y: "55%" },
      ].map((pos, i) => (
        <motion.div
          key={`plus-${i}`}
          className="absolute text-xl font-light"
          style={{
            left: pos.x,
            top: pos.y,
            color: `${COLORS.NEON_GREEN}30`,
          }}
          animate={{
            rotate: [0, 90, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          +
        </motion.div>
      ))}

      {/* Floating dots - reduced */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${8 + ((i * 15) % 85)}%`,
            top: `${20 + ((i * 12) % 60)}%`,
            backgroundColor: [COLORS.NEON_GREEN, COLORS.NEON_CYAN, COLORS.NEON_LIME][i % 3],
            boxShadow: `0 0 4px ${[COLORS.NEON_GREEN, COLORS.NEON_CYAN, COLORS.NEON_LIME][i % 3]}`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SPONSOR CARD - Stamp style design (responsive)
// ═══════════════════════════════════════════════════════════════════

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const tierConfig = TIER_CONFIG[sponsor.tier];
  const size = CARD_SIZES[tierConfig.cardSize];

  // Mobile sizes are now larger (was mobileWidth, now using bigger values)
  const mobileSizeW = Math.min(size.mobileWidth * 1.4, 340);
  const mobileSizeH = Math.min(size.mobileHeight * 1.4, 270);
  const mobileLogoSize = size.mobileLogoSize * 1.4;

  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.03, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Responsive card container */}
      <div
        className="relative"
        style={{
          width: `clamp(${mobileSizeW}px, 80vw, ${size.width}px)`,
          height: `clamp(${mobileSizeH}px, 65vw, ${size.height}px)`,
        }}
      >
        {/* Stamp background image */}
        <div className="absolute inset-0">
          <Image src={IMAGES.sponsors.sponsorStamp} alt="" fill className="object-contain" />
        </div>

        {/* Content - centered on stamp */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-[8%] py-[6%]">
          {/* Logo container */}
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-lg bg-white/95"
            style={{
              width: `clamp(${mobileLogoSize}px, 35vw, ${size.logoSize}px)`,
              height: `clamp(${mobileLogoSize * 0.6}px, 22vw, ${size.logoSize * 0.6}px)`,
              padding: "4%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain p-[8%]"
              sizes={`(max-width: 640px) ${mobileLogoSize}px, ${size.logoSize}px`}
            />
          </div>

          {/* Category label */}
          <div className="mt-[4%] max-w-[85%]">
            <p
              className="text-center text-[clamp(9px,2.5vw,11px)] leading-tight font-bold tracking-[0.1em] uppercase"
              style={{
                color: "#2a4a3a",
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              {sponsor.category}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// TIER SECTION
// ═══════════════════════════════════════════════════════════════════

function TierSection({
  title,
  sponsors,
  tier,
}: {
  title: string;
  sponsors: Sponsor[];
  tier: SponsorTier;
}) {
  if (sponsors.length === 0) return null;

  const neonColor =
    tier === "title"
      ? COLORS.NEON_PINK
      : tier === "major"
        ? COLORS.NEON_CYAN
        : tier === "co-title"
          ? COLORS.NEON_PURPLE
          : COLORS.NEON_LIME;

  return (
    <div className="mb-16">
      {/* Tier title */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <div
          className="h-[2px] w-16 sm:w-24"
          style={{
            background: `linear-gradient(90deg, transparent, ${neonColor})`,
          }}
        />
        <h3
          className="text-lg font-bold tracking-[0.2em] uppercase sm:text-xl"
          style={{
            color: neonColor,
            textShadow: `0 0 20px ${neonColor}60`,
          }}
        >
          {title}
        </h3>
        <div
          className="h-[2px] w-16 sm:w-24"
          style={{
            background: `linear-gradient(90deg, ${neonColor}, transparent)`,
          }}
        />
      </div>

      {/* Sponsors grid */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════

export function SponsorsPageContent() {
  const groupedSponsors = groupSponsorsByTier(SPONSORS_2026);

  return (
    <>
      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-[200]">
        <Navbar position="relative" topOffset={18} />
      </div>

      <main
        className="relative min-h-screen px-4 pt-28 pb-16 sm:pt-32"
        style={{
          background: `linear-gradient(180deg, ${COLORS.BG_DEEP} 0%, ${COLORS.BG_PURPLE} 50%, ${COLORS.BG_DEEP} 100%)`,
        }}
      >
        {/* Background effects */}
        <BackgroundEffects />

        {/* Floating elements */}
        <FloatingElements />

        {/* Side decorations */}
        <LeftSideDecor />
        <RightSideDecor />

        <div className="relative mx-auto max-w-6xl">
          {/* Page Header */}
          <motion.div
            className="mb-16 text-center sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative top element */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <div
                className="h-[2px] w-16 sm:w-24"
                style={{
                  background: `linear-gradient(90deg, transparent, ${COLORS.NEON_CYAN})`,
                }}
              />
              <span className="text-2xl">⚡</span>
              <div
                className="h-[2px] w-16 sm:w-24"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.NEON_CYAN}, transparent)`,
                }}
              />
            </div>

            {/* Title with gradient */}
            <h1
              className="mb-8 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl"
              style={{
                fontFamily: "var(--font-cinzel-decorative), 'Cinzel Decorative', serif",
                background: `linear-gradient(135deg, ${COLORS.WHITE} 0%, ${COLORS.NEON_CYAN} 25%, ${COLORS.WHITE} 50%, ${COLORS.NEON_PINK} 75%, ${COLORS.WHITE} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.3))`,
              }}
            >
              OUR PARTNERS
            </h1>

            {/* Decorative divider */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div
                className="h-[1px] w-16 sm:w-24"
                style={{ background: `linear-gradient(90deg, transparent, ${COLORS.NEON_PINK})` }}
              />
              <span
                className="text-xl"
                style={{
                  color: COLORS.NEON_PINK,
                  textShadow: `0 0 15px ${COLORS.NEON_PINK}`,
                }}
              >
                ✦
              </span>
              <div
                className="h-[1px] w-16 sm:w-24"
                style={{ background: `linear-gradient(90deg, ${COLORS.NEON_PINK}, transparent)` }}
              />
            </div>

            {/* Tagline badges - improved styling */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              {["POWERED BY", "SUPPORTED BY", "ENABLED BY"].map((tag, i) => (
                <span
                  key={tag}
                  className="rounded-full px-5 py-2 text-xs font-bold tracking-[0.15em] transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${[COLORS.NEON_CYAN, COLORS.NEON_PINK, COLORS.NEON_PURPLE][i]}20 0%, transparent 100%)`,
                    border: `1.5px solid ${[COLORS.NEON_CYAN, COLORS.NEON_PINK, COLORS.NEON_PURPLE][i]}60`,
                    color: [COLORS.NEON_CYAN, COLORS.NEON_PINK, COLORS.NEON_PURPLE][i],
                    boxShadow: `0 0 20px ${[COLORS.NEON_CYAN, COLORS.NEON_PINK, COLORS.NEON_PURPLE][i]}20`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Subtitle - improved typography */}
            <div className="mx-auto mb-10 max-w-2xl px-4">
              <p
                className="text-center text-base leading-relaxed sm:text-lg"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Kashi Yatra 2027 partners will be announced soon.
              </p>
              <p
                className="mt-2 text-center text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Below are the amazing brands who made our previous edition{" "}
                <span
                  className="font-bold"
                  style={{
                    background: `linear-gradient(90deg, ${COLORS.NEON_PINK}, ${COLORS.NEON_PURPLE})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  legendary
                </span>
                .
              </p>
            </div>

            {/* Coming soon badge - enhanced */}
            <motion.div
              className="inline-block rounded-2xl px-8 py-4"
              style={{
                background: `linear-gradient(135deg, ${COLORS.NEON_PINK}15, ${COLORS.NEON_PURPLE}15, ${COLORS.NEON_CYAN}15)`,
                border: `2px solid transparent`,
                borderImage: `linear-gradient(135deg, ${COLORS.NEON_PINK}60, ${COLORS.NEON_PURPLE}60, ${COLORS.NEON_CYAN}60) 1`,
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${COLORS.NEON_PINK}20, 0 0 40px ${COLORS.NEON_PURPLE}10`,
                  `0 0 30px ${COLORS.NEON_PINK}40, 0 0 60px ${COLORS.NEON_PURPLE}20`,
                  `0 0 20px ${COLORS.NEON_PINK}20, 0 0 40px ${COLORS.NEON_PURPLE}10`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span
                className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase sm:text-base"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.NEON_PINK}, ${COLORS.NEON_PURPLE})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="text-lg">🚀</span>
                2027 Partners Coming Soon
                <span className="text-lg">✨</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Previous Edition Section */}
          <div className="mb-8">
            <div className="mb-12 flex items-center justify-center gap-3">
              <span
                className="h-px w-20 sm:w-32"
                style={{
                  background: `linear-gradient(90deg, transparent, ${COLORS.NEON_PURPLE}60)`,
                }}
              />
              <h2
                className="text-sm font-bold tracking-[0.3em] uppercase"
                style={{ color: COLORS.NEON_PURPLE }}
              >
                Previous Edition Partners
              </h2>
              <span
                className="h-px w-20 sm:w-32"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.NEON_PURPLE}60, transparent)`,
                }}
              />
            </div>

            {/* Tier Sections */}
            <TierSection title="Title Sponsor" sponsors={groupedSponsors["title"]} tier="title" />
            <TierSection title="Major Sponsor" sponsors={groupedSponsors["major"]} tier="major" />
            <TierSection title="Co-Title" sponsors={groupedSponsors["co-title"]} tier="co-title" />
            <TierSection
              title="Powered By"
              sponsors={groupedSponsors["powered-by"]}
              tier="powered-by"
            />
            <TierSection
              title="Co-Powered By"
              sponsors={groupedSponsors["co-powered-by"]}
              tier="co-powered-by"
            />
            <TierSection title="Partners" sponsors={groupedSponsors["partner"]} tier="partner" />
          </div>

          {/* Bottom decorative element */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <span
              className="h-px w-20"
              style={{
                background: `linear-gradient(90deg, transparent, ${COLORS.NEON_CYAN}40)`,
              }}
            />
            <span className="text-2xl">🎉</span>
            <span
              className="h-px w-20"
              style={{
                background: `linear-gradient(90deg, ${COLORS.NEON_CYAN}40, transparent)`,
              }}
            />
          </div>

          {/* Footer text */}
          <p
            className="mt-6 text-center text-sm tracking-wider"
            style={{ color: `${COLORS.NEON_PURPLE}80` }}
          >
            IIT (BHU) Varanasi • Kashi Yatra 2027
          </p>
        </div>
      </main>
    </>
  );
}
