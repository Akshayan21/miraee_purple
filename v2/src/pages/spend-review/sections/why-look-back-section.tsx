import { Container } from '@/components/layout/content-layout'
import { Scene, ScrollNumber } from '@/components/scenes/scene'
import styles from './why-look-back-section.module.css'

/** Big type: two figures, the second slides up beneath the first. */
export function WhyLookBackSection() {
  return (
    <Scene steps={2} run={120} className={`mr-paper ${styles.scene}`} aria-label="Why look back">
      <Container className={`mr-container ${styles.wrap}`}>
        <p className={`${styles.big} ${styles.a}`}>
          Business travel spending is forecast to rise{' '}
          <ScrollNumber className={styles.fig} value={7.2} decimals={1} suffix="%" /> in 2026, while
          the number of trips rises{' '}
          <ScrollNumber className={styles.fig} value={1.3} decimals={1} suffix="%" />.
        </p>
        <p className={`${styles.big} ${styles.b}`}>
          <ScrollNumber className={styles.fig} value={72} suffix="%" /> of travel buyers say
          travelers book cheaper hotels outside the company program.
        </p>
      </Container>
    </Scene>
  )
}
