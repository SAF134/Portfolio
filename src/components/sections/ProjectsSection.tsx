"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ExternalLink, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { portfolioData } from "@/data/portfolioData";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + projects.length) % projects.length);
  }, [selectedIndex, projects.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % projects.length);
  }, [selectedIndex, projects.length]);

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  const currentProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const hasImage = Boolean(
    currentProject &&
    currentProject.mockupImage &&
    currentProject.mockupImage.trim() !== "" &&
    !currentProject.mockupImage.endsWith("/")
  );

  return (
    <section id="proyek" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Riwayat <span className="text-zinc-500">Proyek</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#52525B] max-w-lg mx-auto leading-relaxed">
            Riwayat proyek yang pernah saya bangun selama menempuh pendidikan.
          </p>
        </div>

        {/* Projects Responsive Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetail={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Lightbox Modal rendered via Portal to document.body */}
      {currentProject && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detail proyek ${currentProject.title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-[#E4E4E7] bg-white">
              <div className="flex items-center gap-2.5">
                <span className="text-sm sm:text-base font-bold text-[#09090B] tracking-tight">
                  {currentProject.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200">
                  {selectedIndex! + 1} dari {projects.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                )}

                {currentProject.repoUrl && (
                  <a
                    href={currentProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Source Code</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Tutup detail proyek"
                  className="w-9 h-9 rounded-full border border-[#E4E4E7] flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable Content with Mockup and Full Description */}
            <div className="flex-1 min-h-0 overflow-y-auto">
              {/* Mockup Container with Nav Arrows */}
              <div className="relative w-full aspect-[16/9] bg-zinc-950 flex items-center justify-center overflow-hidden">
                {/* Previous Button */}
                {projects.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Proyek sebelumnya"
                    className="absolute left-3 sm:left-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-black shadow-lg border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                  >
                    <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                  </button>
                )}

                {/* Mockup Image or Placeholder */}
                {hasImage ? (
                  <Image
                    src={currentProject.mockupImage}
                    alt={`Pratinjau antarmuka ${currentProject.title}`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    quality={95}
                    priority
                    className="object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-zinc-400 p-6 text-center">
                    <ImageIcon className="w-12 h-12 text-zinc-500 mb-2" />
                    <span className="text-sm font-mono text-zinc-300">Rasio 16:9</span>
                    <span className="text-xs text-zinc-400 mt-1">Belum ada gambar yang dimasukkan</span>
                  </div>
                )}

                {/* Next Button */}
                {projects.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Proyek berikutnya"
                    className="absolute right-3 sm:right-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-black shadow-lg border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                  >
                    <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                  </button>
                )}
              </div>

              {/* Full Description & Tech Stack */}
              <div className="p-6 sm:p-8 space-y-6 bg-white">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                    Deskripsi Lengkap Proyek
                  </h4>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-700 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-3">
                    Tools & Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Hint */}
            <div className="px-5 py-3 border-t border-[#E4E4E7] bg-zinc-50 flex items-center justify-between text-xs text-zinc-500">
              <span className="hidden sm:inline">
                Gunakan tombol panah ◀ ▶ pada keyboard untuk navigasi cepat antar proyek.
              </span>
              <span className="sm:hidden">
                Ketuk tombol panah untuk melihat proyek lainnya.
              </span>
              <span className="font-mono text-zinc-400 ml-auto">
                {selectedIndex! + 1} / {projects.length}
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
