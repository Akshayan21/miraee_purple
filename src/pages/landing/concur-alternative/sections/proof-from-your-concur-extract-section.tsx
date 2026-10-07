import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function ProofFromYourConcurExtractSection() {
  return (
    <Section className="mr-plum plum-band" aria-labelledby="proof-h">
      <Container className="mr-container">
        <div className="inner">
          <h2 className="mr-h2" id="proof-h">
            Want proof first? Start from your Concur expense extract.
          </h2>
          <p className="mr-body">
            Send one file: an agency booking report or an expense extract. We show bookings outside
            your program, spend outside policy, the cost of booking late and unused tickets, all
            from your own data. Any savings figure is a dollar range, with the method shown.
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
