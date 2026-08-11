import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  "Frontend developer from Bangladesh building responsive, accessible web apps with React, Next.js, Tailwind CSS, and Better Auth. Open to remote and full-time roles.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Khalid Hasan Meskat | Frontend Developer",
    template: "%s | Khalid Hasan Meskat",
  },
  description,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Bangladesh",
    "Portfolio",
    "Web Developer",
    "Better Auth",
  ],
  authors: [{ name: "Khalid Hasan Meskat", url: siteUrl }],
  creator: "Khalid Hasan Meskat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khalid Hasan Meskat | Frontend Developer",
    description,
    url: "/",
    siteName: "Khalid Hasan Meskat",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Khalid Hasan Meskat — Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Hasan Meskat | Frontend Developer",
    description,
    images: ["/profile.jpg"],
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
