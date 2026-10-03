"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

// ═══════════════════════════════════════════════════════════════════
// HERO SECTION - Bold GenZ Concert Vibes with Animated SVGs
// ═══════════════════════════════════════════════════════════════════

// Floating Music Notes SVG
const FloatingNotes = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <motion.g
      animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="20" cy="70" r="8" fill="#6366f1" />
      <rect x="26" y="30" width="3" height="42" fill="#6366f1" />
      <path d="M29,30 Q50,20 45,45" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
    </motion.g>
    <motion.g
      animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <circle cx="65" cy="60" r="6" fill="#8b5cf6" />
      <rect x="69" y="30" width="3" height="32" fill="#8b5cf6" />
    </motion.g>
    <motion.g
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <circle cx="85" cy="80" r="5" fill="#a855f7" />
      <rect x="88" y="55" width="2" height="27" fill="#a855f7" />
    </motion.g>
  </svg>
);

// Animated Equalizer Bars
const EqualizerBars = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className}>
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <motion.rect
        key={i}
        x={i * 8 + 2}
        width="5"
        rx="2"
        fill={i % 2 === 0 ? "#6366f1" : "#8b5cf6"}
        animate={{
          height: [8, 25 + Math.random() * 12, 10, 30, 15],
          y: [32, 15 - Math.random() * 5, 30, 10, 25],
        }}
        transition={{
          duration: 0.6 + Math.random() * 0.4,
          repeat: Infinity,
          delay: i * 0.08,
          ease: "easeInOut",
        }}
      />
    ))}
  </svg>
);

// Sound Wave Circles
const SoundWaves = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    {[1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        cx="50"
        cy="50"
        r={15 + i * 12}
        fill="none"
        stroke="#6366f1"
        strokeWidth="1"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.5, 0], scale: [0.8, 1.2] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeOut",
        }}
      />
    ))}
    <circle cx="50" cy="50" r="12" fill="#6366f1" />
  </svg>
);

// Headphones Icon
const HeadphonesIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 60 50" 
    className={className}
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M10,35 Q10,12 30,12 Q50,12 50,35" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
    <rect x="3" y="30" width="12" height="18" rx="4" fill="#1a1a2e" stroke="#6366f1" strokeWidth="2" />
    <rect x="45" y="30" width="12" height="18" rx="4" fill="#1a1a2e" stroke="#6366f1" strokeWidth="2" />
  </motion.svg>
);

// Glowing Orb
const GlowingOrb = ({ color = "#6366f1", className = "" }: { color?: string; className?: string }) => (
  <motion.div
    className={`rounded-full ${className}`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    }}
    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
);

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6">
      {/* Background gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* LEFT SIDE - Vector Person Image */}
      <motion.div 
        className="hidden lg:block absolute left-0 bottom-0 w-[350px] xl:w-[450px] h-[500px] xl:h-[650px] z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Glow behind */}
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, #6366f150 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <Image
          src={IMAGES.about.heroLeftAbout}
          alt="Festival performer"
          fill
          className="object-contain object-bottom"
          priority
        />
      </motion.div>

      {/* LEFT SIDE DECORATIONS - Above the person */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none">
        {/* Sound Waves - top left */}
        <motion.div 
          className="absolute top-[15%] left-[8%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <SoundWaves className="w-20 xl:w-24 h-20 xl:h-24 opacity-50" />
        </motion.div>

        {/* Music Notes - middle left */}
        <motion.div 
          className="absolute top-[35%] left-[20%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <FloatingNotes className="w-24 xl:w-28 h-24 xl:h-28 opacity-60" />
        </motion.div>

        {/* Glowing orbs */}
        <GlowingOrb color="#6366f1" className="absolute top-[25%] left-[30%] w-12 h-12" />
        <GlowingOrb color="#8b5cf6" className="absolute top-[50%] left-[5%] w-10 h-10" />
      </div>

      {/* RIGHT SIDE - Dancer Girl Image */}
      <motion.div 
        className="hidden lg:block absolute right-0 bottom-0 w-[350px] xl:w-[450px] h-[500px] xl:h-[650px] z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Glow behind */}
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, #8b5cf650 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <Image
          src={IMAGES.about.dancerGirlHeroAbout}
          alt="Festival dancer"
          fill
          className="object-contain object-bottom"
          priority
        />
      </motion.div>

      {/* RIGHT SIDE DECORATIONS - Above the dancer */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none">
        {/* Headphones - top right */}
        <motion.div 
          className="absolute top-[15%] right-[8%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <HeadphonesIcon className="w-20 xl:w-24 h-16 xl:h-20 opacity-50" />
        </motion.div>

        {/* Equalizer - top middle right */}
        <motion.div 
          className="absolute top-[30%] right-[20%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <EqualizerBars className="w-24 xl:w-28 h-16 xl:h-20 opacity-60" />
        </motion.div>

        {/* Glowing orbs */}
        <GlowingOrb color="#8b5cf6" className="absolute top-[22%] right-[30%] w-12 h-12" />
        <GlowingOrb color="#a855f7" className="absolute top-[45%] right-[5%] w-10 h-10" />
      </div>

      {/* MOBILE DECORATIONS - Top */}
      <div className="lg:hidden absolute top-24 left-0 right-0 flex justify-between px-4">
        <FloatingNotes className="w-16 h-16 opacity-40" />
        <EqualizerBars className="w-20 h-12 opacity-50" />
        <SoundWaves className="w-14 h-14 opacity-40" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-20">
        {/* Eyebrow badge with animated border */}
        <motion.div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">
            IIT BHU Varanasi
          </span>
          <span className="text-xs text-[#8b5cf6] font-medium">EST. 2010</span>
        </motion.div>

        {/* Main Title with stacked effect */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Shadow text for depth */}
          <h1 
            className="text-7xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none absolute inset-0 text-[#6366f1]/10 blur-sm"
            aria-hidden="true"
          >
            <span className="block">KASHI</span>
            <span className="block">YATRA</span>
          </h1>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none relative">
            <span className="text-white block drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">KASHI</span>
            <span 
              className="block relative"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))",
              }}
            >
              YATRA
            </span>
          </h1>
        </motion.div>

        {/* Tagline with funky styling */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light">
            Where Culture <span className="text-[#6366f1] font-semibold relative">
              Drops
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </span> the Beat
          </p>
        </motion.div>

        {/* Description text */}
        <motion.p
          className="text-sm sm:text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          North India&apos;s largest cultural festival blending ancient traditions with 
          electric performances. Three days of music, art, and unforgettable moments.
        </motion.p>

        {/* Animated divider with year */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#6366f1]" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/5">
            <EqualizerBars className="w-10 h-5" />
            <span className="text-xs font-bold text-[#6366f1] tracking-widest">2027</span>
            <EqualizerBars className="w-10 h-5" />
          </div>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#6366f1]" />
        </motion.div>

        {/* Stats row with funky cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "15+", label: "YEARS OF LEGACY", icon: "🎭" },
            { value: "90K+", label: "FOOTFALL", icon: "🔥" },
            { value: "50+", label: "EPIC EVENTS", icon: "🎪" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="relative group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div 
                className="px-6 sm:px-8 py-4 rounded-2xl relative overflow-hidden"
                style={{
                  background: i === 1 
                    ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 100%)"
                    : "rgba(255, 255, 255, 0.03)",
                  border: i === 1 
                    ? "1px solid rgba(99, 102, 241, 0.4)" 
                    : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <span className="text-lg mb-1 block">{stat.icon}</span>
                  <p 
                    className="text-3xl sm:text-4xl font-black"
                    style={{ 
                      color: i === 1 ? "#ffffff" : "#6366f1",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="mt-10 text-xs sm:text-sm text-white/30 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          January 2027 • Varanasi • Be There
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #08080c, transparent)",
        }}
      />
    </section>
  );
});
