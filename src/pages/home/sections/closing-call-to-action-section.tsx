import { ClosingCta } from '@/components/sections/closing-cta'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingCta
      title="Put every trip in one place."
      secondary={SPEND_REVIEW_ACTION}
      lazyPhoto={false}
    >
      Free to sign up and onboard, at any company size. Want proof first? Get a review of last
      year's travel.
    </ClosingCta>
  )
}
