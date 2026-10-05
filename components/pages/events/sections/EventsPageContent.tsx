"use client";

import { memo } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { EVENT_CATEGORIES } from "@/components/pages/events/config/events.config";
import { COLORS, JAZZ_COLORS } from "@/components/pages/home/constants/palette";
import { LightNavbar } from "@/components/navbar/Navbar";

// ═══════════════════════════════════════════════════════════════════
// CATEGORY CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════
const CategoryCard = memo(function CategoryCard({
  category,
  index,
}: {
  category: (typeof EVENT_CATEGORIES)[0];
  index: number;
}) {
  return (
    <Link
      href={`/events/${category.slug}`}
      className="group relative block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card Container */}
      <div
        className="relative h-[320px] overflow-hidden rounded-2xl transition-all duration-500 sm:h-[380px] sm:group-hover:-translate-y-2 sm:group-hover:scale-[1.03]"
        style={{
          background: `linear-gradient(180deg, 
            ${category.color}15 0%, 
            ${JAZZ_COLORS.BG_DEEP} 30%,
            ${JAZZ_COLORS.BG_ROYAL} 70%,
            ${category.color}20 100%
          )`,
          border: `2px solid ${category.color}40`,
          boxShadow: `0 10px 40px rgba(0,0,0,0.4), inset 0 1px 0 ${category.color}20`,
        }}
      >
        {/* Ornate top border */}
        <div
          className="absolute top-0 right-0 left-0 h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
          }}
        />

        {/* Glow effect on hover - desktop only */}
        <div
          className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:block"
          style={{
            background: `radial-gradient(ellipse at center, ${category.color}20 0%, transparent 70%)`,
          }}
        />

        {/* Icon/Emoji placeholder - will be replaced with images */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[150px]">{category.icon}</span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          {/* Category name */}
          <h3
            className="mb-2 text-2xl font-black italic sm:text-3xl"
            style={{
              fontFamily: "Georgia, serif",
              color: COLORS.CREAM,
              textShadow: `0 2px 10px rgba(0,0,0,0.5), 0 0 30px ${category.color}50`,
            }}
          >
            {category.name}
          </h3>

          {/* Tagline */}
          <p
            className="line-clamp-2 text-sm opacity-80 sm:text-base"
            style={{ color: category.color }}
          >
            {category.tagline}
          </p>

          {/* Event count badge */}
          <div
            className="mt-3 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              background: `${category.color}20`,
              border: `1px solid ${category.color}40`,
              color: category.color,
            }}
          >
            <span>{category.subEvents.length} Events</span>
            <svg
              className="h-3 w-3 transition-transform sm:group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Ornate corner accents */}
        <div
          className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2"
          style={{ borderColor: `${category.color}50` }}
        />
        <div
          className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2"
          style={{ borderColor: `${category.color}50` }}
        />
        <div
          className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2"
          style={{ borderColor: `${category.color}50` }}
        />
        <div
          className="absolute right-3 bottom-3 h-6 w-6 border-r-2 border-b-2"
          style={{ borderColor: `${category.color}50` }}
        />
      </div>
    </Link>
  );
});

// ═══════════════════════════════════════════════════════════════════
// PAGE TITLE COMPONENT
// ═══════════════════════════════════════════════════════════════════
const PageTitle = memo(function PageTitle() {
  return (
    <div className="mb-12 text-center sm:mb-16">
      {/* Decorative line */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <div
          className="h-px w-16 sm:w-24"
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.BRIGHT_GOLD})`,
          }}
        />
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase sm:text-sm"
          style={{ color: COLORS.BRIGHT_GOLD }}
        >
          Kashi Yatra 2027
        </span>
        <div
          className="h-px w-16 sm:w-24"
          style={{
            background: `linear-gradient(90deg, ${COLORS.BRIGHT_GOLD}, transparent)`,
          }}
        />
      </div>

      {/* Main title */}
      <h1
        className="mb-4 text-4xl font-black italic sm:text-5xl md:text-6xl"
        style={{
          fontFamily: "Georgia, serif",
          background: `linear-gradient(135deg, ${COLORS.CREAM} 0%, ${COLORS.BRIGHT_GOLD} 50%, ${COLORS.CREAM} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Competitions
      </h1>

      {/* Subtitle */}
      <p
        className="mx-auto max-w-2xl text-base sm:text-lg"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        Nine spectacular categories. Countless opportunities to shine.
        <br className="hidden sm:block" />
        Find your stage and let your talent speak.
      </p>

      {/* Download Rulebook Button */}
      <div className="mt-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            toast.info("PDF will be available soon!");
          }}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${JAZZ_COLORS.HOT_PINK}80 0%, ${JAZZ_COLORS.ROYAL_PURPLE}80 100%)`,
            color: COLORS.CREAM,
            border: `1px solid ${JAZZ_COLORS.HOT_PINK}50`,
            boxShadow: `0 4px 20px ${JAZZ_COLORS.HOT_PINK}30`,
          }}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Rulebook
        </button>
      </div>
    </div>
  );
});

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE CONTENT
// ═══════════════════════════════════════════════════════════════════
export function EventsPageContent() {
  return (
    <>
      {/* Fixed navbar - always visible */}
      <div className="fixed inset-x-0 top-0 z-[200]">
        <LightNavbar position="relative" topOffset={18} theme="main" />
      </div>

      <main
        className="min-h-screen px-4 pt-28 pb-20 sm:px-6 sm:pt-32"
        style={{
          background: `linear-gradient(180deg, 
            ${JAZZ_COLORS.BG_DEEP} 0%, 
            ${JAZZ_COLORS.BG_ROYAL} 20%,
            ${JAZZ_COLORS.BG_WINE} 50%,
            ${JAZZ_COLORS.BG_ROYAL} 80%,
            ${JAZZ_COLORS.BG_DEEP} 100%
          )`,
        }}
      >
        {/* Background decorative elements */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 30%, ${JAZZ_COLORS.HOT_PINK} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${JAZZ_COLORS.ROYAL_PURPLE} 0%, transparent 50%)
          `,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <PageTitle />

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {EVENT_CATEGORIES.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-16 text-center sm:mt-20">
            <div
              className="inline-block rounded-full px-6 py-3 text-sm"
              style={{
                background: `${COLORS.BRIGHT_GOLD}10`,
                border: `1px solid ${COLORS.BRIGHT_GOLD}30`,
                color: COLORS.BRIGHT_GOLD,
              }}
            >
              Click on any category to explore events
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
