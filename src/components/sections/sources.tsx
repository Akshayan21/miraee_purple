import { Section, Container } from '@/components/layout/content-layout'
export type Source = {
  /** Anchor id, targeted by the numbered footnote links (`#src-1`). */
  id: string
  /** Citation text, without the link. */
  text: string
  /** Link to the source. Omit for citations without a web page. */
  href?: string
  /** Visible link text, usually the domain. */
  label?: string
}

/** Numbered "Sources" list at the foot of a page. */
export function Sources({ items }: { items: Source[] }) {
  return (
    <Section className="sources" aria-labelledby="src-h">
      <Container className="mr-container">
        <h2 id="src-h">Sources</h2>
        <ol>
          {items.map((source) => (
            <li key={source.id} id={source.id}>
              {source.text}
              {source.href ? (
                <>
                  {' '}
                  <a href={source.href} rel="noopener">
                    {source.label}
                  </a>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
