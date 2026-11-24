import type { Localized } from "@/components/LanguageProvider";

export type ProjectPreviewImage = string | { src: string; orientation?: "portrait" };

export type Project = {
  title: string;
  description: Localized<string>;
  tags: string[];
  href: string;
  liveUrl?: string;
  highlights?: Localized<string[]>;
  previewImages?: ProjectPreviewImage[];
};

const chaiRaiWa: Project = {
  title: "Chai Rai Wa: Expense Tracker",
  description: {
    en: "A mobile-first web app for tracking daily income and expenses. Log a transaction in seconds with categories, quick-note presets, and receipt photos, then see your balance, spending trends, and an estimate of how many days your money will last.",
    th: "เว็บแอปแบบ Mobile-first สำหรับบันทึกรายรับรายจ่ายประจำวัน บันทึกรายการได้ในไม่กี่วินาทีพร้อมหมวดหมู่ โน้ตด่วนที่ตั้งไว้ล่วงหน้า และรูปใบเสร็จ จากนั้นดูยอดคงเหลือ แนวโน้มการใช้จ่าย และการประเมินว่าเงินจะอยู่ได้อีกกี่วัน",
  },
  tags: ["TypeScript", "JavaScript", "CSS"],
  href: "https://github.com/thanaphon8/chairaiwa.git",
  previewImages: ["/img/chai1.png", "/img/chai2.png", "/img/chai3.png", "/img/chai4.png"],
  highlights: {
    en: [
      "Designed and built this full-stack app end to end, from UX/UI to front-end and back-end",
      "Built a slide-to-save entry flow with category picker, quick-note presets, and client-side receipt image compression",
      "Used Google Sheets as the database and Google Drive for receipt storage through a Google Apps Script API, so it runs with no server cost.",
      "Built a dashboard with net balance, spending ratio, and a runway estimate based on average daily spend",
      "Built a searchable, filterable history grouped by day with daily totals and a receipt image viewer",
      "Delivered a responsive UI with separate layouts for mobile and desktop",
    ],
    th: [
      "ออกแบบและสร้างแอปแบบ Full-Stack ครบวงจร ตั้งแต่ UX/UI ไปจนถึง Front-End และ Back-End",
      "สร้างขั้นตอนบันทึกรายการแบบเลื่อนเพื่อบันทึก พร้อมตัวเลือกหมวดหมู่ โน้ตด่วนที่ตั้งไว้ล่วงหน้า และการบีบอัดรูปใบเสร็จฝั่งไคลเอนต์",
      "ใช้ Google Sheets เป็นฐานข้อมูลและ Google Drive เก็บใบเสร็จผ่าน Google Apps Script API จึงทำงานได้โดยไม่มีค่าใช้จ่ายเซิร์ฟเวอร์",
      "สร้างแดชบอร์ดแสดงยอดสุทธิ สัดส่วนการใช้จ่าย และการประเมินระยะเวลาที่เงินจะอยู่ได้จากค่าใช้จ่ายเฉลี่ยต่อวัน",
      "สร้างประวัติรายการที่ค้นหาและกรองได้ จัดกลุ่มตามวันพร้อมยอดรวมรายวัน และตัวดูรูปใบเสร็จ",
      "ส่งมอบ UI แบบ Responsive ที่มีเลย์เอาต์แยกกันสำหรับมือถือและเดสก์ท็อป",
    ],
  },
};

export const projects: Project[] = [
  {
    title: "Team Matching Application",
    description: {
      en: "A web application that helps educators form balanced student teams based on MBTI personality analysis, featuring quiz templates, automated team matching, and real-time room management.",
      th: "เว็บแอปพลิเคชันที่ช่วยให้ผู้สอนจัดทีมนักเรียนอย่างสมดุลโดยอิงการวิเคราะห์บุคลิกภาพแบบ MBTI พร้อมเทมเพลตแบบทดสอบ การจับคู่ทีมอัตโนมัติ และการจัดการห้องแบบเรียลไทม์",
    },
    tags: ["TypeScript", "JavaScript", "CSS"],
    href: "https://github.com/thanaphon8/FinalProject",
    liveUrl: "https://persona-link-one.vercel.app/",
    previewImages: ["/img/bg1.png", "/img/bg2.png", "/img/bg3.png", "/img/bg4.png"],
    highlights: {
      en: [
        "Developed and built a web application",
        "Designed and developed UI for all major pages including home, templates, question flow, team view, and result screens",
        "Crafted interactive components such as buttons, cards, modals, and navigation with focus on usability and visual consistency",
        "Ensured responsive design across desktop and mobile devices",
      ],
      th: [
        "พัฒนาและสร้างเว็บแอปพลิเคชัน",
        "ออกแบบและพัฒนา UI ของทุกหน้าหลัก ได้แก่ หน้าแรก เทมเพลต ขั้นตอนตอบคำถาม มุมมองทีม และหน้าสรุปผล",
        "สร้างคอมโพเนนต์แบบโต้ตอบ เช่น ปุ่ม การ์ด โมดัล และเมนูนำทาง โดยเน้นความใช้งานง่ายและความสอดคล้องของภาพลักษณ์",
        "รองรับการแสดงผลแบบ Responsive ทั้งเดสก์ท็อปและมือถือ",
      ],
    },
  },
  {
    title: "Evaluation System",
    description: {
      en: "A web app for classroom presentations — the instructor opens a room and students join to evaluate whichever team is currently presenting. The instructor gets a summary of each team's overall score along with automated feedback on their strengths and areas to improve, while evaluators can leave comments to help that team do better next time.",
      th: "เว็บแอปสำหรับการนำเสนอในห้องเรียน — ผู้สอนเปิดห้อง แล้วนักเรียนเข้าร่วมเพื่อประเมินทีมที่กำลังนำเสนออยู่ ผู้สอนจะได้สรุปคะแนนรวมของแต่ละทีมพร้อมฟีดแบ็กอัตโนมัติเกี่ยวกับจุดแข็งและสิ่งที่ควรปรับปรุง ขณะที่ผู้ประเมินสามารถเขียนคอมเมนต์เพื่อช่วยให้ทีมนั้นทำได้ดีขึ้นในครั้งถัดไป",
    },
    tags: ["TypeScript", "JavaScript"],
    href: "https://github.com/thanaphon8/PeerScore.git",
    previewImages: ["/img/21.png", "/img/22.png", "/img/23.png", "/img/24.png"],
    highlights: {
      en: [
        "Designed and built the UX/UI",
        "Handled front-end and back-end development",
        "Developed the app",
      ],
      th: [
        "ออกแบบและสร้าง UX/UI",
        "พัฒนาทั้งฝั่ง Front-End และ Back-End",
        "พัฒนาแอปพลิเคชัน",
      ],
    },
  },
  {
    title: "DRAPE — Clothing E-commerce Website",
    description: {
      en: "Built the landing page for a clothing e-commerce brand using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, with a minimal, high-contrast visual direction inspired by Apple and Nike.",
      th: "สร้างหน้า Landing Page สำหรับแบรนด์เสื้อผ้าอีคอมเมิร์ซด้วย Next.js 16 (App Router), React 19, TypeScript และ Tailwind CSS v4 ด้วยแนวทางภาพแบบมินิมอลและคอนทราสต์สูงที่ได้แรงบันดาลใจจาก Apple และ Nike",
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/thanaphon8/DRAPE.git",
    previewImages: ["/img/d1.png", "/img/d2.png"],
    highlights: {
      en: [
        "Designed and built 7 reusable UI components (Header, Hero, CategoryGrid, FeatureSection, ProductGrid, Newsletter, Footer) with data cleanly separated from presentation for easy content updates",
        "Implemented a full-bleed, auto-looping background video hero section with gradient overlays for readability",
        "Delivered fully responsive layouts across desktop and mobile, including a mobile hamburger navigation menu and adaptive grid systems",
        "Used Next.js Image optimization with per-breakpoint object-position tuning for consistent art direction across screen sizes",
      ],
      th: [
        "ออกแบบและสร้างคอมโพเนนต์ UI ที่นำกลับมาใช้ซ้ำได้ 7 ชิ้น (Header, Hero, CategoryGrid, FeatureSection, ProductGrid, Newsletter, Footer) โดยแยกข้อมูลออกจากส่วนแสดงผลอย่างชัดเจนเพื่อให้อัปเดตเนื้อหาได้ง่าย",
        "สร้างส่วน Hero แบบวิดีโอพื้นหลังเต็มจอที่เล่นวนอัตโนมัติ พร้อมเกรเดียนต์ซ้อนทับเพื่อให้อ่านข้อความได้ชัด",
        "รองรับการแสดงผลแบบ Responsive เต็มรูปแบบทั้งเดสก์ท็อปและมือถือ รวมถึงเมนูแฮมเบอร์เกอร์บนมือถือและระบบกริดที่ปรับตามขนาดหน้าจอ",
        "ใช้ Next.js Image optimization พร้อมปรับ object-position ตามแต่ละ breakpoint เพื่อให้ภาพดูสอดคล้องกันในทุกขนาดหน้าจอ",
      ],
    },
  },
  {
    title: "SingFinder",
    description: {
      en: "A web application designed to help users identify songs when they only remember partial lyrics or melody. Users can simply click the microphone button to hum or sing remembered lyrics, or type text snippets into the search bar. The app retrieves and displays a list of closest matching songs.",
      th: "เว็บแอปพลิเคชันที่ช่วยให้ผู้ใช้หาชื่อเพลงเมื่อจำได้เพียงบางส่วนของเนื้อเพลงหรือทำนอง เพียงกดปุ่มไมโครโฟนเพื่อฮัมหรือร้องเนื้อเพลงที่จำได้ หรือพิมพ์ข้อความลงในช่องค้นหา แอปจะแสดงรายการเพลงที่ใกล้เคียงที่สุด",
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/Oatto319/SingFinder.git",
    previewImages: ["/img/s1.png", "/img/s2.png", "/img/s3.png", "/img/s4.png"],
    highlights: {
      en: [
        "Designed and built the UX/UI for key interactive features including voice input, search, and result displays",
        "Developed full-stack features to handle voice recognition and lyric-based search queries",
        "Implemented fuzzy text search and audio recognition logic to return top relevant song matches",
        "Ensured responsive design and smooth interactive components across desktop and mobile devices",
      ],
      th: [
        "ออกแบบและสร้าง UX/UI สำหรับฟีเจอร์แบบโต้ตอบหลัก ได้แก่ การป้อนเสียง การค้นหา และการแสดงผลลัพธ์",
        "พัฒนาฟีเจอร์แบบ Full-Stack เพื่อจัดการการรู้จำเสียงและการค้นหาจากเนื้อเพลง",
        "พัฒนาตรรกะการค้นหาข้อความแบบ Fuzzy และการรู้จำเสียงเพื่อคืนเพลงที่เกี่ยวข้องที่สุด",
        "รองรับการแสดงผลแบบ Responsive และคอมโพเนนต์แบบโต้ตอบที่ลื่นไหลทั้งเดสก์ท็อปและมือถือ",
      ],
    },
  },
  {
    title: "Typing Speed Test",
    description: {
      en: "A typing speed test website with support for both English and Thai, including a word bank and hard-mode sentences in each language. The whole app uses a consistent Game Boy-inspired green color theme.",
      th: "เว็บทดสอบความเร็วในการพิมพ์ที่รองรับทั้งภาษาอังกฤษและภาษาไทย มีคลังคำและประโยคโหมดยากในแต่ละภาษา ทั้งแอปใช้ธีมสีเขียวสไตล์ Game Boy อย่างสอดคล้องกัน",
    },
    tags: ["TypeScript", "MongoDB"],
    href: "https://github.com/thanaphon8/chairaiwa.git",
    previewImages: ["/img/31.png", "/img/32.png", "/img/33.png"],
    highlights: {
      en: [
        "Goes beyond a single end-of-game WPM average by logging every word event (word, correct/incorrect, timestamp), so typing speed can be plotted as a graph over time",
        "Stores typing history and each user's personal best scores in MongoDB",
      ],
      th: [
        "ไม่ได้แสดงแค่ค่าเฉลี่ย WPM ตอนจบเกม แต่บันทึกทุกเหตุการณ์ของคำ (คำ ถูก/ผิด เวลา) จึงสามารถพล็อตความเร็วในการพิมพ์เป็นกราฟตามเวลาได้",
        "เก็บประวัติการพิมพ์และคะแนนสูงสุดส่วนตัวของผู้ใช้แต่ละคนไว้ใน MongoDB",
      ],
    },
  },
  chaiRaiWa,
  chaiRaiWa,
  {
    title: "AION Document System: EV Agreement Generator",
    description: {
      en: "A web app that helps organizations issue vehicle agreement documents quickly and accurately. Fill in employee and car details in a form, watch a real A4 document update live, then export to PDF or print in one click. Output matches the original Word file.",
      th: "เว็บแอปที่ช่วยให้องค์กรออกเอกสารสัญญารถยนต์ได้รวดเร็วและแม่นยำ กรอกข้อมูลพนักงานและรถในฟอร์ม ดูเอกสาร A4 จริงอัปเดตแบบสด แล้วส่งออกเป็น PDF หรือพิมพ์ได้ในคลิกเดียว ผลลัพธ์ตรงกับไฟล์ Word ต้นฉบับ",
    },
    tags: ["TypeScript", "React", "Next.js", "CSS"],
    href: "https://github.com/thanaphon8/DocFill.git",
    previewImages: ["/img/com7page.png", "/img/ufun.png", "/img/snh.png"],
    highlights: {
      en: [
        "Designed and built the UX/UI for the form and live A4 preview, with click-to-edit directly on the document and a blinking caret that follows the active field",
        "Built a multi-page layout engine using CSS columns and real units (mm/pt), so screen, preview, and PDF output stay identical, including Thai line breaking",
        "Added Chrome-style employee tabs with bulk import: paste a name list from Excel or Google Sheets to generate one document per person instantly",
        "Wrote a Thai baht-to-text converter (e.g. 50,000 → ห้าหมื่นบาทถ้วน) with auto comma formatting to cut manual typing errors",
        "Built an in-document WYSIWYG editor with per-tab or all-tab scope, plus switchable letterheads for multiple group companies (COM7 / UFUN / SEE)",
        "Added autosave via localStorage, undo for form clearing (Ctrl+Z), Ctrl+scroll zoom, dark/light theme, and a responsive layout for desktop and mobile",
      ],
      th: [
        "ออกแบบและสร้าง UX/UI ของฟอร์มและพรีวิว A4 แบบสด พร้อมคลิกแก้ไขบนเอกสารได้โดยตรงและเคอร์เซอร์กะพริบที่ตามช่องที่กำลังใช้งาน",
        "สร้างเอนจินจัดหน้าหลายหน้าด้วย CSS columns และหน่วยจริง (mm/pt) ทำให้หน้าจอ พรีวิว และ PDF ตรงกันทุกประการ รวมถึงการตัดบรรทัดภาษาไทย",
        "เพิ่มแท็บพนักงานสไตล์ Chrome พร้อมการนำเข้าแบบกลุ่ม: วางรายชื่อจาก Excel หรือ Google Sheets เพื่อสร้างเอกสารหนึ่งฉบับต่อหนึ่งคนทันที",
        "เขียนตัวแปลงจำนวนเงินบาทเป็นข้อความภาษาไทย (เช่น 50,000 → ห้าหมื่นบาทถ้วน) พร้อมจัดรูปแบบเครื่องหมายจุลภาคอัตโนมัติเพื่อลดความผิดพลาดจากการพิมพ์เอง",
        "สร้างตัวแก้ไขแบบ WYSIWYG ในเอกสาร โดยเลือกขอบเขตเป็นรายแท็บหรือทุกแท็บ พร้อมหัวกระดาษที่สลับได้สำหรับหลายบริษัทในกลุ่ม (COM7 / UFUN / SEE)",
        "เพิ่มการบันทึกอัตโนมัติผ่าน localStorage, การเลิกทำการล้างฟอร์ม (Ctrl+Z), การซูมด้วย Ctrl+scroll, ธีมมืด/สว่าง และเลย์เอาต์ Responsive สำหรับเดสก์ท็อปและมือถือ",
      ],
    },
  },
];