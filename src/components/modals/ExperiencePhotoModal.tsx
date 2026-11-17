"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { ExperienceItem } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";

interface ExperiencePhotoModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export function ExperiencePhotoModal({
  experience,
  onClose,
}: ExperiencePhotoModalProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = (experience?.activityPhotos ?? []).filter(
    (src) => src && src.trim() !== "" && !src.endsWith("/")
  );
  const totalPhotos = photos.length;
  const safeIndex = totalPhotos > 0 ? currentIndex % totalPhotos : 0;

  const handlePrev = useCallback(() => {
    if (totalPhotos <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  const handleNext = useCallback(() => {
    if (totalPhotos <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  useEffect(() => {
    if (!experience) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
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
  }, [experience, onClose, handlePrev, handleNext]);

  if (!experience || typeof document === "undefined") return null;

  const currentPhoto = photos[safeIndex];

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${t.experiencePhotoModal.title} - ${experience.company}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className={cn(
          "relative flex flex-col bg-[var(--card-bg)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-10px_rgba(0,0,0,0.55)] border-2 border-[var(--card-border)] max-h-[92vh]",
          totalPhotos > 0
            ? "w-fit max-w-[92vw] sm:max-w-4xl min-w-[280px] sm:min-w-[360px]"
            : "w-full max-w-lg"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-3.5 sm:py-4 border-b-2 border-[var(--card-border)] bg-[var(--card-bg)]">
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-[#000000] tracking-tight truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
              {t.experiencePhotoModal.title}
            </h3>
            <p className="text-xs text-zinc-600 truncate mt-0.5">
              {experience.role} &middot; {experience.company}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.experiencePhotoModal.closeAria}
            className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-100 hover:rotate-90 hover:scale-105 active:scale-90 shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Adapts automatically to the photo's natural dimensions */}
        <div className="relative flex-1 min-h-0 bg-zinc-950/5 flex items-center justify-center p-3 sm:p-6 overflow-auto">
          {totalPhotos > 0 ? (
            <>
              {/* Previous Button */}
              {totalPhotos > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={t.experiencePhotoModal.prevAria}
                  className="absolute left-3 sm:left-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/95 hover:bg-white text-zinc-800 hover:text-black shadow-[0_4px_16px_rgba(0,0,0,0.35)] border-2 border-black flex items-center justify-center hover:scale-115 active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 cursor-pointer"
                >
                  <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              )}

              <Image
                key={currentPhoto}
                src={currentPhoto}
                alt={`${t.experiencePhotoModal.title} - ${experience.company} (${safeIndex + 1})`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 90vw, 896px"
                quality={85}
                className="w-auto h-auto max-w-full max-h-[72vh] object-contain rounded-xl border-2 border-black shadow-[0_4px_16px_rgba(0,0,0,0.18)] bg-white"
              />

              {/* Next Button */}
              {totalPhotos > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={t.experiencePhotoModal.nextAria}
                  className="absolute right-3 sm:right-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/95 hover:bg-white text-zinc-800 hover:text-black shadow-[0_4px_16px_rgba(0,0,0,0.35)] border-2 border-black flex items-center justify-center hover:scale-115 active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 cursor-pointer"
                >
                  <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-10 px-6">
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-black shadow-[0_4px_12px_rgba(0,0,0,0.12)] flex items-center justify-center mb-3 text-zinc-700">
                <ImageIcon className="w-7 h-7" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm leading-relaxed">
                {t.experiencePhotoModal.emptyNotice}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t-2 border-[var(--card-border)] bg-zinc-50 flex items-center justify-between text-xs text-zinc-500">
          <span className="truncate pr-3 font-medium text-zinc-600">
            {experience.period}
          </span>
          {totalPhotos > 0 && (
            <span className="font-mono text-zinc-500 shrink-0 ml-auto">
              {safeIndex + 1} / {totalPhotos}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
