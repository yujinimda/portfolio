export type ProjectDescItem =
  | string
  | {
      text: string;     
      image?: string;   
      code?: string;    
    };

export interface ProjectDescription {
  title: string;
  item: ProjectDescItem[];
}

export interface ProjectInfo {
  period: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  subTitle: string;
  info: ProjectInfo;
  description?: ProjectDescription[];
  links: ProjectLink[];
}