import { Seo } from '@/components/common/seo'
import { StaticHtml } from '@/components/common/static-html'
import content from './content.html?raw'
import { meta } from './meta'

/** Route: /resources/travel-policy-compliance */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <StaticHtml html={content} />
    </>
  )
}
Component.displayName = 'TravelPolicyCompliancePage'
