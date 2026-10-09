import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { Tabs } from 'radix-ui'

import { Container } from '@/components/layout/content-layout'
import { VideoDialog } from '@/components/video/video-dialog'
import styles from './video-library-section.module.css'
import { VIDEO_GROUPS, type VideoGroup } from './videos'

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

/** One role's playlist: a featured player on the left, the track list on the right. */
function Track({ group }: { group: VideoGroup }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const current = group.videos[index]

  return (
    <div className={styles.track}>
      <div className={styles.featured}>
        <button
          type="button"
          className={styles.poster}
          onClick={() => current.youtubeId && setOpen(true)}
          aria-label={`Play video: ${current.title}`}
          key={current.id}
        >
          {current.youtubeId ? (
            <img src={thumb(current.youtubeId)} alt="" decoding="async" />
          ) : null}
          <span className={styles.play}>
            <Play size={26} fill="currentColor" aria-hidden="true" />
          </span>
          <span className={styles.badge}>
            {index + 1} of {group.videos.length}
          </span>
        </button>
        <div className={styles.meta} key={`${current.id}-meta`}>
          <h3 className={styles.title}>{current.title}</h3>
          <p className={styles.desc}>{current.description}</p>
        </div>
        {current.youtubeId ? (
          <VideoDialog
            open={open}
            onOpenChange={setOpen}
            title={current.title}
            description={current.description}
            youtubeId={current.youtubeId}
          />
        ) : null}
      </div>
      <div className={styles.list}>
        <p className={styles.listHead}>{group.blurb}</p>
        <ol className={styles.items}>
          {group.videos.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className={styles.item}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
              >
                <span className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.itemThumb}>
                  {item.youtubeId ? (
                    <img src={thumb(item.youtubeId)} alt="" loading="lazy" decoding="async" />
                  ) : null}
                </span>
                <span className={styles.itemText}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemDesc}>{item.description}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

/** Role tabs inside a desktop-style window, on an animated plum backdrop. */
export function VideoLibrarySection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add(styles.in)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.in)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className={`mr-plum ${styles.section}`} aria-labelledby="video-library">
      <span className={`${styles.glow} ${styles.glowA}`} aria-hidden="true" />
      <span className={`${styles.glow} ${styles.glowB}`} aria-hidden="true" />
      <span className={styles.dots} aria-hidden="true" />
      <Container>
        <div className={styles.head}>
          <h2 className="mr-h2 scroll-mt-32" id="video-library">
            Video library
          </h2>
          <p className={styles.lead}>
            Short walkthroughs for the people who set up and run company travel. Pick your role.
          </p>
        </div>

        <Tabs.Root defaultValue={VIDEO_GROUPS[0].role} className={`mr-paper ${styles.window}`}>
          <div className={styles.chrome}>
            <div className={styles.dotsRow} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <Tabs.List aria-label="Video library roles" className={styles.tabs}>
              {VIDEO_GROUPS.map((group) => (
                <Tabs.Trigger key={group.role} value={group.role} className={styles.tab}>
                  {group.label}
                  <span className={styles.count}>{group.videos.length}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
          <div className={styles.body}>
            {VIDEO_GROUPS.map((group) => (
              <Tabs.Content key={group.role} value={group.role} forceMount className={styles.panel}>
                <Track group={group} />
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </Container>
    </section>
  )
}
