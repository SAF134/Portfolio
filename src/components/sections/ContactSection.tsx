"use client";

import React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { profile } = portfolioData;

  return (
    <footer id="kontak" className="pt-20 md:pt-28 pb-28 md:pb-16 bg-white">
      <div className="max-w-4xl w-full mx-auto px-6 md:px-12">
        {/* Contact Container Card */}
        <div className="rounded-[32px] bg-[#F8F8F8] border border-[#E4E4E7] p-8 sm:p-12 md:p-16 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center">
          {/* Eyebrow */}
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase mb-2">
            KONTAK RESMI
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
            Hubungi <span className="text-zinc-500">Saya</span>.
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#52525B] max-w-lg leading-relaxed">
            Punya ide proyek, peluang kerja sama, pertanyaan teknis, atau sekadar ingin menyapa? Pintu komunikasi selalu terbuka lebar.
          </p>

          {/* Contact Details Meta */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 text-[#09090B] hover:text-zinc-600 transition-colors font-medium"
            >
              <div className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shadow-xs">
                <Mail className="w-4 h-4 text-zinc-700" />
              </div>
              <span>{profile.email}</span>
            </a>

            <div className="flex items-center gap-2.5 text-[#52525B]">
              <div className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shadow-xs">
                <MapPin className="w-4 h-4 text-zinc-700" />
              </div>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#09090B] text-white hover:bg-zinc-800 text-sm font-semibold tracking-tight shadow-md transition-all duration-150 active:scale-[0.98] w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Email Langsung</span>
            </a>

            <CopyButton
              textToCopy={profile.email}
              label="Salin Alamat Email"
              className="w-full sm:w-auto px-6 py-3"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
