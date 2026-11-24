"use client";

import { useLanguage } from "@/components/LanguageProvider";

const sections = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "education", href: "#experience" },
  { key: "contact", href: "#contact" },
] as const;

function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (!(target instanceof HTMLElement)) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  target.classList.remove("shimmer-sweep");
  void target.offsetWidth;
  target.classList.add("shimmer-sweep");
  target.addEventListener(
    "animationend",
    () => target.classList.remove("shimmer-sweep"),
    { once: true }
  );
}

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-10 border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-4 sm:px-16">
        <div className="hidden w-16 shrink-0 sm:block" aria-hidden="true" />
        <nav className="flex flex-1 flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={(event) => handleNavClick(event, section.href)}
              className="hover:text-black dark:hover:text-zinc-50"
            >
              {t.nav[section.key]}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "th" : "en")}
          aria-label={t.switchLang}
          className="flex h-8 w-16 shrink-0 items-center justify-center gap-1 rounded-full border border-black/[.08] text-xs font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.08]"
        >
          <span
            className={
              lang === "en"
                ? "text-black dark:text-zinc-50"
                : "text-zinc-400 dark:text-zinc-500"
            }
          >
            EN
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">/</span>
          <span
            className={
              lang === "th"
                ? "text-black dark:text-zinc-50"
                : "text-zinc-400 dark:text-zinc-500"
            }
          >
            TH
          </span>
        </button>
      </div>
    </header>
  );
}