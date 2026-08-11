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

export const metadata = {
  metadataBase: new URL("https://portfolio-nextjs-plum-nine.vercel.app"),
  title: "Khalid Hasan Meskat | Frontend Developer",
  description:
    "Portfolio of Khalid Hasan Meskat — Frontend Developer specializing in React and Next.js",
  openGraph: {
    title: "Khalid Hasan Meskat | Frontend Developer",
    description:
      "Portfolio of Khalid Hasan Meskat — Frontend Developer specializing in React and Next.js",
    url: "/",
    siteName: "Khalid Hasan Meskat",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Khalid Hasan Meskat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Khalid Hasan Meskat | Frontend Developer",
    description:
      "Portfolio of Khalid Hasan Meskat — Frontend Developer specializing in React and Next.js",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
