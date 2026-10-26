import type { CSSProperties, ReactNode } from 'react'

import { Container, Section } from '@/components/layout/content-layout'
import { cn } from '@/lib/utils'
import styles from './people-scene.module.css'

export type ScenePerson = {
  /** PNG cut-out (transparent background) and its WebP twin. */
  src: string
  webp?: string
  alt: string
  width: number
  height: number
}

type PeopleSceneProps = {
  labelledBy: string
  /** Page surface behind the whole band. */
  tone: 'paper' | 'plum'
  /** Colour of the rounded stage the person stands in front of. */
  plate: 'plum' | 'light' | 'mist' | 'tangerine'
  /** Put the visual on the left and the copy on the right (desktop). */
  reverse?: boolean
  /** A cut-out person standing on the stage floor, head rising above the plate. */
  person?: ScenePerson
  /** Which side of the stage the person stands on. */
  personSide?: 'left' | 'right'
  /** A full photograph filling the stage instead of a cut-out. */
  photo?: ScenePerson
  /** Product view that overlaps the stage (a card, a phone). */
  aside?: ReactNode
  /** Where the product view sits on the stage. */
  asideAt?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  /**
   * `stack`: the person fills the upper part of the stage and a wide product view (a ledger, a trip record) rises over their
   * lower body, so the face stays clear. `side`: the person takes one side and a narrow product view (a phone) the other.
   */
  layout?: 'stack' | 'side'
  /** Width of the product view (CSS length), mainly for phones. */
  asideWidth?: string
  /** Scale the product view down (phones are tall) so it does not cover the person. */
  asideZoom?: number
  /** Drop the person (CSS length or %) so an arm rests on the top edge of the product view. */
  lean?: string
  /** The copy: eyebrow, h2, paragraphs, lists, links. */
  children: ReactNode
  className?: string
}

/**
 * A "faces first" band: copy on one side, a real person on a rounded stage on the other, with the product view they use
 * overlapping the stage. One layout, four stage colours and both directions, so the page keeps a rhythm without repeating a template.
 * The data-sc-* hooks are what the scroll choreography in lib/home-motion.ts animates.
 */
export function PeopleScene({
  labelledBy,
  tone,
  plate,
  reverse,
  person,
  personSide = 'left',
  photo,
  aside,
  asideAt = 'bottom-right',
  layout = 'stack',
  asideWidth,
  asideZoom,
  lean,
  children,
  className,
}: PeopleSceneProps) {
  const img = person ?? photo
  return (
    <Section
      className={cn(
        tone === 'plum' ? 'mr-plum' : 'mr-paper',
        'mr-section',
        styles.scene,
        className,
      )}
      aria-labelledby={labelledBy}
    >
      <Container className="mr-container">
        <div className={cn(styles.grid, reverse && styles.reverse)}>
          <div className={styles.copy} data-sc-copy>
            {children}
          </div>
          <div
            className={cn(
              styles.stage,
              photo && styles.stagePhoto,
              !photo && styles[`layout-${layout}`],
            )}
            style={
              {
                '--stage-aspect': photo ? `${photo.width} / ${photo.height}` : undefined,
                '--aside-w': asideWidth,
                '--lean': lean,
              } as CSSProperties
            }
          >
            <div
              className={cn(styles.plate, styles[`plate-${plate}`])}
              data-sc-plate
              aria-hidden="true"
            />
            {img ? (
              <picture className={photo ? styles.photoWrap : undefined} data-sc-person>
                {img.webp ? <source srcSet={img.webp} type="image/webp" /> : null}
                <img
                  className={cn(
                    photo ? styles.photo : styles.person,
                    !photo && (personSide === 'right' ? styles.personRight : styles.personLeft),
                  )}
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  loading="lazy"
                />
              </picture>
            ) : null}
            {aside ? (
              <div className={cn(styles.card, styles[`at-${asideAt}`])} data-sc-card>
                <div style={asideZoom ? ({ zoom: asideZoom } as CSSProperties) : undefined}>
                  {aside}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  )
}
