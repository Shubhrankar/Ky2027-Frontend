"use client";

import { memo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { useNavbar } from "../config/NavbarContext";
import { NavbarTheme, THEME_CONFIG } from "./index";

/**
 * Theme-aware Mobile Navbar
 * Visible on mobile (sm:hidden)
 */

// Theme-specific mobile menu styles
const MOBILE_THEME_STYLES = {
  main: {
    hamburgerGradient: "linear-gradient(90deg, #8a5a1a, #d4a853)",
    panelBg:
      "radial-gradient(ellipse at 30% 20%, rgba(245,222,164,0.98) 0%, rgba(214,176,110,0.98) 45%, rgba(168,124,64,0.98) 100%)",
    panelBorder: "2px solid rgba(255,215,0,0.55)",
    panelShadow:
      "0 14px 34px rgba(0,0,0,0.55), inset 0 0 24px rgba(120,72,20,0.4), inset 0 0 2px rgba(255,240,200,0.6)",
    textColor: "#3a1505",
    textColorSecondary: "#6b3f14",
    textColorInactive: "#3d1e0a",
    dividerColor: "#8a5a1a",
    accentGold: "#FFD700",
    accentBronze: "#b8860b",
    activeGradient:
      "linear-gradient(135deg, rgba(255,215,0,0.7) 0%, rgba(255,230,100,0.8) 50%, rgba(255,215,0,0.7) 100%)",
    activeShadow:
      "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,180,0,0.5), inset 0 0 15px rgba(255,255,200,0.6)",
    activeTextShadow:
      "0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.8)",
    inactiveTextShadow: "0 1px 1px rgba(255,245,215,0.6)",
    headerGradient: "linear-gradient(135deg, #FFF3C4, #FFD700 45%, #B8860B)",
    mandalaStroke: "%235a3410",
  },
  about: {
    hamburgerGradient: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
    panelBg:
      "radial-gradient(ellipse at 30% 20%, rgba(30,20,50,0.98) 0%, rgba(45,27,78,0.98) 45%, rgba(26,26,46,0.98) 100%)",
    panelBorder: "2px solid rgba(139,92,246,0.6)",
    panelShadow:
      "0 14px 34px rgba(0,0,0,0.7), inset 0 0 24px rgba(139,92,246,0.2), inset 0 0 2px rgba(196,181,253,0.3)",
    textColor: "#e9d5ff",
    textColorSecondary: "#c4b5fd",
    textColorInactive: "#d8b4fe",
    dividerColor: "#8b5cf6",
    accentGold: "#a855f7",
    accentBronze: "#7c3aed",
    activeGradient:
      "linear-gradient(135deg, rgba(139,92,246,0.8) 0%, rgba(168,85,247,0.9) 50%, rgba(139,92,246,0.8) 100%)",
    activeShadow:
      "0 0 25px rgba(139,92,246,0.8), 0 0 50px rgba(168,85,247,0.5), inset 0 0 15px rgba(196,181,253,0.5)",
    activeTextShadow: "0 0 10px rgba(139,92,246,0.9), 0 0 20px rgba(168,85,247,0.7)",
    inactiveTextShadow: "0 1px 2px rgba(0,0,0,0.5)",
    headerGradient: "linear-gradient(135deg, #E9D5FF, #A855F7 45%, #6D28D9)",
    mandalaStroke: "%238b5cf6",
  },
  sponsor: {
    hamburgerGradient: "linear-gradient(90deg, #22c55e, #86efac)",
    panelBg:
      "radial-gradient(ellipse at 30% 20%, rgba(15,35,20,0.98) 0%, rgba(20,50,25,0.98) 45%, rgba(10,30,15,0.98) 100%)",
    panelBorder: "2px solid rgba(74,222,128,0.6)",
    panelShadow:
      "0 14px 34px rgba(0,0,0,0.6), inset 0 0 24px rgba(22,163,74,0.3), inset 0 0 2px rgba(187,247,208,0.3)",
    textColor: "#dcfce7",
    textColorSecondary: "#bbf7d0",
    textColorInactive: "#a7f3d0",
    dividerColor: "#22c55e",
    accentGold: "#4ade80",
    accentBronze: "#16a34a",
    activeGradient:
      "linear-gradient(135deg, rgba(74,222,128,0.8) 0%, rgba(134,239,172,0.9) 50%, rgba(74,222,128,0.8) 100%)",
    activeShadow:
      "0 0 25px rgba(74,222,128,0.8), 0 0 50px rgba(34,197,94,0.5), inset 0 0 15px rgba(187,247,208,0.5)",
    activeTextShadow: "0 0 10px rgba(74,222,128,0.9), 0 0 20px rgba(34,197,94,0.7)",
    inactiveTextShadow: "0 1px 2px rgba(0,0,0,0.5)",
    headerGradient: "linear-gradient(135deg, #DCFCE7, #4ADE80 45%, #166534)",
    mandalaStroke: "%2322c55e",
  },
};

export const NavbarMobileLight = memo(function NavbarMobileLight({
  theme = "main",
}: {
  theme?: NavbarTheme;
}) {
  const [open, setOpen] = useState(false);
  const { isActive, isSessionLoading, isAuthenticated, user, userInitials, allLinks } = useNavbar();
  const styles = MOBILE_THEME_STYLES[theme];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      {/* Backdrop overlay - blocks scroll when menu is open */}
      {open && (
        <div
          className="fixed inset-0 z-[5] bg-black/30"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Hamburger sits on the right of the bar */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="absolute top-[58%] right-[2%] z-20 flex h-8 w-8 -translate-y-1/2 flex-col items-center justify-center gap-1.5"
      >
        <span
          className="block h-[3px] w-6 rounded-full transition-transform duration-300"
          style={{
            background: styles.hamburgerGradient,
            transform: open ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block h-[3px] w-6 rounded-full transition-opacity duration-300"
          style={{
            background: styles.hamburgerGradient,
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block h-[3px] w-6 rounded-full transition-transform duration-300"
          style={{
            background: styles.hamburgerGradient,
            transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`naksha-panel absolute top-[calc(100%+8px)] right-2 left-2 z-10 origin-top transition-all duration-300 ease-out ${
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-0 opacity-0"
        }`}
        style={{
          borderRadius: "14px",
          background: styles.panelBg,
          border: styles.panelBorder,
          boxShadow: styles.panelShadow,
          willChange: "transform, opacity",
        }}
      >
        {/* Mottled texture */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Faint mystical mandala watermark - center */}
        <span
          aria-hidden
          className="naksha-mandala pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]"
          style={{
            width: "78%",
            aspectRatio: "1",
            opacity: 0.14,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='${styles.mandalaStroke}' stroke-width='1'%3E%3Ccircle cx='100' cy='100' r='96'/%3E%3Ccircle cx='100' cy='100' r='78'/%3E%3Ccircle cx='100' cy='100' r='54'/%3E%3Ccircle cx='100' cy='100' r='30'/%3E%3Cg%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(45 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(90 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(135 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(180 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(225 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(270 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(315 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            willChange: "transform",
          }}
        />

        {/* Inner ornamental frame */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[6px] rounded-[10px]"
          style={{ border: `1px solid ${styles.dividerColor}50` }}
        />

        {/* Decorative corner diamonds */}
        {[
          "top-[10px] left-[10px]",
          "top-[10px] right-[10px]",
          "bottom-[10px] left-[10px]",
          "bottom-[10px] right-[10px]",
        ].map((pos) => (
          <span
            key={pos}
            aria-hidden
            className={`absolute ${pos} pointer-events-none h-2 w-2 rotate-45`}
            style={{
              background: `linear-gradient(135deg, ${styles.accentGold}, ${styles.accentBronze})`,
              boxShadow: `0 0 6px ${styles.accentGold}70`,
            }}
          />
        ))}

        <nav
          className="relative flex flex-col gap-1 px-5 pt-3 pb-4"
          aria-label="Mobile"
          style={{ fontFamily: "var(--font-ethereal), serif" }}
        >
          {/* User info header when logged in */}
          {isAuthenticated && user ? (
            <div
              className="mb-2 flex items-center gap-3 border-b pb-3"
              style={{ borderColor: `${styles.dividerColor}30` }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2"
                style={{
                  borderColor: styles.accentGold,
                  background: user.image
                    ? "transparent"
                    : `linear-gradient(135deg, ${styles.accentGold} 0%, ${styles.accentBronze} 100%)`,
                }}
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span
                    className="text-sm font-bold"
                    style={{ color: theme === "main" ? "#1a0a05" : "#fff" }}
                  >
                    {userInitials}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold" style={{ color: styles.textColor }}>
                  {user.name}
                </p>
                <p className="truncate text-xs" style={{ color: styles.textColorSecondary }}>
                  {user.email}
                </p>
              </div>
            </div>
          ) : (
            /* Mystical header — ॐ crowned title */
            <div className="flex flex-col items-center pb-2">
              <span
                className="text-[18px] leading-none"
                style={{
                  background: styles.headerGradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: `drop-shadow(0 0 4px ${styles.accentGold}60)`,
                }}
              >
                ॐ
              </span>
              <span
                className="mt-1 text-[10px] tracking-[0.4em] uppercase"
                style={{ color: styles.textColorSecondary, fontWeight: 900 }}
              >
                नक्शा
              </span>
              <span
                aria-hidden
                className="mt-1.5 flex w-full items-center justify-center gap-2 opacity-80"
                style={{ color: styles.dividerColor }}
              >
                <span
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${styles.dividerColor})`,
                  }}
                />
                <span className="text-[9px]">✦</span>
                <span
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(90deg, ${styles.dividerColor}, transparent)`,
                  }}
                />
              </span>
            </div>
          )}

          {allLinks.map((link, i, arr) => {
            const active = isActive(link.href);
            const isLoginLink = link.label === "LOGIN";
            return (
              <div key={link.label} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="naksha-link naksha-item flex items-center justify-center gap-2 rounded-md px-3 py-2 text-center text-[15px] tracking-[0.18em] uppercase transition-all duration-300"
                  style={{
                    fontWeight: 900,
                    color: active ? styles.textColor : styles.textColorInactive,
                    background: active ? styles.activeGradient : "transparent",
                    boxShadow: active ? styles.activeShadow : "none",
                    textShadow: active ? styles.activeTextShadow : styles.inactiveTextShadow,
                    border: active ? `1px solid ${styles.accentGold}90` : "1px solid transparent",
                    opacity: open ? 1 : 0,
                    transform: open
                      ? active
                        ? "translateY(0) scale(1.02)"
                        : "translateY(0)"
                      : "translateY(-8px)",
                    transitionDelay: open ? `${50 + i * 30}ms` : "0ms",
                  }}
                >
                  <span
                    aria-hidden
                    className="text-[9px]"
                    style={{
                      color: active ? styles.accentGold : styles.accentBronze,
                      filter: active ? `drop-shadow(0 0 4px ${styles.accentGold}90)` : "none",
                    }}
                  >
                    {active ? "✦" : "◆"}
                  </span>
                  {isLoginLink && isSessionLoading ? <Spinner className="size-4" /> : link.label}
                  <span
                    aria-hidden
                    className="text-[9px]"
                    style={{
                      color: active ? styles.accentGold : styles.accentBronze,
                      filter: active ? `drop-shadow(0 0 4px ${styles.accentGold}90)` : "none",
                    }}
                  >
                    {active ? "✦" : "◆"}
                  </span>
                </Link>
                {/* mystical divider between items */}
                {i < arr.length - 1 && (
                  <span
                    aria-hidden
                    className="flex items-center justify-center gap-2 py-0.5 opacity-60"
                    style={{ color: styles.dividerColor }}
                  >
                    <span
                      className="h-px w-8"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${styles.dividerColor})`,
                      }}
                    />
                    <span className="text-[9px]">✦</span>
                    <span
                      className="h-px w-8"
                      style={{
                        background: `linear-gradient(90deg, ${styles.dividerColor}, transparent)`,
                      }}
                    />
                  </span>
                )}
              </div>
            );
          })}

          {/* Profile link when logged in */}
          {isAuthenticated && (
            <>
              <span
                aria-hidden
                className="flex items-center justify-center gap-2 py-0.5 opacity-60"
                style={{ color: styles.dividerColor }}
              >
                <span
                  className="h-px w-8"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${styles.dividerColor})`,
                  }}
                />
                <span className="text-[9px]">✦</span>
                <span
                  className="h-px w-8"
                  style={{
                    background: `linear-gradient(90deg, ${styles.dividerColor}, transparent)`,
                  }}
                />
              </span>
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="naksha-link naksha-item flex items-center justify-center gap-2 rounded-md px-3 py-2 text-center text-[15px] tracking-[0.18em] uppercase transition-all duration-300"
                style={{
                  fontWeight: 900,
                  color: isActive("/profile") ? styles.textColor : styles.textColorInactive,
                  background: isActive("/profile") ? styles.activeGradient : "transparent",
                  boxShadow: isActive("/profile") ? styles.activeShadow : "none",
                  textShadow: isActive("/profile")
                    ? styles.activeTextShadow
                    : styles.inactiveTextShadow,
                  border: isActive("/profile")
                    ? `1px solid ${styles.accentGold}90`
                    : "1px solid transparent",
                  opacity: open ? 1 : 0,
                  transform: open
                    ? isActive("/profile")
                      ? "translateY(0) scale(1.02)"
                      : "translateY(0)"
                    : "translateY(-8px)",
                  transitionDelay: open ? `${50 + allLinks.length * 30}ms` : "0ms",
                }}
              >
                <span
                  aria-hidden
                  className="text-[9px]"
                  style={{
                    color: isActive("/profile") ? styles.accentGold : styles.accentBronze,
                    filter: isActive("/profile")
                      ? `drop-shadow(0 0 4px ${styles.accentGold}90)`
                      : "none",
                  }}
                >
                  {isActive("/profile") ? "✦" : "◆"}
                </span>
                PROFILE
                <span
                  aria-hidden
                  className="text-[9px]"
                  style={{
                    color: isActive("/profile") ? styles.accentGold : styles.accentBronze,
                    filter: isActive("/profile")
                      ? `drop-shadow(0 0 4px ${styles.accentGold}90)`
                      : "none",
                  }}
                >
                  {isActive("/profile") ? "✦" : "◆"}
                </span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
});
