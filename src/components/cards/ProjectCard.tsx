"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);
  const hasImage = Boolean(project.mockupImage && project.mockupImage.trim() !== "");

  return (
    <article
      className={cn(
        "group flex flex-col h-full rounded-[24px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-zinc-400 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300",
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
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
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

        <p className="mt-2.5 text-xs md:text-sm text-[#52525B] line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5 items-center">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-zinc-100 text-[#09090B] border border-[#E4E4E7]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Conditional Action Buttons */}
        {hasLinks && (
          <div className="mt-6 pt-5 border-t border-[#E4E4E7] flex items-center gap-3">
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
          </div>
        )}
      </div>
    </article>
  );
}
