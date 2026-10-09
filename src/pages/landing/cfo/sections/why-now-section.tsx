import { Section, Container } from '@/components/layout/content-layout'
export function WhyNowSection() {
  return (
    <Section className="mr-section" aria-label="Why now">
      <Container className="mr-container why">
        <p>
          Business travel spending is forecast to rise 7.2% in 2026, while the number of trips rises
          1.3%.
        </p>
        <p>Only 12% of travel programs have their data in one place.</p>
      </Container>
    </Section>
  )
}
