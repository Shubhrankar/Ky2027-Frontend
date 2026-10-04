"use client";

import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonSocialButtonProps {
  href: string;
  icon: ReactNode;
  color: string;
  label: string;
}

export const NeonSocialButton = memo(function NeonSocialButton({
  href,
  icon,
  color,
  label,
}: NeonSocialButtonProps) {
  return (
    <motion.a
      href={href}
      className="relative flex h-12 w-12 items-center justify-center rounded-full"
      style={{
        background: `${color}10`,
        border: `2px solid ${color}50`,
        color: color,
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: `0 0 30px ${color}80, 0 0 60px ${color}40`,
      }}
      whileTap={{ scale: 0.95 }}
      title={label}
    >
      {icon}

      {/* Pulse effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: `2px solid ${color}` }}
        initial={{ scale: 1, opacity: 0 }}
        whileHover={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
        }}
      />
    </motion.a>
  );
});
