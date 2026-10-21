import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { Button } from '@/components/ui/button'
import {
  Band,
  CardGrid,
  DataTable,
  EditorialList,
  FaqBand,
  PageHero,
  SectionHead,
  SmallPrint,
  StackPanels,
} from '@/components/page/kit'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { CompareClosing, ProofPanel } from '../shared/parts'
import cmp from '../shared/compare.module.css'
import { COMPARISONS, CRITERIA, INCLUSIONS, QUESTION_GROUPS, VENDORS } from './data'
import { faq } from './faq'
import { meta } from './meta'
import { CriteriaCard, QuestionList } from './views'

/** Route: /compare. A structured buyer's guide: criteria, questions by topic, vendor costs, side-by-side links. */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          title="Compare corporate travel management software"
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Compare' }]}
          lead="For finance and travel leads at companies of 300 to 1,500 people. What to compare, what to ask every vendor (us included), and dated facts on the tools buyers shortlist most."
          actions={
            <>
              <Button asChild>
                <DialogLink to="/sign-up" dialog="signup">
                  Sign up free
                </DialogLink>
              </Button>
              <Button asChild variant="tertiary">
                <a href="#tab-questions">See the twelve questions</a>
              </Button>
            </>
          }
          note={
            <>
              Vendor facts checked <time dateTime="2026-09-30">September 30, 2026</time>
            </>
          }
          visual={<CriteriaCard />}
        />

        <Band tone="lilac" round id="tab-compare" aria-labelledby="compare-tabs-h">
          <SectionHead
            id="compare-tabs-h"
            title="What should a company of 300 to 1,500 people compare?"
            lead="Four things decide most evaluations. Test each one on your own trips."
          />
          <CardGrid
            columns={2}
            items={CRITERIA.map((c) => ({
              title: c.title,
              body: c.body,
              extra: c.stat ? <p className={cmp.statLine}>{c.stat.text}</p> : undefined,
            }))}
          />
        </Band>

        <Band
          tone="night"
          glow
          id="tab-questions"
          aria-labelledby="twelve-questions-to-ask-every-vendor-including-us"
        >
          <SectionHead
            id="twelve-questions-to-ask-every-vendor-including-us"
            tone="night"
            title="Twelve questions to ask every vendor (including us)"
          />
          <StackPanels
            numbered={false}
            items={QUESTION_GROUPS.map((g) => ({
              title: g.label,
              view: <QuestionList group={g} />,
            }))}
          />
        </Band>

        <Band tone="lilac" id="tab-inclusions" aria-labelledby="inclusions-h">
          <SectionHead id="inclusions-h" title="Miraee inclusions" />
          <EditorialList items={INCLUSIONS.map((r) => ({ title: r.label, body: r.text }))} />
        </Band>

        <Band tone="plum" id="tab-cost" aria-labelledby="cost-to-start-as-each-vendor-states-it">
          <SectionHead
            id="cost-to-start-as-each-vendor-states-it"
            tone="plum"
            title="Cost to start, as each vendor states it"
            lead="From each vendor's pricing page. Checked September 30, 2026, re-checked every 30 days."
          />
          <DataTable dark>
            <table>
              <caption className="sr-only">Cost to start, as each vendor states it</caption>
              <thead>
                <tr>
                  <th scope="col">Vendor</th>
                  <th scope="col">Offer</th>
                  <th scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                {VENDORS.map((v) => (
                  <tr key={v.name} className={v.isUs ? cmp.us : undefined}>
                    <th scope="row">{v.name}</th>
                    <td>{v.offer}</td>
                    <td>{v.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </Band>

        <Band tone="lilac" id="tab-side-by-side" aria-labelledby="side-by-side-comparisons">
          <SectionHead
            id="side-by-side-comparisons"
            title="Side-by-side comparisons"
            lead="All checked September 30, 2026."
          />
          <CardGrid
            columns={4}
            items={COMPARISONS.map((c) => ({
              title: (
                <Link to={c.to} className={cmp.cardTitleLink}>
                  {c.title}
                </Link>
              ),
              body: c.description,
              extra: (
                <span className={cmp.cardArrow} aria-hidden="true">
                  →
                </span>
              ),
            }))}
          />
        </Band>

        <FaqBand id="faq" heading="Questions" items={faq} tone="night" />

        <Band tone="lilac" compact aria-labelledby="want-proof-before-you-choose">
          <ProofPanel
            showFree
            id="want-proof-before-you-choose"
            title="Want proof before you choose?"
          >
            <p>
              Send one booking report from your agency or expense system. We review last year's
              travel trip by trip: out-of-program bookings, out-of-policy spend, the cost of booking
              late, and unused tickets. Any savings come as a dollar range, with the method and data
              period shown. It's optional.
            </p>
          </ProofPanel>
        </Band>

        <SmallPrint>
          Navan, SAP Concur, Perk, TravelPerk, Ramp, ITILITE, and Engine are trademarks of their
          respective owners. Competitor information is sourced from publicly available vendor
          websites and was last reviewed on September 30, 2026. This information is reviewed and
          updated every 30 days. Miraee information reflects the current product offering.
          <br />
          <br />
          If you notice an outdated or inaccurate detail, please let us know via{' '}
          <Link to="/talk-to-sales">Talk to Sales</Link>, and we’ll review and update it.
        </SmallPrint>

        <CompareClosing title="Start free, and check our work on your own data." />
      </main>
    </>
  )
}
Component.displayName = 'CompareIndexPage'
