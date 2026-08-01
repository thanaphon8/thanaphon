export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Vercel", "PostgreSQL"],
  },
];
