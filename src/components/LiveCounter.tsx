import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { liveCounter } from '../data'

export default function LiveCounter() {
  const [count, setCount] = useState(liveCounter.base)

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((n) => n + Math.floor(Math.random() * 3) + 1)
    }, 1800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="section live-section">
      <div className="section-shell">
        <div className="live-head">
          <h2 className="display">
            Real results.
            <br />
            For real businesses
          </h2>
          <Link to="/platform" className="text-link">
            Learn more
          </Link>
        </div>
        <div className="live-panel">
          <p className="live-eyebrow">{liveCounter.eyebrow}</p>
          <p className="live-count">{count.toLocaleString('en-US')}</p>
          <p className="live-label">{liveCounter.label}</p>
        </div>
      </div>
    </section>
  )
}
