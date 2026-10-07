import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="mr-plum lp-plum-hero" aria-labelledby="hero-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-display" id="hero-h">
            Comparing Navan alternatives? See Miraee on your own numbers.
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Free to sign up and onboard, at any
            company size. Want proof first? Get a review of last year's travel from your own booking
            data.
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
            </Button>
          </div>
          <p className="mr-small hero__trust">
            Built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px3932459-traveler-phone.webp" type="image/webp" />
            <img
              src="/img/px3932459-traveler-phone.png"
              width="1100"
              height="964"
              alt="A business traveler in a trench coat takes a call on his phone."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
