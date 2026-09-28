"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { CertificateCard } from "@/components/cards/CertificateCard";
import { portfolioData } from "@/data/portfolioData";

export function CertificatesSection() {
  const { certificates } = portfolioData;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + certificates.length) % certificates.length);
  }, [selectedIndex, certificates.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % certificates.length);
  }, [selectedIndex, certificates.length]);

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

  const currentCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  return (
    <section id="sertifikat" className="pt-20 md:pt-28 pb-28 md:pb-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Sertifikat & <span className="text-zinc-500">Penghargaan</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
            Bukti mengikuti webinar, seminar, serta sertifikasi yang pernah saya ikuti selama menempuh pendidikan.
          </p>
        </div>

        {/* Certificates Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              index={index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal rendered via Portal to document.body */}
      {currentCert && currentCert.image && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Detail sertifikat"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-[#E4E4E7] bg-white">
              <div className="flex items-center gap-2.5">
                <span className="text-sm sm:text-base font-bold text-[#09090B] tracking-tight">
                  Pratinjau Sertifikat
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-medium border border-zinc-200">
                  {selectedIndex! + 1} dari {certificates.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold transition-colors shadow-sm"
                  title="Buka gambar resolusi penuh di tab baru"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
                  <span className="hidden sm:inline">Buka Gambar Penuh</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Tutup pratinjau sertifikat"
                  className="w-9 h-9 rounded-full border border-[#E4E4E7] flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body with navigation arrows */}
            <div className="relative flex-1 min-h-0 bg-zinc-950/5 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
              {/* Previous Button */}
              {certificates.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Sertifikat sebelumnya"
                  className="absolute left-3 sm:left-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-black shadow-lg border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                >
                  <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              )}

              {/* Certificate Image Frame (A4 Landscape 29,7 : 21) */}
              <div className="relative w-full max-w-4xl aspect-[297/210] bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-200">
                <Image
                  src={currentCert.image}
                  alt={`Sertifikat ${selectedIndex! + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  quality={95}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              {certificates.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Sertifikat berikutnya"
                  className="absolute right-3 sm:right-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-black shadow-lg border border-zinc-200 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                >
                  <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              )}
            </div>

            {/* Modal Footer Hint */}
            <div className="px-5 py-3 border-t border-[#E4E4E7] bg-zinc-50 flex items-center justify-between text-xs text-zinc-500">
              <span className="hidden sm:inline">
                Gunakan tombol panah ◀ ▶ pada keyboard untuk navigasi cepat antar sertifikat.
              </span>
              <span className="sm:hidden">
                Ketuk tombol panah untuk melihat sertifikat lainnya.
              </span>
              <a
                href={currentCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-800 hover:underline flex items-center gap-1 ml-auto"
              >
                <span>Lihat resolusi asli</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
