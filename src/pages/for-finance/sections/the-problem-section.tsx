import { Section, Container } from '@/components/layout/content-layout'
export function TheProblemSection() {
  return (
    <Section className="mr-section problem" aria-labelledby="prob-h">
      <Container className="mr-container">
        <p className="stat-line">
          Only 12% of travel programs have their data in one place.
          <sup>
            <a href="#src-1" aria-label="Source 1">
              1
            </a>
          </sup>
        </p>
        <h2 className="mr-h2" id="prob-h">
          See every trip, its budget and its GL code in one place.
        </h2>
      </Container>
    </Section>
  )
}
