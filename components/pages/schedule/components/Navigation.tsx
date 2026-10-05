"use client";

import Link from "next/link";
import { Home, Calendar, Users, Ticket, Info, Mail, Compass } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// NAVIGATION COMPONENT
// Floating ethereal navigation button with dropdown menu
// ═══════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/sponsors", label: "Sponsors", icon: Users },
  { href: "/passes", label: "Passes", icon: Ticket },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

interface NavigationProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Navigation({ isOpen, onOpenChange }: NavigationProps) {
  return (
    <div
      className="fixed top-4 left-4 z-[250] hidden lg:block"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      {/* Main ethereal button */}
      <div
        className="relative cursor-pointer"
        style={{
          filter: isOpen ? "none" : "drop-shadow(0 0 20px rgba(212, 168, 83, 0.4))",
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute -inset-1 rounded-xl opacity-60 blur-sm transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, rgba(212, 168, 83, 0.5) 0%, rgba(180, 140, 60, 0.3) 50%, rgba(212, 168, 83, 0.5) 100%)`,
            animation: isOpen ? "none" : "pulseGlow 2s ease-in-out infinite",
          }}
        />

        {/* Button body */}
        <div
          className="relative flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300"
          style={{
            background: `linear-gradient(145deg, rgba(20, 15, 35, 0.95) 0%, rgba(30, 22, 45, 0.98) 100%)`,
            borderColor: isOpen ? "rgba(212, 168, 83, 0.6)" : "rgba(212, 168, 83, 0.3)",
            boxShadow: isOpen
              ? "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
              : "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <Compass
            className="h-5 w-5 transition-all duration-300"
            style={{
              color: "#D4A853",
              filter: "drop-shadow(0 0 4px rgba(212, 168, 83, 0.5))",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
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
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: isOpen ? "auto" : "none",
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
  );
}
