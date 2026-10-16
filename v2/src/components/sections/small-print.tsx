import { Section, Container } from '@/components/layout/content-layout'
import type { ReactNode } from 'react'

/** Trademark and fact-checking note at the foot of comparison pages. */
export function SmallPrint({ children }: { children: ReactNode }) {
  return (
    <Section className="lf-smallprint" aria-label="About the facts on this page">
      <Container className="mr-container">
        <p className="small-print">{children}</p>
      </Container>
    </Section>
  )
}
