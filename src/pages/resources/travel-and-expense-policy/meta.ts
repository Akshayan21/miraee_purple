import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Travel and expense policy: what to include, with examples',
  description:
    'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
  canonical: 'https://miraee.ai/resources/travel-and-expense-policy',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Travel and expense policy: what to include, with examples',
    description:
      'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
    url: 'https://miraee.ai/resources/travel-and-expense-policy',
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
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#webpage',
          url: 'https://miraee.ai/resources/travel-and-expense-policy',
          name: 'Travel and expense policy: what to include, with examples',
          description:
            'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
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
            '@id': 'https://miraee.ai/resources/travel-and-expense-policy#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#article',
          headline: 'Travel and expense policy: what to include, with examples',
          description:
            'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/travel-and-expense-policy#webpage',
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
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#breadcrumb',
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
              name: 'Travel and expense policy',
              item: 'https://miraee.ai/resources/travel-and-expense-policy',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/resources/travel-and-expense-policy#faq', faq),
      ],
    },
  ],
}
