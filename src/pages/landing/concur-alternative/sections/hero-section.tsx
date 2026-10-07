import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-plum lp-plum-hero lp-plum-hero--photo" aria-labelledby="hero-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-display" id="hero-h">
            Comparing SAP Concur alternatives? Start with free onboarding.
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Sign-up and onboarding are free, at any
            company size. We set up your company, your travel policy and your people with you, and
            train your admins and finance team.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>
          </div>
          <p className="mr-small hero__trust">
            Built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px4623080-team-wide.webp" type="image/webp" />
            <img
              src="/img/px4623080-team-wide.jpg"
              width="917"
              height="688"
              alt="Colleagues smile as they review work together at a desk."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
