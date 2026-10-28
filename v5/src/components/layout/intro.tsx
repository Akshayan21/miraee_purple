import * as React from 'react'

import { gsap } from '@/lib/gsap'
import { introDone, shouldIntro } from '@/lib/intro'

const TILES = [
  { x: 6, y: 10, w: 34, h: 30, k: 'plum' },
  { x: 42, y: 10, w: 24, h: 18, k: 'glass' },
  { x: 68, y: 10, w: 26, h: 44, k: 'tint' },
  { x: 42, y: 30, w: 24, h: 30, k: 'glass' },
  { x: 6, y: 42, w: 16, h: 28, k: 'tint' },
  { x: 24, y: 42, w: 16, h: 28, k: 'glass' },
  { x: 68, y: 56, w: 26, h: 28, k: 'plum' },
  { x: 6, y: 72, w: 60, h: 14, k: 'glass' },
]

/** Under 1.6s: glass tiles assemble into a bento, hold a beat, then fall away to the real page. Client-only, never blocks. */
export function Intro() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [on, setOn] = React.useState(false)

  React.useEffect(() => {
    if (shouldIntro()) setOn(true)
  }, [])

  React.useEffect(() => {
    const root = ref.current
    if (!on || !root) return
    const tiles = root.querySelectorAll('.intro-t')
    const tl = gsap.timeline({
      onComplete: () => {
        introDone()
        setOn(false)
      },
    })
    tl.set(root, { autoAlpha: 1 })
      .from(tiles, {
        scale: 0.4,
        autoAlpha: 0,
        y: 40,
        rotate: () => gsap.utils.random(-8, 8),
        duration: 0.45,
        stagger: 0.04,
        ease: 'back.out(1.5)',
      })
      .from('.intro-mark', { autoAlpha: 0, scale: 0.8, duration: 0.4, ease: 'power3.out' }, 0.25)
      .add(() => introDone(), '+=0.15')
      .to(
        tiles,
        { scale: 1.25, autoAlpha: 0, y: -30, duration: 0.35, stagger: 0.02, ease: 'power2.in' },
        '<',
      )
      .to('.intro-mark', { autoAlpha: 0, scale: 1.1, duration: 0.25 }, '<')
      .to(root, { autoAlpha: 0, duration: 0.3 }, '-=0.15')
    return () => {
      tl.kill()
      introDone()
    }
  }, [on])

  if (!on) return null
  return (
    <div className="intro" ref={ref} aria-hidden="true" style={{ visibility: 'hidden' }}>
      {TILES.map((t, i) => (
        <span
          key={i}
          className={`intro-t intro-t--${t.k}`}
          style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, height: `${t.h}%` }}
        />
      ))}
      <img
        className="intro-mark"
        src="/img/miraee-logo-orange.svg"
        alt=""
        width="169"
        height="42"
      />
    </div>
  )
}
