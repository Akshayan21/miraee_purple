import { afterIntro, countTo, gsap, money, playWhen, useMotion } from '@/lib/motion'
import { TRIPS, type SampleTrip } from './sample'

type Props = {
  rows?: SampleTrip[]
  title?: string
  /** Waits for the page intro instead of scrolling into view. */
  intro?: boolean
  /** Played by a parent (pinned scenes) through a `v4:play` event. */
  manual?: boolean
  className?: string
  caption?: string
}

const Tick = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className="lc__tick">
    <path
      d="M2.5 8.5 6.5 12.5 13.5 3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * The finance view as an ink-outlined paper card: each trip lands in its budget, row by row, and the month total counts up.
 */
export function LedgerCard({
  rows = TRIPS,
  title = 'Finance view',
  intro,
  manual,
  className,
  caption = '',
}: Props) {
  const total = rows.reduce((s, r) => s + r.amount, 0)
  const ref = useMotion<HTMLDivElement>((el) => {
    const trs = Array.from(el.querySelectorAll('tbody tr'))
    const amts = Array.from(el.querySelectorAll<HTMLElement>('[data-amt]'))
    const ticks = Array.from(el.querySelectorAll('.lc__tick path'))
    const tot = el.querySelector<HTMLElement>('[data-total]')
    const tl = gsap.timeline({ paused: true })
    tl.from(el.querySelector('.lc__head'), {
      opacity: 0,
      y: -12,
      duration: 0.5,
      ease: 'power3.out',
    })
    tl.from(trs, { opacity: 0, x: -28, duration: 0.55, stagger: 0.26, ease: 'power3.out' }, 0.2)
    amts.forEach((a, i) => tl.add(countTo(a, rows[i].amount, money, 0.9), 0.35 + i * 0.26))
    tl.from(ticks, { drawSVG: 0, duration: 0.4, stagger: 0.26, ease: 'power2.out' }, 0.7)
    tl.from(
      el.querySelectorAll('tbody tr .lc__bar'),
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.7,
        stagger: 0.26,
        ease: 'power3.out',
      },
      0.5,
    )
    if (tot) {
      tl.from(el.querySelector('tfoot'), { opacity: 0, duration: 0.4 }, '>-0.3')
      tl.add(countTo(tot, total, money, 1.1), '<')
    }
    if (intro) return afterIntro(() => void tl.play())
    playWhen(el, () => void tl.play())
  }, [])
  const max = Math.max(...rows.map((r) => r.amount))
  return (
    <div ref={ref} className={`ed-card lc ${className ?? ''}`} data-manual={manual || undefined}>
      <div className="lc__head">
        <span className="ed-cap">{title}</span>
        {caption ? <span className="ed-cap ed-cap--soft">{caption}</span> : null}
      </div>
      <table className="lc__table">
        <caption className="mr-sr">{title}: each trip with its budget and cost.</caption>
        <thead>
          <tr>
            <th scope="col">Trip</th>
            <th scope="col" className="lc__hide-s">
              Budget
            </th>
            <th scope="col" className="mr-num">
              Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.trip} data-flag={r.status === 'Needs approval' || undefined}>
              <td>
                <b>{r.trip}</b>
                <span className="lc__date">{r.dates}</span>
              </td>
              <td className="lc__hide-s">
                <span className="lc__budget">{r.budget}</span>
                <i
                  className="lc__bar"
                  style={{ width: `${Math.round((r.amount / max) * 100)}%` }}
                />
              </td>
              <td className="mr-num">
                <span data-amt>{money(r.amount)}</span>
                <span className="lc__st" data-s={r.status}>
                  {r.status === 'Needs approval' ? 'Approver' : <Tick />}
                  <span className="mr-sr">{r.status}</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="lc__tot">
              <span>Month to date</span>
              <b data-total>{money(total)}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
