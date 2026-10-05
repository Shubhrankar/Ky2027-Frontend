"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Loader2 } from "lucide-react";
import { useSignOut } from "@/lib/api/hooks";
import { useNavbar } from "../config/NavbarContext";

// Theme-specific dropdown styles
const DROPDOWN_THEMES = {
  main: {
    trigger: {
      background:
        "linear-gradient(135deg, rgba(255,215,0,0.25) 0%, rgba(212,168,83,0.2) 50%, rgba(184,134,11,0.25) 100%)",
      border: "2px solid rgba(255,215,0,0.6)",
      boxShadow:
        "0 0 15px rgba(255,215,0,0.4), 0 0 30px rgba(255,180,0,0.2), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,245,200,0.4)",
    },
    avatarRing: {
      background: "linear-gradient(135deg, #ffd700 0%, #d4a853 50%, #8b6914 100%)",
      boxShadow: "0 0 12px rgba(255,215,0,0.6), 0 0 20px rgba(255,180,0,0.3)",
    },
    avatarBg: "linear-gradient(135deg, #d4a853 0%, #b8860b 50%, #8b6914 100%)",
    textColor: "#3a1505",
    initialsColor: "#1a0a05",
    textShadow: "0 1px 1px rgba(255,245,215,0.7)",
    dropdown: {
      background: "linear-gradient(145deg, #1a0a05 0%, #2d1810 50%, #1a0a05 100%)",
      border: "1px solid rgba(255,215,0,0.4)",
      boxShadow: "0 0 30px rgba(255,215,0,0.2), 0 10px 40px rgba(0,0,0,0.5)",
    },
    nameColor: "#d4a853",
    emailColor: "rgba(255,245,215,0.6)",
    separatorColor: "rgba(255,215,0,0.2)",
    menuItemHover: "rgba(255,215,0,0.1)",
    iconColor: "#d4a853",
    itemColor: "rgba(255,245,215,0.9)",
  },
  about: {
    trigger: {
      background:
        "linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(124,58,237,0.2) 50%, rgba(99,102,241,0.25) 100%)",
      border: "2px solid rgba(167,139,250,0.6)",
      boxShadow:
        "0 0 15px rgba(139,92,246,0.4), 0 0 30px rgba(124,58,237,0.2), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(196,181,253,0.4)",
    },
    avatarRing: {
      background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)",
      boxShadow: "0 0 12px rgba(139,92,246,0.6), 0 0 20px rgba(124,58,237,0.3)",
    },
    avatarBg: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)",
    textColor: "#e9d5ff",
    initialsColor: "#1a0a2e",
    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
    dropdown: {
      background: "linear-gradient(145deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)",
      border: "1px solid rgba(139,92,246,0.4)",
      boxShadow: "0 0 30px rgba(139,92,246,0.2), 0 10px 40px rgba(0,0,0,0.5)",
    },
    nameColor: "#c4b5fd",
    emailColor: "rgba(196,181,253,0.6)",
    separatorColor: "rgba(139,92,246,0.3)",
    menuItemHover: "rgba(139,92,246,0.15)",
    iconColor: "#a78bfa",
    itemColor: "rgba(233,213,255,0.9)",
  },
  sponsor: {
    trigger: {
      background:
        "linear-gradient(135deg, rgba(15,60,30,0.9) 0%, rgba(20,80,40,0.85) 50%, rgba(15,60,30,0.9) 100%)",
      border: "2px solid rgba(74,222,128,0.7)",
      boxShadow:
        "0 0 15px rgba(74,222,128,0.5), 0 0 30px rgba(34,197,94,0.3), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(187,247,208,0.2)",
    },
    avatarRing: {
      background: "linear-gradient(135deg, #86efac 0%, #4ade80 50%, #22c55e 100%)",
      boxShadow: "0 0 12px rgba(74,222,128,0.6), 0 0 20px rgba(34,197,94,0.3)",
    },
    avatarBg: "linear-gradient(135deg, #86efac 0%, #4ade80 50%, #22c55e 100%)",
    textColor: "#bbf7d0", // Light green text for visibility on dark bg
    initialsColor: "#052e05",
    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
    dropdown: {
      background: "linear-gradient(145deg, #052e05 0%, #0a3d0a 50%, #052e05 100%)",
      border: "1px solid rgba(74,222,128,0.4)",
      boxShadow: "0 0 30px rgba(74,222,128,0.2), 0 10px 40px rgba(0,0,0,0.5)",
    },
    nameColor: "#86efac",
    emailColor: "rgba(187,247,208,0.6)",
    separatorColor: "rgba(74,222,128,0.3)",
    menuItemHover: "rgba(74,222,128,0.15)",
    iconColor: "#4ade80",
    itemColor: "rgba(220,252,231,0.9)",
  },
};

interface UserAvatarDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function UserAvatarDropdown({ user }: UserAvatarDropdownProps) {
  const [imageError, setImageError] = useState(false);
  const { isSigningOut, handleSignOut } = useSignOut();
  const { theme } = useNavbar();
  const styles = DROPDOWN_THEMES[theme];

  const initials =
    user.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

  // Get slug from email (part before @) and truncate to 10 chars
  const slugName = user.email?.split("@")[0] || "user";
  const displaySlug = slugName.length > 10 ? `${slugName.slice(0, 10)}..` : slugName;

  const showImage = user.image && !imageError;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="group flex items-center gap-3 rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-105 focus:outline-none"
          style={styles.trigger}
        >
          {/* Glow ring around avatar */}
          <div
            className="relative"
            style={{
              padding: "2px",
              borderRadius: "50%",
              ...styles.avatarRing,
            }}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-2 lg:h-9 lg:w-9 ${
                theme === "main"
                  ? "ring-[#1a0a05]"
                  : theme === "about"
                    ? "ring-[#1a0a2e]"
                    : "ring-[#052e05]"
              }`}
              style={{
                background: showImage ? "transparent" : styles.avatarBg,
              }}
            >
              {showImage ? (
                <Image
                  src={user.image!}
                  alt={user.name || "User"}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-xs font-bold" style={{ color: styles.initialsColor }}>
                  {initials}
                </span>
              )}
            </div>
          </div>
          <span
            className="hidden text-xs font-bold tracking-wide uppercase lg:block"
            style={{
              color: styles.textColor,
              fontFamily: "var(--font-ethereal), serif",
              textShadow: styles.textShadow,
            }}
          >
            {displaySlug}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="dropdown-animate z-[300] w-56"
        style={{
          ...styles.dropdown,
          borderRadius: "12px",
        }}
      >
        {/* User Info Header */}
        <div className="px-3 py-2">
          <p className="truncate text-sm font-semibold" style={{ color: styles.nameColor }}>
            {user.name}
          </p>
          <p className="truncate text-xs" style={{ color: styles.emailColor }}>
            {user.email}
          </p>
        </div>

        <DropdownMenuSeparator style={{ background: styles.separatorColor }} />

        {/* Profile Link */}
        <DropdownMenuItem
          asChild
          className="mx-1 rounded-md"
          style={{
            ["--dropdown-hover" as string]: styles.menuItemHover,
          }}
        >
          <Link
            href="/profile"
            className="flex cursor-pointer items-center gap-2 px-3 py-2 transition-colors hover:bg-[var(--dropdown-hover)]"
            style={{ color: styles.itemColor }}
          >
            <User className="h-4 w-4" style={{ color: styles.iconColor }} />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator style={{ background: styles.separatorColor }} />

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="mx-1 flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors focus:bg-[rgba(255,100,100,0.1)] disabled:cursor-not-allowed disabled:opacity-50"
          style={{ color: "rgba(255,100,100,0.9)" }}
        >
          {isSigningOut ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LogOut className="h-4 w-4" />
          )}
          <span>{isSigningOut ? "Signing out..." : "Logout"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
