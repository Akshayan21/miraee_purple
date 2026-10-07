import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function ProofFirstSection() {
  return (
    <section className="mr-plum plum-band" aria-labelledby="proof-h">
      <div className="mr-container">
        <div className="inner">
          <h2 className="mr-h2" id="proof-h">
            Want proof first? Get a review of last year's travel.
          </h2>
          <p className="mr-body">
            Send one booking report. We review last year's travel, trip by trip: bookings outside
            your program, spend outside policy, the cost of booking late and unused tickets.
          </p>
          <p className="mr-body">
            Any savings figure is a dollar range, with the method and the data period beside it. The
            report is yours to keep.
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
