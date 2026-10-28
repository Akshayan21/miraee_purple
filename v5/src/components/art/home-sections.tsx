import * as React from 'react'
import { Link } from 'react-router-dom'

import { GrowthChart, NetworkDots, RingStat, StatTile } from '@/components/art/charts'
import { IconDoc, IconGoogleG, IconLock } from '@/components/art/scenes-parts'
import { GButton, SectionHead } from '@/components/glass/ui'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HOME } from '@/content/site'
import { gsap } from '@/lib/gsap'
import { tiltOnHover, useMotion, whenVisible } from '@/lib/motion'

/* ------------------------------ 2. Group proof strip ------------------------------ */
export function ProofStrip() {
  const p = HOME.proof
  return (
    <section className="sec sec--tight" aria-labelledby="proof-h">
      <div className="wrap">
        <div className="bento">
          <div className="tile tile--plum s12 proof-line" data-reveal>
            <NetworkDots />
            <h2 className="disp h-md" id="proof-h">
              {p.line}
            </h2>
          </div>
          {p.stats.map((s, i) => (
            <StatTile
              key={s.label}
              value={s.value}
              label={s.label}
              note={s.note || undefined}
              tone={i === 2 ? 'tint' : 'glass'}
              className="s4 m1x"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ 4. Spending you can see ------------------------------ */
export function SpendingSection() {
  const s = HOME.spending
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const pts = gsap.utils.toArray<HTMLElement>('.sp-pt', root)
    gsap.set(pts, { autoAlpha: 0, y: 40, scale: 0.7 })
    const t = whenVisible(
      pts[0],
      () =>
        gsap.to(pts, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.14,
          ease: 'back.out(1.8)',
        }),
      'top 88%',
    )
    return () => t.kill()
  })
  return (
    <section className="sec" aria-labelledby="spend-h" ref={ref}>
      <div className="wrap">
        <div className="bento">
          <div className="tile s5 sp-text" data-reveal>
            <p className="eyebrow">Spending you can see</p>
            <h2 className="disp h-lg" id="spend-h">
              {s.headline}
            </h2>
            <p className="lead">{s.body}</p>
            <Link to="/finance" className="gb gb--link">
              {s.link}
            </Link>
          </div>
          <div className="tile tile--tint s4 sp-chart" data-reveal>
            <p className="pc-title">One view, every booking</p>
            <GrowthChart />
          </div>
          <div className="tile tile--plum s3 sp-ring" data-reveal>
            <RingStat value={12} text={s.stat.text} note={s.stat.note} />
          </div>
          {s.points.map((pt, i) => (
            <div className="tile tile--lift s3 sp-pt m1" key={pt}>
              <span className="sp-n fig">{i + 1}</span>
              <p className="p sp-ptx">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ 8. Roles ------------------------------ */
const ROLE_IMG = [
  {
    src: '/img/px37409441-finance-leader.webp',
    w: 977,
    h: 1100,
    alt: 'A finance lead smiling in a checked jacket.',
  },
  { src: '/img/px5918389-controller.webp', w: 831, h: 1100, alt: 'A controller with arms folded.' },
  {
    src: '/img/px36845948-traveler-suit.webp',
    w: 856,
    h: 1100,
    alt: 'A traveler in a suit with a bag.',
  },
]

export function RolesSection() {
  const r = HOME.roles
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root, desktop }) => {
    if (!desktop) return
    const offs = gsap.utils
      .toArray<HTMLElement>('.role', root)
      .map((el) => tiltOnHover(el, 7, el.querySelector<HTMLElement>('.role-in')!))
    return () => offs.forEach((o) => o())
  })
  return (
    <section className="sec" aria-labelledby="roles-h" ref={ref}>
      <div className="wrap">
        <SectionHead id="roles-h" eyebrow="Who it is for" title={r.headline} />
        <div className="bento">
          {r.cards.map((c, i) => (
            <div className="s4 role" key={c.title} data-reveal>
              <div className="role-in tile tile--lift">
                <span
                  className="cut-orb cut-orb--r"
                  aria-hidden="true"
                  style={{ ['--hue' as string]: i }}
                />
                <h3 className="disp h-md">{c.title}</h3>
                <p className="p">{c.body}</p>
                <Link to={c.to} className="gb gb--link">
                  {c.link}
                </Link>
                <img
                  className="role-img"
                  src={ROLE_IMG[i].src}
                  width={ROLE_IMG[i].w}
                  height={ROLE_IMG[i].h}
                  alt={ROLE_IMG[i].alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ 9. Security ------------------------------ */
export function SecuritySection() {
  const s = HOME.security
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const lines = gsap.utils.toArray<HTMLElement>('.log i', root)
    gsap.set(lines, { scaleX: 0, transformOrigin: '0 50%' })
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6, paused: true })
    tl.to(lines, { scaleX: 1, duration: 0.7, stagger: 0.25, ease: 'power3.out' }).to(
      lines,
      { scaleX: 0, transformOrigin: '100% 50%', duration: 0.4, stagger: 0.08 },
      '+=1.4',
    )
    const t = whenVisible(root, () => tl.play())
    gsap.fromTo(
      '.sec-lock',
      { y: 0 },
      { y: -6, duration: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut' },
    )
    return () => {
      t.kill()
      tl.kill()
    }
  })
  return (
    <section className="sec" aria-labelledby="sec-h" ref={ref}>
      <div className="wrap">
        <div className="bento">
          <div className="tile tile--plum s6 sec-main" data-reveal>
            <span className="sec-lock" aria-hidden="true">
              <IconLock size={30} />
            </span>
            <p className="eyebrow">Security</p>
            <h2 className="disp h-lg" id="sec-h">
              {s.headline}
            </h2>
            <p className="p">{s.body}</p>
            <div className="row">
              <GButton to="/security" variant="pri">
                {s.button}
              </GButton>
              <Link to="/talk-to-sales" className="gb gb--link">
                {s.link}
              </Link>
            </div>
          </div>
          <div className="tile tile--lift s3 sec-mini m1" data-reveal>
            <span className="sec-ico">
              <IconGoogleG />
            </span>
            <h3 className="h-sm disp">Sign-in</h3>
            <p className="small">Google sign-in today.</p>
          </div>
          <div className="tile tile--lift s3 sec-mini m1" data-reveal>
            <span className="sec-ico">
              <IconDoc />
            </span>
            <h3 className="h-sm disp">The security pack</h3>
            <p className="small">
              A completed security questionnaire, a data processing agreement and a penetration test
              summary.
            </p>
          </div>
          <div className="tile s3 sec-log m1" data-reveal>
            <h3 className="h-sm disp">A full record</h3>
            <div className="log" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <p className="small">Every booking, approval and change, with who made it and when.</p>
          </div>
          <div className="tile tile--tint s3 sec-road m1" data-reveal>
            <h3 className="h-sm disp">On our roadmap</h3>
            <p className="small">Single sign-on and user provisioning, with dates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ 10. FAQ ------------------------------ */
export function FaqSection({
  items = HOME.faq,
  title = 'Questions, answered.',
  id = 'faq-h',
}: {
  items?: { q: string; a: string }[]
  title?: string
  id?: string
}) {
  return (
    <section className="sec" aria-labelledby={id}>
      <div className="wrap">
        <div className="bento">
          <div className="s4 faq-side" data-reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="disp h-lg" id={id}>
              {title}
            </h2>
          </div>
          <div className="s8 faq-list" data-reveal>
            <Accordion type="single" collapsible className="faq">
              {items.map((f, i) => (
                <AccordionItem value={`q${i}`} key={f.q} className="faq-item tile tile--flat">
                  <AccordionTrigger className="faq-q">{f.q}</AccordionTrigger>
                  <AccordionContent className="faq-a">
                    <p>{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
