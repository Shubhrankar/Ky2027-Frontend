"use client";

import { memo, useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FOOTER_COLORS, FLOATING_STICKERS } from "./constants";

// ═══════════════════════════════════════════════════════════════════
// GLITCH TEXT - Title with scramble/decode effect
// ═══════════════════════════════════════════════════════════════════
interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = memo(function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Quick scramble effect
      let iterations = 0;
      const scrambleInterval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (iterations > i) return text[i];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("")
        );
        
        iterations += 1;
        if (iterations > text.length) {
          clearInterval(scrambleInterval);
          setDisplayText(text);
        }
      }, 30);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `0 0 30px ${FOOTER_COLORS.NEON_PINK}40`,
      }}
    >
      {displayText}
    </span>
  );
});

// ═══════════════════════════════════════════════════════════════════
// PULSE RINGS - Bass drop sonar effect (2 rings only, no blinking outer)
// ═══════════════════════════════════════════════════════════════════
export const PulseRings = memo(function PulseRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            borderColor: i === 0 ? FOOTER_COLORS.NEON_PINK : FOOTER_COLORS.NEON_CYAN,
            width: 100,
            height: 100,
          }}
          animate={{
            scale: [1, 6],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// FLOATING STICKERS - Gen-Z badges
// ═══════════════════════════════════════════════════════════════════
export const FloatingStickers = memo(function FloatingStickers() {
  const positions = [
    { top: "15%", left: "5%" },
    { top: "25%", right: "8%" },
    { top: "60%", left: "3%" },
    { top: "45%", right: "5%" },
    { top: "75%", left: "8%" },
    { top: "70%", right: "3%" },
  ];

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
      {FLOATING_STICKERS.map((sticker, i) => (
        <motion.div
          key={sticker.label}
          className="absolute flex flex-col items-center gap-1"
          style={positions[i]}
          animate={{
            y: [0, -15, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <span className="text-3xl">{sticker.emoji}</span>
          <span 
            className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: `${sticker.color}20`,
              color: sticker.color,
              border: `1px solid ${sticker.color}50`,
              textShadow: `0 0 10px ${sticker.color}`,
            }}
          >
            {sticker.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// GLASSMORPHISM CARD - Clean glass effect with subtle border
// ═══════════════════════════════════════════════════════════════════
interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
}

export const GlassmorphismCard = memo(function GlassmorphismCard({ 
  children, 
  className = "",
  accentColor = FOOTER_COLORS.NEON_CYAN,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Card with glass effect */}
      <div 
        className="relative rounded-2xl p-6 h-full transition-all duration-300"
        style={{
          background: "rgba(15, 10, 25, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${accentColor}30`,
          boxShadow: `0 0 20px ${accentColor}10`,
        }}
      >
        {/* Corner accents */}
        <div 
          className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-xl transition-all duration-300 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${accentColor}60` }}
        />
        <div 
          className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 rounded-tr-xl transition-all duration-300 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${accentColor}60` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 rounded-bl-xl transition-all duration-300 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${accentColor}60` }}
        />
        <div 
          className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-xl transition-all duration-300 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${accentColor}60` }}
        />
        
        {children}
      </div>
    </motion.div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// NEON SOCIAL BUTTON - Glowing social icon
// ═══════════════════════════════════════════════════════════════════
interface NeonSocialButtonProps {
  href: string;
  icon: ReactNode;
  color: string;
  label: string;
}

export const NeonSocialButton = memo(function NeonSocialButton({ 
  href, 
  icon, 
  color, 
  label 
}: NeonSocialButtonProps) {
  return (
    <motion.a
      href={href}
      className="relative w-12 h-12 rounded-full flex items-center justify-center"
      style={{
        background: `${color}10`,
        border: `2px solid ${color}50`,
        color: color,
      }}
      whileHover={{ 
        scale: 1.15,
        boxShadow: `0 0 30px ${color}80, 0 0 60px ${color}40`,
      }}
      whileTap={{ scale: 0.95 }}
      title={label}
    >
      {icon}
      
      {/* Pulse effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: `2px solid ${color}` }}
        initial={{ scale: 1, opacity: 0 }}
        whileHover={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
        }}
      />
    </motion.a>
  );
});

// ═══════════════════════════════════════════════════════════════════
// CONCERT BRAND HEADER - Clean Gen-Z styled title (no blinking)
// ═══════════════════════════════════════════════════════════════════
export const ConcertBrandHeader = memo(function ConcertBrandHeader() {
  return (
    <div className="text-center mb-12 sm:mb-16 relative z-10">
      {/* Decorative top line */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div 
          className="h-[2px] w-16 sm:w-24"
          style={{
            background: `linear-gradient(90deg, transparent, ${FOOTER_COLORS.NEON_CYAN})`,
          }}
        />
        <span className="text-2xl">⚡</span>
        <div 
          className="h-[2px] w-16 sm:w-24"
          style={{
            background: `linear-gradient(90deg, ${FOOTER_COLORS.NEON_CYAN}, transparent)`,
          }}
        />
      </div>

      {/* Main Title - KASHI YATRA with premium styling */}
      <h3
        className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-wider"
        style={{
          fontFamily: "var(--font-ethereal), 'Cinzel Decorative', serif",
          color: "#FFFFFF",
          textShadow: `0 0 10px ${FOOTER_COLORS.NEON_PINK}60, 0 0 30px ${FOOTER_COLORS.NEON_PINK}40, 0 0 60px ${FOOTER_COLORS.NEON_PURPLE}30`,
          letterSpacing: "0.15em",
        }}
      >
        KASHI YATRA
      </h3>
      
      {/* Year with neon styling - bigger and bolder */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div 
          className="h-[1px] w-12 sm:w-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${FOOTER_COLORS.NEON_PINK})`,
          }}
        />
        <span
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.4em]"
          style={{
            fontFamily: "var(--font-ethereal), 'Cinzel Decorative', serif",
            color: FOOTER_COLORS.NEON_PINK,
            textShadow: `0 0 20px ${FOOTER_COLORS.NEON_PINK}80, 0 0 40px ${FOOTER_COLORS.NEON_PINK}40, 0 0 80px ${FOOTER_COLORS.NEON_PURPLE}30`,
          }}
        >
          2027
        </span>
        <div 
          className="h-[1px] w-12 sm:w-20"
          style={{
            background: `linear-gradient(90deg, ${FOOTER_COLORS.NEON_PINK}, transparent)`,
          }}
        />
      </div>

      {/* Tagline badges */}
      <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
        {["4 DAYS", "50+ EVENTS", "PRO NITES", "IIT BHU"].map((tag, i) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider"
            style={{
              background: `${[FOOTER_COLORS.NEON_CYAN, FOOTER_COLORS.NEON_PINK, FOOTER_COLORS.NEON_PURPLE, FOOTER_COLORS.NEON_LIME][i]}15`,
              border: `1px solid ${[FOOTER_COLORS.NEON_CYAN, FOOTER_COLORS.NEON_PINK, FOOTER_COLORS.NEON_PURPLE, FOOTER_COLORS.NEON_LIME][i]}50`,
              color: [FOOTER_COLORS.NEON_CYAN, FOOTER_COLORS.NEON_PINK, FOOTER_COLORS.NEON_PURPLE, FOOTER_COLORS.NEON_LIME][i],
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtext - with soul */}
      <div className="max-w-2xl mx-auto px-4 space-y-4">
        {/* Main tagline */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ color: FOOTER_COLORS.TEXT_SECONDARY }}>The </span>
          <span 
            className="font-bold"
            style={{ 
              color: FOOTER_COLORS.NEON_PINK,
              textShadow: `0 0 20px ${FOOTER_COLORS.NEON_PINK}50`,
            }}
          >
            biggest cultural fest
          </span>
          <span style={{ color: FOOTER_COLORS.TEXT_SECONDARY }}> of </span>
          <span 
            className="font-bold"
            style={{ 
              color: FOOTER_COLORS.NEON_CYAN,
              textShadow: `0 0 20px ${FOOTER_COLORS.NEON_CYAN}50`,
            }}
          >
            IIT (BHU) Varanasi
          </span>
        </motion.p>
        
        {/* Divider with gradient */}
        <motion.div 
          className="flex items-center justify-center gap-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div 
            className="h-[1px] w-12 sm:w-20"
            style={{
              background: `linear-gradient(90deg, transparent, ${FOOTER_COLORS.NEON_PURPLE})`,
            }}
          />
          <span 
            className="text-lg"
            style={{ 
              color: FOOTER_COLORS.NEON_PURPLE,
              filter: `drop-shadow(0 0 8px ${FOOTER_COLORS.NEON_PURPLE})`,
            }}
          >
            ✦
          </span>
          <div 
            className="h-[1px] w-12 sm:w-20"
            style={{
              background: `linear-gradient(90deg, ${FOOTER_COLORS.NEON_PURPLE}, transparent)`,
            }}
          />
        </motion.div>
        
        {/* Second line with typewriter feel */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ color: FOOTER_COLORS.TEXT_MUTED }}
        >
          Where{" "}
          <span 
            className="not-italic font-semibold"
            style={{ 
              background: `linear-gradient(90deg, ${FOOTER_COLORS.NEON_LIME}, ${FOOTER_COLORS.NEON_CYAN})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            tradition
          </span>
          {" "}meets the{" "}
          <span 
            className="not-italic font-semibold"
            style={{ 
              background: `linear-gradient(90deg, ${FOOTER_COLORS.NEON_PINK}, ${FOOTER_COLORS.NEON_PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            future
          </span>
        </motion.p>
        
        {/* CTA line */}
        <motion.div
          className="pt-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.span 
            className="inline-block text-lg sm:text-xl md:text-2xl font-bold tracking-wide"
            animate={{
              textShadow: [
                `0 0 20px ${FOOTER_COLORS.NEON_PINK}60`,
                `0 0 40px ${FOOTER_COLORS.NEON_PINK}80`,
                `0 0 20px ${FOOTER_COLORS.NEON_PINK}60`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ 
              color: FOOTER_COLORS.NEON_PINK,
            }}
          >
            Are you ready? 🔥
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
});
