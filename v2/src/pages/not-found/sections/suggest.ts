export interface ConnectingRoute {
  to: string
  label: string
}

/** Real routes a lost visitor is most likely to want. */
export const CONNECTIONS: ConnectingRoute[] = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/compare', label: 'Compare' },
  { to: '/resources', label: 'Resources' },
]

const SUGGESTIBLE: ConnectingRoute[] = [
  ...CONNECTIONS,
  { to: '/pricing', label: 'Pricing' },
  { to: '/security', label: 'Security' },
  { to: '/company', label: 'Company' },
  { to: '/talk-to-sales', label: 'Talk to sales' },
  { to: '/spend-review', label: 'Spend review' },
  { to: '/finance', label: 'For finance' },
  { to: '/travel-managers', label: 'For travel managers' },
]

function distance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, j) => j)
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = tmp
    }
  }
  return row[b.length]
}

/** Closest real route to a mistyped path, or null when nothing is close. */
export function suggestRoute(pathname: string): ConnectingRoute | null {
  const typed = pathname.toLowerCase().replace(/^\/+|\/+$/g, '')
  if (!typed) return null
  let best: ConnectingRoute | null = null
  let bestScore = Infinity
  for (const route of SUGGESTIBLE) {
    const target = route.to.slice(1)
    if (!target) continue
    const d = distance(typed, target)
    const score = typed.startsWith(target) || target.startsWith(typed) ? Math.min(d, 1) : d
    if (score < bestScore) {
      bestScore = score
      best = route
    }
  }
  return best && bestScore <= Math.max(2, Math.floor(typed.length * 0.3)) ? best : null
}
