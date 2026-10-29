import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { useGlobalReveals } from '@/components/motion/reveals'

/** Header, page and footer. Scroll reveals for the page are wired here, after the page has mounted. */
export function SiteLayout() {
  const { pathname } = useLocation()
  useGlobalReveals(pathname)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
