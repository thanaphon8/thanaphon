import Image from "next/image";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex scroll-mt-20 flex-col gap-6 border-t border-black/[.08] py-16 dark:border-white/[.145]"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Skills
      </h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {group.category}
            </h3>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-zinc-700 dark:text-zinc-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {group.image && (
              <div className="relative mt-2 h-48 w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-zinc-900">
                <Image
                  src={group.image}
                  alt={group.category}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-1"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}