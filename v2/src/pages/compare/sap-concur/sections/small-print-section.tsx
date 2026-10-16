import { Link } from 'react-router-dom'
import { SmallPrint } from '@/components/sections/small-print'

export function SmallPrintSection() {
  return (
    <SmallPrint>
      SAP Concur are trademarks of their owners. Competitor facts on this page come from each
      vendor's own website, checked September 30, 2026, and are re-checked every 30 days. Miraee
      facts describe the live product. If you see a fact that has changed, tell us at{' '}
      <Link to="/talk-to-sales">Talk to sales</Link> and we will update the page.
    </SmallPrint>
  )
}
