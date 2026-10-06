"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Maximize2, FolderKanban, Image as ImageIcon } from "lucide-react";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectItem } from "@/data/portfolioData";
import { cn, sanitizeExternalUrl } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  className?: string;
  onViewDetail?: () => void;
}

export function ProjectCard({ project, index, className, onViewDetail }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(
    project.mockupImage &&
    project.mockupImage.trim() !== "" &&
    !project.mockupImage.endsWith("/") &&
    !imgError
  );
  const safeProjectUrl = sanitizeExternalUrl(project.projectUrl);

  return (
    <article
      className={cn(
        "group flex flex-col h-full rounded-[24px] bg-[var(--card-bg)] border-2 border-[var(--card-border)] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.16),0_4px_14px_rgba(0,0,0,0.1)] hover:border-[var(--card-border-hover)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.28)] hover:-translate-y-1.5 transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Mockup Preview Container (Strict 16:9 Aspect Ratio) */}
      <div className="relative w-full aspect-[16/9] bg-zinc-100 border-b-2 border-[var(--card-border)] overflow-hidden">
        {hasImage ? (
          <Image
            src={project.mockupImage}
            alt={`Pratinjau antarmuka ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 text-zinc-400 p-4 text-center">
            <ImageIcon className="w-8 h-8 text-zinc-300 mb-1.5" />
            <span className="text-xs font-mono font-medium text-[#000000] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">Rasio 16:9</span>
            <span className="text-[11px] text-[#000000] mt-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">Proyek ini sedang dalam proses pembuatan</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3 className="text-lg md:text-xl font-bold text-[#000000] tracking-tight line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
          {project.title}
        </h3>

        {/* Clean clamped description */}
        <p className="mt-2.5 text-xs md:text-sm text-[#000000] line-clamp-2 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
          {project.description}
        </p>

        {/* Technology Badges with Icons */}
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5 items-center">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Card Footer / Action Bar */}
        <div className="mt-6 pt-4 border-t-2 border-[var(--card-border)] flex flex-col gap-3">
          {/* Label Proyek: (Icon Proyek) + Proyek #1 */}
          <div className="flex items-center gap-1.5 text-[#000000] text-xs font-mono font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
            <FolderKanban className="w-3.5 h-3.5 text-[#000000]" />
            <span>Proyek {index !== undefined ? `#${index + 1}` : ""}</span>
          </div>

          {/* Action Buttons: Bukti Proyek (Secondary) & Lihat Detail (Primary) */}
          <div className="grid grid-cols-2 gap-2">
            {/* Secondary Action: Bukti Proyek with Ambient Glow on Hover */}
            {safeProjectUrl ? (
              <a
                href={safeProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-gradient-to-r hover:from-white hover:to-blue-50/40 border-2 border-[#000000] hover:border-[#000000] text-zinc-800 hover:text-blue-700 text-xs font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                title="Buka bukti proyek di tab baru"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#000000] group-hover:text-blue-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]">Bukti Proyek</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (onViewDetail) onViewDetail();
                }}
                className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-50/80 hover:bg-zinc-100 border-2 border-dashed border-[#000000] hover:border-[#000000] text-[#000000] hover:text-zinc-800 text-xs font-medium shadow-[0_3px_10px_rgba(0,0,0,0.12)] hover:scale-[1.02] active:scale-95 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                title="Tautan bukti proyek dapat diisi pada portfolioData.ts (Klik untuk melihat detail proyek)"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:scale-110 transition-transform duration-200" />
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">Bukti Proyek</span>
              </button>
            )}

            {/* Primary Action: Explicit "Lihat Detail" Button with Colored Gradient Shadow */}
            <button
              type="button"
              onClick={onViewDetail}
              className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-xs font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.32)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.48)] border-2 border-black hover:border-blue-500/80 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Maximize2 className="w-3.5 h-3.5 group-hover/btn:scale-115 transition-transform duration-200" />
              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">Lihat Detail</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
