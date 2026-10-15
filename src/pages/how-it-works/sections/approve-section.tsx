import styles from './approve-section.module.css'
import { VideoPanel } from '@/components/sections/video-panel'
import { ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

export function ApproveSection() {
  return (
    <VideoPanel
      video="panel-how"
      labelledBy="s3-h"
      aside={
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
      }
    >
      <p className="mr-eyebrow">Step 3</p>
      <h2 className="mr-h2" id="s3-h">
        Approvers see only the exceptions
      </h2>
      <p className="mr-body">
        Trips inside policy go ahead. Anything out of policy goes to an approver.
      </p>
    </VideoPanel>
  )
}
