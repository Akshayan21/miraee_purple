import { Section, Container } from '@/components/layout/content-layout'
export function WhatMiraeeReplacesSection() {
  return (
    <Section className="mr-section" aria-labelledby="rep-h">
      <Container className="mr-container answer">
        <h2 className="mr-h2" id="rep-h">
          What does Miraee replace?
        </h2>
        <p className="mr-body">
          Miraee replaces your booking tool and your agency's routine flight and hotel bookings. You
          keep your corporate cards.
        </p>
      </Container>
    </Section>
  )
}
