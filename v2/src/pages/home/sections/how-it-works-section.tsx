import { Link } from 'react-router-dom'

import { Scene } from '@/components/scenes/scene'
import { Button } from '@/components/ui/button'
import shared from './home-shared.module.css'
import styles from './how-it-works-section.module.css'
import { FinanceDashboardView, FlightsPhoneView, PolicyView } from './product-views'

const STEPS = [
  {
    title: 'Set your policy',
    body: 'We set up your company, your policy and your people with you.',
  },
  {
    title: 'Your people book',
    body: 'Employees ask the Miraee assistant for a trip and pick from options inside policy. The assistant suggests. Your approvers decide.',
  },
  {
    title: 'Finance sees every trip',
    body: 'Each booking arrives with its budget and GL code, in one dashboard with a full audit log.',
  },
]

/** Three steps in a calm pinned scene: the list advances on the left, the product view changes on the right. */
export function HowItWorksSection() {
  return (
    <Scene
      steps={STEPS.length}
      run={230}
      className={`${shared.tint} ${styles.scene}`}
      aria-labelledby="how-h"
      data-stop="2"
    >
      <div className={`${shared.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={shared.h2} id="how-h">
            How it works
          </h2>
          <p className={`${shared.lead} ${styles.lead}`}>
            One trip, from the first search to the finance view.
          </p>
          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={`${styles.step} ${styles['step' + i]}`}>
                <span className={styles.n} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>
                    <span className="sr-only">{i + 1}. </span>
                    {s.title}
                  </h3>
                  <p className={shared.body}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.link}>
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </p>
        </div>

        <div className={styles.stage}>
          <figure
            className={`mr-paper ${styles.card} ${styles.card0}`}
            role="img"
            aria-label="Travel policy setup screen"
          >
            <PolicyView />
          </figure>

          <figure
            className={`mr-paper ${styles.card} ${styles.card1}`}
            role="img"
            aria-label="Flight options marked in policy or out of policy"
          >
            <FlightsPhoneView />
          </figure>

          <figure
            className={`mr-paper ${styles.card} ${styles.card2}`}
            role="img"
            aria-label="Finance dashboard listing trips with budget and GL code"
          >
            <FinanceDashboardView />
          </figure>
        </div>
      </div>
    </Scene>
  )
}
