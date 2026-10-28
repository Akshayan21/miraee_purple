// Builds V4 (./v4) and publishes it inside V1's output as dist/v4, so ONE deploy serves both:
//   /     -> V1
//   /v2/  -> V2
//   /v4/  -> V4
// Run after V1's build (npm run build does this). V4 reuses V1's node_modules.
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const v4 = path.join(root, 'v4')
const run = (cmd, args, cwd) => {
  const r = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: true })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

console.log('\nBuilding V4 ...')
run('npx', ['tsc', '-b'], v4)
run('npx', ['vite-react-ssg', 'build'], v4)

const from = path.join(v4, 'dist')
const to = path.join(root, 'dist', 'v4')
if (!fs.existsSync(path.join(from, 'index.html'))) {
  console.error('V4 build produced no index.html')
  process.exit(1)
}
fs.rmSync(to, { recursive: true, force: true })
fs.cpSync(from, to, { recursive: true })
console.log(`V4 copied to ${path.relative(root, to)}`)
