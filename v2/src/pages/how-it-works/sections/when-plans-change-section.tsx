import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { ProductPhone } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import styles from './when-plans-change-section.module.css'

/** Step 4: the original route is struck out and a new one is drawn as the phone's options arrive. */
export function WhenPlansChangeSection() {
  return (
    <Scene
      steps={3}
      run={200}
      className={`hiw-flat mr-plum ${styles.scene}`}
      aria-labelledby="s4-h"
      data-stop="3"
      data-stop-y="150"
    >
      <svg
        className={styles.paths}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <path className={styles.old} d="M -20 820 C 300 760 700 640 1460 330" pathLength="1" />
        <path
          className={styles.fresh}
          d="M -20 820 C 260 880 620 560 1000 520 C 1200 500 1340 400 1460 330"
          pathLength="1"
        />
      </svg>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Step 4</p>
          <h2 className={styles.h2} id="s4-h">
            Travelers get new options when plans change
          </h2>
          <p className={styles.body}>
            When a flight is delayed or canceled, your traveler gets an alert and new options to
            confirm. The change is logged for the travel lead and finance.
          </p>
          <p className={styles.link}>
            <Button asChild variant="tertiary">
              <Link to="/when-plans-change">See what happens when plans change</Link>
            </Button>
          </p>
        </div>
        <figure
          className={styles.figure}
          role="img"
          aria-label="Phone alert about a delayed flight with two new options."
        >
          <div className={styles.rise}>
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
                    className={`mr-option ${styles.opt1}`}
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
          <figcaption className="mr-caption fig-cap" aria-hidden="true">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Scene>
  )
}
