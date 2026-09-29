"use client";

import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ExternalLink, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectItem } from "@/types/portfolio";
import { sanitizeExternalUrl } from "@/lib/utils";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  currentIndex: number;
  totalProjects: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectDetailModal({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onPrev,
  onNext,
}: ProjectDetailModalProps) {
  if (!project || typeof document === "undefined") return null;

  const rawProjectUrl = project.projectUrl && project.projectUrl.trim() !== ""
    ? project.projectUrl
    : (project.liveUrl || project.repoUrl);

  const projectUrl = sanitizeExternalUrl(rawProjectUrl);

  const hasImage = Boolean(
    project.mockupImage &&
    project.mockupImage.trim() !== "" &&
    !project.mockupImage.endsWith("/")
  );

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detail proyek ${project.title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-[#E4E4E7] bg-white">
          <div className="flex items-center gap-2.5">
            <span className="text-sm sm:text-base font-bold text-[#09090B] tracking-tight">
              {project.title}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200">
              {currentIndex + 1} dari {totalProjects}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-xs font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_-4px_rgba(37,99,235,0.4)] border border-zinc-800 hover:border-blue-500/50 transition-all duration-200"
                title="Buka bukti proyek di tab baru"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
                <span className="hidden sm:inline">Bukti Proyek</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
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
            {totalProjects > 1 && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Proyek sebelumnya"
                className="absolute left-3 sm:left-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-black shadow-lg border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>
            )}

            {/* Mockup Image or Placeholder */}
            {hasImage ? (
              <Image
                src={project.mockupImage}
                alt={`Pratinjau antarmuka ${project.title}`}
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
            {totalProjects > 1 && (
              <button
                type="button"
                onClick={onNext}
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
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-3">
                Tools & Teknologi yang Digunakan
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            {/* Bukti & Tautan Proyek Section */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-3">
                Bukti &amp; Tautan Proyek
              </h4>
              {projectUrl ? (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_28px_-4px_rgba(37,99,235,0.45)] border border-zinc-800 hover:border-blue-500/50 transition-all duration-200 active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka Bukti Proyek (Tautan Eksternal)</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-dashed border-zinc-300 text-zinc-500 text-xs">
                  <span>Tautan bukti proyek belum ditambahkan (dapat diisi pada baris <code>projectUrl</code> di <code>src/data/portfolioData.ts</code>).</span>
                </div>
              )}
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
            {currentIndex + 1} / {totalProjects}
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
}
