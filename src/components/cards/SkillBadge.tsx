"use client";

import React from "react";
import * as SimpleIcons from "simple-icons";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  slug: string;
  className?: string;
}

// Map slugs to simple-icons export keys
const iconSlugMap: Record<string, string> = {
  laravel: "siLaravel",
  react: "siReact",
  tailwindcss: "siTailwindcss",
  postgresql: "siPostgresql",
  nextdotjs: "siNextdotjs",
  nodedotjs: "siNodedotjs",
  mysql: "siMysql",
  typescript: "siTypescript",
  php: "siPhp",
  figma: "siFigma",
  git: "siGit",
  javascript: "siJavascript",
};

export function SkillBadge({ name, slug, className }: SkillBadgeProps) {
  const iconKey = iconSlugMap[slug];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = iconKey ? (SimpleIcons as any)[iconKey] : null;

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E4E4E7] hover:border-zinc-900 hover:bg-[#F4F4F5] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-150 cursor-default select-none",
        className
      )}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-4 h-4 text-zinc-700 group-hover:text-[#09090B] transition-colors shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-zinc-900 transition-colors" />
      )}
      <span className="text-xs md:text-sm font-medium text-[#09090B] tracking-tight">
        {name}
      </span>
    </div>
  );
}
