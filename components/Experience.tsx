import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6 border-t border-black/[.08] py-16 dark:border-white/[.145]">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Experience & Education
      </h2>
      <ol className="flex flex-col gap-8">
        {experience.map((entry) => (
          <li key={`${entry.role}-${entry.org}`} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium text-black dark:text-zinc-50">
                {entry.role} · {entry.org}
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {entry.period}
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
