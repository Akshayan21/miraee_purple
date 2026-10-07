import { cn } from '@/lib/utils'
import { VENDORS } from '../data'

export function CostSection() {
  return (
    <section
      className="bg-white py-20 md:py-24"
      aria-labelledby="cost-to-start-as-each-vendor-states-it"
    >
      <div className="mr-container">
        <h2 className="mr-h2 scroll-mt-32" id="cost-to-start-as-each-vendor-states-it">
          Cost to start, as each vendor states it
        </h2>
        <p className="m-0 mt-4 max-w-2xl text-content-2">
          Each line comes from the vendor's own pricing page, checked September 30, 2026. We
          re-check every 30 days.
        </p>
        <ul className="m-0 mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {VENDORS.map((vendor) => (
            <li
              key={vendor.name}
              className={cn(
                'flex flex-col gap-3 rounded-lg p-6 md:p-7',
                vendor.isUs ? 'mr-plum' : 'border border-rule bg-surface',
              )}
            >
              <h3 className="m-0 text-[length:var(--mr-fs-card-title)] font-semibold">
                {vendor.name}
              </h3>
              <p className={cn('m-0', vendor.isUs ? 'text-mist' : 'text-content-2')}>
                {vendor.offer}
              </p>
              <p
                className={cn(
                  'm-0 mt-auto border-t border-rule pt-4 text-[14px]',
                  vendor.isUs ? 'text-mist' : 'text-content-2',
                )}
              >
                Source: {vendor.source}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
