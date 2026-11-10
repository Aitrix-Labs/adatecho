import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="section cta-band">
      <div className="section-shell">
        <h2 className="display">Accelerate your ACX strategy</h2>
        <Link to="/contact" className="btn btn-primary">
          Speak to an expert
        </Link>
      </div>
    </section>
  )
}
