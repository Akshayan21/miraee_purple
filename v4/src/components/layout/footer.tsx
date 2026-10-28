import { Link } from 'react-router-dom'

import { FOOTER_GROUPS } from '@/content/site'

/** Colophon: an oversized wordmark, the four link groups from the sitemap, and the legal line. */
export function Footer() {
  return (
    <footer className="ed-foot mr-night">
      <div className="ed-wrap">
        <div className="ed-foot__top">
          <div>
            <img
              className="ed-foot__logo"
              src="/img/miraee-logo-orange.svg"
              width="338"
              height="84"
              alt="Miraee"
            />
            <p className="ed-foot__tag">
              Business travel and expense software. Part of Tabhi, the travel group behind Mondee
              and Abhee.
            </p>
            <ul className="ed-foot-group" aria-label="The Tabhi group">
              <li>
                <img
                  src="/img/logo-tabhi.png"
                  width="219"
                  height="131"
                  alt="Tabhi"
                  loading="lazy"
                  decoding="async"
                />
              </li>
              <li>
                <img
                  src="/img/logo-mondee.png"
                  width="160"
                  height="35"
                  alt="Mondee"
                  loading="lazy"
                  decoding="async"
                />
              </li>
              <li>
                <img
                  src="/img/logo-abhee.webp"
                  width="640"
                  height="162"
                  alt="Abhee"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            </ul>
          </div>
          <nav className="ed-foot__cols" aria-label="Footer">
            {FOOTER_GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="ed-cap">{g.title}</h2>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <img
          className="ed-foot__big"
          src="/img/miraee-logo-orange.svg"
          width="338"
          height="84"
          alt=""
          aria-hidden="true"
        />
        <div className="ed-foot__legal">
          <span>Miraee, a Tabhi company.</span>
          <span>
            <Link to="/privacy">Privacy</Link> <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
