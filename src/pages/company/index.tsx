import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhatMiraeeDoesSection } from './sections/what-miraee-does-section'
import { CoverageSection } from './sections/coverage-section'
import { HowWeWorkSection } from './sections/how-we-work-section'
import { ContactSection } from './sections/contact-section'
import { SourcesSection } from './sections/sources-section'

/** Route: /company */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhatMiraeeDoesSection />
        <CoverageSection />
        <HowWeWorkSection />
        <ContactSection />
        <SourcesSection />
      </main>
    </>
  )
}
Component.displayName = 'CompanyPage'
