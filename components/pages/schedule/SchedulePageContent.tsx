"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Calendar, Users, Ticket, Info, Mail, Compass } from "lucide-react";
import { CampusMap, EventSearchOverlay, WhatsOnSidebar } from "./sections";

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE CONTENT
// Events map (Thomso-style): minimal floating menu, "What's On" feed on the
// left and the whole animated IIT (BHU) campus map filling the screen.
// Hovering a venue flies to it; clicking opens the venue's page.
// ═══════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/sponsors", label: "Sponsors", icon: Users },
  { href: "/passes", label: "Passes", icon: Ticket },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function SchedulePageContent() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Navigation trigger - ethereal glowing button (desktop only) */}
      <div
        className="fixed top-4 left-4 z-[250] hidden lg:block"
        onMouseEnter={() => setNavOpen(true)}
        onMouseLeave={() => setNavOpen(false)}
      >
        {/* Main ethereal button */}
        <div
          className="relative cursor-pointer"
          style={{
            filter: navOpen ? "none" : "drop-shadow(0 0 20px rgba(212, 168, 83, 0.4))",
          }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-1 rounded-xl opacity-60 blur-sm transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, rgba(212, 168, 83, 0.5) 0%, rgba(180, 140, 60, 0.3) 50%, rgba(212, 168, 83, 0.5) 100%)`,
              animation: navOpen ? "none" : "pulseGlow 2s ease-in-out infinite",
            }}
          />

          {/* Button body */}
          <div
            className="relative flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300"
            style={{
              background: `linear-gradient(145deg, rgba(20, 15, 35, 0.95) 0%, rgba(30, 22, 45, 0.98) 100%)`,
              borderColor: navOpen ? "rgba(212, 168, 83, 0.6)" : "rgba(212, 168, 83, 0.3)",
              boxShadow: navOpen
                ? "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <Compass
              className="h-5 w-5 transition-all duration-300"
              style={{
                color: "#D4A853",
                filter: "drop-shadow(0 0 4px rgba(212, 168, 83, 0.5))",
                transform: navOpen ? "rotate(45deg)" : "rotate(0deg)",
              }}
            />
            <span
              className="font-[family-name:var(--font-cormorant)] text-base font-semibold tracking-wide"
              style={{ color: "#f0e6d0" }}
            >
              Navigate
            </span>
          </div>
        </div>

        {/* Dropdown nav menu - ethereal style */}
        <nav
          className="absolute top-full left-0 mt-3 flex flex-col gap-2 overflow-hidden transition-all duration-300"
          style={{
            opacity: navOpen ? 1 : 0,
            transform: navOpen ? "translateY(0)" : "translateY(-10px)",
            pointerEvents: navOpen ? "auto" : "none",
            width: "220px",
          }}
        >
          {NAV_LINKS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  background: `linear-gradient(145deg, rgba(20, 15, 35, 0.92) 0%, rgba(30, 22, 45, 0.95) 100%)`,
                  border: "1px solid rgba(212, 168, 83, 0.25)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 168, 83, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 25px rgba(0,0,0,0.4), 0 0 20px rgba(212, 168, 83, 0.15), inset 0 1px 0 rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 168, 83, 0.25)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)";
                }}
              >
                {/* Subtle glow overlay on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 50%, rgba(212, 168, 83, 0.08) 0%, transparent 70%)",
                  }}
                />
                <Icon
                  className="relative h-4 w-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: "rgba(212, 168, 83, 0.6)",
                    filter: "drop-shadow(0 0 2px rgba(212, 168, 83, 0.3))",
                  }}
                />
                <span
                  className="relative transition-colors duration-300"
                  style={{ color: "rgba(240, 230, 208, 0.85)" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* What's On Sidebar - blurs when nav is open */}
      <div
        className="fixed top-24 bottom-4 left-4 z-[200] hidden w-[240px] transition-all duration-300 lg:block"
        style={{
          filter: navOpen ? "blur(4px)" : "none",
          opacity: navOpen ? 0.5 : 1,
        }}
      >
        <WhatsOnSidebar className="h-full" />
      </div>

      {/* Mobile: Simple floating logo */}
      <Link
        href="/"
        className="fixed top-3 left-3 z-[200] flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A853]/30 bg-[#10132a]/90 shadow-lg backdrop-blur-md lg:hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/favicon.ico" alt="Kashi Yatra" className="h-6 w-6 object-contain" />
      </Link>

      {/* Background - matches map edge colors exactly */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "#0c1220",
        }}
      />

      <main className="relative min-h-[100dvh] text-white lg:h-[100dvh] lg:overflow-hidden">
        {/* Decorative ornate border/frame pattern */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {/* Top edge ornate pattern */}
          <div
            className="absolute top-0 right-0 left-0 h-32 opacity-20"
            style={{
              background: `linear-gradient(180deg, 
                rgba(212, 168, 83, 0.3) 0%, 
                rgba(212, 168, 83, 0.1) 30%,
                transparent 100%
              )`,
              maskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
            }}
          />

          {/* Corner accents - decorative flourishes */}
          <svg
            className="absolute top-20 left-4 h-24 w-24 text-[#D4A853]/10 lg:top-24 lg:left-8 lg:h-32 lg:w-32"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path d="M5 95 Q5 5 95 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M15 95 Q15 15 95 15" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="5" cy="95" r="3" fill="currentColor" />
            <circle cx="95" cy="5" r="3" fill="currentColor" />
            <path
              d="M30 95 C30 60 60 30 95 30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          <svg
            className="absolute top-20 right-4 h-24 w-24 -scale-x-100 text-[#D4A853]/10 lg:top-24 lg:right-8 lg:h-32 lg:w-32"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path d="M5 95 Q5 5 95 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M15 95 Q15 15 95 15" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="5" cy="95" r="3" fill="currentColor" />
            <circle cx="95" cy="5" r="3" fill="currentColor" />
            <path
              d="M30 95 C30 60 60 30 95 30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          <svg
            className="absolute bottom-4 left-4 h-24 w-24 -scale-y-100 text-[#D4A853]/10 lg:bottom-8 lg:left-8 lg:h-32 lg:w-32"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path d="M5 95 Q5 5 95 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M15 95 Q15 15 95 15" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="5" cy="95" r="3" fill="currentColor" />
            <circle cx="95" cy="5" r="3" fill="currentColor" />
            <path
              d="M30 95 C30 60 60 30 95 30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          <svg
            className="absolute right-4 bottom-4 h-24 w-24 scale-x-[-1] scale-y-[-1] text-[#D4A853]/10 lg:right-8 lg:bottom-8 lg:h-32 lg:w-32"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path d="M5 95 Q5 5 95 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M15 95 Q15 15 95 15" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="5" cy="95" r="3" fill="currentColor" />
            <circle cx="95" cy="5" r="3" fill="currentColor" />
            <path
              d="M30 95 C30 60 60 30 95 30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Subtle radial glow behind map area */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 60% 55%, 
                rgba(212, 168, 83, 0.05) 0%, 
                transparent 70%
              )`,
            }}
          />

          {/* Bottom decorative line */}
          <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4A853]/30" />
            <div className="h-2 w-2 rotate-45 border border-[#D4A853]/30" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4A853]/30" />
          </div>
        </div>

        {/* Map fills the entire screen */}
        <div className="absolute inset-0 lg:left-[260px]">
          <CampusMap hoverZoom edgeFade fill onSearchClick={() => setSearchOpen(true)} />
        </div>

        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center font-[family-name:var(--font-cormorant)] text-[12px] font-semibold tracking-[0.2em] text-[#efe4cc]/50 uppercase lg:left-[calc(50%+130px)]">
          <span className="hidden sm:inline">Hover a venue to fly to it · Click to walk in</span>
          <span className="sm:hidden">Tap a venue to walk in</span>
        </p>
      </main>

      {/* Full-screen search overlay */}
      <EventSearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Animations */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }
      `}</style>
    </>
  );
}
