import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhatMakesATravelSection } from './sections/what-makes-atravel-section'
import { RelatedSection } from './sections/related-section'
import { SourcesSection } from './sections/sources-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources/business-travel-policy */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhatMakesATravelSection />
        <RelatedSection />
        <SourcesSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesBusinessTravelPolicyPage'
