import { ClosingCta } from '@/components/sections/closing-cta'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingSection() {
  return (
    <ClosingCta
      title="Start free, and check our work on your own data."
      secondary={SPEND_REVIEW_ACTION}
    >
      Free to sign up and onboard, at any company size. Want proof first? Get a review of last
      year's travel.
    </ClosingCta>
  )
}
