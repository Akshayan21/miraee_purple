import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Section, Container } from '@/components/layout/content-layout'
import { Faq } from '@/components/sections/faq'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { CRITERIA, COMPARISONS, INCLUSIONS, QUESTION_GROUPS, VENDORS } from '../data'
import { faq } from '../faq'

const TABS = [
  { id: 'compare', label: 'What to compare' },
  { id: 'questions', label: 'Twelve questions' },
  { id: 'inclusions', label: 'Miraee inclusions' },
  { id: 'cost', label: 'Cost to start' },
  { id: 'side-by-side', label: 'Side by side' },
  { id: 'faq', label: 'Questions' },
] as const

type TabId = (typeof TABS)[number]['id']

const fromHash = (): TabId | null => {
  const id = window.location.hash.replace('#tab-', '')
  return TABS.some((tab) => tab.id === id) ? (id as TabId) : null
}

/** One tabbed guide instead of six stacked sections. A `#tab-<id>` link opens that tab. */
export function CompareTabsSection() {
  const [tab, setTab] = useState<TabId>('compare')
  const [group, setGroup] = useState(QUESTION_GROUPS[0].id)

  useEffect(() => {
    const sync = () => {
      const next = fromHash()
      if (!next) return
      setTab(next)
      document
        .getElementById('compare-tabs')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return (
    <Section className="mr-section bg-white" aria-labelledby="compare-tabs-h" id="compare-tabs">
      <Container className="mr-container">
        <h2 className="mr-h2 scroll-mt-32" id="compare-tabs-h">
          What should a company of 300 to 1,500 people compare?
        </h2>
        <p className="m-0 mt-4 max-w-2xl text-[length:var(--mr-fs-lead)] text-content-2">
          Four things decide most evaluations. Test each one on your own trips.
        </p>

        <Tabs value={tab} onValueChange={(value) => setTab(value as TabId)} className="mt-10">
          <TabsList aria-label="Compare guide sections">
            {TABS.map((item) => (
              <TabsTrigger key={item.id} value={item.id}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="compare">
            <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2">
              {CRITERIA.map((criterion) => (
                <li
                  key={criterion.id}
                  className="flex flex-col gap-4 rounded-lg border border-rule bg-surface p-7 md:p-8"
                >
                  <span className="grid size-12 place-content-center rounded-md bg-plum text-orange-light">
                    <criterion.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mr-h3 m-0">{criterion.title}</h3>
                  <p className="m-0 text-content-2">{criterion.body}</p>
                  {criterion.stat ? (
                    <p className="m-0 mt-auto rounded-md bg-surface-sunken px-4 py-3 text-[15px] font-semibold text-content">
                      {criterion.stat.text}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="questions">
            <h3 className="mr-h3 m-0" id="twelve-questions-to-ask-every-vendor-including-us">
              Twelve questions to ask every vendor (including us)
            </h3>
            <Tabs value={group} onValueChange={setGroup} className="mt-6">
              <TabsList aria-label="Question topics">
                {QUESTION_GROUPS.map((item) => (
                  <TabsTrigger key={item.id} value={item.id}>
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {QUESTION_GROUPS.map((item) => (
                <TabsContent key={item.id} value={item.id}>
                  <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
                    {item.questions.map((q) => (
                      <li
                        key={q.n}
                        className="flex flex-col rounded-lg border border-rule bg-white p-6 md:p-7"
                      >
                        <span className="text-[length:var(--mr-fs-small)] font-semibold text-content-2 tabular-nums">
                          Question {q.n}
                        </span>
                        <p className="m-0 mt-3 text-[19px] leading-snug font-semibold">
                          {q.question}
                        </p>
                        <p className="m-0 mt-auto border-t border-rule pt-4 text-[15px] text-content-2">
                          <strong className="font-semibold text-content">Why it matters: </strong>
                          {q.why}
                        </p>
                      </li>
                    ))}
                  </ol>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          <TabsContent value="inclusions">
            <h3 className="mr-h3 m-0">Miraee inclusions</h3>
            <dl className="m-0 mt-6 overflow-hidden rounded-lg border border-rule">
              {INCLUSIONS.map((row, i) => (
                <div
                  key={row.label}
                  className={cn(
                    'grid gap-1 px-6 py-4 md:grid-cols-[220px_1fr] md:gap-6 md:px-8',
                    i % 2 === 0 ? 'bg-surface' : 'bg-white',
                    i > 0 && 'border-t border-rule',
                  )}
                >
                  <dt className="font-semibold text-content">{row.label}</dt>
                  <dd className="m-0 text-content-2">{row.text}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>

          <TabsContent value="cost">
            <h3 className="mr-h3 m-0" id="cost-to-start-as-each-vendor-states-it">
              Cost to start, as each vendor states it
            </h3>
            <p className="m-0 mt-3 max-w-2xl text-content-2">
              From each vendor's pricing page. Checked September 30, 2026, re-checked every 30 days.
            </p>
            <ul className="m-0 mt-8 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {VENDORS.map((vendor) => (
                <li
                  key={vendor.name}
                  className={cn(
                    'flex flex-col gap-3 rounded-lg p-6 md:p-7',
                    vendor.isUs ? 'mr-plum' : 'border border-rule bg-surface',
                  )}
                >
                  <h4 className="m-0 text-[length:var(--mr-fs-card-title)] font-semibold">
                    {vendor.name}
                  </h4>
                  <p className={cn('m-0', vendor.isUs ? 'text-mist' : 'text-content-2')}>
                    {vendor.offer}
                  </p>
                  <p
                    className={cn(
                      'm-0 mt-auto border-t border-rule pt-4 text-[14px]',
                      vendor.isUs ? 'text-mist' : 'text-content-2',
                    )}
                  >
                    {vendor.source}
                  </p>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="side-by-side">
            <h3 className="mr-h3 m-0" id="side-by-side-comparisons">
              Side-by-side comparisons
            </h3>
            <p className="m-0 mt-3 text-content-2">All checked September 30, 2026.</p>
            <ul className="m-0 mt-8 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {COMPARISONS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex h-full flex-col gap-3 rounded-lg border border-rule bg-white p-6 text-content no-underline transition-colors duration-150 hover:border-ink md:p-7"
                  >
                    <span className="text-[length:var(--mr-fs-h3)] leading-tight font-semibold text-content">
                      {item.title}
                    </span>
                    <span className="text-[15px] text-content-2">{item.description}</span>
                    <span className="mt-auto flex justify-end border-t border-rule pt-4">
                      <ArrowRight
                        className="size-5 text-content transition-transform duration-150 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="faq">
            <Faq heading="Questions" headingId="faq" items={faq} sectionClassName="pt-2" />
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  )
}
