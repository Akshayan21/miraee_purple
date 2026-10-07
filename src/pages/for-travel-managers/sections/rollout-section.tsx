import { Badge } from '@/components/ui/badge'

export function RolloutSection() {
  return (
    <section className="mr-paper mr-section" aria-labelledby="roll-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="roll-h">
            Onboarding is free, including your policy and your people.
          </h2>
          <p className="mr-body">
            We set up your company, your travel policy and your people with you, with training for
            admins and finance.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="mock mock--wide"
            role="img"
            aria-label="Onboarding checklist with six completed steps."
            style={{ marginLeft: 'auto' }}
          >
            <div aria-hidden="true">
              <div className="mock__head">
                <p className="mock__title">Onboarding</p>
                <Badge variant="success" tick>
                  6 of 6 done
                </Badge>
              </div>
              <ul className="checklist">
                <li>
                  <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                  Company
                </li>
                <li>
                  <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                  Travel policy
                </li>
                <li>
                  <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                  Employees
                </li>
                <li>
                  <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                  Payment settings
                </li>
                <li>
                  <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                  Admin training
                </li>
                <li>
                  <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                  Finance training
                </li>
              </ul>
            </div>
          </div>
          <p className="mr-caption fig-cap" style={{ textAlign: 'right' }}>
            Product view with illustrative data.
          </p>
        </figure>
      </div>
    </section>
  )
}
