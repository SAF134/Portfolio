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
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Eyebrow & Availability Status Badge with Ambient Glow */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs md:text-sm font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              {profile.eyebrow}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-700 text-xs font-medium shadow-[0_2px_12px_-2px_rgba(16,185,129,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Tersedia untuk Peluang Karir</span>
            </span>
          </div>

          {/* Large Title with Accent Dot and Subtle Depth */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight leading-[1.12] drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            {profile.fullName.split(" ")[0]} {profile.fullName.split(" ")[1]}{" "}
            <span className="text-zinc-400">
              {profile.fullName.split(" ")[2]?.replace(".", "") || ""}
            </span>
            <span className="text-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]">.</span>
          </h1>

          {/* Subtitle Role */}
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-700 mt-2.5 tracking-tight">
            {profile.headlineRole}
          </h2>

          {/* Bio text */}
          <p className="mt-5 text-sm sm:text-base text-[#52525B] max-w-lg leading-relaxed font-normal text-left">
            {profile.heroBio}
          </p>

          {/* CTA Buttons with Colored Gradient Ambient Shadows */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={profile.cvPath}
              download="CV_Syauqi_Akmal_Fadhali.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-sm font-medium shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_-4px_rgba(37,99,235,0.4)] border border-zinc-800 hover:border-blue-500/50 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Download className="w-4 h-4" />
              <span>Unduh CV Saya</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 hover:from-black hover:to-zinc-900 text-white text-sm font-medium shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_-4px_rgba(37,99,235,0.4)] border border-zinc-800 hover:border-blue-500/50 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Saya</span>
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
                  ? "hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-[0_6px_20px_-2px_rgba(37,99,235,0.35)]"
                  : social.platform === "instagram"
                  ? "hover:border-rose-400 hover:text-rose-500 hover:bg-rose-50/50 hover:shadow-[0_6px_20px_-2px_rgba(244,63,94,0.35)]"
                  : "hover:border-zinc-800 hover:text-black hover:bg-zinc-100 hover:shadow-[0_6px_20px_-2px_rgba(0,0,0,0.25)]";

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className={cn(
                    "w-10 h-10 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-zinc-700 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] transition-all duration-200 active:scale-95",
                    hoverClasses
                  )}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
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
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[350px] aspect-[9/16] rounded-[32px] overflow-hidden bg-white border border-[#E4E4E7]/90 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.22)]">
              <Image
                src={profile.heroCardImage}
                alt="Foto Profil Syauqi Akmal Fadhali"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
