export interface SocialLink {
  platform: 'github' | 'instagram' | 'linkedin';
  name: string;
  url: string;
  ariaLabel: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  slug: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bulletPoints: string[];
  technologies: string[];
  logo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  mockupImage: string;
  technologies: string[];
  projectUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface CertificateItem {
  id: string;
  image: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  address: string;
  field: string;
  period: string;
  degree?: string;
  grade?: string;
  description?: string;
  logo?: string;
}

export interface PortfolioProfile {
  fullName: string;
  headlineRole: string;
  eyebrow: string;
  heroBio: string;
  email: string;
  heroCardImage: string;
  cvPath: string;
  socials: SocialLink[];
}

export interface PortfolioData {
  profile: PortfolioProfile;
  skills: SkillItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}
