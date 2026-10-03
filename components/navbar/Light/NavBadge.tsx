import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

/**
 * Light Theme IIT BHU Badge with golden glow
 */
export function NavBadgeLight() {
  return (
    <Link
      href="/"
      aria-label="Kashi Yatra — Home"
      className="absolute left-[16%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-10
                 h-[116%] sm:h-[124%] aspect-square
                 transition-transform duration-300 hover:scale-105"
    >
      {/* Outer soft halo */}
      <span
        aria-hidden
        className="badge-aura-outer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "78%",
          height: "78%",
          background: "radial-gradient(circle, rgba(255,210,90,0.55) 0%, rgba(255,160,50,0.3) 45%, rgba(255,120,30,0) 72%)",
          filter: "blur(14px)",
        }}
      />
      {/* Inner bright core glow */}
      <span
        aria-hidden
        className="badge-aura-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "58%",
          height: "58%",
          background: "radial-gradient(circle, rgba(255,248,220,0.7) 0%, rgba(255,215,0,0.35) 50%, transparent 75%)",
          filter: "blur(8px)",
        }}
      />
      <Image
        src={IMAGES.navbar.badge}
        alt="IIT BHU"
        fill
        priority
        sizes="100px"
        className="relative object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      />
    </Link>
  );
}
