export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  status: 'Live' | 'Active';
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}