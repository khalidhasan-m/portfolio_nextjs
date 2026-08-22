export const projects = [
  {
    id: "pawfectmatch",
    name: "PawfectMatch",
    tagline: "Pet adoption platform with owner dashboard",
    description:
      "A MERN stack pet adoption platform where users browse adoptable pets, submit requests, and owners manage listings from a dashboard. I designed a shared approval status model (pending, approved, rejected) so public listings and the owner view stay in sync through Express and MongoDB.",
    image: "/projects/pawfectmatch.jpg",
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
      "Building the automated approval workflow required a clear status model shared between the owner dashboard and public listings, and keeping both views consistent via the Express/MongoDB API.",
    improvements:
      "Next steps: real-time status notifications, adopter–owner messaging, and image uploads for pet profiles.",
    category: "Full Stack",
  },
  {
    id: "wanderlust",
    name: "Wanderlust",
    tagline: "Full-stack travel platform with auth and CRUD listings",
    description:
      "A Next.js travel platform where anyone can explore destinations while authenticated users create, update, and delete their own listings. Route protection and ownership checks keep open browsing separate from private write actions, with sessions handled by Better Auth and data in MongoDB.",
    image: "/projects/wanderlust.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "Better Auth", "MongoDB"],
    liveLink: "https://wanderlust-seven-gules.vercel.app/",
    githubLink: "https://github.com/khalidhasan-m/wanderlust",
    features: [
      "Browse and search travel destinations with responsive card layouts",
      "Authenticated users can create, update, and delete their own listings",
      "Secure session-based authentication with Better Auth",
      "MongoDB-backed persistence for destinations and user data",
    ],
    challenges:
      "Letting owners manage only their listings while keeping browse public required careful authorization across server and client routes in the App Router.",
    improvements:
      "Planned: booking/payment flow, reviews and ratings, listing image uploads, and map-based search.",
    category: "Full Stack",
  },
  {
    id: "suncart",
    name: "SunCart",
    tagline: "eCommerce store with OAuth and protected orders",
    description:
      "A Next.js eCommerce store for summer essentials with Google OAuth, email/password auth, product search, and protected order pages. HeroUI and Embla power a polished catalog and hero slider; Better Auth gates post-login flows so only signed-in users reach orders.",
    image: "/projects/suncart.jpg",
    tech: ["Next.js", "HeroUI", "Tailwind CSS", "Better Auth", "React Hook Form", "Embla Carousel"],
    liveLink: "https://assignment8-kappa.vercel.app/",
    githubLink: "https://github.com/khalidhasan-m/assignment8",
    features: [
      "Google OAuth and email/password authentication with Better Auth",
      "Protected order pages for logged-in users only",
      "Product search and filtering across the catalog",
      "Auto-scrolling hero slider with Embla Carousel",
    ],
    challenges:
      "Combining Google OAuth with email/password in one session model, then protecting order routes, required careful App Router auth boundaries.",
    improvements:
      "Future: persistent cart, payment checkout, order history, and an admin product dashboard.",
    category: "Full Stack",
  },
];
