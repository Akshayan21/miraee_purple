import * as React from 'react'
import { Link } from 'react-router-dom'

import { DialogLink, type FormDialogId } from '@/components/forms/form-dialogs-context'
import { BUTTONS, HOME } from '@/content/site'
import { cn } from '@/lib/utils'
import { magnetic, useMotion } from '@/lib/motion'
import { gsap } from '@/lib/gsap'

/* ------------------------------ Orbs ------------------------------ */
type OrbSpec = {
  c: 'plum' | 'pink' | 'lav' | 'tang' | 'white'
  x: string
  y: string
  s: string
  d: number
}
const ORB_SETS: Record<string, OrbSpec[]> = {
  home: [
    { c: 'pink', x: '-8%', y: '2%', s: 'clamp(300px,42vw,640px)', d: -90 },
    { c: 'lav', x: '66%', y: '-1%', s: 'clamp(280px,40vw,620px)', d: 120 },
    { c: 'plum', x: '78%', y: '9%', s: 'clamp(160px,20vw,300px)', d: -60 },
    { c: 'tang', x: '38%', y: '17%', s: 'clamp(140px,16vw,260px)', d: 90 },
    { c: 'pink', x: '70%', y: '34%', s: 'clamp(260px,36vw,520px)', d: -110 },
    { c: 'lav', x: '-10%', y: '48%', s: 'clamp(260px,38vw,560px)', d: 100 },
    { c: 'tang', x: '82%', y: '62%', s: 'clamp(140px,18vw,280px)', d: -70 },
    { c: 'pink', x: '10%', y: '78%', s: 'clamp(260px,34vw,500px)', d: 80 },
    { c: 'lav', x: '62%', y: '90%', s: 'clamp(280px,38vw,560px)', d: -90 },
  ],
  inner: [
    { c: 'pink', x: '-8%', y: '0%', s: 'clamp(280px,38vw,560px)', d: -80 },
    { c: 'lav', x: '70%', y: '-2%', s: 'clamp(260px,36vw,540px)', d: 100 },
    { c: 'tang', x: '55%', y: '14%', s: 'clamp(120px,14vw,220px)', d: -60 },
    { c: 'pink', x: '74%', y: '48%', s: 'clamp(240px,32vw,480px)', d: -90 },
    { c: 'lav', x: '-8%', y: '66%', s: 'clamp(240px,34vw,500px)', d: 80 },
    { c: 'plum', x: '20%', y: '92%', s: 'clamp(160px,22vw,320px)', d: -50 },
  ],
}

/** Soft colour orbs behind the page, drifting at different speeds as the page scrolls. */
export function Orbs({ set = 'inner' }: { set?: 'home' | 'inner' }) {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, () => {
    const host = ref.current?.parentElement
    if (!host) return
    ref.current!.querySelectorAll<HTMLElement>('.orb').forEach((orb, i) => {
      gsap.fromTo(
        orb,
        { y: 0 },
        {
          y: Number(orb.dataset.d),
          ease: 'none',
          scrollTrigger: { trigger: host, start: 'top top', end: 'bottom bottom', scrub: 0.8 },
        },
      )
      gsap.to(orb, {
        x: i % 2 ? 40 : -40,
        duration: 7 + i,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    })
  }, [set])
  return (
    <div className="orbs" ref={ref} aria-hidden="true">
      {ORB_SETS[set].map((o, i) => (
        <span
          key={i}
          className={`orb orb--${o.c}`}
          data-d={o.d}
          style={{ left: o.x, top: o.y, width: o.s, height: o.s }}
        />
      ))}
    </div>
  )
}

/* ------------------------------ Buttons ------------------------------ */
type GButtonProps = {
  to: string
  variant?: 'pri' | 'sec' | 'link'
  dialog?: FormDialogId
  children: React.ReactNode
  className?: string
  /** Pull towards the cursor on desktop. */
  pull?: boolean
}

export function GButton({
  to,
  variant = 'pri',
  dialog,
  children,
  className,
  pull = true,
}: GButtonProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el || !pull) return
    const mm = gsap.matchMedia()
    mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () =>
      magnetic(el),
    )
    return () => mm.revert()
  }, [pull])
  const cls = cn('gb', `gb--${variant}`, className)
  return (
    <span className="gb-wrap" ref={ref}>
      {dialog ? (
        <DialogLink to={to} dialog={dialog} className={cls}>
          {children}
        </DialogLink>
      ) : (
        <Link to={to} className={cls}>
          {children}
        </Link>
      )}
    </span>
  )
}

export const SignupButton = ({
  variant = 'pri',
  className,
}: {
  variant?: 'pri' | 'sec'
  className?: string
}) => (
  <GButton to="/sign-up" dialog="signup" variant={variant} className={className}>
    {BUTTONS.signup}
  </GButton>
)
export const ReviewButton = ({
  variant = 'sec',
  className,
}: {
  variant?: 'pri' | 'sec'
  className?: string
}) => (
  <GButton to="/spend-review" dialog="review" variant={variant} className={className}>
    {BUTTONS.review}
  </GButton>
)

/* ------------------------------ Footnotes ------------------------------ */
/** Superscript footnote reference(s), linking to the footnotes list. `n` is 1-based. */
export function Fn(_props: { n: number | number[] }) {
  return null
}

export function FootnoteList(_props: { only?: number[]; className?: string }) {
  return null
}

/* ------------------------------ Section head ------------------------------ */
export function SectionHead({
  eyebrow,
  title,
  sub,
  id,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  sub?: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <header className={cn('sec-head', className)} data-reveal>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="disp h-lg" id={id}>
        {title}
      </h2>
      {sub ? <p className="lead">{sub}</p> : null}
    </header>
  )
}

/* ------------------------------ Closing CTA ------------------------------ */
export function ClosingCta(_props: { footnotes?: boolean; sample?: boolean }) {
  return (
    <section className="sec" aria-labelledby="closing-h">
      <div className="wrap">
        <div className="bento">
          <div className={'tile tile--plum cta-tile s12'} data-reveal>
            <span className="cta-orb cta-orb--a" aria-hidden="true" />
            <span className="cta-orb cta-orb--b" aria-hidden="true" />
            <p className="eyebrow">Miraee</p>
            <h2 className="disp h-lg" id="closing-h">
              {HOME.closing.headline}
            </h2>
            <div className="row" style={{ marginTop: 28 }}>
              <SignupButton variant="pri" />
              <ReviewButton variant="sec" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
