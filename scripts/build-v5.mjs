// Builds V5 (./v5) and publishes it inside V1's output as dist/v5, so ONE deploy serves both:
//   /     -> V1
//   /v2/  -> V2
//   /v5/  -> V5
// Run after V1's build (npm run build does this). V5 reuses V1's node_modules.
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const v5 = path.join(root, 'v5')
const run = (cmd, args, cwd) => {
  const r = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: true })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

console.log('\nBuilding V5 ...')
run('npx', ['tsc', '-b'], v5)
run('npx', ['vite-react-ssg', 'build'], v5)

const from = path.join(v5, 'dist')
const to = path.join(root, 'dist', 'v5')
if (!fs.existsSync(path.join(from, 'index.html'))) {
  console.error('V5 build produced no index.html')
  process.exit(1)
}
fs.rmSync(to, { recursive: true, force: true })
fs.cpSync(from, to, { recursive: true })
console.log(`V5 copied to ${path.relative(root, to)}`)
