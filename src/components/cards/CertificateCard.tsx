"use client";

import React from "react";
import Image from "next/image";
import { Maximize2, Award } from "lucide-react";
import { CertificateItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  certificate: CertificateItem;
  className?: string;
  onClick?: () => void;
}

export function CertificateCard({ certificate, className, onClick }: CertificateCardProps) {
  const hasImage = Boolean(certificate.image && certificate.image.trim() !== "");

  return (
    <div
      role={hasImage ? "button" : undefined}
      tabIndex={hasImage ? 0 : undefined}
      onClick={hasImage ? onClick : undefined}
      onKeyDown={(e) => {
        if (hasImage && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`Sertifikat ${certificate.title}`}
      className={cn(
        "group relative flex flex-col rounded-[20px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200",
        hasImage
          ? "hover:border-zinc-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          : "cursor-default",
        className
      )}
    >
      {/* A4 Landscape (29,7 : 21 / 1,414:1) Aspect Ratio Image Frame */}
      <div className="relative w-full aspect-[297/210] bg-zinc-50 overflow-hidden">
        {hasImage ? (
          <>
            <Image
              src={certificate.image}
              alt={`${certificate.title} - ${certificate.issuer}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#09090B] text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Lihat Detail</span>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 text-zinc-400 p-4 text-center">
            <Award className="w-8 h-8 text-zinc-300 mb-1.5" />
            <span className="text-xs font-mono font-medium text-zinc-500">A4 Landscape (29,7 : 21)</span>
            <span className="text-[11px] text-zinc-400 mt-0.5">Siap dimasukkan gambar</span>
          </div>
        )}
      </div>

      {/* Screen-reader descriptive caption */}
      <div className="sr-only">
        <h4>{certificate.title}</h4>
        <p>Diterbitkan oleh {certificate.issuer} pada {certificate.date}</p>
      </div>
    </div>
  );
}
