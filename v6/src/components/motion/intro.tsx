import * as React from 'react'

import { gsap, registerGsap } from '@/lib/motion'

/**
 * Page-load curtain (home only, first load). The markup is server-rendered but CSS keeps it hidden unless
 * <html data-intro> is set by the inline script in index.html, so the static HTML never depends on it.
 * Short: under 1.6s, a paper panel with the wordmark lifting away. Skipped for reduced motion.
 */
export function Intro() {
  const root = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const html = document.documentElement
    const finish = () => {
      html.removeAttribute('data-intro')
      window.dispatchEvent(new Event('v4:intro-done'))
    }
    if (!html.hasAttribute('data-intro')) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !root.current) {
      finish()
      return
    }
    registerGsap()
    const el = root.current
    const letters = el.querySelectorAll('.ed-intro__l')
    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: finish })
        .from(letters, { yPercent: 115, duration: 0.45, ease: 'power4.out', stagger: 0.04 })
        .from(
          '.ed-intro__rule',
          { scaleX: 0, duration: 0.45, ease: 'power3.inOut', transformOrigin: 'left center' },
          0.1,
        )
        .to(
          letters,
          { yPercent: -115, duration: 0.35, ease: 'power3.in', stagger: 0.025 },
          '+=0.08',
        )
        .to('.ed-intro__panel--a', { yPercent: -100, duration: 0.6, ease: 'power4.inOut' }, '-=0.2')
        .to(
          '.ed-intro__panel--b',
          { yPercent: -100, duration: 0.6, ease: 'power4.inOut' },
          '-=0.45',
        )
    }, el)
    const guard = window.setTimeout(finish, 2200)
    return () => {
      window.clearTimeout(guard)
      ctx.revert()
      if (html.hasAttribute('data-intro')) finish()
    }
  }, [])
  return (
    <div ref={root} className="ed-intro" aria-hidden="true">
      <div className="ed-intro__panel ed-intro__panel--b" />
      <div className="ed-intro__panel ed-intro__panel--a">
        <div className="ed-intro__word">
          {'Miraee'.split('').map((l, i) => (
            <span key={i} className="ed-intro__lm">
              <span className="ed-intro__l">{l}</span>
            </span>
          ))}
        </div>
        <div className="ed-intro__rule" />
      </div>
    </div>
  )
}
