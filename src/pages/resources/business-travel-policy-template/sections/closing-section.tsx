import { ClosingCta } from '@/components/sections/closing-cta'

export function ClosingSection() {
  return (
    <ClosingCta
      title="Put your policy on every booking."
      secondary={{ label: 'For travel managers', variant: 'tertiary', to: '/travel-managers' }}
    >
      Miraee is business travel and expense software. Free to sign up and onboard, at any company
      size, and we set up your travel policy with you.
    </ClosingCta>
  )
}
