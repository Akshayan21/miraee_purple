import styles from './navbar.module.css'
import * as React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, type NavItem } from '@/content/navigation'

type NavbarProps = {
  /** Primary links. Defaults to the site navigation. */
  links?: NavItem[]
  /** Label of the call-to-action button on the right (opens the sign-up dialog). */
  ctaLabel?: string
}

/**
 * Main navigation bar: logo, links (current page underlined via aria-current), sign-up button.
 * Below 1200px the links collapse behind a "Menu" disclosure button. Place it on a `.mr-plum` ground
 * inside a `.mr-container`; `SiteHeader` does exactly that.
 */
export function Navbar({ links = NAV_LINKS, ctaLabel = 'Sign up free' }: NavbarProps) {
  const { pathname } = useLocation()
  const menuRef = React.useRef<HTMLButtonElement>(null)
  const menuId = React.useId()
  // The menu is open for one pathname only, so navigating collapses it without an effect.
  const [openFor, setOpenFor] = React.useState<string | null>(null)
  const menuOpen = openFor === pathname

  // Lock page scroll behind the open menu; Escape closes it from anywhere.
  React.useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenFor(null)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <>
      <div
        className={`${styles.scrim} ${menuOpen ? styles.scrimOpen : ''}`}
        aria-hidden="true"
        onClick={() => setOpenFor(null)}
      />
      <nav className={`mr-nav ${styles.nav}`} aria-label="Main">
        <Link className={`mr-nav__logo ${styles.logo}`} to="/">
          <img src="/img/miraee-logo-orange.svg" alt="Miraee home" width={121} height={30} />
        </Link>
        <button
          className={`mr-nav__menu ${styles.menu}`}
          ref={menuRef}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setOpenFor(menuOpen ? null : pathname)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpenFor(null)
          }}
        >
          <span className={`mr-nav__menu-bars ${styles.bars}`} aria-hidden="true">
            <span />
            <span />
          </span>
          <span className={`mr-nav__menu-label ${styles.label}`}>Menu</span>
        </button>
        <ul
          className={`mr-nav__links ${styles.links}`}
          id={menuId}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) setOpenFor(null)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpenFor(null)
              menuRef.current?.focus()
            }
          }}
        >
          {links.map((link) => (
            <li key={link.to} className={link.children ? styles.hasMenu : undefined}>
              <NavLink to={link.to} end={Boolean(link.children)}>
                {link.label}
              </NavLink>
              {link.children ? (
                <ul className={styles.sub}>
                  {link.children.map((child) => (
                    <li key={child.to + child.label}>
                      <NavLink to={child.to} end>
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li className={styles.mobileTalk}>
            <Link to="/talk-to-sales" onClick={() => setOpenFor(null)}>
              Talk to sales
            </Link>
          </li>
          <li className={styles.mobileAction}>
            <Button asChild variant="secondary" size="sm">
              <DialogLink to="/sign-up" dialog="signup" onClick={() => setOpenFor(null)}>
                {ctaLabel}
              </DialogLink>
            </Button>
          </li>
        </ul>
        <div className={`mr-nav__end ${styles.end}`}>
          <Link className={styles.talk} to="/talk-to-sales">
            Talk to sales
          </Link>
          <Button asChild variant="secondary" size="sm">
            <DialogLink to="/sign-up" dialog="signup">
              {ctaLabel}
            </DialogLink>
          </Button>
        </div>
      </nav>
    </>
  )
}
