import { PeopleScene } from '@/components/sections/people-scene'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function SpendReviewSection() {
  return (
    <PeopleScene
      labelledBy="spend-h"
      tone="paper"
      plate="plum"
      person={{
        src: '/img/px37409441-finance-leader.png',
        webp: '/img/px37409441-finance-leader.webp',
        alt: 'A finance leader in a tweed blazer smiles in the office.',
        width: 977,
        height: 1100,
      }}
      personSide="left"
      asideAt="bottom-right"
      layout="stack"
      asideWidth="min(100%, 440px)"
      lean="10%"
      aside={
        <ProductCard className="mr-paper mr-ledger-wrap card-shadow">
          <div className="mr-ledger-wrap__head">
            <p className="mr-ledger-wrap__title">Spend review findings</p>
            <span className="mr-label">Last year</span>
          </div>
          <LedgerTable className="mr-ledger">
            <thead>
              <tr>
                <th scope="col">Finding</th>
                <th scope="col" className="mr-num">
                  Trips
                </th>
                <th scope="col" className="mr-num">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bookings outside your travel program</td>
                <td className="mr-num">214</td>
                <td className="mr-num">$186,420.00</td>
              </tr>
              <tr>
                <td>Spend outside policy</td>
                <td className="mr-num">131</td>
                <td className="mr-num">
                  <span className="mr-circled">
                    $92,318.40
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
                <td>The cost of booking late</td>
                <td className="mr-num">388</td>
                <td className="mr-num">$64,905.10</td>
              </tr>
              <tr>
                <td>Unused or expired tickets</td>
                <td className="mr-num">47</td>
                <td className="mr-num">$21,760.00</td>
              </tr>
            </tbody>
          </LedgerTable>
        </ProductCard>
      }
    >
      <p className="context">
        Business travel spending is forecast to rise 7.2% in 2026, while the number of trips rises
        1.3%.
      </p>
      <h2 className="mr-h2" id="spend-h">
        Want proof first? Review last year's travel.
      </h2>
      <p className="mr-body">
        Send one booking report from your agency or expense system. We review every trip using your
        own data.
      </p>
      <p className="list-title">What the review shows</p>
      <ul className="list">
        <li>Bookings made outside your travel program</li>
        <li>Spend outside policy</li>
        <li>The cost of booking late, on your own routes</li>
        <li>Unused or expired tickets</li>
      </ul>
      <p className="mr-body note">
        Every finding comes from your file. Any savings figure is a dollar range, with the method
        and data period shown. The report is yours to keep.
      </p>
      <p className="mr-body note">Optional. You can sign up without one.</p>
      <div className="mr-btn-row" style={{ marginTop: '24px' }}>
        <Button asChild variant="secondary">
          <DialogLink to="/spend-review" dialog="review">
            Get a spend review
          </DialogLink>
        </Button>
      </div>
    </PeopleScene>
  )
}
