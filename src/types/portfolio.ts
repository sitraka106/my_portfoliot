export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  missions: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ProfileData {
  fullName: string;
  title: string;
  summary: string;
  phone: string;
  email: string;
  linkedin: string;
  location: string;
  experiences: Experience[];
  educations: Education[];
  skillCategories: SkillCategory[];
  languages: Language[];
}
