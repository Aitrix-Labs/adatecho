// Unused by the production Pages build (vite.config.js wins and builds `site/`).
// Kept for the optional React app under `src/` during local experiments.
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/adatecho/',
  plugins: [react()],
  server: { port: 5181, strictPort: true },
})
