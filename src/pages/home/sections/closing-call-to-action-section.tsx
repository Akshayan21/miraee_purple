import { ClosingCta } from '@/components/sections/closing-cta'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingCta
      title="Put every trip in one place."
      secondary={SPEND_REVIEW_ACTION}
      photo={{ src: "/img/document/home-call-to-action-band-1.jpg", width: 2046, height: 1242, alt: "The Manhattan skyline across the water." }}
      lazyPhoto={false}
    >
      Free to sign up and onboard, at any company size. Want proof first? Get a review of last
      year's travel.
    </ClosingCta>
  )
}
