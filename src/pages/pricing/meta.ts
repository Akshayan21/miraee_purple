import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Miraee pricing | Free to sign up and onboard, any size',
  description:
    'Signing up is free. Onboarding is free: we set up your company, your travel policy and your people with you. The same is true at any company size.',
  canonical: 'https://miraee.ai/pricing',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Miraee pricing | Free to sign up and onboard, any size',
    description:
      'Signing up is free. Onboarding is free: we set up your company, your travel policy and your people with you. The same is true at any company size.',
    url: 'https://miraee.ai/pricing',
    image: 'https://miraee.ai/img/og/og-pricing.jpg',
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
          '@id': 'https://miraee.ai/pricing#webpage',
          url: 'https://miraee.ai/pricing',
          name: 'Miraee pricing | Free to sign up and onboard, any size',
          description:
            'Signing up is free. Onboarding is free: we set up your company, your travel policy and your people with you. The same is true at any company size.',
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
            '@id': 'https://miraee.ai/pricing#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://miraee.ai/pricing#breadcrumb',
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
              name: 'Pricing',
              item: 'https://miraee.ai/pricing',
            },
          ],
        },
        faqPageJsonLd('https://miraee.ai/pricing#faq', faq),
      ],
    },
  ],
}
