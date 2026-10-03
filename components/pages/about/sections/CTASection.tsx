"use client";

import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { GlitchText, NeonText, InteractiveSpeaker, WaveformVisualizer } from "../decors";

// ═══════════════════════════════════════════════════════════════════
// CTA SECTION - Concert themed
// ═══════════════════════════════════════════════════════════════════

const NEON = {
  CYAN: "#00FFFF",
  MAGENTA: "#FF00FF",
  LIME: "#39FF14",
  PINK: "#FF1493",
};

// Custom SVG Icons for buttons
const MicrophoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
  </svg>
);

const TicketIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 5v2"/>
    <path d="M13 17v2"/>
    <path d="M13 11v2"/>
  </svg>
);

const SparkleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
  </svg>
);

export const CTASection = memo(function CTASection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 text-center overflow-hidden">
      {/* Background gradients */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${NEON.MAGENTA}40 0%, transparent 60%)`,
          filter: "blur(60px)",
        }}
      />
      
      {/* Speakers - Desktop only */}
      <div className="hidden lg:block absolute left-12 -bottom-1 opacity-50">
        <InteractiveSpeaker size={250} side="left" />
      </div>
      <div className="hidden lg:block absolute right-12 -bottom-1 opacity-50">
        <InteractiveSpeaker size={250} side="right" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main CTA content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlitchText 
            text="JOIN THE WAVE" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          />
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Experience <NeonText color="cyan">music</NeonText>,{" "}
          <NeonText color="magenta">art</NeonText>, and{" "}
          <NeonText color="lime">culture</NeonText> like never before.
          <br />
          <span className="text-white/50">This is your moment.</span>
        </motion.p>

        {/* Waveform */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <WaveformVisualizer bars={32} width={280} height={50} color="gradient" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          {/* Primary Button */}
          <Link href="/events" className="group relative">
            <div 
              className="absolute -inset-1 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, ${NEON.CYAN}, ${NEON.MAGENTA})`,
                filter: "blur(8px)",
              }}
            />
            <div 
              className="relative px-8 sm:px-12 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-3"
              style={{
                background: `linear-gradient(90deg, ${NEON.CYAN}, ${NEON.MAGENTA})`,
                color: "#0a0014",
              }}
            >
              <MicrophoneIcon />
              <span>Explore Events</span>
              <MicrophoneIcon />
            </div>
          </Link>

          {/* Secondary Button */}
          <Link href="/passes" className="group relative">
            <div 
              className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                background: NEON.LIME,
                filter: "blur(8px)",
              }}
            />
            <div 
              className="relative px-8 sm:px-12 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-3 transition-colors duration-300"
              style={{
                background: "transparent",
                border: `2px solid ${NEON.LIME}`,
                color: NEON.LIME,
              }}
            >
              <TicketIcon />
              <span>Get Passes</span>
              <TicketIcon />
            </div>
          </Link>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="mt-12 text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          style={{ color: `${NEON.CYAN}60` }}
        >
          <SparkleIcon />
          See you on the other side
          <SparkleIcon />
        </motion.p>
      </div>

      {/* Bottom neon border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${NEON.CYAN}, ${NEON.MAGENTA}, ${NEON.LIME}, transparent)`,
          boxShadow: `0 0 30px ${NEON.MAGENTA}`,
        }}
      />
    </section>
  );
});
