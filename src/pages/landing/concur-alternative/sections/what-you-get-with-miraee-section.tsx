import { Badge } from '@/components/ui/badge'

export function WhatYouGetWithMiraeeSection() {
  return (
    <section className="mr-paper mr-section" aria-labelledby="gets-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="gets-h">
            What you get with Miraee
          </h2>
          <ul className="gets">
            <li>
              <strong>Your policy on every booking.</strong> Options are marked in or out of policy.
            </li>
            <li>
              <strong>Approvals only when something is out of policy.</strong> Approvers see the
              trips that need a decision.
            </li>
            <li>
              <strong>Every trip with its budget and GL code.</strong> A finance dashboard and a
              full audit log.
            </li>
            <li>
              <strong>New options when plans change.</strong> Travelers get an alert and confirm the
              change.
            </li>
            <li>
              <strong>Your cards stay.</strong> Keep the corporate cards you already use.
            </li>
          </ul>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="mr-ledger-wrap card-shadow ledger-card"
            style={{ background: 'var(--mr-white)' }}
          >
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">3 trips</span>
            </div>
            <table
              className="mr-ledger"
              aria-label="A finance ledger of trips with budgets, policy status and GL codes."
            >
              <caption>Product view with illustrative data.</caption>
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
            </table>
          </div>
        </figure>
      </div>
    </section>
  )
}
