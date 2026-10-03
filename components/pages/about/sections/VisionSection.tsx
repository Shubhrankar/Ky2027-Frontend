"use client";

import { memo, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks";
import { CardBack, CardFront, cards } from "./cards/VisionCards";

gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════════════════════════════
// VISION SECTION - Scroll-Pinned Playing Card Reveal Animation
// Section pins while cards flip from back to front one by one
// ═══════════════════════════════════════════════════════════════════


export const VisionSection = memo(function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip animation on mobile or reduced motion
    if (prefersReducedMotion || isMobile) return;
    if (!sectionRef.current || !cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      const cardElements = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      
      // Initial state: all cards stacked lower, showing backs
      cardElements.forEach((card, i) => {
        gsap.set(card, {
          y: 110, // Push cards down more
          x: 0,
          rotateY: 0, // Back is visible (0 deg)
          rotateZ: 5 + i * 2, // Slight stack tilt
          scale: 0.95,
          zIndex: cards.length - i, // First card on top of stack
        });
      });

      // Create the main timeline pinned to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Pin for 2x viewport height of scrolling
          pin: true,
          scrub: 1, // Smooth scrubbing
          anticipatePin: 1,
        },
      });

      // Animate each card one by one
      cardElements.forEach((card, i) => {
        const xOffset = (i - 1) * 200; // -200, 0, 200 for wider spread
        const zRotation = (i - 1) * -8; // 8, 0, -8 degrees tilt when revealed
        
        // Each card animation sequence
        tl.to(card, {
          y: 60, // Move cards down to prevent cut-off
          x: xOffset, // Spread horizontally
          rotateY: 180, // Flip to show front
          rotateZ: zRotation, // Final tilt
          scale: 1,
          zIndex: i + 10, // Bring to front as it reveals
          duration: 1,
          ease: "power2.inOut",
        }, i * 0.3); // Stagger start times
      });

      // Hold at the end briefly
      tl.to({}, { duration: 0.5 });

    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, isMobile]);

  // Mobile fallback: static cards
  if (isMobile) {
    return (
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A853] font-bold mb-3">
              What We&apos;re About
            </p>
            <h2 className="text-3xl font-black text-white uppercase">
              The Vision
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 items-center">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="relative w-[260px] h-[360px]"
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  <CardFront card={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(124, 45, 18, 0.05) 50%, transparent 100%)",
      }}
    >
      <div className="h-full flex flex-col max-w-6xl mx-auto w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-8">
        {/* Section header - improved UI */}
        <div className="text-center mb-4">
          {/* Decorative line above */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#D4A853]/60" />
            <div className="w-2 h-2 rotate-45 bg-[#D4A853]" />
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#D4A853]/60" />
          </div>
          
          <p 
            className="text-sm uppercase tracking-[0.3em] font-bold mb-3"
            style={{
              background: "linear-gradient(90deg, #D4A853, #F5DEB3, #D4A853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(212, 168, 83, 0.3)",
            }}
          >
            What We&apos;re About
          </p>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #E8E8E8 50%, #CCCCCC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
            }}
          >
            The Vision
          </h2>
          
          {/* Decorative line below */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4A853]/40 to-[#D4A853]/60" />
            <span className="text-[#D4A853] text-lg">✦</span>
            <div className="h-[2px] w-20 sm:w-32 bg-gradient-to-r from-[#D4A853] via-[#F5DEB3] to-[#D4A853] rounded-full" />
            <span className="text-[#D4A853] text-lg">✦</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4A853]/40 to-[#D4A853]/60" />
          </div>
        </div>

        {/* Cards container - positioned lower */}
        <div 
          ref={cardsContainerRef}
          className="relative flex-1 flex items-end justify-center pb-20"
          style={{ perspective: "1200px" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className="absolute w-[240px] sm:w-[280px] h-[340px] sm:h-[400px] cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
            >
              {/* Card Back */}
              <CardBack />
              
              {/* Card Front */}
              <CardFront card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
