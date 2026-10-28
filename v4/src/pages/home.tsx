import * as React from 'react'
import { Link } from 'react-router-dom'

import { BrandMarks } from '@/components/art/brand-marks'
import { HeroArt } from '@/components/art/hero-art'
import { SampleReport } from '@/components/art/sample-report'
import { ShieldArt } from '@/components/art/shield-art'
import { BigTwelve, PercentDots, Scribble, SpendBlocks } from '@/components/art/spend-art'
import { DotGrid, SplitFlap } from '@/components/art/split-flap'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Magnetic } from '@/components/motion/magnetic'
import { Kinetic } from '@/components/motion/kinetic'
import { HowSection } from '@/components/page/how-section'
import {
  ArrowLink,
  ChapterHead,
  Chapter,
  ClosingBand,
  Fn,
  Footnotes,
  Heading,
  PageSeo,
} from '@/components/page/kit'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { BUTTONS, HOME } from '@/content/site'
import { faqPageJsonLd } from '@/lib/json-ld'
import { countTo, gsap, playWhen, useMotion } from '@/lib/motion'

/* ---------------------------------------------------------------- 01 hero */
function Hero() {
  const h = HOME.hero
  return (
    <section id="top" className="ed-ch ed-hero" aria-labelledby="hero-h">
      <div className="ed-wrap ed-hero__grid">
        <div className="ed-hero__copy">
          <p className="ed-cap ed-hero__eyebrow">
            <span className="ed-dotmark" aria-hidden="true" />
            {h.eyebrow}
          </p>
          <Kinetic as="h1" id="hero-h" hero className="ed-hero__h">
            See where your travel money goes, and where you can{' '}
            <em className="ed-serif">spend less.</em>
          </Kinetic>
          <p className="ed-lead ed-hero__sub">{h.sub}</p>
          <div className="ed-btns">
            <Magnetic>
              <Button asChild size="lg">
                <DialogLink to="/sign-up" dialog="signup">
                  {BUTTONS.signup}
                </DialogLink>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="secondary">
                <DialogLink to="/spend-review" dialog="review">
                  {BUTTONS.review}
                </DialogLink>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="tertiary">
              <Link to="/how-it-works">{BUTTONS.how}</Link>
            </Button>
          </div>
          <p className="ed-hero__note">{h.note}</p>
          <p className="ed-hero__trust">
            <i aria-hidden="true" />
            {h.trust}
          </p>
        </div>
        <div className="ed-hero__art">
          <HeroArt />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- 02 proof */
function parseStat(v: string) {
  const m = /^(\d+(?:\.\d+)?)(.*)$/.exec(v)
  return m ? { n: parseFloat(m[1]), suffix: m[2] } : null
}

function ProofStrip() {
  const { line, stats } = HOME.proof
  const ref = useMotion<HTMLDivElement>((el) => {
    const figs = Array.from(el.querySelectorAll<HTMLElement>('[data-stat]'))
    const tl = gsap.timeline({ paused: true })
    figs.forEach((f, i) => {
      const value = f.dataset.stat ?? ''
      const p = parseStat(value)
      if (p)
        tl.add(
          countTo(f, p.n, (n) => Math.round(n) + p.suffix, 1.6, { ease: 'power2.out' }),
          i * 0.2,
        )
      else
        tl.to(
          f,
          {
            duration: 1.4,
            scrambleText: { text: value, chars: 'GLOBAL', speed: 0.5, revealDelay: 0.25 },
          },
          i * 0.2,
        )
    })
    tl.from(
      el.querySelectorAll('.proof__stat'),
      { opacity: 0, y: 30, duration: 0.7, stagger: 0.18, ease: 'power3.out' },
      0,
    )
    playWhen(el, () => void tl.play(), 'top 82%')
  }, [])
  return (
    <section id="group-proof" className="ed-ch ed-proof" aria-labelledby="proof-h">
      <div className="ed-wrap">
        <ChapterHead num={2} label="The group" />
        <div ref={ref} className="proof">
          <h2 id="proof-h" className="proof__line" data-rv>
            {line}
          </h2>
          <ul className="proof__stats">
            {stats.map((s) => (
              <li key={s.label} className="proof__stat">
                <span className="proof__fig ed-stat" data-stat={s.value}>
                  {s.value}
                </span>
                <span className="proof__lab ed-cap">
                  {s.label}
                  <Fn n={s.note} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- 04 spending */
function Spending() {
  const s = HOME.spending
  return (
    <Chapter id="spending" labelledBy="spending-h">
      <div className="ed-wrap">
        <ChapterHead num={4} label="Spending you can see" />
        <div className="sp">
          <div className="sp__copy">
            <Heading id="spending-h" className="ed-h--xl">
              Every trip and every dollar, in <Scribble kind="underline">one place</Scribble>.
            </Heading>
            <p className="ed-lead" data-rv>
              {s.body}
            </p>
            <ol className="ed-points" data-rv="stagger">
              {s.points.map((p, i) => (
                <li key={p}>
                  <span className="ed-cap">{String(i + 1).padStart(2, '0')}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
            <div data-rv>
              <ArrowLink to="/finance">{s.link}</ArrowLink>
            </div>
          </div>
          <div className="sp__art">
            <SpendBlocks />
            <div className="sp__stat" data-rv>
              <BigTwelve />
              <p className="sp__stat-t">
                <span className="mr-sr">12% </span>
                {s.stat.text}
                <Fn n={s.stat.note} />
              </p>
              <PercentDots />
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

/* ---------------------------------------------------------------- 05 review */
function Review() {
  const r = HOME.review
  const [a, b] = r.context.split('7.2%')
  return (
    <Chapter id="review" tone="plum" labelledBy="review-h">
      <div className="ed-wrap">
        <ChapterHead num={5} label="Spend review" />
        <p className="rv__ctx" data-rv>
          {a}
          <Scribble kind="circle">
            <b className="rv__fig">7.2%</b>
          </Scribble>
          {b}
          <Fn n={r.contextNote} /> <span className="rv__take ed-serif">{r.takeaway}</span>
        </p>
        <div className="rv">
          <div className="rv__copy">
            <Heading id="review-h" className="ed-h--xl">
              {r.headline}
            </Heading>
            <p className="ed-lead" data-rv>
              {r.body}
            </p>
            <ol className="ed-points ed-points--dark" data-rv="stagger">
              {r.shows.map((p, i) => (
                <li key={p}>
                  <span className="ed-cap">{String(i + 1).padStart(2, '0')}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
            <p className="rv__note" data-rv>
              {r.note}
            </p>
            <div className="ed-btns" data-rv>
              <Magnetic>
                <Button asChild size="lg">
                  <DialogLink to="/spend-review" dialog="review">
                    {r.button}
                  </DialogLink>
                </Button>
              </Magnetic>
              <span className="rv__small">{r.small}</span>
            </div>
          </div>
          <div className="rv__art">
            <SampleReport />
          </div>
        </div>
      </div>
    </Chapter>
  )
}

/* ---------------------------------------------------------------- 06 plans */
function Eighty9() {
  const p = HOME.plans
  const ref = useMotion<HTMLSpanElement>((el) => {
    const tw = countTo(el, 89, (n) => Math.round(n) + '%', 1.8, { paused: true })
    playWhen(el, () => void tw.play(), 'top 85%')
  }, [])
  return (
    <span ref={ref} className="ed-stat pl__fig">
      {p.stat.value}
    </span>
  )
}

function Plans() {
  const p = HOME.plans
  return (
    <Chapter id="plans" labelledBy="plans-h">
      <div className="ed-wrap">
        <ChapterHead num={6} label="When plans change" />
        <div className="pl">
          <div className="pl__copy">
            <Heading id="plans-h" className="ed-h--xl">
              {p.headline}
            </Heading>
            <p className="ed-lead" data-rv>
              {p.body}
            </p>
            <div className="pl__stat" data-rv>
              <Eighty9 />
              <p>
                {p.stat.text}
                <Fn n={p.stat.note} />
              </p>
              <DotGrid />
            </div>
            <div data-rv>
              <ArrowLink to="/when-plans-change">{p.link}</ArrowLink>
            </div>
          </div>
          <div className="pl__stage">
            <SplitFlap />
            <div className="pl__person" aria-hidden="false">
              <span className="pl__disc" aria-hidden="true" />
              <img
                src="/img/px4173228-traveler-suitcase.webp"
                width="1100"
                height="957"
                alt="The traveler from the hero, on a call beside her suitcase"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

/* ---------------------------------------------------------------- 07 group */
function Group() {
  const g = HOME.group
  return (
    <Chapter id="group" tone="sand" labelledBy="group-h">
      <div className="ed-wrap">
        <ChapterHead num={7} label="The group behind Miraee" />
        <div className="gr">
          <div className="gr__copy">
            <Heading id="group-h" className="ed-h--xl">
              {g.headline}
            </Heading>
            <p className="ed-lead" data-rv>
              {g.body}
            </p>
            <div data-rv>
              <ArrowLink to="/company">{g.link}</ArrowLink>
            </div>
          </div>
          <figure className="gr__photo" data-rv="clip">
            <img
              src="/img/px4623080-team.webp"
              width="1067"
              height="641"
              alt="A team gathered around a table, working together"
              loading="lazy"
            />
            <figcaption className="ed-cap">Fig. 05 / The people behind the group</figcaption>
          </figure>
        </div>
        <BrandMarks />
      </div>
    </Chapter>
  )
}

/* ---------------------------------------------------------------- 08 roles */
const ROLE_ART = [
  {
    src: '/img/px5918389-controller.webp',
    w: 831,
    h: 1100,
    alt: 'A finance team member holding a tablet',
    shape: 'tang',
  },
  {
    src: '/img/px36845948-traveler-suit.webp',
    w: 856,
    h: 1100,
    alt: 'A travel lead in a dark suit with an aircraft pin',
    shape: 'ink',
  },
  {
    src: '/img/px15959733-traveler-red-coat.webp',
    w: 880,
    h: 1100,
    alt: 'A traveler in a red coat, laughing',
    shape: 'plum',
  },
]

function Roles() {
  const r = HOME.roles
  return (
    <Chapter id="roles" labelledBy="roles-h">
      <div className="ed-wrap">
        <ChapterHead num={8} label="Built for each role" />
        <Heading id="roles-h" className="ed-h--xl ed-h--wide">
          {r.headline}
        </Heading>
        <ul className="rl" data-rv="stagger">
          {r.cards.map((c, i) => (
            <li key={c.title} className="rl__card">
              <Link to={c.to} className="rl__link" aria-label={`${c.title}: ${c.link}`}>
                <span className="rl__stage" data-shape={ROLE_ART[i].shape}>
                  <span className="rl__shape" aria-hidden="true" />
                  <img
                    src={ROLE_ART[i].src}
                    width={ROLE_ART[i].w}
                    height={ROLE_ART[i].h}
                    alt={ROLE_ART[i].alt}
                    loading="lazy"
                  />
                </span>
                <span className="rl__no ed-cap">{String(i + 1).padStart(2, '0')}</span>
                <span className="rl__t">{c.title}</span>
                <span className="rl__b">{c.body}</span>
                <span className="ed-arrow rl__a">
                  <span>{c.link}</span>
                  <svg viewBox="0 0 24 12" width="24" height="12" aria-hidden="true">
                    <path
                      d="M0 6 H22 M16 1 L22 6 L16 11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Chapter>
  )
}

/* ---------------------------------------------------------------- 09 security */
function Security() {
  const s = HOME.security
  return (
    <Chapter id="security" tone="plum" labelledBy="security-h">
      <div className="ed-wrap">
        <ChapterHead num={9} label="Security" />
        <div className="sc">
          <div className="sc__copy">
            <Heading id="security-h" className="ed-h--xl">
              {s.headline}
            </Heading>
            <p className="ed-lead" data-rv>
              {s.body}
            </p>
            <div className="ed-btns" data-rv>
              <Magnetic>
                <Button asChild size="lg">
                  <Link to="/security">{s.button}</Link>
                </Button>
              </Magnetic>
              <Button asChild size="lg" variant="tertiary">
                <Link to="/talk-to-sales">{s.link}</Link>
              </Button>
            </div>
          </div>
          <ShieldArt className="sc__art" />
        </div>
      </div>
    </Chapter>
  )
}

/* ---------------------------------------------------------------- 10 faq */
function Faq() {
  const items = HOME.faq
  return (
    <Chapter id="faq" labelledBy="faq-h">
      <div className="ed-wrap">
        <ChapterHead num={10} label="Questions" />
        <div className="fq">
          <Heading id="faq-h" className="ed-h--xl">
            Questions, answered.
          </Heading>
          <Accordion type="single" collapsible className="fq__list" data-rv="stagger">
            {items.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger>
                  <span className="fq__n ed-cap">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fq__q">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="fq__a">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Chapter>
  )
}

/** Route: / */
export function Component() {
  const jsonLd = React.useMemo(
    () => [
      {
        '@context': 'https://schema.org',
        ...faqPageJsonLd(
          'https://miraee.com/#faq',
          HOME.faq.map((f) => ({ question: f.q, answer: f.a })),
        ),
      },
    ],
    [],
  )
  return (
    <>
      <PageSeo
        title="See where your travel money goes"
        description="Business travel and expense software. Your people book flights and hotels inside company policy. Finance sees every trip and the budget it belongs to."
        extra={{ jsonLd }}
      />
      <main id="main" className="ed-main">
        <Hero />
        <ProofStrip />
        <HowSection num={3} />
        <Spending />
        <Review />
        <Plans />
        <Group />
        <Roles />
        <Security />
        <Faq />
        <div id="close">
          <ClosingBand headline={HOME.closing.headline} />
          <Footnotes />
        </div>
      </main>
    </>
  )
}
Component.displayName = 'HomePage'
