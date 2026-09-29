"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, Users, Calendar, MapPin, Wrench } from "lucide-react";
import { ExperienceItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: ExperienceItem;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const isOrganisasi =
    experience.id === "organisasi" ||
    experience.role.toLowerCase().includes("organisasi") ||
    experience.company.toLowerCase().includes("organisasi") ||
    experience.company.toLowerCase().includes("persatuan");

  const HeaderIcon = isOrganisasi ? Users : Briefcase;

  return (
    <article
      className={cn(
        "rounded-[24px] bg-white border border-[#E4E4E7] p-6 sm:p-8 md:p-9 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04),0_10px_30px_-10px_rgba(99,102,241,0.06)] hover:border-indigo-400/50 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.16)] hover:-translate-y-1 transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#E4E4E7]">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-2xl bg-zinc-100 border border-[#E4E4E7] overflow-hidden flex items-center justify-center shrink-0 text-zinc-800">
            {experience.logo ? (
              <Image
                src={experience.logo}
                alt={`Logo ${experience.company}`}
                fill
                sizes="48px"
                className="object-contain p-1.5"
              />
            ) : (
              <HeaderIcon className="w-6 h-6" />
            )}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#09090B] tracking-tight">
              {experience.role}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-1">
              {experience.company}
            </p>

            {experience.location && (
              <div className="flex items-start gap-1.5 text-xs sm:text-sm text-[#52525B] mt-2 max-w-2xl">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{experience.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Periode Badge */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-600 font-mono shrink-0 sm:self-start bg-zinc-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border sm:border-0 border-[#E4E4E7] self-start">
          <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
          <span>{experience.period}</span>
        </div>
      </div>

      {/* Bullet Points List */}
      <div className="py-6 space-y-3">
        {experience.bulletPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed text-left">
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies / Tools Footer */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="pt-5 border-t border-[#E4E4E7] flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-zinc-600 uppercase mr-1">
            <Wrench className="w-3.5 h-3.5 text-zinc-500" />
            <span>Alat &amp; Teknologi:</span>
          </div>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-zinc-50 hover:bg-gradient-to-r hover:from-white hover:to-indigo-50/40 border border-[#E4E4E7] hover:border-indigo-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_-2px_rgba(99,102,241,0.12)] text-[#09090B] transition-all duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
