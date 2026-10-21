import type { SeoMeta } from '@/components/common/seo'

export const meta: SeoMeta = {
  title: 'About Miraee | Built by Tabhi, behind the Mondee marketplace',
  description:
    'Miraee is business travel and expense software built by Tabhi, the company behind the Mondee travel marketplace, with global flight and hotel coverage.',
  canonical: 'https://miraee.ai/company',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'About Miraee | Built by Tabhi, behind the Mondee marketplace',
    description:
      'Miraee is business travel and expense software built by Tabhi, the company behind the Mondee travel marketplace, with global flight and hotel coverage.',
    url: 'https://miraee.ai/company',
    image: 'https://miraee.ai/img/og/og-company.jpg',
    imageWidth: '1200',
    imageHeight: '630',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': 'https://miraee.ai/company#webpage',
          url: 'https://miraee.ai/company',
          name: 'About Miraee | Built by Tabhi, behind the Mondee marketplace',
          description:
            'Miraee is business travel and expense software built by Tabhi, the company behind the Mondee travel marketplace, with global flight and hotel coverage.',
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
            '@id': 'https://miraee.ai/company#breadcrumb',
          },
        },
        {
          '@type': 'Organization',
          '@id': 'https://miraee.ai/#organization',
          name: 'Miraee',
          url: 'https://miraee.ai/',
          logo: 'https://miraee.ai/img/miraee-logo-orange.svg',
          description:
            'Miraee is business travel and expense software, built by Tabhi, the company behind the Mondee travel marketplace.',
          disambiguatingDescription:
            'Business travel and expense software for US companies. Unrelated to Mirai or Mirae.',
          parentOrganization: {
            '@type': 'Organization',
            name: 'Tabhi',
            url: 'https://tabhi.ai',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/company#breadcrumb',
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
              name: 'Company',
              item: 'https://miraee.ai/company',
            },
          ],
        },
      ],
    },
  ],
}
