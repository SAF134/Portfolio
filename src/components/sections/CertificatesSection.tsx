"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { CertificateCard } from "@/components/cards/CertificateCard";
import { CertificateItem, portfolioData } from "@/data/portfolioData";

export function CertificatesSection() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

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
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && selectedCert.image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Detail sertifikat"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7]">
              <span className="text-sm font-semibold text-[#09090B] tracking-tight">
                Pratinjau Sertifikat
              </span>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup pratinjau sertifikat"
                className="w-9 h-9 rounded-full border border-[#E4E4E7] flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View (A4 Landscape 29,7 : 21) */}
            <div className="relative w-full aspect-[297/210] bg-zinc-100 overflow-hidden">
              <Image
                src={selectedCert.image}
                alt="Gambar Sertifikat"
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain p-2 sm:p-4"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
