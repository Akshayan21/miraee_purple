const LINKS = [
  { href: '#what-should-a-company-of-300-to-1-500-people-compare', label: 'What to compare' },
  { href: '#twelve-questions-to-ask-every-vendor-including-us', label: 'Twelve questions' },
  { href: '#cost-to-start-as-each-vendor-states-it', label: 'Cost to start' },
  { href: '#side-by-side-comparisons', label: 'Side-by-side' },
  { href: '#faq', label: 'Questions' },
]

/** Sticky in-page navigation: this guide is long, so the reader can jump between its parts. */
export function PageNav() {
  return (
    <nav aria-label="On this page" className="sticky top-[76px] z-30 border-y border-rule bg-white">
      <div className="mr-container flex gap-1 overflow-x-auto">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group inline-flex h-12 items-center px-4 text-[15px] font-medium whitespace-nowrap no-underline"
          >
            <span className="text-content group-hover:text-link group-hover:underline group-hover:underline-offset-[6px]">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
