import * as React from 'react'

import { Reveal } from '@/components/scenes/reveal'
import { ScrollNumber } from '@/components/scenes/scene'
import { FaqAnswer, type FaqItem } from '@/components/sections/faq'
import shared from '@/pages/home/home-shared.module.css'
import styles from './page-kit.module.css'

/**
 * The V3 inner-page kit. Every inner page is a stack of these, so the whole site shares one language with the home page:
 * a night hero, then lilac / plum / night bands, with the product shown before it is described.
 *
 * All copy is passed in (verbatim from V1); the kit only supplies layout, surfaces and motion. Text always stays real HTML,
 * and every motion has a static fallback (reduced motion, and no pinned scenes below 1024px).
 */

export type Tone = 'night' | 'plum' | 'lilac'
const surface = (tone: Tone) => shared[tone]
const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ')

/* ------------------------------------------------------------------------------------------------ hero */

export type Crumb = { label: string; to?: string }

/** Writes --p (0..1, how far the hero has scrolled out) on the element, for the hero's tilt and fade. Wide screens only. */
function useHeroProgress(ref: React.RefObject<HTMLElement | null>) {
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wide = window.matchMedia('(min-width: 1024px)')
    let frame = 0
    const update = () => {
      frame = 0
      if (reduced.matches || !wide.matches) return el.style.setProperty('--p', '0')
      const r = el.getBoundingClientRect()
      el.style.setProperty(
        '--p',
        Math.min(1, Math.max(0, -r.top / Math.max(1, r.height))).toFixed(4),
      )
    }
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    return () => {
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])
}

/**
 * The page hero. Title is a string or several strings (one masked line each). `visual` is a product view (or photo) shown in
 * a glass window that tilts and rises as you scroll past; without it the hero is a single large headline.
 */
export function PageHero({
  id = 'page-h',
  eyebrow,
  title,
  lead,
  actions,
  note,
  crumbs,
  visual,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string | string[]
  lead?: React.ReactNode
  actions?: React.ReactNode
  note?: React.ReactNode
  crumbs?: Crumb[]
  visual?: React.ReactNode
  /** Extra content under the buttons, inside the copy column. */
  children?: React.ReactNode
}) {
  const lines = Array.isArray(title) ? title : [title]
  const ref = React.useRef<HTMLElement>(null)
  useHeroProgress(ref)
  return (
    <section ref={ref} className={`${shared.night} ${styles.scene} mo-skip`} aria-labelledby={id}>
      <div className={styles.heroStage}>
        <div className={styles.mesh} aria-hidden="true" />
        <div className={shared.grain} aria-hidden="true" />
        <div className={shared.wrap}>
          <div className={cx(styles.heroGrid, visual ? styles.hasVisual : undefined)}>
            <div className={styles.heroCopy}>
              {crumbs && crumbs.length > 0 ? (
                <nav aria-label="Breadcrumb">
                  <ol className={styles.crumbs}>
                    {crumbs.map((c, i) => (
                      <li key={c.label} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
                        {c.to && i < crumbs.length - 1 ? <a href={c.to}>{c.label}</a> : c.label}
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
              {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
              <h1 id={id} className={`${shared.display} ${styles.title}`}>
                {lines.map((l, i) => (
                  <React.Fragment key={l}>
                    <span className={styles.line}>
                      <span>{l}</span>
                    </span>
                    {i < lines.length - 1 ? ' ' : null}
                  </React.Fragment>
                ))}
              </h1>
              {lead ? <p className={`${shared.lead} ${styles.heroLead}`}>{lead}</p> : null}
              {actions ? <div className={shared.buttons}>{actions}</div> : null}
              {note ? <p className={`${shared.small} ${styles.heroNote}`}>{note}</p> : null}
              {children}
            </div>
            {visual ? (
              <div className={styles.visual}>
                <div className={styles.visualWindow}>{visual}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------------------------------ bands */

/**
 * A full-width band on one surface. `round` makes it overlap the band above with a rounded top edge (use after a hero).
 * `glow` adds the soft plum light used behind the home page's stacked panels.
 */
export function Band({
  tone = 'lilac',
  round,
  compact,
  glow,
  className,
  children,
  ...rest
}: {
  tone?: Tone
  round?: boolean
  compact?: boolean
  glow?: boolean
} & React.ComponentProps<'section'>) {
  return (
    <section
      className={cx(
        'mo-skip',
        surface(tone),
        styles.band,
        compact && styles.bandCompact,
        round && styles.bandRound,
        glow && tone === 'night' && styles.bandGlow,
        className,
      )}
      {...rest}
    >
      {tone !== 'lilac' ? <div className={shared.grain} aria-hidden="true" /> : null}
      <div className={shared.wrap}>{children}</div>
    </section>
  )
}

/** Eyebrow + h2 + lead that opens a band. */
export function SectionHead({
  id,
  eyebrow,
  title,
  lead,
  tone = 'lilac',
  center,
}: {
  id?: string
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  tone?: Tone
  center?: boolean
}) {
  return (
    <Reveal className={cx(styles.head, center && styles.headCenter)}>
      {eyebrow ? (
        <p className={cx(styles.eyebrow, tone === 'lilac' && styles.lilacEyebrow)}>{eyebrow}</p>
      ) : null}
      <h2 id={id} className={`${shared.h2} ${styles.sectionTitle}`}>
        {title}
      </h2>
      {lead ? <p className={shared.lead}>{lead}</p> : null}
    </Reveal>
  )
}

/* ------------------------------------------------------------------------------------------------ split */

/** Copy beside a product view or photo. The copy rises in; the view swings in on its vertical axis and settles flat. */
export function Split({
  reverse,
  dark,
  copy,
  visual,
}: {
  reverse?: boolean
  /** Set on night / plum bands so the view's shadow reads on the dark ground. */
  dark?: boolean
  copy: React.ReactNode
  visual: React.ReactNode
}) {
  return (
    <div className={cx(styles.split, reverse && styles.reverse)}>
      <Reveal className={styles.splitCopy}>{copy}</Reveal>
      <Reveal className={cx(styles.splitVisual, dark && styles.splitVisualDark)}>{visual}</Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------------------------------------ stacking panels */

export type PanelItem = {
  title: string
  body?: React.ReactNode
  view?: React.ReactNode
  /** Accessible name for the view (it is decorative markup of a product screen). */
  label?: string
  /** Extra content under the body. */
  extra?: React.ReactNode
}

/** Lilac panels that stack as you scroll (each sticks a little lower than the last), one idea and its product view per panel. */
export function StackPanels({
  items,
  numbered = true,
}: {
  items: PanelItem[]
  numbered?: boolean
}) {
  return (
    <ol className={styles.stack}>
      {items.map((p, i) => (
        <li key={p.title} className={styles.panel} style={{ '--i': i } as React.CSSProperties}>
          <div className={styles.panelText}>
            {numbered ? (
              <span className={styles.panelN} aria-hidden="true">
                {i + 1}
              </span>
            ) : null}
            <h3 className={styles.panelTitle}>
              {numbered ? <span className="sr-only">{i + 1}. </span> : null}
              {p.title}
            </h3>
            {p.body ? <p className={styles.panelBody}>{p.body}</p> : null}
            {p.extra}
          </div>
          {p.view ? (
            <div
              className={`mr-paper ${styles.panelView}`}
              role={p.label ? 'img' : undefined}
              aria-label={p.label}
            >
              {p.view}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------------------------------------ lists + cards */

export type RowItem = { title: React.ReactNode; body?: React.ReactNode }

/** Numbered editorial rows: a big title, one supporting line. Each row rises in as it arrives. */
export function EditorialList({ items, dark }: { items: RowItem[]; dark?: boolean }) {
  return (
    <ol className={cx(styles.list, dark && styles.listDark)}>
      {items.map((p, i) => (
        <Reveal as="li" key={i} className={styles.row} style={{ '--i': i } as React.CSSProperties}>
          <span className={styles.rowN} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className={styles.rowTitle}>{p.title}</h3>
          {p.body ? <p className={styles.rowBody}>{p.body}</p> : <span />}
        </Reveal>
      ))}
    </ol>
  )
}

export type CardItem = {
  title: React.ReactNode
  body?: React.ReactNode
  icon?: string
  extra?: React.ReactNode
}

/** A grid of cards that tip up into place one after another. `columns` is the width at 1024px and up. */
export function CardGrid({
  items,
  dark,
  columns = 3,
}: {
  items: CardItem[]
  dark?: boolean
  columns?: 2 | 3 | 4
}) {
  return (
    <ul
      className={cx(styles.cards, columns === 3 && styles.cards3, columns === 4 && styles.cards4)}
    >
      {items.map((c, i) => (
        <Reveal
          as="li"
          key={i}
          threshold={0.15}
          className={cx(styles.card, dark && styles.cardDark)}
          style={{ '--i': i % 4 } as React.CSSProperties}
        >
          {c.icon ? (
            <img className={styles.cardIcon} src={c.icon} alt="" width={36} height={36} />
          ) : null}
          <h3 className={styles.cardTitle}>{c.title}</h3>
          {c.body ? <p className={styles.cardBody}>{c.body}</p> : null}
          {c.extra}
        </Reveal>
      ))}
    </ul>
  )
}

/** A short row of labels (used for approvals / audit log / security pack and similar). */
export function Pills({ items, dark }: { items: React.ReactNode[]; dark?: boolean }) {
  return (
    <ul className={styles.pills}>
      {items.map((p, i) => (
        <li key={i} className={cx(styles.pill, !dark && styles.lilacPill)}>
          {p}
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------------------------------------ stat */

/** One large figure that counts up, with its sentence. Use for the stats V1 already states; never invent figures. */
export function BigStat({
  value,
  decimals,
  prefix,
  suffix,
  children,
  dark,
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <Reveal className={cx(styles.stat, dark && styles.statDark)}>
      <ScrollNumber
        className={styles.statFig}
        value={value}
        decimals={decimals}
        prefix={prefix}
        suffix={suffix}
      />
      <p className={styles.statText}>{children}</p>
    </Reveal>
  )
}

/* ------------------------------------------------------------------------------------------------ table */

/** Wraps a plain <table> (with <caption>, <thead>, <tbody>) in the V3 table surface. Scrolls sideways on small screens. */
export function DataTable({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <Reveal
      className={cx(styles.tableWrap, dark && styles.tableDark)}
      role="region"
      tabIndex={0}
      aria-label="Table, scrolls sideways"
    >
      {children}
    </Reveal>
  )
}

/* ------------------------------------------------------------------------------------------------ FAQ */

/** Questions and answers as numbered disclosure rows. Same list feeds the FAQPage JSON-LD in each page's meta. */
export function FaqBand({
  id = 'faq-h',
  heading,
  items,
  tone = 'lilac',
}: {
  id?: string
  heading: string
  items: FaqItem[]
  tone?: Tone
}) {
  const dark = tone !== 'lilac'
  return (
    <Band tone={tone} aria-labelledby={id}>
      <div className={styles.faqGrid}>
        <SectionHead id={id} title={heading} tone={tone} />
        <div className={cx(styles.faq, dark && styles.faqDark)}>
          {items.map((item, i) => (
            <details key={item.question} className={styles.faqItem} open={i === 0}>
              <summary>
                <span className={styles.faqNum} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true" />
              </summary>
              <div className={styles.faqAnswer}>
                <FaqAnswer answer={item.answer} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </Band>
  )
}

/* ------------------------------------------------------------------------------------------------ article */

export type TocItem = { href: string; label: string }

/**
 * Long-form guide body on a lilac band: a sticky "On this page" list beside the prose. Put plain h2/h3/p/ul/ol/table/figure
 * elements inside (the `.prose` styles apply); give each h2 an id that matches a `toc` href.
 */
export function Article({
  toc,
  tocLabel = 'On this page',
  children,
}: {
  toc?: TocItem[]
  tocLabel?: string
  children: React.ReactNode
}) {
  return (
    <Band tone="lilac" round compact aria-label="Article">
      <div className={styles.article}>
        {toc && toc.length > 0 ? (
          <nav className={styles.toc} aria-label={tocLabel}>
            <p className={styles.tocTitle}>{tocLabel}</p>
            <ol>
              {toc.map((t) => (
                <li key={t.href}>
                  <a href={t.href}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        ) : (
          <span />
        )}
        <div className={styles.prose}>{children}</div>
      </div>
    </Band>
  )
}

/** The byline line under an article hero ("By the Miraee team · ..."). Pass the string verbatim. */
export function Byline({ children }: { children: React.ReactNode }) {
  return <p className={styles.meta}>{children}</p>
}

/* ------------------------------------------------------------------------------------------------ closing */

/** The landing that ends every page: a plum window with the line and the same two actions as the hero. */
export function PageClosing({
  id = 'close-h',
  title,
  lead,
  actions,
}: {
  id?: string
  title: React.ReactNode
  lead?: React.ReactNode
  actions: React.ReactNode
}) {
  return (
    <section className={`${shared.night} ${styles.close} mo-skip`} aria-labelledby={id}>
      <div className={styles.closeWindow}>
        <div className={styles.mesh} aria-hidden="true" />
        <div className={shared.grain} aria-hidden="true" />
        <h2 id={id} className={`${shared.display} ${styles.closeTitle}`}>
          {title}
        </h2>
        {lead ? <p className={`${shared.lead} ${styles.closeLead}`}>{lead}</p> : null}
        <div className={`${shared.buttons} ${styles.closeActions}`}>{actions}</div>
      </div>
    </section>
  )
}

/** Small print under the last band: illustrative-data notes and similar. */
export function SmallPrint({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={`${shared.lilac} ${styles.band} ${styles.bandCompact} mo-skip`}
      aria-label="Small print"
    >
      <div className={shared.wrap}>
        <p className={styles.smallPrint}>{children}</p>
      </div>
    </section>
  )
}
