import { Seo } from '@/components/common/seo'
import { TemplateDialog } from '@/components/forms/form-dialogs'
import { TemplateContent } from './content'
import { meta } from './meta'

/** Route: /resources/business-travel-policy-template */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <TemplateContent />
      </main>
      <TemplateDialog />
    </>
  )
}
Component.displayName = 'BusinessTravelPolicyTemplatePage'
