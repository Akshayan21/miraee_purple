import * as React from 'react'

import { useScrollScene } from '@/components/scroll/use-scroll-scene'
import shared from '../home-shared.module.css'
import styles from './statement-section.module.css'

const WORDS = 'Every trip, with its budget and GL code.'.split(' ')
/** The last four words carry the point and are picked out in orange. */
const ACCENT_FROM = WORDS.length - 4

/** One sentence, pinned: each word comes up to full strength as you scroll, then a line draws under it. */
export function StatementSection() {
  const root = React.useRef<HTMLElement>(null)

  useScrollScene(root, ({ gsap }) => {
    gsap.set('[data-w]', { opacity: 0.16 })
    gsap.set('[data-rule]', { scaleX: 0 })
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: '+=120%',
        pin: true,
        scrub: 0.6,
      },
    })
    tl.to('[data-w]', { opacity: 1, stagger: 0.5 }).to(
      '[data-rule]',
      { scaleX: 1, duration: 2 },
      '>-0.5',
    )
  })

  return (
    <section
      ref={root}
      className={`${shared.night} ${styles.scene}`}
      aria-label="Every trip, with its budget and GL code"
    >
      <div className={styles.stage}>
        <div className={styles.glow} aria-hidden="true" />
        <p className={`${shared.wrap} ${styles.text}`}>
          {WORDS.map((w, i) => (
            <span key={i} data-w className={`${styles.w} ${i >= ACCENT_FROM ? styles.hot : ''}`}>
              {w}{' '}
            </span>
          ))}
        </p>
        <span className={styles.rule} data-rule aria-hidden="true" />
      </div>
    </section>
  )
}
