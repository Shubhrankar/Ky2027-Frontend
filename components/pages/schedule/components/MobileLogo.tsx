"use client";

import Link from "next/link";

// ═══════════════════════════════════════════════════════════════════
// MOBILE LOGO
// Floating logo button for mobile view - links to home
// ═══════════════════════════════════════════════════════════════════

export function MobileLogo() {
  return (
    <Link
      href="/"
      className="fixed top-3 left-3 z-[200] flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A853]/30 bg-[#10132a]/90 shadow-lg backdrop-blur-md lg:hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/favicon.ico" alt="Kashi Yatra" className="h-6 w-6 object-contain" />
    </Link>
  );
}
