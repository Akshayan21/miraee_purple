import * as React from 'react'
import { Link } from 'react-router-dom'

import { PageArt } from '@/components/art/scenes'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Magnetic } from '@/components/motion/magnetic'
import {
  ChapterHead,
  ClosingBand,
  CtaPair,
  Footnotes,
  Fn,
  Heading,
  PageSeo,
} from '@/components/page/kit'
import { ExtraBlocks } from '@/components/page/extra-blocks'
import { HorizontalSteps } from '@/components/page/horizontal-steps'
import { PagePhoto } from '@/components/page/page-photo'
import { Button } from '@/components/ui/button'
import { Kinetic } from '@/components/motion/kinetic'
import { EXTRAS } from '@/content/extras'
import { photoFor } from '@/content/photos'
import type { InnerPage } from '@/content/site'

/** The group logos shown in place of the names on the About Tabhi page. */
const GROUP_LOGOS: Record<string, { src: string; w: number; h: number }> = {
  Mondee: { src: '/img/logo-mondee.svg', w: 144, h: 30 },
  Abhee: { src: '/img/logo-abhee.webp', w: 640, h: 162 },
  Miraee: { src: '/img/miraee-logo-orange.svg', w: 338, h: 84 },
}

type PageButton = NonNullable<InnerPage['buttons']>[number]

function PageButtonView({ b }: { b: PageButton }) {
  const variant = b.kind === 'secondary' ? 'secondary' : b.kind === 'link' ? 'tertiary' : 'default'
  const inner =
    b.to === '/sign-up' ? (
      <DialogLink to="/sign-up" dialog="signup">
        {b.label}
      </DialogLink>
    ) : (
      <Link to={b.to}>{b.label}</Link>
    )
  return (
    <Magnetic>
      <Button asChild size="lg" variant={variant}>
        {inner}
      </Button>
    </Magnetic>
  )
}

/** Breadcrumb in small caps. */
export function Crumbs({ here }: { here: string }) {
  return (
    <nav className="ed-crumbs ed-cap" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{here}</span>
    </nav>
  )
}

/** Page hero: headline on the left, the page's own motion scene on the right. */
export function PageHero({
  page,
  art,
  children,
}: {
  page: InnerPage
  art?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="ed-ch ed-phero" aria-labelledby="page-h">
      <div className="ed-wrap ed-phero__grid">
        <div className="ed-phero__copy">
          <Crumbs here={page.eyebrow} />
          <Kinetic as="h1" id="page-h" hero className="ed-h ed-h--page">
            {page.h1}
          </Kinetic>
          <p className="ed-lead ed-phero__sub">{page.sub}</p>
          <div className="ed-btns">
            {children ??
              (page.buttons ? (
                page.buttons.map((b) => <PageButtonView key={b.label} b={b} />)
              ) : (
                <CtaPair />
              ))}
          </div>
        </div>
        <div className="ed-phero__art">
          {art ?? (photoFor(page.path) ? <PagePhoto path={page.path} /> : <PageArt page={page} />)}
        </div>
      </div>
    </section>
  )
}

/** Sections as an editorial numbered list with rules that draw in. */
export function NumberedList({ page }: { page: InnerPage }) {
  const isGuides = page.art === 'guides'
  return (
    <section className="ed-ch ed-lst" aria-labelledby="lst-h">
      <div className="ed-wrap">
        <ChapterHead label={page.sectionsLabel ?? page.eyebrow} />
        <h2 id="lst-h" className="mr-sr">
          {page.sectionsLabel ?? `${page.title}: in detail`}
        </h2>
        <ol className="ed-rows">
          {page.sections.map((s, i) => (
            <li key={s.title} className="ed-row" data-rv="stagger">
              <span className="ed-row__n ed-stat">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="ed-row__t">
                {page.path === '/company' && GROUP_LOGOS[s.title] ? (
                  <img
                    className={`ed-row__logo ed-row__logo--${s.title.toLowerCase()}`}
                    src={GROUP_LOGOS[s.title].src}
                    width={GROUP_LOGOS[s.title].w}
                    height={GROUP_LOGOS[s.title].h}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  s.title
                )}
              </h3>
              <p className="ed-row__b">
                {page.path === '/company' && s.title === 'Mondee' ? (
                  <>
                    The travel marketplace connecting to more than 500 airlines
                    <Fn n={1} /> and over 1 million hotels and vacation rentals
                    <Fn n={2} />.
                  </>
                ) : isGuides ? (
                  <span className="ed-row__read">
                    {s.body}
                    <svg viewBox="0 0 24 12" width="24" height="12" aria-hidden="true">
                      <path
                        d="M0 6 H22 M16 1 L22 6 L16 11"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                ) : (
                  s.body
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** The end of every page: the full closing band, or a slim bar with the same two buttons. */
export function PageEnd({ page }: { page?: Pick<InnerPage, 'closing'> }) {
  if (page?.closing === false || !page) {
    return (
      <section className="ed-end" aria-label="Next steps">
        <div className="ed-wrap ed-end__in">
          <Heading as="h2" className="ed-end__h">
            See where your travel money goes.
          </Heading>
          <CtaPair />
        </div>
      </section>
    )
  }
  return <ClosingBand headline="See where your travel money goes." />
}

/** One inner page built from the PAGES data. Extra sections (forms, questions) slot in after the list. */
export function InnerPageView({
  page,
  extra,
  hero,
}: {
  page: InnerPage
  extra?: React.ReactNode
  hero?: React.ReactNode
}) {
  // The video library is the highlight of its page: it sits right under the hero, not at the bottom.
  const blocks = EXTRAS[page.path] ?? []
  const featured = blocks.filter((b) => b.kind === 'videos')
  const rest = blocks.filter((b) => b.kind !== 'videos')
  return (
    <>
      <PageSeo title={page.title} description={page.sub} />
      <main id="main" className="ed-main ed-inner">
        <PageHero page={page} art={hero} />
        {featured.length ? <ExtraBlocks blocks={featured} idPrefix="f" featured /> : null}
        {page.path === '/how-it-works' ? (
          <HorizontalSteps page={page} fallback={<NumberedList page={page} />} />
        ) : (
          <NumberedList page={page} />
        )}
        {rest.length ? <ExtraBlocks blocks={rest} /> : null}
        {extra}
        <PageEnd page={page} />
        {page.path === '/company' ? <Footnotes /> : null}
      </main>
    </>
  )
}
