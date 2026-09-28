"use client";

import React from "react";
import Image from "next/image";
import { CertificateItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  certificate: CertificateItem;
  className?: string;
}

export function CertificateCard({ certificate, className }: CertificateCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-[20px] bg-white border border-[#E4E4E7] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-200",
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
      </div>

      {/* Screen-reader descriptive caption */}
      <div className="sr-only">
        <h4>{certificate.title}</h4>
        <p>Diterbitkan oleh {certificate.issuer} pada {certificate.date}</p>
      </div>
    </div>
  );
}
