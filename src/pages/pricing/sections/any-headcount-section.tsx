import { Section, Container } from '@/components/layout/content-layout'
export function AnyHeadcountSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="size-h">
      <Container className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="size-h">
            The same free start for 300 people or 3,000.
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            Any company size can sign up and onboard free. There is no headcount cap.
          </p>
        </div>
      </Container>
    </Section>
  )
}
