import { Check } from 'lucide-react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { Button } from '@/components/ui/button'
import { CRITERIA } from '../data'

export function HeroSection() {
  return (
    <section className="mr-paper" aria-labelledby="hero-h">
      <Breadcrumbs current="Compare" />
      <div className="mr-container grid gap-12 pt-10 pb-20 lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="lg:col-span-7 lg:pr-10">
          <h1 className="mr-h1" id="hero-h">
            Compare corporate travel management software
          </h1>
          <div className="mt-6">
            <p className="mr-lead">
              Miraee is business travel and expense software. This guide is for finance and travel
              leads at companies of 300 to 1,500 people who are choosing a corporate travel
              management tool: what to compare, the questions to ask every vendor, including us, and
              dated facts on the tools buyers shortlist most.
            </p>
          </div>
          <div className="mr-btn-row mt-8">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>
            <Button asChild variant="tertiary">
              <a href="#twelve-questions-to-ask-every-vendor-including-us">
                See the twelve questions
              </a>
            </Button>
          </div>
          <p className="mt-6 mb-0 text-[length:var(--mr-fs-small)] text-content-2">
            Last updated <time dateTime="2026-09-30">September 30, 2026</time> · Vendor facts
            checked September 30, 2026
          </p>
        </div>

        <aside aria-label="What to compare" className="lg:col-span-5">
          <div className="mr-plum rounded-xl p-7 shadow-2 md:p-8">
            <p className="m-0 text-[length:var(--mr-fs-card-title)] font-semibold">
              Four things decide most evaluations
            </p>
            <ul className="m-0 mt-5 list-none p-0">
              {CRITERIA.map((criterion) => (
                <li key={criterion.id} className="border-t border-rule first:border-t-0">
                  <a
                    href={`#criterion-${criterion.id}`}
                    className="group flex items-center gap-4 py-4 no-underline"
                  >
                    <span className="grid size-11 flex-none place-content-center rounded-md bg-twilight text-orange-light">
                      <criterion.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="grid gap-0.5">
                      <span className="text-[17px] font-semibold text-white group-hover:text-orange-light">
                        {criterion.title}
                      </span>
                      <span className="text-[15px] text-mist">{criterion.summary}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="m-0 mt-5 flex items-center gap-2 border-t border-rule pt-5 text-[length:var(--mr-fs-small)] text-mist">
              <Check className="size-4 text-orange-light" aria-hidden="true" />
              Every vendor fact on this page is dated.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
