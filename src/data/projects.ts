import data from "@content/projects.json";

export interface Project {
  slug: string;
  title: string;
  location: string;
  description: string;
  category: "exterior" | "interior" | "detail" | "other";
  featured: boolean;
  heroImage: string;
  images: string[];
  sqft?: string;
  style?: string;
  highlights?: string[];
}

export const portfolioPage = data.portfolioPage;

export const projects = data.projects as Project[];

export const beforeAfterPairs: { slug: string; title: string }[] =
  data.beforeAfterPairs;

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
