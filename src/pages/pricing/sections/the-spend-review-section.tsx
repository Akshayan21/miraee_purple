import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function TheSpendReviewSection() {
  return (
    <Section tone="plum" accent className="mr-section" aria-labelledby="review-h">
      <Container className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="review-h">
            Want proof first?
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            Ask for a spend review: last year's travel, reviewed trip by trip from one booking
            report. Optional, and on request.
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
