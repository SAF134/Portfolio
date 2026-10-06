"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolioData";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="pendidikan" className="py-20 md:py-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-5xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Riwayat <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Pendidikan</span><span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#000000] max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              Latar belakang akademis formal selama menempuh perjalanan pendidikan.
            </p>
          </div>
        </ScrollReveal>

        {/* Education Cards with Ambient Shadow */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div
                className="group rounded-[24px] bg-[var(--card-bg)] border-2 border-[var(--card-border)] p-6 sm:p-8 md:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.16),0_4px_14px_rgba(0,0,0,0.1)] hover:border-[var(--card-border-hover)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.28)] hover:-translate-y-1.5 transition-all duration-300 ease-out"
              >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-2xl bg-[var(--card-inner-bg)] border-2 border-[var(--card-border)] shadow-[0_4px_12px_rgba(0,0,0,0.12)] overflow-hidden flex items-center justify-center shrink-0 text-zinc-800 group-hover:scale-105 transition-transform duration-300">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`Logo ${item.institution || item.degree}`}
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                      />
                    ) : (
                      <GraduationCap className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    {/* 1. Nama Sekolah/Institut/Universitas */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
                        {item.institution || item.degree}
                      </h3>
                      {item.grade && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#000000] text-white text-[11px] font-semibold tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">{item.grade}</span>
                        </span>
                      )}
                    </div>

                    {/* 2. Alamat */}
                    {item.address && (
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#000000] mt-1.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                        <MapPin className="w-3.5 h-3.5 text-[#000000] shrink-0" />
                        <span>{item.address}</span>
                      </div>
                    )}

                    {/* 3. Program Studi */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#000000] mt-2 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      <BookOpen className="w-3.5 h-3.5 text-[#000000] shrink-0" />
                      <span>Program Studi: <strong className="text-[#000000] font-semibold">{item.field}</strong></span>
                    </div>
                  </div>
                </div>

                {/* 4. Periode */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#000000] font-mono shrink-0 sm:self-start bg-zinc-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border-2 sm:border-0 border-[var(--card-border)] self-start shadow-[0_2px_6px_rgba(0,0,0,0.1)] sm:shadow-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                  <Calendar className="w-3.5 h-3.5 text-[#000000]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {item.description && (
                <div className="mt-5 pt-4 border-t-2 border-[var(--card-border)]">
                  <p className="text-xs sm:text-sm text-[#000000] leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
        </div>
      </div>
    </section>
  );
}
