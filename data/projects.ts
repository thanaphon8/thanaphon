export type ProjectPreviewImage = string | { src: string; orientation?: "portrait" };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  liveUrl?: string;
  highlights?: string[];
  previewImages?: ProjectPreviewImage[];
};

export const projects: Project[] = [
  {
    title: "Team Matching Application",
    description:
      "A web application that helps educators form balanced student teams based on MBTI personality analysis, featuring quiz templates, automated team matching, and real-time room management.",
    tags: ["TypeScript", "JavaScript", "CSS"],
    href: "https://github.com/thanaphon8/FinalProject",
    liveUrl: "https://persona-link-one.vercel.app/",
    previewImages: ["/img/bg1.png", "/img/bg2.png", "/img/bg3.png", "/img/bg4.png"],
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
    tags: ["TypeScript", "JavaScript"],
    href: "https://github.com/thanaphon8/PeerScore.git",
    previewImages: ["/img/21.png", "/img/22.png", "/img/23.png", "/img/24.png"],
    highlights: [
      "Designed and built the UX/UI",
      "Handled front-end and back-end development",
      "Developed the app",
    ],
  },
  {
    title: "Typing Speed Test",
    description:
      "A typing speed test website with support for both English and Thai, including a word bank and hard-mode sentences in each language. The whole app uses a consistent Game Boy-inspired green color theme.",
    tags: ["TypeScript", "MongoDB"],
    href: "https://github.com/thanaphon8/Typing-Project.git",
    previewImages: ["/img/31.png", "/img/32.png", "/img/33.png"],
    highlights: [
      "Goes beyond a single end-of-game WPM average by logging every word event (word, correct/incorrect, timestamp), so typing speed can be plotted as a graph over time",
      "Stores typing history and each user's personal best scores in MongoDB",
    ],
  },
  {
    title: "DRAPE — Clothing E-commerce Website",
    description:
      "Built the landing page for a clothing e-commerce brand using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, with a minimal, high-contrast visual direction inspired by Apple and Nike.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/thanaphon8/DRAPE.git",
    previewImages: ["/img/d1.png", "/img/d2.png"],
    highlights: [
      "Designed and built 7 reusable UI components (Header, Hero, CategoryGrid, FeatureSection, ProductGrid, Newsletter, Footer) with data cleanly separated from presentation for easy content updates",
      "Implemented a full-bleed, auto-looping background video hero section with gradient overlays for readability",
      "Delivered fully responsive layouts across desktop and mobile, including a mobile hamburger navigation menu and adaptive grid systems",
      "Used Next.js Image optimization with per-breakpoint object-position tuning for consistent art direction across screen sizes",
    ],
  },
];
