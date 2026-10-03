"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks";
import { MotionZone, useMotionZone } from "@/lib/motion";
import { FOOTER_COLORS, FOOTER_GRADIENTS } from "./common/constants";
import { BackgroundDecor, AmbientGlow } from "./common/BackgroundDecorNew";
import {
  ConcertBrandHeader,
  GlassmorphismCard,
  NeonSocialButton,
  FloatingStickers,
} from "./common/GenZComponents";
import { socialLinks, quickLinks } from "./common/data";

// ═══════════════════════════════════════════════════════════════════
// MAIN FOOTER SECTION
// ═══════════════════════════════════════════════════════════════════
export function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <MotionZone threshold={0.05} rootMargin="100px">
      {/* Outer wrapper with solid background to prevent sticky section bleed-through */}
      <div 
        className="relative"
        style={{ 
          backgroundColor: "#030308",
          // Ensure this creates a proper stacking context and covers sticky elements
          isolation: "isolate",
        }}
      >
        <footer
          id="footer"
          ref={footerRef}
          data-section="footer"
          className="relative pt-20 sm:pt-28 pb-10 sm:pb-12 overflow-hidden"
          style={{ 
            background: FOOTER_GRADIENTS.BG_MAIN,
          }}
        >
        {/* ═══ Background Effects ═══ */}
        <BackgroundDecor />

        {/* ═══ Main Content ═══ */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Brand Header */}
          <ConcertBrandHeader />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-4xl mx-auto">
            
            {/* Explore Card */}
            <GlassmorphismCard accentColor={FOOTER_COLORS.NEON_CYAN}>
              <h4 
                className="text-lg font-bold mb-4 tracking-wider"
                style={{ color: FOOTER_COLORS.NEON_CYAN }}
              >
                EXPLORE
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: FOOTER_COLORS.TEXT_SECONDARY }}
                      whileHover={{ 
                        x: 5,
                        color: FOOTER_COLORS.NEON_CYAN,
                      }}
                    >
                      <span className="text-base">{link.icon}</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </GlassmorphismCard>

            {/* Connect Card */}
            <GlassmorphismCard accentColor={FOOTER_COLORS.NEON_PINK}>
              <h4 
                className="text-lg font-bold mb-4 tracking-wider"
                style={{ color: FOOTER_COLORS.NEON_PINK }}
              >
                CONNECT
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: FOOTER_COLORS.TEXT_SECONDARY }}>
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a 
                    href="mailto:contact@kashiyatra.in"
                    className="hover:underline transition-colors"
                    style={{ color: FOOTER_COLORS.TEXT_SECONDARY }}
                    onMouseEnter={(e) => e.currentTarget.style.color = FOOTER_COLORS.NEON_PINK}
                    onMouseLeave={(e) => e.currentTarget.style.color = FOOTER_COLORS.TEXT_SECONDARY}
                  >
                    contact@kashiyatra.in
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>IIT BHU, Varanasi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📅</span>
                  <span>January 14-17, 2027</span>
                </li>
              </ul>
            </GlassmorphismCard>

            {/* Follow Card */}
            <GlassmorphismCard accentColor={FOOTER_COLORS.NEON_PURPLE}>
              <h4 
                className="text-lg font-bold mb-4 tracking-wider"
                style={{ color: FOOTER_COLORS.NEON_PURPLE }}
              >
                FOLLOW
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link) => (
                  <NeonSocialButton
                    key={link.name}
                    href={link.href}
                    icon={link.icon}
                    color={link.color}
                    label={link.name}
                  />
                ))}
              </div>
            </GlassmorphismCard>
          </div>

          {/* Neon Divider */}
          <div 
            className="h-[2px] max-w-2xl mx-auto"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                ${FOOTER_COLORS.NEON_CYAN}60 25%, 
                ${FOOTER_COLORS.NEON_PINK}80 50%, 
                ${FOOTER_COLORS.NEON_PURPLE}60 75%, 
                transparent 100%
              )`,
            }}
          />
        </div>

        {/* ═══ Ambient Glows ═══ */}
        <AmbientGlow />
      </footer>
      </div>
    </MotionZone>
  );
}
