import { CRITERIA } from '../data'

export function CriteriaSection() {
  return (
    <section
      className="bg-white py-20 md:py-24"
      aria-labelledby="what-should-a-company-of-300-to-1-500-people-compare"
    >
      <div className="mr-container">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2
            className="mr-h2 scroll-mt-32 lg:col-span-6"
            id="what-should-a-company-of-300-to-1-500-people-compare"
          >
            What should a company of 300 to 1,500 people compare?
          </h2>
          <p className="m-0 text-[length:var(--mr-fs-lead)] text-content-2 lg:col-span-6">
            Four things decide most evaluations: what it costs to start at your size, whether your
            travel policy runs on every booking, what finance sees for each trip, and what happens
            when a flight is delayed or canceled. Compare those on your own trips, with every vendor
            fact dated.
          </p>
        </div>

        <h3 className="mr-h3 mt-16 mb-6 scroll-mt-32" id="four-things-to-compare">
          Four things to compare
        </h3>
        <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2">
          {CRITERIA.map((criterion) => (
            <li
              key={criterion.id}
              id={`criterion-${criterion.id}`}
              className="flex scroll-mt-32 flex-col gap-4 rounded-lg border border-rule bg-surface p-7 md:p-8"
            >
              <span className="grid size-12 place-content-center rounded-md bg-plum text-orange-light">
                <criterion.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h4 className="mr-h3 m-0">{criterion.title}</h4>
              <p className="m-0 text-content-2">{criterion.body}</p>
              {criterion.stat ? (
                <p className="m-0 mt-auto rounded-md bg-surface-sunken px-4 py-3 text-[15px] font-semibold text-content">
                  {criterion.stat.text}
                  <sup>
                    <a
                      href={`#${criterion.stat.source.id}`}
                      rel="noopener"
                      aria-label={criterion.stat.source.label}
                    >
                      {criterion.stat.source.id.replace('src-', '')}
                    </a>
                  </sup>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
