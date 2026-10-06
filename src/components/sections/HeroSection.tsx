"use client";

import React from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="profil"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Subtle Ambient Dots (Anti-slop, lightweight, pure CSS) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        aria-hidden="true"
      >
        <span className="absolute top-28 left-[15%] w-2 h-2 rounded-full bg-blue-400/50" />
        <span className="absolute top-44 left-[35%] w-1.5 h-1.5 rounded-full bg-pink-400/50" />
        <span className="absolute top-64 left-[10%] w-2.5 h-2.5 rounded-full bg-cyan-400/40" />
        <span className="absolute bottom-32 left-[25%] w-2 h-2 rounded-full bg-emerald-400/40" />
        <span className="absolute top-24 right-[28%] w-2 h-2 rounded-full bg-amber-400/50" />
        <span className="absolute top-52 right-[12%] w-1.5 h-1.5 rounded-full bg-violet-400/50" />
        <span className="absolute bottom-20 right-[20%] w-2 h-2 rounded-full bg-rose-400/40" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Profile Info Card */}
        <div className="lg:col-span-7 z-10 w-full">
          <div className="relative group">
            {/* Rich Multi-color Ambient Gradient Glow Effect */}
            <div
              className="absolute -inset-2 rounded-[40px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-violet-600/25 opacity-70 blur-2xl group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
              aria-hidden="true"
            />

            {/* Main Profile Info Card Container */}
            <div className="relative w-full rounded-[32px] bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-[0_18px_45px_rgba(0,0,0,0.25),0_6px_18px_rgba(37,99,235,0.25)] hover:-translate-y-1 hover:border-[var(--card-border-hover)] hover:shadow-[0_26px_55px_rgba(0,0,0,0.32),0_10px_24px_rgba(37,99,235,0.35)] p-6 sm:p-8 md:p-10 flex flex-col items-start transition-all duration-300 ease-out">
              {/* Eyebrow & Availability Status Badge with Ambient Glow */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs md:text-sm font-mono font-semibold tracking-widest text-[#000000] uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]">
                  {profile.eyebrow}
                </span>
              </div>

              {/* Large Title with Accent Dot and Subtle Depth */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight leading-[1.12] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                {profile.fullName}
              </h1>

              {/* Subtitle Role */}
              <p className="text-base sm:text-lg md:text-xl font-semibold text-zinc-800 mt-2.5 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.14)]">
                {profile.headlineRole}
              </p>

              {/* Bio text */}
              <p className="mt-5 text-sm sm:text-base text-[#000000] leading-relaxed font-normal text-justify drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                {profile.heroBio}
              </p>

              {/* CTA Buttons with Colored Gradient Ambient Shadows */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={profile.cvPath}
                  download="CV_Syauqi_Akmal_Fadhali.pdf"
                  className="group/btn inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.32)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.48)] border-2 border-black hover:border-blue-500/80 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                  <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">Unduh CV Saya</span>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="group/btn inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gradient-to-r hover:from-white hover:to-blue-50/40 border-2 border-[#000000] hover:border-[#000000] text-zinc-900 hover:text-blue-700 text-sm font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <Mail className="w-4 h-4 text-[#000000] group-hover:text-blue-600 group-hover/btn:scale-110 group-hover/btn:-rotate-6 transition-transform duration-200" />
                  <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]">Hubungi Saya</span>
                </a>
              </div>

              {/* Social Links with Colored Brand Ambient Shadows */}
              <div className="flex items-center gap-3 mt-6">
                {profile.socials.map((social) => {
                  const Icon =
                    social.platform === "github"
                      ? GithubIcon
                      : social.platform === "linkedin"
                      ? LinkedinIcon
                      : InstagramIcon;

                  const hoverClasses =
                    social.platform === "linkedin"
                      ? "hover:border-[#000000] hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)]"
                      : social.platform === "instagram"
                      ? "hover:border-[#000000] hover:text-rose-500 hover:bg-rose-50/50 hover:shadow-[0_8px_24px_rgba(244,63,94,0.4)]"
                      : "hover:border-[#000000] hover:text-black hover:bg-zinc-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]";

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className={cn(
                        "group/soc w-10 h-10 rounded-full bg-white border-2 border-[#000000] flex items-center justify-center text-zinc-700 shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:scale-115 hover:-rotate-6 active:scale-90 transition-all duration-200",
                        hoverClasses
                      )}
                    >
                      <Icon className="w-4 h-4 group-hover/soc:scale-110 transition-transform duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Profile Card with Rich Gradient Atmospheric Glow */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative group">
            {/* Rich Multi-color Ambient Gradient Glow Effect */}
            <div
              className="absolute -inset-2 rounded-[40px] bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-violet-600/30 opacity-70 blur-2xl group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              aria-hidden="true"
            />

            {/* Main Profile Card Container with Elevated Frame Shadow */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[350px] aspect-[9/16] rounded-[32px] overflow-hidden bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-[0_18px_45px_rgba(0,0,0,0.25),0_8px_20px_rgba(37,99,235,0.3)] group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_55px_rgba(0,0,0,0.32),0_10px_24px_rgba(37,99,235,0.4)] transition-all duration-300 ease-out">
              <Image
                src={profile.heroCardImage}
                alt="Foto Profil Syauqi Akmal Fadhali"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
