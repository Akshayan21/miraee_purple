import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'Security at Miraee | Sign-in, your data, security pack',
  description:
    "How Miraee handles your company's travel data: Google sign-in, a data processing agreement and a completed security questionnaire, sent on request.",
  canonical: 'https://miraee.ai/security',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Security at Miraee | Sign-in, your data, security pack',
    description:
      "How Miraee handles your company's travel data: Google sign-in, a data processing agreement and a completed security questionnaire, sent on request.",
    url: 'https://miraee.ai/security',
    image: 'https://miraee.ai/img/og/og-security.jpg',
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
          '@id': 'https://miraee.ai/security#webpage',
          url: 'https://miraee.ai/security',
          name: 'Security at Miraee | Sign-in, your data, security pack',
          description:
            "How Miraee handles your company's travel data: Google sign-in, a data processing agreement and a completed security questionnaire, sent on request.",
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
            '@id': 'https://miraee.ai/security#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/security#breadcrumb',
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
              name: 'Security',
              item: 'https://miraee.ai/security',
            },
          ],
        },
      ],
    },
  ],
}
