import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 py-20 text-center sm:items-start sm:text-left"
    >
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
      <p className="max-w-md leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
    </section>
  );
}
