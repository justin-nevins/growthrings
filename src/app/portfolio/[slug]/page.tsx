import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ProjectDetail slug={params.slug} />;
}
