import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Ramp Travel with Miraee: travel booking beside your card',
  description:
    'Keep the Ramp card you already use and add travel booking with your policy on every trip, approvals only when needed and alerts when plans change.',
  canonical: 'https://miraee.ai/compare/ramp',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Ramp Travel with Miraee: travel booking beside your card',
    description:
      'Keep the Ramp card you already use and add travel booking with your policy on every trip, approvals only when needed and alerts when plans change.',
    url: 'https://miraee.ai/compare/ramp',
    image: 'https://miraee.ai/img/og/og-compare-ramp.jpg',
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
          '@id': 'https://miraee.ai/compare/ramp#webpage',
          url: 'https://miraee.ai/compare/ramp',
          name: 'Ramp Travel with Miraee: travel booking beside your card',
          description:
            'Keep the Ramp card you already use and add travel booking with your policy on every trip, approvals only when needed and alerts when plans change.',
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
            '@id': 'https://miraee.ai/compare/ramp#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/compare/ramp#breadcrumb',
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
              name: 'Compare',
              item: 'https://miraee.ai/compare',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Miraee with Ramp',
              item: 'https://miraee.ai/compare/ramp',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/compare/ramp#faq', faq),
      ],
    },
  ],
}
