import { Section, Container } from '@/components/layout/content-layout'
import { Badge } from '@/components/ui/badge'

export function ExpenseSection() {
  return (
    <Section className="step-sec" aria-labelledby="s5-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <p className="mr-eyebrow">Step 5</p>
          <h2 className="mr-h2" id="s5-h">
            Receipts matched to card charges.
          </h2>
          <p className="mr-body">
            Upload a receipt and Miraee matches it to the card charge and checks it against policy.
            Reimbursements are tracked.
          </p>
        </div>
        <div className="split__visual">
          <figure
            className="view"
            role="img"
            aria-label="A hotel receipt matched to its card charge."
          >
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
