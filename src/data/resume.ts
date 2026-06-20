// Resume ma'lumotlari — Fozil Fakhriddinov
// Github / LinkedIn havolalarini o'zingiznikiga almashtirib qo'ying.

export const profile = {
  name: "Fozil Fakhriddinov",
  role: "Software Developer",
  tagline: "Fullstack engineer crafting fast, secure & delightful web products.",
  location: "Tashkent, Uzbekistan",
  phone: "+998 88 108 30 39",
  phoneHref: "tel:+998881083039",
  email: "coderf03@gmail.com",
  github: "https://github.com/Foz1ljon",
  linkedin: "https://www.linkedin.com/in/faxriddinov-fozil/",
  resumeFile: "/Resume.pdf",
};

export const stats = [
  { value: "1+", label: "Years building for production" },
  { value: "4+", label: "Shipped projects & modules" },
  { value: "15+", label: "Technologies in the toolkit" },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Simplex ITC",
    role: "Frontend Developer",
    period: "Jan 2026 — Present",
    current: true,
    points: [
      "Developed and maintained official apps for government agencies, ensuring high accessibility and compliance with state digital standards.",
      "Implemented complex modules including secure E-imzo (digital signature) integration using Vue 3, TypeScript and Ant Design.",
      "Collaborated with a cross-functional team to deliver scalable and secure web solutions for public-sector clients.",
    ],
  },
  {
    company: "Alpha Electronics",
    role: "Frontend Developer",
    period: "Oct 2024 — May 2025",
    points: [
      "Developed and maintained the company's official website and CRM panel, enhancing operational efficiency and user experience.",
      "Collaborated with a cross-functional team to build a proprietary desktop application, contributing to the architecture and implementation of core features.",
    ],
  },
];

export interface Project {
  name: string;
  role: string;
  period: string;
  link?: string;
  linkLabel?: string;
  points: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "ConnectMobile",
    role: "E-commerce Platform · Software Developer",
    period: "Apr 2026 — Present",
    points: [
      "Architected a full-stack e-commerce ecosystem including mobile apps, Admin and Courier management panels.",
      "Implemented backend infrastructure for real-time order tracking and logistics integration (Uzpost, BTS).",
      "Integrated the Click payment gateway for secure and seamless online transactions.",
      "Built cross-platform mobile apps with Capacitor for native Android & iOS performance.",
      "Developed centralized dashboards for efficient store operations and real-time delivery management.",
    ],
    tags: ["Vue 3", "NestJS", "MongoDB", "Redis", "Capacitor", "Click API"],
  },
  {
    name: "Atom-ui-vue",
    role: "Open Source UI Library",
    period: "Personal",
    link: "https://github.com/Foz1ljon/atom-ui",
    linkLabel: "GitHub",
    points: [
      "Developed a reusable, high-performance UI component library for Vue 3 and TypeScript environments.",
      "Designed a consistent design system with highly customizable components for cross-project UI consistency.",
      "Automated build processes and documentation, ensuring ease of use and maintainability for developers.",
    ],
    tags: ["Vue 3", "TypeScript", "Design System", "Vite"],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["JavaScript", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Fastify.js", "NestJS", "BullMQ", "TypeORM"] },
  {
    label: "Frontend",
    items: ["Vue", "Nuxt.js", "HTML5", "CSS3", "SASS", "Tailwind", "Pinia", "TanStack Query", "Ant Design", "Element UI", "ElectronJS", "Capacitor", "Axios"],
  },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "RedisDB"] },
  { label: "Infrastructure", items: ["NGINX", "Ubuntu / Linux", "SSH", "CI/CD"] },
  { label: "Tools & AI", items: ["Git", "GitHub", "GitLab", "VS Code", "Prompt Engineering"] },
];

export interface Education {
  school: string;
  program: string;
  period: string;
  points: string[];
}

export const education: Education[] = [
  {
    school: "Najot Ta'lim",
    program: "Fullstack Bootcamp · Node.js & Vue.js",
    period: "Jun 2024 — Aug 2024",
    points: [
      "Intensive training in modern web technologies, focused on building scalable full-stack applications.",
      "Node.js, Vue 3 (Composition & Options API), TypeScript, Nest.js, PostgreSQL/MongoDB and RESTful APIs.",
      "Deep knowledge of software architecture, state management (Pinia/Vuex) and efficient database design.",
    ],
  },
  {
    school: "Najot Ta'lim",
    program: "Foundation Bootcamp · C, Python, MySQL",
    period: "Dec 2022 — May 2023",
    points: ["Programming foundations and computer-science fundamentals.", "Algorithms & problem solving — complexity, arrays/strings, recursion, sorting & searching."],
  },
];

export const languages = [
  { name: "Uzbek", level: "Native", value: 100 },
  { name: "Russian", level: "Read documentation", value: 10 },
  { name: "English", level: "Pre-Intermediate", value: 55 },
];
