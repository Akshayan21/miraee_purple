import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="mr-plum hero" aria-labelledby="hero-h">
      <div className="mr-container hero__grid">
        <div className="hero__copy">
          <p className="mr-eyebrow">Business travel and expense software</p>
          <h1 className="mr-display" id="hero-h">
            See where your travel money goes, and where you can spend less.
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Your people book flights and hotels
            inside company policy, and finance sees every trip with its budget and GL code. Free to
            sign up and onboard, at any company size.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
          <ul className="hero__points" aria-label="Why teams start with Miraee">
            <li>Free to sign up and onboard</li>
            <li>Policy on every booking</li>
            <li>Keep your corporate cards</li>
          </ul>
          <p className="mr-small hero__trust">
            Built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
        </div>
        <figure className="hero__visual" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px3932459-traveler-phone.webp" type="image/webp" />{' '}
            <img
              className="hero__person"
              src="/img/px3932459-traveler-phone.png"
              width="1100"
              height="964"
              alt="A business traveler in a trench coat takes a call on his phone, beside a finance report showing each trip with its amount, policy status and GL code."
            />
          </picture>
          <div className="hero__card mr-paper mr-ledger-wrap card-shadow">
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">3 trips</span>
            </div>
            <table className="mr-ledger">
              <caption>Product view with illustrative data.</caption>
              <thead>
                <tr>
                  <th scope="col">Trip</th>
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
                  <td className="mr-num">$1,284.60</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
                <tr>
                  <td>Site audit, Dallas</td>
                  <td className="mr-num">$946.20</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
                <tr>
                  <td>Sales kickoff, Denver</td>
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
          <div className="hero__toast mr-paper card-shadow" role="status">
            <span className="hero__toast-mark" aria-hidden="true" />
            <p className="hero__toast-text">
              <strong>Approved</strong>
              <span>Denver hotel, by Dana R. at 9:40 a.m.</span>
            </p>
          </div>
        </figure>
      </div>
    </section>
  )
}
