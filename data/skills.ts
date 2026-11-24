import type { Localized } from "@/components/LanguageProvider";

export type SkillCategory = {
  category: Localized<string>;
  items: Localized<string[]>;
  image?: string;
};

function same<T>(value: T): Localized<T> {
  return { en: value, th: value };
}

export const skills: SkillCategory[] = [
  {
    category: { en: "Programming Language", th: "ภาษาโปรแกรม" },
    items: same(["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Dart"]),
  },
  {
    category: { en: "Frameworks & Platforms", th: "เฟรมเวิร์กและแพลตฟอร์ม" },
    items: same(["Flutter", "Django", "Next.js", "Angular", "Bootstrap"]),
  },
  {
    category: { en: "Databases", th: "ฐานข้อมูล" },
    items: same(["MongoDB", "MySQL"]),
  },
  {
    category: { en: "Tools", th: "เครื่องมือ" },
    items: same(["VS Code", "GitHub", "Postman", "Docker", "Figma", "Canva", "CapCut"]),
  },
  {
    category: { en: "Microsoft Office", th: "Microsoft Office" },
    items: same(["Excel", "Word", "Teams"]),
  },
  {
    category: { en: "Typing Performance", th: "ความเร็วในการพิมพ์" },
    items: {
      en: ["122 WPM / 98% Accuracy (Monkeytype)"],
      th: ["122 คำต่อนาที / ความแม่นยำ 98% (Monkeytype)"],
    },
    image: "/img/typing.png",
  },
];