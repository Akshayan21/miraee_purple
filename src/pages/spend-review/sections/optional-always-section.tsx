import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function OptionalAlwaysSection() {
  return (
    <Section className="mr-plum mr-section optional" aria-labelledby="opt-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="opt-h">
            We show our work.
          </h2>
          <p className="mr-body">
            Every finding comes from the file you send, so your controller can check every line. Any
            savings figure is a dollar range, with the method and data period shown. The report is
            yours to keep.
          </p>
          <h2 className="mr-h2" style={{ marginTop: '32px' }}>
            Ready when you are
          </h2>
          <p className="mr-body">
            We agree timing with you when your file arrives. The review is optional, and you can
            sign up without one.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          </div>
        </div>
        <figure className="split__visual mr-frame" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/document/spend-review-review-optional-1.webp" type="image/webp" />
            <img
              src="/img/document/spend-review-review-optional-1.jpg"
              width="2046"
              height="1364"
              alt="A traveler relaxes in an airport lounge with his feet on his suitcase as a plane takes off."
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
