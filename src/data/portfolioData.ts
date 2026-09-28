export interface SocialLink {
  platform: 'github' | 'instagram' | 'linkedin';
  name: string;
  url: string;
  ariaLabel: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  slug: string; // for simple-icons matching e.g. "laravel", "react", "tailwindcss"
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  mockupImage: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    headlineRole: string;
    eyebrow: string;
    heroBio: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutParagraphs: string[];
    email: string;
    location: string;
    statusHandle: string;
    statusText: string;
    heroCardImage: string;
    aboutPortraitImage: string;
    cvPath: string;
    socials: SocialLink[];
  };
  skills: SkillItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Deft Valian Exanova.",
    headlineRole: "Fullstack Developer",
    eyebrow: "HALO, SAYA",
    heroBio:
      "Membangun aplikasi web yang fungsional, interaktif, dan berpusat pada pengalaman pengguna.",
    aboutTitle: "SAYA DEFT VALIAN",
    aboutSubtitle: "FULLSTACK DEVELOPER",
    aboutParagraphs: [
      "Sebagai lulusan Sistem Informasi dan Software Engineer, saya berfokus mengubah kebutuhan bisnis yang kompleks menjadi aplikasi web yang efisien.",
      "Dari digitalisasi alur kerja operasional hingga perancangan arsitektur frontend, saya menikmati proses membangun solusi full-stack dari nol yang terukur dan memberikan dampak nyata.",
    ],
    email: "deftvalian2411@gmail.com",
    location: "Bekasi, Indonesia",
    statusHandle: "@dftvln",
    statusText: "Online",
    heroCardImage: "/images/profile/hero-card.png",
    aboutPortraitImage: "/images/profile/about-portrait.png",
    cvPath: "/assets/CV_Deft_Valian.pdf",
    socials: [
      {
        platform: "github",
        name: "GitHub",
        url: "https://github.com/deftvalian",
        ariaLabel: "Lihat profil GitHub Deft Valian",
      },
      {
        platform: "instagram",
        name: "Instagram",
        url: "https://instagram.com/dftvln",
        ariaLabel: "Lihat profil Instagram Deft Valian",
      },
      {
        platform: "linkedin",
        name: "LinkedIn",
        url: "https://linkedin.com/in/deftvalian",
        ariaLabel: "Lihat profil LinkedIn Deft Valian",
      },
    ],
  },
  skills: [
    { name: "Laravel", category: "backend", slug: "laravel" },
    { name: "ReactJS", category: "frontend", slug: "react" },
    { name: "Tailwind CSS", category: "frontend", slug: "tailwindcss" },
    { name: "PostgreSQL", category: "database", slug: "postgresql" },
    { name: "Next.js", category: "frontend", slug: "nextdotjs" },
    { name: "Node.js", category: "backend", slug: "nodedotjs" },
    { name: "MySQL", category: "database", slug: "mysql" },
    { name: "TypeScript", category: "frontend", slug: "typescript" },
    { name: "PHP", category: "backend", slug: "php" },
    { name: "Figma", category: "tools", slug: "figma" },
    { name: "Git", category: "tools", slug: "git" },
    { name: "JavaScript", category: "frontend", slug: "javascript" },
  ],
  experiences: [
    {
      id: "advics",
      role: "Fullstack Developer",
      company: "PT Advics Manufacturing Indonesia",
      period: "Aug 2025 – Feb 2026",
      location: "Karawang, Indonesia",
      bulletPoints: [
        "Menggantikan proses manual dengan membangun Sistem NG Scanning (integrasi QR) dan otomatisasi pipeline dokumen Scrap Evidence.",
        "Membangun aplikasi inti yang scalable (Sistem Warehouse, Manajemen Aset IT, dan Help Desk) menggunakan ekosistem Laravel dan ReactJS.",
        "Mengelola ribuan data secara konkuren dengan kecepatan tinggi menggunakan teknik seperti lazy loading pada lingkungan sistem yang berat.",
        "Merombak antarmuka lama menggunakan Tailwind CSS, menciptakan aplikasi yang responsif dan intuitif bagi eksekutif kantor maupun staf lapangan.",
      ],
      technologies: ["Laravel", "ReactJS", "Tailwind CSS", "MySQL", "PostgreSQL"],
    },
  ],
  education: [
    {
      id: "unsika",
      degree: "Sarjana Komputer (S.Kom.)",
      field: "Sistem Informasi",
      institution: "Universitas Singaperbangsa Karawang",
      period: "2022 – 2026",
      grade: "Lulusan Cumlaude",
      description:
        "Fokus pada rekayasa perangkat lunak, pengembangan aplikasi web skala industri, dan manajemen basis data relasional.",
    },
  ],
  projects: [
    {
      id: "absensi",
      title: "Portal Web Absensi Mata Kuliah",
      description:
        "Platform portal absensi terpusat dengan konsep direktori menyerupai Linktree untuk memudahkan mahasiswa dan dosen mengakses presensi perkuliahan lintas mata kuliah secara efisien.",
      mockupImage: "/images/projects/mockup-absensi.png",
      technologies: ["HTML", "CSS", "JS"],
    },
    {
      id: "kopergrosir",
      title: "KoperGrosir – Landing Page & CMS",
      description:
        "Sebuah situs web landing page profesional yang dilengkapi dengan panel admin (CMS) terintegrasi untuk pengelolaan katalog produk koper grosir, paket bundling, dan pemesanan cepat.",
      mockupImage: "/images/projects/mockup-kopergrosir.png",
      technologies: ["Laravel", "Tailwind CSS", "MySQL", "PHP"],
    },
    {
      id: "platform-dokumen",
      title: "Platform Web Profil & Manajemen Dokumen",
      description:
        "Sistem web terpadu untuk pencatatan dan distribusi berkas digital secara aman dan responsif di berbagai perangkat.",
      mockupImage: "/images/projects/mockup-platform.png",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    },
  ],
  certificates: [
    {
      id: "freecodecamp",
      title: "Responsive Web Design (300 Hours)",
      issuer: "freeCodeCamp",
      date: "5 Maret 2023",
      image: "/images/certificates/freecodecamp.png",
    },
    {
      id: "myskill-uiux",
      title: "UI-UX Research & Design: Fullstack Intensive Bootcamp",
      issuer: "MySkill (Batch 6)",
      date: "4 April 2023",
      image: "/images/certificates/myskill-uiux.png",
    },
    {
      id: "codepolitan",
      title: "Belajar Bootstrap CSS Framework",
      issuer: "CODEPOLITAN",
      date: "6 Maret 2024",
      image: "/images/certificates/codepolitan-bootstrap.png",
    },
    {
      id: "myskill-react",
      title: "Skill Specialization: Frontend - React",
      issuer: "MySkill",
      date: "5 Februari 2024",
      image: "/images/certificates/myskill-react.png",
    },
    {
      id: "vsga-kominfo",
      title: "Junior Web Developer (VSGA)",
      issuer: "Digitalent Kominfo",
      date: "29 Agustus 2023",
      image: "/images/certificates/digitalent-vsga.png",
    },
    {
      id: "dicoding",
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "6 April 2024",
      image: "/images/certificates/dicoding-frontend.png",
    },
  ],
};
