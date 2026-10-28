import * as React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChapterHead, Chapter, Heading } from '@/components/page/kit'
import { InnerPageView, PageEnd, PageHero } from '@/components/page/page-shell'
import { PageSeo } from '@/components/page/kit'
import { ExtraBlocks } from '@/components/page/extra-blocks'
import { GUIDES } from '@/content/extras'
import { PAGES, type InnerPage } from '@/content/site'
import { TemplateDone } from '@/pages/form-kit'
import { TextField } from '@/components/forms/fields'
import { Field } from '@/components/forms/fields'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { FORM_PAGES } from '@/content/site'
import { FormDoneMessage } from '@/components/forms/form-dialogs'
import { LeadForm } from '@/components/forms/lead-form'

export const page = (path: string): InnerPage => {
  const p = PAGES.find((x) => x.path === path)
  if (!p) throw new Error(`No page data for ${path}`)
  return p
}

/** Pricing questions. Answers repeat the home page and pricing copy; nothing new is claimed. */
const PRICING_FAQ = [
  {
    q: 'Is there a headcount limit?',
    a: 'No. Sign-up and onboarding are free at any company size. The same is true for a company of 300 or 3,000.',
  },
  {
    q: 'What does onboarding include?',
    a: 'We set up your company, your travel policy and your people with you, and train your admins and your finance team.',
  },
  {
    q: 'Can we keep our cards?',
    a: 'Yes. Add them during onboarding, and receipts match to card charges.',
  },
  {
    q: 'Do we need a spend review first?',
    a: 'It is optional, for teams who want to see their numbers before they switch.',
  },
]

function PricingFaq() {
  return (
    <Chapter id="pricing-faq" labelledBy="pfaq-h">
      <div className="ed-wrap">
        <ChapterHead label="Questions" />
        <div className="fq">
          <Heading id="pfaq-h" className="ed-h--xl">
            Pricing questions.
          </Heading>
          <Accordion type="single" collapsible className="fq__list" data-rv="stagger">
            {PRICING_FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`p${i}`}>
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

function SpendReviewForm() {
  const f = FORM_PAGES.review
  return (
    <Chapter id="request" tone="plum" labelledBy="request-h">
      <div className="ed-wrap">
        <ChapterHead label="Request your review" />
        <div className="fp">
          <div className="fp__copy">
            <Heading id="request-h" className="ed-h--xl">
              Send one booking report.
            </Heading>
            <p className="ed-lead">Optional. You can sign up without one.</p>
          </div>
          <div className="fp__form" data-rv>
            <LeadForm
              action="/spend-review"
              done={<FormDoneMessage action="/spend-review" />}
              className="ed-form"
            >
              <TextField
                id="rq-name"
                name="name"
                label={f.fields[0]}
                type="text"
                autoComplete="name"
                required
                fieldClassName="max-w-none"
              />
              <TextField
                id="rq-email"
                name="email"
                label={f.fields[1]}
                type="email"
                autoComplete="email"
                required
                fieldClassName="max-w-none"
              />
              <TextField
                id="rq-co"
                name="company"
                label={f.fields[2]}
                type="text"
                autoComplete="organization"
                required
                fieldClassName="max-w-none"
              />
              <TextField
                id="rq-size"
                name="size"
                label={f.fields[3]}
                type="number"
                inputMode="numeric"
                min={1}
                required
                hint="Number of employees"
                fieldClassName="max-w-none"
              />
              <TextField
                id="rq-tool"
                name="tool"
                label={f.fields[4]}
                type="text"
                fieldClassName="max-w-none"
              />
              <Field className="max-w-none">
                <Label htmlFor="rq-file">{f.fields[5]}</Label>
                <Input
                  id="rq-file"
                  name="file"
                  type="file"
                  aria-describedby="rq-file-h"
                  className="ed-file"
                />
                <span
                  id="rq-file-h"
                  className="mr-field__hint text-[length:var(--mr-fs-meta)] text-content-2"
                >
                  A booking report or expense export. Please hold your file until we email you.
                </span>
              </Field>
              <div>
                <Button type="submit" size="lg">
                  {f.button}
                </Button>
              </div>
            </LeadForm>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

function SecurityPackForm() {
  return (
    <Chapter id="pack" tone="plum" labelledBy="pack-h">
      <div className="ed-wrap">
        <ChapterHead label="The security pack" />
        <div className="fp">
          <div className="fp__copy">
            <Heading id="pack-h" className="ed-h--xl">
              Request the security pack.
            </Heading>
            <p className="ed-lead">We send the pack to your work email.</p>
          </div>
          <div className="fp__form" data-rv>
            <LeadForm
              action="/security/pack"
              done={<FormDoneMessage action="/security/pack" />}
              className="ed-form"
            >
              <TextField
                id="pk-email"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
                fieldClassName="max-w-none"
              />
              <TextField
                id="pk-co"
                name="company"
                label="Company name"
                type="text"
                autoComplete="organization"
                required
                fieldClassName="max-w-none"
              />
              <TextField
                id="pk-size"
                name="size"
                label="Company size"
                type="number"
                inputMode="numeric"
                min={1}
                required
                hint="Add the number of employees."
                fieldClassName="max-w-none"
              />
              <TextField
                id="pk-role"
                name="role"
                label="Your role"
                type="text"
                autoComplete="organization-title"
                required
                fieldClassName="max-w-none"
              />
              <div>
                <Button type="submit" size="lg">
                  Send me the pack
                </Button>
              </div>
              <p className="mr-small m-0">
                Built by Tabhi, the company behind the Mondee travel marketplace.
              </p>
            </LeadForm>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

function TemplateForm() {
  return (
    <Chapter id="download" tone="plum" labelledBy="dl-h">
      <div className="ed-wrap">
        <ChapterHead label="Download" />
        <div className="fp">
          <div className="fp__copy">
            <Heading id="dl-h" className="ed-h--xl">
              Download the template.
            </Heading>
            <p className="ed-lead">
              The editable Word file, the PDF and the one-page rollout checklist.
            </p>
          </div>
          <div className="fp__form" data-rv>
            <LeadForm
              action="/resources/business-travel-policy-template"
              done={<TemplateDone />}
              className="ed-form"
            >
              <TextField
                id="tp-email"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
                hint="We send a copy of the files here too."
                fieldClassName="max-w-none"
              />
              <TextField
                id="tp-co"
                name="company"
                label="Company name"
                type="text"
                autoComplete="organization"
                required
                fieldClassName="max-w-none"
              />
              <TextField
                id="tp-size"
                name="size"
                label="Company size"
                type="number"
                inputMode="numeric"
                min={1}
                required
                hint="Add the number of employees."
                fieldClassName="max-w-none"
              />
              <div>
                <Button type="submit" size="lg">
                  Get the template
                </Button>
              </div>
              <p className="mr-small m-0">
                Built by Tabhi, the company behind the Mondee travel marketplace.
              </p>
            </LeadForm>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

const EXTRA: Record<string, React.ReactNode> = {
  '/pricing': <PricingFaq />,
  '/spend-review': <SpendReviewForm />,
  '/security': <SecurityPackForm />,
  '/resources/business-travel-policy-template': <TemplateForm />,
}

function make(path: string): React.ComponentType {
  const p = page(path)
  const C = () => <InnerPageView page={p} extra={EXTRA[path]} />
  C.displayName = `Page(${path})`
  return C
}

/** One component per page in PAGES. Routes pick theirs by path. */
export const INNER: Record<string, React.ComponentType> = Object.fromEntries(
  PAGES.map((p) => [p.path, make(p.path)]),
)

/** A long-form guide at /resources/<slug>, built from the GUIDES data. */
export function guideComponent(slug: string): React.ComponentType {
  const g = GUIDES.find((x) => x.slug === slug)
  if (!g) throw new Error(`No guide for ${slug}`)
  const page: InnerPage = {
    path: `/resources/${g.slug}`,
    title: g.title,
    eyebrow: g.eyebrow,
    h1: g.title,
    sub: g.sub,
    art: 'guides',
    sections: [],
    buttons: [{ label: 'All guides', to: '/resources', kind: 'link' }],
  }
  const C = () => (
    <>
      <PageSeo title={g.title} description={g.sub} />
      <main id="main" className="ed-main ed-inner">
        <PageHero page={page} />
        <ExtraBlocks blocks={g.blocks} idPrefix="g" />
        <PageEnd page={page} />
      </main>
    </>
  )
  C.displayName = `Guide(${slug})`
  return C
}
