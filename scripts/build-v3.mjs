// Builds V3 (./v3) and publishes it inside V1's output as dist/v3, so ONE deploy serves both:
//   /     -> V1
//   /v2/  -> V2
//   /v3/  -> V3
// Run after V1's build (npm run build does this). V3 reuses V1's node_modules.
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const v3 = path.join(root, 'v3')
const run = (cmd, args, cwd) => {
  const r = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: true })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

console.log('\nBuilding V3 ...')
run('npx', ['tsc', '-b'], v3)
run('npx', ['vite-react-ssg', 'build'], v3)

const from = path.join(v3, 'dist')
const to = path.join(root, 'dist', 'v3')
if (!fs.existsSync(path.join(from, 'index.html'))) {
  console.error('V3 build produced no index.html')
  process.exit(1)
}
fs.rmSync(to, { recursive: true, force: true })
fs.cpSync(from, to, { recursive: true })
console.log(`V3 copied to ${path.relative(root, to)}`)
