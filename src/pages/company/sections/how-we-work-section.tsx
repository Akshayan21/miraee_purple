import { Link } from 'react-router-dom'

export function HowWeWorkSection() {
  return (
    <section className="mr-section" aria-labelledby="work-h">
      <div className="mr-container">
        <h2 className="mr-h2" id="work-h">
          We show our work.
        </h2>
        <ul className="principles" style={{ marginTop: '32px' }}>
          <li>Figures on this site carry their source.</li>
          <li>Savings are given as a range, with the method shown.</li>
          <li>The assistant suggests. Your approvers decide.</li>
        </ul>
        <ul className="link-list">
          <li>
            <Link to="/security">Security</Link>
          </li>
          <li>
            <Link to="/pricing">What's free</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
