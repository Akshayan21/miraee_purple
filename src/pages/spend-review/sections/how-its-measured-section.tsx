import { Section, Container } from '@/components/layout/content-layout'
export function HowItsMeasuredSection() {
  return (
    <Section className="mr-section" aria-labelledby="measure-h">
      <Container className="mr-container answer">
        <h2 className="mr-h2" id="measure-h">
          We show our work.
        </h2>
        <p className="mr-body">
          Every finding comes from the file you send. The review re-prices nothing, so your
          controller can check every line.
        </p>
        <p className="mr-body">
          Any savings figure is a dollar range, with the method and the data period beside it.
        </p>
      </Container>
    </Section>
  )
}
