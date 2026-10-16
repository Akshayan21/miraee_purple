import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'TravelPerk alternatives: Miraee vs Perk compared',
  description:
    'Compare Miraee and Perk, formerly TravelPerk, on cost to start, the finance view of each trip and how changes are confirmed. Every Perk fact dated.',
  canonical: 'https://miraee.ai/compare/perk',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'TravelPerk alternatives: Miraee vs Perk compared',
    description:
      'Compare Miraee and Perk, formerly TravelPerk, on cost to start, the finance view of each trip and how changes are confirmed. Every Perk fact dated.',
    url: 'https://miraee.ai/compare/perk',
    image: 'https://miraee.ai/img/og/og-compare-perk.jpg',
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
          '@id': 'https://miraee.ai/compare/perk#webpage',
          url: 'https://miraee.ai/compare/perk',
          name: 'TravelPerk alternatives: Miraee vs Perk compared',
          description:
            'Compare Miraee and Perk, formerly TravelPerk, on cost to start, the finance view of each trip and how changes are confirmed. Every Perk fact dated.',
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
            '@id': 'https://miraee.ai/compare/perk#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/compare/perk#breadcrumb',
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
              name: 'Miraee vs Perk',
              item: 'https://miraee.ai/compare/perk',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/compare/perk#faq', faq),
      ],
    },
  ],
}
