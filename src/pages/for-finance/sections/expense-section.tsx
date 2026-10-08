import { Section, Container } from '@/components/layout/content-layout'
import { Badge } from '@/components/ui/badge'

export function ExpenseSection() {
  return (
    <Section spacing="compact" className="step-sec" aria-labelledby="exp-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="exp-h">
            Receipts matched to card charges and checked against policy.
          </h2>
          <p className="mr-body">
            Travelers upload receipts. Miraee matches each one to its card charge and flags anything
            out of policy. Reimbursements are tracked in the same place.
          </p>
        </div>
        <div className="split__visual">
          <figure className="view" role="img" aria-label="A receipt matched to its card charge.">
            <div className="match" aria-hidden="true">
              <div className="match__card">
                <p className="match__label">
                  <img src="/img/icons/receipt.svg" alt="" width="18" height="18" />
                  Receipt
                </p>
                <p className="match__name">Hotel, 2 nights, Chicago</p>
                <p className="match__meta">Oct 6 to Oct 8 · Priya N.</p>
                <p className="match__amt">$482.20</p>
              </div>
              <span className="match__join"></span>
              <div className="match__card">
                <p className="match__label">
                  <img src="/img/icons/credit-card.svg" alt="" width="18" height="18" />
                  Card charge
                </p>
                <p className="match__name">Corporate card ending 4417</p>
                <p className="match__meta">Posted Oct 8 · Client visit, Chicago</p>
                <p className="match__amt">$482.20</p>
              </div>
              <Badge variant="success" tick className="match__status">
                Matched · In policy
              </Badge>
            </div>
          </figure>
          <p className="mr-caption fig-cap">Product view with illustrative data.</p>
        </div>
      </Container>
    </Section>
  )
}
