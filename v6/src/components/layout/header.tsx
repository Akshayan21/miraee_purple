import * as React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { VersionToggle } from '@/components/layout/version-toggle'
import { Magnetic } from '@/components/motion/magnetic'
import { Button } from '@/components/ui/button'
import { BUTTONS, NAV } from '@/content/site'

/** Masthead: logo, the five nav links, the version switch and the one header button. A full-screen menu on small screens. */
export function Header() {
  const { pathname } = useLocation()
  // The menu is open only for the page it was opened on, so navigating closes it without an effect.
  const [openAt, setOpenAt] = React.useState<string | null>(null)
  const open = openAt === pathname
  const setOpen = (next: boolean | ((v: boolean) => boolean)) =>
    setOpenAt((cur) => ((typeof next === 'function' ? next(cur === pathname) : next) ? pathname : null))
  const first = React.useRef<HTMLAnchorElement>(null)

  React.useEffect(() => {
    document.documentElement.toggleAttribute('data-menu', open)
    if (!open) return
    first.current?.focus()
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpenAt(null)
    window.addEventListener('keydown', esc)
    return () => {
      window.removeEventListener('keydown', esc)
      document.documentElement.removeAttribute('data-menu')
    }
  }, [open])

  return (
    <header className="ed-hdr">
      <div className="ed-hdr__in">
        <Link to="/" className="ed-logo" aria-label="Miraee, home">
          <img src="/img/miraee-logo-orange.svg" width="338" height="84" alt="" />
        </Link>
        <nav className="ed-nav" aria-label="Main">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => (isActive ? 'is-on' : undefined)}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <VersionToggle className="ed-vt" />
        <span className="ed-hdr__cta">
          <Magnetic>
            <Button asChild size="sm">
              <DialogLink to="/sign-up" dialog="signup">
                {BUTTONS.signup}
              </DialogLink>
            </Button>
          </Magnetic>
        </span>
        <button
          type="button"
          className="ed-burger"
          aria-expanded={open}
          aria-controls="ed-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="ed-burger__t">{open ? 'Close' : 'Menu'}</span>
          <span className="ed-burger__i" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>
      <div id="ed-menu" className="ed-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ol>
            {NAV.map((n, i) => (
              <li key={n.to}>
                <Link to={n.to} ref={i === 0 ? first : undefined}>
                  <span className="ed-cap">{String(i + 1).padStart(2, '0')}</span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="ed-menu__foot">
          <VersionToggle className="ed-vt" />
          <Button asChild size="lg">
            <DialogLink to="/sign-up" dialog="signup">
              {BUTTONS.signup}
            </DialogLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
