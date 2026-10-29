import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Chapter, ChapterHead, Heading } from '@/components/page/kit'
import type { Block } from '@/content/extras'
import type { VideoGroup } from '@/content/videos'

/** Renders a page's extra sections (see content/extras.ts) in the V4 editorial style, alternating paper and sand bands. */
export function ExtraBlocks({
  blocks,
  idPrefix = 'x',
  featured = false,
}: {
  blocks: Block[]
  idPrefix?: string
  featured?: boolean
}) {
  return (
    <>
      {blocks.map((b, i) => {
        const id = `${idPrefix}${i}`
        return (
          <Chapter
            key={id}
            id={id}
            tone={featured ? 'plum' : i % 2 === 1 ? 'sand' : 'paper'}
            className={featured ? 'ed-xp--featured' : undefined}
            labelledBy={`${id}-h`}
          >
            <div className="ed-wrap">
              <ChapterHead label={b.eyebrow ?? b.heading} />
              <div className="ed-xp">
                <Heading id={`${id}-h`} className="ed-h--xl">
                  {b.heading}
                </Heading>
                <div className="ed-xp__body">{renderBody(b, id, featured)}</div>
              </div>
            </div>
          </Chapter>
        )
      })}
    </>
  )
}

function renderBody(b: Block, id: string, featured = false) {
  switch (b.kind) {
    case 'prose':
      return (
        <div data-rv>
          {b.paragraphs.map((p) => (
            <p key={p} className="ed-xp__p">
              {p}
            </p>
          ))}
          {b.bullets ? (
            <ul className="ed-xp__ul">
              {b.bullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )
    case 'cards':
    case 'steps':
      return (
        <div>
          {b.intro ? <p className="ed-xp__p">{b.intro}</p> : null}
          <ol className={b.kind === 'steps' ? 'ed-xp__steps' : 'ed-xp__cards'}>
            {b.items.map((it, n) => (
              <li key={it.title} data-rv="stagger">
                {b.kind === 'steps' ? (
                  <span className="ed-xp__n ed-stat">{String(n + 1).padStart(2, '0')}</span>
                ) : null}
                <h3 className="ed-xp__t">{it.title}</h3>
                <p className="ed-xp__d">{it.body}</p>
              </li>
            ))}
          </ol>
        </div>
      )
    case 'videos':
      return (
        <div>
          {b.intro ? <p className="ed-xp__p">{b.intro}</p> : null}
          <VideoLibrary groups={b.groups} id={id} dark={featured} />
        </div>
      )
    case 'links':
      return (
        <div>
          {b.intro ? <p className="ed-xp__p">{b.intro}</p> : null}
          <ul className="ed-xp__links">
            {b.items.map((it) => (
              <li key={it.to} data-rv="stagger">
                <Link to={it.to}>
                  <span className="ed-xp__t">{it.title}</span>
                  <span className="ed-xp__d">{it.body}</span>
                  <svg viewBox="0 0 24 12" width="24" height="12" aria-hidden="true">
                    <path
                      d="M0 6 H22 M16 1 L22 6 L16 11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'faq':
      return (
        <Accordion type="single" collapsible className="fq__list" data-rv="stagger">
          {b.items.map((f, n) => (
            <AccordionItem key={f.q} value={`${id}-${n}`}>
              <AccordionTrigger>
                <span className="fq__q">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="fq__a">{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )
    case 'table':
      return (
        <div data-rv>
          <div
            className="ed-xp__scroll"
            role="region"
            tabIndex={0}
            aria-label={`${b.heading}, scrolls sideways`}
          >
            <table className="ed-xp__table">
              {b.caption ? <caption>{b.caption}</caption> : null}
              <thead>
                <tr>
                  {b.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r.join('|')}>
                    {r.map((c, n) =>
                      n === 0 ? (
                        <th key={n} scope="row">
                          {c}
                        </th>
                      ) : (
                        <td key={n}>{c}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note ? <p className="ed-xp__note">{b.note}</p> : null}
        </div>
      )
  }
}

/** Role tabs, a featured player and the track list. The YouTube player only mounts after Play (privacy-enhanced domain). */
function VideoLibrary({
  groups,
  id,
  dark = false,
}: {
  groups: VideoGroup[]
  id: string
  dark?: boolean
}) {
  const [role, setRole] = useState(groups[0].role)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const group = groups.find((g) => g.role === role) ?? groups[0]
  const cur = group.videos[index] ?? group.videos[0]
  const pick = (r: string) => {
    setRole(r)
    setIndex(0)
    setPlaying(false)
  }
  return (
    <div className={`ed-vl${dark ? ' ed-vl--dark' : ''}`}>
      <div className="ed-vl__tabs" role="tablist" aria-label="Video library roles">
        {groups.map((g) => (
          <button
            key={g.role}
            type="button"
            role="tab"
            id={`${id}-t-${g.role}`}
            aria-selected={g.role === role}
            aria-controls={`${id}-p`}
            className="ed-vl__tab"
            onClick={() => pick(g.role)}
          >
            {g.label} <span className="ed-vl__count">{g.videos.length}</span>
          </button>
        ))}
      </div>
      <div
        className="ed-vl__panel"
        role="tabpanel"
        id={`${id}-p`}
        aria-labelledby={`${id}-t-${group.role}`}
      >
        <div className="ed-vl__main">
          <div className="ed-vl__player">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${cur.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                title={cur.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="ed-vl__poster"
                onClick={() => setPlaying(true)}
                aria-label={`Play video: ${cur.title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${cur.youtubeId}/hqdefault.jpg`}
                  alt=""
                  decoding="async"
                />
                <span className="ed-vl__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <h3 className="ed-vl__title">{cur.title}</h3>
          <p className="ed-vl__desc">{cur.description}</p>
        </div>
        <div className="ed-vl__list">
          <p className="ed-vl__blurb">{group.blurb}</p>
          <ol>
            {group.videos.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={i === index ? 'true' : undefined}
                  className="ed-vl__item"
                  onClick={() => {
                    setIndex(i)
                    setPlaying(false)
                  }}
                >
                  <span className="ed-vl__n">{String(i + 1).padStart(2, '0')}</span>
                  <img
                    src={`https://i.ytimg.com/vi/${item.youtubeId}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="ed-vl__t">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
