"use client";

import React from "react";
import Image from "next/image";
import { FolderGit2, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolioData";

export function HeroSection() {
  const { profile } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: elPos, behavior: "smooth" });
    }
  };

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
          <p className="mt-6 text-sm sm:text-base text-[#52525B] max-w-lg leading-relaxed font-normal">
            {profile.heroBio}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollTo("proyek")}
              className="gap-2 px-6"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Lihat Proyek</span>
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={() => scrollTo("kontak")}
              className="gap-2 px-6"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </Button>
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
            <div className="relative w-[300px] sm:w-[340px] md:w-[370px] aspect-[1/1.42] rounded-[32px] overflow-hidden bg-white border border-[#E4E4E7] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <Image
                src={profile.heroCardImage}
                alt="Foto Profil Deft Valian Exanova"
                fill
                priority
                sizes="(max-width: 768px) 300px, 370px"
                className="object-cover object-top"
              />

              {/* Overlay Glassmorphism Badge */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-800 relative shrink-0">
                    <Image
                      src={profile.aboutPortraitImage}
                      alt={profile.statusHandle}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-tight">
                      {profile.statusHandle}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-zinc-300 font-mono">
                        {profile.statusText}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollTo("kontak")}
                  aria-label="Hubungi saya di bagian kontak"
                  className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-[11px] font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
