import * as React from 'react'
import { Link } from 'react-router-dom'

import { Seo, type SeoMeta } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Kinetic } from '@/components/motion/kinetic'
import { Magnetic } from '@/components/motion/magnetic'
import { Button } from '@/components/ui/button'
import { BUTTONS } from '@/content/site'

export const SITE_META_BASE = { robots: 'noindex, nofollow' }

export function pageMeta(title: string, description: string): SeoMeta {
  return {
    title: `${title} | Miraee`,
    description,
    robots: SITE_META_BASE.robots,
    og: { type: 'website', title: `${title} | Miraee`, description },
  }
}

export function PageSeo({
  title,
  description,
  extra,
}: {
  title: string
  description: string
  extra?: Partial<SeoMeta>
}) {
  return <Seo meta={{ ...pageMeta(title, description), ...extra }} />
}

/** Superscript footnote reference linking to the notes list. Numbers are 1-based and match FOOTNOTES. */
export function Fn(_props: { n: number }) {
  return null
}

/** Section label with a rule. (`num` is accepted but no longer shown: the section numbering was removed.) */
export function ChapterHead({ label }: { num?: number; label: string }) {
  return (
    <div className="ed-chh">
      <span className="ed-chh__l ed-cap">{label}</span>
      <i className="ed-chh__rule" data-rv="rule" />
    </div>
  )
}

type ChapterProps = {
  id: string
  tone?: 'paper' | 'plum' | 'tang' | 'sand'
  className?: string
  labelledBy?: string
  children: React.ReactNode
}

/** A full-width band of the page. Plum bands re-theme every component inside them. */
export function Chapter({ id, tone = 'paper', className, labelledBy, children }: ChapterProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`ed-ch ed-ch--${tone} ${tone === 'plum' ? 'mr-plum' : ''} ${className ?? ''}`}
    >
      {children}
    </section>
  )
}

export function Heading({
  id,
  className = '',
  children,
  as = 'h2',
}: {
  id?: string
  className?: string
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <Kinetic as={as} id={id} className={`ed-h ${className}`}>
      {children}
    </Kinetic>
  )
}

/** The two buttons every page ends with. */
export function CtaPair({ className = '' }: { className?: string }) {
  return (
    <div className={`ed-btns ${className}`}>
      <Magnetic>
        <Button asChild size="lg">
          <DialogLink to="/sign-up" dialog="signup">
            {BUTTONS.signup}
          </DialogLink>
        </Button>
      </Magnetic>
      <Magnetic>
        <Button asChild size="lg" variant="secondary">
          <DialogLink to="/spend-review" dialog="review">
            {BUTTONS.review}
          </DialogLink>
        </Button>
      </Magnetic>
    </div>
  )
}

/** Big closing call to action on a tangerine band. */
export function ClosingBand({ headline }: { headline: string }) {
  return (
    <section className="ed-close" aria-labelledby="close-h">
      <div className="ed-wrap">
        <p className="ed-cap ed-close__cap">The next step</p>
        <Heading as="h2" id="close-h" className="ed-close__h">
          {headline}
        </Heading>
        <CtaPair />
        <p className="ed-close__small">
          Free to sign up and onboard, at any company size. The spend review is optional.
        </p>
      </div>
    </section>
  )
}

/** The notes list the superscripts point to. */
export function Footnotes(_props: { id?: string }) {
  return null
}

/** Text link with an arrow, in the editorial style. */
export function ArrowLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="ed-arrow">
      <span>{children}</span>
      <svg viewBox="0 0 24 12" width="24" height="12" aria-hidden="true">
        <path d="M0 6 H22 M16 1 L22 6 L16 11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </Link>
  )
}
