import { Seo } from '@/components/common/seo'
import { PackDialog } from '@/components/forms/form-dialogs'
import { meta } from './meta'
import { BreadcrumbsSection } from './sections/breadcrumbs-section'
import { HeroSection } from './sections/hero-section'
import { SignInSection } from './sections/sign-in-section'
import { ControlSection } from './sections/control-section'
import { TheSecurityPackSection } from './sections/the-security-pack-section'
import { SpendReviewDataSection } from './sections/spend-review-data-section'
import { WhoIsBehindMiraeeSection } from './sections/who-is-behind-miraee-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /security */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <BreadcrumbsSection />
        <HeroSection />
        <SignInSection />
        <ControlSection />
        <TheSecurityPackSection />
        <SpendReviewDataSection />
        <WhoIsBehindMiraeeSection />
        <ClosingSection />
      </main>
      <PackDialog />
    </>
  )
}
Component.displayName = 'SecurityPage'
