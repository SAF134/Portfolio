"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 pb-24 md:pb-8 bg-white border-t border-[#E4E4E7] text-center">
      <p className="text-xs text-[#000000] font-mono drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
        &copy; {new Date().getFullYear()} Syauqi Akmal Fadhali. {t.footer.copyright}
      </p>
    </footer>
  );
}
