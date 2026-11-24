"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "en" | "th";
export type Localized<T> = { en: T; th: T };

const STORAGE_KEY = "lang";

type Dictionary = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  contactNote: string;
  open: string;
  switchLang: string;
};

const dictionary: Localized<Dictionary> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    contactNote: "feel free to reach out.",
    open: "Open",
    switchLang: "Switch language",
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      projects: "ผลงาน",
      education: "การศึกษา",
      contact: "ติดต่อ",
    },
    contactNote: "ยินดีให้ติดต่อได้เสมอ",
    open: "เปิดดู",
    switchLang: "เปลี่ยนภาษา",
  },
};

const listeners = new Set<() => void>();
let memoryLang: Lang | null = null;

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Lang {
  if (memoryLang) return memoryLang;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "th" ? "th" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Lang {
  return "en";
}

function writeLang(next: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
    memoryLang = null;
  } catch {
    memoryLang = next;
  }
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang: writeLang, t: dictionary[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}