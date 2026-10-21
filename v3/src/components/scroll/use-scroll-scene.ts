import * as React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Pinned, scrubbed scenes only run on large screens for visitors who have not asked for reduced motion. */
export const SCROLL_MOTION = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'

/**
 * Runs `setup` inside a GSAP matchMedia context scoped to `root`, so every selector resolves inside the section and
 * everything (tweens, ScrollTriggers, pins, inline styles) is reverted on unmount or when the media query stops matching.
 * Outside the query the section is its plain, fully visible, stacked layout.
 */
export function useScrollScene(
  root: React.RefObject<HTMLElement | null>,
  setup: (api: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void,
  query: string = SCROLL_MOTION,
) {
  React.useEffect(() => {
    const el = root.current
    if (!el) return
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()
    mm.add(
      query,
      () => {
        setup({ gsap, ScrollTrigger })
      },
      el,
    )
    // Fonts and images change layout; measure again once they have settled.
    const settle = () => ScrollTrigger.refresh()
    void document.fonts?.ready.then(settle)
    window.addEventListener('load', settle)
    return () => {
      window.removeEventListener('load', settle)
      mm.revert()
    }
    // The setup closure is created once per mount by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
