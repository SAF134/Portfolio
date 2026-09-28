"use client";

import React from "react";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { portfolioData } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-5xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Pengalaman Kerja Praktik & <span className="text-zinc-500">Organisasi</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
            Jejak pengalaman kerja praktik & organisasi selama menempuh pendidikan.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
