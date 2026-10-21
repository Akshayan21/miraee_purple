import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Travel and expense policy: what to include, with examples',
  description:
    'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
  canonical: 'https://miraee.ai/resources/travel-and-expense-policy',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Travel and expense policy: what to include, with examples',
    description:
      'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
    url: 'https://miraee.ai/resources/travel-and-expense-policy',
    image: 'https://miraee.ai/img/og/og-resources-finance.jpg',
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
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#webpage',
          url: 'https://miraee.ai/resources/travel-and-expense-policy',
          name: 'Travel and expense policy: what to include, with examples',
          description:
            'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
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
            '@id': 'https://miraee.ai/resources/travel-and-expense-policy#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#article',
          headline: 'Travel and expense policy: what to include, with examples',
          description:
            'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/travel-and-expense-policy#webpage',
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
          image: 'https://miraee.ai/img/og/og-resources-finance.jpg',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#breadcrumb',
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
              name: 'Travel and expense policy',
              item: 'https://miraee.ai/resources/travel-and-expense-policy',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://miraee.ai/resources/travel-and-expense-policy#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a travel and expense policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A travel and expense policy sets the rules for business trips and the costs that come with them: what is reimbursable, the limits, the receipts required, the submission deadline, who approves and when employees are paid back.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long should employees have to submit expenses?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Thirty days after the end of the trip is a common deadline. It gives travelers time and keeps month-end close on schedule. Older claims can need finance approval.',
              },
            },
            {
              '@type': 'Question',
              name: 'What counts as a valid receipt?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'An itemized receipt that shows the merchant, date, items and amount paid. Card slips alone usually do not show the items. For a lost receipt, ask for a short written statement with the same details.',
              },
            },
            {
              '@type': 'Question',
              name: 'Should we use per diems or actual costs for meals?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Both work. Actual cost up to a daily limit is easier to audit; a per diem is simpler for travelers. Choose one and use it for every trip.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where can I find a template?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our business travel policy template includes the booking and expense sections in one editable document, with a rollout checklist.',
              },
            },
          ],
        },
      ],
    },
  ],
}
