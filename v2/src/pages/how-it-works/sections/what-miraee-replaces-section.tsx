import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import styles from './what-miraee-replaces-section.module.css'

/** Big type: the tools Miraee replaces are struck through as you scroll, and what you keep is underlined. */
export function WhatMiraeeReplacesSection() {
  return (
    <Scene
      steps={1}
      run={90}
      className={`hiw-flat mr-paper ${styles.scene}`}
      aria-labelledby="rep-h"
      data-stop="6"
      data-stop-y="150"
    >
      <Container className={styles.inner}>
        <h2 className={styles.h2} id="rep-h">
          What does Miraee replace?
        </h2>
        <p className={styles.answer}>
          Miraee replaces <span className={`${styles.struck} ${styles.s1}`}>your booking tool</span>{' '}
          and{' '}
          <span className={`${styles.struck} ${styles.s2}`}>
            your agency&apos;s routine flight and hotel bookings
          </span>
          . <span className={styles.kept}>You keep your corporate cards.</span>
        </p>
      </Container>
    </Scene>
  )
}
