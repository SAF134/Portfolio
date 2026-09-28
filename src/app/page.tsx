import React from "react";
import { FloatingNavbar } from "@/components/navigation/FloatingNavbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Persistant Adaptive Floating Navigation */}
      <FloatingNavbar />

      {/* Main Single Page Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>

      {/* Minimal Architectural Footer */}
      <footer className="py-8 pb-24 md:pb-8 bg-white border-t border-[#E4E4E7] text-center">
        <p className="text-xs text-[#71717A] font-mono">
          &copy; {new Date().getFullYear()} Syauqi Akmal Fadhali - Portfolio.
        </p>
      </footer>
    </div>
  );
}
