import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function FreeStartSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="free-h">
      <Container className="mr-container">
        <div className="inner" style={{ maxWidth: '760px' }}>
          <h2 className="mr-h2" id="free-h">
            Free to sign up and onboard, at any company size.
          </h2>
          <p className="mr-body">
            We set up your company, your travel policy and your people with you. The review is
            optional.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
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
      </Container>
    </Section>
  )
}
