import { Section, Container } from '@/components/layout/content-layout'
export function SpendReviewDataSection() {
  return (
    <Section tone="plum" accent className="mr-section" aria-labelledby="data-h">
      <Container className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="data-h">
            You choose what to share.
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            The spend review needs one file: an agency booking report or an expense extract. A card
            feed is optional. We sign an NDA before you send anything, and the report is yours to
            keep.
          </p>
        </div>
      </Container>
    </Section>
  )
}
