import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { NavbarTheme, THEME_CONFIG } from "./index";

/**
 * Theme-aware IIT BHU Badge with dynamic glow
 * Main theme has larger badge positioned more to the left
 */

// Theme-specific badge positioning and sizing
const BADGE_STYLES = {
  main: {
    // Larger badge, more to the left to match the ornate frame
    position: "left-[15.7%] top-[65%]",
    size: "h-[145%] sm:h-[190%]",
  },
  about: {
    position: "left-[16%] top-[52%]",
    size: "h-[116%] sm:h-[195%]",
  },
  sponsor: {
    position: "left-[16%] top-[52%]",
    size: "h-[116%] sm:h-[186%]",
  },
};

export function NavBadgeLight({ theme = "main" }: { theme?: NavbarTheme }) {
  const config = THEME_CONFIG[theme];
  const badgeStyle = BADGE_STYLES[theme];

  return (
    <Link
      href="/"
      aria-label="Kashi Yatra — Home"
      className={`absolute ${badgeStyle.position} z-10 aspect-square ${badgeStyle.size} -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-105`}
    >
      {/* Outer soft halo */}
      <span
        aria-hidden
        className="badge-aura-outer pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "78%",
          height: "78%",
          background: config.badgeGlow.outer,
          filter: "blur(14px)",
        }}
      />
      {/* Inner bright core glow */}
      <span
        aria-hidden
        className="badge-aura-inner pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "58%",
          height: "58%",
          background: config.badgeGlow.inner,
          filter: "blur(8px)",
        }}
      />
      <Image
        src={config.getBadge()}
        alt="IIT BHU"
        fill
        priority
        sizes="120px"
        className="relative object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      />
    </Link>
  );
}
