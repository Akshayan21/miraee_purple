import { ClosingBand } from '@/components/sections/closing-band'

export function ClosingCallToActionSection() {
  return (
    <ClosingBand
      title="Your policy on every booking, from the first trip."
      body="Free to sign up and onboard, at any company size."
      secondary={{ label: 'See how it works', variant: 'tertiary', to: '/how-it-works' }}
    />
  )
}
