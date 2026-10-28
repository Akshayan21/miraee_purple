import * as React from 'react'
import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { NetworkDots } from '@/components/art/charts'
import { GButton, ReviewButton, SignupButton } from '@/components/glass/ui'
import { TextField } from '@/components/forms/fields'
import { Button } from '@/components/ui/button'
import { FormTile } from '@/pages/extras'
import { FORM_PAGES, LEGAL } from '@/content/site'
import { gsap } from '@/lib/gsap'
import { useMotion } from '@/lib/motion'

const F = 'max-w-none'
const ROBOTS = 'noindex, nofollow'

/** Hero shell for the form pages: text tile, form tile, and a small animated tile. */
function FormHero({ title, sub, eyebrow, form, art }: { title: string; sub: string; eyebrow: string; form: React.ReactNode; art?: React.ReactNode }) {
  return (
    <section className="sec sec--hero" aria-labelledby="page-h">
      <div className="wrap">
        <div className="bento ihero">
          <div className="tile s5 ihero-text" data-reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="disp h-xl ih1" id="page-h">
              {title}
            </h1>
            <p className="lead">{sub}</p>
            {art}
          </div>
          <div className="s7">{form}</div>
        </div>
      </div>
    </section>
  )
}

function MiniNet() {
  return (
    <div className="mini-net tile tile--plum">
      <NetworkDots />
    </div>
  )
}

export function TalkPage() {
  const f = FORM_PAGES.talk
  return (
    <>
      <Seo meta={{ title: 'Talk to sales | Miraee', description: f.sub, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <FormHero
          eyebrow="Talk to sales"
          title={f.h1}
          sub={f.sub}
          art={<MiniNet />}
          form={
            <FormTile action="/talk-to-sales" title="Book a call" button={f.button} cols={2}>
              <TextField fieldClassName={F} id="ts-name" name="name" label="Name" autoComplete="name" required />
              <TextField fieldClassName={F} id="ts-email" name="email" label="Work email" type="email" autoComplete="email" required />
              <TextField fieldClassName={F} id="ts-co" name="company" label="Company" autoComplete="organization" required />
              <TextField fieldClassName={F} id="ts-size" name="size" label="Headcount" type="number" inputMode="numeric" min={1} required />
              <TextField fieldClassName={`${F} gform-wide`} id="ts-msg" name="message" label="What you want to discuss" multiline rows={4} />
            </FormTile>
          }
        />
      </main>
    </>
  )
}

export function SignUpPage() {
  const f = FORM_PAGES.signup
  return (
    <>
      <Seo meta={{ title: 'Sign up free | Miraee', description: f.sub, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <FormHero
          eyebrow="Sign up free"
          title={f.h1}
          sub={f.sub}
          art={<MiniNet />}
          form={
            <FormTile action="/sign-up" title="Create your account" button={f.button} cols={2}>
              <TextField fieldClassName={F} id="su-name" name="name" label="Name" autoComplete="name" required />
              <TextField fieldClassName={F} id="su-pemail" name="email" label="Work email" type="email" autoComplete="email" required />
              <TextField fieldClassName={F} id="su-pco" name="company" label="Company" autoComplete="organization" required />
              <TextField fieldClassName={F} id="su-psize" name="size" label="Headcount" type="number" inputMode="numeric" min={1} required />
            </FormTile>
          }
        />
      </main>
    </>
  )
}

export function LogInPage() {
  const f = FORM_PAGES.login
  const [sent, setSent] = React.useState(false)
  return (
    <>
      <Seo meta={{ title: 'Log in | Miraee', description: f.sub, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <FormHero
          eyebrow="Log in"
          title={f.h1}
          sub={f.sub}
          art={<MiniNet />}
          form={
            <div className="tile form-tile" data-reveal>
              <h2 className="disp h-md">Welcome back</h2>
              <form
                className="gform gform--1"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <Button type="button" variant="secondary" className="gform-btn" onClick={() => setSent(true)}>
                  Continue with Google
                </Button>
                <TextField fieldClassName={F} id="li-email" name="email" label="Work email" type="email" autoComplete="email" required />
                <div className="gform-submit">
                  <Button type="submit" className="gform-btn">
                    <span className="mr-btn__u">Continue</span>
                  </Button>
                </div>
                {sent ? (
                  <p className="small" role="status">
                    Log in is not connected in this preview.
                  </p>
                ) : null}
              </form>
              <p className="small">
                New to Miraee? <Link to="/sign-up">Sign up free</Link>
              </p>
            </div>
          }
        />
      </main>
    </>
  )
}

function LegalPage({ title, body }: { title: string; body: string }) {
  return (
    <>
      <Seo meta={{ title: `${title} | Miraee`, robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <section className="sec sec--hero" aria-labelledby="page-h">
          <div className="wrap">
            <div className="tile legal" data-reveal>
              <p className="eyebrow">Legal</p>
              <h1 className="disp h-xl ih1" id="page-h">
                {title}
              </h1>
              <p className="lead">{body}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export const PrivacyPage = () => <LegalPage title={LEGAL.privacy.title} body={LEGAL.privacy.body} />
export const TermsPage = () => <LegalPage title={LEGAL.terms.title} body={LEGAL.terms.body} />

export function NotFoundPage() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, () => {
    gsap.to('.nf-n i', { y: -14, duration: 1.6, yoyo: true, repeat: -1, stagger: 0.2, ease: 'sine.inOut' })
  })
  return (
    <>
      <Seo meta={{ title: 'Page not found | Miraee', robots: ROBOTS }} />
      <main id="main" className="page-main" tabIndex={-1}>
        <section className="sec sec--hero" aria-labelledby="page-h">
          <div className="wrap">
            <div className="tile tile--plum nf" ref={ref} data-reveal>
              <p className="fig nf-n" aria-hidden="true">
                <i>4</i>
                <i>0</i>
                <i>4</i>
              </p>
              <h1 className="disp h-lg" id="page-h">
                We cannot find that page.
              </h1>
              <p className="lead">It may have moved. Head back to the start, or sign up.</p>
              <div className="row">
                <GButton to="/" variant="pri">
                  Back to home
                </GButton>
                <SignupButton variant="sec" />
                <ReviewButton variant="sec" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
