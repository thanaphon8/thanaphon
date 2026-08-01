export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Team Matching Application",
    description:
      "A web application that helps educators form balanced student teams based on MBTI personality analysis, featuring quiz templates, automated team matching, and real-time room management.",
    tags: ["TypeScript", "JavaScript", "CSS"],
    href: "https://github.com/thanaphon8/FinalProject",
    highlights: [
      "Developed and built a web application",
      "Designed and developed UI for all major pages including home, templates, question flow, team view, and result screens",
      "Crafted interactive components such as buttons, cards, modals, and navigation with focus on usability and visual consistency",
      "Ensured responsive design across desktop and mobile devices",
    ],
  },
];
