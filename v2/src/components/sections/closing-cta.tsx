import type { ReactNode } from 'react'

import type { SecondaryAction } from '@/components/sections/cta-actions'
import { CtaVideoBand, type CtaVideo } from '@/components/sections/cta-video-band'

type ClosingCtaProps = {
  title: string
  /** Supporting copy under the headline. */
  children: ReactNode
  secondary?: SecondaryAction
  video?: CtaVideo
}

/** Closing call to action with a looping video behind it. */
export function ClosingCta({ title, children, secondary, video }: ClosingCtaProps) {
  return <CtaVideoBand title={title} body={children} secondary={secondary} video={video} />
}
