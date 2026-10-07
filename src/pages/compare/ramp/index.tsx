import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { CanWeUseMiraeeSection } from './sections/can-we-use-miraee-section'
import { RelatedSection } from './sections/related-section'
import { SmallPrintSection } from './sections/small-print-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /compare/ramp */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <CanWeUseMiraeeSection />
        <RelatedSection />
        <SmallPrintSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'CompareRampPage'
