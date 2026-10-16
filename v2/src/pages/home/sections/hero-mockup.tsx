import * as React from 'react'

import styles from './hero-mockup.module.css'

/**
 * The product, shown as itself: the Miraee app on a phone (a mock-up supplied by the owner, `public/img/hero-app-phone.webp`).
 * It rises into the hero as you scroll (it reads `--p` from its Scene), floats gently, and leans a little toward the pointer.
 */
export function HeroMockup() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    let x = 0
    let y = 0
    const apply = () => {
      frame = 0
      el.style.setProperty('--mx', x.toFixed(3))
      el.style.setProperty('--my', y.toFixed(3))
    }
    const onMove = (e: PointerEvent) => {
      x = (e.clientX / window.innerWidth) * 2 - 1
      y = (e.clientY / window.innerHeight) * 2 - 1
      if (!frame) frame = requestAnimationFrame(apply)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className={styles.stage}>
      <div className={styles.glow} aria-hidden="true" />
      <img
        className={styles.phone}
        src="/img/hero-app-phone.webp"
        width={800}
        height={1422}
        alt="The Miraee app on a phone: the assistant, with flight options to Delhi in policy"
        fetchPriority="high"
      />
    </div>
  )
}
