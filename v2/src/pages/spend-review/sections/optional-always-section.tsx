import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import styles from './optional-always-section.module.css'

/** A calm full-bleed statement: the photograph slowly settles as the section arrives. */
export function OptionalAlwaysSection() {
  return (
    <Scene steps={1} run={60} fill className={`mr-plum ${styles.scene}`} aria-labelledby="opt-h">
      <picture>
        <source srcSet="/img/document/spend-review-review-optional-1.webp" type="image/webp" />
        <img
          className={styles.bg}
          src="/img/document/spend-review-review-optional-1.jpg"
          width="2046"
          height="1364"
          alt="A traveler relaxes in an airport lounge with his feet on his suitcase as a plane takes off."
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className={styles.tint} aria-hidden="true" />
      <Container className={`mr-container ${styles.content}`}>
        <div className={styles.block}>
          <h2 className={`mr-h2 ${styles.title}`} id="opt-h">
            We show our work.
          </h2>
          <p className={`mr-body ${styles.body}`}>
            Every finding comes from the file you send, so your controller can check every line. Any
            savings figure is a dollar range, with the method and data period shown. The report is
            yours to keep.
          </p>
        </div>
        <div className={styles.block}>
          <h2 className={`mr-h2 ${styles.title}`}>Ready when you are</h2>
          <p className={`mr-body ${styles.body}`}>
            We agree timing with you when your file arrives. The review is optional, and you can
            sign up without one.
          </p>
          <div className={`mr-btn-row ${styles.actions}`}>
            <Button asChild>
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          </div>
        </div>
      </Container>
    </Scene>
  )
}
