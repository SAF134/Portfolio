"use client";

import React from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { CertificateItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  certificate: CertificateItem;
  className?: string;
  onClick?: () => void;
}

export function CertificateCard({ certificate, className, onClick }: CertificateCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`Lihat sertifikat ${certificate.title}`}
      className={cn(
        "group relative flex flex-col rounded-[20px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
        className
      )}
    >
      {/* 4:3 Aspect Ratio Image Frame */}
      <div className="relative w-full aspect-[4/3] bg-zinc-50 overflow-hidden">
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
      </div>

      {/* Screen-reader descriptive caption */}
      <div className="sr-only">
        <h4>{certificate.title}</h4>
        <p>Diterbitkan oleh {certificate.issuer} pada {certificate.date}</p>
      </div>
    </div>
  );
}
