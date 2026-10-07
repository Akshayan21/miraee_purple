import { Section, Container } from '@/components/layout/content-layout'
import { CtaActions, type SecondaryAction } from '@/components/sections/cta-actions'
import { ResponsiveImage } from '@/components/sections/responsive-image'
import { cn } from '@/lib/utils'

type ClosingBandProps = {
  title: string
  body: string
  secondary?: SecondaryAction
  /** Full-width photo above the call to action. Omit for the plain band. */
  photo?: { src: string; width: number; height: number; alt: string }
}

/** Plum closing band with an optional full-width photo above the headline and buttons. */
export function ClosingBand({ title, body, secondary, photo }: ClosingBandProps) {
  return (
    <Section
      className={cn('mr-plum closing-band', !photo && 'closing-band--plain')}
      aria-labelledby="close-h"
    >
      {photo ? (
        <figure className="closing-band__photo" style={{ marginLeft: '0', marginRight: '0' }}>
          <ResponsiveImage {...photo} loading="lazy" decoding="async" />
        </figure>
      ) : null}
      <Container className="mr-container">
        <div className="closing__grid">
          <h2 className="mr-h2" id="close-h">
            {title}
          </h2>
          <div className="closing__side">
            <p className="mr-body">{body}</p>
            <CtaActions secondary={secondary} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
