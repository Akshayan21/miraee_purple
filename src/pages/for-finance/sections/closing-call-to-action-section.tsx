import { ClosingBand } from '@/components/sections/closing-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingBand
      title="Close the month with every trip already coded."
      body="Free to sign up and onboard, at any company size."
      secondary={SPEND_REVIEW_ACTION}
      photo={{
        src: '/img/document/for-finance-proof-band-1.jpg',
        width: 1600,
        height: 520,
        alt: 'The Golden Gate Bridge at dusk under a purple sky.',
      }}
    />
  )
}
