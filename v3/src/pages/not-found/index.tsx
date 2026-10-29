import { Search } from 'lucide-react'
import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { PAGES } from '@/content/pages'
import shared from '@/pages/home/home-shared.module.css'
import { meta } from './meta'
import styles from './not-found.module.css'

type Group = 'Product' | 'Compare' | 'Company' | 'Resources'
type Entry = { path: string; label: string; group: Group; description: string; haystack: string }

/** Short names and groups for the finder; descriptions come from the real page content. */
const LABELS: Record<string, [string, Group]> = {
  '/': ['Home', 'Product'],
  '/how-it-works': ['How it works', 'Product'],
  '/spend-review': ['Spend review', 'Product'],
  '/finance': ['For finance teams', 'Product'],
  '/travel-managers': ['For travel managers', 'Product'],
  '/pricing': ['Pricing', 'Product'],
  '/security': ['Security', 'Product'],
  '/sign-up': ['Sign up', 'Product'],
  '/company': ['Company', 'Company'],
  '/talk-to-sales': ['Talk to sales', 'Company'],
  '/compare': ['Compare', 'Compare'],
  '/compare/navan': ['Miraee vs Navan', 'Compare'],
  '/compare/perk': ['Miraee vs Perk', 'Compare'],
  '/compare/ramp': ['Miraee vs Ramp', 'Compare'],
  '/compare/sap-concur': ['Miraee vs SAP Concur', 'Compare'],
  '/resources': ['Resources', 'Resources'],
  '/resources/business-travel-policy': ['Business travel policy', 'Resources'],
  '/resources/business-travel-policy-template': ['Travel policy template', 'Resources'],
  '/resources/corporate-travel-manager': ['Corporate travel manager', 'Resources'],
  '/resources/travel-and-expense-policy': ['Travel and expense policy', 'Resources'],
  '/resources/travel-expense-report': ['Travel expense report', 'Resources'],
  '/resources/travel-policy-compliance': ['Travel policy compliance', 'Resources'],
}

const HOME_DESCRIPTION =
  'Business travel and expense software: a travel assistant for every employee, with the controls finance needs.'

const ENTRIES: Entry[] = [
  { path: '/', description: HOME_DESCRIPTION },
  ...PAGES.filter((p) => LABELS[p.path]).map((p) => ({
    path: p.path,
    description: p.meta.description,
  })),
].map(({ path, description }) => {
  const [label, group] = LABELS[path]
  return {
    path,
    label,
    group,
    description,
    haystack: `${label} ${group} ${path.replace(/[/-]/g, ' ')} ${description}`.toLowerCase(),
  }
})

const POPULAR = ['/how-it-works', '/pricing', '/compare', '/resources']

const words = (s: string) =>
  s
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)

function levenshtein(a: string, b: string) {
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const row = [i]
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = row
  }
  return prev[b.length]
}

/** Closest real page to the mistyped path, or undefined when nothing is a convincing match. */
function guess(pathname: string): Entry | undefined {
  const typed = words(pathname)
  if (typed.length === 0) return undefined
  const slug = typed.join('-')
  let best: { entry: Entry; score: number } | undefined
  for (const entry of ENTRIES) {
    if (entry.path === '/') continue
    const target = words(entry.path)
    const targetSlug = target.join('-')
    const edit = 1 - levenshtein(slug, targetSlug) / Math.max(slug.length, targetSlug.length)
    const lastEdit =
      1 -
      levenshtein(typed[typed.length - 1], target[target.length - 1]) /
        Math.max(typed[typed.length - 1].length, target[target.length - 1].length)
    const overlap = typed.filter((t) => target.some((w) => w === t || w.startsWith(t))).length
    const score = Math.max(edit, lastEdit * 0.9, overlap / Math.max(typed.length, target.length))
    if (!best || score > best.score) best = { entry, score }
  }
  return best && best.score >= 0.5 ? best.entry : undefined
}

function search(query: string): Entry[] {
  const terms = words(query)
  if (terms.length === 0) return []
  return ENTRIES.map((entry) => {
    let score = 0
    for (const t of terms) {
      if (!entry.haystack.includes(t)) return { entry, score: 0 }
      score += entry.label.toLowerCase().includes(t) ? 3 : entry.path.includes(t) ? 2 : 1
    }
    return { entry, score }
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.entry)
}

/** Route: 404 (catch-all) */
export function Component() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [query, setQuery] = React.useState('')
  const [active, setActive] = React.useState(0)
  const listId = React.useId()
  const inputId = `${listId}-input`

  // Desktop only: on touch devices autofocus would open the keyboard and hide the page.
  React.useEffect(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [])

  const searching = query.trim().length > 0
  const tried = pathname === '/404' ? undefined : pathname
  const suggestion = React.useMemo(() => guess(pathname), [pathname])
  const results = React.useMemo(() => search(query), [query])
  const popular = POPULAR.map((p) => ENTRIES.find((e) => e.path === p)).filter(
    (e): e is Entry => !!e && e !== suggestion,
  )
  const initial = [...(suggestion ? [suggestion] : []), ...popular.slice(0, 4)]
  const options = searching ? results : initial
  const current = Math.min(active, options.length - 1)
  const optionId = (i: number) => `${listId}-o${i}`

  const go = (entry: Entry) => navigate(entry.path)

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (options.length === 0) return
      const step = e.key === 'ArrowDown' ? 1 : -1
      setActive((current + step + options.length) % options.length)
    } else if (e.key === 'Enter') {
      if (options[current]) {
        e.preventDefault()
        go(options[current])
      }
    } else if (e.key === 'Escape' && query) {
      e.preventDefault()
      setQuery('')
      setActive(0)
    }
  }

  const renderOption = (entry: Entry, i: number, tag?: string) => (
    <li
      key={entry.path}
      id={optionId(i)}
      role="option"
      aria-selected={i === current}
      data-active={i === current}
      className={styles.option}
      onMouseMove={() => i !== current && setActive(i)}
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => go(entry)}
    >
      <span className={styles.optionMain}>
        <span className={styles.optionLabel}>{entry.label}</span>
        <span className={styles.optionDesc}>{entry.description}</span>
      </span>
      <span className={styles.optionTag}>{tag ?? entry.group}</span>
    </li>
  )

  const showSuggestion = !searching && !!suggestion

  return (
    <>
      <Seo meta={meta} />
      <main id="main" className={`${shared.night} ${styles.page}`}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`${shared.wrap} ${styles.inner}`}>
          <p className={styles.numeral} aria-hidden="true">
            404
          </p>
          <h1 className={`${shared.display} ${styles.title}`}>
            That page isn't here. Let's find the one you meant.
          </h1>
          {tried ? (
            <p className={styles.tried}>
              You tried <span>{tried}</span>
            </p>
          ) : null}

          <div className={styles.finder}>
            <label htmlFor={inputId} className={styles.label}>
              Where were you headed?
            </label>
            <div className={styles.field}>
              <Search className={styles.icon} aria-hidden="true" strokeWidth={1.5} />
              <input
                ref={inputRef}
                id={inputId}
                className={styles.input}
                type="text"
                role="combobox"
                aria-expanded={options.length > 0}
                aria-controls={listId}
                aria-activedescendant={options.length > 0 ? optionId(current) : undefined}
                aria-autocomplete="list"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                enterKeyHint="go"
                placeholder="Search pricing, compare, security…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setActive(0)
                }}
                onKeyDown={onKeyDown}
              />
            </div>

            <div id={listId} role="listbox" aria-label="Pages" className={styles.results}>
              {searching ? (
                options.length > 0 ? (
                  <ul role="presentation" className={styles.list}>
                    {results.map((entry, i) => renderOption(entry, i))}
                  </ul>
                ) : null
              ) : (
                <>
                  {showSuggestion ? (
                    <div role="group" aria-labelledby={`${listId}-g1`}>
                      <p id={`${listId}-g1`} className={styles.groupLabel}>
                        Did you mean
                      </p>
                      <ul role="presentation" className={styles.list}>
                        {renderOption(suggestion, 0, 'Best match')}
                      </ul>
                    </div>
                  ) : null}
                  <div role="group" aria-labelledby={`${listId}-g2`}>
                    <p id={`${listId}-g2`} className={styles.groupLabel}>
                      Popular pages
                    </p>
                    <ul role="presentation" className={styles.list}>
                      {initial
                        .slice(showSuggestion ? 1 : 0)
                        .map((entry, i) => renderOption(entry, i + (showSuggestion ? 1 : 0)))}
                    </ul>
                  </div>
                </>
              )}
            </div>
            <p className={styles.empty} role="status">
              {searching && results.length === 0 ? `No pages match "${query.trim()}".` : ''}
            </p>
            <p className={styles.hint} aria-hidden="true">
              <kbd>↑</kbd> <kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to clear
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
Component.displayName = 'NotFoundPage'
