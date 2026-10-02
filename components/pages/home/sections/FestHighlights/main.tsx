"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MerchIcon, FoodIcon, AccommodationIcon, CulturalAccessIcon } from "./icons";
import { IMAGES } from "@/lib/images";
import { MotionZone } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks";

const highlights = [
  {
    icon: MerchIcon,
    title: "Exclusive Merch",
    desc: "Premium hoodies & festival gear",
  },
  { 
    icon: FoodIcon, 
    title: "Delicious Food", 
    desc: "Authentic Banarasi cuisine & snacks" 
  },
  { 
    icon: AccommodationIcon, 
    title: "Accommodation", 
    desc: "Comfortable stay on IIT BHU campus" 
  },
  {
    icon: CulturalAccessIcon,
    title: "Cultural Access",
    desc: "Entry to all events & pro-shows",
  },
];

// Inner component that can access MotionZone context
function FestHighlightsContent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    // Skip animations on mobile for performance
    if (typeof window !== "undefined" && window.innerWidth < 640) return;

    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Highlight cards stagger
      const cards = contentRef.current?.querySelectorAll(".highlight-card");
      gsap.fromTo(
        cards || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[auto] sm:min-h-screen py-6 pt-44 sm:py-12 sm:pt-26 overflow-hidden"
    >
      {/* Animated background with Ken Burns effect */}
      <div
        className="absolute inset-0 motion-safe:animate-ken-burns"
        style={{
          backgroundImage: `url(${IMAGES.highlights.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* CONTENT - Centered on desktop */}
      <div className="relative z-10 min-h-[auto] sm:min-h-[45vh]flex items-start sm:items-center pt-0 sm:pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center lg:justify-center">
            <div
              ref={contentRef}
              className="w-full lg:w-[55%] xl:w-[50%] text-center lg:text-center"
            >
              {/* Royal top ornament */}
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <span
                  className="h-[1px] w-12 sm:w-20"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.6))" }}
                />
                <span className="text-lg sm:text-xl" style={{ color: "#FFD700" }}>༺ ✦ ༻</span>
                <span
                  className="h-[1px] w-12 sm:w-20"
                  style={{ background: "linear-gradient(90deg, rgba(255,215,0,0.6), transparent)" }}
                />
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4"
                style={{
                  textShadow: "0 0 30px rgba(255,215,0,0.5)",
                  fontFamily: "'Cinzel Decorative', serif",
                }}
              >
                <span style={{ color: "#FFD700" }}>The Grand </span>
                <span style={{ color: "#FF4500" }}>Cultural Fest</span>
              </h2>

              {/* Subtitle */}
              <p
                className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-5"
                style={{ color: "#FF6B00", fontWeight: 600 }}
              >
                ॥ What Awaits You ॥
              </p>

              <p
                className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 opacity-90 max-w-xl mx-auto"
                style={{ color: "#FDF6E3", lineHeight: "1.8" }}
              >
                Experience four electrifying days of music, dance, and unforgettable moments. 
                From exclusive merchandise to authentic Banarasi flavors — we&apos;ve got everything 
                to make your Kashi Yatra truly memorable.
              </p>

              {/* Highlight Cards - Royal ornate design - All 4 on all screens */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="highlight-card relative p-3 sm:p-5 rounded-xl transition-all duration-300 sm:hover:scale-[1.02] cursor-pointer overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(139,21,56,0.35), rgba(92,10,31,0.4), rgba(45,24,16,0.35))",
                      border: "2px solid rgba(184,134,11,0.5)",
                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,215,0,0.08)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {/* Shimmer effect on hover - desktop only */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 40%, rgba(255,215,0,0.06) 50%, transparent 60%)",
                      }}
                    />

                    {/* Corner ornaments */}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 sm:w-5 h-4 sm:h-5 border-t-2 border-l-2 border-[#FFD700] opacity-60" />
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 sm:w-5 h-4 sm:h-5 border-t-2 border-r-2 border-[#FFD700] opacity-60" />
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 sm:w-5 h-4 sm:h-5 border-b-2 border-l-2 border-[#FFD700] opacity-60" />
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 sm:w-5 h-4 sm:h-5 border-b-2 border-r-2 border-[#FFD700] opacity-60" />

                    {/* Top decorative line */}
                    <div
                      className="absolute top-2 sm:top-3 left-6 sm:left-8 right-6 sm:right-8 h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,215,0,0.25), transparent)",
                      }}
                    />

                    <span className="text-2xl sm:text-4xl mb-2 sm:mb-3 block relative z-10">
                      <item.icon size={40} className="mx-auto" />
                    </span>
                    <h4
                      className="font-bold text-[#FFD700] text-xs sm:text-base mb-1 sm:mb-1.5 relative z-10 uppercase tracking-wider"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-sm text-[#FDF6E3] opacity-80 relative z-10">
                      {item.desc}
                    </p>

                    {/* Bottom decorative line */}
                    <div
                      className="absolute bottom-2 sm:bottom-3 left-6 sm:left-8 right-6 sm:right-8 h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exported component wraps content with MotionZone
export function FestHighlightsSection() {
  return (
    <MotionZone threshold={0.05} rootMargin="100px">
      <FestHighlightsContent />
    </MotionZone>
  );
}
