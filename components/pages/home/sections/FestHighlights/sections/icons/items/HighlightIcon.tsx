"use client";

import { MicIcon } from "./MicIcon";
import { DJIcon } from "./DJIcon";
import { StarIcon } from "./StarIcon";
import { BoltIcon } from "./BoltIcon";

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
