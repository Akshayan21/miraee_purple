import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
  // Static-site generation: every route is pre-rendered to its own HTML file at build time.
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    // Static hosts look for /404.html for unknown URLs; the prerendered /404 route is copied there.
    onFinished() {
      const dist = path.resolve(import.meta.dirname, 'dist')
      fs.copyFileSync(path.join(dist, '404', 'index.html'), path.join(dist, '404.html'))
    },
  },
})
