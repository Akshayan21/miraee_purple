import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

export function ApproveSection() {
  return (
    <Section className="step-sec" aria-labelledby="s3-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <p className="mr-eyebrow">Step 3</p>
          <h2 className="mr-h2" id="s3-h">
            Approvals only when something is out of policy.
          </h2>
          <p className="mr-body">
            Trips inside policy go ahead. Anything out of policy goes to an approver. Approvers see
            only the trips that need a decision.
          </p>
        </div>
        <div className="split__visual">
          <figure
            className="view"
            role="img"
            aria-label="An approval request for a hotel above the policy limit."
          >
            <ProductCard className="mock approval" aria-hidden="true">
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
          </figure>
          <p className="mr-caption fig-cap">Product view with illustrative data.</p>
        </div>
      </Container>
    </Section>
  )
}
