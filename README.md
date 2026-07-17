# Saran Raj S — Portfolio (React)

A single-page portfolio built with **React + Vite**, styled as a frosted-glass ("Apple glass") UI with a sidebar navigation. Sections change with a smooth fade transition, and can be navigated by clicking the sidebar, scrolling/trackpad, or swiping up/down on touch devices.

## Project structure

```
saran-portfolio/
├── src/
│   ├── components/       # One component per section (Home, Education, Experience, ...)
│   ├── data/content.js   # ALL resume text lives here — edit this to update content
│   ├── App.jsx           # Section switching, transition, swipe/scroll logic
│   ├── main.jsx          # React entry point
│   └── index.css         # All styling (glassmorphism, layout, responsive rules)
├── index.html            # Vite HTML entry
├── vite.config.js        # Vite config — IMPORTANT: set `base` before deploying
└── .github/workflows/deploy.yml   # Auto-deploys to GitHub Pages on push to main
```

## 1. Run locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Editing content

Don't touch the component files for text changes — everything (name, contact info, education, experience, projects, skills, achievements) lives in **`src/data/content.js`**. Update the values there and the whole site updates automatically.

## 3. Deploy to GitHub Pages

### Step A — set the base path

Open `vite.config.js` and set `base` to match your repository name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',   // e.g. '/portfolio/'
})
```

> If you're deploying to a **user/org page** (a repo literally named `yourusername.github.io`), set `base: '/'` instead.

### Step B — push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step C — enable GitHub Pages

This project already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`. You just need to turn it on once:

1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push a commit (or re-run the workflow from the **Actions** tab).
4. After it finishes, your site will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

### Alternative: manual deploy with `gh-pages`

If you'd rather not use GitHub Actions, you can deploy manually:

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to a `gh-pages` branch (via the `gh-pages` package already in `package.json`). Then in repo Settings → Pages, set the source branch to `gh-pages`.

## Notes

- All styling is plain CSS (no framework) in `src/index.css`, so it's easy to tweak colors via the CSS variables at the top of that file.
- The swipe/scroll navigation and fade transition are implemented in `src/App.jsx` — the transition duration there (`TRANSITION_MS`) must match the CSS transition duration in `index.css` for the animation to look right.
