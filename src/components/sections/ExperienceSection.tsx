"use client";

import React from "react";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-5xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              Pengalaman Kerja Praktik &amp; <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Organisasi</span><span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#000000] max-w-md mx-auto">
              Jejak pengalaman kerja praktik & organisasi selama menempuh pendidikan.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <ExperienceCard experience={exp} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
