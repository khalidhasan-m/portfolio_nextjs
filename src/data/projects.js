export const projects = [
  {
    id: "nextjs-auth-app",
    name: "Next.js Authentication App",
    tagline: "Secure full-featured auth with session management",
    description:
      "A secure, full-featured authentication web application built with Next.js, featuring user registration, login, and protected routing using Better Auth. The app provides a seamless and secure experience with session-based authentication, fully responsive UI, and clean component architecture.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
    tech: ["Next.js", "Better Auth", "Tailwind CSS", "React"],
    liveLink: "https://ephemeral-paprenjak-fdea78.netlify.app/",
    githubLink: "https://github.com/khalidhasan-m/assignment7",
    features: [
      "Secure user registration and login system with session management",
      "Protected routes accessible only to authenticated users",
      "Authentication implemented with Better Auth library",
      "Fully responsive UI built with Tailwind CSS",
    ],
    challenges:
      "Integrating Better Auth with Next.js App Router was the most challenging part. Configuring session persistence across server and client components required careful handling of middleware and cookie-based tokens. Understanding the new App Router paradigm alongside auth flows took significant research and iteration.",
    improvements:
      "Future plans include adding OAuth providers (Google, GitHub), implementing role-based access control, adding email verification flow, and building a user profile dashboard with editable settings.",
    category: "Full Stack",
  },
  {
    id: "contact-management-app",
    name: "Contact Management App",
    tagline: "Dynamic React app for managing structured contact data",
    description:
      "A responsive React-based frontend application for managing and displaying structured contact data with reusable components and smooth state management. Built with functional components and React hooks for real-time, interactive UI updates.",
    image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&q=80",
    tech: ["React", "React Hooks", "Tailwind CSS", "Vite"],
    liveLink: "https://lighthearted-cassata-d93713.netlify.app/",
    githubLink: "https://github.com/khalidhasan-m/assignment6",
    features: [
      "Dynamic, interactive UI built with React functional components and hooks",
      "Reusable, modular component architecture for scalable codebase",
      "Responsive design optimized for all screen sizes and devices",
      "Efficient local state management for real-time data rendering",
    ],
    challenges:
      "Managing state across multiple components without a global state library was challenging. Lifting state up and passing props efficiently while keeping the component tree clean required careful planning. Ensuring real-time re-renders without performance degradation was another key challenge.",
    improvements:
      "Plans include integrating a backend API for persistent data storage, adding search and filter functionality, implementing contact grouping/tagging, and adding export to CSV feature.",
    category: "Frontend",
  },
  {
    id: "dragon-news",
    name: "Dragon News",
    tagline: "Full-stack news platform powered by NewsAPI & Better Auth",
    description:
      "A full-stack news web application built with Next.js that fetches real-time news articles from NewsAPI.org. Features user authentication with Better Auth, allowing registered users to browse news by category with a clean, responsive layout.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    tech: ["Next.js", "NewsAPI", "Better Auth", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/khalidhasan-m/dragon-news-nextjs",
    features: [
      "Real-time news fetched from NewsAPI.org",
      "User authentication and protected routes with Better Auth",
      "Category-based news browsing",
      "Fully responsive layout for all devices",
    ],
    challenges:
      "Setting up Better Auth with Next.js App Router posed significant complexity. Additionally, handling NewsAPI rate limits in development required implementing caching strategies and fallback UI states. Ensuring smooth async data fetching with proper loading and error states was also a learning curve.",
    improvements:
      "Future plans include adding an admin panel for managing featured articles, implementing bookmarking, adding push notifications for breaking news, full-text search, and expanding to include more news sources.",
    category: "Full Stack",
  },
];
