import { HOME } from '@/content/site'
import { gsap, playWhen, useMotion } from '@/lib/motion'

/** The findings table, "Review report": rows reveal in sequence, ranges are highlighted, then a rubber stamp lands. */
export function SampleReport({ className, manual }: { className?: string; manual?: boolean }) {
  const { label, rows } = HOME.review.sample
  const ref = useMotion<HTMLDivElement>((el) => {
    const trs = Array.from(el.querySelectorAll('tbody tr'))
    const hl = Array.from(el.querySelectorAll('.sr__hl'))
    const stamp = el.querySelector('.sr__stamp')
    const tl = gsap.timeline({ paused: true })
    tl.from(el.querySelector('.sr__head'), {
      opacity: 0,
      y: -12,
      duration: 0.5,
      ease: 'power3.out',
    })
    tl.from(el.querySelectorAll('thead th'), { opacity: 0, duration: 0.4, stagger: 0.08 }, 0.15)
    tl.from(trs, { opacity: 0, x: -30, duration: 0.6, stagger: 0.35, ease: 'power3.out' }, 0.35)
    tl.from(
      hl,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        stagger: 0.35,
        ease: 'power3.out',
      },
      0.6,
    )
    tl.fromTo(
      stamp,
      { scale: 2.6, opacity: 0, rotate: 4 },
      { scale: 1, opacity: 1, rotate: -9, duration: 0.32, ease: 'power4.in' },
      '>0.2',
    )
    tl.to(
      el.querySelector('.sr__sheet'),
      { y: 5, duration: 0.07, yoyo: true, repeat: 3, ease: 'sine.inOut' },
      '<0.28',
    )
    tl.from(
      el.querySelector('.sr__ring'),
      { scale: 0.6, opacity: 0.7, duration: 0.7, ease: 'power2.out' },
      '<0.28',
    )
    playWhen(el, () => void tl.play(), 'top 72%')
  }, [])
  return (
    <figure ref={ref} className={`sr ${className ?? ''}`} data-manual={manual || undefined}>
      <div className="sr__sheet">
        <div className="sr__head">
          <span className="ed-cap">{label}</span>
          <span className="ed-cap ed-cap--soft">Ranges, with the method beside each</span>
        </div>
        <table className="sr__table">
          <caption className="mr-sr">
            {label}: four findings with trip counts and savings ranges.
          </caption>
          <thead>
            <tr>
              <th scope="col">Finding</th>
              <th scope="col" className="mr-num">
                Trips
              </th>
              <th scope="col" className="mr-num">
                Savings range
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.finding}>
                <td>{r.finding}</td>
                <td className="mr-num">{r.trips}</td>
                <td className="mr-num">
                  <span className="sr__range">
                    <i className="sr__hl" />
                    {r.range}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="sr__stamp" aria-hidden="true">
          <span className="sr__ring" />
          Reviewed
        </div>
      </div>
    </figure>
  )
}
