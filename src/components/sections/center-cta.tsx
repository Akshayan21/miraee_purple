import { Section, Container } from '@/components/layout/content-layout'
import { CtaActions, type SecondaryAction } from '@/components/sections/cta-actions'

type CenterCtaProps = {
  title: string
  body: string
  secondary?: SecondaryAction
}

/** Centred call to action on a paper ground, with the Line's underline on the primary button. */
export function CenterCta({ title, body, secondary }: CenterCtaProps) {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="close-h">
      <Container className="mr-container center-cta">
        <h2 className="mr-h2" id="close-h">
          {title}
        </h2>
        <p className="mr-body">{body}</p>
        <CtaActions secondary={secondary} underline style={{ marginTop: '32px' }} />
      </Container>
    </Section>
  )
}
