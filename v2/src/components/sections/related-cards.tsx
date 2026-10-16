import styles from './related-cards.module.css'
import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'

import { ResponsiveImage } from '@/components/sections/responsive-image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type RelatedCard = {
  to: string
  /** `cutout` = person cut out of their photo, `frame` = photo fills the frame. */
  shape: 'cutout' | 'frame'
  tone: 'plum' | 'paper'
  image: { src: string; width: number; height: number }
  /** Category label above the title, e.g. "Finance". */
  kicker?: string
  title: string
  description: string
  /** Small line under the description, e.g. "Checked September 30, 2026". */
  meta?: string
}

type RelatedCardsProps = {
  heading: string
  cards: RelatedCard[]
  /** Link below the cards. */
  more?: { to: string; label: string }
}

/** "More comparisons" / "Related guides" card grid. */
export function RelatedCards({ heading, cards, more }: RelatedCardsProps) {
  return (
    <Section className="mr-section hr-top lf-related" aria-labelledby="more-h">
      <Container className="mr-container">
        <h2 className="mr-h2" id="more-h">
          {heading}
        </h2>
        <ul className={cn('lf-cards', `lf-cards--${cards.length}`)}>
          {cards.map((card) => (
            <li
              key={card.to}
              className={cn(
                'lf-card',
                styles.card,
                `lf-card--${card.shape}`,
                card.tone === 'plum' ? 'mr-plum' : 'mr-paper',
              )}
            >
              <Link to={card.to}>
                <span className="lf-card__img">
                  <ResponsiveImage {...card.image} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="lf-card__body">
                  {card.kicker ? <span className="lf-card__k">{card.kicker}</span> : null}
                  <span className="lf-card__t">{card.title}</span>
                  <span className="lf-card__d">{card.description}</span>
                  {card.meta ? <span className="lf-card__meta">{card.meta}</span> : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {more ? (
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to={more.to}>{more.label}</Link>
            </Button>
          </p>
        ) : null}
      </Container>
    </Section>
  )
}
