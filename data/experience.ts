import type { Localized } from "@/components/LanguageProvider";

export type ExperienceEntry = {
  role: Localized<string>;
  org: Localized<string>;
  period: Localized<string>;
  description: Localized<string>;
};

export const experience: ExperienceEntry[] = [
  {
    role: {
      en: "B.Sc. Computer Science",
      th: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
    },
    org: {
      en: "Sisaket Rajabhat University",
      th: "มหาวิทยาลัยราชภัฏศรีสะเกษ",
    },
    period: {
      en: "2023 — Present",
      th: "2566 — ปัจจุบัน",
    },
    description: {
      en: "Faculty of Liberal Arts and Science · Sisaket, Thailand",
      th: "คณะศิลปศาสตร์และวิทยาศาสตร์ · ศรีสะเกษ ประเทศไทย",
    },
  },
];