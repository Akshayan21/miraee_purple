import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './section-progress.module.css'

/** An orange chapter boundary draws as the section enters; it never obscures content. */
export function SectionProgress() {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const line = ref.current
    if (!line) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: line.parentElement,
              start: 'top 95%',
              end: 'top 35%',
              scrub: 0.65,
            },
          },
        )
      },
      line,
    )
    return () => media.revert()
  }, [])
  return <span ref={ref} className={styles.line} aria-hidden="true" />
}
