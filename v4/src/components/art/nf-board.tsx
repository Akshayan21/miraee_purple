import { Link, useLocation } from 'react-router-dom'

import { gsap, useMotion } from '@/lib/motion'
import { attemptedSlug, rankPages } from '@/lib/did-you-mean'

const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:'
const WIDTH = { time: 5, flight: 6, to: 12, status: 10 } as const
type Col = keyof typeof WIDTH

const TIMES = ['04:20', '04:35', '05:10', '05:45']
const pad = (s: string, n: number) => s.slice(0, n).padEnd(n, ' ')
const rand = () => CHARS[Math.floor(Math.random() * CHARS.length)]

function Cells({ text, col }: { text: string; col: Col }) {
  return (
    <span className="sf__grp" data-col={col} aria-hidden="true">
      {pad(text.toUpperCase(), WIDTH[col])
        .split('')
        .map((ch, i) => (
          <span key={i} className="sf__c" data-ch={ch}>
            <span className="sf__i">{ch}</span>
          </span>
        ))}
    </span>
  )
}

/** Flips one cell through random characters and lands on `target`. */
function flip(tl: gsap.core.Timeline, cell: HTMLElement, target: string, at: number) {
  const inner = cell.firstElementChild as HTMLElement
  const steps = gsap.utils.random(4, 10, 1)
  const state = { n: 0 }
  tl.to(
    state,
    {
      n: steps,
      duration: steps * 0.055,
      ease: 'none',
      onUpdate() {
        const done = Math.round(state.n) >= steps
        inner.textContent = done ? target : rand()
        gsap.fromTo(inner, { scaleY: 0.15 }, { scaleY: 1, duration: 0.05, overwrite: true })
      },
      onComplete() {
        inner.textContent = target
        cell.dataset.ch = target
      },
    },
    at,
  )
}

function flipGroup(tl: gsap.core.Timeline, grp: HTMLElement, text: string, at: number, spread = 0.03) {
  const t = pad(text.toUpperCase(), WIDTH[grp.dataset.col as Col])
  grp.querySelectorAll<HTMLElement>('.sf__c').forEach((c, i) => flip(tl, c, t[i], at + i * spread))
}

/**
 * The 404 as an airport departures board. Flight MR 404 (the address that was not found) flips to CANCELLED, and the
 * rows under it are real "rebooking" links, the closest pages first. Reduced motion shows the settled board.
 */
export function NotFoundBoard() {
  const { pathname } = useLocation()
  const slug = attemptedSlug(pathname) || 'this page'
  const ranked = rankPages(pathname, 4)

  const ref = useMotion<HTMLDivElement>((el) => {
    const groups = Array.from(el.querySelectorAll<HTMLElement>('.sf__grp'))
    const tl = gsap.timeline({ delay: 0.4 })
    // every cell starts scrambled, then settles row by row
    groups.forEach((g) => {
      const row = Number((g.closest('[data-r]') as HTMLElement | null)?.dataset.r ?? 0)
      const cancelled = row === 0 && g.dataset.col === 'status'
      const finals = Array.from(g.querySelectorAll<HTMLElement>('.sf__c')).map((c) => c.dataset.ch ?? ' ')
      g.querySelectorAll<HTMLElement>('.sf__c').forEach((c, i) => {
        const inner = c.firstElementChild as HTMLElement
        inner.textContent = rand()
        const target = cancelled ? pad('ON TIME', WIDTH.status)[i] : finals[i]
        flip(tl, c, target, 0.1 + row * 0.2 + i * 0.03)
      })
    })
    // then flight MR 404 is cancelled
    const status = el.querySelector<HTMLElement>('.sf__grp[data-col="status"]')!
    const row0 = el.querySelector('[data-r="0"]')
    tl.add(() => status.classList.add('is-late'), 2.4)
    flipGroup(tl, status, 'CANCELLED', 2.4, 0.045)
    tl.fromTo(row0, { x: 0 }, { x: 6, duration: 0.06, repeat: 5, yoyo: true, ease: 'sine.inOut' }, 2.6)
    tl.from(el.querySelectorAll('.nfb__sep, .nfb__go'), { opacity: 0, duration: 0.5, stagger: 0.1 }, 3)
    return () => {
      tl.kill()
    }
  }, [pathname])

  return (
    <div ref={ref} className="nfb sf">
      <div className="sf__board nfb__board">
        <div className="sf__bar">
          <span className="ed-cap">Departures</span>
          <span className="ed-cap ed-cap--soft">Terminal Miraee</span>
        </div>

        <div className="nfb__rows">
          <div
            className="sf__row nfb__row nfb__row--x"
            data-r="0"
            role="group"
            aria-label={`Flight MR 404 to ${slug}: cancelled`}
          >
            <Cells text="04:04" col="time" />
            <Cells text="MR 404" col="flight" />
            <Cells text={slug.replace(/-/g, ' ')} col="to" />
            <Cells text="CANCELLED" col="status" />
          </div>

          <p className="nfb__sep ed-cap" aria-hidden="true">
            Rebooked on the next departures
          </p>

          <ul className="nfb__list" aria-label="Rebook to one of these pages">
            {ranked.map(({ page, best }, i) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  className="sf__row nfb__row nfb__row--go"
                  data-r={i + 1}
                  data-best={best || undefined}
                  aria-label={`${best ? 'Best match: ' : ''}${page.label}`}
                >
                  <Cells text={TIMES[i]} col="time" />
                  <Cells text={`MR ${101 + i * 7}`} col="flight" />
                  <Cells text={page.label} col="to" />
                  <Cells text={best ? 'BEST MATCH' : i === 1 ? 'BOARDING' : 'ON TIME'} col="status" />
                  <span className="nfb__go" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
