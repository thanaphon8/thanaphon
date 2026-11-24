import type { Localized } from "@/components/LanguageProvider";

export type Profile = {
  name: string;
  role: Localized<string>;
  tagline: Localized<string>;
  bio: Localized<string>;
  bioHighlights: Localized<string[]>;
  location: Localized<string>;
  email: string;
  phone: string;
  links: { label: string; href: string }[];
};

export const profile: Profile = {
  name: "Thanaphon Taemmak",
  role: {
    en: "Front-End Developer & UX/UI Designer",
    th: "นักพัฒนา Front-End และนักออกแบบ UX/UI",
  },
  tagline: {
    en: "I craft intuitive, visually organized interfaces that are enjoyable to use.",
    th: "ผมสร้างอินเทอร์เฟซที่ใช้งานง่าย จัดระเบียบสวยงาม และน่าใช้งาน",
  },
  bio: {
    en: "Front-End Developer and UX/UI Designer passionate about creating interfaces that are intuitive, visually organized, and enjoyable to use. Experienced in building web applications including a Team Matching App, an evaluation system, a typing speed test, and a To-Do List. Strong focus on UI/UX design — crafting layouts and components that deliver a clean and seamless user experience.",
    th: "นักพัฒนา Front-End และนักออกแบบ UX/UI ที่หลงใหลในการสร้างอินเทอร์เฟซที่ใช้งานง่าย จัดวางเป็นระเบียบ และน่าใช้งาน มีประสบการณ์สร้างเว็บแอปพลิเคชัน เช่น แอปจับคู่ทีม ระบบประเมินผล เว็บทดสอบความเร็วในการพิมพ์ และ To-Do List เน้นด้าน UI/UX โดยออกแบบเลย์เอาต์และคอมโพเนนต์ที่ให้ประสบการณ์ใช้งานที่สะอาดและลื่นไหล",
  },
  bioHighlights: {
    en: ["Front-End Developer", "UX/UI Designer"],
    th: ["นักพัฒนา Front-End", "นักออกแบบ UX/UI"],
  },
  location: {
    en: "Bangna, Bangkok 10260, Thailand",
    th: "บางนา กรุงเทพมหานคร 10260 ประเทศไทย",
  },
  email: "ddthanaphon993@gmail.com",
  phone: "0966898993",
  links: [{ label: "GitHub", href: "https://github.com/thanaphon8" }],
};