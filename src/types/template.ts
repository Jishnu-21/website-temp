export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TemplateData {
  name: string;
  title: string;
  subtitle: string;
  heroImage: string;
  projects: Project[];
  skills: SkillCategory[];
  socialLinks: SocialLink[];
  contactEmail: string;
  about: string;
  footerText: string;
}
