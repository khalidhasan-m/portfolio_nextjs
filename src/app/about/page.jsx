import { PageShell } from "@/app/layout";
import About from "@/components/About";

export const metadata = {
  title: "About",
  description:
    "Full-stack developer from Bangladesh with an MA in English, now building modern web apps with React, Next.js, Node.js, and Better Auth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <PageShell><About /></PageShell>;
}
