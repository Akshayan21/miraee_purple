import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'

/** Route: 404 (catch-all) */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
      </main>
    </>
  )
}
Component.displayName = 'NotFoundPage'
