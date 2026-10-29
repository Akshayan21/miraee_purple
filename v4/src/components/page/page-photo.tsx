import { photoFor } from '@/content/photos'

/** The page's hero photo, set in the editorial frame (ink rule, hard orange shadow). Returns null when a page has no photo. */
export function PagePhoto({ path }: { path: string }) {
  const p = photoFor(path)
  if (!p) return null
  return (
    <figure className={`ed-photo${p.cutout ? 'ed-photo--cut' : ''}`}>
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
