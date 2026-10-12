"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  Briefcase,
  FolderGit2,
  Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

export function FloatingNavbar() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems: NavItem[] = useMemo(
    () => [
      { id: "profil", label: t.nav.profil, icon: User },
      { id: "pendidikan", label: t.nav.pendidikan, icon: GraduationCap },
      { id: "keahlian", label: t.nav.keahlian, icon: Code2 },
      { id: "pengalaman", label: t.nav.pengalaman, icon: Briefcase },
      { id: "proyek", label: t.nav.proyek, icon: FolderGit2 },
      { id: "sertifikat", label: t.nav.sertifikat, icon: Award },
    ],
    [t.nav]
  );

  const [activeSection, setActiveSection] = useState<string>("profil");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      // Check if user has scrolled near bottom of page
      const docHeight = document.documentElement.scrollHeight;
      if (window.innerHeight + currentScrollY >= docHeight - 60) {
        const lastId = navItems[navItems.length - 1].id;
        setActiveSection((prev) => (prev !== lastId ? lastId : prev));
        return;
      }

      // Section intersection detection using lightweight offsetTop
      const scrollPosition = currentScrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection((prev) => (prev !== item.id ? item.id : prev));
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "profil") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* ================= DESKTOP & TABLET TOP NAVBAR ================= */}
      <nav
        aria-label="Navigasi Utama Desktop"
        className={cn(
          "hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center justify-between gap-1 p-1.5 rounded-full backdrop-blur-md border-2 border-[var(--navbar-border,#000000)] bg-[var(--navbar-bg,#d9d9d9)] transition-all duration-300",
          isScrolled
            ? "shadow-[0_18px_40px_rgba(0,0,0,0.25),0_6px_16px_rgba(0,0,0,0.16)]"
            : "shadow-[0_14px_32px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.12)]"
        )}
      >
        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={cn(
                  "relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1",
                  isActive
                    ? "text-white"
                    : "text-zinc-800 hover:text-black hover:bg-black/10"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopActivePill"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-full -z-10 shadow-[0_4px_14px_rgba(0,0,0,0.45)] border-2 border-black"
                  />
                )}
                <Icon className="w-3.5 h-3.5" />
                <span className={cn(isActive && "drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]")}>
                  {item.label}
                </span>
              </a>
            );
          })}

          {/* Pemisah Halus */}
          <div className="w-[1.5px] h-4 bg-black/25 mx-1" aria-hidden="true" />

          {/* Tombol Pengalih Bahasa (ID / EN) di Sebelah Kanan Tombol Sertifikat */}
          <div
            className="flex items-center p-0.5 rounded-full bg-white border-2 border-black shadow-[0_2px_8px_rgba(0,0,0,0.18)] ml-0.5"
            role="group"
            aria-label="Pilihan Bahasa"
          >
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              aria-label="Ganti ke Bahasa Indonesia"
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
                language === "ID"
                  ? "bg-black text-white shadow-sm"
                  : "text-zinc-700 hover:text-black hover:bg-black/5"
              )}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              aria-label="Switch to English"
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
                language === "EN"
                  ? "bg-black text-white shadow-sm"
                  : "text-zinc-700 hover:text-black hover:bg-black/5"
              )}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM DOCK NAVBAR ================= */}
      <nav
        aria-label="Navigasi Utama Mobile"
        className="flex md:hidden fixed bottom-4 inset-x-4 max-w-[360px] mx-auto z-50 items-center justify-around p-1.5 rounded-full bg-[var(--navbar-bg,#d9d9d9)] backdrop-blur-lg border-2 border-[var(--navbar-border,#000000)] shadow-[0_16px_40px_rgba(0,0,0,0.28),0_6px_18px_rgba(0,0,0,0.18)]"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              aria-label={item.label}
              className={cn(
                "relative p-2 sm:p-2.5 rounded-full transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
                isActive
                  ? "text-white"
                  : "text-zinc-800 hover:text-black hover:bg-black/10"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActivePill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-full -z-10 shadow-[0_4px_14px_rgba(0,0,0,0.45)] border-2 border-black"
                />
              )}
              <Icon className="w-4 h-4" />
            </a>
          );
        })}

        {/* Pemisah Halus */}
        <div className="w-[1.5px] h-4 bg-black/25 mx-0.5" aria-hidden="true" />

        {/* Tombol Pengalih Bahasa Mobile di Sebelah Kanan Tombol Sertifikat */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={`Ganti bahasa (saat ini ${language})`}
          className="flex items-center justify-center px-2.5 py-1 rounded-full bg-white border-2 border-black text-xs font-black text-black shadow-[0_2px_8px_rgba(0,0,0,0.18)] active:scale-95 transition-transform cursor-pointer"
          title={language === "ID" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
        >
          <span>{language}</span>
        </button>
      </nav>
    </>
  );
}
