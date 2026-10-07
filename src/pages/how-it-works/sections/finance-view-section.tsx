import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function FinanceViewSection() {
  return (
    <section className="step-sec mr-paper" aria-labelledby="s6-h">
      <div className="mr-container split split--rev">
        <div className="split__copy">
          <p className="mr-eyebrow">Step 6</p>
          <h2 className="mr-h2" id="s6-h">
            Every trip arrives with its GL code and budget.
          </h2>
          <p className="mr-body">
            Finance sees every booking in one dashboard, with finance analytics and a full audit log
            of who booked what, and when.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/finance">See the finance view</Link>
            </Button>
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="mr-ledger-wrap card-shadow ledger-panel"
            role="img"
            aria-label="A finance ledger of October trips with amounts, budgets, policy status and GL codes."
          >
            <div aria-hidden="true">
              <div className="mr-ledger-wrap__head">
                <p className="mr-ledger-wrap__title">October trips</p>
                <span className="mr-label">4 trips</span>
              </div>
              <table className="mr-ledger">
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
                  <tr>
                    <td>Partner review, Atlanta</td>
                    <td className="mr-num col-budget">$1,400.00</td>
                    <td className="mr-num">$1,106.75</td>
                    <td>
                      <Badge variant="success">In policy</Badge>
                    </td>
                    <td className="mr-num">6210</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
