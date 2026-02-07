export interface Profile {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  twitter: string;
}

export interface Skill {
  name: string;
  category: "languages" | "infrastructure" | "soft";
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  startYear: number;
  endYear?: number;
  description: string;
  partTime?: boolean;
}

export interface Education {
  institution: string;
  program: string;
  startYear: number;
  endYear: number;
}
