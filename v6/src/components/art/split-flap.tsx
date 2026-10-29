import { gsap, playWhen, useMotion } from '@/lib/motion'

type Row = { time: string; flight: string; to: string; status: string }

const ROWS: Row[] = [
  { time: '08:15', flight: 'AB 482', to: 'CHICAGO', status: 'ON TIME' },
  { time: '09:30', flight: 'AB 117', to: 'DENVER', status: 'ON TIME' },
  { time: '10:05', flight: 'AB 640', to: 'BOSTON', status: 'BOARDING' },
  { time: '11:20', flight: 'AB 233', to: 'MIAMI', status: 'ON TIME' },
]
const NEW_ROW: Row = { time: '10:40', flight: 'AB 520', to: 'CHICAGO', status: 'CONFIRMED' }
const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:'
const pad = (s: string, n: number) => s.padEnd(n, ' ')

const WIDTH = { time: 5, flight: 6, to: 8, status: 9 } as const
type Col = keyof typeof WIDTH

function Cells({ text, col, r }: { text: string; col: Col; r: number }) {
  return (
    <span className="sf__grp" data-col={col} data-r={r} aria-hidden="true">
      {pad(text, WIDTH[col])
        .split('')
        .map((ch, i) => (
          <span key={i} className="sf__c" data-ch={ch}>
            <span className="sf__i">{ch === ' ' ? ' ' : ch}</span>
          </span>
        ))}
    </span>
  )
}

/** Flips one cell through random characters, ending on `target`. */
function flipCell(cell: HTMLElement, target: string, delay: number) {
  const inner = cell.firstElementChild as HTMLElement
  const steps = gsap.utils.random(4, 9, 1)
  const state = { n: 0 }
  return gsap.to(state, {
    n: steps,
    duration: steps * 0.055,
    delay,
    ease: 'none',
    onUpdate() {
      const i = Math.round(state.n)
      inner.textContent =
        i >= steps
          ? target === ' '
            ? ' '
            : target
          : CHARS[Math.floor(Math.random() * CHARS.length)]
      gsap.fromTo(inner, { scaleY: 0.15 }, { scaleY: 1, duration: 0.05, overwrite: true })
    },
    onComplete() {
      inner.textContent = target === ' ' ? ' ' : target
      cell.dataset.ch = target
    },
  })
}

function flipGroup(
  tl: gsap.core.Timeline,
  grp: HTMLElement,
  text: string,
  at: number,
  spread = 0.025,
) {
  const cells = Array.from(grp.querySelectorAll<HTMLElement>('.sf__c'))
  const col = grp.dataset.col as Col
  const t = pad(text, WIDTH[col])
  cells.forEach((cell, i) => tl.add(flipCell(cell, t[i], 0), at + i * spread))
}

/**
 * Airport departures board in split-flap style. The board settles, one flight is delayed (its status turns tangerine),
 * an alert pops with new options inside policy, and the row flips to the confirmed option.
 * `compact` drops the alert for use as a small page scene.
 */
export function SplitFlap({
  manual,
  className,
  alert = true,
}: {
  manual?: boolean
  className?: string
  alert?: boolean
}) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const groups = Array.from(el.querySelectorAll<HTMLElement>('.sf__grp'))
    const get = (r: number, col: Col) =>
      groups.find((g) => g.dataset.r === String(r) && g.dataset.col === col)!
    const tl = gsap.timeline({ paused: true })
    // 1. the board scrambles, then settles row by row
    groups.forEach((g) => {
      const final = Array.from(g.querySelectorAll<HTMLElement>('.sf__c')).map(
        (c) => c.dataset.ch ?? ' ',
      )
      g.querySelectorAll<HTMLElement>('.sf__c').forEach((c, i) => {
        const inner = c.firstElementChild as HTMLElement
        const r = Number(g.dataset.r)
        tl.add(flipCell(c, final[i], 0), 0.1 + r * 0.22 + i * 0.03)
        tl.set(inner, { textContent: CHARS[Math.floor(Math.random() * CHARS.length)] }, 0)
      })
    })
    // 2. the first flight is delayed
    const at = 2.3
    tl.add(() => get(0, 'status').classList.add('is-late'), at)
    flipGroup(tl, get(0, 'status'), 'DELAYED', at, 0.045)
    tl.fromTo(
      el.querySelector('.sf__row[data-r="0"]'),
      { x: 0 },
      { x: 6, duration: 0.06, repeat: 5, yoyo: true, ease: 'sine.inOut' },
      at + 0.2,
    )
    if (alert) {
      // 3. alert pops with new options
      const a = el.querySelector('.sf__alert')
      tl.from(
        a,
        { y: -40, opacity: 0, scale: 0.9, duration: 0.55, ease: 'back.out(2.2)' },
        at + 0.7,
      )
      tl.fromTo(
        el.querySelector('.sf__bell'),
        { rotate: -18 },
        {
          rotate: 18,
          duration: 0.09,
          repeat: 7,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: '50% 10%',
        },
        at + 0.9,
      )
      tl.from(
        el.querySelectorAll('.sf__opt'),
        { opacity: 0, y: 14, duration: 0.45, stagger: 0.15, ease: 'power3.out' },
        at + 1.3,
      )
      tl.to(
        el.querySelector('.sf__opt[data-pick]'),
        { backgroundColor: '#43162E', color: '#FFFFFF', duration: 0.3 },
        at + 2.6,
      )
      tl.add(() => get(0, 'status').classList.remove('is-late'), at + 2.9)
      flipGroup(tl, get(0, 'time'), NEW_ROW.time, at + 2.9)
      flipGroup(tl, get(0, 'flight'), NEW_ROW.flight, at + 2.9)
      flipGroup(tl, get(0, 'status'), NEW_ROW.status, at + 2.9, 0.04)
      tl.from(el.querySelector('.sf__lead'), { opacity: 0, y: 10, duration: 0.5 }, at + 3.6)
    } else {
      tl.add(() => get(0, 'status').classList.remove('is-late'), at + 1.6)
      flipGroup(tl, get(0, 'time'), NEW_ROW.time, at + 1.6)
      flipGroup(tl, get(0, 'flight'), NEW_ROW.flight, at + 1.6)
      flipGroup(tl, get(0, 'status'), NEW_ROW.status, at + 1.6, 0.04)
    }
    playWhen(el, () => void tl.play(), 'top 70%')
  }, [])
  return (
    <div ref={ref} className={`sf ${className ?? ''}`} data-manual={manual || undefined}>
      <div className="sf__board">
        <div className="sf__bar">
          <span className="ed-cap">Departures</span>
        </div>
        <div
          className="sf__rows"
          role="img"
          aria-label="Departures board. Flight AB 482 to Chicago is delayed, then rebooked to AB 520 at 10:40."
        >
          {ROWS.map((r, i) => (
            <div className="sf__row" key={r.flight} data-r={i}>
              <Cells text={r.time} col="time" r={i} />
              <Cells text={r.flight} col="flight" r={i} />
              <Cells text={r.to} col="to" r={i} />
              <Cells text={r.status} col="status" r={i} />
            </div>
          ))}
        </div>
      </div>
      {alert ? (
        <div className="sf__alert ed-card">
          <div className="sf__alert-top">
            <svg className="sf__bell" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z M10 21a2 2 0 0 0 4 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <b>Your flight is delayed.</b>
              <span>New options inside policy to confirm.</span>
            </div>
          </div>
          <ul className="sf__opts">
            <li className="sf__opt" data-pick="1">
              <b>10:40</b> AB 520 <em>In policy</em>
            </li>
            <li className="sf__opt">
              <b>11:55</b> AB 304 <em>In policy</em>
            </li>
          </ul>
          <p className="sf__lead">
            <i aria-hidden="true" /> Your travel lead sees the change.
          </p>
        </div>
      ) : null}
    </div>
  )
}

/** A grid of 100 dots, 89 of them filled one after another. */
export function DotGrid({ filled = 89 }: { filled?: number }) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const dots = Array.from(el.querySelectorAll('.dg__d[data-on]'))
    const tw = gsap.from(dots, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'back.out(3)',
      stagger: { each: 0.012, from: 'start' },
      paused: true,
    })
    playWhen(el, () => void tw.play(), 'top 82%')
  }, [])
  return (
    <div ref={ref} className="dg" aria-hidden="true">
      {Array.from({ length: 100 }).map((_, i) => (
        <i key={i} className="dg__d" data-on={i < filled || undefined} />
      ))}
    </div>
  )
}
