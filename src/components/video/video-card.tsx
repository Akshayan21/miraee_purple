import * as React from 'react'
import { Play, type LucideIcon } from 'lucide-react'

import { VideoDialog } from '@/components/video/video-dialog'
import { cn } from '@/lib/utils'

export type VideoCardData = {
  id: string
  title: string
  description: string
  /** e.g. "3 min". */
  duration?: string
  icon: LucideIcon
  /** YouTube video id. Without one the card shows "Coming soon" and cannot be opened. */
  youtubeId?: string
}

/** Poster-style video card: plum poster with a play button, then title and description. */
export function VideoCard({ video }: { video: VideoCardData }) {
  const [open, setOpen] = React.useState(false)
  const playable = Boolean(video.youtubeId)

  const poster = (
    <span className="relative grid aspect-video w-full place-content-center overflow-hidden rounded-md bg-plum">
      {video.youtubeId ? (
        <>
          <img
            src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 bg-night/25" aria-hidden="true" />
        </>
      ) : (
        <span className="absolute top-4 left-4 grid size-11 place-content-center rounded-md bg-twilight text-orange-light">
          <video.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
      )}
      {video.duration ? (
        <span className="absolute right-4 bottom-4 rounded-xs bg-night/80 px-2 py-1 text-[12px] font-semibold text-white tabular-nums">
          {video.duration}
        </span>
      ) : null}
      <span
        className={cn(
          'grid size-14 place-content-center rounded-full transition-transform duration-150',
          playable
            ? 'relative bg-orange-light text-night group-hover:scale-105'
            : 'border-[1.5px] border-mist/60 text-mist',
        )}
      >
        <Play className="size-6 translate-x-px" fill="currentColor" aria-hidden="true" />
      </span>
    </span>
  )

  const text = (
    <span className="grid gap-2">
      <span className="text-[19px] leading-snug font-semibold text-content">{video.title}</span>
      <span className="text-[15px] text-content-2">{video.description}</span>
      {!playable ? (
        <span className="mt-1 w-fit rounded-xs border border-rule px-2 py-1 text-[12px] font-semibold text-content-2">
          Coming soon
        </span>
      ) : null}
    </span>
  )

  return (
    <li className="m-0 list-none">
      {playable ? (
        <>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Play video: ${video.title}`}
            className="group grid w-full cursor-pointer gap-4 border-0 bg-transparent p-0 text-left font-sans focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus focus-visible:outline-solid"
          >
            {poster}
            {text}
          </button>
          <VideoDialog
            open={open}
            onOpenChange={setOpen}
            title={video.title}
            description={video.description}
            youtubeId={video.youtubeId!}
          />
        </>
      ) : (
        <div className="grid gap-4">
          {poster}
          {text}
        </div>
      )}
    </li>
  )
}
