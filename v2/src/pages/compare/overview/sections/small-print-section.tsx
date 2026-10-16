import { Link } from 'react-router-dom'
import { SmallPrint } from '@/components/sections/small-print'

export function SmallPrintSection() {
  return (
    <SmallPrint>
      Navan, SAP Concur, Perk, TravelPerk, Ramp, ITILITE, and Engine are trademarks of their
      respective owners. Competitor information is sourced from publicly available vendor websites
      and was last reviewed on September 30, 2026. This information is reviewed and updated every 30
      days. Miraee information reflects the current product offering.
      <br />
      <br />
      If you notice an outdated or inaccurate detail, please let us know via{' '}
      <Link to="/talk-to-sales">Talk to Sales</Link>, and we’ll review and update it.
    </SmallPrint>
  )
}
