export interface Tag {
  text: string;
  color?: string;
}

export interface Project {
  name: string;
  summary: string;
  image?: string;
  tags?: Tag[];
}

export interface Portfolio {
  name: string;
  role: string;
  summary: string;
  projects?: Project[];
}
