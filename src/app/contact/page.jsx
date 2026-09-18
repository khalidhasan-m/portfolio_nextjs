import { PageShell } from "@/app/layout";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Contact Khalid Hasan Meskat — full-stack developer open to remote and full-time roles. Reach out via email, LinkedIn, or GitHub.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Khalid Hasan Meskat",
    description:
      "Contact Khalid Hasan Meskat — full-stack developer open to remote and full-time roles. Reach out via email, LinkedIn, or GitHub.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/contact/og-image",
        width: 1200,
        height: 630,
        alt: "Khalid Hasan Meskat — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Khalid Hasan Meskat",
    description:
      "Contact Khalid Hasan Meskat — full-stack developer open to remote and full-time roles. Reach out via email, LinkedIn, or GitHub.",
    images: ["/contact/twitter-image"],
  },
};

export default function ContactPage() {
  return <PageShell><Contact /></PageShell>;
}

