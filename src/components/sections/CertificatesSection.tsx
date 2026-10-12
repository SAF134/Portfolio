"use client";

import React from "react";
import { CertificateCard } from "@/components/cards/CertificateCard";
import { CertificateModal } from "@/components/modals/CertificateModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolioData";
import { useGalleryModal } from "@/hooks/useGalleryModal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function CertificatesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { certificates } = portfolioData;
  const {
    selectedIndex,
    setSelectedIndex,
    handlePrev,
    handleNext,
    closeModal,
  } = useGalleryModal({ totalItems: certificates.length });

  const currentCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  return (
    <section id="sertifikat" className="pt-20 md:pt-28 pb-28 md:pb-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              {t.certificates.titlePart1}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">{t.certificates.titleAccent}</span><span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#000000] max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              {t.certificates.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Certificates Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={(index % 3) * 0.1}>
              <CertificateCard
                certificate={cert}
                index={index}
                onClick={() => setSelectedIndex(index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        certificate={currentCert}
        currentIndex={selectedIndex ?? 0}
        totalCertificates={certificates.length}
        onClose={closeModal}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
