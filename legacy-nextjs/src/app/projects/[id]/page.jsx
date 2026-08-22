import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };

  const title = project.name;
  const description = `${project.tagline}. Built with ${project.tech.slice(0, 4).join(", ")}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.name} | Khalid Hasan Meskat`,
      description,
      url: `/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: project.image,
          alt: `${project.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Khalid Hasan Meskat`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
