"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Maximize2, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  className?: string;
  onViewDetail?: () => void;
}

export function ProjectCard({ project, index, className, onViewDetail }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);
  const hasImage = Boolean(
    project.mockupImage &&
    project.mockupImage.trim() !== "" &&
    !project.mockupImage.endsWith("/") &&
    !imgError
  );

  return (
    <article
      className={cn(
        "flex flex-col h-full rounded-[24px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300",
        className
      )}
    >
      {/* Mockup Preview Container (Strict 16:9 Aspect Ratio) */}
      <div className="relative w-full aspect-[16/9] bg-zinc-100 border-b border-[#E4E4E7] overflow-hidden">
        {hasImage ? (
          <Image
            src={project.mockupImage}
            alt={`Pratinjau antarmuka ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 text-zinc-400 p-4 text-center">
            <ImageIcon className="w-8 h-8 text-zinc-300 mb-1.5" />
            <span className="text-xs font-mono font-medium text-zinc-500">Rasio 16:9</span>
            <span className="text-[11px] text-zinc-400 mt-0.5">Siap dimasukkan gambar</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3 className="text-lg md:text-xl font-bold text-[#09090B] tracking-tight line-clamp-1">
          {project.title}
        </h3>

        {/* Clean clamped description */}
        <p className="mt-2.5 text-xs md:text-sm text-[#52525B] line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Badges with Icons */}
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5 items-center">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Card Footer / Action Bar */}
        <div className="mt-6 pt-5 border-t border-[#E4E4E7] flex items-center justify-between gap-2">
          {/* Optional Direct Links */}
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#09090B] hover:underline"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52525B] hover:text-[#09090B] hover:underline"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {!hasLinks && index !== undefined && (
              <span className="text-xs font-mono font-medium text-zinc-400">
                Proyek #{index + 1}
              </span>
            )}
          </div>

          {/* Explicit "Lihat Detail" Button with exclusive hit box */}
          <button
            type="button"
            onClick={onViewDetail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-semibold shadow-sm hover:shadow transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 ml-auto"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Lihat Detail</span>
          </button>
        </div>
      </div>
    </article>
  );
}
