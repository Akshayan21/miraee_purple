import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhatShouldACompanySection } from './sections/what-should-acompany-section'
import { SourcesSection } from './sections/sources-section'
import { SmallPrintSection } from './sections/small-print-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /compare */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhatShouldACompanySection />
        <SourcesSection />
        <SmallPrintSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'CompareIndexPage'
