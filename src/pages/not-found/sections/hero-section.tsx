import type { CSSProperties } from 'react'
import { Section, Container } from '@/components/layout/content-layout'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type Destination = { code: string; to: string; label: string; note: string }

/** Real routes (see src/routes/index.tsx) the visitor can be rebooked to. */
const DESTINATIONS: Destination[] = [
  { code: 'HOM', to: '/', label: 'Home', note: 'Start again from the front door.' },
  {
    code: 'HOW',
    to: '/how-it-works',
    label: 'How it works',
    note: 'Book, approve and reconcile in one flow.',
  },
  {
    code: 'SPR',
    to: '/spend-review',
    label: 'Spend review',
    note: 'See where travel spend leaks, line by line.',
  },
  { code: 'CMP', to: '/compare', label: 'Compare', note: 'Miraee set beside the alternatives.' },
  {
    code: 'RES',
    to: '/resources',
    label: 'Resources',
    note: 'Policies, templates and guides for travel teams.',
  },
]

/** Every real path, for the "Did you mean" suggestion. */
const KNOWN_PATHS = [
  '/how-it-works',
  '/spend-review',
  '/finance',
  '/travel-managers',
  '/pricing',
  '/security',
  '/company',
  '/talk-to-sales',
  '/sign-up',
  '/compare',
  '/compare/navan',
  '/compare/perk',
  '/compare/ramp',
  '/compare/sap-concur',
  '/resources',
  '/resources/business-travel-policy',
  '/resources/business-travel-policy-template',
  '/resources/corporate-travel-manager',
  '/resources/travel-and-expense-policy',
  '/resources/travel-expense-report',
  '/resources/travel-policy-compliance',
]

function distance(a: string, b: string) {
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j)
  for (let i = 1; i <= a.length; i++) {
    const row = [i]
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = row
  }
  return prev[b.length]
}

/** Closest real path to `pathname`, or null when nothing is close. Pure, so safe during SSG. */
function suggest(pathname: string): string | null {
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
  if (path === '/' || path === '/404') return null
  let best: string | null = null
  let bestScore = Infinity
  for (const known of KNOWN_PATHS) {
    const limit = Math.max(2, Math.floor(known.length * 0.3))
    const d = distance(path, known)
    const prefix = path.length >= 4 && (known.startsWith(path) || path.startsWith(known))
    if ((d <= limit || prefix) && d < bestScore) {
      best = known
      bestScore = d
    }
  }
  return best
}

export function HeroSection() {
  const { pathname } = useLocation()
  const match = suggest(pathname)

  return (
    <Section className="mr-plum nf" aria-labelledby="hero-h">
      <svg
        className="mr-line mr-line--draw nf__route"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
        style={{ '--len': 4200 } as CSSProperties}
      >
        <path d="M-40 470 C 120 470 170 420 230 300 C 290 180 330 120 380 120 C 440 120 470 330 520 450 C 560 540 640 560 690 470 C 740 380 700 250 620 270 C 540 290 590 450 700 470 C 840 495 900 360 960 250 C 1020 140 1080 130 1130 240 C 1180 350 1230 470 1330 470 C 1400 470 1440 440 1500 400" />
      </svg>
      <Container className="mr-container nf__inner">
        <p className="mr-eyebrow">Error 404</p>
        <p className="mr-stat nf__figure" aria-hidden="true">
          404
        </p>
        <h1 className="mr-display nf__title" id="hero-h">
          This trip isn't on the itinerary.
        </h1>
        <p className="mr-lead nf__lead">
          The page you asked for has moved or never existed. Pick a destination below and we will
          rebook you.
        </p>
        {match && (
          <p className="nf__suggest">
            Did you mean{' '}
            <Link to={match} className="nf__suggest-link">
              {match}
            </Link>
            ?
          </p>
        )}
        <div className="nf__cta">
          <Button asChild size="lg">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
        <nav aria-label="Rebook to a page">
          <ul className="nf__ledger">
            {DESTINATIONS.map((d) => (
              <li key={d.to}>
                <Link to={d.to} className="nf__row">
                  <span className="nf__name">
                    <span className="nf__label">{d.label}</span>
                    <span className="nf__note">{d.note}</span>
                  </span>
                  <span className="nf__dest">
                    <span className="nf__code">{d.code}</span>
                    <span className="nf__path">{d.to}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Section>
  )
}
