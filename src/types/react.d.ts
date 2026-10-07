import 'react'

declare module 'react' {
  // React 18 only recognises the lower-case attribute; the camelCase prop arrives with React 19.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ImgHTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto'
  }
}
