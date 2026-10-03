"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

// ═══════════════════════════════════════════════════════════════════
// SLIDER SECTION - Infinite Marquee Sliders
// ═══════════════════════════════════════════════════════════════════

// Slider 1 images (Left to Right) - Using left1-6 images
const slider1Images = [
  { src: IMAGES.about.slider.left1, alt: "Kashi Yatra moment 1" },
  { src: IMAGES.about.slider.left2, alt: "Kashi Yatra moment 2" },
  { src: IMAGES.about.slider.left3, alt: "Kashi Yatra moment 3" },
  { src: IMAGES.about.slider.left4, alt: "Kashi Yatra moment 4" },
  { src: IMAGES.about.slider.left5, alt: "Kashi Yatra moment 5" },
  { src: IMAGES.about.slider.left6, alt: "Kashi Yatra moment 6" },
  // Duplicate for seamless loop
  { src: IMAGES.about.slider.left1, alt: "Kashi Yatra moment 1" },
  { src: IMAGES.about.slider.left2, alt: "Kashi Yatra moment 2" },
  { src: IMAGES.about.slider.left3, alt: "Kashi Yatra moment 3" },
  { src: IMAGES.about.slider.left4, alt: "Kashi Yatra moment 4" },
  { src: IMAGES.about.slider.left5, alt: "Kashi Yatra moment 5" },
  { src: IMAGES.about.slider.left6, alt: "Kashi Yatra moment 6" },
];

// Slider 2 images (Right to Left) - Using right1-6 images
const slider2Images = [
  { src: IMAGES.about.slider.right1, alt: "Festival highlight 1" },
  { src: IMAGES.about.slider.right2, alt: "Festival highlight 2" },
  { src: IMAGES.about.slider.right3, alt: "Festival highlight 3" },
  { src: IMAGES.about.slider.right4, alt: "Festival highlight 4" },
  { src: IMAGES.about.slider.right5, alt: "Festival highlight 5" },
  { src: IMAGES.about.slider.right6, alt: "Festival highlight 6" },
  // Duplicate for seamless loop
  { src: IMAGES.about.slider.right1, alt: "Festival highlight 1" },
  { src: IMAGES.about.slider.right2, alt: "Festival highlight 2" },
  { src: IMAGES.about.slider.right3, alt: "Festival highlight 3" },
  { src: IMAGES.about.slider.right4, alt: "Festival highlight 4" },
  { src: IMAGES.about.slider.right5, alt: "Festival highlight 5" },
  { src: IMAGES.about.slider.right6, alt: "Festival highlight 6" },
];

// Marquee component
const Marquee = ({ 
  images, 
  direction = "left",
  speed = 30,
}: { 
  images: { src: string; alt: string }[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#08080c] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#08080c] to-transparent pointer-events-none" />
      
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-64 h-44 sm:w-80 sm:h-56 rounded-2xl overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)",
              border: "2px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            {/* Hover glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
              }}
            />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const EssenceSection = memo(function EssenceSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, #6366f120 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#6366f1] font-bold mb-3">
          The Experience
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase">
          Feel The <span className="text-[#6366f1]">Energy</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-xl mx-auto">
          Three days of non-stop music, dance, art, and unforgettable moments
        </p>
      </motion.div>

      {/* Slider 1 - Left to Right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Marquee images={slider1Images} direction="left" speed={35} />
      </motion.div>

      {/* Slider 2 - Right to Left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Marquee images={slider2Images} direction="right" speed={40} />
      </motion.div>
    </section>
  );
});
