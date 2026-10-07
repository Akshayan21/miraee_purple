import styles from './site-footer.module.css'
import { Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'

import { FOOTER_COMPANY_LINKS, FOOTER_PRODUCT_LINKS, type NavItem } from '@/content/navigation'

function FooterColumn({ title, links }: { title: string; links: NavItem[] }) {
  return (
    <nav aria-label={title}>
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="mr-footer">
      <Container className="mr-container">
        <div className={`mr-footer__cols mr-footer__cols--two ${styles.grid}`}>
          <div className="mr-footer__brand">
            <img src="/img/miraee-logo-orange.svg" alt="Miraee" width={113} height={28} />
            <p>Miraee is built by Tabhi, the company behind the Mondee travel marketplace.</p>
          </div>
          <FooterColumn title="Product" links={FOOTER_PRODUCT_LINKS} />
          <FooterColumn title="Company" links={FOOTER_COMPANY_LINKS} />
        </div>
        <div className="mr-footer__legal">
          <span>© 2026 Miraee</span>
        </div>
      </Container>
    </footer>
  )
}
