"use client";

import { useState, useEffect, useCallback } from "react";

export interface UseGalleryModalOptions {
  totalItems: number;
}

export function useGalleryModal({ totalItems }: UseGalleryModalOptions) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null || totalItems <= 0) return;
    setSelectedIndex((prev) => (prev! - 1 + totalItems) % totalItems);
  }, [selectedIndex, totalItems]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null || totalItems <= 0) return;
    setSelectedIndex((prev) => (prev! + 1) % totalItems);
  }, [selectedIndex, totalItems]);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const openModal = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext, closeModal]);

  return {
    selectedIndex,
    setSelectedIndex,
    openModal,
    closeModal,
    handlePrev,
    handleNext,
    isOpen: selectedIndex !== null,
  };
}
