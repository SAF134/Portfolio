import type {
  SocialLink,
  SkillItem,
  ExperienceItem,
  ProjectItem,
  CertificateItem,
  EducationItem,
  PortfolioProfile,
  PortfolioData,
} from "@/types/portfolio";

export type {
  SocialLink,
  SkillItem,
  ExperienceItem,
  ProjectItem,
  CertificateItem,
  EducationItem,
  PortfolioProfile,
  PortfolioData,
};

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Syauqi Akmal Fadhali.",
    headlineRole: "Software Engineer/Software Development/Web Development",
    eyebrow: "HALO, PERKENALKAN SAYA",
    heroBio:
      "Saya adalah lulusan Teknik Komputer Universitas Telkom yang berfokus pada rekayasa perangkat lunak, khususnya pengembangan aplikasi mobile dan web modern. Berpengalaman merancang dan membangun solusi digital yang fungsional—mulai dari sistem monitoring energi dan IoT real-time terintegrasi, platform pemetaan interaktif geospasial, hingga aplikasi utilitas mobile produktivitas. Mengombinasikan desain antarmuka pengguna yang intuitif dengan arsitektur kode yang terstruktur, adaptif, serta berorientasi pada pemecahan masalah nyata.",
    email: "syauqiakmal137@gmail.com",
    heroCardImage: "/images/profile/foto-profil-syauqi.webp",
    cvPath: "/assets/CV_Syauqi_Akmal_Fadhali.pdf",
    socials: [
      {
        platform: "github",
        name: "GitHub",
        url: "https://github.com/saf134",
        ariaLabel: "Lihat profil GitHub Syauqi Akmal Fadhali",
      },
      {
        platform: "instagram",
        name: "Instagram",
        url: "https://instagram.com/saf.134",
        ariaLabel: "Lihat profil Instagram Syauqi Akmal Fadhali",
      },
      {
        platform: "linkedin",
        name: "LinkedIn",
        url: "https://linkedin.com/in/syauqi-akmal",
        ariaLabel: "Lihat profil LinkedIn Syauqi Akmal Fadhali",
      },
    ],
  },
  skills: [
    { name: "Flutter", category: "frontend", slug: "flutter" },
    { name: "ReactJS", category: "frontend", slug: "react" },
    { name: "TailwindCSS", category: "frontend", slug: "tailwindcss" },
    { name: "Next.js", category: "frontend", slug: "nextdotjs" },
    { name: "Firebase", category: "database", slug: "firebase" },
    { name: "Arduino IDE", category: "tools", slug: "arduino" },
    { name: "TypeScript", category: "frontend", slug: "typescript" },
    { name: "Google Stitch", category: "tools", slug: "googlestitch" },
    { name: "Figma", category: "tools", slug: "figma" },
    { name: "Node.js", category: "backend", slug: "nodedotjs" },
    { name: "Leaflet Map", category: "tools", slug: "map" }
  ],
  experiences: [
    {
      id: "proyek dosen",
      role: "Mobile Developer",
      company: "Laboratorium Everything Connected (EvConn)",
      period: "2025 – 2026",
      location: "Jl. Telekomunikasi No. 1, Terusan Buahbatu, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257.",
      bulletPoints: [
        "Merancang dan membangun aplikasi mobile berbasis Flutter untuk memantau status pengisian daya dan daya yang masuk secara real-time.",
        "Mendesain antarmuka pengguna (UI/UX) yang intuitif dengan visualisasi metrik dan grafik daya untuk memudahkan pemantauan efisiensi pengisian."
      ],
      technologies: ["Flutter", "Firebase", "Google Stitch","Leaflet Map"],
      logo: "/images/experience/evconn.png"
    },
    {
      id: "kp",
      role: "Unit Business Service",
      company: "PT Telkom Indonesia (Persero) Tbk",
      period: "Juni 2025 – Agustus 2025",
      location: "Jl. Raya Pajajaran No.37, RT.04/RW.06, Bantarjati, Kecamatan Bogor Utara, Kota Bogor, Jawa Barat 16153.",
      bulletPoints: [
        "Mendukung operasional harian unit dalam pemantauan status penyediaan dan pemeliharaan layanan telekomunikasi pelanggan enterprise.",
        "Berkoordinasi secara aktif dengan tim teknisi lapangan dalam pencatatan progres penanganan tiket layanan dan verifikasi lapangan.",
        "Mengelola serta merekapitulasi data administratif operasional layanan secara terstruktur guna mendukung evaluasi performa unit."
      ],
      technologies: ["Spreadsheet", "Infrastructure Excellence to provide Service Assurance (IXSA)", "Beyond Integrated Workforce Management (BIMA)", "Integrated Broadband Diagnostic Center (Ibooster)", "Auto Configuration System Ibooster (ACSIS)", "Operation Supervisory Monitoring (OSM)"],
      logo: "/images/experience/pttelkom.png"
    },
    {
      id: "organisasi",
      role: "Publikasi & Dokumentasi",
      company: "Persatuan Catur Mahasiswa (PCM) UKM Universitas Telkom",
      period: "2023 – 2024",
      location: "Jl. Telekomunikasi No. 1, Terusan Buahbatu, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257.",
      bulletPoints: [
        "Mengelola publikasi visual dan mendokumentasikan rangkaian kegiatan latihan rutin serta kejuaraan internal organisasi.",
        "Merancang sertifikat digital dan materi grafis kepanitiaan untuk puluhan peserta dan jajaran panitia kegiatan."
      ],
      technologies: ["Canva"],
      logo: "/images/experience/pcm.png"
    }
  ],
  education: [
    {
      id: "sarjana",
      institution: "Universitas Telkom",
      address: "Jl. Telekomunikasi No. 1, Terusan Buahbatu, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257.",
      field: "S1 Teknik Komputer",
      period: "2022 – 2026",
      logo: "/images/education/telkom.png"
    },
    {
      id: "sma",
      institution: "SMAIT Al Kahfi Bogor",
      address: "Jl. SPN Lido, Desa Srogol, Kecamatan Cigombong, Kabupaten Bogor, Jawa Barat 16110.",
      field: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
      period: "2019 – 2022",
      logo: "/images/education/alkahfi.png"
    },
    {
      id: "smp",
      institution: "SMPIT Insantama Bogor",
      address: "Jl. Hegarmanah IV No.47, RT.01/RW.08, Kelurahan Gunungbatu, Kecamatan Bogor Barat, Kota Bogor, Jawa Barat 16118.",
      field: "Islam Terpadu (IT)",
      period: "2016 – 2019",
      logo: "/images/education/insantama.png"
    },
    {
      id: "sd",
      institution: "SDIT Insantama Bogor",
      address: "Jl. Hegarmanah IV No.47, RT.01/RW.08, Kelurahan Gunungbatu, Kecamatan Bogor Barat, Kota Bogor, Jawa Barat 16118.",
      field: "Islam Terpadu (IT)",
      period: "2010 – 2016",
      logo: "/images/education/insantama.png"
    },
  ],
  projects: [
    {
      id: "proyek-1",
      title: "SunVolt",
      description:
        "Aplikasi Monitoring Pengisian Daya Kendaraan Listrik Ringan Berbasis Tenaga Surya.",
      mockupImage: "/images/projects/sunvolt.webp",
      technologies: ["Flutter", "Firebase", "Google Stitch", "Leaflet Map"],
      projectUrl: "https://drive.google.com/drive/folders/1KVRh-Ng_1-1mAoSuY6Rxi74PuyOcnsTq?usp=drive_link",
    },
    {
      id: "proyek-2",
      title: "MyIPK",
      description:
        "Aplikasi Manajemen Akademik Mahasiswa (IPK, Jadwal, dan Tugas).",
      mockupImage: "/images/projects/myipk.webp",
      technologies: ["Flutter", "Google Stitch"],
      projectUrl: "https://drive.google.com/drive/folders/1dEgPrlv5nGuPitLvZ-blyde4vlz68SGF?usp=drive_link",
    },
    {
      id: "proyek-3",
      title: "MyFish",
      description:
        "Aplikasi Monitoring & Kontrol Pemberi Pakan Ikan Otomatis.",
      mockupImage: "/images/projects/myfish.webp",
      technologies: ["Flutter", "Firebase", "Google Stitch"],
      projectUrl: "https://drive.google.com/drive/folders/1FhioI8ia7Oa8s7rQgqq_cohsXmGCVRXW?usp=drive_link",
    },
    {
      id: "proyek-4",
      title: "PetaSare",
      description:
        "Website Pemetaan Interaktif Lokasi Hotel Kota Bandung.",
      mockupImage: "/images/projects/petasare.webp",
      technologies: ["Typescript", "Next JS", "Leaflet Map", "TailwindCSS"],
      projectUrl: "https://peta-sare.vercel.app/",
    },
    {
      id: "proyek-5",
      title: "PetaBuitenzorg",
      description:
        "Aplikasi Pemetaan Interaktif lokasi Hotel, SPBU, Rumah Sakit, dan Mall di Kota Bogor.",
      mockupImage: "/images/projects/petabuitenzorg.webp",
      technologies: ["Flutter", "Google Stitch", "Leaflet Map"],
      projectUrl: "https://drive.google.com/drive/folders/1X3r9WhNSQhPCXoikgPJCi7P71ls08WVp?usp=drive_link",
    },
    {
      id: "proyek-6",
      title: "Klikin",
      description:
        "Aplikasi Pengetuk Layar Smartphone Otomatis.",
      mockupImage: "/images/projects/",
      technologies: ["Flutter", "Google Stitch"],
      projectUrl: "https://drive.google.com/drive/folders/19tYTYg06X_aJH-BWlw-BGdRC7ke9HzKh?usp=drive_link",
    },
    {
      id: "proyek-7",
      title: "Timerin",
      description:
        "Aplikasi Timer dengan overlay.",
      mockupImage: "/images/projects/",
      technologies: ["Flutter", "Google Stitch"],
      projectUrl: "https://drive.google.com/drive/folders/1NTjFigM09igydbg1hGQOHnIlJDz-236C?usp=drive_link",
    },
  ],
  certificates: [
    {
      id: "sertifikat-1",
      image: "/images/certificates/sertif-greatnusa-1.webp",
    },
    {
      id: "sertifikat-2",
      image: "/images/certificates/sertif-greatnusa-2.webp",
    },
    {
      id: "sertifikat-3",
      image: "/images/certificates/sertif-greatnusa-3.webp",
    },
    {
      id: "sertifikat-4",
      image: "/images/certificates/sertif-greatnusa-4.webp",
    },
    {
      id: "sertifikat-5",
      image: "/images/certificates/sertif-agunacourse.webp",
    },
    {
      id: "sertifikat-6",
      image: "/images/certificates/sertif-python.webp",
    },
    {
      id: "sertifikat-7",
      image: "/images/certificates/sertif-udemy.webp",
    },
    {
      id: "sertifikat-8",
      image: "/images/certificates/SertifNVIDIA_SyauqiA_.webp",
    },
    {
      id: "sertifikat-9",
      image: "/images/certificates/SYAUQI AKMAL FADHALI PANITIA.webp",
    },
    {
      id: "sertifikat-10",
      image: "/images/certificates/SYAUQI AKMAL FADHALI PCM 2024.webp",
    },
    {
      id: "sertifikat-11",
      image: "/images/certificates/SYAUQI AKMAL FADHALI Pubdok 23.webp",
    },
    {
      id: "sertifikat-12",
      image: "/images/certificates/Sertifikat-Hafalan_Syauqi-Akmal.webp",
    },
    {
      id: "sertifikat-13",
      image: "/images/certificates/Sertifikat-Tilawah_Syauqi-Akmal.webp",
    },
    {
      id: "sertifikat-14",
      image: "/images/certificates/Sertifikat-PameranCD_Syauqi-Akmal.webp",
    },
    {
      id: "sertifikat-15",
      image: "/images/certificates/Sertifikat-EIRRG_Syauqi-Akmal.webp",
    },
  ],
};
