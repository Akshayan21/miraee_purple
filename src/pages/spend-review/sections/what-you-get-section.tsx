import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
export function WhatYouGetSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="get-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="get-h">
            Four findings, measured from your own data.
          </h2>
          <p className="mr-body">The report is yours to keep.</p>
        </div>
        <div className="split__visual split__visual--wide">
          <ProductCard className="mr-ledger-wrap card-shadow findings">
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">Spend review findings</p>
              <span className="mr-label">Last year</span>
            </div>
            <LedgerTable className="mr-ledger">
              <caption>Product view with illustrative data.</caption>
              <thead>
                <tr>
                  <th scope="col">Finding</th>
                  <th scope="col">What it shows</th>
                  <th scope="col" className="mr-num">
                    Sample
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bookings outside your travel program</td>
                  <td>Trips booked away from your agency or booking tool</td>
                  <td className="mr-num">$186,420.00</td>
                </tr>
                <tr>
                  <td>Spend outside policy</td>
                  <td>Bookings above your policy limits</td>
                  <td className="mr-num">$92,318.40</td>
                </tr>
                <tr>
                  <td>The cost of booking late</td>
                  <td>Your own fares on the same routes, booked early versus late</td>
                  <td className="mr-num">
                    <span className="mr-circled">
                      $64,905.10
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
                </tr>
                <tr>
                  <td>Unused or expired tickets</td>
                  <td>Tickets your company paid for and never used</td>
                  <td className="mr-num">$21,760.00</td>
                </tr>
              </tbody>
            </LedgerTable>
          </ProductCard>
        </div>
      </Container>
    </Section>
  )
}
