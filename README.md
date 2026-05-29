# Khalid Hasan Meskat — Portfolio

A modern, fully responsive developer portfolio built with **Next.js 14**, **HeroUI**, **Tailwind CSS**, and **React Icons**.

## ✨ Features

- 🌗 Dark / Light theme toggle (Sun/Moon icon, top-right navbar)
- 🎨 Dark theme with orange/amber accent colors
- ⬇️ Download CV button (downloads actual PDF resume)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 Smooth scroll navigation
- 🃏 Project cards with individual detail pages
- 💼 Skills grouped by category
- 📅 Experience & Education timeline

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js           # Root layout with HeroUI + ThemeProvider
│   ├── page.js             # Home page (all sections)
│   ├── globals.css         # Global styles + animations
│   └── projects/[id]/
│       └── page.js         # Dynamic project detail page
├── components/
│   ├── Navbar.js           # Responsive navbar + theme toggle
│   ├── Hero.js             # Hero section with gradient headline
│   ├── About.js            # About Me section
│   ├── Skills.js           # Skills grouped by category
│   ├── Education.js        # Education + Experience timeline
│   ├── Projects.js         # Project cards grid
│   ├── Contact.js          # Contact info + social links
│   └── Footer.js           # Footer
└── data/
    └── projects.js         # All project data (edit here to update)
public/
└── resume.pdf              # Your CV (already included)
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🌐 Deployment (Vercel — Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"** → Import your GitHub repo
4. Leave all settings as default → Click **Deploy**
5. Your live URL will be ready in ~1 minute ✅

### Alternative: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → Import from Git
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy ✅

## 🛠 Customization

### Update projects
Edit `src/data/projects.js` — add/remove/edit project objects.

### Update personal info
- Hero: `src/components/Hero.js`
- About: `src/components/About.js`
- Contact: `src/components/Contact.js`

### Add your photo
Replace the placeholder in `src/components/Hero.js`:
```jsx
// Replace the placeholder div with:
<Image src="/your-photo.jpg" alt="Khalid Hasan Meskat" fill className="object-cover" />
```
Then place `your-photo.jpg` in the `/public` folder.

### Change accent color
In `tailwind.config.js` and `src/app/globals.css`, replace `amber` / `#f59e0b` with your preferred color.

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework with App Router |
| HeroUI v2 | UI component library |
| Tailwind CSS | Utility-first styling |
| next-themes | Dark/light theme management |
| React Icons | Icon library (react-icons/fi, si, gi) |
| Framer Motion | Animations |

## 📄 License

MIT — feel free to use and customize for your own portfolio.
