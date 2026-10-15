import { VideoPanel } from '@/components/sections/video-panel'
import { Badge } from '@/components/ui/badge'

export function ExpenseSection() {
  return (
    <VideoPanel
      video="panel-finance2"
      labelledBy="exp-h"
      aside={
        <div
          className="mr-paper"
          style={{ padding: 24, borderRadius: 16, width: 'min(100%, 420px)' }}
        >
          <div className="match" aria-hidden="true">
            <div className="match__card">
              <p className="match__label">
                <img src="/img/icons/receipt.svg" alt="" width="18" height="18" />
                Receipt
              </p>
              <p className="match__name">Hotel, 2 nights, Chicago</p>
              <p className="match__meta">Oct 6 to Oct 8 · Priya N.</p>
              <p className="match__amt">$482.20</p>
            </div>
            <span className="match__join"></span>
            <div className="match__card">
              <p className="match__label">
                <img src="/img/icons/credit-card.svg" alt="" width="18" height="18" />
                Card charge
              </p>
              <p className="match__name">Corporate card ending 4417</p>
              <p className="match__meta">Posted Oct 8 · Client visit, Chicago</p>
              <p className="match__amt">$482.20</p>
            </div>
            <Badge variant="success" tick className="match__status">
              Matched · In policy
            </Badge>
          </div>
        </div>
      }
    >
      <h2 className="mr-h2" id="exp-h">
        Receipts matched to card charges
      </h2>
      <p className="mr-body">
        Travelers upload receipts. Miraee matches each to its card charge, flags anything out of
        policy and tracks reimbursements.
      </p>
    </VideoPanel>
  )
}
