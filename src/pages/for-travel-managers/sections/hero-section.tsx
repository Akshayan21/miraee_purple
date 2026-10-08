import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="core-hero core-hero--frame" aria-labelledby="hero-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-h1" id="hero-h">
            A corporate travel booking tool that runs your policy on every booking
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Your policy runs on every booking, and
            approvals only reach you when something is out of policy.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div className="mr-frame route-frame">
            <picture>
              <source srcSet="/img/document/for-travel-managers-hero-1.webp" type="image/webp" />
              <img
                src="/img/document/for-travel-managers-hero-1.jpg"
                width="2046"
                height="1365"
                alt="Colleagues plan together around a table."
                fetchpriority="high"
              />
            </picture>
          </div>
        </figure>
      </Container>
    </Section>
  )
}
