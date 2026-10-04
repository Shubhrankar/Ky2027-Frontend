"use client";

import { NavbarDesign as Navbar } from "@/components/navbar/Design";
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
        <Navbar position="relative" topOffset={18} />
      </div>

      <main
        className="relative min-h-[100dvh] pt-24 pb-6 text-white sm:pt-28 lg:h-[100dvh] lg:overflow-hidden lg:p-0"
        style={{
          background: "radial-gradient(ellipse at 60% 55%, #121735 0%, #0a0c1d 55%, #06070f 100%)",
        }}
      >
        <EventSearch className="z-30 mx-4 lg:absolute lg:top-[100px] lg:left-1/2 lg:mx-0 lg:w-full lg:max-w-xl lg:-translate-x-1/2" />

        {/* Whole map in one frame, as large as the free area allows (centred on wide screens) */}
        <div className="mt-4 flex flex-col items-center lg:absolute lg:top-[150px] lg:right-6 lg:bottom-[34px] lg:left-[310px] lg:mt-0 lg:justify-center 2xl:right-[310px]">
          <CampusMap
            hoverZoom
            edgeFade
            showControls={false}
            className="w-full lg:w-[min(100%,calc((100dvh_-_184px)*1.064))]"
          />
        </div>

        <p className="mt-2 text-center font-[family-name:var(--font-cormorant)] text-[13px] font-semibold tracking-[0.25em] text-[#efe4cc]/70 uppercase lg:absolute lg:right-6 lg:bottom-2 lg:left-[310px] lg:mt-0 2xl:right-[310px]">
          <span className="hidden sm:inline">Hover a venue to fly to it · Click to walk in</span>
          <span className="sm:hidden">Tap a venue to walk in</span>
        </p>

        <WhatsOnSidebar className="mx-4 mt-6 h-[460px] lg:absolute lg:top-[150px] lg:bottom-4 lg:left-6 lg:mx-0 lg:mt-0 lg:h-auto lg:w-[272px]" />
      </main>
    </>
  );
}
