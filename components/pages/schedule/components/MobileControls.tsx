"use client";

import { useState } from "react";
import { LAYERS } from "../constants";
import type { MapLayers, Layer } from "@/lib/api/helper/types";

// ═══════════════════════════════════════════════════════════════════
// MOBILE CONTROLS
// Fixed search and layers buttons for mobile view
// ═══════════════════════════════════════════════════════════════════

interface MobileControlsProps {
  layers: MapLayers;
  onLayerToggle: (key: Layer) => void;
  onSearchClick: () => void;
}

export function MobileControls({ layers, onLayerToggle, onSearchClick }: MobileControlsProps) {
  const [layersOpen, setLayersOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-[200] flex flex-col gap-2.5 lg:hidden">
      {/* Search button */}
      <button
        onClick={onSearchClick}
        aria-label="Search events"
        className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-lg border border-[rgba(100,120,180,0.3)] bg-[rgba(20,25,45,0.85)] text-[rgba(180,195,230,0.9)] backdrop-blur-md transition-all duration-300"
        style={{
          boxShadow: "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {/* Layers button */}
      <div className="relative">
        <button
          onClick={() => setLayersOpen(!layersOpen)}
          aria-label="Map layers"
          aria-expanded={layersOpen}
          className={`flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-lg border border-[rgba(100,120,180,0.3)] bg-[rgba(20,25,45,0.85)] text-[rgba(180,195,230,0.9)] backdrop-blur-md transition-all duration-300 ${layersOpen ? "rounded-b-none" : ""}`}
          style={{
            boxShadow: "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <svg
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </button>

        {/* Layers dropdown */}
        {layersOpen && (
          <div
            className="absolute top-full right-0 flex flex-col gap-1 rounded-b-lg border border-t-0 border-[rgba(100,120,180,0.3)] bg-[rgba(20,25,45,0.95)] p-1.5 backdrop-blur-xl"
            style={{
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {LAYERS.filter((l) => l.key !== "labels").map(({ key, label, icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => onLayerToggle(key)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-[11px] font-medium transition-all ${
                  layers[key]
                    ? "bg-[rgba(80,110,180,0.35)] text-[rgba(220,230,255,1)]"
                    : "text-[rgba(180,195,230,0.9)] hover:bg-[rgba(80,100,160,0.25)]"
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
