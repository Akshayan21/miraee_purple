import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { Button } from '@/components/ui/button'
import styles from './who-is-behind-miraee-section.module.css'

/** A calm, full-bleed statement: the vault's rings settle and a single line draws across. */
export function WhoIsBehindMiraeeSection() {
  return (
    <Scene
      steps={1}
      run={70}
      fill
      className={`mr-paper ${styles.scene}`}
      aria-labelledby="who-h"
      data-stop="3"
      data-stop-y="150"
    >
      <span className={styles.rings} aria-hidden="true" />
      <Container className={`mr-container ${styles.grid}`}>
        <h2 className={styles.title} id="who-h">
          Who is behind Miraee
        </h2>
        <span className={styles.rule} aria-hidden="true" />
        <div className={styles.body}>
          <p className={styles.text}>
            Miraee is built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/company">About the company</Link>
            </Button>
          </p>
        </div>
      </Container>
    </Scene>
  )
}
