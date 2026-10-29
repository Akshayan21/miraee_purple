/** "Did you mean" for the 404 page: ranks the site's real pages by how close they are to the address that was not found. */

export type SitePage = { to: string; label: string }

/** The pages worth sending a lost visitor to, in the order shown when nothing matches. */
export const SITE_PAGES: SitePage[] = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/spend-review', label: 'Spend review' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/finance', label: 'For finance' },
  { to: '/travel-managers', label: 'Travel managers' },
  { to: '/travelers', label: 'Travelers' },
  { to: '/when-plans-change', label: 'When plans change' },
  { to: '/security', label: 'Security' },
  { to: '/resources', label: 'Resources' },
  { to: '/company', label: 'About Tabhi' },
  { to: '/talk-to-sales', label: 'Talk to sales' },
]

export type Ranked = {
  page: SitePage
  /** 0 to 100: how close the page is to what was typed. */
  score: number
  /** True only for the top row, and only when it is a genuinely close match. */
  best: boolean
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

function distance(a: string, b: string) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = cur
  }
  return prev[b.length]
}

/** The last path segment as typed, e.g. "/resources/pricng" gives "pricng". */
export function attemptedSlug(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? ''
}

/** The `count` pages closest to `pathname`. Falls back to the default order when nothing is close. */
export function rankPages(pathname: string, count = 4): Ranked[] {
  const seg = norm(attemptedSlug(pathname))
  const scored = SITE_PAGES.map((page, order) => {
    const slug = norm(page.to) || 'home'
    const label = norm(page.label)
    const d = seg ? Math.min(distance(seg, slug), distance(seg, label)) : 99
    const longest = Math.max(seg.length, slug.length, 1)
    const hit = seg.length >= 3 && (slug.startsWith(seg) || seg.startsWith(slug))
    const score = hit ? Math.max(82, Math.round(100 * (1 - d / longest))) : Math.max(0, Math.round(100 * (1 - d / longest)))
    return { page, score, d, order }
  })
  const close = seg ? scored.filter((s) => s.score >= 55).sort((a, b) => b.score - a.score || a.order - b.order) : []
  const rest = scored.filter((s) => !close.includes(s)).sort((a, b) => a.order - b.order)
  const out = [...close, ...rest].slice(0, count)
  return out.map((s, i) => ({ page: s.page, score: s.score, best: i === 0 && close.length > 0 }))
}
