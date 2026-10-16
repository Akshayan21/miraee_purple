import { Scene } from '@/components/scenes/scene'
import { ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import t from '../tm-shared.module.css'
import styles from './rollout-section.module.css'

const STAGES = [
  'Company',
  'Travel policy',
  'Employees',
  'Payment settings',
  'Admin training',
  'Finance training',
]

/** Rollout as a timeline that draws itself: the line runs, the six stages light up in order. */
export function RolloutSection() {
  return (
    <Scene
      steps={6}
      run={300}
      className={`mr-paper ${t.paper} ${styles.scene}`}
      aria-labelledby="roll-h"
    >
      <div className={`${t.inner} ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={`${t.h2} ${styles.title}`} id="roll-h">
            Free onboarding, policy and people included
          </h2>
          <p className={t.body}>
            We set up your company, policy and people with you, and train your admins and finance
            team.
          </p>
        </div>
        <figure className={styles.figure}>
          <ProductCard
            className={`mock mock--wide ${styles.card}`}
            role="img"
            aria-label="Onboarding checklist with six completed steps."
          >
            <div aria-hidden="true">
              <div className="mock__head">
                <p className="mock__title">Onboarding</p>
                <Badge variant="success" tick>
                  6 of 6 done
                </Badge>
              </div>
              <ol className={styles.timeline}>
                <li className={styles.rail} />
                {STAGES.map((s) => (
                  <li key={s} className={styles.stage}>
                    <span className={styles.node}>
                      <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                    </span>
                    <span className={styles.label}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ProductCard>
          <figcaption className={`${t.cap} ${styles.cap}`}>
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </Scene>
  )
}
