import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

import archivoLatin from '@/assets/fonts/archivo-latin-standard-normal.woff2?url'
import { FormDialogsProvider } from '@/components/forms/form-dialogs-context'
import { ReviewDialog, SignupDialog } from '@/components/forms/form-dialogs'
import { Intro } from '@/components/motion/intro'
import { refreshOnSettle } from '@/components/motion/reveals'
import { ScrollProgress } from '@/components/motion/scroll-ui'
import { ScrollTrigger, registerGsap } from '@/lib/motion'

/** Scroll to the top on navigation, or to the #anchor when the URL has one (footnotes, in-page links). */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    registerGsap()
    if (hash) {
      const go = () => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      go()
      const t = window.setTimeout(go, 400)
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])
  return null
}

/**
 * Top of every route: dialogs, the intro curtain (home, first load), scroll progress and scroll handling.
 * The `mo-pre` class (set early by index.html when motion is allowed) pre-hides reveal targets so they do not flash;
 * it is lifted here once the page's motion has been set up, with a CSS failsafe if scripts never get this far.
 */
export function RootLayout() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    registerGsap()
    const raf = requestAnimationFrame(() => document.documentElement.classList.remove('mo-pre'))
    refreshOnSettle()
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <FormDialogsProvider>
      <Head defer={false}>
        <link
          rel="preload"
          href={archivoLatin}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <ScrollManager />
      <ScrollProgress />
      {pathname === '/' ? <Intro /> : null}
      <a className="ed-skip" href="#main">
        Skip to content
      </a>
      <Outlet />
      <SignupDialog />
      <ReviewDialog />
    </FormDialogsProvider>
  )
}
