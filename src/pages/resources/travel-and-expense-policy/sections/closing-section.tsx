import { ClosingCta } from '@/components/sections/closing-cta'

export function ClosingSection() {
  return (
    <ClosingCta
      title="Put every trip in one place."
      secondary={{ label: 'See how it works', variant: 'tertiary', to: '/how-it-works' }}
    >
      Miraee is business travel and expense software. Free to sign up and onboard, at any company
      size.
    </ClosingCta>
  )
}
