// Serves ./dist on one port, the way the deployed site is laid out: V1 at /, V2 at /v2/.
//   npm run build && npm start        (PORT=8080 npm start to change the port; default 4000)
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

const dist = path.resolve(import.meta.dirname, '..', 'dist')
const port = Number(process.env.PORT || 4000)
if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('No build found. Run: npm run build')
  process.exit(1)
}
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.mp4': 'video/mp4',
  '.webm': 'video/webm', '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
}
function find(rel) {
  const base = path.join(dist, path.normalize(decodeURIComponent(rel)).replace(/^(\.\.[/\\])+/, ''))
  if (!base.startsWith(dist)) return null
  for (const c of [base, path.join(base, 'index.html'), `${base}.html`]) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c
  }
  return null
}
http.createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost')
  if (url.pathname === '/v2') return res.writeHead(301, { Location: '/v2/' + url.search }).end()
  let file = find(url.pathname)
  let status = 200
  if (!file) { file = path.join(dist, '404.html'); status = 404 }
  if (!fs.existsSync(file)) return res.writeHead(404).end('Not found')
  const size = fs.statSync(file).size
  const headers = { 'Content-Type': types[path.extname(file).toLowerCase()] ?? 'application/octet-stream', 'Accept-Ranges': 'bytes' }
  const range = req.headers.range?.match(/bytes=(\d*)-(\d*)/)
  if (range && status === 200) {
    const start = range[1] ? Number(range[1]) : 0
    const end = range[2] ? Math.min(Number(range[2]), size - 1) : size - 1
    res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 })
    return fs.createReadStream(file, { start, end }).pipe(res)
  }
  res.writeHead(status, { ...headers, 'Content-Length': size })
  if (req.method === 'HEAD') return res.end()
  fs.createReadStream(file).pipe(res)
}).listen(port, () => console.log(`\nV1  http://localhost:${port}/\nV2  http://localhost:${port}/v2/\nUse the V1 | V2 toggle in the nav.`))
