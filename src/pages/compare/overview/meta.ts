import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Best corporate travel management software, compared | Miraee',
  description:
    'How to compare corporate travel management software for a company of 300 to 1,500 people: cost to start, policy controls, the finance view, changes.',
  canonical: 'https://miraee.ai/compare',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Best corporate travel management software, compared | Miraee',
    description:
      'How to compare corporate travel management software for a company of 300 to 1,500 people: cost to start, policy controls, the finance view, changes.',
    url: 'https://miraee.ai/compare',
    image: 'https://miraee.ai/img/og/og-compare.jpg',
    imageWidth: '1200',
    imageHeight: '630',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': 'https://miraee.ai/compare#webpage',
          url: 'https://miraee.ai/compare',
          name: 'Best corporate travel management software, compared | Miraee',
          description:
            'How to compare corporate travel management software for a company of 300 to 1,500 people: cost to start, policy controls, the finance view, changes.',
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
            '@id': 'https://miraee.ai/compare#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'ItemList',
          '@id': 'https://miraee.ai/compare#list',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Navan alternatives',
              url: 'https://miraee.ai/compare/navan',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'SAP Concur alternatives',
              url: 'https://miraee.ai/compare/sap-concur',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'TravelPerk alternatives',
              url: 'https://miraee.ai/compare/perk',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Ramp Travel with Miraee',
              url: 'https://miraee.ai/compare/ramp',
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/compare#breadcrumb',
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
          ],
        },
        faqPageJsonLd('https://miraee.ai/compare#faq', faq),
      ],
    },
  ],
}
