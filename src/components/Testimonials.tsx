import { Link } from 'react-router-dom'
import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-shell">
        <h2 className="display">{testimonials.title}</h2>
        <div className="testimonial-grid">
          {testimonials.items.map((item) => (
            <article key={item.title} className="testimonial-card">
              <h3>{item.title}</h3>
              <p className="outcome-value">{item.metric}</p>
              <p className="stat-label">{item.metricLabel}</p>
              <blockquote>{item.quote}</blockquote>
              <footer>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </footer>
              <Link to="/customers" className="text-link">
                View case study
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
