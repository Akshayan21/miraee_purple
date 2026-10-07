import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Travel expense reports: close month-end with fewer chases',
  description:
    'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
  canonical: 'https://miraee.ai/resources/travel-expense-report',
  robots: 'index, follow',
  og: {
    type: 'article',
    title: 'Travel expense reports: close month-end with fewer chases',
    description:
      'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
    url: 'https://miraee.ai/resources/travel-expense-report',
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
          '@id': 'https://miraee.ai/resources/travel-expense-report#webpage',
          url: 'https://miraee.ai/resources/travel-expense-report',
          name: 'Travel expense reports: close month-end with fewer chases',
          description:
            'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
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
            '@id': 'https://miraee.ai/resources/travel-expense-report#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'Article',
          '@id': 'https://miraee.ai/resources/travel-expense-report#article',
          headline: 'Travel expense reports: close month-end with fewer receipts to chase',
          description:
            'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
          mainEntityOfPage: {
            '@id': 'https://miraee.ai/resources/travel-expense-report#webpage',
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
          '@id': 'https://miraee.ai/resources/travel-expense-report#breadcrumb',
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
              name: 'Travel expense reports',
              item: 'https://miraee.ai/resources/travel-expense-report',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://miraee.ai/resources/travel-expense-report#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a travel expense report?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A travel expense report lists the costs of a business trip, with a receipt, category and code for each line, so the company can check, post and reimburse them.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long should a travel expense report take to approve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A report with codes attached at booking, receipts matched to charges and a policy status on each line can be approved in one pass. Reports that need codes and receipts chased take the longest.',
              },
            },
            {
              '@type': 'Question',
              name: 'What should be on a travel month-end close checklist?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Coding every trip, matching card charges to receipts, chasing missing receipts, recording unused tickets, booking accruals, comparing spend with budget, releasing reimbursements and locking the period. The checklist above covers each step by close day.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can travelers submit receipts from their phone?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most modern tools let travelers upload a photo of the receipt during the trip. The sooner the receipt arrives, the sooner it can be matched to the card charge.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do we need a separate expense tool for travel?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Many companies keep one tool for booking and another for expense. When booking and expense share one trip record, the codes and receipts stay together, and month-end has less to reconcile.',
              },
            },
          ],
        },
      ],
    },
  ],
}
