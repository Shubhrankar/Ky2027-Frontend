"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useAnimationPolicy } from "@/hooks";

// ═══════════════════════════════════════════════════════════════════
// FLOATING SHAPES - Geometric neon shapes floating around
// ═══════════════════════════════════════════════════════════════════

const NEON = {
  CYAN: "#00FFFF",
  MAGENTA: "#FF00FF",
  LIME: "#39FF14",
  PINK: "#FF1493",
  PURPLE: "#8B5CF6",
  ORANGE: "#FF6B00",
};

interface Shape {
  id: number;
  type: "triangle" | "circle" | "square" | "hexagon" | "star" | "cross";
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  duration: number;
  delay: number;
}

const generateShapes = (count: number): Shape[] => {
  const types: Shape["type"][] = ["triangle", "circle", "square", "hexagon", "star", "cross"];
  const colors = [NEON.CYAN, NEON.MAGENTA, NEON.LIME, NEON.PINK, NEON.PURPLE, NEON.ORANGE];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: types[i % types.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 15 + Math.random() * 25,
    color: colors[i % colors.length],
    rotation: Math.random() * 360,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));
};

// Shape SVG components
const ShapeSVG = memo(function ShapeSVG({
  type,
  size,
  color,
}: {
  type: Shape["type"];
  size: number;
  color: string;
}) {
  const strokeWidth = 1.5;

  switch (type) {
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <polygon
            points="12,2 22,20 2,20"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
      );
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
      );
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
      );
    case "hexagon":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <polygon
            points="12,2 21,7 21,17 12,22 3,17 3,7"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
      );
    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
      );
    case "cross":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path
            d="M12 2v20M2 12h20"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
      );
    default:
      return null;
  }
});

export const FloatingShapes = memo(function FloatingShapes({
  count = 15,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const { shouldAnimate } = useAnimationPolicy();
  const shapes = generateShapes(count);

  // Don't render floating shapes if animations should be reduced
  if (!shouldAnimate) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[1] overflow-hidden ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          initial={{
            opacity: 0,
            rotate: shape.rotation,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.4, 0.4, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [0, 1, 1, 0],
            x: [0, 30, -20, 0],
            y: [0, -50, -100, -150],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <ShapeSVG type={shape.type} size={shape.size} color={shape.color} />
        </motion.div>
      ))}
    </div>
  );
});

// Static decorative shapes for specific sections
export const DecorativeShapes = memo(function DecorativeShapes({
  position = "left",
  className = "",
}: {
  position?: "left" | "right" | "both";
  className?: string;
}) {
  const leftShapes = [
    { type: "triangle" as const, x: 5, y: 20, size: 40, color: NEON.CYAN, rotation: 15 },
    { type: "circle" as const, x: 8, y: 45, size: 25, color: NEON.MAGENTA, rotation: 0 },
    { type: "hexagon" as const, x: 3, y: 70, size: 35, color: NEON.LIME, rotation: 30 },
  ];

  const rightShapes = [
    { type: "square" as const, x: 92, y: 25, size: 30, color: NEON.PINK, rotation: 45 },
    { type: "star" as const, x: 95, y: 55, size: 35, color: NEON.PURPLE, rotation: 0 },
    { type: "cross" as const, x: 90, y: 80, size: 28, color: NEON.ORANGE, rotation: 22 },
  ];

  const shapes =
    position === "left"
      ? leftShapes
      : position === "right"
        ? rightShapes
        : [...leftShapes, ...rightShapes];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: `rotate(${shape.rotation}deg)`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 10, shape.rotation - 10, shape.rotation],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShapeSVG type={shape.type} size={shape.size} color={shape.color} />
        </motion.div>
      ))}
    </div>
  );
});
