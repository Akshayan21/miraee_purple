import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Business travel policy: how to write one people follow',
  description:
    'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
  canonical: 'https://miraee.ai/resources/business-travel-policy',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Business travel policy: how to write one people follow',
    description:
      'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
    url: 'https://miraee.ai/resources/business-travel-policy',
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
          '@id': 'https://miraee.ai/resources/business-travel-policy#webpage',
          url: 'https://miraee.ai/resources/business-travel-policy',
          name: 'Business travel policy: how to write one people follow',
          description:
            'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
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
            '@id': 'https://miraee.ai/resources/business-travel-policy#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/business-travel-policy#article',
          headline: 'How to write a business travel policy your people will follow',
          description:
            'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/business-travel-policy#webpage',
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
          '@id': 'https://miraee.ai/resources/business-travel-policy#breadcrumb',
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
              name: 'Business travel policy',
              item: 'https://miraee.ai/resources/business-travel-policy',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://miraee.ai/resources/business-travel-policy#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long should a business travel policy be?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A few pages is enough for most companies of 300 to 1,500 people. Travelers need the booking channel, the limits and the approval rule. Put detail for finance, such as GL codes and cost centers, in a separate section or in the booking tool.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between a business travel policy and a travel and expense policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A business travel policy covers how trips are booked and what they can cost. A travel and expense policy adds how expenses are submitted, checked and reimbursed. Many companies combine them. Our guide to the travel and expense policy covers the expense side.',
              },
            },
            {
              '@type': 'Question',
              name: 'Should every trip need approval?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most growing companies, approval works best only when something is out of policy. Routine trips inside the rules are booked straight away, and approvers see the exceptions that need a decision.',
              },
            },
            {
              '@type': 'Question',
              name: 'How often should we update our travel policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Twice a year, and after any big change in how the company travels. Hotel limits need the most frequent attention because city rates change.',
              },
            },
            {
              '@type': 'Question',
              name: 'How do we get people to follow the policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Make the company booking channel the easiest way to book, put a number on every limit, and show the rules on the options people choose from. Our guide to travel policy compliance covers this in detail.',
              },
            },
          ],
        },
      ],
    },
  ],
}
