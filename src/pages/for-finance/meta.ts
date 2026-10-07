import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Travel and expense management for finance teams | Miraee',
  description:
    'Every trip arrives with its budget and GL code. A finance dashboard, an audit log and receipts matched to card charges. Keep the cards you already use.',
  canonical: 'https://miraee.ai/finance',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Travel and expense management for finance teams | Miraee',
    description:
      'Every trip arrives with its budget and GL code. A finance dashboard, an audit log and receipts matched to card charges. Keep the cards you already use.',
    url: 'https://miraee.ai/finance',
    image: 'https://miraee.ai/img/og/miraee-og-1200x630.jpg',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://miraee.ai/finance#webpage',
          url: 'https://miraee.ai/finance',
          name: 'Travel and expense management for finance teams | Miraee',
          description:
            'Every trip arrives with its budget and GL code. A finance dashboard, an audit log and receipts matched to card charges. Keep the cards you already use.',
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
            '@id': 'https://miraee.ai/finance#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/finance#breadcrumb',
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
              name: 'For finance',
              item: 'https://miraee.ai/finance',
            },
          ],
        },
      ],
    },
  ],
}
