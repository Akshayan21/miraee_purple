import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Business travel policy: how to write one people follow',
  description:
    'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
  canonical: 'https://miraee.ai/resources/business-travel-policy',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Business travel policy: how to write one people follow',
    description:
      'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
    url: 'https://miraee.ai/resources/business-travel-policy',
    image: 'https://miraee.ai/img/og/og-resources.jpg',
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
          '@id': 'https://miraee.ai/resources/business-travel-policy#webpage',
          url: 'https://miraee.ai/resources/business-travel-policy',
          name: 'Business travel policy: how to write one people follow',
          description:
            'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
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
            '@id': 'https://miraee.ai/resources/business-travel-policy#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/business-travel-policy#article',
          headline: 'How to write a business travel policy your people will follow',
          description:
            'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/business-travel-policy#webpage',
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
          image: 'https://miraee.ai/img/og/og-resources.jpg',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/resources/business-travel-policy#breadcrumb',
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
              name: 'Business travel policy',
              item: 'https://miraee.ai/resources/business-travel-policy',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/resources/business-travel-policy#faq', faq),
      ],
    },
  ],
}
