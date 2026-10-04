"use client";

import { memo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { useNavbar } from "../config/NavbarContext";

/**
 * Light Theme Mobile Navbar - Golden/cream style
 * Visible on mobile (sm:hidden)
 */
export const NavbarMobileLight = memo(function NavbarMobileLight() {
  const [open, setOpen] = useState(false);
  const { isActive, isSessionLoading, isAuthenticated, user, userInitials, allLinks } = useNavbar();

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
            background: "linear-gradient(90deg, #8a5a1a, #d4a853)",
            transform: open ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block h-[3px] w-6 rounded-full transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, #8a5a1a, #d4a853)",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block h-[3px] w-6 rounded-full transition-transform duration-300"
          style={{
            background: "linear-gradient(90deg, #8a5a1a, #d4a853)",
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
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(245,222,164,0.98) 0%, rgba(214,176,110,0.98) 45%, rgba(168,124,64,0.98) 100%)",
          border: "2px solid rgba(255,215,0,0.55)",
          boxShadow:
            "0 14px 34px rgba(0,0,0,0.55), inset 0 0 24px rgba(120,72,20,0.4), inset 0 0 2px rgba(255,240,200,0.6)",
          willChange: "transform, opacity",
        }}
      >
        {/* Mottled parchment texture */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
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
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%235a3410' stroke-width='1'%3E%3Ccircle cx='100' cy='100' r='96'/%3E%3Ccircle cx='100' cy='100' r='78'/%3E%3Ccircle cx='100' cy='100' r='54'/%3E%3Ccircle cx='100' cy='100' r='30'/%3E%3Cg%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(45 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(90 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(135 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(180 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(225 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(270 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3Cg transform='rotate(315 100 100)'%3E%3Cpath d='M100 4 L108 30 L100 22 L92 30 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            willChange: "transform",
          }}
        />

        {/* Second mystical mandala - bottom right (different design) */}
        <span
          aria-hidden
          className="naksha-mandala pointer-events-none absolute -right-8 -bottom-8"
          style={{
            width: "45%",
            aspectRatio: "1",
            opacity: 0.12,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%235a3410' stroke-width='0.8'%3E%3Ccircle cx='100' cy='100' r='95'/%3E%3Ccircle cx='100' cy='100' r='80'/%3E%3Ccircle cx='100' cy='100' r='65'/%3E%3Ccircle cx='100' cy='100' r='50'/%3E%3Ccircle cx='100' cy='100' r='35'/%3E%3Ccircle cx='100' cy='100' r='20'/%3E%3C!-- 12-point lotus pattern --%3E%3Cg%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(30 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(60 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(90 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(120 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(150 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(180 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(210 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(240 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(270 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(300 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3Cg transform='rotate(330 100 100)'%3E%3Cellipse cx='100' cy='20' rx='8' ry='20' fill='%235a3410' fill-opacity='0.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Inner ornamental frame */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[6px] rounded-[10px]"
          style={{ border: "1px solid rgba(122,61,16,0.5)" }}
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
              background: "linear-gradient(135deg, #FFD700, #B8860B)",
              boxShadow: "0 0 6px rgba(255,215,0,0.7)",
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
            <div className="mb-2 flex items-center gap-3 border-b border-[#8a5a1a]/30 pb-3">
              <div
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#d4a853]"
                style={{
                  background: user.image
                    ? "transparent"
                    : "linear-gradient(135deg, #d4a853 0%, #8b6914 100%)",
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
                  <span className="text-sm font-bold" style={{ color: "#1a0a05" }}>
                    {userInitials}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold" style={{ color: "#3a1505" }}>
                  {user.name}
                </p>
                <p className="truncate text-xs" style={{ color: "#6b3f14" }}>
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
                  background: "linear-gradient(135deg, #FFF3C4, #FFD700 45%, #B8860B)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 4px rgba(255,215,0,0.6))",
                }}
              >
                ॐ
              </span>
              <span
                className="mt-1 text-[10px] tracking-[0.4em] uppercase"
                style={{ color: "#6b3f14", fontWeight: 900 }}
              >
                नक्शा
              </span>
              <span
                aria-hidden
                className="mt-1.5 flex w-full items-center justify-center gap-2 text-[#8a5a1a] opacity-80"
              >
                <span
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }}
                />
                <span className="text-[9px]">✦</span>
                <span
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }}
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
                    color: active ? "#3a1505" : "#3d1e0a",
                    background: active
                      ? "linear-gradient(135deg, rgba(255,215,0,0.7) 0%, rgba(255,230,100,0.8) 50%, rgba(255,215,0,0.7) 100%)"
                      : "transparent",
                    boxShadow: active
                      ? "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,180,0,0.5), inset 0 0 15px rgba(255,255,200,0.6)"
                      : "none",
                    textShadow: active
                      ? "0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.8)"
                      : "0 1px 1px rgba(255,245,215,0.6)",
                    border: active ? "1px solid rgba(255,230,100,0.9)" : "1px solid transparent",
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
                      color: active ? "#FFD700" : "#b8860b",
                      filter: active ? "drop-shadow(0 0 4px rgba(255,215,0,0.9))" : "none",
                    }}
                  >
                    {active ? "✦" : "◆"}
                  </span>
                  {isLoginLink && isSessionLoading ? <Spinner className="size-4" /> : link.label}
                  <span
                    aria-hidden
                    className="text-[9px]"
                    style={{
                      color: active ? "#FFD700" : "#b8860b",
                      filter: active ? "drop-shadow(0 0 4px rgba(255,215,0,0.9))" : "none",
                    }}
                  >
                    {active ? "✦" : "◆"}
                  </span>
                </Link>
                {/* mystical divider between items */}
                {i < arr.length - 1 && (
                  <span
                    aria-hidden
                    className="flex items-center justify-center gap-2 py-0.5 text-[#8a5a1a] opacity-60"
                  >
                    <span
                      className="h-px w-8"
                      style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }}
                    />
                    <span className="text-[9px]">✦</span>
                    <span
                      className="h-px w-8"
                      style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }}
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
                className="flex items-center justify-center gap-2 py-0.5 text-[#8a5a1a] opacity-60"
              >
                <span
                  className="h-px w-8"
                  style={{ background: "linear-gradient(90deg, transparent, #8a5a1a)" }}
                />
                <span className="text-[9px]">✦</span>
                <span
                  className="h-px w-8"
                  style={{ background: "linear-gradient(90deg, #8a5a1a, transparent)" }}
                />
              </span>
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="naksha-link naksha-item flex items-center justify-center gap-2 rounded-md px-3 py-2 text-center text-[15px] tracking-[0.18em] uppercase transition-all duration-300"
                style={{
                  fontWeight: 900,
                  color: isActive("/profile") ? "#3a1505" : "#3d1e0a",
                  background: isActive("/profile")
                    ? "linear-gradient(135deg, rgba(255,215,0,0.7) 0%, rgba(255,230,100,0.8) 50%, rgba(255,215,0,0.7) 100%)"
                    : "transparent",
                  boxShadow: isActive("/profile")
                    ? "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,180,0,0.5), inset 0 0 15px rgba(255,255,200,0.6)"
                    : "none",
                  textShadow: isActive("/profile")
                    ? "0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(255,180,0,0.6), 0 1px 1px rgba(255,245,215,0.8)"
                    : "0 1px 1px rgba(255,245,215,0.6)",
                  border: isActive("/profile")
                    ? "1px solid rgba(255,230,100,0.9)"
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
                    color: isActive("/profile") ? "#FFD700" : "#b8860b",
                    filter: isActive("/profile")
                      ? "drop-shadow(0 0 4px rgba(255,215,0,0.9))"
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
                    color: isActive("/profile") ? "#FFD700" : "#b8860b",
                    filter: isActive("/profile")
                      ? "drop-shadow(0 0 4px rgba(255,215,0,0.9))"
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
