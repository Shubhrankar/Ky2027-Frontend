"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import { CONCERT_COLORS, Artist } from "../constants";
import { EqualizerBars } from "./EqualizerBars";
import { useMotionZone } from "@/lib/motion";

// ═══════════════════════════════════════════════════════════════════
// MYSTERY SILHOUETTE - Animated question mark
// ═══════════════════════════════════════════════════════════════════
const MysterySilhouette = memo(function MysterySilhouette({ 
  accentColor,
  isHeadliner 
}: { 
  accentColor: string;
  isHeadliner: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Pulsing glow rings - desktop only */}
      <div
        className="hidden sm:block absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full"
        style={{
          background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
          animation: "pulseSlow 2s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      />
      
      {/* Glowing question mark */}
      <span
        className={`font-black ${isHeadliner ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}
        style={{
          color: accentColor,
          textShadow: `0 0 20px ${accentColor}, 0 0 40px ${accentColor}80`,
        }}
      >
        ?
      </span>
      
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2" style={{ borderColor: `${accentColor}60` }} />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2" style={{ borderColor: `${accentColor}60` }} />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2" style={{ borderColor: `${accentColor}60` }} />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2" style={{ borderColor: `${accentColor}60` }} />
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// REVEALED ARTIST IMAGE - Shows actual artist photo
// ═══════════════════════════════════════════════════════════════════
const RevealedArtist = memo(function RevealedArtist({
  image,
  name,
  accentColor,
}: {
  image: string;
  name: string;
  accentColor: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(10,5,20,0.9) 0%, rgba(10,5,20,0.3) 40%, transparent 100%)`,
        }}
      />
      {/* Accent glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: `linear-gradient(to top, ${accentColor}30, transparent)`,
        }}
      />
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// HEADLINER CARD - Premium large card
// ═══════════════════════════════════════════════════════════════════
export const HeadlinerCard = memo(function HeadlinerCard({ 
  artist, 
  index 
}: { 
  artist: Artist; 
  index: number;
}) {
  const accentColor = artist.accentColor || CONCERT_COLORS.NEON_GOLD;
  
  return (
    <div className="relative group" style={{ animationDelay: `${index * 0.15}s` }}>
      {/* Border glow - desktop only */}
      <div
        className="hidden sm:block absolute -inset-[2px] rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, ${CONCERT_COLORS.NEON_PURPLE} 50%, ${accentColor} 100%)`,
          filter: "blur(2px)",
        }}
      />
      
      {/* Card */}
      <div
        className="relative overflow-hidden rounded-3xl p-5 sm:p-6"
        style={{
          background: `linear-gradient(160deg, rgba(20,10,40,0.95) 0%, rgba(10,5,20,0.98) 100%)`,
          border: `1px solid ${accentColor}30`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${accentColor}15`,
        }}
      >
        {/* Genre tag */}
        <div className="flex justify-center mb-4">
          <div
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: `${accentColor}20`,
              color: accentColor,
              border: `1px solid ${accentColor}50`,
            }}
          >
            ★ {artist.genre} ★
          </div>
        </div>
        
        {/* Silhouette or Image */}
        <div
          className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${CONCERT_COLORS.STAGE_PURPLE} 0%, ${CONCERT_COLORS.STAGE_DARK} 100%)`,
            border: `2px solid ${accentColor}30`,
          }}
        >
          {artist.isRevealed && artist.image ? (
            <RevealedArtist image={artist.image} name={artist.name} accentColor={accentColor} />
          ) : (
            <MysterySilhouette accentColor={accentColor} isHeadliner={true} />
          )}
        </div>
        
        {/* Name */}
        <h3
          className="text-center text-xl sm:text-2xl font-black tracking-wide mb-3"
          style={{ color: accentColor, textShadow: `0 0 20px ${accentColor}` }}
        >
          {artist.name}
        </h3>
        
        <div className="hidden sm:flex justify-center">
          <EqualizerBars color={accentColor} size="lg" />
        </div>
        
        {!artist.isRevealed && (
          <p className="text-center text-xs mt-3 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
            Reveal Coming Soon
          </p>
        )}
      </div>
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// FEATURING CARD - Simplified with static diamond gradient
// ═══════════════════════════════════════════════════════════════════
export const FeaturingCard = memo(function FeaturingCard({ 
  artist, 
  index 
}: { 
  artist: Artist; 
  index: number;
}) {
  const accentColor = artist.accentColor || CONCERT_COLORS.NEON_PURPLE;

  // Secondary color for gradients
  const secondaryColor = useMemo(() => {
    const colors = [
      CONCERT_COLORS.NEON_PINK,
      CONCERT_COLORS.NEON_CYAN,
      CONCERT_COLORS.NEON_PURPLE,
      CONCERT_COLORS.NEON_GOLD,
    ];
    return colors[(index + 1) % colors.length];
  }, [index]);
  
  return (
    <div 
      className="relative group" 
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Static diamond gradient border */}
      <div
        className="absolute -inset-[2px] rounded-2xl opacity-60 sm:group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, 
            ${accentColor} 0%, 
            ${secondaryColor} 25%, 
            ${CONCERT_COLORS.NEON_GOLD} 50%, 
            ${secondaryColor} 75%, 
            ${accentColor} 100%)`,
          filter: "blur(1px)",
        }}
      />
      
      {/* Main card */}
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-300 sm:group-hover:scale-[1.02]"
        style={{
          background: `linear-gradient(135deg, 
            rgba(15,5,25,0.95) 0%, 
            rgba(25,10,35,0.9) 50%, 
            rgba(10,5,20,0.95) 100%)`,
          border: `2px solid ${accentColor}30`,
          boxShadow: `0 15px 40px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Corner accent cuts */}
        <div 
          className="absolute top-0 left-0 w-4 h-4"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 50%, transparent 50%)`,
            opacity: 0.8,
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-4 h-4"
          style={{
            background: `linear-gradient(-45deg, ${secondaryColor} 50%, transparent 50%)`,
            opacity: 0.8,
          }}
        />
        
        {/* Inner content container */}
        <div className="relative p-3 sm:p-4">
          {/* Artist image with static diamond frame */}
          <div className="relative mx-auto mb-3 w-full aspect-square max-w-[140px]">
            {/* Static diamond gradient glow at 45deg */}
            <div 
              className="absolute -inset-1 rounded-xl opacity-50 sm:group-hover:opacity-90 transition-opacity duration-300"
              style={{
                background: `conic-gradient(from 45deg, ${accentColor}, ${secondaryColor}, ${CONCERT_COLORS.NEON_GOLD}, ${accentColor})`,
                transform: "rotate(45deg)",
                filter: "blur(4px)",
              }}
            />
            
            {/* Image container */}
            <div 
              className="relative w-full h-full rounded-xl overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${CONCERT_COLORS.STAGE_PURPLE} 0%, ${CONCERT_COLORS.STAGE_DARK} 100%)`,
              }}
            >
              {artist.isRevealed && artist.image ? (
                <>
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-300 sm:group-hover:scale-105"
                  />
                  {/* Bottom gradient for text readability */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${CONCERT_COLORS.STAGE_DARK} 0%, transparent 50%)`,
                    }}
                  />
                </>
              ) : (
                <MysterySilhouette accentColor={accentColor} isHeadliner={false} />
              )}
            </div>
          </div>
          
          {/* Artist name only */}
          <h4 
            className="text-center text-sm sm:text-base font-bold tracking-wide transition-all duration-300 sm:group-hover:scale-105"
            style={{ 
              color: "#fff",
              textShadow: `0 0 20px ${accentColor}60`,
            }}
          >
            {artist.name}
          </h4>
        </div>
      </div>
    </div>
  );
});
