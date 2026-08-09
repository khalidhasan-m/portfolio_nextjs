export const projects = [
  {
    id: "wanderlust",
    name: "Wanderlust",
    tagline: "Full-stack travel booking platform",
    description:
      "A full-stack travel platform built with Next.js where users can explore destinations, create and manage listings, and book trips. Authenticated users can add, update, and delete destinations through a clean, responsive interface backed by MongoDB.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    tech: ["Next.js", "React", "Tailwind CSS", "Better Auth", "MongoDB"],
    liveLink: "https://wanderlust-seven-gules.vercel.app/",
    githubLink: "https://github.com/khalidhasan-m/wanderlust",
    features: [
      "Browse and search travel destinations with responsive card layouts",
      "Authenticated users can create, update, and delete their own listings",
      "Secure session-based authentication with Better Auth",
      "MongoDB-backed data persistence for destinations and bookings",
    ],
    challenges:
      "Designing a data model that let authenticated users manage only their own listings, while keeping the browsing experience open to everyone, required careful route protection and authorization checks across both server and client components.",
    improvements:
      "Planned improvements include a booking/payment flow, destination reviews and ratings, image uploads for listings, and map-based destination search.",
    category: "Full Stack",
  },
  {
    id: "suncart",
    name: "SunCart",
    tagline: "Summer essentials eCommerce store",
    description:
      "A modern eCommerce store for seasonal summer essentials, built with Next.js and HeroUI. Features Google OAuth authentication, protected order pages, product search, and an auto-scrolling hero slider for a polished shopping experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tech: ["Next.js", "HeroUI", "Tailwind CSS", "Better Auth", "React Hook Form", "Embla Carousel"],
    liveLink: "https://assignment8-kappa.vercel.app/",
    githubLink: "https://github.com/khalidhasan-m/assignment8",
    features: [
      "Google OAuth and email/password authentication with Better Auth",
      "Protected order pages accessible only to logged-in users",
      "Product search and filtering across the catalog",
      "Auto-scrolling hero slider built with Embla Carousel",
    ],
    challenges:
      "Wiring up Google OAuth alongside email/password auth in the same flow, then gating order pages behind that session, took careful handling of protected routing in the Next.js App Router.",
    improvements:
      "Future plans include a shopping cart with persistent state, checkout with a payment gateway, order history for users, and an admin dashboard for managing products.",
    category: "Full Stack",
  },
  {
    id: "pawfectmatch",
    name: "PawfectMatch",
    tagline: "Pet adoption platform with owner dashboard",
    description:
      "A MERN stack pet adoption platform where users can explore available pets and submit adoption requests. Includes an automated approval workflow and an owner dashboard with search and filtering for managing listings.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
    liveLink: "https://pet-adoption-client-gamma.vercel.app/",
    githubLink: "https://github.com/khalidhasan-m/pet-adoption-client",
    features: [
      "Browse adoptable pets with search and category filtering",
      "Submit and track adoption requests",
      "Owner dashboard for managing pet listings",
      "Automated approval workflow for adoption requests",
    ],
    challenges:
      "Building the automated approval workflow required designing a clear status model (pending, approved, rejected) shared between the owner dashboard and the public-facing pet listings, and keeping both in sync via the Express/MongoDB backend.",
    improvements:
      "Next steps include real-time notifications for adoption status updates, messaging between adopters and owners, and image uploads for pet profiles.",
    category: "Full Stack",
  },
];
