"use client";

import React from "react";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolioData";

export function SkillsSection() {
  const { skills } = portfolioData;

  // Baris 1: Flutter, ReactJS, TailwindCSS, Next.js, Firebase, Arduino IDE
  const row1 = skills.slice(0, 6);

  // Baris 2: TypeScript, Google Stitch, Figma, Node.js, Leaflet Map
  const row2 = skills.slice(6);

  // Duplikasi item beberapa kali per blok agar track padat dan mulus di semua ukuran layar
  const row1Track = [...row1, ...row1, ...row1, ...row1];
  const row2Track = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="keahlian" className="py-20 md:py-28 bg-white overflow-hidden">
      {/* Embedded CSS Keyframes & Utilities untuk performa 60fps & keandalan render */}
      <style>{`
        @keyframes marquee-ltr {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        @keyframes marquee-rtl {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .marquee-ltr-track {
          animation: marquee-ltr 35s linear infinite;
          will-change: transform;
        }

        .marquee-rtl-track {
          animation: marquee-rtl 35s linear infinite;
          will-change: transform;
        }

        .marquee-ltr-track:hover,
        .marquee-rtl-track:hover,
        .group:hover .marquee-ltr-track,
        .group:hover .marquee-rtl-track {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12 text-center">
        {/* Section Heading */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            Keahlian <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Teknis</span><span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#000000] max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
            Teknologi dan alat yang pernah saya gunakan untuk merancang dan membangun berbagai macam aplikasi dan website.
          </p>
        </ScrollReveal>

        {/* 2-Row Animated Infinite Marquee Slider */}
        <ScrollReveal delay={0.15}>
          <div className="relative mt-12 md:mt-16 w-full overflow-hidden py-4 flex flex-col gap-4 sm:gap-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {/* Subtle Gradient Fade Masks on Left & Right Edges */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-20 bg-gradient-to-r from-white via-white/80 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-20 bg-gradient-to-l from-white via-white/80 to-transparent"
              aria-hidden="true"
            />

            {/* Baris 1: Bergerak Looping dari Kiri ke Kanan (Left-to-Right) */}
            <div className="group relative flex w-full overflow-hidden py-2">
              <div className="flex w-max shrink-0 marquee-ltr-track group-hover:[animation-play-state:paused]">
                {/* Blok 1 */}
                <div className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4">
                  {row1Track.map((skill, idx) => (
                    <SkillBadge
                      key={`r1-a-${skill.slug}-${idx}`}
                      name={skill.name}
                      slug={skill.slug}
                    />
                  ))}
                </div>
                {/* Blok 2 (Duplikasi identik untuk infinite looping tanpa jeda) */}
                <div className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4" aria-hidden="true">
                  {row1Track.map((skill, idx) => (
                    <SkillBadge
                      key={`r1-b-${skill.slug}-${idx}`}
                      name={skill.name}
                      slug={skill.slug}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Baris 2: Bergerak Looping dari Kanan ke Kiri (Right-to-Left) */}
            <div className="group relative flex w-full overflow-hidden py-2">
              <div className="flex w-max shrink-0 marquee-rtl-track group-hover:[animation-play-state:paused]">
                {/* Blok 1 */}
                <div className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4">
                  {row2Track.map((skill, idx) => (
                    <SkillBadge
                      key={`r2-a-${skill.slug}-${idx}`}
                      name={skill.name}
                      slug={skill.slug}
                    />
                  ))}
                </div>
                {/* Blok 2 (Duplikasi identik untuk infinite looping tanpa jeda) */}
                <div className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4" aria-hidden="true">
                  {row2Track.map((skill, idx) => (
                    <SkillBadge
                      key={`r2-b-${skill.slug}-${idx}`}
                      name={skill.name}
                      slug={skill.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
