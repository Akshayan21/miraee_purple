import { Seo } from '@/components/common/seo'
import { TemplateDialog } from '@/components/forms/form-dialogs'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { HowToUseThisSection } from './sections/how-to-use-this-section'
import { DownloadsSection } from './sections/downloads-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources/business-travel-policy-template */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <HowToUseThisSection />
        <DownloadsSection />
        <ClosingSection />
      </main>
      <TemplateDialog />
    </>
  )
}
Component.displayName = 'ResourcesBusinessTravelPolicyTemplatePage'
