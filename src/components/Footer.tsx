import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { brand, footerColumns, legalLinks } from '../data'
import { LogoMark } from './Icons'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h2>Accelerate your ACX strategy</h2>
          <p>Learn more about how {brand.display} is improving customer experience at leading enterprises.</p>
          <form className="newsletter-form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="biz-email">
              Business Email
            </label>
            <input
              id="biz-email"
              type="email"
              required
              placeholder="Business Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Keep me updated
            </button>
          </form>
          {done ? <p className="form-note">Thanks — you’re on the list.</p> : null}
        </div>

        <div className="footer-grid">
          {footerColumns.map((col) => (
            <div key={col.title} className="footer-col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <LogoMark size={22} />
          <span>adatecho</span>
        </div>
        <p>
          {brand.display} is an AI-native company on a mission to make customer experience extraordinary for everyone.
        </p>
        <div className="footer-legal">
          {legalLinks.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube ↗
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
