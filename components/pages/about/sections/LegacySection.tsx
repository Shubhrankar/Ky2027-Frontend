"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

// ═══════════════════════════════════════════════════════════════════
// LEGACY SECTION - Bold GenZ Concert Vibes
// ═══════════════════════════════════════════════════════════════════

// Custom SVG - Stage Lights
const StageLightsSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={className}>
    {/* Light beams */}
    <motion.path
      d="M100,10 L60,100 L140,100 Z"
      fill="url(#lightBeam1)"
      opacity="0.3"
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M60,5 L20,100 L100,100 Z"
      fill="url(#lightBeam2)"
      opacity="0.2"
      animate={{ opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
    />
    <motion.path
      d="M140,5 L100,100 L180,100 Z"
      fill="url(#lightBeam3)"
      opacity="0.2"
      animate={{ opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
    />
    <defs>
      <linearGradient id="lightBeam1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
      <linearGradient id="lightBeam2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
      <linearGradient id="lightBeam3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    {/* Light fixtures */}
    <circle cx="100" cy="8" r="8" fill="#333" stroke="#6366f1" strokeWidth="2" />
    <circle cx="60" cy="5" r="6" fill="#333" stroke="#8b5cf6" strokeWidth="2" />
    <circle cx="140" cy="5" r="6" fill="#333" stroke="#a855f7" strokeWidth="2" />
  </svg>
);

// Custom SVG - Ticket
const TicketSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" className={className}>
    <path
      d="M10,0 L110,0 L110,20 Q100,25 100,30 Q100,35 110,40 L110,60 L10,60 L10,40 Q20,35 20,30 Q20,25 10,20 Z"
      fill="#1a1a2e"
      stroke="#6366f1"
      strokeWidth="2"
    />
    {/* Dashed line */}
    <line x1="35" y1="5" x2="35" y2="55" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
    {/* Text */}
    <text x="70" y="25" textAnchor="middle" fill="#6366f1" fontSize="8" fontWeight="bold">KASHI YATRA</text>
    <text x="70" y="38" textAnchor="middle" fill="#fff" fontSize="6">SINCE 2010</text>
    <text x="22" y="35" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="bold">VIP</text>
  </svg>
);

// Custom SVG - Music Notes
const MusicNotesSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className}>
    {/* Note 1 */}
    <motion.g
      animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <circle cx="20" cy="60" r="8" fill="#6366f1" />
      <rect x="26" y="20" width="3" height="42" fill="#6366f1" />
      <path d="M29,20 Q50,15 45,35" fill="none" stroke="#6366f1" strokeWidth="3" />
    </motion.g>
    {/* Note 2 */}
    <motion.g
      animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
    >
      <circle cx="55" cy="50" r="6" fill="#8b5cf6" />
      <rect x="59" y="20" width="3" height="32" fill="#8b5cf6" />
    </motion.g>
  </svg>
);

export const LegacySection = memo(function LegacySection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Stage lights background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <StageLightsSVG className="w-full h-40 opacity-50" />
      </div>

      {/* Floating music notes - left */}
      <div className="hidden md:block absolute left-10 top-1/3">
        <MusicNotesSVG className="w-20 h-20 opacity-40" />
      </div>

      {/* Floating music notes - right */}
      <div className="hidden md:block absolute right-10 top-1/2">
        <MusicNotesSVG className="w-16 h-16 opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#6366f1] font-bold mb-3">
            Est. 2010
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase">
            The Legacy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with ticket overlay */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Glowing border */}
            <div 
              className="absolute -inset-2 rounded-xl opacity-50"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #6366f1)",
                filter: "blur(20px)",
              }}
            />
            
            <div className="relative rounded-xl overflow-hidden border-2 border-[#6366f1]/30">
              <Image
                src={IMAGES.about.bhuGate}
                alt="IIT BHU Gate"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(8,8,12,0.9) 0%, transparent 50%)",
                }}
              />
              
              {/* Year badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#6366f1] rounded-full">
                <span className="text-sm font-bold text-white">Since 1916</span>
              </div>
            </div>

            {/* Floating ticket */}
            <motion.div 
              className="absolute -bottom-6 -right-6 sm:bottom-4 sm:-right-8"
              animate={{ rotate: [5, -5, 5], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <TicketSVG className="w-32 sm:w-40 h-auto drop-shadow-2xl" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                <span className="text-white font-bold text-2xl">Kashi Yatra</span> isn&apos;t just a fest — 
                it&apos;s a whole vibe. Born in the heart of{" "}
                <span className="text-[#6366f1] font-semibold">IIT BHU Varanasi</span>, 
                we&apos;ve been dropping beats and breaking records since day one.
              </p>
              <p>
                From a small campus gathering to{" "}
                <span className="text-[#8b5cf6] font-semibold">North India&apos;s biggest cultural explosion</span> — 
                that&apos;s the kind of glow-up we&apos;re talking about.
              </p>
              <p className="text-white/50 text-base">
                100+ years of IIT BHU legacy. 15+ years of pure cultural chaos. 
                And we&apos;re just getting started. 🚀
              </p>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
              {[
                { value: "100+", label: "Colleges" },
                { value: "3", label: "Days" },
                { value: "1", label: "Epic Vibe" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-[#6366f1]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
