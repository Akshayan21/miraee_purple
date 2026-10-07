import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="mr-paper lp-hero section-bleed" aria-labelledby="hero-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-display" id="hero-h">
            See where your travel money goes.
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Every trip arrives with its budget and
            GL code. Free to sign up and onboard, at any company size.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
          <p className="mr-small hero__trust">
            Built by Tabhi, the company behind the Mondee travel marketplace. Keep the corporate
            cards you already use.
          </p>
        </div>
        <figure className="split__visual compose compose--lp" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px8367824-finance-lead.webp" type="image/webp" />{' '}
            <img
              className="compose__person"
              src="/img/px8367824-finance-lead.png"
              width="591"
              height="638"
              alt="A finance lead in a red blazer looks over her work, beside a ledger of trips with budgets and GL codes."
              fetchpriority="high"
            />
          </picture>
          <div className="compose__card mr-ledger-wrap card-shadow">
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">3 trips</span>
            </div>
            <table className="mr-ledger">
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
