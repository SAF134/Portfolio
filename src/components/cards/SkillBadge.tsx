"use client";

import React from "react";
import { getTechIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  slug: string;
  className?: string;
}

export function SkillBadge({ name, slug, className }: SkillBadgeProps) {
  const icon = getTechIcon(slug) || getTechIcon(name);

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E4E4E7] hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-white hover:to-blue-50/40 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all duration-200 cursor-default select-none",
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
