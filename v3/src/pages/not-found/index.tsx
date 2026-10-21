import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { PageHero } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import { meta } from './meta'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/compare', label: 'Compare' },
  { to: '/resources', label: 'Resources' },
]

/** Route: 404 (catch-all) */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          eyebrow="Error 404"
          title={["We can't find", 'that page.']}
          lead="It may have moved. These pages will get you back on track."
          actions={LINKS.map((l, i) => (
            <Button key={l.to} asChild variant={i === 0 ? undefined : 'secondary'}>
              <Link to={l.to}>{l.label}</Link>
            </Button>
          ))}
        />
      </main>
    </>
  )
}
Component.displayName = 'NotFoundPage'
