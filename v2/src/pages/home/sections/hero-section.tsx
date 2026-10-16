import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { HeroMockup } from './hero-mockup'
import { Button } from '@/components/ui/button'
import shared from './home-shared.module.css'
import styles from './hero-section.module.css'

/** One viewport, one idea: the promise on the left, the product mock-up on the right, set in 3D. */
export function HeroSection() {
  return (
    <Scene
      steps={1}
      run={50}
      className={`${shared.light} ${styles.scene}`}
      aria-labelledby="home-hero-h"
      data-route-start
    >
      <div className={`${shared.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`sr-only ${styles.pre}`}>Business travel and expense software</p>
          <h1 id="home-hero-h" className={`${shared.display} ${styles.title}`}>
            <span className={styles.line}>
              <span>Business travel.</span>
            </span>
            <span className={styles.line}>
              <span className={styles.accent}>Every dollar in view.</span>
            </span>
          </h1>
          <div className={styles.body}>
            <p className={`${shared.lead} ${styles.lead}`}>
              Miraee is business travel and expense software. Your people book inside company
              policy, and finance sees every trip with its budget and GL code.
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
            <p className={`${shared.small} ${styles.note}`}>
              Free to sign up and onboard, at any company size. Built by Tabhi, the company behind
              the Mondee travel marketplace. Keep the corporate cards you already use.
            </p>
          </div>
        </div>
        <div className={styles.object}>
          <HeroMockup />
        </div>
      </div>
    </Scene>
  )
}
