import * as React from 'react'

import { SplitText, afterIntro, gsap, useMotion } from '@/lib/motion'

type KineticProps = {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
  className?: string
  id?: string
  /** Hero headlines wait for the page intro; others play when they scroll into view. */
  hero?: boolean
  children: React.ReactNode
}

/**
 * Kinetic headline: SplitText breaks the text into lines, each rising out of its own mask.
 * The server-rendered heading is plain text, so it reads fine without JavaScript or with reduced motion.
 */
export function Kinetic({ as: Tag = 'h2', className, id, hero, children }: KineticProps) {
  const ref = useMotion<HTMLElement>((el) => {
    let introDone = !hero
    let current: gsap.core.Tween | undefined
    const cancel = hero
      ? afterIntro(() => {
          introDone = true
          current?.play()
        })
      : () => {}
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      linesClass: 'ed-line',
      onSplit(self) {
        current = gsap.from(self.lines, {
          yPercent: 112,
          rotate: 2.5,
          transformOrigin: 'left bottom',
          duration: hero ? 1.1 : 0.95,
          ease: 'power4.out',
          stagger: hero ? 0.11 : 0.08,
          paused: hero && !introDone,
          scrollTrigger: hero ? undefined : { trigger: el, start: 'top 88%', once: true },
        })
        return current
      },
    })
    return () => {
      cancel()
      split.revert()
    }
  })
  const Comp = Tag as React.ElementType
  return (
    <Comp ref={ref} id={id} className={`ed-kin ${className ?? ''}`}>
      {children}
    </Comp>
  )
}
