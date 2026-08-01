import Image from "next/image";
import { profile } from "@/data/profile";

function renderWithHighlights(text: string, highlights: string[]) {
  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text
    .split(pattern)
    .filter(Boolean)
    .map((part, index) =>
      highlights.includes(part) ? (
        <strong key={index} className="font-semibold text-black dark:text-zinc-50">
          {part}
        </strong>
      ) : (
        <span key={index}>{part}</span>
      )
    );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="flex scroll-mt-20 flex-col items-center gap-6 py-20 text-center sm:items-start sm:text-left"
    >
      <Image
        src="/img/profile.jpg"
        alt={profile.name}
        width={150}
        height={200}
        priority
      />
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
          {profile.role}
        </p>
      </div>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>
      <p className="max-w-xl text-left leading-7 text-zinc-600 dark:text-zinc-400">
        {renderWithHighlights(profile.bio, profile.bioHighlights)}
      </p>
    </section>
  );
}
