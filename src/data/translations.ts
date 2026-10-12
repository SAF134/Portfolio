import type { Language } from "@/context/LanguageContext";

export interface Translations {
  nav: {
    profil: string;
    pendidikan: string;
    keahlian: string;
    pengalaman: string;
    proyek: string;
    sertifikat: string;
  };
  hero: {
    eyebrow: string;
    downloadCv: string;
    contactMe: string;
  };
  education: {
    titlePart1: string;
    titleAccent: string;
    subtitle: string;
    fieldLabel: string;
  };
  skills: {
    titlePart1: string;
    titleAccent: string;
    subtitle: string;
  };
  experience: {
    titlePart1: string;
    titleAccent: string;
    subtitle: string;
    toolsLabel: string;
  };
  projects: {
    titlePart1: string;
    titleAccent: string;
    subtitle: string;
    projectBadge: string;
    btnProof: string;
    btnDetail: string;
    ratioHint: string;
    inProgress: string;
  };
  certificates: {
    titlePart1: string;
    titleAccent: string;
    subtitle: string;
    certificateBadge: string;
    btnDetail: string;
    ratioHint: string;
    inProgress: string;
  };
  projectModal: {
    title: string;
    closeAria: string;
    prevAria: string;
    nextAria: string;
    fullDescHeading: string;
    toolsHeading: string;
    linksHeading: string;
    openProofBtn: string;
    noLinkNotice: string;
    placeholderRatio: string;
    placeholderNotice: string;
  };
  certificateModal: {
    previewTitle: string;
    closeAria: string;
    prevAria: string;
    nextAria: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  ID: {
    nav: {
      profil: "Profil",
      pendidikan: "Pendidikan",
      keahlian: "Keahlian",
      pengalaman: "Pengalaman",
      proyek: "Proyek",
      sertifikat: "Sertifikat",
    },
    hero: {
      eyebrow: "HALO, PERKENALKAN SAYA",
      downloadCv: "Unduh CV Saya",
      contactMe: "Hubungi Saya",
    },
    education: {
      titlePart1: "Riwayat ",
      titleAccent: "Pendidikan",
      subtitle: "Latar belakang akademis formal selama menempuh perjalanan pendidikan.",
      fieldLabel: "Program Studi:",
    },
    skills: {
      titlePart1: "Keahlian ",
      titleAccent: "Teknis",
      subtitle: "Teknologi dan alat yang pernah saya gunakan untuk merancang dan membangun berbagai macam aplikasi dan website.",
    },
    experience: {
      titlePart1: "Pengalaman Kerja Praktik & ",
      titleAccent: "Organisasi",
      subtitle: "Jejak pengalaman kerja praktik & organisasi selama menempuh pendidikan.",
      toolsLabel: "Alat & Teknologi:",
    },
    projects: {
      titlePart1: "Riwayat ",
      titleAccent: "Proyek",
      subtitle: "Riwayat proyek yang pernah saya bangun selama menempuh pendidikan.",
      projectBadge: "Proyek",
      btnProof: "Bukti Proyek",
      btnDetail: "Lihat Detail",
      ratioHint: "Rasio 16:9",
      inProgress: "Proyek ini sedang dalam proses pembuatan",
    },
    certificates: {
      titlePart1: "Sertifikat & ",
      titleAccent: "Penghargaan",
      subtitle: "Bukti mengikuti webinar, seminar, serta sertifikasi yang pernah saya ikuti selama menempuh pendidikan.",
      certificateBadge: "Sertifikat",
      btnDetail: "Lihat Detail",
      ratioHint: "A4 Landscape (29,7 : 21)",
      inProgress: "Proyek ini sedang dalam proses pembuatan",
    },
    projectModal: {
      title: "Detail Proyek",
      closeAria: "Tutup detail proyek",
      prevAria: "Proyek sebelumnya",
      nextAria: "Proyek berikutnya",
      fullDescHeading: "Deskripsi Lengkap Proyek",
      toolsHeading: "Tools & Teknologi yang Digunakan",
      linksHeading: "Bukti & Tautan Proyek",
      openProofBtn: "Buka Bukti Proyek",
      noLinkNotice: "Tautan bukti proyek belum ditambahkan (dapat diisi pada baris projectUrl di src/data/portfolioData.ts).",
      placeholderRatio: "Rasio 16:9",
      placeholderNotice: "Belum ada gambar yang dimasukkan",
    },
    certificateModal: {
      previewTitle: "Pratinjau Sertifikat",
      closeAria: "Tutup pratinjau sertifikat",
      prevAria: "Sertifikat sebelumnya",
      nextAria: "Sertifikat berikutnya",
    },
    footer: {
      copyright: "Hak Cipta Dilindungi.",
    },
  },
  EN: {
    nav: {
      profil: "Profile",
      pendidikan: "Education",
      keahlian: "Skills",
      pengalaman: "Experience",
      proyek: "Projects",
      sertifikat: "Certificates",
    },
    hero: {
      eyebrow: "HELLO, NICE TO MEET YOU",
      downloadCv: "Download My CV",
      contactMe: "Contact Me",
    },
    education: {
      titlePart1: "Educational ",
      titleAccent: "Background",
      subtitle: "Formal academic background throughout my educational journey.",
      fieldLabel: "Major / Field:",
    },
    skills: {
      titlePart1: "Technical ",
      titleAccent: "Skills",
      subtitle: "Technologies and tools I have used to design and build various applications and websites.",
    },
    experience: {
      titlePart1: "Practical Work & ",
      titleAccent: "Organization",
      subtitle: "Track record of practical work and organizational experience during my studies.",
      toolsLabel: "Tools & Technologies:",
    },
    projects: {
      titlePart1: "Project ",
      titleAccent: "History",
      subtitle: "Projects I have designed and built throughout my educational journey.",
      projectBadge: "Project",
      btnProof: "Project Proof",
      btnDetail: "View Details",
      ratioHint: "16:9 Ratio",
      inProgress: "This project is currently in development",
    },
    certificates: {
      titlePart1: "Certificates & ",
      titleAccent: "Honors",
      subtitle: "Proof of participation in webinars, seminars, and certifications obtained during my studies.",
      certificateBadge: "Certificate",
      btnDetail: "View Details",
      ratioHint: "A4 Landscape (29.7 : 21)",
      inProgress: "This certificate is currently being processed",
    },
    projectModal: {
      title: "Project Details",
      closeAria: "Close project details",
      prevAria: "Previous project",
      nextAria: "Next project",
      fullDescHeading: "Full Project Description",
      toolsHeading: "Tools & Technologies Used",
      linksHeading: "Project Proof & Links",
      openProofBtn: "Open Project Proof",
      noLinkNotice: "Project proof link has not been added yet (can be configured in portfolioData.ts).",
      placeholderRatio: "16:9 Ratio",
      placeholderNotice: "No image provided yet",
    },
    certificateModal: {
      previewTitle: "Certificate Preview",
      closeAria: "Close certificate preview",
      prevAria: "Previous certificate",
      nextAria: "Next certificate",
    },
    footer: {
      copyright: "All Rights Reserved.",
    },
  },
};
