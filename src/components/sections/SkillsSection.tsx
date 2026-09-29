"use client";

import React from "react";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { portfolioData } from "@/data/portfolioData";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="keahlian" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl w-full mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          Keahlian <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Teknis</span><span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
          Teknologi dan alat yang pernah saya gunakan untuk merancang dan membangun berbagai macam aplikasi dan website.
        </p>

        {/* Skills Pills Grid */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              slug={skill.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
