import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Travel expense reports: close month-end with fewer chases',
  description:
    'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
  canonical: 'https://miraee.ai/resources/travel-expense-report',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Travel expense reports: close month-end with fewer chases',
    description:
      'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
    url: 'https://miraee.ai/resources/travel-expense-report',
    image: 'https://miraee.ai/img/og/og-resources-finance.jpg',
    imageWidth: '1200',
    imageHeight: '630',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://miraee.ai/resources/travel-expense-report#webpage',
          url: 'https://miraee.ai/resources/travel-expense-report',
          name: 'Travel expense reports: close month-end with fewer chases',
          description:
            'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
          inLanguage: 'en-US',
          isPartOf: {
            '@id': 'https://miraee.ai/#website',
          },
          about: {
            '@id': 'https://miraee.ai/#software',
          },
          publisher: {
            '@id': 'https://miraee.ai/#organization',
          },
          breadcrumb: {
            '@id': 'https://miraee.ai/resources/travel-expense-report#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/travel-expense-report#article',
          headline: 'Travel expense reports: close month-end with fewer receipts to chase',
          description:
            'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/travel-expense-report#webpage',
          },
          inLanguage: 'en-US',
          author: {
            '@id': 'https://miraee.ai/#organization',
          },
          publisher: {
            '@id': 'https://miraee.ai/#organization',
          },
          datePublished: '2026-09-30',
          dateModified: '2026-09-30',
          image: 'https://miraee.ai/img/og/og-resources-finance.jpg',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/resources/travel-expense-report#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://miraee.ai/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Resources',
              item: 'https://miraee.ai/resources',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Travel expense reports',
              item: 'https://miraee.ai/resources/travel-expense-report',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/resources/travel-expense-report#faq', faq),
      ],
    },
  ],
}
