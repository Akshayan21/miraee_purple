import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Business travel resources and guides | Miraee',
  description:
    'Guides, a business travel policy template and checklists for finance and travel leads at companies of 300 to 1,500 people. From Miraee.',
  canonical: 'https://miraee.ai/resources',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Business travel resources and guides | Miraee',
    description:
      'Guides, a business travel policy template and checklists for finance and travel leads at companies of 300 to 1,500 people. From Miraee.',
    url: 'https://miraee.ai/resources',
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
          '@type': 'CollectionPage',
          '@id': 'https://miraee.ai/resources#webpage',
          url: 'https://miraee.ai/resources',
          name: 'Business travel resources and guides | Miraee',
          description:
            'Guides, a business travel policy template and checklists for finance and travel leads at companies of 300 to 1,500 people. From Miraee.',
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
            '@id': 'https://miraee.ai/resources#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'ItemList',
          '@id': 'https://miraee.ai/resources#list',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Business travel policy template',
              url: 'https://miraee.ai/resources/business-travel-policy-template',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'How to write a business travel policy your people will follow',
              url: 'https://miraee.ai/resources/business-travel-policy',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Travel and expense policy: what to include, with examples',
              url: 'https://miraee.ai/resources/travel-and-expense-policy',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Travel policy compliance: make the right option the easy one',
              url: 'https://miraee.ai/resources/travel-policy-compliance',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Travel expense reports: close month-end with fewer receipts to chase',
              url: 'https://miraee.ai/resources/travel-expense-report',
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: "The part-time corporate travel manager's guide",
              url: 'https://miraee.ai/resources/corporate-travel-manager',
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/resources#breadcrumb',
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
          ],
        },
      ],
    },
  ],
}
