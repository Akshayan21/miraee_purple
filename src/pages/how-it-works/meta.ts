import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'How Miraee works | Business travel and expense software',
  description:
    'Employees ask the Miraee assistant for a trip and choose flights and hotels inside policy. Finance sees every booking with its budget and GL code.',
  canonical: 'https://miraee.ai/how-it-works',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'How Miraee works | Business travel and expense software',
    description:
      'Employees ask the Miraee assistant for a trip and choose flights and hotels inside policy. Finance sees every booking with its budget and GL code.',
    url: 'https://miraee.ai/how-it-works',
    image: 'https://miraee.ai/img/og/miraee-og-1200x630.jpg',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://miraee.ai/how-it-works#webpage',
          url: 'https://miraee.ai/how-it-works',
          name: 'How Miraee works | Business travel and expense software',
          description:
            'Employees ask the Miraee assistant for a trip and choose flights and hotels inside policy. Finance sees every booking with its budget and GL code.',
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
            '@id': 'https://miraee.ai/how-it-works#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/how-it-works#breadcrumb',
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
              name: 'How it works',
              item: 'https://miraee.ai/how-it-works',
            },
          ],
        },
      ],
    },
  ],
}
