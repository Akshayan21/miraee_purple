import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function WhatMiraeeDoesSection() {
  return (
    <section className="mr-section" aria-labelledby="does-h">
      <div className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="does-h">
            Travel your finance team can see.
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            Your people book flights and hotels inside company policy. Finance sees every trip with
            its budget and GL code. When plans change, travelers get an alert and new options to
            confirm.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
