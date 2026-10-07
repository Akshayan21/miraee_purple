import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Navan alternatives and competitors: Miraee vs Navan',
  description:
    'Compare Miraee and Navan on cost to start, policy controls, the finance view and changes, with every Navan fact dated. Plus other Navan alternatives.',
  canonical: 'https://miraee.ai/compare/navan',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Navan alternatives and competitors: Miraee vs Navan',
    description:
      'Compare Miraee and Navan on cost to start, policy controls, the finance view and changes, with every Navan fact dated. Plus other Navan alternatives.',
    url: 'https://miraee.ai/compare/navan',
    image: 'https://miraee.ai/img/og/og-compare-navan.jpg',
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
          '@id': 'https://miraee.ai/compare/navan#webpage',
          url: 'https://miraee.ai/compare/navan',
          name: 'Navan alternatives and competitors: Miraee vs Navan',
          description:
            'Compare Miraee and Navan on cost to start, policy controls, the finance view and changes, with every Navan fact dated. Plus other Navan alternatives.',
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
            '@id': 'https://miraee.ai/compare/navan#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/compare/navan#breadcrumb',
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
              name: 'Miraee vs Navan',
              item: 'https://miraee.ai/compare/navan',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/compare/navan#faq', faq),
      ],
    },
  ],
}
