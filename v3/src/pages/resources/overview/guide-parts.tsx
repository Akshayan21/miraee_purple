import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Reveal } from '@/components/scenes/reveal'
import { Band, PageClosing, SectionHead } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { GUIDES, type Guide } from './guides'
import styles from './guide-parts.module.css'

/** A photo with V1's size and alt, for the hero window. */
export function HeroPhoto({
  src,
  width,
  height,
  alt,
}: {
  src: string
  width: number
  height: number
  alt: string
}) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        className={styles.photo}
        src={`${src}.jpg`}
        width={width}
        height={height}
        alt={alt}
        {...{ fetchpriority: 'high' }}
      />
    </picture>
  )
}

/** The cover of the policy template, as on V1 (global doc-cover styles). */
export function DocCover({ hidden, large }: { hidden?: boolean; large?: boolean }) {
  return (
    <div
      className={`doc-cover ${styles.cover} ${large ? styles.coverLarge : ''}`}
      aria-hidden={hidden ? 'true' : undefined}
    >
      <div className="doc-cover__top">
        <img src="/img/miraee-logo-orange.svg" alt="" width="84" height="21" />
      </div>
      <div className="doc-cover__photo">
        <picture>
          <source srcSet="/img/document/resources-template-card-1.webp" type="image/webp" />
          <img
            src="/img/document/resources-template-card-1.jpg"
            width="1364"
            height="2046"
            alt="A traveler works on a laptop at a window desk with her bag beside her."
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <p className="doc-cover__t">{'The Business Travel Policy Template for Growing Companies'}</p>
      <p className="doc-cover__s">{'Travel and expense policy · Rollout checklist'}</p>
    </div>
  )
}

/** Image cards that link to the guides. */
export function GuideCards({ items, columns = 3 }: { items: Guide[]; columns?: 2 | 3 }) {
  return (
    <ul className={`${styles.cards} ${columns === 3 ? styles.cards3 : ''}`}>
      {items.map((g, i) => (
        <Reveal
          as="li"
          key={g.to}
          threshold={0.15}
          className={styles.card}
          style={{ '--i': i % 3 } as CSSProperties}
        >
          <Link to={g.to}>
            <span className={styles.cardImg}>
              <picture>
                <source srcSet={`${g.img}.webp`} type="image/webp" />
                <img
                  src={`${g.img}.jpg`}
                  width={g.width}
                  height={g.height}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </span>
            <span className={styles.cardBody}>
              <span className={styles.cardKicker}>{g.kicker}</span>
              <span className={styles.cardTitle}>{g.title}</span>
              <span className={styles.cardDesc}>{g.description}</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  )
}

/** The "Keep reading" band at the foot of a guide. */
export function RelatedBand({ slugs }: { slugs: string[] }) {
  return (
    <Band tone="lilac" aria-labelledby="more-h">
      <SectionHead id="more-h" title="Keep reading" />
      <GuideCards items={slugs.map((s) => GUIDES[s])} />
      <p className={styles.more}>
        <Button asChild variant="tertiary">
          <Link to="/resources">{'More business travel resources'}</Link>
        </Button>
      </p>
    </Band>
  )
}

/** The closing landing shared by the resources pages (V1's closing band). */
export function ResourcesClosing({
  title,
  accent,
  body,
  secondary,
}: {
  title: string
  accent: string
  body: string
  secondary: { label: string; to: string }
}) {
  const at = title.lastIndexOf(accent)
  return (
    <PageClosing
      title={
        <>
          {title.slice(0, at)}
          <span className={shared.accent}>{title.slice(at)}</span>
        </>
      }
      lead={body}
      actions={
        <>
          <Button asChild>
            <DialogLink to="/sign-up" dialog="signup">
              Sign up free
            </DialogLink>
          </Button>
          <Button asChild variant="secondary">
            <Link to={secondary.to}>{secondary.label}</Link>
          </Button>
        </>
      }
    />
  )
}

/** A clearly marked "From Miraee" product section inside a guide's prose. */
export function ProductCallout({ children }: { children: ReactNode }) {
  return (
    <aside className={styles.callout}>
      <p className={styles.calloutKicker}>{'From Miraee'}</p>
      {children}
    </aside>
  )
}

/** A product view inside prose: a labelled figure that swings in and settles flat. */
export function ViewFigure({
  label,
  tone,
  children,
}: {
  label: string
  tone?: 'plum'
  children: ReactNode
}) {
  return (
    <Reveal
      as="figure"
      className={`${styles.figure} ${tone === 'plum' ? styles.figurePlum : ''}`}
      role="img"
      aria-label={label}
    >
      {children}
      <figcaption className={styles.caption}>{'Product view with illustrative data.'}</figcaption>
    </Reveal>
  )
}

/** A list of ticks to copy, e.g. a rollout checklist. */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className={styles.checklist}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}
