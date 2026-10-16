import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import styles from './the-assistant-and-approvals-section.module.css'

/** Approvals: the card flags the rate over the limit, then the approver's button lights as the second sentence does. */
export function TheAssistantAndApprovalsSection() {
  return (
    <Scene steps={3} run={240} className={`mr-plum ${styles.scene}`} aria-labelledby="appr-h">
      <Container className={`mr-container ${styles.grid}`}>
        <div className={styles.visual}>
          <figure
            className={`view ${styles.fig}`}
            role="img"
            aria-label="An approval request for an out-of-policy hotel."
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
                <dd className={styles.rate}>$289 a night</dd>
                <dt>Policy limit</dt>
                <dd>$250 a night</dd>
                <dt>Traveler</dt>
                <dd style={{ fontFamily: 'var(--mr-font-text)' }}>Marcus T.</dd>
              </dl>
              <div className="mock__actions">
                <span className={`mock__btn mock__btn--ink ${styles.approve}`}>Approve</span>
                <span className="mock__btn mock__btn--line">Decline</span>
              </div>
            </ProductCard>
          </figure>
          <p className={`mr-caption ${styles.cap}`}>Product view with illustrative data.</p>
        </div>
        <div className={styles.copy}>
          <h2 className={`mr-h2 ${styles.title}`} id="appr-h">
            <span className={styles.suggests}>The assistant suggests.</span>{' '}
            <span className={styles.decide}>Your approvers decide.</span>
          </h2>
          <p className={`mr-body ${styles.body}`}>
            Most finance leaders want AI to recommend, with a person approving. Miraee works that
            way on every booking.
          </p>
        </div>
      </Container>
    </Scene>
  )
}
