import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden animate-pulse-none">
      {/* ================= SKELETON TOP NAVBAR ================= */}
      <div className="fixed top-4 lg:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 px-4 rounded-full border-2 border-black/20 bg-zinc-100/90 backdrop-blur-md shadow-md">
        <Skeleton className="h-6 w-14 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <div className="w-[1.5px] h-4 bg-black/20 mx-1" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>

      {/* ================= SKELETON HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Profile Info Card Skeleton */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-[32px] bg-zinc-200/50 border-2 border-black/15 p-6 sm:p-8 md:p-10 shadow-lg flex flex-col items-center sm:items-start space-y-4">
              {/* Eyebrow */}
              <Skeleton className="h-4 w-44 rounded-md" />

              {/* Name Title */}
              <Skeleton className="h-10 sm:h-12 w-3/4 max-w-md rounded-xl" />

              {/* Headline Role */}
              <Skeleton className="h-6 w-2/3 max-w-sm rounded-lg" />

              {/* Bio Lines */}
              <div className="w-full space-y-2.5 pt-2">
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-11/12 rounded-md" />
                <Skeleton className="h-4 w-4/5 rounded-md" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-4 w-full justify-center sm:justify-start">
                <Skeleton className="h-10 w-36 rounded-full" />
                <Skeleton className="h-10 w-32 rounded-full" />
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-3 w-full justify-center sm:justify-start">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right: Floating Photo Card Skeleton (9:16) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[350px] aspect-[9/16] rounded-[32px] border-2 border-black/15 bg-zinc-200/60 shadow-xl overflow-hidden p-2">
              <Skeleton className="w-full h-full rounded-[26px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKELETON PROJECTS SECTION ================= */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <Skeleton className="h-9 w-56 rounded-xl" />
            <Skeleton className="h-4 w-80 max-w-full rounded-md" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-zinc-200/50 border-2 border-black/15 overflow-hidden shadow-md flex flex-col"
              >
                {/* 16:9 Image Preview Skeleton */}
                <div className="w-full aspect-[16/9]">
                  <Skeleton className="w-full h-full rounded-none" />
                </div>
                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4 rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-2/3 rounded-md" />
                  <div className="flex gap-2 pt-3">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
