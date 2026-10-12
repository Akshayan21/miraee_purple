import { CenterCta } from '@/components/sections/center-cta'
import { SPEND_REVIEW_ACTION } from '@/content/actions'

export function ClosingSection() {
  return (
    <CenterCta
      video="compare"
      title="Start free at your size"
      body="Free to sign up and onboard, at any company size."
      secondary={SPEND_REVIEW_ACTION}
    />
  )
}
