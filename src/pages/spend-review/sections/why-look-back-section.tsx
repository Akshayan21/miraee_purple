import { Section, Container } from '@/components/layout/content-layout'
export function WhyLookBackSection() {
  return (
    <Section className="mr-section" aria-label="Why look back">
      <Container className="mr-container figs">
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
          72% of travel buyers say travelers book cheaper hotels outside the company program.
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
