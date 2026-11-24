"use client";

import { experience } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="flex scroll-mt-20 flex-col gap-6 border-t border-black/[.08] py-16 dark:border-white/[.145]">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {t.nav.education}
      </h2>
      <ol className="flex flex-col gap-8">
        {experience.map((entry) => (
          <li key={`${entry.role.en}-${entry.org.en}`} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline gap-x-4">
              <h3 className="font-medium text-black dark:text-zinc-50">
                {entry.role[lang]} · {entry.org[lang]}
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {entry.period[lang]}
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {entry.description[lang]}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}