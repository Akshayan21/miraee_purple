import styles from './hero-section.module.css'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

/**
 * Decorative backdrop: an organic plum shape bleeding off the right edge, a travel photograph cut to its edge, and the brand's
 * orange Line tracing it.
 */
function HeroBackdrop() {
  return (
    <div className="hero__backdrop" aria-hidden="true">
      <HeroPhoto />
      <svg
        className="hero__blob"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          className="hero__blob-back"
          d="M 30 0 C 22 12, 8 18, 14 34 C 20 48, 0 54, 4 68 C 8 82, 22 84, 18 100 L 100 100 L 100 0 Z"
        />
        <path
          className="hero__blob-line"
          d="M 27 -2 C 19 10, 4 16, 10 34 C 16 48, -4 54, 0 68"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

/** The stacked hero keeps its photograph inside the visual, clear of the copy. */
function HeroPhoto({ mobile = false }: { mobile?: boolean }) {
  return (
    <picture>
      <source srcSet="/img/hero-airport-terminal.webp" type="image/webp" />
      <img
        className={mobile ? 'hero__photo hero__photo--stacked' : 'hero__photo'}
        src="/img/hero-airport-terminal.jpg"
        width="1600"
        height="1067"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
      />
    </picture>
  )
}

export function HeroSection() {
  return (
    <Section className={`mr-paper hero hero--blob ${styles.hero}`} aria-labelledby="hero-h">
      <HeroBackdrop />
      <Container className="mr-container hero__grid">
        <div className="hero__copy">
          <h1 className="mr-display" id="hero-h">
            See where your travel money goes, and where you can spend less.
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Your people book flights and hotels
            inside company policy, and finance sees every trip with its budget and GL code. Free to
            sign up and onboard, at any company size.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
          <p className="mr-small hero__trust">
            Built by Tabhi, the company behind the Mondee travel marketplace. Keep the corporate
            cards you already use.
          </p>
        </div>
        <figure className="hero__visual" style={{ margin: '0' }}>
          <HeroPhoto mobile />
          <span className="hero__orb" aria-hidden="true" />
          <ProductCard className="hero__card mr-paper mr-ledger-wrap card-shadow">
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">3 trips</span>
            </div>
            <LedgerTable className="mr-ledger">
              <caption>Product view with illustrative data.</caption>
              <thead>
                <tr>
                  <th scope="col">Trip</th>
                  <th scope="col" className="mr-num">
                    Amount
                  </th>
                  <th scope="col">Policy</th>
                  <th scope="col" className="mr-num">
                    GL code
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Client visit, Chicago</td>
                  <td className="mr-num">$1,284.60</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
                <tr>
                  <td>Site audit, Dallas</td>
                  <td className="mr-num">$946.20</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
                <tr>
                  <td>Sales kickoff, Denver</td>
                  <td className="mr-num">
                    <span className="mr-circled">
                      $2,318.40
                      <svg
                        className="mr-line"
                        viewBox="0 0 260 130"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58"></path>
                      </svg>
                    </span>
                  </td>
                  <td>
                    <Badge variant="error">Out of policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
              </tbody>
            </LedgerTable>
          </ProductCard>
          <div className="hero__toast mr-paper card-shadow">
            <span className="hero__toast-mark" aria-hidden="true" />
            <p className="hero__toast-text">
              <strong>Approved</strong>
              <span>Denver hotel, by Dana R. at 9:40 a.m.</span>
            </p>
          </div>
        </figure>
      </Container>
    </Section>
  )
}
