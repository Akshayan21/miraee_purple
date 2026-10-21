import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import {
  BigStat,
  Band,
  EditorialList,
  PageClosing,
  PageHero,
  Pills,
  SectionHead,
} from '@/components/page/kit'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import styles from './company.module.css'
import { meta } from './meta'

const PLACES = [
  {
    name: 'company-city-new-york-1',
    w: 2046,
    h: 1364,
    alt: 'The Manhattan skyline with the Empire State Building.',
  },
  {
    name: 'company-city-san-francisco-1',
    w: 2046,
    h: 1364,
    alt: 'The Golden Gate Bridge in San Francisco.',
  },
  {
    name: 'company-city-los-angeles-1',
    w: 2047,
    h: 1228,
    alt: 'The Los Angeles skyline at sunset.',
  },
]

/** Route: /company */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Company' }]}
          title="Built by Tabhi, the company behind the Mondee travel marketplace"
          lead={
            <>
              <Link to="/" className={styles.heroLink}>
                Miraee is business travel and expense software
              </Link>
              , built by Tabhi, the company behind the Mondee travel marketplace.
            </>
          }
          actions={
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          }
          visual={
            <picture>
              <source srcSet="/img/document/company-hero-1.webp" type="image/webp" />
              <img
                className={styles.photo}
                src="/img/document/company-hero-1.jpg"
                width="2046"
                height="1364"
                alt="A traveler photographs planes through a tall airport window, his suitcase beside him."
                fetchPriority="high"
              />
            </picture>
          }
        />

        <Band tone="lilac" round aria-labelledby="does-h">
          <Reveal className={styles.statement}>
            <SectionHead id="does-h" title="Travel your finance team can see." />
            <p className={styles.statementText}>
              Your people book flights and hotels inside company policy. Finance sees every trip
              with its budget and GL code. When plans change, travelers get an alert and new options
              to confirm.
            </p>
            <div className={shared.buttons}>
              <Button asChild variant="tertiary">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </Reveal>
        </Band>

        <Band tone="night" glow aria-labelledby="cov-h">
          <SectionHead
            id="cov-h"
            tone="night"
            title="Global coverage from the Mondee travel marketplace"
          />
          <div className={styles.stats}>
            <BigStat dark value={500} suffix="+">
              The Mondee travel marketplace connects to more than 500 airlines.
            </BigStat>
            <BigStat dark value={1} suffix="M+">
              It also offers more than 1 million hotels and vacation rentals across the Mondee
              network.
            </BigStat>
          </div>
          <ul className={styles.places}>
            {PLACES.map((p) => (
              <li key={p.name}>
                <figure className={styles.place}>
                  <picture>
                    <source srcSet={`/img/document/${p.name}.webp`} type="image/webp" />
                    <img
                      src={`/img/document/${p.name}.jpg`}
                      width={p.w}
                      height={p.h}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </figure>
              </li>
            ))}
          </ul>
        </Band>

        <Band tone="plum" aria-labelledby="work-h">
          <SectionHead id="work-h" tone="plum" title="How we work" />
          <EditorialList
            dark
            items={[
              { title: 'Figures on this site carry their source.' },
              { title: 'Savings are given as a range, with the method shown.' },
              { title: 'The assistant suggests. Your approvers decide.' },
            ]}
          />
          <div className={styles.links}>
            <Pills
              dark
              items={[
                <Link key="s" to="/security">
                  Security
                </Link>,
                <Link key="p" to="/pricing">
                  What's free
                </Link>,
                <Link key="r" to="/resources">
                  Resources
                </Link>,
              ]}
            />
          </div>
        </Band>

        <PageClosing
          title={<>Talk to us.</>}
          lead="Questions about Miraee, the spend review or security? We'll answer."
          actions={
            <>
              <Button asChild>
                <DialogLink to="/sign-up" dialog="signup">
                  Sign up free
                </DialogLink>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/talk-to-sales">Talk to sales</Link>
              </Button>
            </>
          }
        />
      </main>
    </>
  )
}
Component.displayName = 'CompanyPage'
