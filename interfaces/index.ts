export interface Tag {
  text: string;
  color?: string;
}

export interface Project {
  name: string;
  summary: string;
  image?: string;
  tags?: Tag[];
  link?: string;
}

export interface About {
  name: string;
  role: string;
  summary: string;
}

export interface Portfolio {
  projects: Project[];
}

export interface Experience {
  startAt: string;
  endAt: string;
  name: string;
  summary: string;
}

export interface Education {
  year: string;
  name: string;
}

export interface Skill {
  hard?: string[];
  soft?: string[];
  tech?: string[];
}

export interface Resume {
  experience?: Experience[];
  education?: Education[];
  skill?: Skill;
}

export interface Data {
  about: About;
  portfolio: Portfolio;
  resume?: Resume;
  contact?: any;
}
