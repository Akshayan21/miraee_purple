import { ClosingBand } from '@/components/sections/closing-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingCallToActionSection() {
  return (
    <ClosingBand
      video="finance"
      title="Close the month with every trip already coded."
      body="Free to sign up and onboard, at any company size."
      secondary={SPEND_REVIEW_ACTION}
    />
  )
}
