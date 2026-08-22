# Khalid Hasan Meskat — Portfolio

Personal portfolio of **Khalid Hasan Meskat**, a Frontend Developer from Bangladesh building modern, responsive web apps with React, Next.js, and Tailwind CSS.

**Live:** [portfolio-nextjs-plum-nine.vercel.app](https://portfolio-nextjs-plum-nine.vercel.app)

---

## Features

- Dark / light theme toggle
- Amber accent theme with selective Framer Motion on the hero
- Responsive layout (mobile → desktop) + CSS container queries
- Skip navigation link and accessible controls
- Hero with profile photo, stats, and CV download
- Interactive Services picker
- Skills aligned with GitHub profile (Frontend · Backend · Tools · Learning)
- Education, experience, and certifications
- Project cards with static detail pages + per-project metadata
- Contact section with copy-to-clipboard, socials, and **mailto** CTA (no form backend)
- Custom loading and 404 pages
- Dynamic OG / Twitter images via Next.js `opengraph-image`

---

## Tech Stack

| Layer | Tools |
|--------|--------|
| Framework | **Next.js 15** (App Router) |
| UI | React 18, Tailwind CSS 3.4 |
| Motion | Framer Motion (hero), react-fast-marquee |
| Theme | next-themes |
| Icons | react-icons |
| Deploy | Vercel |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx           # Server layout, fonts, metadata
│   ├── page.jsx             # Home (dynamic section imports)
│   ├── loading.jsx
│   ├── not-found.jsx
│   ├── icon.jsx
│   ├── opengraph-image.jsx
│   ├── twitter-image.jsx
│   ├── sitemap.js
│   ├── globals.css
│   └── projects/[id]/
│       └── page.jsx
├── components/
│   ├── Providers.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechMarquee.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useInView.js
└── data/
    ├── projects.js
    ├── skills.js
    └── assets.js
public/
├── profile.jpg
├── resume.pdf
├── robots.txt
└── projects/
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

---

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Deploy with default settings

Optional: compress images in `public/projects/` (aim ~50–70 KB each) for faster loads on slow networks.

---

## Customization

| What | Where |
|------|--------|
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Services | `src/components/Services.jsx` |
| Hero / About / Contact | Matching files under `src/components/` |
| Profile photo | `public/profile.jpg` |
| Resume PDF | `public/resume.pdf` |
| Accent color | `tailwind.config.js` + `globals.css` |
| Site URL | `layout.jsx` `metadataBase`, `sitemap.js`, `robots.txt` |

---

## License

MIT — use and adapt for your own portfolio.
