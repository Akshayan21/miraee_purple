import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function WhenPlansChangeSection() {
  return (
    <section className="mr-plum alert-band" aria-labelledby="s4-h">
      <div className="mr-container split split--rev">
        <div className="split__copy">
          <p className="mr-eyebrow">Step 4</p>
          <h2 className="mr-h2" id="s4-h">
            When plans change, new options arrive.
          </h2>
          <p className="mr-body">
            Your traveler gets an alert when a flight is delayed or canceled, with new options to
            confirm. The change is recorded for the travel lead and finance.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/when-plans-change">See what happens when plans change</Link>
            </Button>
          </p>
        </div>
        <figure
          className="split__visual"
          style={{ margin: '0', flexDirection: 'column', alignItems: 'center' }}
          role="img"
          aria-label="Phone alert about a delayed flight with two new options."
        >
          <div className="phone phone--alert" aria-hidden="true">
            <div className="phone__screen mr-plum">
              <div className="phone__bar">
                <span className="mr-fig">5:53</span>
                <span>Trips</span>
              </div>
              <div className="mr-alert">
                <span className="mr-alert__status">Flight delayed</span>
                <p className="mr-alert__msg">
                  Your 6:40 a.m. flight to Chicago is delayed.{' '}
                  <span>Here are two new options. Tap one to confirm.</span>
                </p>
              </div>
              <div className="mr-options" role="radiogroup" aria-label="New flight options">
                <button
                  className="mr-option"
                  type="button"
                  role="radio"
                  aria-checked="true"
                  tabIndex={-1}
                >
                  <span className="mr-option__time">8:15 a.m.</span>
                  <span className="mr-option__fare">Same fare</span>{' '}
                  <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                  <Badge variant="success">In policy</Badge>{' '}
                  <svg
                    className="mr-line mr-option__tick"
                    viewBox="0 0 80 64"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M6 34 C 14 42 22 50 28 57 C 42 38 58 20 76 5"></path>
                  </svg>
                </button>{' '}
                <button
                  className="mr-option"
                  type="button"
                  role="radio"
                  aria-checked="false"
                  tabIndex={-1}
                >
                  <span className="mr-option__time">9:50 a.m.</span>
                  <span className="mr-option__fare">Same fare</span>{' '}
                  <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                  <Badge variant="success">In policy</Badge>
                </button>
              </div>
              <Button asChild>
                <span role="presentation">Confirm 8:15 a.m.</span>
              </Button>
              <p className="phone__cap">Your travel lead sees the change in the audit log.</p>
            </div>
          </div>
          <p className="mr-caption fig-cap" aria-hidden="true">
            Product view with illustrative data.
          </p>
        </figure>
      </div>
    </section>
  )
}
