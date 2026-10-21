import { Container } from '@/components/layout/content-layout'
import type { ReactNode } from 'react'

import { SkipLink } from '@/components/layout/skip-link'
import { cn } from '@/lib/utils'

type LandingLayoutProps = {
  /** `plum` = dark header band (competitor-alternative pages); `light` = white header (CFO page). */
  tone?: 'plum' | 'light'
  /** Page-specific footer links and small print, rendered above the legal line. */
  footer: ReactNode
  children: ReactNode
}

/** Stripped-down chrome for paid-traffic landing pages: logo only, no site navigation. */
export function LandingLayout({ tone = 'light', footer, children }: LandingLayoutProps) {
  return (
    <>
      <SkipLink />
      <header className={cn('lp-head', tone === 'plum' && 'mr-plum lp-head--plum')}>
        <Container className="mr-container">
          <img src="/img/miraee-logo-orange.svg" alt="Miraee" width={121} height={30} />
        </Container>
      </header>
      {children}
      <footer className="mr-footer lp-foot">
        <Container className="mr-container">
          {footer}
          <div className="mr-footer__legal" style={{ marginTop: 24 }}>
            <span>© 2026 Miraee</span>
          </div>
        </Container>
      </footer>
    </>
  )
}
