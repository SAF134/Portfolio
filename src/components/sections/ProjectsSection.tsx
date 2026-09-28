"use client";

import React from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { portfolioData } from "@/data/portfolioData";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="proyek" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Karya <span className="text-zinc-500">Terbaik</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#52525B] max-w-lg mx-auto leading-relaxed">
            Kumpulan proyek yang telah saya bangun, mulai dari desain antarmuka hingga sistem backend yang kompleks.
          </p>
        </div>

        {/* Projects Responsive Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
