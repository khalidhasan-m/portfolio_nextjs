# Khalid Hasan Meskat — Portfolio

Personal portfolio of **Khalid Hasan Meskat**, a Frontend Developer from Bangladesh building modern, responsive web apps with React, Next.js, and Tailwind CSS.

**Live:** [portfolio-nextjs-plum-nine.vercel.app](https://portfolio-nextjs-plum-nine.vercel.app)

---

## Features

- Dark / light theme toggle
- Amber accent theme with Framer Motion animations
- Responsive layout (mobile → desktop) + CSS container queries
- Skip navigation link and accessible controls
- Hero with profile photo, stats, and CV download
- Interactive Services picker
- Skills aligned with GitHub profile (Frontend · Backend · Tools · Learning)
- Education, experience, and certifications
- Project cards with static detail pages + per-project metadata
- Contact section with copy-to-clipboard, socials, and message form
- Custom loading and 404 pages

---

## Tech Stack

| Layer | Tools |
|--------|--------|
| Framework | **Next.js 15** (App Router) |
| UI | React 18, Tailwind CSS 3.4 |
| Motion | Framer Motion, react-fast-marquee |
| Theme | next-themes |
| Icons | react-icons |
| Deploy | Vercel |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx           # Server layout, fonts, metadata
│   ├── page.jsx             # Home (all sections)
│   ├── loading.jsx
│   ├── not-found.jsx
│   ├── icon.jsx             # Favicon
│   ├── sitemap.js
│   ├── globals.css          # Theme, container queries, a11y
│   └── projects/[id]/
│       └── page.jsx         # SSG project detail + generateMetadata
├── components/
│   ├── Providers.jsx        # next-themes client wrapper
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
    └── assets.js
public/
├── profile.jpg
├── resume.pdf
├── robots.txt
└── projects/                # Project images
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

---

## Customization

| What | Where |
|------|--------|
| Projects | `src/data/projects.js` |
| Skills | `src/components/Skills.jsx` |
| Services | `src/components/Services.jsx` |
| Hero / About / Contact | Matching files under `src/components/` |
| Profile photo | `public/profile.jpg` |
| Resume PDF | `public/resume.pdf` |
| Accent color | `tailwind.config.js` + `globals.css` |
| Site URL | `layout.jsx` metadataBase, `sitemap.js`, `robots.txt` |

---

## Skills (from profile)

**Frontend:** HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, DaisyUI, HeroUI, Framer Motion  
**Backend:** Node.js, Express.js, MongoDB, REST API, Better Auth, JWT  
**Tools:** Git, GitHub, VS Code, Postman, Vercel, Vite, Figma  
**Learning:** TypeScript · SQL · Docker · AWS

---

## License

MIT — use and adapt for your own portfolio.
