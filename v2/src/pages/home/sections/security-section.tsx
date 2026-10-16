import { Link } from 'react-router-dom'

import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import shared from './home-shared.module.css'
import styles from './security-section.module.css'

const GATES = [
  { icon: '/img/icons/check-orange.svg', label: 'Approvals' },
  { icon: '/img/icons/file-text-orange.svg', label: 'Audit log' },
  { icon: '/img/icons/shield-check-orange.svg', label: 'Security pack' },
]

/** Trust, said once and plainly: a statement, then three controls in a hairline row. */
export function SecuritySection() {
  return (
    <section
      className={`${shared.light} ${shared.section} ${styles.section}`}
      aria-labelledby="sec-h"
      data-stop="6"
    >
      <div className={shared.wrap}>
        <div className={`${shared.stack} ${styles.copy}`}>
          <h2 className={shared.h2} id="sec-h">
            One approved travel tool for the whole company.
          </h2>
          <p className={shared.lead}>
            Every booking and change is recorded in the audit log. Ask for our security pack at any
            stage of your review.
          </p>
        </div>
        <Reveal as="ul" className={styles.row}>
          {GATES.map((g, i) => (
            <li key={g.label} className={styles.gate} style={{ '--i': i } as React.CSSProperties}>
              <img src={g.icon} alt="" width="36" height="36" />
              <span>{g.label}</span>
            </li>
          ))}
        </Reveal>
        <p className={`link-row ${styles.link}`}>
          <Button asChild variant="tertiary">
            <Link to="/security">Read about security</Link>
          </Button>
        </p>
      </div>
    </section>
  )
}
