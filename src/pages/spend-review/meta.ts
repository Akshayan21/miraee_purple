import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: "Travel spend analysis: review last year's travel | Miraee",
  description:
    "Want proof first? Send one booking report and get a trip-by-trip review of last year's travel from your own data. The report is yours to keep.",
  canonical: 'https://miraee.ai/spend-review',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: "Travel spend analysis: review last year's travel | Miraee",
    description:
      "Want proof first? Send one booking report and get a trip-by-trip review of last year's travel from your own data. The report is yours to keep.",
    url: 'https://miraee.ai/spend-review',
    image: 'https://miraee.ai/img/og/miraee-og-1200x630.jpg',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://miraee.ai/spend-review#webpage',
          url: 'https://miraee.ai/spend-review',
          name: "Travel spend analysis: review last year's travel | Miraee",
          description:
            "Want proof first? Send one booking report and get a trip-by-trip review of last year's travel from your own data. The report is yours to keep.",
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
            '@id': 'https://miraee.ai/spend-review#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/spend-review#breadcrumb',
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
              name: 'Spend review',
              item: 'https://miraee.ai/spend-review',
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://miraee.ai/spend-review#service',
          name: 'Miraee spend review',
          serviceType: 'travel spend review',
          description:
            "A trip-by-trip review of last year's travel from one booking report: bookings outside your travel program, spend outside policy, the cost of booking late, and unused or expired tickets.",
          provider: {
            '@id': 'https://miraee.ai/#organization',
          },
          areaServed: 'US',
          url: 'https://miraee.ai/spend-review',
        },
        faqPageJsonLd('https://miraee.ai/spend-review#faq', faq),
      ],
    },
  ],
}
