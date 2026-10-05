"use client";

import { memo, type ReactNode } from "react";

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
    <a
      href={href}
      className="relative flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
      style={{
        background: `${color}10`,
        border: `2px solid ${color}50`,
        color: color,
      }}
      title={label}
    >
      {icon}
    </a>
  );
});
