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
        "flex flex-col rounded-[20px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-200",
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
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 text-zinc-400 p-4 text-center">
            <Award className="w-8 h-8 text-zinc-300 mb-1.5" />
            <span className="text-xs font-mono font-medium text-zinc-500">A4 Landscape (29,7 : 21)</span>
            <span className="text-[11px] text-zinc-400 mt-0.5">Siap dimasukkan gambar</span>
          </div>
        )}
      </div>

      {/* Card Action Bar with explicit "Lihat Detail" Button */}
      {hasImage && (
        <div className="p-3.5 bg-white border-t border-[#E4E4E7] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-medium">
            <Award className="w-3.5 h-3.5 text-zinc-400" />
            <span>Sertifikat {index !== undefined ? `#${index + 1}` : ""}</span>
          </div>

          <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-semibold shadow-sm hover:shadow transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Lihat Detail</span>
          </button>
        </div>
      )}

      {/* Screen-reader descriptive caption */}
      <div className="sr-only">
        <h4>Sertifikat</h4>
      </div>
    </div>
  );
}
