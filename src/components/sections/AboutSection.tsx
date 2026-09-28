"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="tentang"
      className="py-20 md:py-28 bg-[#F8F8F8] border-y border-[#E4E4E7]"
    >
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait Photo with Card Background */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] rounded-[28px] overflow-hidden bg-white border border-[#E4E4E7] shadow-[0_12px_32px_rgba(0,0,0,0.06)] group">
            <Image
              src={profile.aboutPortraitImage}
              alt="Portrait Deft Valian Exanova"
              fill
              sizes="(max-width: 768px) 280px, 360px"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right Column: Narrative & Download CTA */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            SAYA{" "}
            <span className="inline-block px-3 py-1 rounded-xl bg-[#09090B] text-white text-2xl sm:text-3xl md:text-4xl">
              DEFT VALIAN
            </span>
          </h2>

          <div className="mt-3">
            <span className="inline-block px-3.5 py-1.5 rounded-lg bg-zinc-200 text-[#09090B] text-xs sm:text-sm font-bold tracking-wider uppercase font-mono">
              {profile.aboutSubtitle}
            </span>
          </div>

          {/* Narrative paragraphs */}
          <div className="mt-6 space-y-4 border-l-2 border-[#09090B] pl-5">
            {profile.aboutParagraphs.map((para, index) => (
              <p
                key={index}
                className="text-sm md:text-base text-[#52525B] leading-relaxed font-normal"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Download CV Action */}
          <div className="mt-8">
            <a
              href={profile.cvPath}
              download="CV_Deft_Valian_Exanova.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#09090B] text-white hover:bg-zinc-800 text-sm font-semibold tracking-tight shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              <Download className="w-4 h-4" />
              <span>UNDUH CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
