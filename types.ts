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

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'globe' | 'shopping' | 'search' | 'edit';
}

export interface Testimonial {
  id: string;
  quote: string;
  role: string;
  project: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
