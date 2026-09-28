"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "beranda", label: "Beranda", icon: Home },
  { id: "tentang", label: "Tentang", icon: User },
  { id: "pengalaman", label: "Pengalaman", icon: Briefcase },
  { id: "proyek", label: "Proyek", icon: FolderGit2 },
  { id: "kontak", label: "Kontak", icon: Mail },
];

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState<string>("beranda");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
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
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

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
        {/* Brand / Logo */}
        <a
          href="#beranda"
          onClick={(e) => scrollToSection(e, "beranda")}
          className="flex items-center pl-3 pr-2 py-1 text-sm font-bold tracking-tight text-[#09090B] hover:opacity-80 transition-opacity rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
        >
          <span>DV</span>
          <span className="text-zinc-400">.</span>
        </a>

        <div className="h-4 w-[1px] bg-[#E4E4E7] mx-1" aria-hidden="true" />

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

        <div className="h-4 w-[1px] bg-[#E4E4E7] mx-1" aria-hidden="true" />

        {/* Status indicator badge */}
        <div className="flex items-center gap-1.5 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono text-zinc-500 font-medium">Online</span>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM DOCK NAVBAR ================= */}
      <nav
        aria-label="Navigasi Utama Mobile"
        className="flex md:hidden fixed bottom-4 inset-x-4 max-w-sm mx-auto z-50 items-center justify-around p-1.5 rounded-full bg-white/95 backdrop-blur-lg border border-[#E4E4E7] shadow-[0_12px_32px_rgb(0,0,0,0.12)]"
      >
        {/* Brand Mini */}
        <a
          href="#beranda"
          onClick={(e) => scrollToSection(e, "beranda")}
          className="text-xs font-bold text-[#09090B] pl-2 pr-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
          aria-label="Kembali ke atas"
        >
          DV<span className="text-zinc-400">.</span>
        </a>

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
                "relative p-2.5 rounded-full transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900",
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

        {/* Status Dot Mobile */}
        <div className="pr-2 pl-1" title="Status: Online">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </div>
      </nav>
    </>
  );
}
