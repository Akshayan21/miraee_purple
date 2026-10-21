import * as React from 'react'
import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import { Band, PageClosing, type Tone } from '@/components/page/kit'
import styles from './compare.module.css'

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ')

/** Body copy for a block of paragraphs. `dark` for night and plum bands. */
export function Copy({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return <div className={cx(styles.text, dark && styles.dark)}>{children}</div>
}

/** A section heading inside a split or beat. Keeps V1's anchor id. */
export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className={styles.h2}>
      {children}
    </h2>
  )
}

/** Heading on the left, text on the right. */
export function Beat({
  id,
  title,
  dark,
  children,
}: {
  id?: string
  title: React.ReactNode
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <Reveal className={cx(styles.beat, dark && styles.beatDark)}>
      <h2 id={id} className={styles.h2}>
        {title}
      </h2>
      <Copy dark={dark}>{children}</Copy>
    </Reveal>
  )
}

export function IllustrativeNote({ dark }: { dark?: boolean }) {
  void dark
  return null
}

export function TableNote({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return <p className={cx(styles.tableNote, dark && styles.tableNoteDark)}>{children}</p>
}

/** The two buttons used by every comparison hero. */
export function HeroActions() {
  return (
    <>
      <Button asChild>
        <DialogLink to="/sign-up" dialog="signup">
          Sign up free
        </DialogLink>
      </Button>
      <Button asChild variant="secondary">
        <DialogLink to="/spend-review" dialog="review">
          Get a spend review
        </DialogLink>
      </Button>
    </>
  )
}

/** "Free to sign up..." note plus the dated meta line. `meta` is passed verbatim from V1. */
export function HeroMeta({ children }: { children: React.ReactNode }) {
  return <p className={styles.metaLine}>{children}</p>
}

export const HERO_TRUST = 'Free to sign up and onboard, at any company size.'

/** The closing window every comparison page shares. */
export function CompareClosing({ title }: { title: string }) {
  return (
    <PageClosing
      title={title}
      lead="Free to sign up and onboard, at any company size. Want proof first? Get a review of last year's travel."
      actions={<HeroActions />}
    />
  )
}

/** "On this page": the V1 table of contents as a row of anchor pills. */
export function OnThisPage({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className={styles.onPage} aria-label="On this page">
      <p>On this page</p>
      <ol>
        {items.map((i) => (
          <li key={i.href}>
            <a href={i.href}>{i.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** A plum window with the proof copy on the left and the spend review actions on the right. */
export function ProofPanel({
  id,
  title,
  children,
  showFree,
}: {
  id?: string
  title?: string
  children: React.ReactNode
  /** The overview also links to "See what's free". */
  showFree?: boolean
}) {
  return (
    <Reveal className={styles.proof}>
      <div className={cx(styles.text, styles.dark)}>
        {title ? <H2 id={id}>{title}</H2> : null}
        {children}
      </div>
      <div className={styles.proofActions}>
        <Button asChild variant="secondary">
          <DialogLink to="/spend-review" dialog="review">
            Get a spend review
          </DialogLink>
        </Button>
        <Button asChild variant="tertiary">
          <Link to="/spend-review">
            {showFree ? 'About Spend review' : 'About the spend review'}
          </Link>
        </Button>
        {showFree ? (
          <p className={styles.proofLink}>
            <Link to="/pricing">See what's free</Link>
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}

/** "Where X fits" and "Where Miraee fits", as two cards. */
export function WhereFits({
  dark,
  wide,
  vendor,
  vendorText,
  miraeeText,
}: {
  dark?: boolean
  /** Two columns, for use outside a split. */
  wide?: boolean
  vendor: string
  vendorText: React.ReactNode
  miraeeText: React.ReactNode
}) {
  return (
    <div className={cx(styles.fits, wide && styles.fitsWide)}>
      <div className={cx(styles.fit, styles.text, dark && styles.dark, dark && styles.fitDark)}>
        <h3 className={styles.h3}>Where {vendor} fits.</h3>
        <p>{vendorText}</p>
      </div>
      <div className={cx(styles.fit, styles.text, styles.fitUs, dark && styles.fitDark)}>
        <h3 className={styles.h3}>Where Miraee fits.</h3>
        <p>{miraeeText}</p>
      </div>
    </div>
  )
}

/** The V1 hero photo, kept where the product view moved up into the hero. */
export function Photo({
  name,
  width,
  height,
  alt,
}: {
  name: string
  width: number
  height: number
  alt: string
}) {
  return (
    <figure className={styles.photo}>
      <picture>
        <source srcSet={`/img/document/${name}.webp`} type="image/webp" />
        <img
          src={`/img/document/${name}.jpg`}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </figure>
  )
}

const CARDS = [
  {
    to: '/compare/navan',
    image: '/img/document/compare-card-navan.jpg',
    title: 'Navan alternatives',
    description:
      'Miraee vs Navan on cost to start, policy controls, the finance view and changes. Plus other Navan alternatives.',
  },
  {
    to: '/compare/sap-concur',
    image: '/img/document/compare-card-sap-concur.jpg',
    title: 'SAP Concur alternatives',
    description: 'Miraee vs SAP Concur on onboarding, travel policy, approvals and month-end.',
  },
  {
    to: '/compare/perk',
    image: '/img/document/compare-card-perk.jpg',
    title: 'TravelPerk alternatives',
    description:
      'Miraee vs Perk, formerly TravelPerk, on cost to start, the finance view and how changes are confirmed.',
  },
  {
    to: '/compare/ramp',
    image: '/img/document/compare-card-ramp.jpg',
    title: 'Ramp Travel with Miraee',
    description:
      'Keep the Ramp card you use and add travel depth: policy on every booking and new options when plans change.',
  },
]

const CARD_SIZES: Record<string, [number, number]> = {
  '/compare/navan': [2046, 1388],
  '/compare/sap-concur': [2046, 1365],
  '/compare/perk': [1637, 2046],
  '/compare/ramp': [1626, 2046],
}

/** "More comparisons": the four comparison cards with their photos, and the link back to the guide. */
export function RelatedComparisons({ tone = 'night' }: { tone?: Tone }) {
  const dark = tone !== 'lilac'
  return (
    <Band tone={tone} compact aria-labelledby="more-h">
      <Reveal className={cx(styles.text, dark && styles.dark)}>
        <h2 id="more-h" className={styles.h2}>
          More comparisons
        </h2>
      </Reveal>
      <ul className={cx(styles.related, dark && styles.relatedDark)} style={{ marginTop: 32 }}>
        {CARDS.map((c) => (
          <Reveal as="li" key={c.to} threshold={0.15} className={styles.relatedCard}>
            <Link to={c.to} className={styles.relatedLink}>
              <span className={styles.relatedImg}>
                <img
                  src={c.image}
                  width={CARD_SIZES[c.to][0]}
                  height={CARD_SIZES[c.to][1]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className={styles.relatedBody}>
                <span className={styles.relatedTitle}>{c.title}</span>
                <span className={styles.relatedDesc}>{c.description}</span>
                <span className={styles.relatedMeta}>Checked September 30, 2026</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
      <p className={styles.moreLink}>
        <Button asChild variant="tertiary">
          <Link to="/compare">Compare corporate travel management software</Link>
        </Button>
      </p>
    </Band>
  )
}
