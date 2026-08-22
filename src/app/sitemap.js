import { projects } from "@/data/projects";

export default function sitemap() {
  const base = "https://portfolio-nextjs-plum-nine.vercel.app";

  const projectEntries = projects.map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
