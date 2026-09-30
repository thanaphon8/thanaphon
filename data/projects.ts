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
  {
    title: "SingFinder",
    description:
      "A web application designed to help users identify songs when they only remember partial lyrics or melody. Users can simply click the microphone button to hum or sing remembered lyrics, or type text snippets into the search bar. The app retrieves and displays a list of closest matching songs.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/Oatto319/SingFinder.git",
    previewImages: ["/img/s1.png", "/img/s2.png", "/img/s3.png", "/img/s4.png"],
    highlights: [
      "Designed and built the UX/UI for key interactive features including voice input, search, and result displays",
      "Developed full-stack features to handle voice recognition and lyric-based search queries",
      "Implemented fuzzy text search and audio recognition logic to return top relevant song matches",
      "Ensured responsive design and smooth interactive components across desktop and mobile devices",
    ],
  },
  {
    title: "Typing Speed Test",
    description:
      "A typing speed test website with support for both English and Thai, including a word bank and hard-mode sentences in each language. The whole app uses a consistent Game Boy-inspired green color theme.",
    tags: ["TypeScript", "MongoDB"],
    href: "https://github.com/thanaphon8/chairaiwa.git",
    previewImages: ["/img/31.png", "/img/32.png", "/img/33.png"],
    highlights: [
      "Goes beyond a single end-of-game WPM average by logging every word event (word, correct/incorrect, timestamp), so typing speed can be plotted as a graph over time",
      "Stores typing history and each user's personal best scores in MongoDB",
    ],
  },
  {
    title: "Chai Rai Wa: Expense Tracker",
    description:
      "A mobile-first web app for tracking daily income and expenses. Log a transaction in seconds with categories, quick-note presets, and receipt photos, then see your balance, spending trends, and an estimate of how many days your money will last.",
    tags: ["TypeScript", "JavaScript" ,"CSS"],
    href: "https://github.com/thanaphon8/Typing-Project.git",
    previewImages: ["/img/chai1.png", "/img/chai2.png", "/img/chai3.png", "/img/chai4.png"],
    highlights: [
      "Designed and built this full-stack app end to end, from UX/UI to front-end and back-end",
      "Built a slide-to-save entry flow with category picker, quick-note presets, and client-side receipt image compression",
      "Used Google Sheets as the database and Google Drive for receipt storage through a Google Apps Script API, so it runs with no server cost.",
      "Built a dashboard with net balance, spending ratio, and a runway estimate based on average daily spend",
      "Built a searchable, filterable history grouped by day with daily totals and a receipt image viewer",
      "Delivered a responsive UI with separate layouts for mobile and desktop",
    ],
  },
];
