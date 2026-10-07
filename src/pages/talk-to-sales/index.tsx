import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { BreadcrumbsSection } from './sections/breadcrumbs-section'
import { HeroSection } from './sections/hero-section'

/** Route: /talk-to-sales */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <BreadcrumbsSection />
        <HeroSection />
      </main>
    </>
  )
}
Component.displayName = 'TalkToSalesPage'
