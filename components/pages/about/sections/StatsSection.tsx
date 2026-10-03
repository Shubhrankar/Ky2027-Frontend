"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

// ═══════════════════════════════════════════════════════════════════
// STATS SECTION - Bold GenZ Concert Vibes with Custom SVG Icons
// ═══════════════════════════════════════════════════════════════════

// Custom SVG Icons
const GuitarIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <ellipse
      cx="12"
      cy="28"
      rx="10"
      ry="8"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
    />
    <ellipse cx="12" cy="28" rx="4" ry="3" fill="#6366f1" />
    <rect x="20" y="8" width="4" height="22" rx="1" fill="#6366f1" />
    <rect
      x="18"
      y="4"
      width="8"
      height="6"
      rx="1"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
    />
    <line x1="19" y1="7" x2="19" y2="10" stroke="#6366f1" strokeWidth="1" />
    <line x1="22" y1="7" x2="22" y2="10" stroke="#6366f1" strokeWidth="1" />
    <line x1="25" y1="7" x2="25" y2="10" stroke="#6366f1" strokeWidth="1" />
  </svg>
);

const CrowdIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    {/* People silhouettes */}
    <circle cx="10" cy="12" r="4" fill="#6366f1" />
    <path d="M4,28 Q4,20 10,20 Q16,20 16,28" fill="#6366f1" />
    <circle cx="20" cy="10" r="5" fill="#8b5cf6" />
    <path d="M12,28 Q12,18 20,18 Q28,18 28,28" fill="#8b5cf6" />
    <circle cx="30" cy="12" r="4" fill="#6366f1" />
    <path d="M24,28 Q24,20 30,20 Q36,20 36,28" fill="#6366f1" />
    {/* Raised hands */}
    <line
      x1="8"
      y1="20"
      x2="6"
      y2="14"
      stroke="#6366f1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="18"
      x2="18"
      y2="10"
      stroke="#8b5cf6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="18"
      x2="22"
      y2="10"
      stroke="#8b5cf6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="20"
      x2="34"
      y2="14"
      stroke="#6366f1"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StageIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    {/* Stage platform */}
    <rect
      x="2"
      y="28"
      width="36"
      height="10"
      rx="2"
      fill="#1a1a2e"
      stroke="#6366f1"
      strokeWidth="2"
    />
    {/* Spotlights */}
    <circle cx="10" cy="8" r="4" fill="#6366f1" />
    <path d="M10,12 L5,28 L15,28 Z" fill="#6366f1" opacity="0.3" />
    <circle cx="30" cy="8" r="4" fill="#8b5cf6" />
    <path d="M30,12 L25,28 L35,28 Z" fill="#8b5cf6" opacity="0.3" />
    {/* Center mic */}
    <rect x="18" y="18" width="4" height="12" rx="1" fill="#6366f1" />
    <circle
      cx="20"
      cy="16"
      r="4"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
    />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    {/* Cup */}
    <path
      d="M10,8 L10,20 Q10,28 20,28 Q30,28 30,20 L30,8 Z"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
    />
    {/* Handles */}
    <path
      d="M10,12 Q2,12 2,18 Q2,22 10,22"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
    />
    <path
      d="M30,12 Q38,12 38,18 Q38,22 30,22"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
    />
    {/* Base */}
    <rect x="16" y="28" width="8" height="4" fill="#6366f1" />
    <rect x="12" y="32" width="16" height="4" rx="1" fill="#6366f1" />
    {/* Star */}
    <polygon
      points="20,12 22,16 26,16 23,19 24,23 20,21 16,23 17,19 14,16 18,16"
      fill="#6366f1"
    />
  </svg>
);

const stats = [
  {
    value: "15+",
    label: "Years of Legacy",
    Icon: GuitarIcon,
    color: "#6366f1",
  },
  { value: "90K+", label: "Expected Crowd", Icon: CrowdIcon, color: "#8b5cf6" },
  { value: "50+", label: "Live Events", Icon: StageIcon, color: "#6366f1" },
  {
    value: "100+",
    label: "Colleges Compete",
    Icon: TrophyIcon,
    color: "#8b5cf6",
  },
];

// Stamps data - All 5 IIT BHU landmark stamps
// Positioned around the edges, fully visible, larger size
const stamps = [
  {
    src: IMAGES.about.stamps.mainBuilding,
    alt: "IIT BHU Main Building",
    rotate: -8,
    position: "top-4 left-4 xl:left-12",
    floatDelay: 0,
    size: "w-52 xl:w-72",
    imgSize: 300,
  },
  {
    src: IMAGES.about.stamps.library,
    alt: "Central Library",
    rotate: 6,
    position: "top-4 right-4 xl:right-12",
    floatDelay: 0.5,
    size: "w-52 xl:w-72",
    imgSize: 300,
  },
  {
    src: IMAGES.about.stamps.mandir,
    alt: "Vishwanath Mandir",
    rotate: -5,
    position: "bottom-24 left-4 xl:left-8",
    floatDelay: 1,
    size: "w-48 xl:w-64",
    imgSize: 280,
  },
  {
    src: IMAGES.about.stamps.heritageHostel,
    alt: "Heritage Hostel",
    rotate: 4,
    position: "bottom-2 right-4 xl:right-8",
    floatDelay: 1.5,
    size: "w-48 xl:w-64",
    imgSize: 280,
  },
  {
    src: IMAGES.about.stamps.kyVenue,
    alt: "KY Venue",
    rotate: -3,
    position: "-bottom-20 left-1/2 -translate-x-1/2",
    floatDelay: 2,
    size: "w-[400px] xl:w-[500px]",
    imgSize: 400,
  },
];

export const StatsSection = memo(function StatsSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-visible">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, #6366f120 0%, transparent 70%)",
        }}
      />

      {/* Floating Stamps - Left and Right */}
      {stamps.map((stamp, i) => (
        <motion.div
          key={i}
          className={`hidden lg:block absolute ${stamp.position} ${stamp.size} h-auto z-[100] pointer-events-none`}
          initial={{ opacity: 0, y: 30, rotate: stamp.rotate - 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: stamp.rotate }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          style={{
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${stamp.floatDelay}s`,
          }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: stamp.floatDelay,
            }}
          >
            <Image
              src={stamp.src}
              alt={stamp.alt}
              width={stamp.imgSize}
              height={Math.round(stamp.imgSize * 1.25)}
              className="drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.4))",
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#6366f1] font-bold mb-3">
            By The Numbers
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
            The Stats Don&apos;t Lie
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Card */}
              <div
                className="relative p-6 sm:p-8 rounded-2xl text-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)",
                  border: `2px solid ${stat.color}30`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <stat.Icon />
                </div>

                {/* Value */}
                <p
                  className="text-4xl sm:text-5xl font-black mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>

                {/* Label */}
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${stat.color}10 50%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
