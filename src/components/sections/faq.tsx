import { Section, Container } from '@/components/layout/content-layout'
import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { FAQ_LINK, type FaqItem } from '@/lib/faq'

export type { FaqItem }

export function FaqAnswer({ answer }: { answer: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  for (const match of answer.matchAll(FAQ_LINK)) {
    parts.push(answer.slice(last, match.index))
    parts.push(
      <Link key={match.index} to={match[2]}>
        {match[1]}
      </Link>,
    )
    last = match.index + match[0].length
  }
  parts.push(answer.slice(last))
  return (
    <p>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </p>
  )
}

type FaqProps = {
  heading: string
  items: FaqItem[]
  /** `faq` is the buyer-questions list, `qa` the two-column variant used on the pricing page. */
  listClassName?: 'faq' | 'qa'
  /** Extra section classes, e.g. a top rule (`hr-top`). */
  sectionClassName?: string
}

/** Numbered accordion rows shared by the page-level FAQ and the inline (long-form) FAQ. */
function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const listRef = useRef<HTMLDivElement>(null)
  const baseId = useId()

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    if (typeof IntersectionObserver === 'undefined') {
      list.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          list.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(list)
    return () => io.disconnect()
  }, [])

  return (
    <div className="faq-acc__list" ref={listRef}>
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-p${index}`
        const buttonId = `${baseId}-b${index}`
        return (
          <div
            key={item.question}
            className={isOpen ? 'faq-item is-open' : 'faq-item'}
            style={{ '--i': index } as React.CSSProperties}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                className="faq-item__btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="faq-item__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="faq-item__q">{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-item__panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              {...(isOpen ? {} : ({ inert: '' } as object))}
            >
              <div className="faq-item__inner">
                <FaqAnswer answer={item.answer} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** Question-and-answer list. Feed the same `items` to `faqPageJsonLd` so markup and structured data stay in sync. */
function FaqAccordion({ heading, items, sectionClassName }: Omit<FaqProps, 'listClassName'>) {
  return (
    <Section className={sectionClassName} aria-labelledby="faq-h">
      <Container className="mr-container faq-acc">
        <div className="faq-acc__head">
          <h2 className="mr-h2" id="faq-h">
            {heading}
          </h2>
          <p className="faq-acc__aside">
            Not here? <Link to="/talk-to-sales">Ask us directly</Link>
          </p>
        </div>
        <FaqList items={items} />
      </Container>
    </Section>
  )
}

export function Faq({
  heading,
  items,
  listClassName = 'faq',
  sectionClassName = 'mr-section hr-top',
}: FaqProps) {
  if (listClassName === 'faq') {
    return <FaqAccordion heading={heading} items={items} sectionClassName={sectionClassName} />
  }
  return (
    <Section className={sectionClassName} aria-labelledby="faq-h">
      <Container className="mr-container">
        <h2 className="mr-h2" id="faq-h">
          {heading}
        </h2>
        <div className={listClassName}>
          {items.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <FaqAnswer answer={item.answer} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

/** Question list nested inside a long-form page section (compare and resource pages). */
export function InlineFaq({ items }: { items: FaqItem[] }) {
  return (
    <Section className="lf-faq" aria-labelledby="questions">
      <h2 className="mr-h2" id="questions">
        Questions
      </h2>
      <FaqList items={items} />
    </Section>
  )
}
