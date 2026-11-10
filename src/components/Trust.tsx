import { Link } from 'react-router-dom'
import { trust } from '../data'

export default function Trust() {
  return (
    <section className="section trust-section">
      <div className="section-shell">
        <div className="trust-head">
          <h2 className="display">{trust.title}</h2>
          <p>{trust.subtitle}</p>
          <Link to="/trust" className="text-link">
            Learn more about trust and safety
          </Link>
        </div>
        <div className="trust-grid">
          {trust.items.map((item) => (
            <article key={item.title} className="trust-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="trust-cta">
          <Link to="/contact" className="btn btn-primary">
            Speak to an expert
          </Link>
        </div>
      </div>
    </section>
  )
}
