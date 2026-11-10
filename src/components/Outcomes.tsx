import { Link } from 'react-router-dom'
import { outcomes } from '../data'

export default function Outcomes() {
  return (
    <section className="section outcomes-section">
      <div className="section-shell">
        <h2 className="display">{outcomes.title}</h2>
        <div className="outcomes-grid">
          {outcomes.items.map((item) => (
            <Link key={item.label} to={item.to} className="outcome-card">
              <span className="case-chip">Case study</span>
              <p className="outcome-value">{item.value}</p>
              <p className="outcome-label">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
