import { Scene } from '@/components/scenes/scene'
import { ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import t from '../tm-shared.module.css'
import styles from './approvals-section.module.css'

const STATIONS = ['Traveler', 'Hotel', 'Policy limit', 'Needs approval']

/**
 * The approval chain: the request travels a pinned track and is stamped at each station,
 * then reaches the one place it needs a decision.
 */
export function ApprovalsSection() {
  return (
    <Scene
      steps={4}
      run={300}
      className={`mr-plum ${t.plum} ${styles.scene}`}
      aria-labelledby="appr-h"
    >
      <div className={`${t.inner} ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={`${t.h2} ${styles.title}`} id="appr-h">
            You approve only the exceptions
          </h2>
          <p className={t.body}>
            Trips inside policy go ahead. You see only the bookings that need a decision.
          </p>
        </div>

        <div className={styles.chain}>
          <ol className={styles.track} aria-hidden="true">
            <li className={styles.rail} />
            {STATIONS.map((s, i) => (
              <li key={s} className={styles.station} style={{ '--i': i } as React.CSSProperties}>
                <span className={styles.node}>
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span className={styles.label}>{s}</span>
              </li>
            ))}
          </ol>
          <figure className={styles.figure}>
            <div
              className={styles.rider}
              role="img"
              aria-label="An approval request for a booking above the policy limit."
            >
              <ProductCard className={`mock approval ${styles.card}`} aria-hidden="true">
                <div className="mock__head">
                  <div>
                    <p className="mock__title">Sales kickoff, Denver</p>
                    <p className="mock__sub">Hotel, 3 nights · Oct 20 to Oct 23</p>
                  </div>
                  <Badge variant="warning">Needs approval</Badge>
                </div>
                <dl>
                  <dt>Hotel</dt>
                  <dd>$289 a night</dd>
                  <dt>Policy limit</dt>
                  <dd>$250 a night</dd>
                  <dt>Traveler</dt>
                  <dd style={{ fontFamily: 'var(--mr-font-text)' }}>Marcus T.</dd>
                </dl>
                <div className="mock__actions">
                  <span className="mock__btn mock__btn--ink">Approve</span>
                  <span className="mock__btn mock__btn--line">Decline</span>
                </div>
              </ProductCard>
            </div>
            <figcaption className={`${t.cap} ${styles.cap}`}>
              Product view with illustrative data.
            </figcaption>
          </figure>
        </div>
      </div>
    </Scene>
  )
}
