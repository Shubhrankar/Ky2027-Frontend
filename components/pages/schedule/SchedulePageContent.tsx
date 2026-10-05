"use client";

import { LightNavbar } from "@/components/navbar/Navbar";
import { CampusMap, EventSearch, WhatsOnSidebar } from "./sections";

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE CONTENT
// Events map (Thomso-style): search on top, "What's On" feed on the
// left and the whole animated IIT (BHU) campus map in one frame.
// Hovering a venue flies to it; clicking opens the venue's page.
// ═══════════════════════════════════════════════════════════════════
export function SchedulePageContent() {
  return (
    <>
      {/* Fixed navbar - always visible (matches events/passes/about/contact internal pages) */}
      <div className="fixed inset-x-0 top-0 z-[200]">
        <LightNavbar position="relative" topOffset={18} theme="main" />
      </div>

      <main
        className="relative min-h-[100dvh] pt-24 pb-6 text-white sm:pt-28 lg:h-[100dvh] lg:overflow-hidden lg:p-0"
        style={{
          background: "radial-gradient(ellipse at 60% 55%, #121735 0%, #0a0c1d 55%, #06070f 100%)",
        }}
      >
        {/* Blurred map backdrop behind everything (iitbhu-animated-labelled-embedfinal.html) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/schedule-map/campus-night.jpg"
            alt=""
            className="absolute inset-0 h-full w-full scale-125 object-cover blur-[26px] brightness-[.55]"
          />
        </div>

        <EventSearch className="z-30 mx-4 lg:absolute lg:top-[100px] lg:left-1/2 lg:mx-0 lg:w-full lg:max-w-xl lg:-translate-x-1/2" />

        {/* Map stretched across the full width beside the events sidebar, in one frame */}
        <div className="relative mt-4 h-[65dvh] lg:absolute lg:top-[150px] lg:right-0 lg:bottom-[34px] lg:left-[310px] lg:mt-0 lg:h-auto">
          <CampusMap hoverZoom edgeFade fill />
        </div>

        <p className="relative mt-2 text-center font-[family-name:var(--font-cormorant)] text-[13px] font-semibold tracking-[0.25em] text-[#efe4cc]/70 uppercase lg:absolute lg:right-0 lg:bottom-2 lg:left-[310px] lg:mt-0">
          <span className="hidden sm:inline">Hover a venue to fly to it · Click to walk in</span>
          <span className="sm:hidden">Tap a venue to walk in</span>
        </p>

        <WhatsOnSidebar className="relative mx-4 mt-6 h-[460px] lg:absolute lg:top-[150px] lg:bottom-4 lg:left-6 lg:mx-0 lg:mt-0 lg:h-auto lg:w-[272px]" />
      </main>
    </>
  );
}
