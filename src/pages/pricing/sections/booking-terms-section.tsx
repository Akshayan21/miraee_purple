import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function BookingTermsSection() {
  return (
    <Section className="mr-section hr-top" aria-labelledby="terms-h">
      <Container className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="terms-h">
            Booking terms
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            Signing up and onboarding are free, at any company size. Ask us about booking terms
            before your team books its first trip.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/talk-to-sales">Talk to sales</Link>
            </Button>
          </p>
        </div>
      </Container>
    </Section>
  )
}
