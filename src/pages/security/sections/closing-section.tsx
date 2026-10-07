import { CenterCta } from '@/components/sections/center-cta'

export function ClosingSection() {
  return (
    <CenterCta
      title="One approved travel tool for the whole company."
      body="Free to sign up and onboard, at any company size."
      secondary={{ label: "See what's free", variant: 'tertiary', to: '/pricing' }}
    />
  )
}
