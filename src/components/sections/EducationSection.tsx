"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="pendidikan" className="py-20 md:py-28 bg-[#F8F8F8] border-y border-[#E4E4E7]">
      <div className="max-w-4xl w-full mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Riwayat <span className="text-zinc-500">Pendidikan</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
            Latar belakang akademis formal selama menempuh perjalanan pendidikan.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-[24px] bg-white border border-[#E4E4E7] p-6 sm:p-8 md:p-9 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-zinc-400 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-[#E4E4E7] flex items-center justify-center shrink-0 text-zinc-800">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    {/* 1. Nama Sekolah/Institut/Universitas */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#09090B] tracking-tight">
                        {item.institution || item.degree}
                      </h3>
                      {item.grade && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#09090B] text-white text-[11px] font-semibold tracking-wide">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>{item.grade}</span>
                        </span>
                      )}
                    </div>

                    {/* 2. Alamat */}
                    {item.address && (
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#52525B] mt-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span>{item.address}</span>
                      </div>
                    )}

                    {/* 3. Program Studi */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-700 mt-2 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span>Program Studi: <strong className="text-[#09090B] font-semibold">{item.field}</strong></span>
                    </div>
                  </div>
                </div>

                {/* 4. Periode */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#71717A] font-mono shrink-0 sm:self-start bg-zinc-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border sm:border-0 border-[#E4E4E7] self-start">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {item.description && (
                <div className="mt-5 pt-4 border-t border-[#E4E4E7]">
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
