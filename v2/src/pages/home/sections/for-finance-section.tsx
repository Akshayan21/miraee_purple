import { Link } from 'react-router-dom'

import { Reveal } from '@/components/scenes/reveal'
import { ScrollNumber } from '@/components/scenes/scene'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import shared from './home-shared.module.css'
import styles from './for-finance-section.module.css'

/** The landing: a trip tag fills in line by line as it arrives, ending on the GL code and the total. */
export function ForFinanceSection() {
  return (
    <section
      className={`${shared.tint} ${shared.section} ${styles.section}`}
      aria-labelledby="fin-h"
      data-stop="5"
    >
      <div className={`${shared.wrap} ${styles.grid}`}>
        <Reveal className={styles.tagWrap}>
          <div className={`mr-paper mr-trip-tag ${styles.tag}`}>
            <div className="mr-trip-tag__head">
              <div>
                <p className="mr-trip-tag__title">Client visit, Chicago</p>
                <p className="mr-trip-tag__sub">Oct 6 to Oct 8 · AUS to ORD</p>
              </div>
              <Badge variant="success">In policy</Badge>
            </div>
            <dl className={styles.parts}>
              <dt style={{ '--i': 0 } as React.CSSProperties}>Flight</dt>
              <dd style={{ '--i': 0 } as React.CSSProperties}>$512.40</dd>
              <dt style={{ '--i': 1 } as React.CSSProperties}>Hotel, 2 nights</dt>
              <dd style={{ '--i': 1 } as React.CSSProperties}>$482.20</dd>
              <dt style={{ '--i': 2 } as React.CSSProperties}>Ground and meals</dt>
              <dd style={{ '--i': 2 } as React.CSSProperties}>$290.00</dd>
              <dt style={{ '--i': 3 } as React.CSSProperties}>GL code</dt>
              <dd style={{ '--i': 3 } as React.CSSProperties}>
                <span className="mr-circled">
                  GL 6200
                  <svg
                    className={`mr-line ${styles.ring}`}
                    viewBox="0 0 260 130"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58"></path>
                  </svg>
                </span>
              </dd>
              <dt className="mr-trip-tag__total" style={{ '--i': 4 } as React.CSSProperties}>
                Total
              </dt>
              <dd className="mr-trip-tag__total" style={{ '--i': 4 } as React.CSSProperties}>
                $1,284.60
              </dd>
            </dl>
          </div>
        </Reveal>

        <div className={`${shared.stack} ${styles.copy}`}>
          <h2 className={shared.h2} id="fin-h">
            Every trip, with its budget and GL code.
          </h2>
          <ul className={styles.list}>
            <li>Set policy, GL codes and budgets once.</li>
            <li>One finance dashboard and a full audit log.</li>
            <li>Receipts matched to card charges and checked against policy.</li>
            <li>Keep the corporate cards you already use.</li>
          </ul>
          <p className={styles.stat}>
            <span className={shared.figure}>
              <small>Only </small>
              <ScrollNumber value={12} suffix="%" />
            </span>{' '}
            of travel programs have their data in one place.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/finance">See the finance view</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
