import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
/**
 * V5 is served under /v5/, but the site refers to shared files by root path (/img/..., /video/...), which production serves
 * from V1's root. In dev, answer those root-path requests from V1's public folder.
 */
function servePublicAtRoot(): Plugin {
  const root = path.resolve(import.meta.dirname, '..', 'public')
  const types: Record<string, string> = {
    '.svg': 'image/svg+xml',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.woff2': 'font/woff2',
    '.ico': 'image/x-icon',
  }
  return {
    name: 'serve-public-at-root',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? '').split('?')[0])
        if (url.startsWith('/v5/') || url.startsWith('/@') || url.startsWith('/src/') || url.startsWith('/node_modules/')) return next()
        const file = path.join(root, url)
        if (file.startsWith(root) && fs.existsSync(file) && fs.statSync(file).isFile()) {
          res.setHeader('Content-Type', types[path.extname(file).toLowerCase()] ?? 'application/octet-stream')
          fs.createReadStream(file).pipe(res)
          return
        }
        next()
      })
    },
  }
}

/**
 * Vite prefixes root-path links in index.html with the base ('v5' -> /v5/), but the icons live at the site root
 * (shared with V1). Point them back at the root so the favicon loads in dev and in the build.
 */
function rootIcons(): Plugin {
  return {
    name: 'root-icons',
    transformIndexHtml: {
      order: 'post',
      handler: (html) => html.replace(/(href=")\/v5\/(img\/favicon)/g, '$1/$2'),
    },
  }
}

export default defineConfig({
  // V5 is served beside V1, under /v5/.
  base: '/v5/',
  // V5 shares V1's public folder (images, videos, icons) instead of carrying a 56 MB copy; the deploy serves them from the site root.
  publicDir: false,
  plugins: [react(), tailwindcss(), servePublicAtRoot(), rootIcons()],
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
