"use client";

import { useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { MotionZone, useMotionZone } from "@/lib/motion";
import { IMAGES } from "@/lib/images";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks";
import { HighlightIcon } from "./sections/icons";

const highlights = [
  {
    iconType: "mic",
    title: "Live Performances",
    desc: "Pro-shows & celebrity artists",
    color: "#EC4899",
  },
  {
    iconType: "dj",
    title: "DJ Nights",
    desc: "EDM, techno & non-stop beats",
    color: "#8B5CF6",
  },
  {
    iconType: "star",
    title: "Cultural Events",
    desc: "Dance, drama & competitions",
    color: "#06B6D4",
  },
  {
    iconType: "bolt",
    title: "Epic Vibes",
    desc: "Memories that last forever",
    color: "#F59E0B",
  },
];

// 3D Disco Ball Model Component - respects MotionZone pause state
function DiscoBallModel() {
  const { scene } = useGLTF("/home/discoBall.glb");
  const groupRef = useRef<THREE.Group>(null);
  const { isAnimating } = useMotionZone();

  useFrame(() => {
    if (groupRef.current && isAnimating) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={groupRef} object={scene} scale={1.5} position={[0, 0, 0]} />;
}

// 3D Disco Ball with Canvas - skips rendering on mobile for performance
function DiscoBall3D() {
  const isMobile = useIsMobile();
  const { isAnimating } = useMotionZone();

  // Don't render the heavy 3D canvas on mobile at all
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44"
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
        delay: 0.2,
      }}
    >
      {/* Hanging wire */}
      <div
        className="absolute top-0 left-1/2 -mt-12 h-12 w-[1px] -translate-x-1/2 bg-gradient-to-b from-gray-600 to-gray-400"
        style={{ zIndex: 30 }}
      />

      {/* LASER BEAMS emitting from ball center - only render when animating */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 5 }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: "300px",
                height: "2px",
                background: `linear-gradient(90deg, transparent 0%, ${
                  ["#EC4899", "#8B5CF6", "#06B6D4", "#F59E0B", "#10B981", "#A855F7"][i % 6]
                } 10%, ${
                  ["#EC4899", "#8B5CF6", "#06B6D4", "#F59E0B", "#10B981", "#A855F7"][i % 6]
                }80 50%, transparent 100%)`,
                transformOrigin: "center center",
                transform: `rotate(${i * 30}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.7, 0.1],
                scaleX: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Rotating laser beams - only render when animating */}
      {isAnimating && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 5 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={`rot-${i}`}
              className="absolute"
              style={{
                width: "350px",
                height: "3px",
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 5%, ${
                  ["#EC4899", "#8B5CF6", "#06B6D4"][i % 3]
                } 20%, transparent 100%)`,
                transformOrigin: "center center",
                transform: `rotate(${i * 60}deg)`,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Static glow behind ball - no animation, just gradient */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          zIndex: 10,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(139,92,246,0.5) 30%, rgba(236,72,153,0.3) 60%, transparent 70%)",
          transform: "scale(1.3)",
          opacity: isAnimating ? 0.7 : 0.4,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* 3D Canvas - ONLY RENDER WHEN IN VIEWPORT */}
      {isAnimating && (
        <div className="relative h-full w-full" style={{ zIndex: 20 }}>
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ background: "transparent" }}
            frameloop="always"
            dpr={[1, 1.5]}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={2} />
              <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
              <directionalLight position={[-5, 5, 5]} intensity={2} color="#ffffff" />
              <directionalLight position={[0, -5, 5]} intensity={1.5} color="#ffffff" />
              <directionalLight position={[0, 5, -5]} intensity={1} color="#ffffff" />
              <pointLight position={[3, 0, 3]} intensity={1} color="#EC4899" />
              <pointLight position={[-3, 0, 3]} intensity={1} color="#8B5CF6" />
              <pointLight position={[0, 3, 3]} intensity={1} color="#06B6D4" />

              <DiscoBallModel />

              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Static fallback when not animating */}
      {!isAnimating && (
        <div
          className="relative h-full w-full rounded-full"
          style={{
            zIndex: 20,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(139,92,246,0.4) 50%, rgba(100,70,150,0.6))",
            boxShadow: "inset 0 0 30px rgba(255,255,255,0.2), 0 0 40px rgba(139,92,246,0.5)",
          }}
        />
      )}

      {/* Static glow underneath */}
      <div
        className="absolute -bottom-8 left-1/2 h-16 w-48 -translate-x-1/2"
        style={{
          zIndex: 15,
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(139,92,246,0.5) 30%, rgba(236,72,153,0.3) 60%, transparent 80%)",
          opacity: isAnimating ? 0.7 : 0.4,
          filter: "blur(16px)",
          transition: "opacity 0.3s ease",
        }}
      />
    </motion.div>
  );
}

// Preload
useGLTF.preload("/home/discoBall.glb");

// Animated Laser Beams - Only 2 (extreme left and extreme right)
function LaserBeams() {
  const { isAnimating } = useMotionZone();

  if (!isAnimating) return null;

  const beams = [
    { color: "#EC4899", top: "20%", fromLeft: true },
    { color: "#8B5CF6", top: "60%", fromLeft: false },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px]"
          style={{
            width: "100%",
            background: `linear-gradient(90deg, transparent, ${beam.color}, transparent)`,
            top: beam.top,
            transformOrigin: beam.fromLeft ? "left" : "right",
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.7, 0],
            rotate: beam.fromLeft ? [0, 15, 0] : [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Floating Music Notes - Reduced count
function FloatingNotes() {
  const { isAnimating } = useMotionZone();
  const notes = ["♪", "♫", "♬"];

  if (!isAnimating) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-xl sm:text-2xl"
          style={{
            left: `${15 + i * 15}%`,
            color: ["#EC4899", "#8B5CF6", "#06B6D4", "#F59E0B"][i % 4],
            textShadow: `0 0 10px currentColor`,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        >
          {notes[i % notes.length]}
        </motion.span>
      ))}
    </div>
  );
}

// Silhouette Image at bottom
function SilhouetteImage() {
  return (
    <div
      className="pointer-events-none absolute right-0 bottom-0 left-0"
      style={{ zIndex: 50, height: "180px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGES.proNites.silhouette}
        alt="Crowd silhouette"
        className="h-full w-full object-cover object-top"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/home/proNites/common/silhoutte.png";
        }}
      />
    </div>
  );
}

// Spotlight Cones - Only 2 (extreme left and extreme right)
function Spotlights() {
  const { isAnimating } = useMotionZone();

  if (!isAnimating) return null;

  return (
    <div className="pointer-events-none absolute top-0 right-0 left-0 h-full overflow-hidden">
      {/* Left spotlight */}
      <motion.div
        className="absolute top-0"
        style={{
          left: "5%",
          width: "100px",
          height: "100%",
          background: "linear-gradient(to bottom, #EC489933 0%, transparent 60%)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          transformOrigin: "top center",
        }}
        animate={{
          rotate: [-15, 15, -15],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Right spotlight */}
      <motion.div
        className="absolute top-0"
        style={{
          left: "85%",
          width: "100px",
          height: "100%",
          background: "linear-gradient(to bottom, #8B5CF633 0%, transparent 60%)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          transformOrigin: "top center",
        }}
        animate={{
          rotate: [15, -15, 15],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Neon Side Borders - Vertical light strips on left and right with floating text
function NeonSideBorders() {
  const { isAnimating } = useMotionZone();

  if (!isAnimating) return null;

  return (
    <>
      {/* Left Border */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-4 hidden lg:block xl:left-8"
        style={{ zIndex: 5 }}
      >
        {/* Main gradient bar */}
        <motion.div
          className="absolute top-[10%] bottom-[25%] left-0 w-1"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #EC4899 15%, #8B5CF6 40%, #06B6D4 60%, #8B5CF6 85%, transparent 100%)",
            boxShadow: "0 0 20px #8B5CF6, 0 0 40px #8B5CF680, 0 0 60px #EC489940",
            borderRadius: "2px",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            boxShadow: [
              "0 0 20px #8B5CF6, 0 0 40px #8B5CF680, 0 0 60px #EC489940",
              "0 0 30px #EC4899, 0 0 60px #8B5CF6, 0 0 80px #06B6D450",
              "0 0 20px #8B5CF6, 0 0 40px #8B5CF680, 0 0 60px #EC489940",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer glow line */}
        <motion.div
          className="absolute top-[10%] bottom-[25%] left-[-4px] w-2"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #EC489950 15%, #8B5CF650 40%, #06B6D450 60%, #8B5CF650 85%, transparent 100%)",
            filter: "blur(8px)",
            borderRadius: "4px",
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Pulsing light nodes along the bar */}
        {[15, 30, 45, 60, 75].map((pos, i) => (
          <motion.div
            key={`left-node-${i}`}
            className="absolute left-[-3px] h-3 w-3 rounded-full"
            style={{
              top: `${pos}%`,
              background: ["#EC4899", "#8B5CF6", "#06B6D4", "#8B5CF6", "#EC4899"][i],
              boxShadow: `0 0 15px ${["#EC4899", "#8B5CF6", "#06B6D4", "#8B5CF6", "#EC4899"][i]}, 0 0 30px ${["#EC4899", "#8B5CF6", "#06B6D4", "#8B5CF6", "#EC4899"][i]}80`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Traveling light effect */}
        <motion.div
          className="absolute left-[-1px] h-16 w-2 rounded-full"
          style={{
            background: "linear-gradient(180deg, transparent, #fff, transparent)",
            filter: "blur(2px)",
          }}
          animate={{
            top: ["10%", "70%", "10%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Vertical Text - "LIVE" */}
        <motion.div
          className="absolute top-[30%] left-6 flex flex-col gap-2"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="rotate-180 text-3xl font-black tracking-[0.2em] xl:text-4xl"
            style={{
              background: "linear-gradient(180deg, #EC4899, #8B5CF6, #06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px #EC489980) drop-shadow(0 0 40px #8B5CF650)",
            }}
          >
            LIVE
          </span>
        </motion.div>
      </div>

      {/* Right Border */}
      <div
        className="pointer-events-none absolute top-0 right-4 bottom-0 hidden lg:block xl:right-8"
        style={{ zIndex: 5 }}
      >
        {/* Main gradient bar */}
        <motion.div
          className="absolute top-[10%] right-0 bottom-[25%] w-1"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #06B6D4 15%, #8B5CF6 40%, #EC4899 60%, #8B5CF6 85%, transparent 100%)",
            boxShadow: "0 0 20px #8B5CF6, 0 0 40px #8B5CF680, 0 0 60px #06B6D440",
            borderRadius: "2px",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            boxShadow: [
              "0 0 20px #8B5CF6, 0 0 40px #8B5CF680, 0 0 60px #06B6D440",
              "0 0 30px #06B6D4, 0 0 60px #8B5CF6, 0 0 80px #EC489950",
              "0 0 20px #8B5CF6, 0 0 40px #8B5CF680, 0 0 60px #06B6D440",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Outer glow line */}
        <motion.div
          className="absolute top-[10%] right-[-4px] bottom-[25%] w-2"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #06B6D450 15%, #8B5CF650 40%, #EC489950 60%, #8B5CF650 85%, transparent 100%)",
            filter: "blur(8px)",
            borderRadius: "4px",
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Pulsing light nodes along the bar */}
        {[15, 30, 45, 60, 75].map((pos, i) => (
          <motion.div
            key={`right-node-${i}`}
            className="absolute right-[-3px] h-3 w-3 rounded-full"
            style={{
              top: `${pos}%`,
              background: ["#06B6D4", "#8B5CF6", "#EC4899", "#8B5CF6", "#06B6D4"][i],
              boxShadow: `0 0 15px ${["#06B6D4", "#8B5CF6", "#EC4899", "#8B5CF6", "#06B6D4"][i]}, 0 0 30px ${["#06B6D4", "#8B5CF6", "#EC4899", "#8B5CF6", "#06B6D4"][i]}80`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3 + 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Traveling light effect */}
        <motion.div
          className="absolute right-[-1px] h-16 w-2 rounded-full"
          style={{
            background: "linear-gradient(180deg, transparent, #fff, transparent)",
            filter: "blur(2px)",
          }}
          animate={{
            top: ["70%", "10%", "70%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Vertical Text - "CONCERT" */}
        <motion.div
          className="absolute top-[30%] right-6 flex flex-col gap-2"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <span
            className="text-3xl font-black tracking-[0.2em] xl:text-4xl"
            style={{
              background: "linear-gradient(180deg, #06B6D4, #8B5CF6, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px #06B6D480) drop-shadow(0 0 40px #8B5CF650)",
            }}
          >
            CONCERT
          </span>
        </motion.div>
      </div>
    </>
  );
}

// Neon Grid Floor
function NeonGrid() {
  return (
    <div className="absolute right-0 bottom-24 left-0 h-32 overflow-hidden opacity-30 sm:bottom-32">
      <div
        className="h-full w-full"
        style={{
          background: `
            linear-gradient(90deg, #8B5CF6 1px, transparent 1px),
            linear-gradient(0deg, #8B5CF6 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(200px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
}

function FestHighlightsContent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window !== "undefined" && window.innerWidth < 640) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = contentRef.current?.querySelectorAll(".highlight-card");
      gsap.fromTo(
        cards || [],
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-8 sm:py-12"
      style={{
        background: "linear-gradient(180deg, #0a0510 0%, #1a0a2e 30%, #0f0720 70%, #050208 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <Spotlights />
      <LaserBeams />
      <FloatingNotes />
      <NeonSideBorders />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center">
          {/* 3D Disco Ball - Uses useIsMobile to skip on mobile, useMotionZone to pause when off-screen */}
          <div className="mb-6 sm:mb-8">
            <DiscoBall3D />
          </div>

          {/* Title with Gradient */}
          <motion.h2
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(90deg, #EC4899, #8B5CF6, #06B6D4, #EC4899)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
            }}
            animate={{
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            THE ULTIMATE FEST
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="mb-6 text-sm tracking-[0.4em] text-purple-300 uppercase sm:mb-8 sm:text-base"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡ 4 Days of Non-Stop Energy ⚡
          </motion.p>

          {/* Description - Enhanced with highlights */}
          <motion.div
            className="mx-auto mb-8 max-w-3xl px-4 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-center text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              Get ready for the{" "}
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(90deg, #EC4899, #F59E0B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                most electrifying college fest
              </span>
              !
            </p>
            <p className="mt-3 text-center text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              <span className="text-pink-400">Live concerts</span>
              {" • "}
              <span className="text-purple-400">Celebrity performances</span>
              {" • "}
              <span className="text-cyan-400">Insane DJ nights</span>
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-gray-500 italic sm:text-base">
              Vibes that&apos;ll blow your mind — This is{" "}
              <span
                className="font-bold not-italic"
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Kashi Yatra 2027
              </span>
              !
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="highlight-card group relative cursor-pointer overflow-hidden rounded-2xl p-4 sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}30 0%, rgba(0,0,0,0.8) 50%, ${item.color}20 100%)`,
                  }}
                  animate={{
                    background: [
                      `linear-gradient(135deg, ${item.color}30 0%, rgba(0,0,0,0.8) 50%, ${item.color}20 100%)`,
                      `linear-gradient(225deg, ${item.color}25 0%, rgba(0,0,0,0.85) 50%, ${item.color}30 100%)`,
                      `linear-gradient(135deg, ${item.color}30 0%, rgba(0,0,0,0.8) 50%, ${item.color}20 100%)`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Glowing border effect */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    padding: "2px",
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}40, ${item.color})`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Outer glow */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-50 blur-md transition-opacity group-hover:opacity-100"
                  style={{ background: item.color }}
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Inner shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${item.color}40 0%, transparent 60%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content container */}
                <div className="relative z-10">
                  {/* Icon with glow */}
                  <motion.div
                    className="relative mb-3 inline-block"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
                  >
                    <HighlightIcon type={item.iconType} color={item.color} />
                    {/* Icon glow underneath */}
                    <div
                      className="absolute inset-0 -z-10 opacity-60 blur-xl"
                      style={{ background: item.color }}
                    />
                  </motion.div>

                  {/* Title with text glow */}
                  <h4
                    className="mb-1 text-sm font-black tracking-wider uppercase sm:text-lg"
                    style={{
                      color: item.color,
                      textShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}60`,
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs font-medium text-gray-300 sm:text-sm">{item.desc}</p>
                </div>

                {/* Animated corner sparks */}
                <motion.div
                  className="absolute top-0 left-0 h-8 w-8"
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color} 0%, transparent 70%)`,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
                <motion.div
                  className="absolute right-0 bottom-0 h-8 w-8"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${item.color} 0%, transparent 70%)`,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 + 0.75 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Silhouette Image */}
      <SilhouetteImage />
    </section>
  );
}

export function FestHighlightsSection() {
  return (
    <MotionZone threshold={0.05} rootMargin="100px">
      <FestHighlightsContent />
    </MotionZone>
  );
}
