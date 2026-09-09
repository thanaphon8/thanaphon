export type SkillCategory = {
  category: string;
  items: string[];
  image?: string;
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Language",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Dart"],
  },
  {
    category: "Frameworks & Platforms",
    items: ["Flutter", "Django", "Next.js", "Angular", "Bootstrap"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["VS Code", "GitHub", "Postman", "Docker", "Figma", "Canva", "CapCut"],
  },
  {
    category: "Microsoft Office",
    items: ["Excel", "Word", "Teams"],
  },
  {
    category: "Typing Performance",
    items: ["122 WPM / 98% Accuracy (Monkeytype)"],
    image: "/img/typing.png",
  },
];