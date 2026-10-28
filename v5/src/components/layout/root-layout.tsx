import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

import { FormDialogsProvider } from '@/components/forms/form-dialogs-context'
import { ReviewDialog, SignupDialog } from '@/components/forms/form-dialogs'
import archivoLatin from '@/assets/fonts/archivo-latin-standard-normal.woff2?url'

/** Scroll to the top on navigation, or to the #anchor when the URL has one (footnotes, in-page links). */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      let tries = 0
      const go = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ block: 'center' })
        else if (tries++ < 20) window.setTimeout(go, 60)
      }
      window.setTimeout(go, 80)
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

/** Top of every route: shared form dialogs and scroll handling. */
export function RootLayout() {
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
      <Outlet />
      <SignupDialog />
      <ReviewDialog />
    </FormDialogsProvider>
  )
}
