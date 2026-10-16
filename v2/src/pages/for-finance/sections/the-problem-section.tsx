import type { CSSProperties } from 'react'

import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import styles from './the-problem-section.module.css'

/** A fixed pseudo-random scatter, so server and browser agree. */
const fract = (n: number) => n - Math.floor(n)
const CELLS = Array.from({ length: 100 }, (_, i) => ({
  dx: Math.round((fract(Math.sin(i * 12.9898) * 43758.5453) - 0.5) * 90),
  dy: Math.round((fract(Math.sin(i * 78.233) * 24634.6345) - 0.5) * 80),
  r: Math.round((fract(Math.sin(i * 39.346) * 17391.1357) - 0.5) * 140),
  // The twelve that make up the "12%" sit in the first row and a half, so they read as one cluster.
  hit: i < 12,
}))

/** The problem: a hundred loose fragments gather into one grid, twelve of them lit. */
export function TheProblemSection() {
  return (
    <Scene
      steps={2}
      run={170}
      className={`mr-paper ${styles.scene}`}
      aria-label="Why finance teams need one view"
    >
      <Container className={`mr-container ${styles.row}`}>
        <p className={`stat-line ${styles.stat}`}>
          <span className={styles.fig}>12%</span> of travel programs have their data in one place.
        </p>
        <div className={styles.field} aria-hidden="true">
          {CELLS.map((c, i) => (
            <span
              key={i}
              className={`${styles.cell} ${c.hit ? styles.hit : ''}`}
              style={{ '--dx': c.dx, '--dy': c.dy, '--r': c.r } as CSSProperties}
            />
          ))}
        </div>
      </Container>
    </Scene>
  )
}
