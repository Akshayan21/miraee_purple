import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/content-layout'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

/** Departure: the portrait sits inside concentric vault rings that widen as you scroll away. */
export function HeroSection() {
  return (
    <Scene
      steps={1}
      run={60}
      fill
      className={`mr-plum ${styles.scene}`}
      aria-labelledby="sec-hero-h"
      data-route-start
    >
      <Container className={`mr-container ${styles.grid}`}>
        <div className={styles.copy}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">Security</span>
              </li>
            </ol>
          </nav>
          <h1 className={styles.title} id="sec-hero-h">
            Security at Miraee
          </h1>
          <p className={styles.lead}>
            Miraee is business travel and expense software. One approved travel tool for the whole
            company, with a security pack ready when your review starts.
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <DialogLink to="#pack" dialog="pack">
                <span className="mr-btn__u">Request the security pack</span>
              </DialogLink>
            </Button>
            <Button asChild variant="tertiary">
              <Link to="/talk-to-sales">Talk to sales</Link>
            </Button>
          </div>
        </div>
        <figure className={styles.visual}>
          <span className={`${styles.ring} ${styles.r1}`} aria-hidden="true" />
          <span className={`${styles.ring} ${styles.r2}`} aria-hidden="true">
            <i className={styles.dot} />
          </span>
          <span className={`${styles.ring} ${styles.r3}`} aria-hidden="true" />
          <picture>
            <source srcSet="/img/document/security-hero-1.webp" type="image/webp" />
            <img
              className={styles.photo}
              src="/img/document/security-hero-1.jpg"
              width="1364"
              height="2046"
              alt="A man in a dark suit and red tie stands with his arms crossed."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Scene>
  )
}
