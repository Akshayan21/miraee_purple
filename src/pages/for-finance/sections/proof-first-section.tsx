import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function ProofFirstSection() {
  return (
    <Section spacing="compact" className="mr-paper mr-section" aria-labelledby="proof-h">
      <Container className="mr-container answer">
        <h2 className="mr-h2" id="proof-h">
          Want proof first?
        </h2>
        <p className="mr-body">
          Send one booking report and get a trip-by-trip review of last year's travel. Any savings
          figure comes as a dollar range, with the method and the data period shown.
        </p>
        <div className="mr-btn-row" style={{ marginTop: '32px' }}>
          <Button asChild variant="secondary">
            <DialogLink to="/spend-review" dialog="review">
              Get a spend review
            </DialogLink>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
