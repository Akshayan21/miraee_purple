import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { HowDoesMiraeeCompareSection } from './sections/how-does-miraee-compare-section'
import { RelatedSection } from './sections/related-section'
import { SourcesSection } from './sections/sources-section'
import { SmallPrintSection } from './sections/small-print-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /compare/navan */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <HowDoesMiraeeCompareSection />
        <RelatedSection />
        <SourcesSection />
        <SmallPrintSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'CompareNavanPage'
