import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function ProofOnYourNumbersSection() {
  return (
    <section className="mr-plum plum-band" aria-labelledby="proof-h">
      <div className="mr-container">
        <div className="inner">
          <h2 className="mr-h2" id="proof-h">
            Want proof first? See last year's travel, trip by trip.
          </h2>
          <p className="mr-body">
            Send one booking report. We show bookings outside your program, spend outside policy,
            the cost of booking late and unused tickets, all from your own data. Any savings figure
            is a dollar range, with the method shown.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
