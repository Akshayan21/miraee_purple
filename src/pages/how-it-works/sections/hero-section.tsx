import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="core-hero section-bleed" aria-labelledby="hero-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-h1" id="hero-h">
            How Miraee works, from booking to month-end
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. A travel assistant for every employee,
            with the controls finance needs.
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
        </div>
        <figure className="split__visual compose compose--how" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px15959733-traveler-red-coat.webp" type="image/webp" />
            <img
              className="compose__person"
              src="/img/px15959733-traveler-red-coat.png"
              width="880"
              height="1100"
              alt="A traveler in a red coat smiles on a city street at night. Two hotel options show whether each fits company policy."
              fetchpriority="high"
            />
          </picture>
          <div className="compose__card phone phone--lg" aria-hidden="true">
            <div className="phone__screen mr-plum">
              <div className="phone__bar">
                <span className="mr-fig">9:41</span>
                <span>Hotels</span>
              </div>
              <p className="phone__title">Chicago, 2 nights</p>
              <p className="phone__meta">Oct 6 to Oct 8 · Policy up to $250 a night</p>
              <div className="ho">
                <span className="ho__name">West Loop hotel</span>
                <span className="ho__rate">$219 a night</span>
                <span className="ho__meta">0.4 mi from the client office</span>
                <Badge variant="success">In policy</Badge>
                <svg
                  className="mr-line"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3 7 C 50 3 120 6 197 3"></path>
                </svg>
              </div>
              <div className="ho">
                <span className="ho__name">Riverfront hotel</span>
                <span className="ho__rate">$314 a night</span>
                <span className="ho__meta">1.2 mi from the client office</span>
                <Badge variant="error">Out of policy</Badge>
              </div>
            </div>
          </div>
          <figcaption className="mr-caption hero-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
