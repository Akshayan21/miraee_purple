/**
 * Extra inner-page content, shared by V4 and V5 (identical in both): the sections that sit under each page's document copy.
 * The words come from V1's inner pages, kept to the rules in "Miraee Website: Competitor Review, Sitemap and Page Copy"
 * (plain budget language instead of "GL code", no competitor names, no statistic that is not in the stat register).
 */
import type { VideoGroup } from './videos'

export type Item = { title: string; body: string }

export type Block =
  | { kind: 'prose'; heading: string; eyebrow?: string; paragraphs: string[]; bullets?: string[] }
  | { kind: 'cards'; heading: string; eyebrow?: string; intro?: string; items: Item[] }
  | { kind: 'steps'; heading: string; eyebrow?: string; intro?: string; items: Item[] }
  | { kind: 'faq'; heading: string; eyebrow?: string; items: { q: string; a: string }[] }
  | { kind: 'videos'; heading: string; eyebrow?: string; intro?: string; groups: VideoGroup[] }
  | {
      kind: 'table'
      heading: string
      eyebrow?: string
      caption?: string
      columns: string[]
      rows: string[][]
      note?: string
    }
  | {
      kind: 'links'
      heading: string
      eyebrow?: string
      intro?: string
      items: (Item & { to: string })[]
    }

/** A long-form guide, served at /resources/<slug>. */
export type Guide = {
  slug: string
  title: string
  eyebrow: string
  /** One sentence under the headline and on the guides list. */
  sub: string
  /** e.g. "8 min read". */
  meta?: string
  blocks: Block[]
}
