import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { StartWithTheTemplateSection } from './sections/start-with-the-template-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <StartWithTheTemplateSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesIndexPage'
