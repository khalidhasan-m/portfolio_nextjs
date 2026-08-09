# Khalid Hasan Meskat — Portfolio

Personal portfolio of **Khalid Hasan Meskat**, a Frontend Developer from Bangladesh building modern, responsive web apps with React, Next.js, and Tailwind CSS.

**Live:** [portfolio-nextjs-plum-nine.vercel.app](https://portfolio-nextjs-plum-nine.vercel.app)

---

## Features

- Dark / light theme toggle
- Amber accent theme with smooth animations
- Responsive layout (mobile → desktop) + **CSS container queries**
- Hero with profile photo, stats, and CV download
- Skills aligned with [GitHub profile](https://github.com/khalidhasan-m) (Frontend · Backend · Tools · Learning)
- Education, experience, and certifications timeline
- Project cards with detail pages
- Contact section (email, phone, WhatsApp, socials)

---

## Tech Stack

| Layer | Tools |
|--------|--------|
| Framework | **Next.js 15** (App Router) |
| UI | React 18, Tailwind CSS 3.4 |
| Theme | next-themes |
| Icons | react-icons |
| Deploy | Vercel |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx          # Root layout, theme provider, viewport
│   ├── page.jsx            # Home (all sections)
│   ├── globals.css         # Global styles, container queries
│   └── projects/[id]/
│       └── page.jsx        # Project detail pages
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── data/
    ├── projects.js         # Project list & metadata
    └── assets.js           # Profile / resume fallbacks
public/
├── profile.jpg             # Profile photo (optional)
├── resume.pdf              # CV download
└── projects/               # Project images (svg/jpg)
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
| Hero / About / Contact | Matching files under `src/components/` |
| Profile photo | `public/profile.jpg` |
| Resume PDF | `public/resume.pdf` |
| Accent color | `tailwind.config.js` + `globals.css` (`amber` / `#f59e0b`) |

---

## Skills (from profile)

**Frontend:** HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, DaisyUI  
**Backend:** Node.js, Express.js, MongoDB, REST API, Better Auth  
**Tools:** Git, GitHub, VS Code, Postman, Vercel, Vite, Figma  
**Learning:** Node.js · Express · MongoDB · TypeScript · Docker · AWS

---

## License

MIT — use and adapt for your own portfolio.
