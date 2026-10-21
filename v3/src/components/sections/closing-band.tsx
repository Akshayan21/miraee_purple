import type { SecondaryAction } from '@/components/sections/cta-actions'
import { CtaVideoBand, type CtaVideo } from '@/components/sections/cta-video-band'

type Props = {
  title: string
  body: string
  secondary?: SecondaryAction
  video?: CtaVideo
}

/** Closing call to action with a looping video behind it. */
export function ClosingBand({ title, body, secondary, video }: Props) {
  return <CtaVideoBand title={title} body={body} secondary={secondary} video={video} />
}
