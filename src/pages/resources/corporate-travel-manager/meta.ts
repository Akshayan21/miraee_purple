import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Corporate travel manager guide for part-time travel leads',
  description:
    "Running company travel on top of your day job? A corporate travel manager's guide to policy, approvals, bookings and changes, in one place.",
  canonical: 'https://miraee.ai/resources/corporate-travel-manager',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Corporate travel manager guide for part-time travel leads',
    description:
      "Running company travel on top of your day job? A corporate travel manager's guide to policy, approvals, bookings and changes, in one place.",
    url: 'https://miraee.ai/resources/corporate-travel-manager',
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
          '@id': 'https://miraee.ai/resources/corporate-travel-manager#webpage',
          url: 'https://miraee.ai/resources/corporate-travel-manager',
          name: 'Corporate travel manager guide for part-time travel leads',
          description:
            "Running company travel on top of your day job? A corporate travel manager's guide to policy, approvals, bookings and changes, in one place.",
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
            '@id': 'https://miraee.ai/resources/corporate-travel-manager#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/corporate-travel-manager#article',
          headline: "The part-time corporate travel manager's guide",
          description:
            "Running company travel on top of your day job? A corporate travel manager's guide to policy, approvals, bookings and changes, in one place.",
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/corporate-travel-manager#webpage',
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
          '@id': 'https://miraee.ai/resources/corporate-travel-manager#breadcrumb',
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
              name: 'Corporate travel manager guide',
              item: 'https://miraee.ai/resources/corporate-travel-manager',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/resources/corporate-travel-manager#faq', faq),
      ],
    },
  ],
}
