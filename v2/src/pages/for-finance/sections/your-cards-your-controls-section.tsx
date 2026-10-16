import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import styles from './your-cards-your-controls-section.module.css'

/** Your cards: one calm statement. A large empty card outline drifts slowly behind the words. */
export function YourCardsYourControlsSection() {
  return (
    <Scene steps={1} run={80} className={`mr-paper ${styles.scene}`} aria-labelledby="cards-h">
      <div className={styles.card} aria-hidden="true">
        <span className={styles.chip} />
        <span className={styles.stripe} />
      </div>
      <Container className={`mr-container ${styles.inner}`}>
        <h2 className={`mr-h2 ${styles.title}`} id="cards-h">
          Keep the corporate cards you already use.
        </h2>
        <p className={`mr-body ${styles.body}`}>
          Miraee replaces your booking tool and your agency's routine flight and hotel bookings.
          Your cards stay.
        </p>
      </Container>
    </Scene>
  )
}
