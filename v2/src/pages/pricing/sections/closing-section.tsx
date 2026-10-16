import { CtaVideoBand } from '@/components/sections/cta-video-band'

export function ClosingSection() {
  return (
    <CtaVideoBand
      video="travel"
      title="Start with the whole company."
      body="Free to sign up and onboard, at any company size."
      secondary={{
        label: 'Compare corporate travel software',
        variant: 'tertiary',
        to: '/compare',
      }}
    />
  )
}
