import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function WhoIsBehindMiraeeSection() {
  return (
    <section className="mr-section hr-top" aria-labelledby="who-h">
      <div className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="who-h">
            Who is behind Miraee
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">
            Miraee is built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/company">About the company</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
