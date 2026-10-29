import { gsap, playWhen, useMotion } from '@/lib/motion'

const BARS = [
  { label: 'Sales', n: 9 },
  { label: 'People', n: 6 },
  { label: 'Brand', n: 7 },
  { label: 'Tech', n: 4 },
  { label: 'Ops', n: 5 },
  { label: 'Other', n: 3 },
]
const TOTAL = BARS.reduce((sum, b) => sum + b.n, 0)
const TREND = 'M30 150 C 110 130, 150 120, 200 112 S 300 80, 360 92 S 470 50, 570 34'

/**
 * "Every dollar in one place": the grid and axis draw in, loose booking tiles drop into six budget stacks, then a pin rides the
 * trend line, dropping a guide to the axis and counting the bookings it passes. After the intro a tile now and then
 * changes colour, like a live ledger. Each tile is one booking.
 */
export function SpendBlocks({ className }: { className?: string }) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const plot = el.querySelector<HTMLElement>('.sb__plot')!
    const path = el.querySelector<SVGPathElement>('.sb__trend')!
    const pin = el.querySelector<HTMLElement>('.sb__pin')!
    const drop = el.querySelector<HTMLElement>('.sb__drop')!
    const count = el.querySelector<HTMLElement>('.sb__count b')!
    const cols = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.sb__col'))
    const labels = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.sb__l'))
    const len = path.getTotalLength()
    const state = { p: 0 }
    const place = () => {
      const pt = path.getPointAtLength(len * state.p)
      const w = plot.clientWidth
      const h = plot.clientHeight
      const x = (pt.x / 600) * w
      const y = (pt.y / 220) * h
      gsap.set(pin, { x, y })
      gsap.set(drop, { x, y, height: Math.max(0, h - y) })
      // bookings passed so far: whole columns behind the pin, plus the share of the column it is over
      const f = Math.min(1, Math.max(0, (pt.x - 30) / 540))
      let sum = 0
      BARS.forEach((bar, i) => {
        const share = Math.min(1, Math.max(0, (f - i / BARS.length) * BARS.length))
        sum += bar.n * share
      })
      count.textContent = String(state.p >= 0.999 ? TOTAL : Math.round(sum))
    }
    count.textContent = '0'
    gsap.set([pin, drop], { opacity: 0 })

    const tl = gsap.timeline({ paused: true })
    tl.from(el.querySelectorAll('.sb__g'), { drawSVG: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' })
    tl.from(
      el.querySelector('.sb__axis'),
      { scaleX: 0, transformOrigin: 'left center', duration: 0.6, ease: 'power3.inOut' },
      0,
    )
    cols.forEach((col, i) => {
      tl.from(
        col.querySelectorAll('.sb__t'),
        {
          y: () => -(plot.clientHeight + 50),
          opacity: 0,
          scaleY: 0.4,
          duration: 0.7,
          ease: 'back.out(1.5)',
          stagger: 0.07,
        },
        0.35 + i * 0.13,
      )
    })
    tl.from(labels, { opacity: 0, y: 8, duration: 0.4, stagger: 0.07 }, 0.9)
    tl.from(el.querySelector('.sb__area'), { opacity: 0, duration: 1.2 }, '>-0.1')
    tl.from(path, { drawSVG: 0, duration: 1.8, ease: 'power1.inOut' }, '<')
    tl.set([pin, drop], { opacity: 1 }, '<')
    tl.to(state, { p: 1, duration: 1.8, ease: 'power1.inOut', onUpdate: place }, '<')
    tl.fromTo(pin, { scale: 0.4 }, { scale: 1, duration: 0.3, ease: 'back.out(3)' }, '<')
    tl.to(
      el.querySelector('.sb__count'),
      { scale: 1.08, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' },
      '>-0.1',
    )
    tl.add(() => {
      count.textContent = String(TOTAL)
    }, '>')

    // after the intro: a tile changes colour now and then, and the pin pulses
    const tiles = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.sb__t'))
    const flip = () => {
      const t = tiles[Math.floor(Math.random() * tiles.length)]
      const k = Number(t.dataset.k ?? 0)
      t.dataset.k = String((k + 1 + Math.floor(Math.random() * 2)) % 3)
      gsap.fromTo(t, { scaleX: 0.86 }, { scaleX: 1, duration: 0.5, ease: 'back.out(3)' })
    }
    const idle = gsap.timeline({ paused: true, repeat: -1 })
    idle
      .add(flip, 0)
      .add(flip, 1.1)
      .add(flip, 2.3)
      .to(pin, { scale: 1.35, duration: 0.5, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0)
      .to({}, { duration: 3 })
    tl.eventCallback('onComplete', () => void idle.play(0))

    playWhen(el, () => void tl.play(), 'top 72%')
    return () => idle.kill()
  }, [])
  return (
    <div ref={ref} className={`ed-card sb ${className ?? ''}`}>
      <div className="sb__head">
        <span className="ed-cap">Spend by budget</span>
        <span className="ed-cap sb__count">
          <b>{TOTAL}</b> bookings
        </span>
      </div>
      <div
        className="sb__plot"
        role="img"
        aria-label="Bar chart: every booking stacked into its budget."
      >
        <svg className="sb__grid" viewBox="0 0 600 200" preserveAspectRatio="none" aria-hidden="true">
          <line className="sb__g" x1="0" y1="40" x2="600" y2="40" />
          <line className="sb__g" x1="0" y1="100" x2="600" y2="100" />
          <line className="sb__g" x1="0" y1="160" x2="600" y2="160" />
        </svg>
        <div className="sb__cols">
          {BARS.map((b) => (
            <div className="sb__col" key={b.label}>
              <div className="sb__stack">
                {Array.from({ length: b.n }).map((_, i) => (
                  <i key={i} className="sb__t" data-k={(i + b.n) % 3} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <svg className="sb__svg" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
          <path className="sb__area" d={`${TREND} L570 220 L30 220 Z`} />
          <path className="sb__trend" d={TREND} />
        </svg>
        <i className="sb__drop" aria-hidden="true" />
        <i className="sb__pin" aria-hidden="true" />
      </div>
      <div className="sb__axis" aria-hidden="true" />
      <div className="sb__labels">
        {BARS.map((b) => (
          <span className="sb__l" key={b.label}>
            {b.label}
          </span>
        ))}
      </div>
    </div>
  )
}

const ORD_COLS = 20
const ORD_ROWS = 5
const ORD_LIT_COLS = 4
const ORD_LIT_ROWS = 3

/**
 * "12 in 100", as order against clutter: a hundred programs drawn as tiles, all tilted and scattered. Twelve snap into one
 * neat tangerine block and tick themselves off; the other eighty-eight keep drifting. Static markup is the tidy grid.
 */
export function PercentDots() {
  const cells = Array.from({ length: ORD_COLS * ORD_ROWS }, (_, i) => {
    const c = i % ORD_COLS
    const r = Math.floor(i / ORD_COLS)
    return { i, lit: c < ORD_LIT_COLS && r < ORD_LIT_ROWS }
  })
  const ref = useMotion<HTMLDivElement>((el) => {
    const all = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.ord__t'))
    const lit = all.filter((t) => t.hasAttribute('data-lit'))
    const rest = all.filter((t) => !t.hasAttribute('data-lit'))
    const ticks = gsap.utils.toArray<SVGElement>(el.querySelectorAll('.ord__tick'))
    const num = el.querySelector<HTMLElement>('.ord__n')!
    const tally = { n: 0 }
    const rnd = gsap.utils.random
    const messy = () => ({ rotation: rnd(-20, 20), xPercent: rnd(-30, 30), yPercent: rnd(-30, 30) })

    el.classList.add('ord--run')
    num.textContent = '0'
    all.forEach((t) => gsap.set(t, messy()))

    const tl = gsap.timeline({ paused: true })
    tl.from(all, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(2.2)',
      stagger: { grid: [ORD_ROWS, ORD_COLS], from: 'center', amount: 1 },
    })
    tl.from(el.querySelector('.ord__cap'), { opacity: 0, y: 8, duration: 0.4 }, '<0.4')
    tl.add('snap', '>0.5')
    lit.forEach((t, i) => tl.add(() => t.classList.add('is-on'), `snap+=${0.1 + i * 0.06}`))
    tl.to(
      lit,
      { rotation: 0, xPercent: 0, yPercent: 0, duration: 0.9, ease: 'elastic.out(1, 0.55)', stagger: 0.06 },
      'snap',
    )
    tl.to(tally, { n: 12, duration: 0.9, ease: 'none', onUpdate: () => void (num.textContent = String(Math.round(tally.n))) }, 'snap+=0.1')
    tl.from(ticks, { drawSVG: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }, 'snap+=0.45')
    tl.to(rest, { opacity: 0.55, duration: 0.6, ease: 'power1.out' }, 'snap+=0.2')
    tl.add(() => {
      // the untidy ones never settle
      gsap.to(rest, {
        rotation: () => rnd(-20, 20),
        xPercent: () => rnd(-32, 32),
        yPercent: () => rnd(-32, 32),
        duration: () => rnd(2.2, 4.2),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
        stagger: { each: 0.02, from: 'random' },
      })
    }, '>0.2')
    playWhen(el, () => void tl.play(), 'top 88%')
  }, [])
  return (
    <div ref={ref} className="ord" aria-hidden="true">
      <div className="ord__grid">
        {cells.map((c) => (
          <i key={c.i} className="ord__t" {...(c.lit ? { 'data-lit': '' } : {})}>
            {c.lit ? (
              <svg viewBox="0 0 20 20" className="ord__svg" aria-hidden="true" focusable="false">
                <path className="ord__tick" d="M4.5 10.5 L8.5 14.5 L15.5 6" />
              </svg>
            ) : null}
          </i>
        ))}
      </div>
      <p className="ord__cap ed-cap">
        <b className="ord__n">12</b> in every 100
      </p>
    </div>
  )
}

/** The "12%" drawn stroke by stroke, with a hand-drawn ring. The real text sits beside it for readers. */
export function BigTwelve() {
  const ref = useMotion<HTMLDivElement>((el) => {
    const strokes = gsap.utils.toArray<SVGElement>(el.querySelectorAll('.b12__s'))
    const ring = el.querySelector('.b12__ring')
    const tl = gsap.timeline({ paused: true })
    tl.from(strokes, { drawSVG: 0, duration: 0.9, stagger: 0.28, ease: 'power2.inOut' })
    tl.from(ring, { drawSVG: '0% 0%', duration: 1.1, ease: 'power2.inOut' }, '>-0.1')
    playWhen(el, () => void tl.play(), 'top 80%')
  }, [])
  return (
    <div ref={ref} className="b12">
      <svg viewBox="0 0 380 190" className="b12__svg" aria-hidden="true">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path className="b12__s b12__s--ink" d="M32 58 L74 28 L74 160" />
          <path
            className="b12__s b12__s--ink"
            d="M118 66 C 120 26, 196 20, 198 64 C 200 98, 134 124, 120 160 L204 160"
          />
          <circle className="b12__s b12__s--tang" cx="258" cy="56" r="20" />
          <circle className="b12__s b12__s--tang" cx="338" cy="132" r="20" />
          <path className="b12__s b12__s--tang" d="M344 34 L252 168" />
          <path
            className="b12__ring"
            d="M14 100 C 6 30, 150 -6, 288 14 C 390 30, 392 160, 300 182 C 190 208, 20 190, 14 112"
          />
        </g>
      </svg>
    </div>
  )
}

/** A hand-drawn mark (underline or ring) drawn over its inline text when it scrolls into view. */
export function Scribble({
  kind,
  children,
}: {
  kind: 'underline' | 'circle'
  children: React.ReactNode
}) {
  const ref = useMotion<HTMLSpanElement>((el) => {
    const p = el.querySelector('path')
    if (!p) return
    const tw = gsap.from(p, {
      drawSVG: 0,
      duration: kind === 'circle' ? 1.1 : 0.9,
      ease: 'power2.inOut',
      paused: true,
      delay: 0.25,
    })
    playWhen(el, () => void tw.play(), 'top 85%')
  }, [])
  return (
    <span ref={ref} className={`scr scr--${kind}`}>
      {children}
      {kind === 'underline' ? (
        <svg
          className="scr__svg"
          viewBox="0 0 200 14"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M3 9 C 40 2, 80 12, 120 6 S 180 4, 197 8" fill="none" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          className="scr__svg"
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M20 14 C 70 -2, 170 4, 190 36 C 204 66, 110 82, 50 70 C 4 62, 4 24, 44 10"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  )
}
