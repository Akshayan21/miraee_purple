import { gsap, playWhen, typeInto, useMotion } from '@/lib/motion'

const LOG = [
  { what: 'Signed in with Google', who: 'Traveler', at: '09:11' },
  { what: 'Booked', who: 'Traveler', at: '09:12' },
  { what: 'Approved', who: 'Approver', at: '09:14' },
  { what: 'Changed', who: 'Travel lead', at: '14:03' },
]

/** A shield drawn in one line, a check inside it, and the record of who did what and when typing out beside it. */
export function ShieldArt({ className, manual }: { className?: string; manual?: boolean }) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const rows = Array.from(el.querySelectorAll<HTMLElement>('.sh__row'))
    const tl = gsap.timeline({ paused: true })
    tl.from(el.querySelector('.sh__outline'), { drawSVG: 0, duration: 1.3, ease: 'power2.inOut' })
    tl.from(el.querySelector('.sh__fill'), { opacity: 0, duration: 0.5 }, '>-0.3')
    tl.from(
      el.querySelector('.sh__check'),
      { drawSVG: 0, duration: 0.6, ease: 'power3.out' },
      '>-0.2',
    )
    tl.fromTo(
      el.querySelector('.sh__svg'),
      { scale: 1 },
      {
        scale: 1.04,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut',
        transformOrigin: '50% 50%',
      },
      '<0.35',
    )
    rows.forEach((row, i) => {
      const t = row.querySelector<HTMLElement>('.sh__what')!
      const full = LOG[i].what
      tl.from(row, { opacity: 0, x: 24, duration: 0.4, ease: 'power3.out' }, 0.7 + i * 0.5)
      tl.add(typeInto(t, full, 0.5), 0.8 + i * 0.5)
    })
    playWhen(el, () => void tl.play(), 'top 78%')
  }, [])
  return (
    <div ref={ref} className={`sh ${className ?? ''}`} data-manual={manual || undefined}>
      <svg className="sh__svg" viewBox="0 0 320 360" aria-hidden="true">
        <path
          className="sh__fill"
          d="M160 24 L286 68 V170 C286 248 228 306 160 336 C92 306 34 248 34 170 V68 Z"
        />
        <path
          className="sh__outline"
          d="M160 24 L286 68 V170 C286 248 228 306 160 336 C92 306 34 248 34 170 V68 Z"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          className="sh__check"
          d="M98 178 L146 226 L230 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <ol className="sh__log" aria-label="Record of who did what and when.">
        {LOG.map((l) => (
          <li key={l.what} className="sh__row">
            <span className="sh__what">{l.what}</span>
            <span className="sh__who">{l.who}</span>
            <span className="sh__at">{l.at}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
