import type { ReactNode } from 'react'

import { CtaActions, type SecondaryAction } from '@/components/sections/cta-actions'
import { ResponsiveImage } from '@/components/sections/responsive-image'

type ClosingCtaProps = {
  title: string
  /** Supporting copy beside the headline. */
  children: ReactNode
  secondary?: SecondaryAction
  /** Lazy-load the bridge photo (everywhere except the home page, where it is already near the fold). */
  lazyPhoto?: boolean
}

/** Plum closing band: headline, copy, buttons, and the Brooklyn Bridge photo with the Line across it. */
export function ClosingCta({ title, children, secondary, lazyPhoto = true }: ClosingCtaProps) {
  return (
    <section className="mr-plum closing" aria-labelledby="close-h">
      <div className="mr-container">
        <div className="closing__grid">
          <h2 className="mr-h2" id="close-h">
            {title}
          </h2>
          <div className="closing__side">
            <p className="mr-body">{children}</p>
            <CtaActions secondary={secondary} />
          </div>
        </div>
      </div>
      <figure className="closing__photo" style={{ margin: '64px 0 0' }}>
        <ResponsiveImage
          src="/img/px7823010-brooklyn-bridge.jpg"
          width="1196"
          height="540"
          alt="The Brooklyn Bridge and the Manhattan skyline at sunset."
          {...(lazyPhoto ? { loading: 'lazy', decoding: 'async' } : {})}
        />{' '}
        <svg
          className="mr-line"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M-12 296 C 220 292 480 272 610 236 C 660 222 690 196 704 160"></path>
        </svg>
      </figure>
    </section>
  )
}
