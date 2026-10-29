import { Seo, type SeoMeta } from '@/components/common/seo'
import { HeroBento } from '@/components/art/hero'
import { HowScene } from '@/components/art/how'
import {
  FaqSection,
  ProofStrip,
  RolesSection,
  SecuritySection,
  SpendingSection,
} from '@/components/art/home-sections'
import { GroupSection } from '@/components/art/group'
import { PlansSection } from '@/components/art/plans'
import { SpendReviewHome } from '@/components/art/report'
import { ClosingCta } from '@/components/glass/ui'
import { HOME } from '@/content/site'
import { faqPageJsonLd } from '@/lib/json-ld'

const meta: SeoMeta = {
  title: 'Miraee | Business travel and expense software',
  description: `${HOME.hero.headline} ${HOME.hero.sub}`,
  robots: 'noindex, nofollow',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        faqPageJsonLd(
          '/#faq',
          HOME.faq.map((f) => ({ question: f.q, answer: f.a })),
        ),
      ],
    },
  ],
}

/** Route: / */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main" className="page-main" tabIndex={-1}>
        <HeroBento />
        <ProofStrip />
        <HowScene />
        <SpendingSection />
        <SpendReviewHome />
        <PlansSection />
        <GroupSection />
        <RolesSection />
        <SecuritySection />
        <FaqSection />
        <ClosingCta footnotes sample />
      </main>
    </>
  )
}
Component.displayName = 'HomePage'
