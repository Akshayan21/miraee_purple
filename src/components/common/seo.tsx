import { Head } from 'vite-react-ssg'

export type SeoMeta = {
  title: string
  description?: string
  /** Absolute canonical URL. */
  canonical?: string
  /** e.g. "index, follow" or "noindex, follow". */
  robots?: string
  og?: {
    type?: string
    title?: string
    description?: string
    url?: string
    image?: string
    imageWidth?: string
    imageHeight?: string
  }
  twitterCard?: string
  /** schema.org JSON-LD blocks, serialised into <script type="application/ld+json">. */
  jsonLd?: object[]
}

/** Per-page <head>: title, description, canonical, robots, Open Graph, Twitter card and structured data. */
export function Seo({ meta }: { meta: SeoMeta }) {
  const { title, description, canonical, robots, og, twitterCard, jsonLd } = meta
  return (
    <Head defer={false}>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {robots ? <meta name="robots" content={robots} /> : null}
      {og?.type ? <meta property="og:type" content={og.type} /> : null}
      {og?.title ? <meta property="og:title" content={og.title} /> : null}
      {og?.description ? <meta property="og:description" content={og.description} /> : null}
      {og?.url ? <meta property="og:url" content={og.url} /> : null}
      {og?.image ? <meta property="og:image" content={og.image} /> : null}
      {og?.imageWidth ? <meta property="og:image:width" content={og.imageWidth} /> : null}
      {og?.imageHeight ? <meta property="og:image:height" content={og.imageHeight} /> : null}
      {twitterCard ? <meta name="twitter:card" content={twitterCard} /> : null}
      {jsonLd?.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  )
}
