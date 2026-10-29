import { photoFor } from '@/content/photos'
import type { InnerPage } from '@/content/site'
import { PageArt } from '@/components/art/scenes'

/** Just the photo tile for a path (used beside the form pages). */
export function PhotoTile({ path }: { path: string }) {
  const p = photoFor(path)
  if (!p) return null
  return (
    <figure
      className={`tile tile--clear page-photo page-photo--side${p.cutout ? 'page-photo--cut' : ''}`}
    >
      <img
        src={p.src}
        width={p.w}
        height={p.h}
        alt={p.alt}
        decoding="async"
        style={p.pos ? { objectPosition: p.pos } : undefined}
      />
    </figure>
  )
}

/** The page's hero visual: its photo when it has one, otherwise the drawn scene. */
export function PageVisual({ page }: { page: InnerPage }) {
  const p = photoFor(page.path)
  if (!p) return <PageArt page={page} />
  return (
    <figure className={`tile tile--clear page-photo${p.cutout ? 'page-photo--cut' : ''}`}>
      <img
        src={p.src}
        width={p.w}
        height={p.h}
        alt={p.alt}
        decoding="async"
        style={p.pos ? { objectPosition: p.pos } : undefined}
      />
    </figure>
  )
}
