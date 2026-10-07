import { Section, Container } from '@/components/layout/content-layout'
import { ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

export function BookSection() {
  return (
    <Section className="step-sec" aria-labelledby="s2-h">
      <Container className="mr-container split split--rev">
        <div className="split__copy">
          <p className="mr-eyebrow">Step 2</p>
          <h2 className="mr-h2" id="s2-h">
            Ask for a trip. Pick an option inside policy.
          </h2>
          <p className="mr-body">
            Employees ask the Miraee assistant for a trip. Flights and hotels come back marked in
            policy or out of policy.
          </p>
          <p className="mr-body">The assistant suggests. Your approvers decide.</p>
          <p className="mr-body">
            Booking for someone else? Choose their name and book in a few steps.
          </p>
          <p className="mr-body">
            Global flight and hotel coverage from the Mondee travel marketplace.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="view"
            role="img"
            aria-label="Flight results from Austin to Chicago, each marked in policy or out of policy."
          >
            <ProductPhone className="phone phone--lg" aria-hidden="true">
              <div className="phone__screen mr-plum">
                <div className="phone__bar">
                  <span className="mr-fig">9:41</span>
                  <span>Flights</span>
                </div>
                <p className="phone__title">Austin to Chicago, round trip</p>
                <p className="phone__meta">Tue, Oct 6 to Thu, Oct 8 · 1 traveler</p>
                <ProductRow className="fl">
                  <span className="fl__time">7:05 a.m.</span>
                  <span className="fl__fare">$312.40</span>
                  <span className="fl__meta">Nonstop · Economy</span>
                  <Badge variant="success">In policy</Badge>
                </ProductRow>
                <ProductRow className="fl">
                  <span className="fl__time">9:30 a.m.</span>
                  <span className="fl__fare">$298.10</span>
                  <span className="fl__meta">Nonstop · Economy</span>
                  <Badge variant="success">In policy</Badge>
                </ProductRow>
                <ProductRow className="fl">
                  <span className="fl__time">11:45 a.m.</span>
                  <span className="fl__fare">$341.80</span>
                  <span className="fl__meta">Nonstop · Economy</span>
                  <Badge variant="success">In policy</Badge>
                </ProductRow>
                <ProductRow className="fl">
                  <span className="fl__time">12:15 p.m.</span>
                  <span className="fl__fare">$684.90</span>
                  <span className="fl__meta">Nonstop · Business</span>
                  <Badge variant="error">Out of policy</Badge>
                </ProductRow>
              </div>
            </ProductPhone>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}
