import { countTo, gsap, playWhen, useMotion } from '@/lib/motion'
import { POLICY_RULES } from './sample'

/** The company policy as a card: rules tick on one by one, then a fare over the cap is caught and sent to an approver. */
export function PolicyCard({ manual, className }: { manual?: boolean; className?: string }) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const rows = Array.from(el.querySelectorAll('.pc__row'))
    const knobs = Array.from(el.querySelectorAll('.pc__k'))
    const tracks = Array.from(el.querySelectorAll('.pc__sw'))
    const ticks = Array.from(el.querySelectorAll('.pc__tick path'))
    const count = el.querySelector<HTMLElement>('[data-count]')
    const test = el.querySelector('.pc__test')
    const tl = gsap.timeline({ paused: true })
    tl.from(el.querySelector('.pc__head'), { opacity: 0, y: -10, duration: 0.45 })
    tl.from(rows, { opacity: 0, y: 18, duration: 0.5, stagger: 0.38, ease: 'power3.out' }, 0.1)
    tl.from(tracks, { backgroundColor: 'rgba(67,22,46,0)', duration: 0.3, stagger: 0.38 }, 0.45)
    tl.from(knobs, { x: -16, duration: 0.4, ease: 'back.out(2)', stagger: 0.38 }, 0.45)
    tl.from(ticks, { drawSVG: 0, duration: 0.35, stagger: 0.38, ease: 'power2.out' }, 0.7)
    if (count)
      tl.add(
        countTo(count, POLICY_RULES.length, (n) => String(Math.round(n)), 1.6, { ease: 'none' }),
        0.45,
      )
    tl.from(test, { opacity: 0, y: 24, duration: 0.5, ease: 'power3.out' }, '>0.1')
    tl.from(
      el.querySelector('.pc__over'),
      { scaleX: 0, transformOrigin: 'left center', duration: 0.6, ease: 'power3.inOut' },
      '>-0.1',
    )
    tl.fromTo(
      el.querySelector('.pc__flag'),
      { scale: 0, rotate: -12 },
      { scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2.4)' },
      '>-0.2',
    )
    tl.to(test, { x: 5, duration: 0.06, repeat: 5, yoyo: true, ease: 'sine.inOut' }, '<0.1')
    playWhen(el, () => void tl.play())
  }, [])
  return (
    <div ref={ref} className={`ed-card pc ${className ?? ''}`} data-manual={manual || undefined}>
      <div className="pc__head">
        <span className="ed-cap">Travel policy</span>
        <span className="ed-cap ed-cap--soft">
          <b data-count>{POLICY_RULES.length}</b> rules on
        </span>
      </div>
      <ul className="pc__list">
        {POLICY_RULES.map((r) => (
          <li key={r.k} className="pc__row">
            <span className="pc__k-label">{r.k}</span>
            <span className="pc__v">{r.v}</span>
            <span className="pc__sw" aria-hidden="true">
              <span className="pc__k" />
            </span>
            <svg viewBox="0 0 16 16" className="pc__tick" aria-hidden="true">
              <path
                d="M2.5 8.5 6.5 12.5 13.5 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        ))}
      </ul>
      <div className="pc__test">
        <div className="pc__test-top">
          <span className="ed-cap">Flight AB 905</span>
          <span className="pc__flag">Goes to approver</span>
        </div>
        <div className="pc__meter" aria-hidden="true">
          <span className="pc__cap" />
          <span className="pc__over" />
        </div>
        <p className="pc__note">
          <b>$1,120</b> is over the <b>$900</b> fare cap.
        </p>
      </div>
    </div>
  )
}
