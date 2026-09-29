"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
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
  { id: "profil", label: "Profil", icon: User },
  { id: "pendidikan", label: "Pendidikan", icon: GraduationCap },
  { id: "keahlian", label: "Keahlian", icon: Code2 },
  { id: "pengalaman", label: "Pengalaman", icon: Briefcase },
  { id: "proyek", label: "Proyek", icon: FolderGit2 },
  { id: "sertifikat", label: "Sertifikat", icon: Award },
];

export function FloatingNavbar() {
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
  }, []);

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
          "hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center justify-between gap-1 p-1.5 rounded-full backdrop-blur-md border border-[#E4E4E7] transition-all duration-300",
          isScrolled
            ? "bg-white/95 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(37,99,235,0.08)] border-zinc-200"
            : "bg-white/85 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.05),0_2px_10px_-2px_rgba(37,99,235,0.06)] border-zinc-200/80"
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
                  "relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1",
                  isActive
                    ? "text-white"
                    : "text-[#52525B] hover:text-[#09090B] hover:bg-zinc-100"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopActivePill"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-full -z-10 shadow-[0_2px_10px_rgba(37,99,235,0.25)] border border-zinc-800"
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
        className="flex md:hidden fixed bottom-4 inset-x-4 max-w-[340px] mx-auto z-50 items-center justify-around p-1.5 rounded-full bg-white/95 backdrop-blur-lg border border-[#E4E4E7] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12),0_4px_16px_-4px_rgba(37,99,235,0.1)]"
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
                "relative p-2 sm:p-2.5 rounded-full transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                isActive
                  ? "text-white"
                  : "text-zinc-600 hover:text-[#09090B]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActivePill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-full -z-10 shadow-[0_2px_10px_rgba(37,99,235,0.25)] border border-zinc-800"
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
