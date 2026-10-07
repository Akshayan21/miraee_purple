import * as React from 'react'
import { Outlet, useLocation, useMatches } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

import { FormDialogsProvider } from '@/components/forms/form-dialogs-context'
import { ReviewDialog, SignupDialog } from '@/components/forms/form-dialogs'
import archivoLatin from '@/assets/fonts/archivo-latin-standard-normal.woff2?url'
import type { RouteHandle } from '@/lib/route-handle'
import { initScrollMotion } from '@/lib/scroll-motion'

/** Scroll to the top on navigation, or to the #anchor when the URL has one (footnotes, in-page links). */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

/** Scroll-driven motion for whichever page is showing; torn down and rebuilt on every navigation. */
function ScrollMotion() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    let cleanup: (() => void) | undefined
    // Wait a frame so the new route (and any scroll-to-top / anchor jump) has settled before measuring.
    const raf = requestAnimationFrame(() => {
      cleanup = initScrollMotion()
    })
    return () => {
      cancelAnimationFrame(raf)
      cleanup?.()
    }
  }, [pathname])
  return null
}

/** Tells the scoped page sheets (see lib/route-handle.ts) which pages they apply to. */
function PageStyles() {
  const matches = useMatches()
  const sheets = matches
    .flatMap((match) => (match.handle as RouteHandle | undefined)?.styles ?? [])
    .join(' ')

  // <Head> covers the pre-rendered HTML; this keeps <body> in step on client-side navigation.
  React.useEffect(() => {
    if (sheets) document.body.setAttribute('data-css', sheets)
    else document.body.removeAttribute('data-css')
  }, [sheets])

  return (
    <Head defer={false}>
      <link rel="preload" href={archivoLatin} as="font" type="font/woff2" crossOrigin="anonymous" />
      <body data-css={sheets || undefined} />
    </Head>
  )
}

/** Top of every route: shared form dialogs, page-sheet scoping and scroll handling. */
export function RootLayout() {
  return (
    <FormDialogsProvider>
      <PageStyles />
      <ScrollManager />
      <ScrollMotion />
      <Outlet />
      <SignupDialog />
      <ReviewDialog />
    </FormDialogsProvider>
  )
}
