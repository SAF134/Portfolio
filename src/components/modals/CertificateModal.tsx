"use client";

import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CertificateItem } from "@/types/portfolio";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  currentIndex: number;
  totalCertificates: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function CertificateModal({
  certificate,
  currentIndex,
  totalCertificates,
  onClose,
  onPrev,
  onNext,
}: CertificateModalProps) {
  if (!certificate || !certificate.image || typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Detail sertifikat"
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
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[var(--card-bg)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-10px_rgba(0,0,0,0.55)] border-2 border-[var(--card-border)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b-2 border-[var(--card-border)] bg-[var(--card-bg)]">
          <div className="flex items-center gap-2.5">
            <span className="text-sm sm:text-base font-bold text-[#000000] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
              Pratinjau Sertifikat
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pratinjau sertifikat"
              className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-100 hover:rotate-90 hover:scale-105 active:scale-90 shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body with navigation arrows */}
        <div className="relative flex-1 min-h-0 bg-zinc-950/5 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Previous Button */}
          {totalCertificates > 1 && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Sertifikat sebelumnya"
              className="absolute left-3 sm:left-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/95 hover:bg-white text-zinc-800 hover:text-black shadow-[0_4px_16px_rgba(0,0,0,0.35)] border-2 border-black flex items-center justify-center hover:scale-115 active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          )}

          {/* Certificate Image Frame (A4 Landscape 29,7 : 21) */}
          <div className="relative w-full max-w-4xl aspect-[297/210] bg-white rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-black">
            <Image
              src={certificate.image}
              alt={`Sertifikat ${currentIndex + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={85}
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          {totalCertificates > 1 && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Sertifikat berikutnya"
              className="absolute right-3 sm:right-5 z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-white/95 hover:bg-white text-zinc-800 hover:text-black shadow-[0_4px_16px_rgba(0,0,0,0.35)] border-2 border-black flex items-center justify-center hover:scale-115 active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          )}
        </div>

        {/* Modal Footer Hint */}
        <div className="px-5 py-3 border-t-2 border-[var(--card-border)] bg-zinc-50 flex items-center justify-between text-xs text-zinc-500">
          <span className="font-mono text-zinc-400 ml-auto">
            {currentIndex + 1} / {totalCertificates}
          </span>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
