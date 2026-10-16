import type { CSSProperties } from 'react'

import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { Badge } from '@/components/ui/badge'
import styles from './expense-section.module.css'

/** Empty receipt and charge outlines that reconcile alongside the real pair. They carry no text. */
function GhostRow({ s, tall }: { s: number; tall?: boolean }) {
  return (
    <div
      className={`${styles.row} ${styles.ghost} ${tall ? styles.tall : ''}`}
      style={{ '--s': s } as CSSProperties}
      aria-hidden="true"
    >
      <div className={`${styles.slot} ${styles.rcpt}`}>
        <span className={styles.sk} />
        <span className={`${styles.sk} ${styles.short}`} />
      </div>
      <span className={styles.join} />
      <div className={`${styles.slot} ${styles.chg}`}>
        <span className={styles.sk} />
        <span className={`${styles.sk} ${styles.short}`} />
        <span className={styles.tick} />
      </div>
    </div>
  )
}

/** Reconciliation: receipts slide in from the left, card charges from the right, and each pair snaps together as you scroll. */
export function ExpenseSection() {
  return (
    <Scene steps={1} run={320} className={`mr-plum ${styles.scene}`} aria-labelledby="exp-h">
      <video
        className={styles.bg}
        src="/video/panel-finance2.mp4"
        poster="/video/panel-finance2.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className={styles.tint} aria-hidden="true" />
      <Container className={`mr-container ${styles.grid}`}>
        <div className={styles.head}>
          <h2 className={`mr-h2 ${styles.title}`} id="exp-h">
            Receipts matched to card charges
          </h2>
          <p className={`mr-body ${styles.body}`}>
            Travelers upload receipts. Miraee matches each to its card charge, flags anything out of
            policy and tracks reimbursements.
          </p>
        </div>

        <div className={styles.board}>
          <GhostRow s={0} />
          <div className={styles.hideShort}>
            <GhostRow s={0.1} />
          </div>
          <div className={`${styles.row} ${styles.real}`} style={{ '--s': 0.2 } as CSSProperties}>
            <div className={`match__card ${styles.rcpt}`} aria-hidden="true">
              <p className="match__label">
                <img src="/img/icons/receipt.svg" alt="" width="18" height="18" />
                Receipt
              </p>
              <p className="match__name">Hotel, 2 nights, Chicago</p>
              <p className="match__meta">Oct 6 to Oct 8 · Priya N.</p>
              <p className="match__amt">$482.20</p>
            </div>
            <span className={styles.join} aria-hidden="true" />
            <div className={`match__card ${styles.chg}`} aria-hidden="true">
              <p className="match__label">
                <img src="/img/icons/credit-card.svg" alt="" width="18" height="18" />
                Card charge
              </p>
              <p className="match__name">Corporate card ending 4417</p>
              <p className="match__meta">Posted Oct 8 · Client visit, Chicago</p>
              <p className="match__amt">$482.20</p>
            </div>
            <Badge variant="success" tick className={styles.status} aria-hidden="true">
              Matched · In policy
            </Badge>
          </div>
          <div className={styles.hideShort}>
            <GhostRow s={0.34} />
          </div>
          <GhostRow s={0.44} />
        </div>
      </Container>
    </Scene>
  )
}
