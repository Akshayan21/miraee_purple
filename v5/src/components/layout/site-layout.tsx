import * as React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import { VersionToggle } from '@/components/layout/version-toggle'
import { Intro } from '@/components/layout/intro'
import { Orbs, SignupButton } from '@/components/glass/ui'
import { FOOTER_GROUPS, HOME, NAV } from '@/content/site'
import { gsap, ScrollTrigger } from '@/lib/gsap'

function Header() {
  const [open, setOpen] = React.useState(false)
  const [stuck, setStuck] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => setOpen(false), [pathname])
  React.useEffect(() => {
    const on = () => setStuck(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', esc)
    }
  }, [open])

  return (
    <>
      <header className={`hdr${stuck ? 'is-stuck' : ''}`}>
        <div className="hdr-pill">
          <Link to="/" className="hdr-logo" aria-label="Miraee home">
            <img src="/img/miraee-logo-orange.svg" alt="Miraee" width="105" height="26" />
          </Link>
          <nav className="hdr-nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="hdr-end">
            <VersionToggle />
            <SignupButton variant="pri" />
          </div>
          <button
            type="button"
            className="hdr-burger"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className="mnav" id="mnav" data-open={open} aria-hidden={!open}>
        <nav className="mnav-in" aria-label="Mobile">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className="mnav-link" tabIndex={open ? 0 : -1}>
              {n.label}
            </NavLink>
          ))}
          <div className="mnav-foot">
            <VersionToggle />
            <SignupButton variant="pri" />
          </div>
        </nav>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="ftr g-dark">
      <div className="wrap">
        <div className="tile tile--plum tile--flat ftr-tile">
          <div className="ftr-grid">
            <div className="stack">
              <img
                src="/img/miraee-logo-orange.svg"
                alt="Miraee"
                width="130"
                height="32"
                style={{ width: 130, height: 'auto' }}
              />
              <p className="p" style={{ maxWidth: 300 }}>
                {HOME.hero.trust}
              </p>
            </div>
            {FOOTER_GROUPS.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <h2>{g.title}</h2>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="ftr-base">
            <span>Miraee, part of Tabhi.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** Scroll reveals for every [data-reveal] on the page. Hidden from JS after mount, so the static HTML is always readable. */
function useReveals(pathname: string) {
  React.useEffect(() => {
    const mm = gsap.matchMedia()
    const t = window.setTimeout(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const els = gsap.utils.toArray<HTMLElement>('[data-reveal]')
        gsap.set(els, { autoAlpha: 0, y: 36, scale: 0.97 })
        ScrollTrigger.batch(els, {
          start: 'top 92%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.09,
              overwrite: true,
              clearProps: 'transform,opacity,visibility',
            }),
        })
        ScrollTrigger.refresh()
      })
    }, 80)
    return () => {
      window.clearTimeout(t)
      mm.revert()
    }
  }, [pathname])
}

export function SiteLayout() {
  const { pathname } = useLocation()
  useReveals(pathname)
  React.useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh).catch(() => undefined)
    return () => window.removeEventListener('load', refresh)
  }, [])
  return (
    <div className="g-app">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Orbs set={pathname === '/' ? 'home' : 'inner'} key={pathname === '/' ? 'h' : 'i'} />
      <Header />
      <Outlet />
      <Footer />
      <Intro />
    </div>
  )
}
