import styles from './closing-cta.module.css'
import { Section, Container } from '@/components/layout/content-layout'
import type { ReactNode } from 'react'

import { CtaActions, type SecondaryAction } from '@/components/sections/cta-actions'
import { ResponsiveImage } from '@/components/sections/responsive-image'

type ClosingCtaProps = {
  title: string
  /** Supporting copy beside the headline. */
  children: ReactNode
  secondary?: SecondaryAction
  /** Lazy-load the bridge photo (everywhere except the home page, where it is already near the fold). */
  photo?: { src: string; width: number; height: number; alt: string }
  lazyPhoto?: boolean
}

/** Plum closing band: headline, copy, buttons, and the Brooklyn Bridge photo with the Line across it. */
export function ClosingCta({
  title,
  children,
  secondary,
  photo,
  lazyPhoto = true,
}: ClosingCtaProps) {
  return (
    <Section className="mr-plum closing" aria-labelledby="close-h">
      <Container className="mr-container">
        <div className="closing__grid">
          <h2 className="mr-h2" id="close-h">
            {title}
          </h2>
          <div className="closing__side">
            <p className="mr-body">{children}</p>
            <CtaActions secondary={secondary} />
          </div>
        </div>
      </Container>
      <figure className={`closing__photo ${styles.photo}`}>
        <ResponsiveImage
          src={photo?.src ?? '/img/px7823010-brooklyn-bridge.jpg'}
          width={photo?.width ?? 1196}
          height={photo?.height ?? 540}
          alt={photo?.alt ?? 'The Brooklyn Bridge and the Manhattan skyline at sunset.'}
          {...(lazyPhoto ? { loading: 'lazy', decoding: 'async' } : {})}
        />
      </figure>
    </Section>
  )
}
