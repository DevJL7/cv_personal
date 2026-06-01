import { Github, Linkedin, Mail } from 'lucide-astro';
import type { SocialLink } from '../types/content';

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  x: Github,
} as const;

export function getSocialIcon(icon: SocialLink['icon']) {
  return icons[icon];
}
