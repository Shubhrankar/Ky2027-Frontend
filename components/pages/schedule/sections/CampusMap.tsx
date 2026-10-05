"use client";

import Link from "next/link";
import { useState } from "react";
import {
  VENUES,
  LAMPS,
  MAIN_BUILDING_OUTLINE,
  SCHEDULED_EVENTS,
  type Venue,
} from "../config/campusMap.config";
import styles from "./CampusMap.module.css";

// ═══════════════════════════════════════════════════════════════════
// CAMPUS MAP
// Animated IIT (BHU) map — day/night, twinkling lamps, drifting clouds,
// flying birds and clickable venue labels. Hovering a venue zooms the
// map towards it; clicking opens that venue's page.
// ═══════════════════════════════════════════════════════════════════

/** Deterministic pseudo-random in [min, max) so SSR and client markup match. */
function seeded(n: number, min: number, max: number) {
  let t = Math.imul(n + 1, 2654435761) >>> 0;
  t ^= t >>> 15;
  t = Math.imul(t, 2246822519) >>> 0;
  t ^= t >>> 13;
  return (min + ((t >>> 0) / 4294967296) * (max - min)).toFixed(2);
}

const CLOUDS: [number, number][] = [
  [2, 48],
  [18, 66],
  [34, 40],
  [52, 58],
  [68, 44],
  [82, 72],
];

const FLOCKS: [number, number, number][] = [
  [18, 26, -260],
  [52, 38, -320],
];

const FLOCK_SHAPE: [number, number][] = [
  [35, 40],
  [0, 0],
  [70, 0],
  [-35, -40],
  [105, -40],
  [140, -80],
];

const TONE_CLASS: Record<Venue["tone"], string> = {
  blue: styles.blue,
  red: styles.red,
  green: styles.green,
  white: styles.white,
  text: styles.text,
};

const EVENT_COUNTS = SCHEDULED_EVENTS.reduce<Record<string, number>>(
  (acc, s) => ({ ...acc, [s.venue.slug]: (acc[s.venue.slug] ?? 0) + 1 }),
  {}
);

export type Layer = "night" | "lights" | "clouds" | "birds" | "labels";
export type MapLayers = Record<Layer, boolean>;

export const DEFAULT_LAYERS: MapLayers = {
  night: true,
  lights: true,
  clouds: true,
  birds: true,
  labels: true,
};

const LAYERS: { key: Layer; label: string }[] = [
  { key: "night", label: "Night" },
  { key: "lights", label: "Lights" },
  { key: "clouds", label: "Clouds" },
  { key: "birds", label: "Birds" },
  { key: "labels", label: "Labels" },
];

/** Night / Lights / Clouds / Birds / Labels toggles. */
export function MapLayerControls({
  layers,
  onToggle,
  className = "",
}: {
  layers: MapLayers;
  onToggle: (key: Layer) => void;
  className?: string;
}) {
  return (
    <nav className={`${styles.bar} ${className}`} aria-label="Map layers">
      {LAYERS.map(({ key, label }) => (
        <button key={key} type="button" aria-pressed={layers[key]} onClick={() => onToggle(key)}>
          {label}
        </button>
      ))}
    </nav>
  );
}

interface CampusMapProps {
  /** Venue to centre and zoom into (venue page "walk-in" view). */
  focusSlug?: string;
  /** Zoom towards a venue while its label is hovered. */
  hoverZoom?: boolean;
  showControls?: boolean;
  /** Fade the map's edges into the page background. */
  edgeFade?: boolean;
  /** Stretch the map to fill its container instead of keeping its aspect ratio. */
  fill?: boolean;
  /** Controlled layer visibility (the toggles are then rendered by the parent). */
  layers?: MapLayers;
  className?: string;
  style?: React.CSSProperties;
}

export function CampusMap({
  focusSlug,
  hoverZoom = false,
  showControls = true,
  edgeFade = false,
  fill = false,
  layers: controlledLayers,
  className = "",
  style,
}: CampusMapProps) {
  const [ownLayers, setLayers] = useState<MapLayers>(DEFAULT_LAYERS);
  const layers = controlledLayers ?? ownLayers;
  const [hovered, setHovered] = useState<Venue | null>(null);

  const focused = VENUES.find((v) => v.slug === focusSlug);

  // Walk-in view: zoom around the venue and move it to the centre.
  // Hover view: zoom around the label so it stays under the cursor.
  let transform = "none";
  let origin = "50% 50%";
  if (focused) {
    const [fx, fy] = focused.anchor ?? [focused.x, focused.y];
    origin = `${fx}% ${fy}%`;
    transform = `translate(${50 - fx}%, ${50 - fy}%) scale(2.2)`;
  } else if (hoverZoom && hovered) {
    origin = `${hovered.x}% ${hovered.y}%`;
    transform = "scale(1.5)";
  }

  const toggle = (key: Layer) => setLayers((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      className={`${styles.map} ${layers.night ? styles.night : ""} ${edgeFade ? styles.fade : ""} ${fill ? styles.fill : ""} ${className}`}
      style={style}
      onMouseLeave={() => setHovered(null)}
    >
      <div className={styles.stage} style={{ transform, transformOrigin: origin }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/schedule-map/campus-day.jpg"
          alt="Map of the IIT (BHU) campus"
          draggable={false}
          loading="eager"
          decoding="async"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.nt}
          src="/schedule-map/campus-night.jpg"
          alt=""
          draggable={false}
          loading="lazy"
          decoding="async"
        />

        {/* Twinkling lamps */}
        <div className={`${styles.layer} ${layers.lights ? "" : styles.off}`}>
          {LAMPS.map(([x, y], i) => (
            <i
              key={i}
              className={styles.lamp}
              style={
                {
                  left: `${x}%`,
                  top: `${y}%`,
                  "--d": `${seeded(i, 1.6, 4.8)}s`,
                  "--l": `-${seeded(i + 500, 0, 5)}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Drifting clouds */}
        <div className={`${styles.layer} ${layers.clouds ? "" : styles.off}`}>
          {CLOUDS.map(([top, duration], i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              className={styles.cloud}
              src={`/schedule-map/cloud-${(i % 3) + 1}.png`}
              alt=""
              loading="lazy"
              decoding="async"
              style={
                {
                  top: `${top}%`,
                  "--d": `${duration}s`,
                  "--l": `-${seeded(i + 900, 0, duration)}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Birds */}
        <div className={`${styles.layer} ${layers.birds ? "" : styles.off}`}>
          {FLOCKS.map(([top, duration, rise], i) => (
            <div
              key={i}
              className={styles.flock}
              style={
                {
                  top: `${top}%`,
                  "--d": `${duration}s`,
                  "--l": `-${i * 13}s`,
                  "--rise": `${rise}%`,
                } as React.CSSProperties
              }
            >
              {FLOCK_SHAPE.map(([x, y], j) => (
                <svg
                  key={j}
                  className={styles.bird}
                  viewBox="0 0 24 12"
                  style={
                    {
                      "--x": `${x}%`,
                      "--y": `${y + 40}%`,
                      "--l": `-${seeded(i * 10 + j + 1200, 0, 1)}s`,
                    } as React.CSSProperties
                  }
                >
                  <path d="M0 7Q6 0 12 6Q18 0 24 7Q18 4 12 9Q6 4 0 7Z" />
                </svg>
              ))}
            </div>
          ))}
        </div>

        {/* Venue labels */}
        <div className={`${styles.layer} ${styles.labels} ${layers.labels ? "" : styles.off}`}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points={MAIN_BUILDING_OUTLINE} />
            {VENUES.map((v) =>
              v.anchor ? (
                <line key={v.slug} x1={v.x} y1={v.y} x2={v.anchor[0]} y2={v.anchor[1]} />
              ) : null
            )}
          </svg>

          {VENUES.map((v) => {
            const className = `${styles.lb} ${TONE_CLASS[v.tone]} ${v.large ? styles.xl : ""} ${
              v.slug === focusSlug || v.slug === hovered?.slug ? styles.active : ""
            }`;
            const position = { left: `${v.x}%`, top: `${v.y}%` };
            const count = EVENT_COUNTS[v.slug] ?? 0;

            return (
              <span key={v.slug}>
                {v.anchor && (
                  <i
                    className={`${styles.dot} ${TONE_CLASS[v.tone]}`}
                    style={{ left: `${v.anchor[0]}%`, top: `${v.anchor[1]}%` }}
                  />
                )}
                {v.clickable === false ? (
                  <div className={className} style={position}>
                    {v.label}
                  </div>
                ) : (
                  <Link
                    href={`/schedule/${v.slug}`}
                    className={className}
                    style={position}
                    aria-label={`${v.name} — ${count} ${count === 1 ? "event" : "events"}`}
                    onMouseEnter={() => setHovered(v)}
                    onFocus={() => setHovered(v)}
                    onBlur={() => setHovered(null)}
                  >
                    {v.label}
                    {count > 0 && <span className={styles.count}>{count}</span>}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>

      {showControls && !controlledLayers && <MapLayerControls layers={layers} onToggle={toggle} />}
    </div>
  );
}
