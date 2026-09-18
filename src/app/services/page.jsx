import { PageShell } from "@/app/layout";
import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description:
    "Full-stack development services by Khalid Hasan Meskat — full-stack web apps, API integration, auth, and payment workflows with React, Next.js, Node.js, Express, and Stripe.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <PageShell><Services /></PageShell>;
}
