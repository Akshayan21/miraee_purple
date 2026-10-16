import { Link } from 'react-router-dom'

import { Scene, ScrollNumber } from '@/components/scenes/scene'
import { ProductPhone } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import t from '../tm-shared.module.css'
import styles from './when-plans-change-section.module.css'

/** The statistic leads; the traveler's phone rises from the bottom edge and the fix arrives in beats. */
export function WhenPlansChangeSection() {
  return (
    <Scene
      steps={3}
      run={240}
      className={`mr-plum ${t.plum} ${styles.scene}`}
      aria-labelledby="plans-h"
    >
      <div className={`${t.inner} ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={`${t.h2} ${styles.title}`} id="plans-h">
            An alert and new options when plans change
          </h2>
          <p className={t.body}>
            A delayed or canceled flight brings your traveler an alert and new options. They confirm
            one, and you see the change in the audit log.
          </p>
          <p className={styles.stat}>
            <span className={styles.fig}>
              <ScrollNumber value={64} suffix="%" />
            </span>{' '}
            of travel managers say changes and cancellations are hard in their booking tool.
          </p>
          <p className={styles.link}>
            <Button asChild variant="tertiary">
              <Link to="/when-plans-change">See what happens when plans change</Link>
            </Button>
          </p>
        </div>

        <div className={styles.stage}>
          <ProductPhone className={`phone phone--alert ${styles.phone}`} aria-hidden="true">
            <div className="phone__screen mr-plum">
              <div className="phone__bar">
                <span className="mr-fig">5:53</span>
                <span>Trips</span>
              </div>
              <div className="mr-alert">
                <span className="mr-alert__status">Flight delayed</span>
                <p className="mr-alert__msg">
                  Your 6:40 a.m. flight to Chicago is delayed.{' '}
                  <span>Here are two new options. Tap one to confirm.</span>
                </p>
              </div>
              <div
                className={`mr-options ${styles.options}`}
                role="radiogroup"
                aria-label="New flight options"
              >
                <button
                  className="mr-option"
                  type="button"
                  role="radio"
                  aria-checked="true"
                  tabIndex={-1}
                >
                  <span className="mr-option__time">8:15 a.m.</span>
                  <span className="mr-option__fare">Same fare</span>{' '}
                  <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                  <Badge variant="success">In policy</Badge>{' '}
                  <svg
                    className={`mr-line mr-option__tick ${styles.tick}`}
                    viewBox="0 0 80 64"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M6 34 C 14 42 22 50 28 57 C 42 38 58 20 76 5"></path>
                  </svg>
                </button>{' '}
                <button
                  className="mr-option"
                  type="button"
                  role="radio"
                  aria-checked="false"
                  tabIndex={-1}
                >
                  <span className="mr-option__time">9:50 a.m.</span>
                  <span className="mr-option__fare">Same fare</span>{' '}
                  <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                  <Badge variant="success">In policy</Badge>
                </button>
              </div>
              <div className={styles.confirm}>
                <Button asChild>
                  <span role="presentation">Confirm 8:15 a.m.</span>
                </Button>
              </div>
              <p className={`phone__cap ${styles.cap}`}>
                Your travel lead sees the change in the audit log.
              </p>
            </div>
          </ProductPhone>
        </div>
      </div>
    </Scene>
  )
}
