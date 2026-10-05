import type { ReactNode } from "react";

// ═══════════════════════════════════════════════════════════════════
// FOOTER DATA
// ═══════════════════════════════════════════════════════════════════

export interface SocialLink {
  name: string;
  href: string;
  color: string;
  icon: ReactNode;
}

export interface QuickLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/kashiyatra_iitbhu",
    color: "#E4405F", // Instagram pink/red gradient
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/kashiyatra.iitbhu",
    color: "#1877F2", // Facebook blue
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VasYb6LBadmaaBUHjP3t",
    color: "#25D366", // WhatsApp green
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/KY_IITBHU",
    color: "#1DA1F2", // Twitter blue
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@KashiyatraIITBHU",
    color: "#FF0000", // YouTube red
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
  },
];

export const quickLinks: QuickLink[] = [
  {
    name: "Events",
    href: "#events",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 sm:h-5 sm:w-5 sm:animate-pulse"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Schedule",
    href: "#schedule",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 sm:h-5 sm:w-5"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle
          cx="12"
          cy="15"
          r="2"
          fill="currentColor"
          className="hidden sm:block sm:animate-ping"
          style={{ animationDuration: "2s" }}
        />
        <circle cx="12" cy="15" r="2" fill="currentColor" className="sm:hidden" />
      </svg>
    ),
  },
  {
    name: "Register",
    href: "#register",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 sm:h-5 sm:w-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="14"
          className="hidden sm:block sm:animate-bounce"
          style={{ transformOrigin: "center", animationDuration: "1s" }}
        />
        <line x1="20" y1="8" x2="20" y2="14" className="sm:hidden" />
        <line x1="17" y1="11" x2="23" y2="11" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "#contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 sm:h-5 sm:w-5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6">
          <animate
            attributeName="points"
            values="22,6 12,13 2,6; 22,6 12,11 2,6; 22,6 12,13 2,6"
            dur="2s"
            repeatCount="indefinite"
          />
        </polyline>
      </svg>
    ),
  },
];
