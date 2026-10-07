import { Section, Container } from '@/components/layout/content-layout'
export function WhyNowSection() {
  return (
    <Section className="mr-section" aria-label="Why now">
      <Container className="mr-container why">
        <p>
          Business travel spending is forecast to rise 7.2% in 2026, while the number of trips rises
          1.3%.
          <sup>
            <a href="#src-1" aria-label="Source 1">
              1
            </a>
          </sup>
        </p>
        <p>
          Only 12% of travel programs have their data in one place.
          <sup>
            <a href="#src-2" aria-label="Source 2">
              2
            </a>
          </sup>
        </p>
      </Container>
    </Section>
  )
}
