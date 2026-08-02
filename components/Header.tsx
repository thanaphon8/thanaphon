"use client";

const sections = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

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
  return (
    <header className="sticky top-0 z-10 border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
      <div className="flex w-full items-center justify-center px-6 py-4 sm:px-16">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={(event) => handleNavClick(event, section.href)}
              className="hover:text-black dark:hover:text-zinc-50"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
