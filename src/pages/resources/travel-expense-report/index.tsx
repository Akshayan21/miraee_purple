import { Seo } from '@/components/common/seo'
import { ResourceArticle } from '@/components/common/resource-article'
import { faq } from './faq'
import content from './content.html?raw'
import { meta } from './meta'

/** Route: /resources/travel-expense-report */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <ResourceArticle html={content} faq={faq} />
    </>
  )
}
Component.displayName = 'TravelExpenseReportPage'
