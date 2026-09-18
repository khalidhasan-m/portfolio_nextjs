import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://portfolio-nextjs-plum-nine.vercel.app";

const description =
  "Full-stack developer from Bangladesh building responsive, accessible web apps with React, Next.js, Node.js, Better Auth, and Stripe. Open to remote and full-time roles.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Khalid Hasan Meskat | Full Stack Developer",
    template: "%s | Khalid Hasan Meskat",
  },
  description,
  creators: { Khalid: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Khalid Hasan Meskat | Full Stack Developer",
    description,
    url: "/",
    siteName: "Khalid Hasan Meskat",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Khalid Hasan Meskat — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Hasan Meskat | Full Stack Developer",
    description,
    images: ["/twitter-image"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f8f7f4" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Khalid Hasan Meskat",
      url: siteUrl,
      jobTitle: "Frontend Developer",
      description,
      email: "mailto:khalidhasanmeskat@gmail.com",
      sameAs: [
        "https://github.com/khalidhasan-m",
        "https://linkedin.com/in/khalidhasanmeskat",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
        addressRegion: "Barishal",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Frontend Development",
        "Web Accessibility",
      ],
    },
    {
      "@type": "WebSite",
      name: "Khalid Hasan Meskat Portfolio",
      url: siteUrl,
      description,
      author: { "@type": "Person", name: "Khalid Hasan Meskat" },
    },
  ],
};

/** Shared page chrome — server-rendered so each route file stays one-liner simple. */
export function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <div className="noise-bg">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
