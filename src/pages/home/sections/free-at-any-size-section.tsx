import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function FreeAtAnySizeSection() {
  return (
    <Section className="mr-section hr-top free" aria-labelledby="free-h">
      <Container className="mr-container split">
        <figure className="split__visual free__img mr-frame" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px4623080-team.webp" type="image/webp" />{' '}
            <img
              src="/img/px4623080-team.jpg"
              width="1067"
              height="641"
              alt="Colleagues smile as they review work together at a desk."
            />
          </picture>
        </figure>
        <div className="split__copy free__copy">
          <h2 className="mr-h2" id="free-h">
            Free to sign up and onboard, at any company size.
          </h2>
          <p className="mr-body">
            Signing up is free. Onboarding is free: we set up your company, your travel policy and
            your people with you, with training for admins and finance.
          </p>
          <p className="mr-body">The same is true for a company of 300 or 3,000.</p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/pricing">See what's free</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
