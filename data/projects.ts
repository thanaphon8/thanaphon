export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this project — what it does, the problem it solves, and your role in building it.",
    tags: ["Next.js", "TypeScript"],
    href: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what it does, the problem it solves, and your role in building it.",
    tags: ["React", "Node.js"],
    href: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what it does, the problem it solves, and your role in building it.",
    tags: ["Python", "PostgreSQL"],
    href: "https://github.com/yourusername/project-three",
  },
];
