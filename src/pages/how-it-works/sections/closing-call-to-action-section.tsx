import { ClosingBand } from '@/components/sections/closing-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingBand
      title="See it on your own company's travel."
      body="Free to sign up and onboard, at any company size."
      secondary={SPEND_REVIEW_ACTION}
      photo={{
        src: '/img/px7904332-manhattan-sunset.jpg',
        width: 1600,
        height: 420,
        alt: 'A Manhattan street under an orange and plum sunset.',
      }}
    />
  )
}
