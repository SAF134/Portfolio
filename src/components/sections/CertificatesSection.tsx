"use client";

import React from "react";
import { CertificateCard } from "@/components/cards/CertificateCard";
import { portfolioData } from "@/data/portfolioData";

export function CertificatesSection() {
  const { certificates } = portfolioData;

  return (
    <section id="sertifikat" className="py-20 md:py-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Sertifikat & <span className="text-zinc-500">Penghargaan</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
            Bukti verifikasi dan sertifikasi resmi kompetensi dalam rekayasa web dan arsitektur sistem.
          </p>
        </div>

        {/* Certificates Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
