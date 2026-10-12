"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Language = "ID" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language_preference";

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "ID";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ID" || saved === "EN") {
      return saved;
    }
  } catch {
    // Ignore localStorage access restrictions
  }
  return "ID";
}

let currentLanguage: Language = "ID";
let isClientInitialized = false;

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY && (e.newValue === "ID" || e.newValue === "EN")) {
      currentLanguage = e.newValue;
      emitChange();
    }
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot(): Language {
  if (!isClientInitialized && typeof window !== "undefined") {
    currentLanguage = getStoredLanguage();
    isClientInitialized = true;
  }
  return currentLanguage;
}

function getServerSnapshot(): Language {
  return "ID";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sync html lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = language === "ID" ? "id" : "en";
  }, [language]);

  const setLanguage = (lang: Language) => {
    currentLanguage = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
    emitChange();
  };

  const toggleLanguage = () => {
    setLanguage(language === "ID" ? "EN" : "ID");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
