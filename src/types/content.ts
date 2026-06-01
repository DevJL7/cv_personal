export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'x';
}

export interface SiteConfig {
  name: string;
  role: string;
  roleFocus?: string;
  heroLead?: string;
  tagline: string;
  location: string;
  employer?: string;
  email?: string;
  cvPdfPath: string;
  social: SocialLink[];
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  demoUrl?: string;
  demoLabel?: string;
  codeUrl?: string;
  featured?: boolean;
  /** Ruta pseudo-archivo estilo IDE */
  filePath?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon:
    | 'frontend'
    | 'backend'
    | 'ux'
    | 'ai'
    | 'cloud'
    | 'devops'
    | 'collaboration';
  skills: string[];
}

export interface TerminalCommand {
  command: string;
  output: string | string[];
}

export interface PaletteCommand {
  id: string;
  label: string;
  hint?: string;
  keywords?: string;
  action: 'navigate' | 'link' | 'theme' | 'terminal';
  target?: string;
}
