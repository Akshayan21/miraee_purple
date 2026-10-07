import type { SeoMeta } from '@/components/common/seo'

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
        {
          '@type': 'FAQPage',
          '@id': 'https://miraee.ai/resources/travel-policy-compliance#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a good travel policy compliance rate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on how you define it and how your company travels. Track channel share and in-policy rate separately, set your own baseline from last quarter, and aim to improve both each quarter.',
              },
            },
            {
              '@type': 'Question',
              name: 'How do we find bookings made outside the program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Match your expense claims and card charges against your booking channel's report. Trips that appear in expenses but not in the booking report were booked elsewhere.",
              },
            },
            {
              '@type': 'Question',
              name: 'Do we need pre-trip approval for every trip?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most companies of 300 to 1,500 people, approval only for out-of-policy trips works better. Routine trips book straight away, and approvers see the exceptions that need a decision.',
              },
            },
            {
              '@type': 'Question',
              name: 'How often should we measure compliance?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Monthly, after month-end close, using the same definitions each time. Review the trend quarterly with finance.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where do we start if our policy is out of date?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Start with the policy itself. Our guide on how to write a business travel policy and the business travel policy template cover the sections to include.',
              },
            },
          ],
        },
      ],
    },
  ],
}
