"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks";

// Microphone - Sleek concert mic with sound waves
export function MicIcon({ color }: { color: string }) {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id={`micGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        {/* Mic body */}
        {isMobile ? (
          <rect x="17" y="4" width="14" height="24" rx="7" fill={`url(#micGrad-${color})`} />
        ) : (
          <motion.rect
            x="17"
            y="4"
            width="14"
            height="24"
            rx="7"
            fill={`url(#micGrad-${color})`}
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
        {/* Mic stand arc */}
        <path
          d="M12 24 C12 34 24 38 24 38 C24 38 36 34 36 24"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Mic stand */}
        <line
          x1="24"
          y1="38"
          x2="24"
          y2="44"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="44"
          x2="30"
          y2="44"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Animated sound waves - Desktop only */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/2 right-0 -translate-y-1/2"
            animate={{ opacity: [0, 1, 0], x: [0, 8, 16] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24">
              <path
                d="M2 8 Q8 12 2 16"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M6 4 Q14 12 6 20"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2"
            animate={{ opacity: [0, 1, 0], x: [0, -8, -16] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24">
              <path
                d="M14 8 Q8 12 14 16"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M10 4 Q2 12 10 20"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
}

// DJ Turntable/Vinyl - More fitting for DJ Nights
export function DJIcon({ color }: { color: string }) {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Outer ring */}
        {isMobile ? (
          <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="3" fill="none" />
        ) : (
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke={color}
            strokeWidth="3"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "24px 24px" }}
          />
        )}
        {/* Vinyl grooves */}
        {isMobile ? (
          <>
            <circle
              cx="24"
              cy="24"
              r="14"
              stroke={color}
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <circle
              cx="24"
              cy="24"
              r="10"
              stroke={color}
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
          </>
        ) : (
          <>
            <motion.circle
              cx="24"
              cy="24"
              r="14"
              stroke={color}
              strokeWidth="1"
              fill="none"
              opacity="0.5"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "24px 24px" }}
            />
            <motion.circle
              cx="24"
              cy="24"
              r="10"
              stroke={color}
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "24px 24px" }}
            />
          </>
        )}
        {/* Center label */}
        {isMobile ? (
          <circle cx="24" cy="24" r="6" fill={color} />
        ) : (
          <motion.circle
            cx="24"
            cy="24"
            r="6"
            fill={color}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ transformOrigin: "24px 24px" }}
          />
        )}
        <circle cx="24" cy="24" r="2" fill="#0a0a15" />
        {/* Tonearm */}
        {isMobile ? (
          <g>
            <line
              x1="40"
              y1="8"
              x2="28"
              y2="20"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="40" cy="8" r="3" fill="#fff" />
          </g>
        ) : (
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "40px 8px" }}
          >
            <line
              x1="40"
              y1="8"
              x2="28"
              y2="20"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="40" cy="8" r="3" fill="#fff" />
          </motion.g>
        )}
      </svg>
      {/* Beat pulse - Desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${color}` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </div>
  );
}

// Star/Sparkle for Cultural Events
export function StarIcon({ color }: { color: string }) {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      {isMobile ? (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <defs>
            <linearGradient id={`starGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
          </defs>
          {/* Main star - Static */}
          <path
            d="M24 2 L28 18 L44 18 L31 28 L36 44 L24 34 L12 44 L17 28 L4 18 L20 18 Z"
            fill={`url(#starGrad-${color})`}
          />
        </svg>
      ) : (
        <>
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <defs>
              <linearGradient id={`starGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor={color} />
              </linearGradient>
            </defs>
            {/* Main star */}
            <motion.path
              d="M24 2 L28 18 L44 18 L31 28 L36 44 L24 34 L12 44 L17 28 L4 18 L20 18 Z"
              fill={`url(#starGrad-${color})`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ transformOrigin: "24px 24px" }}
            />
          </motion.svg>
          {/* Sparkle particles - Desktop only */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: color,
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

// Lightning bolt for Epic Vibes
export function BoltIcon({ color }: { color: string }) {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      {isMobile ? (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <defs>
            <linearGradient id={`boltGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="50%" stopColor={color} />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
            <filter id="boltGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Lightning bolt - Static */}
          <path
            d="M28 2 L12 22 L22 22 L18 46 L36 22 L26 22 L32 2 Z"
            fill={`url(#boltGrad-${color})`}
            filter="url(#boltGlow)"
          />
        </svg>
      ) : (
        <>
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <defs>
              <linearGradient id={`boltGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="50%" stopColor={color} />
                <stop offset="100%" stopColor={color} />
              </linearGradient>
              <filter id="boltGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Lightning bolt */}
            <motion.path
              d="M28 2 L12 22 L22 22 L18 46 L36 22 L26 22 L32 2 Z"
              fill={`url(#boltGrad-${color})`}
              filter="url(#boltGlow)"
              animate={{
                opacity: [1, 0.7, 1],
                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
              }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </motion.svg>
          {/* Electric sparks - Desktop only */}
          <motion.div
            className="absolute top-0 left-1/2 h-1 w-1 rounded-full bg-white"
            animate={{
              y: [0, -10],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-2 right-2 h-1 w-1 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
          />
        </>
      )}
    </div>
  );
}

// Icon renderer component
export function HighlightIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "mic":
      return <MicIcon color={color} />;
    case "dj":
      return <DJIcon color={color} />;
    case "star":
      return <StarIcon color={color} />;
    case "bolt":
      return <BoltIcon color={color} />;
    default:
      return null;
  }
}
