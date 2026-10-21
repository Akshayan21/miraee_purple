import * as React from 'react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { useScrollScene } from '@/components/scroll/use-scroll-scene'
import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import shared from '../home-shared.module.css'
import styles from './spend-section.module.css'

const TITLE = "Want proof first? Review last year's travel.".split(' ')
/** The last three words carry the ask and are picked out in orange, as the pinned statement did. */
const ACCENT_FROM = TITLE.length - 3

/** The pinned scene needs room for all of the copy, so it only pins on tall, wide screens. */
const PIN =
  '(min-width: 1024px) and (min-height: 820px) and (prefers-reduced-motion: no-preference)'
/** Everywhere else (phones, tablets, short laptops) the same reveal plays as the section scrolls through, unpinned. */
const FLOW =
  '(prefers-reduced-motion: no-preference) and (not ((min-width: 1024px) and (min-height: 820px)))'

/**
 * The spend review offer, closing the page. It borrows the pinned statement's motion: every line starts dim and comes
 * up to full strength one after another as you scroll (the headline word by word), a rule draws under the headline,
 * and the findings card settles in last. On tall desktop screens the section pins while this plays; elsewhere it plays
 * as the section scrolls past. With reduced motion it is a plain, fully visible section.
 */
export function SpendSection() {
  const root = React.useRef<HTMLElement>(null)

  const reveal =
    (pin: boolean) =>
    ({ gsap }: { gsap: typeof import('gsap').gsap }) => {
      const lit = gsap.utils.toArray<HTMLElement>('[data-lit]')
      gsap.set('[data-w]', { opacity: 0.16 })
      gsap.set(lit, { opacity: 0.16 })
      gsap.set('[data-rule]', { scaleX: 0 })
      gsap.set('[data-card]', { opacity: 0, y: 70, rotationY: -14, transformPerspective: 1200 })
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: pin
          ? { trigger: root.current, start: 'top top', end: '+=230%', pin: true, scrub: 0.6 }
          : { trigger: root.current, start: 'top 75%', end: 'bottom 85%', scrub: 0.6 },
      })
      tl.to('[data-context]', { opacity: 1, duration: 1 })
        .to('[data-w]', { opacity: 1, stagger: 0.5 }, '>-0.2')
        .to('[data-rule]', { scaleX: 1, duration: 2 }, '>-0.5')
        .to(
          lit.filter((el) => !el.hasAttribute('data-context')),
          { opacity: 1, stagger: 0.55 },
          '>-1',
        )
        .to(
          '[data-card]',
          { opacity: 1, y: 0, rotationY: 0, duration: 3, ease: 'power2.out' },
          '<0.4',
        )
    }

  useScrollScene(root, reveal(true), PIN)
  useScrollScene(root, reveal(false), FLOW)

  return (
    <section
      ref={root}
      className={`${shared.night} ${styles.scene} mo-skip`}
      aria-labelledby="spend-h"
    >
      <div className={styles.stage}>
        <div className={styles.window}>
          <div className={shared.grain} aria-hidden="true" />

          <div className={styles.inner}>
            <div className={styles.copy}>
              <p className={styles.context} data-lit data-context>
                Business travel spending is forecast to rise 7.2% in 2026, while the number of trips
                rises 1.3%.
              </p>
              <h2 id="spend-h" className={styles.title} aria-label={TITLE.join(' ')}>
                {TITLE.map((w, i) => (
                  <span
                    key={i}
                    data-w
                    aria-hidden="true"
                    className={i >= ACCENT_FROM ? styles.hot : undefined}
                  >
                    {w}{' '}
                  </span>
                ))}
              </h2>
              <span className={styles.rule} data-rule aria-hidden="true" />
              <p className={styles.lead} data-lit>
                Send one booking report from your agency or expense system. We review every trip
                using your own data.
              </p>
              <p className={styles.listTitle} data-lit>
                What the review shows
              </p>
              <ul className={styles.list}>
                {[
                  'Bookings made outside your travel program',
                  'Spend outside policy',
                  'The cost of booking late, on your own routes',
                  'Unused or expired tickets',
                ].map((item) => (
                  <li key={item} data-lit>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.note} data-lit>
                Every finding comes from your file. Any savings figure is a dollar range, with the
                method and data period shown. The report is yours to keep.
              </p>
              <p className={styles.note} data-lit>
                Optional. You can sign up without one.
              </p>
              <div className={styles.actions} data-lit>
                <Button asChild variant="secondary">
                  <DialogLink to="/spend-review" dialog="review">
                    Get a spend review
                  </DialogLink>
                </Button>
              </div>
            </div>

            <div className={styles.aside} data-card>
              <ProductCard className="mr-paper mr-ledger-wrap card-shadow">
                <div className="mr-ledger-wrap__head">
                  <p className="mr-ledger-wrap__title">Spend review findings</p>
                  <span className="mr-label">Last year</span>
                </div>
                <LedgerTable className="mr-ledger">
                  <thead>
                    <tr>
                      <th scope="col">Finding</th>
                      <th scope="col" className="mr-num">
                        Trips
                      </th>
                      <th scope="col" className="mr-num">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bookings outside your travel program</td>
                      <td className="mr-num">214</td>
                      <td className="mr-num">$186,420.00</td>
                    </tr>
                    <tr>
                      <td>Spend outside policy</td>
                      <td className="mr-num">131</td>
                      <td className="mr-num">
                        <span className="mr-circled">
                          $92,318.40
                          <svg
                            className="mr-line"
                            viewBox="0 0 260 130"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58"></path>
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>The cost of booking late</td>
                      <td className="mr-num">388</td>
                      <td className="mr-num">$64,905.10</td>
                    </tr>
                    <tr>
                      <td>Unused or expired tickets</td>
                      <td className="mr-num">47</td>
                      <td className="mr-num">$21,760.00</td>
                    </tr>
                  </tbody>
                </LedgerTable>
              </ProductCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
