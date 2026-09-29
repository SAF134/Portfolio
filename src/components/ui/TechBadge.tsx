"use client";

import React from "react";
import { getTechIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  const icon = getTechIcon(name);

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
