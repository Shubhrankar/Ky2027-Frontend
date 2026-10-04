"use client";

import { PassesSection } from "@/components/pages/home/sections";
import { NavbarDesign as Navbar } from "@/components/navbar/Design";

export function PassesPageContent() {
  return (
    <main className="min-h-screen">
      {/* Fixed navbar - always visible on passes page */}
      <div className="fixed inset-x-0 top-0 z-[200]">
        <Navbar position="relative" topOffset={18} />
      </div>

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-24 sm:pt-28">
        <PassesSection />
      </div>
    </main>
  );
}
