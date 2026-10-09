import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { CompareTabsSection } from './sections/compare-tabs-section'
import { ProofSection } from './sections/proof-section'
import { SmallPrintSection } from './sections/small-print-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /compare. A structured buyer's guide: criteria, questions by topic, vendor costs, side-by-side links. */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <CompareTabsSection />
        <ProofSection />
        <SmallPrintSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'CompareIndexPage'
