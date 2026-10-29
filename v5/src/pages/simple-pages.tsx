import { PhotoTile } from '@/components/glass/page-photo'
import * as React from 'react'
import { ArrowRight, House, ReceiptText, Route, Tag } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { SignupButton } from '@/components/glass/ui'
import { TextField } from '@/components/forms/fields'
import { Button } from '@/components/ui/button'
import { FormTile } from '@/pages/extras'
import { FORM_PAGES, LEGAL } from '@/content/site'
import { gsap } from '@/lib/gsap'
import { useMotion } from '@/lib/motion'

const F = 'max-w-none'
const ROBOTS = 'noindex, nofollow'

/** Hero shell for the form pages: text tile, form tile, and a small animated tile. */
function FormHero({
  title,
  sub,
  eyebrow,
  form,
  art,
}: {
  title: string
  sub: string
  eyebrow: string
  form: React.ReactNode
  art?: React.ReactNode
}) {
  return (
    <section className="sec sec--hero" aria-labelledby="page-h">
      <div className="wrap">
        <div className="bento ihero">
          <div className="tile s5 ihero-text" data-reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="disp h-xl ih1" id="page-h">
              {title}
            </h1>
            <p className="lead">{sub}</p>
            {art}
          </div>
          <div className="s7">{form}</div>
        </div>
      </div>
    </section>
  )
}

export function TalkPage() {
  const f = FORM_PAGES.talk
  return (
    <>
      <Seo meta={{ title: 'Talk to sales | Miraee', description: f.sub, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <FormHero
          eyebrow="Talk to sales"
          title={f.h1}
          sub={f.sub}
          art={<PhotoTile path="/talk-to-sales" />}
          form={
            <FormTile action="/talk-to-sales" title="Book a call" button={f.button} cols={2}>
              <TextField
                fieldClassName={F}
                id="ts-name"
                name="name"
                label="Name"
                autoComplete="name"
                required
              />
              <TextField
                fieldClassName={F}
                id="ts-email"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
              />
              <TextField
                fieldClassName={F}
                id="ts-co"
                name="company"
                label="Company"
                autoComplete="organization"
                required
              />
              <TextField
                fieldClassName={F}
                id="ts-size"
                name="size"
                label="Headcount"
                type="number"
                inputMode="numeric"
                min={1}
                required
              />
              <TextField
                fieldClassName={`${F} gform-wide`}
                id="ts-msg"
                name="message"
                label="What you want to discuss"
                multiline
                rows={4}
              />
            </FormTile>
          }
        />
      </main>
    </>
  )
}

export function SignUpPage() {
  const f = FORM_PAGES.signup
  return (
    <>
      <Seo meta={{ title: 'Sign up free | Miraee', description: f.sub, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <FormHero
          eyebrow="Sign up free"
          title={f.h1}
          sub={f.sub}
          art={<PhotoTile path="/sign-up" />}
          form={
            <FormTile action="/sign-up" title="Create your account" button={f.button} cols={2}>
              <TextField
                fieldClassName={F}
                id="su-name"
                name="name"
                label="Name"
                autoComplete="name"
                required
              />
              <TextField
                fieldClassName={F}
                id="su-pemail"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
              />
              <TextField
                fieldClassName={F}
                id="su-pco"
                name="company"
                label="Company"
                autoComplete="organization"
                required
              />
              <TextField
                fieldClassName={F}
                id="su-psize"
                name="size"
                label="Headcount"
                type="number"
                inputMode="numeric"
                min={1}
                required
              />
            </FormTile>
          }
        />
      </main>
    </>
  )
}

export function LogInPage() {
  const f = FORM_PAGES.login
  const [sent, setSent] = React.useState(false)
  return (
    <>
      <Seo meta={{ title: 'Log in | Miraee', description: f.sub, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <FormHero
          eyebrow="Log in"
          title={f.h1}
          sub={f.sub}
          art={<PhotoTile path="/log-in" />}
          form={
            <div className="tile form-tile" data-reveal>
              <h2 className="disp h-md">Welcome back</h2>
              <form
                className="gform gform--1"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <Button
                  type="button"
                  variant="secondary"
                  className="gform-btn"
                  onClick={() => setSent(true)}
                >
                  Continue with Google
                </Button>
                <TextField
                  fieldClassName={F}
                  id="li-email"
                  name="email"
                  label="Work email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <div className="gform-submit">
                  <Button type="submit" className="gform-btn">
                    <span className="mr-btn__u">Continue</span>
                  </Button>
                </div>
                {sent ? (
                  <p className="small" role="status">
                    Log in is not connected in this preview.
                  </p>
                ) : null}
              </form>
              <p className="small">
                New to Miraee? <Link to="/sign-up">Sign up free</Link>
              </p>
            </div>
          }
        />
      </main>
    </>
  )
}

function LegalPage({ title, body }: { title: string; body: string }) {
  return (
    <>
      <Seo meta={{ title: `${title} | Miraee`, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <section className="sec sec--hero" aria-labelledby="page-h">
          <div className="wrap">
            <div className="tile legal" data-reveal>
              <p className="eyebrow">Legal</p>
              <h1 className="disp h-xl ih1" id="page-h">
                {title}
              </h1>
              <p className="lead">{body}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export const PrivacyPage = () => <LegalPage title={LEGAL.privacy.title} body={LEGAL.privacy.body} />
export const TermsPage = () => <LegalPage title={LEGAL.terms.title} body={LEGAL.terms.body} />

/** Real, linkable routes the 404 can suggest. Keep in step with routes/index.tsx. */
const KNOWN_ROUTES: { path: string; label: string }[] = [
  { path: '/', label: 'Home' },
  { path: '/how-it-works', label: 'How it works' },
  { path: '/when-plans-change', label: 'When plans change' },
  { path: '/finance', label: 'For finance' },
  { path: '/travel-managers', label: 'For travel managers' },
  { path: '/travelers', label: 'For travelers' },
  { path: '/security', label: 'Security' },
  { path: '/spend-review', label: 'Spend review' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/resources', label: 'Resources' },
  { path: '/company', label: 'Company' },
  { path: '/talk-to-sales', label: 'Talk to sales' },
  { path: '/sign-up', label: 'Sign up' },
  { path: '/log-in', label: 'Log in' },
]

const FALLBACK = KNOWN_ROUTES.filter((r) =>
  ['/how-it-works', '/pricing', '/security'].includes(r.path),
)

const DESTINATIONS = [
  { to: '/', label: 'Home', text: 'Start again from the top.', Icon: House },
  { to: '/how-it-works', label: 'How it works', text: 'Rules, booking and month-end.', Icon: Route },
  {
    to: '/spend-review',
    label: 'Spend review',
    text: 'See where your travel money goes.',
    Icon: ReceiptText,
  },
  { to: '/pricing', label: 'Pricing', text: 'Free to start, simple after that.', Icon: Tag },
]

function editDistance(a: string, b: string) {
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

/** Up to two close matches for a mistyped path; empty when nothing is near. */
function suggest(pathname: string) {
  const clean = pathname
    .toLowerCase()
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/\/+$/, '')
  const seg = clean.split('/').filter(Boolean).pop() ?? ''
  if (seg.length < 2) return []
  return KNOWN_ROUTES.filter((r) => r.path !== '/')
    .map((r) => {
      const target = r.path.split('/').filter(Boolean).pop() ?? ''
      const near = target.includes(seg) || seg.includes(target) ? 0 : editDistance(seg, target)
      return { ...r, score: near / Math.max(seg.length, target.length) }
    })
    .filter((r) => r.score <= 0.4)
    .sort((a, b) => a.score - b.score)
    .slice(0, 2)
}

export function NotFoundPage() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const attempted = pathname === '/404' ? '' : pathname
  const matches = React.useMemo(() => suggest(attempted), [attempted])

  // Cursor tilt on the three digits (desktop, motion allowed). rAF-throttled, no React state.
  useMotion(ref, ({ desktop }) => {
    if (!desktop) return
    const hero = ref.current?.querySelector<HTMLElement>('.nf-hero')
    const digits = gsap.utils.toArray<HTMLElement>('.nf-d')
    if (!hero || !digits.length) return
    let raf = 0
    let nx = 0
    let ny = 0
    const apply = () => {
      raf = 0
      digits.forEach((d, i) => {
        const depth = 1 + i * 0.35
        gsap.to(d, {
          rotationY: nx * 14 * depth,
          rotationX: -ny * 12 * depth,
          x: nx * 10 * depth,
          y: ny * 8 * depth,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      })
    }
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect()
      nx = ((e.clientX - r.left) / r.width - 0.5) * 2
      ny = ((e.clientY - r.top) / r.height - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const leave = () => {
      nx = 0
      ny = 0
      if (!raf) raf = requestAnimationFrame(apply)
    }
    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', leave)
    }
  })

  return (
    <>
      <Seo meta={{ title: 'Page not found | Miraee', robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <section className="sec sec--hero" aria-labelledby="page-h">
          <div className="wrap">
            <div className="bento nf-bento" ref={ref}>
              <div className="tile tile--plum nf-hero" data-reveal>
                <p className="nf-n" aria-hidden="true">
                  <span className="nf-d">4</span>
                  <span className="nf-d">0</span>
                  <span className="nf-d">4</span>
                </p>
                <h1 className="disp h-lg" id="page-h">
                  This page took a different trip.
                </h1>
                <p className="lead">The link may be old or mistyped. Pick a way back below.</p>
              </div>

              <div className="tile nf-mean" data-reveal>
                <p className="eyebrow">{matches.length ? 'Did you mean' : 'Try one of these'}</p>
                {attempted ? (
                  <p className="nf-path">
                    You asked for <code>{attempted}</code>
                  </p>
                ) : null}
                <ul className="nf-sugg">
                  {(matches.length ? matches : FALLBACK).map((r) => (
                    <li key={r.path}>
                      <Link to={r.path}>
                        {r.label}
                        <span>{r.path}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {DESTINATIONS.map(({ to, label, text, Icon }) => (
                <Link className="tile tile--lift nf-dest" to={to} key={to} data-reveal>
                  <span className="nf-ico" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="nf-dt">{label}</span>
                  <span className="nf-dx">{text}</span>
                  <ArrowRight className="nf-arrow" size={20} strokeWidth={2} aria-hidden="true" />
                </Link>
              ))}

              <div className="tile tile--ring nf-cta" data-reveal>
                <p className="nf-cta-t">Not lost, just early?</p>
                <SignupButton variant="pri" />
              </div>

              <div className="tile tile--flat nf-status" data-reveal>
                <span className="nf-dot" aria-hidden="true" />
                <p>Status: page not found &middot; everything else is running</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
