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

  return (
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
        <span className={`mr-nav__menu-bars ${styles.bars}`} aria-hidden="true"></span>
        <span className={`mr-nav__menu-label ${styles.label}`}>Menu</span>
      </button>
      <ul
        className={`mr-nav__links ${styles.links}`}
        id={menuId}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpenFor(null)
            menuRef.current?.focus()
          }
        }}
      >
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
        <li className={styles.mobileAction}>
          <Button asChild variant="secondary" size="sm">
            <DialogLink to="/sign-up" dialog="signup" onClick={() => setOpenFor(null)}>
              {ctaLabel}
            </DialogLink>
          </Button>
        </li>
      </ul>
      <div className={`mr-nav__end ${styles.end}`}>
        <Button asChild variant="secondary" size="sm">
          <DialogLink to="/sign-up" dialog="signup">
            {ctaLabel}
          </DialogLink>
        </Button>
      </div>
    </nav>
  )
}
