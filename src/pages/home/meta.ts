import type { SeoMeta } from '@/components/common/seo'
import { faqPageJsonLd } from '@/lib/json-ld'
import { faq } from './faq'

export const meta: SeoMeta = {
  title: 'Miraee | Business travel and expense management software',
  description:
    'See where your travel money goes. Miraee is business travel and expense software: policy on every booking, every trip coded for finance. Free to sign up.',
  canonical: 'https://miraee.ai/',
  robots: 'index, follow',
  og: {
    type: 'website',
    title: 'Miraee | Business travel and expense management software',
    description:
      'See where your travel money goes. Miraee is business travel and expense software: policy on every booking, every trip coded for finance. Free to sign up.',
    url: 'https://miraee.ai/',
    image: 'https://miraee.ai/img/og/miraee-og-1200x630.jpg',
  },
  twitterCard: 'summary_large_image',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://miraee.ai/#organization',
          name: 'Miraee',
          url: 'https://miraee.ai/',
          logo: 'https://miraee.ai/img/miraee-logo-orange.svg',
          description:
            'Miraee is business travel and expense software, built by Tabhi, the company behind the Mondee travel marketplace.',
          parentOrganization: {
            '@type': 'Organization',
            name: 'Tabhi',
            url: 'https://tabhi.ai',
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://miraee.ai/#website',
          name: 'Miraee',
          url: 'https://miraee.ai/',
          inLanguage: 'en-US',
          publisher: {
            '@id': 'https://miraee.ai/#organization',
          },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://miraee.ai/#software',
          name: 'Miraee',
          applicationCategory: 'BusinessApplication',
          applicationSubCategory: 'Business travel and expense software',
          operatingSystem: 'Web',
          url: 'https://miraee.ai/',
          description:
            'Miraee is business travel and expense software. Your people book flights and hotels inside company policy, and finance sees every trip with its budget and GL code.',
          publisher: {
            '@id': 'https://miraee.ai/#organization',
          },
        },
        faqPageJsonLd('https://miraee.ai/#faq', faq),
      ],
    },
  ],
}
