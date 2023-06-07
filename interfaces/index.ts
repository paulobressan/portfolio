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

export interface Data {
  about: About;
  portfolio: Portfolio;
}
