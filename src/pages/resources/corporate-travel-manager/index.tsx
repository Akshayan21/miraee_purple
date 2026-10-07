import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhatDoesACorporateSection } from './sections/what-does-acorporate-section'
import { RelatedSection } from './sections/related-section'
import { SourcesSection } from './sections/sources-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources/corporate-travel-manager */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhatDoesACorporateSection />
        <RelatedSection />
        <SourcesSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesCorporateTravelManagerPage'
