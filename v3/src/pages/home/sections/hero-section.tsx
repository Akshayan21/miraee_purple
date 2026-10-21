import * as React from 'react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { useScrollScene } from '@/components/scroll/use-scroll-scene'
import { Button } from '@/components/ui/button'
import { FinanceDashboardView } from '../product-views'
import shared from '../home-shared.module.css'
import styles from './hero-section.module.css'

/**
 * Copy on the left, the product on the right, both fully in view. The scroll adds depth only: while the hero is pinned
 * the dashboard and phone drift at different speeds, then the section lets go.
 */
export function HeroSection() {
  const root = React.useRef<HTMLElement>(null)

  useScrollScene(root, ({ gsap }) => {
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: '+=70%',
        pin: true,
        scrub: 0.7,
      },
    })
    tl.fromTo('[data-h="phone"]', { yPercent: 5 }, { yPercent: -5 }, 0)
      .fromTo('[data-h="dash"]', { xPercent: 5, yPercent: -2 }, { xPercent: -4, yPercent: 4 }, 0)
      .to('[data-h="glow"]', { scale: 1.2 }, 0)
  })

  return (
    <section ref={root} className={`${shared.night} ${styles.scene}`} aria-labelledby="home-hero-h">
      <div className={styles.glow} data-h="glow" aria-hidden="true" />
      <div className={shared.grain} aria-hidden="true" />

      <div className={`${shared.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="sr-only">Business travel and expense software</p>
          <h1 id="home-hero-h" className={`${shared.display} ${styles.title}`}>
            <span className={styles.line}>
              <span>Business travel.</span>
            </span>
            <span className={styles.line}>
              <span className={styles.accent}>Every dollar in view.</span>
            </span>
          </h1>
          <p className={styles.lead}>
            Your people book inside company policy, and finance sees every trip.
          </p>
          <div className={`${shared.buttons} ${styles.actions}`}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
          <p className={shared.small}>
            Free to sign up and onboard, at any company size. Built by Tabhi, the company behind the
            Mondee travel marketplace. Keep the corporate cards you already use.
          </p>
        </div>

        <div
          className={styles.product}
          role="img"
          aria-label="The Miraee finance dashboard and the Miraee app on a phone"
        >
          <div className={`mr-paper ${styles.dash}`} data-h="dash">
            <FinanceDashboardView />
          </div>
          <img
            className={styles.phone}
            data-h="phone"
            src="/img/hero-app-phone.webp"
            width={800}
            height={1422}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
