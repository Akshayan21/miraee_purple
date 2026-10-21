import * as React from 'react'
import { Link } from 'react-router-dom'

import { useScrollScene } from '@/components/scroll/use-scroll-scene'
import { Button } from '@/components/ui/button'
import shared from '../home-shared.module.css'
import styles from './stack-section.module.css'

const GATES = [
  { icon: '/img/icons/check-orange.svg', label: 'Approvals' },
  { icon: '/img/icons/file-text-orange.svg', label: 'Audit log' },
  { icon: '/img/icons/shield-check-orange.svg', label: 'Security pack' },
]

/**
 * Three full-height cards in a vertical sticky stack: each pins at the top and the one beneath it sits back (scale and fade)
 * as the next slides over it. The stack ends on the closing call to action, the single light moment of the page.
 */
const CLOSE_LINES = [
  ['Put', 'every', 'trip'],
  ['in', 'one', 'place.'],
]

export function StackSection() {
  const root = React.useRef<HTMLElement>(null)

  useScrollScene(root, ({ gsap }) => {
    const cards = gsap.utils.toArray<HTMLElement>('[data-card]')
    cards.forEach((card, i) => {
      const next = cards[i + 1]
      if (!next) return
      gsap.to(card.querySelector('[data-card-in]'), {
        scale: 0.92,
        opacity: 0.45,
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top', scrub: true },
      })
    })
    /* The closing line: the pinned statement's word-by-word reveal. Words start dim and come up to full strength as the
       last card slides into place, then a rule draws under the line. */
    const closeCard = cards[cards.length - 1]
    if (closeCard) {
      gsap.set('[data-cw]', { opacity: 0.16 })
      gsap.set('[data-crule]', { scaleX: 0 })
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: closeCard, start: 'top 75%', end: 'top 5%', scrub: 0.6 },
        })
        .to('[data-cw]', { opacity: 1, stagger: 0.5 })
        .to('[data-crule]', { scaleX: 1, duration: 2 }, '>-0.5')
    }
    gsap.from('[data-rise]', {
      yPercent: 18,
      opacity: 0,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: root.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })
  })

  return (
    <section
      ref={root}
      className={`${shared.night} ${styles.stack}`}
      aria-label="Finance, security and getting started"
    >
      <div className={styles.card} data-card>
        <div className={`${styles.in} ${styles.finance}`} data-card-in>
          <p className={styles.fig} data-rise>
            <small>Only </small>12%
          </p>
          <div className={styles.copy}>
            <p className={styles.big} data-rise>
              of travel programs have their data in one place.
            </p>
            <ul className={styles.list} data-rise>
              <li>Set policy, GL codes and budgets once.</li>
              <li>One finance dashboard and a full audit log.</li>
              <li>Receipts matched to card charges.</li>
            </ul>
            <Button asChild variant="tertiary">
              <Link to="/finance">See the finance view</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.card} data-card>
        <div className={`${styles.in} ${styles.trust}`} data-card-in>
          <div className={styles.copy}>
            <h2 className={styles.h2} id="sec-h" data-rise>
              One approved travel tool for the whole company.
            </h2>
            <p className={styles.lead} data-rise>
              Every booking and change is recorded in the audit log.
            </p>
            <Button asChild variant="tertiary">
              <Link to="/security">Read about security</Link>
            </Button>
          </div>
          <ul className={styles.gates} data-rise>
            {GATES.map((g) => (
              <li key={g.label}>
                <img src={g.icon} alt="" width="28" height="28" />
                <span>{g.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.card} data-card>
        <div className={`${styles.in} ${styles.close}`} data-card-in>
          <h2 className={styles.closeTitle} aria-label="Put every trip in one place.">
            {CLOSE_LINES.map((line, li) => (
              <span key={li} className={styles.closeLine} aria-hidden="true">
                {line.map((w, i) => (
                  <span key={i} data-cw className={li === 1 ? styles.closeHot : undefined}>
                    {w}{' '}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <span className={styles.closeRule} data-crule aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
