// ═══════════════════════════════════════════════════════════════════
// SCHEDULE PAGE CONSTANTS
// ═══════════════════════════════════════════════════════════════════

import type { Layer, MapLayers, LayerConfig } from "../types";

export const DEFAULT_LAYERS: MapLayers = {
  night: true,
  lights: true,
  clouds: true,
  birds: true,
  labels: true,
};

export const LAYERS: LayerConfig[] = [
  { key: "night", label: "Night", icon: "🌙" },
  { key: "lights", label: "Lights", icon: "💡" },
  { key: "clouds", label: "Clouds", icon: "☁️" },
  { key: "birds", label: "Birds", icon: "🐦" },
  { key: "labels", label: "Labels", icon: "🏷️" },
];

export const TONE_COLORS: Record<string, string> = {
  blue: "#8b93ff",
  red: "#ff4d5e",
  green: "#3fe08a",
  white: "#f3ead6",
  text: "#efe4cc",
};
