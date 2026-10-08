import { Section, Container } from '@/components/layout/content-layout'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { COMPARISONS } from '../data'

export function ComparisonsSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="side-by-side-comparisons">
      <Container className="mr-container">
        <h2 className="mr-h2 scroll-mt-32" id="side-by-side-comparisons">
          Side-by-side comparisons
        </h2>
        <ul className="m-0 mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
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
                <span className="mt-auto flex items-center justify-between border-t border-rule pt-4 text-[14px] text-content-2">
                  Checked September 30, 2026
                  <ArrowRight
                    className="size-5 text-content transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
