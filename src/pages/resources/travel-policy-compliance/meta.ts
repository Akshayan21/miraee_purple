import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Travel policy compliance: make the right option easy',
  description:
    'Keep bookings inside travel policy by making the right option the easy one: clear rules, in-policy options, and approvals only when needed.',
  canonical: 'https://miraee.ai/resources/travel-policy-compliance',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Travel policy compliance: make the right option easy',
    description:
      'Keep bookings inside travel policy by making the right option the easy one: clear rules, in-policy options, and approvals only when needed.',
    url: 'https://miraee.ai/resources/travel-policy-compliance',
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
          '@id': 'https://miraee.ai/resources/travel-policy-compliance#webpage',
          url: 'https://miraee.ai/resources/travel-policy-compliance',
          name: 'Travel policy compliance: make the right option easy',
          description:
            'Keep bookings inside travel policy by making the right option the easy one: clear rules, in-policy options, and approvals only when needed.',
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
            '@id': 'https://miraee.ai/resources/travel-policy-compliance#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/travel-policy-compliance#article',
          headline: 'Travel policy compliance: make the right option the easy one',
          description:
            'Keep bookings inside travel policy by making the right option the easy one: clear rules, in-policy options, and approvals only when needed.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/travel-policy-compliance#webpage',
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
          '@id': 'https://miraee.ai/resources/travel-policy-compliance#breadcrumb',
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
              name: 'Travel policy compliance',
              item: 'https://miraee.ai/resources/travel-policy-compliance',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/resources/travel-policy-compliance#faq', faq),
      ],
    },
  ],
}
