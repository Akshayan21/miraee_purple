import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function OptionalAlwaysSection() {
  return (
    <Section className="mr-plum mr-section optional" aria-labelledby="opt-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="opt-h">
            The review is optional.
          </h2>
          <p className="mr-body">
            You can sign up and onboard without one. We agree timing with you when your file
            arrives.
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
            <source srcSet="/img/px31879477-train-window.webp" type="image/webp" />
            <img
              src="/img/px31879477-train-window.jpg"
              width="1600"
              height="520"
              alt="A traveler seen through a train window at dusk."
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
