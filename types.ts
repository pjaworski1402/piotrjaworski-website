export interface Project {
  id: string;
  title: string;
  category: 'SaaS' | 'E-commerce' | 'Booking Platform' | 'Reference DB' | 'Marketing';
  description: string;
  features: string[];
  techStack: string[];
  status: 'Live' | 'Production-ready' | 'Active';
  isMonetized?: boolean;
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