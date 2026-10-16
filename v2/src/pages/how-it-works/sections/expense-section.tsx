import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { Badge } from '@/components/ui/badge'
import styles from './expense-section.module.css'

/** Step 5: the receipt and the card charge slide in from opposite edges and lock together. */
export function ExpenseSection() {
  return (
    <Scene
      steps={1}
      run={110}
      className={`hiw-flat mr-paper ${styles.scene}`}
      aria-labelledby="s5-h"
      data-stop="4"
      data-stop-y="150"
    >
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Step 5</p>
          <h2 className={styles.h2} id="s5-h">
            Receipts match to card charges
          </h2>
          <p className={styles.body}>
            Upload a receipt. Miraee matches it to the card charge, checks it against policy and
            tracks reimbursements.
          </p>
        </div>
        <figure className={styles.figure}>
          <div
            className={styles.match}
            role="img"
            aria-label="A hotel receipt matched to its card charge."
          >
            <div className={styles.pair} aria-hidden="true">
              <div className={`match__card ${styles.card} ${styles.left}`}>
                <p className="match__label">
                  <img src="/img/icons/receipt.svg" alt="" width="18" height="18" />
                  Receipt
                </p>
                <p className="match__name">Hotel, 2 nights, Chicago</p>
                <p className="match__meta">Oct 6 to Oct 8 · Priya N.</p>
                <p className="match__amt">$482.20</p>
              </div>
              <span className={styles.join}></span>
              <div className={`match__card ${styles.card} ${styles.right}`}>
                <p className="match__label">
                  <img src="/img/icons/credit-card.svg" alt="" width="18" height="18" />
                  Card charge
                </p>
                <p className="match__name">Corporate card ending 4417</p>
                <p className="match__meta">Posted Oct 8 · Client visit, Chicago</p>
                <p className="match__amt">$482.20</p>
              </div>
              <Badge variant="success" tick className={styles.status}>
                Matched · In policy
              </Badge>
            </div>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Scene>
  )
}
