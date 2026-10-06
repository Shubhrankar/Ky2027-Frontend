"use client";

import { memo } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

interface RotatingMandalaProps {
  isAnimating: boolean;
  shouldAnimate: boolean;
}

export const RotatingMandala = memo(function RotatingMandala({
  isAnimating,
  shouldAnimate,
}: RotatingMandalaProps) {
  return (
    <div
      className="pointer-events-none absolute top-[12%] left-1/2 hidden h-[380px] w-[380px] -translate-x-1/2 opacity-35 sm:block md:h-[480px] md:w-[480px] lg:h-[550px] lg:w-[550px]"
      style={{ zIndex: 5 }}
    >
      <Image
        src={IMAGES.vibes.mandala}
        alt=""
        fill
        className="object-contain"
        style={{
          animation: "spin 40s linear infinite",
          animationPlayState: shouldAnimate && isAnimating ? "running" : "paused",
          filter: "drop-shadow(0 0 30px rgba(255,180,50,0.35))",
        }}
      />
    </div>
  );
});
