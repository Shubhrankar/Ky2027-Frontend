"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { SCHEDULED_EVENTS } from "../config/campusMap.config";

// ═══════════════════════════════════════════════════════════════════
// EVENT SEARCH
// Matches event, category or venue names; results open the venue page.
// ═══════════════════════════════════════════════════════════════════

export function EventSearch({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const results = q
    ? SCHEDULED_EVENTS.filter(({ event, category, venue }) =>
        [event.name, category.name, venue.name].some((s) => s.toLowerCase().includes(q))
      ).slice(0, 8)
    : [];

  // Close the dropdown when clicking outside
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <label className="flex items-center gap-3 rounded-md border border-[#D4A853]/30 bg-[#0d1124]/90 px-4 py-2.5 backdrop-blur focus-within:border-[#D4A853]/70">
        <Search className="h-4 w-4 shrink-0 text-[#D4A853]" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          placeholder="Search an Event"
          aria-label="Search an event"
          className="w-full bg-transparent text-sm text-[#f3e6c8] placeholder:text-white/40 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="text-white/50 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </label>

      {open && q && (
        <ul
          className="absolute inset-x-0 top-full z-30 mt-1 max-h-[60vh] overflow-y-auto rounded-md border border-white/10 bg-[#0d1124]/95 py-1 shadow-2xl backdrop-blur"
          data-lenis-prevent
        >
          {results.length === 0 && (
            <li className="px-4 py-3 text-sm text-white/50">
              No events match &ldquo;{query}&rdquo;
            </li>
          )}
          {results.map(({ event, venue, day }) => (
            <li key={event.id}>
              <Link
                href={`/schedule/${venue.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-4 px-4 py-2 hover:bg-white/5 focus:bg-white/5 focus:outline-none"
              >
                <span>
                  <span className="block text-sm text-[#f3e6c8]">{event.name}</span>
                  <span className="block text-[11px] text-white/50">{venue.name}</span>
                </span>
                <span className="shrink-0 text-[10px] font-semibold tracking-[0.18em] text-[#D4A853] uppercase">
                  Day {day}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
