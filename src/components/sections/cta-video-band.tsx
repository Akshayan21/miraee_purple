import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pause, Play } from 'lucide-react'

import { Section, Container } from '@/components/layout/content-layout'
import { CtaActions, type SecondaryAction } from '@/components/sections/cta-actions'

/** Looping background clips in /public/video, one per page family. */
export type CtaVideo = 'home' | 'how' | 'finance' | 'travel' | 'security' | 'compare'

/** The closing phrase of each headline, set in the accent colour. */
const ACCENTS: Record<string, string> = {
  'Put every trip in one place.': 'in one place.',
  "See it on your own company's travel.": "your own company's travel.",
  'Close the month with every trip already coded.': 'already coded.',
  'Your policy on every booking, from the first trip.': 'from the first trip.',
  'One approved travel tool for the whole company.': 'for the whole company.',
  'Start free, and check our work on your own data.': 'check our work on your own data.',
  'Start with the whole company.': 'whole company.',
  "Check our work on last year's travel.": "last year's travel.",
  'Start free, at any company size.': 'at any company size.',
  'Put your travel policy to work.': 'to work.',
  'Put your policy on every booking.': 'on every booking.',
}

export type CtaVideoBandProps = {
  title: string
  body: ReactNode
  secondary?: SecondaryAction
  video?: CtaVideo
}

/**
 * Closing call to action: a muted looping clip under a plum tint, a big centred headline and
 * large buttons. The clip is paused for visitors who prefer reduced motion (the still poster stays).
 */
export function CtaVideoBand({ title, body, secondary, video = 'compare' }: CtaVideoBandProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      if (reduced.matches) {
        el.pause()
        setPaused(true)
      }
    }
    sync()
    reduced.addEventListener('change', sync)
    return () => reduced.removeEventListener('change', sync)
  }, [])

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      void el.play().catch(() => undefined)
      setPaused(false)
    } else {
      el.pause()
      setPaused(true)
    }
  }

  const accent = ACCENTS[title]
  const at = accent ? title.lastIndexOf(accent) : -1

  return (
    <Section className="mr-plum cta-video" aria-labelledby="close-h">
      <video
        ref={ref}
        className="cta-video__media"
        src={`/video/cta-${video}.mp4`}
        poster={`/video/cta-${video}.jpg`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="cta-video__tint" aria-hidden="true" />
      <button
        type="button"
        className="cta-video__pause"
        onClick={toggle}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
      >
        {paused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
      </button>
      <Container className="mr-container cta-video__inner">
        <h2 className="mr-h2 cta-video__title" id="close-h">
          {at > 0 ? (
            <>
              {title.slice(0, at)}
              <span className="cta-video__accent">{title.slice(at)}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <div className="cta-video__foot">
          <p className="cta-video__body">{body}</p>
          <CtaActions secondary={secondary} />
        </div>
      </Container>
    </Section>
  )
}
