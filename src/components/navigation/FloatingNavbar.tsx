"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  GraduationCap,
  Code2,
  Briefcase,
  FolderGit2,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "beranda", label: "Beranda", icon: Home },
  { id: "pendidikan", label: "Pendidikan", icon: GraduationCap },
  { id: "keahlian", label: "Keahlian", icon: Code2 },
  { id: "pengalaman", label: "Pengalaman", icon: Briefcase },
  { id: "proyek", label: "Proyek", icon: FolderGit2 },
  { id: "sertifikat", label: "Sertifikat", icon: Award },
];

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState<string>("beranda");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if user has scrolled near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      // Section intersection detection
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = window.scrollY + element.getBoundingClientRect().top;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "beranda") {
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
          "hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center justify-between gap-1 p-1.5 rounded-full backdrop-blur-md border border-[#E4E4E7] transition-all duration-300",
          isScrolled
            ? "bg-white/95 shadow-[0_12px_32px_rgb(0,0,0,0.08)]"
            : "bg-white/85 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
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
                  "relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1",
                  isActive
                    ? "text-white"
                    : "text-[#52525B] hover:text-[#09090B] hover:bg-zinc-100"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopActivePill"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 bg-[#09090B] rounded-full -z-10 shadow-sm"
                  />
                )}
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM DOCK NAVBAR ================= */}
      <nav
        aria-label="Navigasi Utama Mobile"
        className="flex md:hidden fixed bottom-4 inset-x-4 max-w-[340px] mx-auto z-50 items-center justify-around p-1.5 rounded-full bg-white/95 backdrop-blur-lg border border-[#E4E4E7] shadow-[0_12px_32px_rgb(0,0,0,0.12)]"
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
                "relative p-2 sm:p-2.5 rounded-full transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900",
                isActive
                  ? "text-white"
                  : "text-[#71717A] hover:text-[#09090B]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActivePill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className="absolute inset-0 bg-[#09090B] rounded-full -z-10 shadow-sm"
                />
              )}
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </nav>
    </>
  );
}
