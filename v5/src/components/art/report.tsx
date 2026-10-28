import * as React from 'react'

import { Fn, ReviewButton } from '@/components/glass/ui'
import { HOME } from '@/content/site'
import { Flip, gsap } from '@/lib/gsap'
import { countUp, useMotion, whenVisible } from '@/lib/motion'

/** Sample report tile. With `collapsible` it starts closed on a wide screen and opens (Flip) with a scan line and revealing rows. */
export function ReportTile({
  collapsible = false,
  className = '',
}: {
  collapsible?: boolean
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const rows = HOME.review.sample.rows
  const [open, setOpen] = React.useState(true)
  const [armed, setArmed] = React.useState(false)
  const first = React.useRef(true)

  const reveal = React.useCallback((root: HTMLElement) => {
    const r = root.querySelectorAll<HTMLElement>('[data-frow]')
    const scan = root.querySelector('.rep-scan')
    const tl = gsap.timeline()
    tl.fromTo(
      r,
      { autoAlpha: 0, x: -20 },
      {
        autoAlpha: 1,
        x: 0,
        stagger: 0.14,
        duration: 0.5,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
    )
    if (scan)
      tl.fromTo(
        scan,
        { yPercent: -10, autoAlpha: 1 },
        { yPercent: 1000, duration: 1.4, ease: 'power1.inOut' },
        0,
      ).to(scan, { autoAlpha: 0, duration: 0.2 })
    root.querySelectorAll<HTMLElement>('[data-range]').forEach((el, i) => {
      tl.to(
        el,
        {
          duration: 0.9,
          scrambleText: { text: el.dataset.range ?? '', chars: '0123456789K$', speed: 0.8 },
        },
        0.25 + i * 0.14,
      )
    })
    root.querySelectorAll<HTMLElement>('[data-trips]').forEach((el, i) => {
      tl.add(countUp(el, Number(el.dataset.trips), { duration: 0.9 }), 0.25 + i * 0.14)
    })
    return tl
  }, [])

  useMotion(
    ref,
    ({ root }) => {
      const t = whenVisible(root, () => {
        if (!collapsible) reveal(root)
      })
      if (collapsible) setArmed(true)
      return () => {
        t.kill()
        setArmed(false)
        setOpen(true)
      }
    },
    [collapsible],
  )

  React.useEffect(() => {
    if (!collapsible || !armed) return
    if (first.current) {
      first.current = false
      setOpen(false)
    }
  }, [armed, collapsible])

  const toggle = () => {
    const root = ref.current
    if (!root) return
    const state = Flip.getState(root, { props: 'borderRadius' })
    const next = !open
    root.dataset.open = String(next)
    setOpen(next)
    Flip.from(state, {
      duration: 0.8,
      ease: 'power3.inOut',
      scale: false,
      onComplete: () => {
        if (next) reveal(root)
      },
    })
  }

  return (
    <div className={`tile rep ${className}`} ref={ref} data-open={String(open)} data-reveal>
      <div className="rep-scan" aria-hidden="true" />
      <div className="rep-head">
        <span className="pill">{HOME.review.sample.label}</span>
        {armed ? (
          <button
            type="button"
            className="gb gb--sec rep-toggle"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? 'Close the report' : 'Open the report'}
          </button>
        ) : null}
      </div>
      <div className="rep-table" role="table" aria-label="Review report findings">
        <div className="rep-row rep-row--h" role="row">
          <span role="columnheader">Finding</span>
          <span role="columnheader" className="rep-c">
            Trips
          </span>
          <span role="columnheader" className="rep-c">
            Savings range
          </span>
        </div>
        {rows.map((r) => (
          <div className="rep-row" role="row" key={r.finding} data-frow>
            <span role="cell" className="rep-f">
              {r.finding}
            </span>
            <b role="cell" className="fig rep-c rep-trips" data-trips={r.trips}>
              {r.trips}
            </b>
            <b role="cell" className="fig rep-c rep-range" data-range={r.range}>
              {r.range}
            </b>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Mini compare bars: spend rises 7.2% while trips rise 1.3% (the context line, drawn). */
function CompareBars() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const bars = gsap.utils.toArray<HTMLElement>('.cb-bar i', root)
    gsap.set(bars, { scaleX: 0, transformOrigin: '0 50%' })
    const t = whenVisible(root, () =>
      gsap.to(bars, { scaleX: 1, duration: 1.4, stagger: 0.2, ease: 'power3.out' }),
    )
    return () => t.kill()
  })
  return (
    <div className="cb" ref={ref} aria-hidden="true">
      <div className="cb-bar">
        <span>Spend</span>
        <div>
          <i style={{ width: '100%' }} />
        </div>
        <b className="fig">7.2%</b>
      </div>
      <div className="cb-bar">
        <span>Trips</span>
        <div>
          <i className="cb-small" style={{ width: '18%' }} />
        </div>
        <b className="fig">1.3%</b>
      </div>
    </div>
  )
}

export function SpendReviewHome() {
  const r = HOME.review
  return (
    <section className="sec" aria-labelledby="review-h" id="spend-review">
      <div className="wrap">
        <div className="bento">
          <div className="tile tile--plum s5 rev-ctx" data-reveal>
            <p className="eyebrow">2026 outlook</p>
            <p className="disp h-sm rev-line">
              {r.context}
              <Fn n={r.contextNote} />
            </p>
            <CompareBars />
            <p className="disp h-md rev-take">{r.takeaway}</p>
          </div>
          <div className="tile s7 rev-main" data-reveal>
            <h2 className="disp h-lg" id="review-h">
              {r.headline}
            </h2>
            <p className="lead">{r.body}</p>
            <ul className="rev-list">
              {r.shows.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="p">{r.note}</p>
            <div className="row">
              <ReviewButton variant="pri" />
              <span className="small">{r.small}</span>
            </div>
          </div>
          <ReportTile collapsible className="s12" />
        </div>
      </div>
    </section>
  )
}
