import { useMatches } from 'react-router-dom'

import { Navbar } from '@/components/layout/navbar'
import { cn } from '@/lib/utils'
import type { RouteHandle } from '@/lib/route-handle'

export function SiteHeader() {
  // Routes that open on a light hero (the home page) ask for a light header so nav and hero share one ground.
  const light = useMatches().some(
    (match) => (match.handle as RouteHandle | undefined)?.headerTone === 'light',
  )
  return (
    <header className={cn('site-head', light ? 'mr-paper' : 'mr-plum')}>
      <div className="mr-container">
        <Navbar />
      </div>
    </header>
  )
}
