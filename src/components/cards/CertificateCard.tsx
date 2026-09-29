"use client";

import React from "react";
import Image from "next/image";
import { Maximize2, Award } from "lucide-react";
import { CertificateItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  certificate: CertificateItem;
  index?: number;
  className?: string;
  onClick?: () => void;
}

export function CertificateCard({ certificate, index, className, onClick }: CertificateCardProps) {
  const hasImage = Boolean(
    certificate.image &&
    certificate.image.trim() !== "" &&
    !certificate.image.endsWith("/")
  );

  return (
    <div
      className={cn(
        "group flex flex-col rounded-[20px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),0_10px_30px_-10px_rgba(245,158,11,0.07)] hover:border-amber-400/60 hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.2)] hover:-translate-y-1.5 transition-all duration-300 ease-out",
        className
      )}
    >
      {/* A4 Landscape (29,7 : 21 / 1,414:1) Aspect Ratio Image Frame */}
      <div className="relative w-full aspect-[297/210] bg-zinc-50 overflow-hidden">
        {hasImage ? (
          <Image
            src={certificate.image}
            alt="Gambar Sertifikat"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 text-zinc-400 p-4 text-center">
            <Award className="w-8 h-8 text-zinc-300 mb-1.5" />
            <span className="text-xs font-mono font-medium text-zinc-600">A4 Landscape (29,7 : 21)</span>
            <span className="text-[11px] text-zinc-600 mt-0.5">Proyek ini sedang dalam proses pembuatan</span>
          </div>
        )}
      </div>

      {/* Card Action Bar with explicit "Lihat Detail" Button */}
      {hasImage && (
        <div className="p-3.5 bg-white border-t border-[#E4E4E7] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-zinc-600 text-xs font-medium">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Sertifikat {index !== undefined ? `#${index + 1}` : ""}</span>
          </div>

          <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-xs font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_-4px_rgba(245,158,11,0.4)] border border-zinc-800 hover:border-amber-500/50 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Lihat Detail</span>
          </button>
        </div>
      )}

      {/* Screen-reader descriptive caption */}
      <div className="sr-only">
        <h3>Sertifikat</h3>
      </div>
    </div>
  );
}
