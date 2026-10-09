import { CtaVideoBand } from '@/components/sections/cta-video-band'

export function ContactSection() {
  return (
    <CtaVideoBand
      video="how"
      title="Talk to us."
      body="Questions about Miraee, the spend review or security? Our team will answer."
      secondary={{ label: 'Talk to sales', variant: 'secondary', to: '/talk-to-sales' }}
    />
  )
}
