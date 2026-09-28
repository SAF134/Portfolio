"use client";

import React from "react";
import { Building2, Calendar, MapPin, Code2 } from "lucide-react";
import { ExperienceItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: ExperienceItem;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] bg-white border border-[#E4E4E7] p-6 md:p-9 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-zinc-400 transition-all duration-200",
        className
      )}
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#E4E4E7]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-[#E4E4E7] flex items-center justify-center shrink-0 text-zinc-700">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#09090B] tracking-tight">
              {experience.role}
            </h3>
            <p className="text-sm md:text-base font-semibold text-zinc-700 mt-0.5">
              {experience.company}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs md:text-sm text-[#71717A] font-mono">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Bullet Points Grid */}
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {experience.bulletPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#09090B] mt-2 shrink-0" />
            <p className="text-xs md:text-sm text-[#52525B] leading-relaxed">
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies Used Footer */}
      <div className="pt-6 border-t border-[#E4E4E7]">
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="w-4 h-4 text-zinc-500" />
          <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase">
            Teknologi yang Digunakan
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 border border-[#E4E4E7] text-[#09090B]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
