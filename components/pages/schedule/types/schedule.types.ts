// ═══════════════════════════════════════════════════════════════════
// SCHEDULE PAGE TYPES
// ═══════════════════════════════════════════════════════════════════

export type Layer = "night" | "lights" | "clouds" | "birds" | "labels";

export type MapLayers = Record<Layer, boolean>;

export interface LayerConfig {
  key: Layer;
  label: string;
  icon: string;
}

export interface NavigationLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}
