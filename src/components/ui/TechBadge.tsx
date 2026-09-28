"use client";

import React from "react";
import * as SimpleIcons from "simple-icons";
import { cn } from "@/lib/utils";

// Mapping of normalized technology names to SimpleIcons export keys
const techIconMap: Record<string, string> = {
  flutter: "siFlutter",
  firebase: "siFirebase",
  googlestitch: "siGoogle",
  stitch: "siGoogle",
  laravel: "siLaravel",
  leafletmap: "siLeaflet",
  leaflet: "siLeaflet",
  bootstrap: "siBootstrap",
  html: "siHtml5",
  html5: "siHtml5",
  css: "siCss",
  css3: "siCss",
  js: "siJavascript",
  javascript: "siJavascript",
  tailwindcss: "siTailwindcss",
  tailwind: "siTailwindcss",
  mysql: "siMysql",
  php: "siPhp",
  react: "siReact",
  reactjs: "siReact",
  nextjs: "siNextdotjs",
  nextdotjs: "siNextdotjs",
  typescript: "siTypescript",
  nodejs: "siNodedotjs",
  nodedotjs: "siNodedotjs",
  figma: "siFigma",
  arduinoide: "siArduino",
  arduino: "siArduino",
  git: "siGit",
  spreadsheet: "siGooglesheets",
  googlesheets: "siGooglesheets",
};

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  const norm = name.toLowerCase().replace(/[\s\-_.]/g, "");
  const iconKey = techIconMap[norm] || techIconMap[name.toLowerCase()];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = iconKey ? (SimpleIcons as any)[iconKey] : null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-zinc-100 text-[#09090B] border border-[#E4E4E7]",
        className
      )}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5 text-zinc-700 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
      )}
      <span>{name}</span>
    </span>
  );
}
