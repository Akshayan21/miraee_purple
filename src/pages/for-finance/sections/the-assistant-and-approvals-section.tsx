import { Badge } from '@/components/ui/badge'

export function TheAssistantAndApprovalsSection() {
  return (
    <section className="step-sec" aria-labelledby="appr-h">
      <div className="mr-container split split--rev">
        <div className="split__copy">
          <h2 className="mr-h2" id="appr-h">
            The assistant suggests. Your approvers decide.
          </h2>
          <p className="mr-body">
            Most finance leaders want AI to recommend, with a person approving.
            <sup>
              <a href="#src-2" aria-label="Source 2">
                2
              </a>
            </sup>{' '}
            Miraee works that way on every booking.
          </p>
        </div>
        <div className="split__visual">
          <figure
            className="view"
            role="img"
            aria-label="An approval request for an out-of-policy hotel."
          >
            <div className="mock approval" aria-hidden="true">
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
            </div>
          </figure>
          <p className="mr-caption fig-cap">Product view with illustrative data.</p>
        </div>
      </div>
    </section>
  )
}
