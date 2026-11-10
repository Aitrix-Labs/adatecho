import { useState } from 'react'
import { Link } from 'react-router-dom'
import { industries } from '../data'
import { ArrowRight } from './Icons'

export default function Industries() {
  const [active, setActive] = useState(industries.tabs[0].id)
  const tab = industries.tabs.find((t) => t.id === active) ?? industries.tabs[0]

  return (
    <section className="section industries-section">
      <div className="section-shell">
        <h2 className="display">{industries.title}</h2>
        <div className="industry-tabs" role="tablist" aria-label="Industries">
          {industries.tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === item.id}
              className={active === item.id ? 'is-active' : undefined}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="industry-panel" role="tabpanel">
          <div className="industry-metrics">
            {tab.metrics.map((m) => (
              <article key={m.label}>
                <p className="outcome-value">{m.value}</p>
                <p className="outcome-label">{m.label}</p>
              </article>
            ))}
          </div>
          <Link to={tab.href} className="text-link">
            View case study <ArrowRight />
          </Link>
        </div>
        <div className="industry-links">
          {industries.tabs.map((item) => (
            <Link key={item.id} to={item.href}>
              AI CX for {item.label.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
