"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PassConfig } from "../config/passes.config";
import { ANIMATION } from "../config/passes.config";
import { useIsMobile } from "@/hooks";
import {
  COLORS,
  SHADOWS,
  GRADIENT_BADGE_GOLD,
  GRADIENT_BUTTON_ROYAL,
  GRADIENT_FRAME_GOLD,
  GRADIENT_FRAME_DARK,
  GRADIENT_LINE_GOLD_LEFT,
  GRADIENT_LINE_GOLD_RIGHT,
  GRADIENT_TEXT_GOLD_VERTICAL,
} from "@/components/pages/home/constants/palette";

interface PassCardProps {
  pass: PassConfig;
  index: number;
  onSelect?: (passId: string) => void;
}

// ============================================
// PassIcon Component with Animation (desktop only)
// ============================================
function PassIcon({ passId, isMobile }: { passId: string; isMobile: boolean }) {
  const icons: Record<string, React.ReactNode> = {
    yatri: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
      </svg>
    ),
    darbar: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V18H19V19Z" />
      </svg>
    ),
    swarnim: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 1Z" />
      </svg>
    ),
  };

  if (isMobile) {
    return <span className="inline-block">{icons[passId] || icons.yatri}</span>;
  }

  return (
    <motion.span
      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="inline-block"
    >
      {icons[passId] || icons.yatri}
    </motion.span>
  );
}

// ============================================
// Animated Mandala Ring for Card Back
// ============================================
function AnimatedMandala({
  color,
  size = 200,
  isAnimating = true,
}: {
  color: string;
  size?: number;
  isAnimating?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute"
      style={{ width: size, height: size }}
      animate={isAnimating ? { rotate: 360 } : undefined}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {/* Outer circles */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke={color}
        strokeWidth="0.3"
        opacity="0.2"
      />
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.25"
      />
      <circle
        cx="100"
        cy="100"
        r="65"
        fill="none"
        stroke={color}
        strokeWidth="0.3"
        opacity="0.2"
      />

      {/* Radial lines */}
      {[...Array(12)].map((_, i) => (
        <line
          key={`line-${i}`}
          x1="100"
          y1="5"
          x2="100"
          y2="25"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.35"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}

      {/* Outer dots */}
      {[...Array(24)].map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx="100"
          cy="12"
          r="2"
          fill={color}
          opacity="0.4"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}

      {/* Inner petals */}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={`petal-${i}`}
          cx="100"
          cy="55"
          rx="6"
          ry="12"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.3"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
    </motion.svg>
  );
}

// ============================================
// RoyalPrice Component
// ============================================
function RoyalPrice({ price }: { price: number }) {
  return (
    <div className="relative inline-flex items-center">
      <span
        className="w-8 h-[1px] mr-2"
        style={{ background: GRADIENT_LINE_GOLD_LEFT }}
      />
      <div
        className="px-4 py-2 rounded-lg"
        style={{
          background: `linear-gradient(180deg, rgba(${hexToRgb(COLORS.GOLD)}, 0.15) 0%, rgba(${hexToRgb(COLORS.GOLD_BROWN)}, 0.08) 100%)`,
          border: `1px solid rgba(${hexToRgb(COLORS.GOLD)}, 0.4)`,
          boxShadow: `0 2px 10px rgba(${hexToRgb(COLORS.GOLD)}, 0.2)`,
        }}
      >
        <span
          className="text-sm font-semibold tracking-wide"
          style={{ color: COLORS.GOLD }}
        >
          Price
        </span>
        <span className="mx-2 font-light" style={{ color: COLORS.BRIGHT_GOLD }}>
          :
        </span>
        <span
          className="text-2xl font-bold"
          style={GRADIENT_TEXT_GOLD_VERTICAL}
        >
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>
      <span
        className="w-8 h-[1px] ml-2"
        style={{ background: GRADIENT_LINE_GOLD_RIGHT }}
      />
    </div>
  );
}

// Helper to convert hex to rgb string
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "0, 0, 0";
}

// ============================================
// RoyalButton Component
// ============================================
function RoyalButton({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative w-full py-3 px-4 font-bold uppercase tracking-wider text-sm overflow-hidden rounded-lg"
      style={{
        background: GRADIENT_BUTTON_ROYAL,
        border: `2px solid ${COLORS.BRIGHT_GOLD}`,
        color: COLORS.CARD_DARK_PURPLE,
        boxShadow: SHADOWS.BUTTON_GOLD,
      }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon}
        {children}
      </span>
    </motion.button>
  );
}

// ============================================
// Existing Components
// ============================================
function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotations = { tl: 0, tr: 90, bl: -90, br: 180 };
  const positions = {
    tl: "top-2 left-2",
    tr: "top-2 right-2",
    bl: "bottom-2 left-2",
    br: "bottom-2 right-2",
  };

  return (
    <div
      className={`absolute ${positions[position]} w-10 h-10 pointer-events-none`}
      style={{ transform: `rotate(${rotations[position]}deg)` }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <path
          d="M5 5 Q5 25 25 25 Q15 15 5 5"
          fill="none"
          stroke="url(#goldGradCorner)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M2 2 Q2 28 28 28"
          fill="none"
          stroke={COLORS.GOLD}
          strokeWidth="1"
          opacity="0.4"
        />
        <ellipse
          cx="10"
          cy="10"
          rx="3"
          ry="5"
          fill="none"
          stroke={COLORS.BRIGHT_GOLD}
          strokeWidth="0.8"
          opacity="0.5"
          transform="rotate(-45 10 10)"
        />
        <circle cx="6" cy="6" r="2" fill={COLORS.GOLD} opacity="0.6" />
        <defs>
          <linearGradient
            id="goldGradCorner"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={COLORS.BRIGHT_GOLD} />
            <stop offset="100%" stopColor={COLORS.GOLD_BROWN} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[7px]">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(35, 18, 45, 0.98) 0%, rgba(28, 14, 38, 0.99) 30%, rgba(22, 10, 32, 1) 60%, rgba(18, 8, 28, 1) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a853' fill-rule='evenodd'%3E%3Cpath d='M20 20c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zm0-2c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function RoyalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 rounded-[14px]"
        style={{ background: GRADIENT_FRAME_GOLD, padding: "3px" }}
      >
        <div
          className="w-full h-full rounded-[11px]"
          style={{ background: GRADIENT_FRAME_DARK, padding: "2px" }}
        >
          <div
            className="w-full h-full rounded-[9px]"
            style={{ background: GRADIENT_FRAME_GOLD, padding: "2px" }}
          >
            <div className="relative w-full h-full rounded-[7px] overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main PassCard Component
// ============================================
export const PassCard = memo(function PassCard({
  pass,
  index,
  onSelect,
}: PassCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile();

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);
  const floatDelay = index * 0.4;

  return (
    <motion.div
      variants={ANIMATION.card}
      className={`relative ${pass.popular ? "md:-mt-6 lg:-mt-8" : ""}`}
      style={{ width: "100%", maxWidth: "300px", height: "520px" }}
    >
      {/* Popular badge */}
      {pass.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          style={{
            background: GRADIENT_BADGE_GOLD,
            color: COLORS.CARD_DARK_PURPLE,
            boxShadow: SHADOWS.BADGE_GOLD,
          }}
        >
          ✦ Most Popular ✦
        </div>
      )}

      {/* Static card frame */}
      <RoyalFrame>
        <div
          className="relative w-full h-full flex flex-col"
          style={{ boxShadow: SHADOWS.CARD_ROYAL }}
        >
          <CardBackground />
          <CornerOrnament position="tl" />
          <CornerOrnament position="tr" />
          <CornerOrnament position="bl" />
          <CornerOrnament position="br" />

          {/* Internal flip container */}
          <div
            className="relative flex-1 flex items-center justify-center p-3 cursor-pointer z-10"
            style={{ 
              perspective: "800px",
              WebkitPerspective: "800px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="relative w-full h-full"
              style={{ 
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* ===== FRONT: Pass Image with Glow ===== */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(0deg)", // Explicit transform for Safari
                  zIndex: isFlipped ? 0 : 1,
                }}
              >
                {isMobile ? (
                  /* Static on mobile */
                  <div className="relative">
                    <div
                      className="absolute inset-0 blur-2xl"
                      style={{
                        background: `radial-gradient(ellipse, ${pass.glowColor} 0%, transparent 70%)`,
                        transform: "scale(1.3)",
                        opacity: 0.6,
                      }}
                    />
                    <div
                      style={{
                        filter: `drop-shadow(0 0 20px ${pass.glowColor})`,
                      }}
                    >
                      <Image
                        src={pass.image}
                        alt={pass.name}
                        width={220}
                        height={280}
                        className="object-contain max-h-[260px] w-auto relative z-10"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ) : (
                  /* Animated on desktop */
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ ...ANIMATION.float, delay: floatDelay }}
                    className="relative"
                  >
                    <div
                      className="absolute inset-0 blur-2xl"
                      style={{
                        background: `radial-gradient(ellipse, ${pass.glowColor} 0%, transparent 70%)`,
                        transform: "scale(1.3)",
                        opacity: 0.6,
                      }}
                    />
                    <motion.div
                      animate={{
                        filter: [
                          `drop-shadow(0 0 20px ${pass.glowColor})`,
                          `drop-shadow(0 0 35px ${pass.glowColor})`,
                          `drop-shadow(0 0 20px ${pass.glowColor})`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={pass.image}
                        alt={pass.name}
                        width={220}
                        height={280}
                        className="object-contain max-h-[260px] w-auto relative z-10"
                        priority={index === 0}
                      />
                    </motion.div>
                  </motion.div>
                )}
                <p className="absolute bottom-1 text-gray-500 text-xs flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  {isMobile ? "Tap for details" : "Click for details"}
                </p>
              </div>

              {/* ===== BACK: Glamorous Benefits with Mandala ===== */}
              <div
                className="absolute inset-0 flex flex-col rounded-lg overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  zIndex: isFlipped ? 1 : 0,
                }}
              >
                {/* Rich gradient background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse at 50% 0%, rgba(${hexToRgb(COLORS.GOLD)}, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 100%, rgba(139, 69, 19, 0.2) 0%, transparent 50%),
                      linear-gradient(180deg, 
                        rgba(45, 22, 55, 0.98) 0%, 
                        rgba(35, 15, 45, 0.99) 30%,
                        rgba(28, 12, 38, 1) 60%,
                        rgba(22, 8, 30, 1) 100%
                      )
                    `,
                  }}
                />

                {/* Animated Mandala Background - only animate when flipped and not on mobile */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <AnimatedMandala
                    color={pass.accentColor}
                    size={280}
                    isAnimating={isFlipped && !isMobile}
                  />
                </div>

                {/* Gold border glow */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    border: `1px solid rgba(${hexToRgb(COLORS.GOLD)}, 0.4)`,
                    boxShadow: `inset 0 0 30px rgba(${hexToRgb(COLORS.GOLD)}, 0.1)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-4">
                  {/* Header with decorative lines */}
                  <div className="text-center mb-3">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span
                        className="w-8 h-[1px]"
                        style={{ background: GRADIENT_LINE_GOLD_LEFT }}
                      />
                      <span style={{ color: pass.accentColor }}>✦</span>
                      <span
                        className="w-8 h-[1px]"
                        style={{ background: GRADIENT_LINE_GOLD_RIGHT }}
                      />
                    </div>
                    <h3
                      className="text-xl font-bold uppercase tracking-wider"
                      style={{
                        fontFamily: "var(--font-ethereal), serif",
                        background: `linear-gradient(180deg, ${pass.accentColor} 0%, ${COLORS.BRIGHT_GOLD} 50%, ${pass.accentColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: `0 0 30px ${pass.glowColor}`,
                      }}
                    >
                      {pass.name.split(" ")[0]} Benefits
                    </h3>
                  </div>

                  {/* Benefits list with royal styling */}
                  <ul className="flex-1 space-y-2.5 overflow-y-auto px-1">
                    {pass.benefits.map((benefit, i) =>
                      isMobile ? (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-sm ${benefit.highlight ? "text-yellow-200" : "text-gray-200"}`}
                        >
                          <span
                            style={{ color: COLORS.BRIGHT_GOLD }}
                            className="mt-0.5"
                          >
                            ✦
                          </span>
                          <span className="leading-tight">{benefit.text}</span>
                        </li>
                      ) : (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className={`flex items-start gap-2.5 text-sm ${benefit.highlight ? "text-yellow-200" : "text-gray-200"}`}
                        >
                          <motion.span
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            style={{ color: COLORS.BRIGHT_GOLD }}
                            className="mt-0.5"
                          >
                            ✦
                          </motion.span>
                          <span className="leading-tight">{benefit.text}</span>
                        </motion.li>
                      ),
                    )}
                  </ul>

                  {/* QR with ornate frame */}
                  <div className="flex justify-center my-3">
                    <div
                      className="relative w-16 h-16 rounded flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, rgba(${hexToRgb(COLORS.GOLD)}, 0.1) 0%, rgba(0,0,0,0.3) 100%)`,
                        border: `2px solid rgba(${hexToRgb(COLORS.GOLD)}, 0.5)`,
                        boxShadow: SHADOWS.QR_FRAME,
                      }}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={COLORS.GOLD}
                        strokeWidth="1.5"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="3" height="3" />
                        <rect x="18" y="14" width="3" height="3" />
                        <rect x="14" y="18" width="3" height="3" />
                        <rect x="18" y="18" width="3" height="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Flip back hint */}
                  <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                    {isMobile ? "Tap to flip back" : "Click to flip back"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="relative z-10 px-4 pb-4 pt-1">
            <div className="flex justify-center mb-3">
              <RoyalPrice price={pass.price} />
            </div>
            <RoyalButton
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(pass.id);
              }}
              icon={<PassIcon passId={pass.id} isMobile={isMobile} />}
            >
              Get {pass.name.split(" ")[0]} Pass
            </RoyalButton>
          </div>
        </div>
      </RoyalFrame>
    </motion.div>
  );
});
