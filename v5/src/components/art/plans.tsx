import * as React from 'react'
import { Link } from 'react-router-dom'

import { RingBell } from '@/components/art/scenes-parts'
import { Fn } from '@/components/glass/ui'
import { HOME } from '@/content/site'
import { Flip, gsap } from '@/lib/gsap'
import { countUp, useMotion, whenVisible } from '@/lib/motion'

export const REBOOK = [
  { t: '1:40 PM', d: 'Nonstop, 2h 05m', p: '$389', diff: 'No fare difference' },
  { t: '12:50 PM', d: 'Nonstop, 2h 10m', p: '$402', diff: '+$13 fare difference' },
  { t: '2:25 PM', d: 'Nonstop, 2h 05m', p: '$431', diff: '+$42 fare difference' },
]

/** The alert card, for the traveler tile. */
export function AlertCard({ className = '' }: { className?: string }) {
  return (
    <div className={`alert ${className}`} data-alert>
      <span className="alert-ico" aria-hidden="true">
        <RingBell />
      </span>
      <div>
        <b>Flight delayed</b>
        <span>
          Your 11:35 AM Austin to Denver now leaves at 3:05 PM. New options inside policy are ready.
        </span>
      </div>
    </div>
  )
}

/** New flight cards that re-sort into place (Flip) after the alert. */
export function RebookCards({ className = '' }: { className?: string }) {
  const ref = React.useRef<HTMLUListElement>(null)
  useMotion(ref, ({ root }) => {
    const list = root as HTMLUListElement
    const cards = Array.from(list.children) as HTMLElement[]
    const shuffled = [cards[2], cards[0], cards[1]]
    const sorted = [...cards]
    const place = (order: HTMLElement[]) => order.forEach((c) => list.appendChild(c))
    place(shuffled)
    gsap.set(cards, { autoAlpha: 0, y: 30 })
    let tl: gsap.core.Timeline | undefined
    const reorder = (order: HTMLElement[], best: boolean) => {
      const state = Flip.getState(cards)
      place(order)
      Flip.from(state, { duration: 0.9, ease: 'power3.inOut', stagger: 0.05 })
      cards.forEach((c) => c.classList.remove('is-best'))
      if (best) sorted[0].classList.add('is-best')
    }
    const run = () => {
      gsap.to(cards, { autoAlpha: 1, y: 0, stagger: 0.14, duration: 0.7, ease: 'power3.out' })
      tl = gsap.timeline({ repeat: -1, delay: 1.6 })
      tl.add(() => reorder(sorted, true))
        .add(() => reorder(shuffled, false), '+=3.2')
        .add(() => undefined, '+=1.8')
    }
    const t = whenVisible(root, run, 'top 85%')
    return () => {
      t.kill()
      tl?.kill()
      place(sorted)
      gsap.set(cards, { clearProps: 'all' })
      sorted.forEach((c) => c.classList.remove('is-best'))
    }
  })
  return (
    <ul className={`rebook ${className}`} ref={ref}>
      {REBOOK.map((f, i) => (
        <li key={f.t} className="rb-card">
          <div>
            <b className="fig">{f.t}</b>
            <span>{f.d}</span>
          </div>
          <div className="rb-r">
            <b className="fig">{f.p}</b>
            <span className={`pill ${i === 0 ? 'pill--ok' : ''}`}>{f.diff}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function PlansSection() {
  const p = HOME.plans
  const ref = React.useRef<HTMLDivElement>(null)
  const num = React.useRef<HTMLSpanElement>(null)
  useMotion(ref, ({ root }) => {
    const alert = root.querySelector<HTMLElement>('[data-alert]')
    const trav = root.querySelector<HTMLElement>('.pl-trav img')
    const t = whenVisible(root.querySelector('.pl-trav')!, () => {
      if (alert) {
        gsap.fromTo(
          alert,
          { y: -140, autoAlpha: 0, rotation: -4 },
          { y: 0, autoAlpha: 1, rotation: 0, duration: 1.1, ease: 'bounce.out', delay: 0.4 },
        )
        gsap.fromTo(
          alert.querySelector('.alert-ico'),
          { rotation: 0 },
          {
            rotation: 18,
            duration: 0.12,
            yoyo: true,
            repeat: 7,
            delay: 1.2,
            transformOrigin: '50% 10%',
          },
        )
      }
    })
    if (alert) gsap.set(alert, { autoAlpha: 0 })
    if (trav) gsap.to(trav, { y: -8, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    const t2 = whenVisible(root.querySelector('.pl-stat')!, () => {
      if (num.current) countUp(num.current, 89, { suffix: '%', duration: 1.8 })
    })
    if (num.current) num.current.textContent = '0%'
    return () => {
      t.kill()
      t2.kill()
    }
  })
  return (
    <section className="sec" aria-labelledby="plans-h" ref={ref}>
      <div className="wrap">
        <div className="bento">
          <div className="tile s5 pl-text" data-reveal>
            <p className="eyebrow">When plans change</p>
            <h2 className="disp h-lg" id="plans-h">
              {p.headline}
            </h2>
            <p className="lead">{p.body}</p>
            <Link to="/when-plans-change" className="gb gb--link">
              {p.link}
            </Link>
          </div>
          <div className="tile tile--tint s4 pl-trav" data-reveal>
            <span className="cut-orb cut-orb--b" aria-hidden="true" />
            <AlertCard />
            <img
              src="/img/px3932459-traveler-phone.webp"
              width="1100"
              height="964"
              alt="A traveler looking at a phone alert."
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="tile tile--plum s3 pl-stat" data-reveal>
            <p className="fig stat-n">
              <span ref={num}>{p.stat.value}</span>
              <Fn n={p.stat.note} />
            </p>
            <p className="p">{p.stat.text}</p>
          </div>
          <div className="tile s12 pl-cards" data-reveal>
            <div className="pl-cards-head">
              <p className="pc-title">New options inside policy</p>
              <span className="pill pill--ok">Your travel lead sees the change</span>
            </div>
            <RebookCards />
          </div>
        </div>
      </div>
    </section>
  )
}
