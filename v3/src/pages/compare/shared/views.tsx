import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

/** The finance ledger, as on V1: three October trips, one of them out of policy and circled. */
export function LedgerView() {
  return (
    <ProductCard
      className="mr-ledger-wrap card-shadow ledger-card"
      style={{ background: 'var(--mr-white)' }}
    >
      <div className="mr-ledger-wrap__head">
        <p className="mr-ledger-wrap__title">October trips</p>
        <span className="mr-label">3 trips</span>
      </div>
      <LedgerTable
        className="mr-ledger"
        aria-label="A finance ledger of trips with budgets, policy status and GL codes."
      >
        <thead>
          <tr>
            <th scope="col">Trip</th>
            <th scope="col" className="mr-num col-budget">
              Budget
            </th>
            <th scope="col" className="mr-num">
              Amount
            </th>
            <th scope="col">Policy</th>
            <th scope="col" className="mr-num">
              GL code
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client visit, Chicago</td>
            <td className="mr-num col-budget">$1,500.00</td>
            <td className="mr-num">$1,284.60</td>
            <td>
              <Badge variant="success">In policy</Badge>
            </td>
            <td className="mr-num">6200</td>
          </tr>
          <tr>
            <td>Site audit, Dallas</td>
            <td className="mr-num col-budget">$1,200.00</td>
            <td className="mr-num">$946.20</td>
            <td>
              <Badge variant="success">In policy</Badge>
            </td>
            <td className="mr-num">6200</td>
          </tr>
          <tr>
            <td>Sales kickoff, Denver</td>
            <td className="mr-num col-budget">$2,000.00</td>
            <td className="mr-num">
              <span className="mr-circled">
                $2,318.40
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
              <Badge variant="error">Out of policy</Badge>
            </td>
            <td className="mr-num">6200</td>
          </tr>
        </tbody>
      </LedgerTable>
    </ProductCard>
  )
}
