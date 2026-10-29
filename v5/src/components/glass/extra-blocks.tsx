import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaqSection } from '@/components/art/home-sections'
import type { Block } from '@/content/extras'
import type { VideoGroup } from '@/content/videos'

/** Renders a page's extra sections (see content/extras.ts) as V5 glass bento tiles. */
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
        if (b.kind === 'faq') {
          return (
            <FaqSection
              key={id}
              items={b.items.map((f) => ({ q: f.q, a: f.a }))}
              title={b.heading}
              id={`${id}-h`}
            />
          )
        }
        if (featured && b.kind === 'videos') {
          return (
            <section key={id} className="sec sec--tight" aria-labelledby={`${id}-h`}>
              <div className="wrap">
                <div className="tile tile--plum xp-feat" data-reveal>
                  <p className="eyebrow">{b.eyebrow ?? 'Video library'}</p>
                  <h2 className="disp h-lg" id={`${id}-h`}>
                    {b.heading}
                  </h2>
                  {b.intro ? <p className="lead xp-feat__lead">{b.intro}</p> : null}
                  <VideoLibrary groups={b.groups} id={id} dark />
                </div>
              </div>
            </section>
          )
        }
        return (
          <section key={id} className="sec sec--tight" aria-labelledby={`${id}-h`}>
            <div className="wrap">
              <div className="bento">
                <div className="s4 xp-side" data-reveal>
                  <p className="eyebrow">{b.eyebrow ?? 'In detail'}</p>
                  <h2 className="disp h-lg" id={`${id}-h`}>
                    {b.heading}
                  </h2>
                </div>
                <div className="s8 xp-body">{body(b, id)}</div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

function body(b: Exclude<Block, { kind: 'faq' }>, id: string) {
  switch (b.kind) {
    case 'prose':
      return (
        <div className="tile" data-reveal>
          {b.paragraphs.map((p) => (
            <p key={p} className="p xp-p">
              {p}
            </p>
          ))}
          {b.bullets ? (
            <ul className="xp-ul">
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
          {b.intro ? (
            <p className="p xp-p" data-reveal>
              {b.intro}
            </p>
          ) : null}
          <ol className="xp-grid">
            {b.items.map((it, n) => (
              <li key={it.title} className="tile tile--lift" data-reveal>
                {b.kind === 'steps' ? (
                  <span className="xp-n fig">{String(n + 1).padStart(2, '0')}</span>
                ) : null}
                <h3 className="disp h-sm">{it.title}</h3>
                <p className="p">{it.body}</p>
              </li>
            ))}
          </ol>
        </div>
      )
    case 'videos':
      return (
        <div>
          {b.intro ? (
            <p className="p xp-p" data-reveal>
              {b.intro}
            </p>
          ) : null}
          <div className="tile" data-reveal>
            <VideoLibrary groups={b.groups} id={id} />
          </div>
        </div>
      )
    case 'links':
      return (
        <div>
          {b.intro ? (
            <p className="p xp-p" data-reveal>
              {b.intro}
            </p>
          ) : null}
          <ul className="xp-grid">
            {b.items.map((it) => (
              <li key={it.to} data-reveal>
                <Link to={it.to} className="tile tile--lift xp-link">
                  <h3 className="disp h-sm">{it.title}</h3>
                  <p className="p">{it.body}</p>
                  <span className="gb gb--link">Read</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'table':
      return (
        <div className="tile" data-reveal>
          <div
            className="xp-scroll"
            role="region"
            tabIndex={0}
            aria-label={`${b.heading}, scrolls sideways`}
          >
            <table className="xp-table">
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
          {b.note ? <p className="p xp-note">{b.note}</p> : null}
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
    <div className={`xp-vl${dark ? ' xp-vl--dark' : ''}`}>
      <div className="xp-vl__tabs" role="tablist" aria-label="Video library roles">
        {groups.map((g) => (
          <button
            key={g.role}
            type="button"
            role="tab"
            id={`${id}-t-${g.role}`}
            aria-selected={g.role === role}
            aria-controls={`${id}-p`}
            className="xp-vl__tab"
            onClick={() => pick(g.role)}
          >
            {g.label} <span className="xp-vl__count">{g.videos.length}</span>
          </button>
        ))}
      </div>
      <div
        className="xp-vl__panel"
        role="tabpanel"
        id={`${id}-p`}
        aria-labelledby={`${id}-t-${group.role}`}
      >
        <div className="xp-vl__main">
          <div className="xp-vl__player">
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
                className="xp-vl__poster"
                onClick={() => setPlaying(true)}
                aria-label={`Play video: ${cur.title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${cur.youtubeId}/hqdefault.jpg`}
                  alt=""
                  decoding="async"
                />
                <span className="xp-vl__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <h3 className="xp-vl__title">{cur.title}</h3>
          <p className="xp-vl__desc">{cur.description}</p>
        </div>
        <div className="xp-vl__list">
          <p className="xp-vl__blurb">{group.blurb}</p>
          <ol>
            {group.videos.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={i === index ? 'true' : undefined}
                  className="xp-vl__item"
                  onClick={() => {
                    setIndex(i)
                    setPlaying(false)
                  }}
                >
                  <span className="xp-vl__n">{String(i + 1).padStart(2, '0')}</span>
                  <img
                    src={`https://i.ytimg.com/vi/${item.youtubeId}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="xp-vl__t">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
