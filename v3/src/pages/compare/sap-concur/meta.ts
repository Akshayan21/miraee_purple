import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'SAP Concur alternatives: Miraee vs SAP Concur',
  description:
    'Compare Miraee and SAP Concur on onboarding, travel policy, approvals and the finance view. See where each fits for a company of 300 to 1,500.',
  canonical: 'https://miraee.ai/compare/sap-concur',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'SAP Concur alternatives: Miraee vs SAP Concur',
    description:
      'Compare Miraee and SAP Concur on onboarding, travel policy, approvals and the finance view. See where each fits for a company of 300 to 1,500.',
    url: 'https://miraee.ai/compare/sap-concur',
    image: 'https://miraee.ai/img/og/og-compare-sap-concur.jpg',
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
          '@id': 'https://miraee.ai/compare/sap-concur#webpage',
          url: 'https://miraee.ai/compare/sap-concur',
          name: 'SAP Concur alternatives: Miraee vs SAP Concur',
          description:
            'Compare Miraee and SAP Concur on onboarding, travel policy, approvals and the finance view. See where each fits for a company of 300 to 1,500.',
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
            '@id': 'https://miraee.ai/compare/sap-concur#breadcrumb',
          },
          dateModified: '2026-09-30',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/compare/sap-concur#breadcrumb',
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
              name: 'Compare',
              item: 'https://miraee.ai/compare',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Miraee vs SAP Concur',
              item: 'https://miraee.ai/compare/sap-concur',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/compare/sap-concur#faq', faq),
      ],
    },
  ],
}
