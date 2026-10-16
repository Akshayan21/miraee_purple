import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Corporate travel booking tool for travel managers | Miraee',
  description:
    'Set your travel policy once and it runs on every booking. Approvals reach you only when something is out of policy. Free onboarding for your team.',
  canonical: 'https://miraee.ai/travel-managers',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Corporate travel booking tool for travel managers | Miraee',
    description:
      'Set your travel policy once and it runs on every booking. Approvals reach you only when something is out of policy. Free onboarding for your team.',
    url: 'https://miraee.ai/travel-managers',
    image: 'https://miraee.ai/img/og/miraee-og-1200x630.jpg',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://miraee.ai/travel-managers#webpage',
          url: 'https://miraee.ai/travel-managers',
          name: 'Corporate travel booking tool for travel managers | Miraee',
          description:
            'Set your travel policy once and it runs on every booking. Approvals reach you only when something is out of policy. Free onboarding for your team.',
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
            '@id': 'https://miraee.ai/travel-managers#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/travel-managers#breadcrumb',
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
              name: 'For travel managers',
              item: 'https://miraee.ai/travel-managers',
            },
          ],
        },
      ],
    },
  ],
}
