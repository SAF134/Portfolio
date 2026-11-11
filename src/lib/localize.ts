import { portfolioData, type PortfolioData } from "@/data/portfolioData";
import type { Language } from "@/context/LanguageContext";

const englishContent = {
  profile: {
    eyebrow: "HELLO, NICE TO MEET YOU",
    headlineRole: "Software Engineer / Web Developer / UI & UX Designer / Fullstack Developer",
    heroBio:
      "I am a Computer Engineering graduate from Telkom University focused on software engineering, particularly modern mobile and web application development. Experienced in designing and building functional digital solutions ranging from integrated real-time IoT and energy monitoring systems, interactive geospatial mapping platforms, to mobile productivity utility apps. Combining intuitive user interface design with structured, adaptable code architecture oriented towards solving real-world problems.",
  },
  experiences: {
    koperasi: {
      role: "Information and Technology",
      period: "October 2026 – Now",
      location: "Bogor City, West Java.",
      bulletPoints: [
        "Designed and built the official website for Koperasi Produsen Dirga Pangan Mandiri.",
        "Co-founded the cooperative as one of its founding members.",
      ],
    },
    "proyek dosen": {
      role: "Mobile Developer",
      period: "September 2025 – August 2026",
      location: "Bandung Regency, West Java.",
      bulletPoints: [
        "Designed and built a Flutter-based mobile application to monitor real-time charging status and power input.",
        "Designed intuitive user interfaces (UI/UX) with metric visualizations and power charts for easy monitoring of charging efficiency.",
      ],
    },
    kp: {
      role: "Business Service Unit",
      period: "June 2025 – August 2025",
      location: "Bogor City, West Java.",
      bulletPoints: [
        "Supported the unit's daily operations in monitoring telecommunication service provisioning and assurance status for enterprise clients.",
        "Actively coordinated with field technician teams to record service ticket progress and on-site verification.",
        "Managed and compiled operational service administration data in a structured manner to support unit performance evaluations.",
      ],
    },
    organisasi: {
      role: "Publication & Documentation",
      period: "2023 – 2024",
      location: "Bandung Regency, West Java.",
      bulletPoints: [
        "Managed visual publications and documented routine training sessions as well as internal organizational tournaments.",
        "Designed digital certificates and event committee graphic materials for dozens of participants and event committees.",
      ],
    },
  } as Record<string, { role: string; period?: string; location?: string; bulletPoints: string[] }>,
  education: {
    sarjana: {
      institution: "Telkom University",
      field: "Bachelor of Computer Engineering",
      address: "Bandung Regency, West Java.",
    },
    sma: {
      institution: "SMAIT Al Kahfi",
      field: "Natural Sciences & Mathematics",
      address: "Bogor Regency, West Java.",
    },
  } as Record<string, { institution?: string; field: string; address?: string }>,
  projects: {
    "proyek-1": {
      title: "SunVolt",
      description:
        "Solar-Powered Light Electric Vehicle Charging Monitoring Application.",
    },
    "proyek-2": {
      title: "Nguliah",
      description:
        "Student Academic Management Application for features such as GPA, course schedules, assignments, and events.",
    },
    "proyek-3": {
      title: "MyFish",
      description:
        "Automated Fish Feeding Monitoring & Control Application.",
    },
    "proyek-4": {
      title: "PetaSare",
      description:
        "Interactive Geospatial Mapping Website for Hotel Locations in Bandung City.",
    },
    "proyek-5": {
      title: "PetaBuitenzorg",
      description:
        "Interactive Mapping Application for Hotels, Gas Stations, Hospitals, and Malls in Bogor City.",
    },
    "proyek-6": {
      title: "Klikin",
      description:
        "Automatic Smartphone Screen Tapper Application.",
    },
    "proyek-7": {
      title: "Website Koperasi Produsen Dirga Pangan Mandiri",
      description:
        "Official website of Koperasi Produsen Dirga Pangan Mandiri.",
    },
    "proyek-8": {
      title: "Timerin",
      description:
        "Overlay Timer Application to help Mobile Legends players track enemy spell cooldowns.",
    },
  } as Record<string, { title?: string; description: string }>,
};

/**
 * Localizes period strings (e.g. "Sekarang" -> "Now", Indonesian month names to English).
 */
export function localizePeriod(period: string, lang: Language): string {
  if (lang === "ID") return period;
  return period
    .replace(/Sekarang/gi, "Now")
    .replace(/Januari/gi, "January")
    .replace(/Februari/gi, "February")
    .replace(/Maret/gi, "March")
    .replace(/April/gi, "April")
    .replace(/Mei/gi, "May")
    .replace(/Juni/gi, "June")
    .replace(/Juli/gi, "July")
    .replace(/Agustus/gi, "August")
    .replace(/September/gi, "September")
    .replace(/Oktober/gi, "October")
    .replace(/November/gi, "November")
    .replace(/Desember/gi, "December");
}

/**
 * Localizes Indonesian locations/addresses to English.
 */
export function localizeLocation(location?: string, lang?: Language): string | undefined {
  if (!location || lang === "ID") return location;
  return location
    .replace(/Kota Bogor/gi, "Bogor City")
    .replace(/Kabupaten Bogor/gi, "Bogor Regency")
    .replace(/Kabupaten Bandung/gi, "Bandung Regency")
    .replace(/Kota Bandung/gi, "Bandung City")
    .replace(/Jawa Barat/gi, "West Java");
}

/**
 * Returns localized portfolio data based on selected language.
 * When lang is 'ID', original portfolioData is returned intact.
 * When lang is 'EN', translated fields are mapped over the data.
 */
export function getLocalizedPortfolioData(lang: Language): PortfolioData {
  if (lang === "ID") {
    return portfolioData;
  }

  return {
    ...portfolioData,
    profile: {
      ...portfolioData.profile,
      eyebrow: englishContent.profile.eyebrow,
      headlineRole: englishContent.profile.headlineRole,
      heroBio: englishContent.profile.heroBio,
    },
    experiences: portfolioData.experiences.map((exp) => {
      const translation = englishContent.experiences[exp.id];
      const translatedPeriod = translation?.period ?? localizePeriod(exp.period, "EN");
      const translatedLocation = translation?.location ?? localizeLocation(exp.location, "EN") ?? exp.location;
      if (translation) {
        return {
          ...exp,
          role: translation.role,
          period: translatedPeriod,
          location: translatedLocation,
          bulletPoints: translation.bulletPoints,
        };
      }
      return {
        ...exp,
        period: translatedPeriod,
        location: translatedLocation,
      };
    }),
    education: portfolioData.education.map((edu) => {
      const translation = englishContent.education[edu.id];
      const translatedPeriod = localizePeriod(edu.period, "EN");
      const translatedAddress = translation?.address ?? localizeLocation(edu.address, "EN") ?? edu.address;
      const translatedInstitution = translation?.institution ?? edu.institution;
      if (translation) {
        return {
          ...edu,
          institution: translatedInstitution,
          field: translation.field,
          period: translatedPeriod,
          address: translatedAddress,
        };
      }
      return {
        ...edu,
        institution: translatedInstitution,
        period: translatedPeriod,
        address: translatedAddress,
      };
    }),
    projects: portfolioData.projects.map((proj) => {
      const translation = englishContent.projects[proj.id];
      if (translation) {
        return {
          ...proj,
          title: translation.title ?? proj.title,
          description: translation.description,
        };
      }
      return proj;
    }),
  };
}
