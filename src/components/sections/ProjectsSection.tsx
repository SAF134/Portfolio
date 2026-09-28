"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="proyek" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        {/* Header & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090B] tracking-tight">
              Karya <span className="text-zinc-500">Terbaik</span>.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#52525B] max-w-lg leading-relaxed">
              Kumpulan proyek yang telah saya bangun, mulai dari desain antarmuka hingga sistem backend yang kompleks.
            </p>
          </div>

          {/* Previous / Next Navigation Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Proyek sebelumnya"
              className={cn(
                "w-11 h-11 rounded-full border border-[#E4E4E7] flex items-center justify-center text-[#09090B] bg-white hover:bg-zinc-50 hover:border-zinc-900 transition-all duration-150 active:scale-95 shadow-sm",
                !canScrollLeft && "opacity-35 cursor-not-allowed hover:bg-white hover:border-[#E4E4E7]"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Proyek berikutnya"
              className={cn(
                "w-11 h-11 rounded-full border border-[#E4E4E7] flex items-center justify-center text-[#09090B] bg-white hover:bg-zinc-50 hover:border-zinc-900 transition-all duration-150 active:scale-95 shadow-sm",
                !canScrollRight && "opacity-35 cursor-not-allowed hover:bg-white hover:border-[#E4E4E7]"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Container (Native Touch-Swipe + Keyboard Accessible) */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          tabIndex={0}
          role="region"
          aria-label="Daftar carousel karya terbaik. Gunakan tombol panah kiri dan kanan untuk menggeser."
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              handleScroll("left");
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              handleScroll("right");
            }
          }}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-2 -mx-6 px-6 md:-mx-12 md:px-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-2xl"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] sm:w-[520px] md:w-[560px] shrink-0 snap-start"
            >
              <ProjectCard project={project} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
