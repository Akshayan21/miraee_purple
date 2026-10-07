import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { HowDoYouImproveSection } from './sections/how-do-you-improve-section'
import { RelatedSection } from './sections/related-section'
import { SourcesSection } from './sections/sources-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources/travel-policy-compliance */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <HowDoYouImproveSection />
        <RelatedSection />
        <SourcesSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesTravelPolicyCompliancePage'
