import { ClosingCta } from '@/components/sections/closing-cta'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingCta video="home" title="Put every trip in one place." secondary={SPEND_REVIEW_ACTION}>
      Free to sign up and onboard, at any company size. Want proof first? Get a review of last
      year's travel.
    </ClosingCta>
  )
}
