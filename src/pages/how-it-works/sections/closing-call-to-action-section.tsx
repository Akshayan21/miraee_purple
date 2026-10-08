import { ClosingBand } from '@/components/sections/closing-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingBand
      title="See it on your own company's travel."
      body="Free to sign up and onboard, at any company size."
      secondary={SPEND_REVIEW_ACTION}
      photo={{
        src: '/img/document/how-it-works-skyline-blurred.jpg',
        width: 1536,
        height: 1024,
        alt: 'The Manhattan skyline in warm evening light.',
      }}
    />
  )
}
