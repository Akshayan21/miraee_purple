import type { ImgHTMLAttributes } from 'react'

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  /** Fallback image path, e.g. `/img/px7823010-brooklyn-bridge.jpg`. */
  src: string
  /** Optional WebP source. Defaults to the same file name with a `.webp` extension. */
  webp?: string | false
  width: number | string
  height: number | string
  alt: string
}

/** <picture> with a WebP source and a JPEG/PNG fallback. */
export function ResponsiveImage({
  src,
  webp,
  width,
  height,
  alt,
  ...imgProps
}: ResponsiveImageProps) {
  const webpSrc = webp === false ? null : (webp ?? src.replace(/\.(jpe?g|png)$/, '.webp'))
  return (
    <picture>
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
      <img src={src} width={width} height={height} alt={alt} {...imgProps} />
    </picture>
  )
}
