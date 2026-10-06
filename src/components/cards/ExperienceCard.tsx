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
        "group rounded-[24px] bg-[var(--card-bg)] border-2 border-[var(--card-border)] p-6 sm:p-8 md:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.16),0_4px_14px_rgba(0,0,0,0.1)] hover:border-[var(--card-border-hover)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.28)] hover:-translate-y-1.5 transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b-2 border-[var(--card-border)]">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-2xl bg-[var(--card-inner-bg)] border-2 border-[var(--card-border)] shadow-[0_4px_12px_rgba(0,0,0,0.12)] overflow-hidden flex items-center justify-center shrink-0 text-zinc-800 group-hover:scale-105 transition-transform duration-300">
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
            <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
              {experience.role}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-[#000000] mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              {experience.company}
            </p>

            {experience.location && (
              <div className="flex items-start gap-1.5 text-xs sm:text-sm text-[#000000] mt-2 max-w-2xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                <MapPin className="w-3.5 h-3.5 text-[#000000] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{experience.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Periode Badge */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#000000] font-mono shrink-0 sm:self-start bg-zinc-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border-2 sm:border-0 border-[var(--card-border)] self-start shadow-[0_2px_6px_rgba(0,0,0,0.1)] sm:shadow-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
          <Calendar className="w-3.5 h-3.5 text-[#000000] shrink-0" />
          <span>{experience.period}</span>
        </div>
      </div>

      {/* Bullet Points List */}
      <div className="py-6 space-y-3">
        {experience.bulletPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0 shadow-sm" />
            <p className="text-xs sm:text-sm text-[#000000] leading-relaxed text-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies / Tools Footer */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="pt-5 border-t-2 border-[var(--card-border)] flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-[#000000] uppercase mr-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
            <Wrench className="w-3.5 h-3.5 text-[#000000]" />
            <span>Alat &amp; Teknologi:</span>
          </div>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-zinc-50 hover:bg-gradient-to-r hover:from-white hover:to-indigo-50/40 border-2 border-[var(--card-border)] hover:border-black shadow-[0_2px_8px_rgba(0,0,0,0.14)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.22)] hover:scale-105 hover:-translate-y-0.5 active:scale-95 text-[#000000] transition-all duration-150 select-none cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">{tech}</span>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
