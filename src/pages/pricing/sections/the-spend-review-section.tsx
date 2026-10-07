import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function TheSpendReviewSection() {
  return (
    <Section tone="plum" accent className="mr-section" aria-labelledby="review-h">
      <Container className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="review-h">
            Want proof first? Ask for a spend review.
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            A trip-by-trip review of last year's travel, from one booking report you already have.
            It shows bookings outside your program, spend outside policy, the cost of booking late
            and unused tickets.
          </p>
          <p className="mr-body">
            The review is optional, on request. You can sign up without one.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
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
