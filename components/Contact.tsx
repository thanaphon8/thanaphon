"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="contact"
      className="flex scroll-mt-20 flex-col gap-6 border-t border-black/[.08] py-16 dark:border-white/[.145]"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {t.nav.contact}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        {profile.location[lang]} — {t.contactNote}
      </p>
      <div className="flex flex-wrap gap-4 text-base font-medium">
        <a
          href={`mailto:${profile.email}`}
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone}`}
          className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          {profile.phone}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}