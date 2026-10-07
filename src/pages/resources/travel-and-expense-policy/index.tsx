import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhatShouldATravelSection } from './sections/what-should-atravel-section'
import { RelatedSection } from './sections/related-section'
import { SourcesSection } from './sections/sources-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources/travel-and-expense-policy */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhatShouldATravelSection />
        <RelatedSection />
        <SourcesSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesTravelAndExpensePolicyPage'
