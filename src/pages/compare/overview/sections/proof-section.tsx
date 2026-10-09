import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Button } from '@/components/ui/button'

export function ProofSection() {
  return (
    <Section className="mr-section bg-white" aria-labelledby="want-proof-before-you-choose">
      <Container className="mr-container">
        <div className="mr-paper grid gap-8 rounded-xl p-8 lg:grid-cols-12 lg:items-center md:p-12">
          <div className="lg:col-span-8">
            <h2 className="mr-h2 scroll-mt-32" id="want-proof-before-you-choose">
              Want proof before you choose?
            </h2>
            <p className="m-0 max-w-3xl text-content-2">
              Send one booking report from your agency or expense system. We review last year's
              travel trip by trip: out-of-program bookings, out-of-policy spend, the cost of booking
              late, and unused tickets. Any savings come as a dollar range, with the method and data
              period shown. It's optional.
            </p>
          </div>
          <div className="grid gap-3 lg:col-span-4 lg:justify-items-start">
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
            <Button asChild variant="tertiary">
              <Link to="/spend-review">About Spend review</Link>
            </Button>
            <p className="m-0 mt-2 text-[15px] text-content-2">
              <Link to="/pricing">See what's free</Link>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
