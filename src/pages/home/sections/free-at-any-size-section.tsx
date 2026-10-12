import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function FreeAtAnySizeSection() {
  return (
    <Section tone="plum" accent className="mr-section hr-top free" aria-labelledby="free-h">
      <Container className="mr-container split">
        <figure className="split__visual free__img mr-frame" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/document/home-approved-travel-tool-1.webp" type="image/webp" />{' '}
            <img
              src="/img/document/home-approved-travel-tool-1.jpg"
              width="2046"
              height="1366"
              alt="A team works around a long conference table in a bright office."
            />
          </picture>
        </figure>
        <div className="split__copy free__copy">
          <h2 className="mr-h2" id="free-h">
            Free to sign up and onboard, at any company size.
          </h2>
          <p className="mr-body">
            We set up your company, your policy and your people with you, and train your admins and
            finance team.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
