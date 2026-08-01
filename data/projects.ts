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
  {
    title: "Evaluation System",
    description:
      "A web app for classroom presentations — the instructor opens a room and students join to evaluate whichever team is currently presenting. The instructor gets a summary of each team's overall score along with automated feedback on their strengths and areas to improve, while evaluators can leave comments to help that team do better next time.",
    tags: [],
    href: "https://github.com/thanaphon8/PeerScore.git",
    highlights: [
      "Designed and built the UX/UI",
      "Handled front-end and back-end development",
      "Developed the app",
    ],
  },
  {
    title: "Typing Speed Test",
    description:
      "A typing speed test web application that measures typing speed and accuracy.",
    tags: [],
    href: "https://github.com/thanaphon8/Typing-Project.git",
  },
  {
    title: "To-Do List",
    description: "A to-do list web application for managing daily tasks.",
    tags: [],
    href: "https://github.com/thanaphon8/ToDoListv2.git",
  },
];
