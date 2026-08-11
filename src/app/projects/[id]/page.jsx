import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.name} | Khalid Hasan Meskat`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | Khalid Hasan Meskat`,
      description: project.tagline,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
