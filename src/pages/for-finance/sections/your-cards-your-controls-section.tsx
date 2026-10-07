import { Section, Container } from '@/components/layout/content-layout'
export function YourCardsYourControlsSection() {
  return (
    <Section className="step-sec" aria-labelledby="cards-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="cards-h">
            Keep the corporate cards you already use.
          </h2>
        </div>
        <div className="split__visual">
          <p className="mr-body">
            Miraee replaces your booking tool and your agency's routine flight and hotel bookings.
            You keep your corporate cards.
          </p>
        </div>
      </Container>
    </Section>
  )
}
