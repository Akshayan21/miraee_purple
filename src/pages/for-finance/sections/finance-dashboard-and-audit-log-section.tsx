import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
export function FinanceDashboardAndAuditLogSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="audit-h">
      <Container className="mr-container split split--rev">
        <div className="split__copy">
          <h2 className="mr-h2" id="audit-h">
            A finance dashboard and a full audit log.
          </h2>
          <p className="mr-body">
            See who booked what, and when. Every booking and every change is recorded.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <ProductCard
            className="mr-ledger-wrap card-shadow audit-card"
            role="img"
            aria-label="Audit log showing who booked, approved and changed a trip, and when."
          >
            <div aria-hidden="true">
              <div className="mr-ledger-wrap__head">
                <p className="mr-ledger-wrap__title">Audit log</p>
                <span className="mr-label">October</span>
              </div>
              <LedgerTable className="mr-ledger">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Event</th>
                    <th className="col-by">By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="t">Oct 1</td>
                    <td className="t">9:12 a.m.</td>
                    <td>Booked · Client visit, Chicago</td>
                    <td className="col-by">Priya N.</td>
                  </tr>
                  <tr>
                    <td className="t">Oct 1</td>
                    <td className="t">9:40 a.m.</td>
                    <td>Approved · Denver hotel</td>
                    <td className="col-by">Dana R.</td>
                  </tr>
                  <tr>
                    <td className="t">Oct 6</td>
                    <td className="t">
                      <span className="mr-circled">
                        5:58 a.m.
                        <svg
                          className="mr-line"
                          viewBox="0 0 260 130"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58"></path>
                        </svg>
                      </span>
                    </td>
                    <td>
                      Changed · Chicago flight to <span className="nw">8:15 a.m.</span>
                    </td>
                    <td className="col-by">Priya N.</td>
                  </tr>
                  <tr>
                    <td className="t">Oct 8</td>
                    <td className="t">2:05 p.m.</td>
                    <td>Receipt matched · Chicago hotel</td>
                    <td className="col-by">Miraee</td>
                  </tr>
                </tbody>
              </LedgerTable>
            </div>
          </ProductCard>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}
