"use client";

import React from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolioData";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="beranda"
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
          {/* Eyebrow */}
          <span className="text-xs md:text-sm font-mono font-semibold tracking-widest text-[#71717A] uppercase mb-3">
            {profile.eyebrow}
          </span>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#09090B] tracking-tight leading-[1.08]">
            {profile.fullName.split(" ")[0]} {profile.fullName.split(" ")[1]}{" "}
            <span className="text-zinc-400">
              {profile.fullName.split(" ")[2] || ""}
            </span>
          </h1>

          {/* Subtitle Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 mt-3 tracking-tight">
            {profile.headlineRole}
          </h2>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-6">
            {profile.socials.map((social) => {
              const Icon =
                social.platform === "github"
                  ? GithubIcon
                  : social.platform === "linkedin"
                  ? LinkedinIcon
                  : InstagramIcon;

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-zinc-700 hover:text-[#09090B] hover:border-zinc-900 hover:bg-zinc-50 shadow-sm transition-all duration-150 active:scale-95"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Bio text */}
          <p className="mt-6 text-sm sm:text-base text-[#52525B] max-w-lg leading-relaxed font-normal text-justify">
            {profile.heroBio}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={profile.cvPath}
              download="CV_Syauqi_Akmal_Fadhali.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#09090B] text-white hover:bg-zinc-800 text-sm font-medium shadow-sm transition-all duration-150 active:scale-[0.98] border border-[#09090B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              <Download className="w-4 h-4" />
              <span>Unduh CV Saya</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#09090B] text-white hover:bg-zinc-800 text-sm font-medium shadow-sm transition-all duration-150 active:scale-[0.98] border border-[#09090B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>

        {/* Right Column: Floating Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative group">
            {/* Soft Ambient Glow Effect */}
            <div
              className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Main Profile Card Container */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[350px] aspect-[9/16] rounded-[32px] overflow-hidden bg-white border border-[#E4E4E7] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
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
