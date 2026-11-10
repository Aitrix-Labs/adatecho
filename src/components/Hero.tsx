import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../data'
import { LogoMark } from './Icons'

export default function Hero() {
  const [skip, setSkip] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setSkip(true), 4200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section className={`hero${skip ? ' is-ready' : ''}`}>
      <div className="hero-orb" aria-hidden />
      <div className="hero-inner">
        <div className="hero-partners">
          <span className="partner">
            <LogoMark size={20} />
            adatecho
          </span>
          <span className="plus">+</span>
          <span className="partner partner-dial">
            <span className="dial-mark" aria-hidden>
              ✦
            </span>
            dialpad
          </span>
        </div>
        <h1>{hero.title}</h1>
        <p className="hero-body">{hero.body}</p>
        <Link to={hero.ctaTo} className="btn btn-primary hero-cta">
          {hero.cta}
        </Link>
      </div>
      {!skip ? (
        <button type="button" className="skip-intro" onClick={() => setSkip(true)}>
          Skip intro
        </button>
      ) : null}
    </section>
  )
}
