import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import styles from './set-it-once-section.module.css'

/** Set once: the settings ledger rises into the stage and each cost center is read in turn. */
export function SetItOnceSection() {
  return (
    <Scene steps={3} run={240} className={`mr-plum ${styles.scene}`} aria-labelledby="once-h">
      <Container className={`mr-container ${styles.grid}`}>
        <h2 className={`mr-h2 ${styles.title}`} id="once-h">
          Set policy, GL codes and budgets once
        </h2>
        <p className={`mr-body ${styles.body}`}>
          Miraee applies them to every booking. Options are marked in or out of policy, and only
          exceptions go to an approver.
        </p>
        <figure className={styles.figure}>
          <div
            className={`view ${styles.view}`}
            role="img"
            aria-label="Settings screen for GL codes and travel budgets."
          >
            <ProductCard className={`mock mock--wide ${styles.card}`} aria-hidden="true">
              <div className="mock__head">
                <div>
                  <p className="mock__title">GL codes and budgets</p>
                  <p className="mock__sub">Applied to every booking</p>
                </div>
                <span className="mr-label">Finance settings</span>
              </div>
              <LedgerTable className={`mr-ledger ${styles.table}`}>
                <thead>
                  <tr>
                    <th>Cost center</th>
                    <th className="mr-num">GL code</th>
                    <th className="mr-num">Budget a trip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.r0}>
                    <td>Sales travel</td>
                    <td className="mr-num">6200</td>
                    <td className="mr-num">$2,000.00</td>
                  </tr>
                  <tr className={styles.r1}>
                    <td>Client services</td>
                    <td className="mr-num">6210</td>
                    <td className="mr-num">$1,500.00</td>
                  </tr>
                  <tr className={styles.r2}>
                    <td>Training and events</td>
                    <td className="mr-num">6230</td>
                    <td className="mr-num">$1,200.00</td>
                  </tr>
                </tbody>
              </LedgerTable>
            </ProductCard>
          </div>
          <figcaption className={`mr-caption ${styles.cap}`}>
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Scene>
  )
}
