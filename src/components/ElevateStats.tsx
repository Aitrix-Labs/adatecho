import { elevate } from '../data'

export default function ElevateStats() {
  return (
    <section className="section elevate-section">
      <div className="section-shell">
        <h2 className="display">{elevate.title}</h2>
        <div className="stat-grid">
          {elevate.stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
