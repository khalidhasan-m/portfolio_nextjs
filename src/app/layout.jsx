"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Khalid Hasan Meskat | Frontend Developer</title>
        <meta name="description" content="Portfolio of Khalid Hasan Meskat — Frontend Developer specializing in React and Next.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
