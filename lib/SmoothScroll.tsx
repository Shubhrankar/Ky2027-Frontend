"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Don't initialize Lenis on mobile - native scroll is smoother
    if (window.innerWidth < 640) {
      return;
    }

    // Initialize Lenis only on desktop
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // ═══════════════════════════════════════════════════════════════
    // GSAP + Lenis Synchronization (Simple approach)
    //
    // - GSAP ticker drives Lenis RAF (single animation clock)
    // - ScrollTrigger.update() called on every Lenis scroll event
    // - No scroller proxy (keeps native IntersectionObserver working)
    // ═══════════════════════════════════════════════════════════════

    // Disable GSAP's lag smoothing for precise scroll sync
    gsap.ticker.lagSmoothing(0);

    // Let GSAP ticker drive Lenis's RAF
    // GSAP ticker provides time in seconds, Lenis expects milliseconds
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    // Update ScrollTrigger whenever Lenis scrolls
    // This ensures ScrollTrigger animations stay in sync with smooth scroll
    const scrollCallback = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", scrollCallback);

    // Cleanup
    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.off("scroll", scrollCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    // Scroll to top with Lenis if available
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Always also reset native scroll (fallback and for mobile)
    window.scrollTo(0, 0);
    // Also refresh ScrollTrigger for new page content
    ScrollTrigger.refresh();
  }, [pathname]);

  return <>{children}</>;
}
