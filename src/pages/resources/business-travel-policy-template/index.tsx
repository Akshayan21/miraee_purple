import { Seo } from '@/components/common/seo'
import { StaticHtml } from '@/components/common/static-html'
import { TemplateDialog } from '@/components/forms/form-dialogs'
import content from './content.html?raw'
import { meta } from './meta'

/** Route: /resources/business-travel-policy-template */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <StaticHtml html={content} />
      <TemplateDialog />
    </>
  )
}
Component.displayName = 'BusinessTravelPolicyTemplatePage'
