export default function manifest() {
  return {
    name: "Khalid Hasan Meskat | Frontend Developer",
    short_name: "KHM Portfolio",
    description:
      "Frontend developer specializing in React, Next.js, and accessible UI. Available for remote and full-time roles.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#f59e0b",
    icons: [
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
