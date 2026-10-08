import { Seo } from '@/components/common/seo'
import { ResourceArticle } from '@/components/common/resource-article'
import { faq } from './faq'
import { ArticleContent, RelatedContent } from './content'
import { meta } from './meta'

/** Route: /resources/business-travel-policy */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <ResourceArticle faq={faq} related={<RelatedContent />}>
        <ArticleContent />
      </ResourceArticle>
    </>
  )
}
Component.displayName = 'BusinessTravelPolicyPage'
