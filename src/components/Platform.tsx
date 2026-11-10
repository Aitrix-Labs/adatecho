import { useState } from 'react'
import { platform } from '../data'

export default function Platform() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section platform-section">
      <div className="section-shell narrow">
        <h2 className="display">{platform.title}</h2>
        <div className="accordion">
          {platform.items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.title} className={`acc-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(index)}
                >
                  {item.title}
                </button>
                <div className="acc-body" hidden={!isOpen}>
                  <p>{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
