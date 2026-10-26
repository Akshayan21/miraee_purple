// Runs V1, V2 and V3 together on ONE port, laid out the way the deployed site is:
//   /     -> V1
//   /v2/  -> V2
//   /v3/  -> V3
// Each version is its own Vite dev server in middleware mode (hot reload on), mounted behind a single HTTP server.
//   npm run dev                 (PORT=8080 npm run dev, or npm run dev -- --port 8080, to change the port; default 5173)
// V2 and V3 reuse V1's node_modules and public folder, so root-path files (/img, /video, ...) are answered by V1.
import http from 'node:http'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const argPort = process.argv.indexOf('--port')
const port = Number(process.env.PORT || (argPort > -1 ? process.argv[argPort + 1] : 0) || 5173)

// One origin, so the V1 | V2 | V3 toggle in each nav is a same-origin link (the per-version .env.development ports are for the separate dev:v2 / dev:v3 scripts).
process.env.VITE_V1_ORIGIN = ''
process.env.VITE_V2_ORIGIN = ''
process.env.VITE_V3_ORIGIN = ''

const { createServer } = await import('vite')
const server = http.createServer()

/** @param {string} dir  @param {string} name */
async function mount(dir, name) {
  const cwd = dir ? path.join(root, dir) : root
  return createServer({
    root: cwd,
    configFile: path.join(cwd, 'vite.config.ts'),
    // Each version keeps its own hot-reload socket on the shared server, told apart by path.
    server: { middlewareMode: true, hmr: { server, path: `/__hmr_${name}` } },
    appType: 'spa',
  })
}

const v1 = await mount('', 'v1')
const v2 = await mount('v2', 'v2')
const v3 = await mount('v3', 'v3')

const prefix = (url, p) => url === p || url.startsWith(`${p}/`) || url.startsWith(`${p}?`)

server.on('request', (req, res) => {
  const url = req.url ?? '/'
  if (url === '/v2' || url === '/v3') {
    res.writeHead(301, { Location: `${url}/` }).end()
    return
  }
  if (prefix(url, '/v2')) return v2.middlewares(req, res)
  if (prefix(url, '/v3')) return v3.middlewares(req, res)
  return v1.middlewares(req, res)
})

server.listen(port, () => {
  console.log(`\n  V1  http://localhost:${port}/\n  V2  http://localhost:${port}/v2/\n  V3  http://localhost:${port}/v3/\n`)
  console.log('  One port for all three. Use the V1 | V2 | V3 toggle in the nav.\n')
})

const close = async () => {
  await Promise.all([v1.close(), v2.close(), v3.close()])
  server.close()
  process.exit(0)
}
process.on('SIGINT', close)
process.on('SIGTERM', close)
