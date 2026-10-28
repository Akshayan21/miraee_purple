import * as React from 'react'
import { Link } from 'react-router-dom'

import { Seo, type SeoMeta } from '@/components/common/seo'
import { PageArt } from '@/components/art/scenes'
import { FaqSection } from '@/components/art/home-sections'
import { ReportTile } from '@/components/art/report'
import {
  ClosingCta,
  Fn,
  GButton,
  ReviewButton,
  SignupButton,
} from '@/components/glass/ui'
import { ExtraBlocks } from '@/components/glass/extra-blocks'
import { EXTRAS, GUIDES } from '@/content/extras'
import { ExtraForm } from '@/pages/extras'
import { PAGES, type InnerPage } from '@/content/site'
import { faqPageJsonLd } from '@/lib/json-ld'
import { gsap } from '@/lib/gsap'
import { useMotion } from '@/lib/motion'

const PRICING_FAQ = [
  {
    q: 'Is there a headcount limit?',
    a: 'No. Sign-up and onboarding are free at any company size, the same for a company of 300 or 3,000.',
  },
  {
    q: 'What does onboarding include?',
    a: 'Company setup, policy setup, employee onboarding, payment settings, and training for your admins and finance team.',
  },
  {
    q: 'Can we keep our cards?',
    a: 'Yes. Add them during onboarding, and receipts match to card charges.',
  },
  {
    q: 'Do we need a spend review first?',
    a: 'It is optional, for teams who want to see their numbers before they switch.',
  },
]

function tilesFor(n: number) {
  if (n === 1) return ['s12']
  if (n === 2) return ['s6', 's6']
  if (n === 3) return ['s4', 's4', 's4']
  if (n === 4) return ['s6', 's6', 's6', 's6']
  if (n === 5) return ['s4', 's4', 's4', 's6', 's6']
  return Array.from({ length: n }, () => 's4')
}

function Sections({ page }: { page: InnerPage }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const spans = tilesFor(page.sections.length)
  const isGuides = page.art === 'guides'
  useMotion(ref, ({ root }) => {
    gsap.utils.toArray<SVGCircleElement>('.sn-ring', root).forEach((c) => {
      gsap.set(c, { drawSVG: '0%' })
      gsap.to(c, {
        drawSVG: '100%',
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: c, start: 'top 90%', once: true },
      })
    })
  })
  return (
    <section className="sec sec--tight" aria-labelledby="secs-h" ref={ref}>
      <div className="wrap">
        <h2
          className={page.sectionsLabel ? 'disp h-md secs-label' : 'mr-sr'}
          id="secs-h"
          data-reveal
        >
          {page.sectionsLabel ?? `${page.title}, in detail`}
        </h2>
        <div className="bento">
          {isGuides ? (
            <Link
              to="/resources/business-travel-policy-template"
              className="tile tile--plum tile--lift s12 guide-feature"
              data-reveal
            >
              <p className="eyebrow">Template</p>
              <h3 className="disp h-md">
                A travel policy template your team can edit and use today.
              </h3>
              <span className="gb gb--pri">Download the template</span>
              <span className="gf-docs" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </Link>
          ) : null}
          {page.sections.map((s, i) => (
            <article
              key={s.title}
              className={`tile tile--lift ${spans[i]} sn${i === 1 && page.sections.length > 2 ? 'tile--tint' : ''}`}
              data-reveal
            >
              <svg className="sn-svg" viewBox="0 0 44 44" aria-hidden="true">
                <circle className="sn-track" cx="22" cy="22" r="19" />
                <circle className="sn-ring" cx="22" cy="22" r="19" />
              </svg>
              <span className="sn-n fig" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="disp h-sm">{s.title}</h3>
              <p className="p">
                {s.body}
                {page.path === '/company' && s.title === 'Mondee' ? <Fn n={[1, 2]} /> : null}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InnerPageView({ page }: { page: InnerPage }) {
  const isReview = page.path === '/spend-review'
  const meta: SeoMeta = {
    title: `${page.title} | Miraee`,
    description: page.sub,
    robots: 'noindex, nofollow',
    jsonLd:
      page.path === '/pricing'
        ? [
            {
              '@context': 'https://schema.org',
              '@graph': [
                faqPageJsonLd(
                  '/pricing#faq',
                  PRICING_FAQ.map((f) => ({ question: f.q, answer: f.a })),
                ),
              ],
            },
          ]
        : undefined,
  }
  const buttons = page.buttons ?? []
  return (
    <>
      <Seo meta={meta} />
      <main id="main" className="page-main" tabIndex={-1}>
        <section className="sec sec--hero" aria-labelledby="page-h">
          <div className="wrap">
            <div className="bento ihero">
              <div className="tile s7 ihero-text" data-reveal>
                <p className="eyebrow">{page.eyebrow}</p>
                <h1 className="disp h-xl ih1" id="page-h">
                  {page.h1}
                </h1>
                <p className="lead">{page.sub}</p>
                {buttons.length > 0 || isReview ? (
                  <div className="row">
                    {isReview ? (
                      <GButton to="/spend-review#request">Get my spend review</GButton>
                    ) : null}
                    {buttons.map((b) => (
                      <GButton
                        key={b.label}
                        to={b.to}
                        variant={
                          b.kind === 'primary' ? 'pri' : b.kind === 'secondary' ? 'sec' : 'link'
                        }
                      >
                        {b.label}
                      </GButton>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="s5 ihero-art" data-reveal>
                <PageArt page={page} />
              </div>
            </div>
          </div>
        </section>

        <Sections page={page} />

        {isReview ? (
          <section className="sec sec--tight" aria-label="Review report">
            <div className="wrap">
              <div className="bento">
                <ReportTile className="s12" />
              </div>
            </div>
          </section>
        ) : null}

        {EXTRAS[page.path] ? <ExtraBlocks blocks={EXTRAS[page.path]} /> : null}

        <ExtraForm path={page.path} />

        {page.path === '/pricing' ? (
          <FaqSection items={PRICING_FAQ} title="Questions about pricing." id="price-faq-h" />
        ) : null}

        {page.closing === false ? (
          <section className="sec sec--tight" aria-label="Next steps">
            <div className="wrap">
              <div className="tile tile--plum row end-row" data-reveal>
                <SignupButton variant="pri" />
                <ReviewButton variant="sec" />
              </div>
            </div>
          </section>
        ) : (
          <ClosingCta />
        )}
      </main>
    </>
  )
}

const cache = new Map<string, () => React.JSX.Element>()
/** Component for a route path, built from the PAGES data. */
export function innerComponent(path: string) {
  let c = cache.get(path)
  if (!c) {
    const page = PAGES.find((p) => p.path === path)
    if (!page) throw new Error(`No page data for ${path}`)
    const Comp = () => <InnerPageView page={page} />
    Comp.displayName = `Page(${path})`
    c = Comp
    cache.set(path, c)
  }
  return c
}

const guideCache = new Map<string, () => React.JSX.Element>()
/** Component for a guide at /resources/<slug>, built from the GUIDES data. */
export function guideComponent(slug: string) {
  let c = guideCache.get(slug)
  if (!c) {
    const g = GUIDES.find((x) => x.slug === slug)
    if (!g) throw new Error(`No guide for ${slug}`)
    const page: InnerPage = {
      path: `/resources/${g.slug}`,
      title: g.title,
      eyebrow: g.eyebrow,
      h1: g.title,
      sub: g.sub,
      art: 'guides',
      sections: [],
      buttons: [{ label: 'All guides', to: '/resources', kind: 'link' }],
    }
    const Comp = () => (
      <>
        <Seo
          meta={{ title: `${g.title} | Miraee`, description: g.sub, robots: 'noindex, nofollow' }}
        />
        <main id="main" className="page-main" tabIndex={-1}>
          <section className="sec sec--hero" aria-labelledby="page-h">
            <div className="wrap">
              <div className="bento ihero">
                <div className="tile s7 ihero-text" data-reveal>
                  <p className="eyebrow">{page.eyebrow}</p>
                  <h1 className="disp h-xl ih1" id="page-h">
                    {page.h1}
                  </h1>
                  <p className="lead">{page.sub}</p>
                  <div className="row">
                    <GButton to="/resources" variant="link">
                      All guides
                    </GButton>
                  </div>
                </div>
                <div className="s5 ihero-art" data-reveal>
                  <PageArt page={page} />
                </div>
              </div>
            </div>
          </section>
          <ExtraBlocks blocks={g.blocks} idPrefix="g" />
          <ClosingCta />
        </main>
      </>
    )
    Comp.displayName = `Guide(${slug})`
    c = Comp
    guideCache.set(slug, Comp)
  }
  return c
}
