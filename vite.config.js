import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT for GitHub Pages:
// Set `base` to "/<your-repo-name>/" (with leading and trailing slashes).
// Example: if your repo is github.com/saranraj14/portfolio, use base: '/portfolio/'
// If you're deploying to a "username.github.io" repo (user/org page), use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
