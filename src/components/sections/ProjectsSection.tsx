"use client";

import React from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolioData";
import { useGalleryModal } from "@/hooks/useGalleryModal";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const {
    selectedIndex,
    setSelectedIndex,
    handlePrev,
    handleNext,
    closeModal,
  } = useGalleryModal({ totalItems: projects.length });

  const currentProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section id="proyek" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              Riwayat <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Proyek</span><span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#000000] max-w-lg mx-auto leading-relaxed">
              Riwayat proyek yang pernah saya bangun selama menempuh pendidikan.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Responsive Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) * 0.1}>
              <ProjectCard
                project={project}
                index={index}
                onViewDetail={() => setSelectedIndex(index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={currentProject}
        currentIndex={selectedIndex ?? 0}
        totalProjects={projects.length}
        onClose={closeModal}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
