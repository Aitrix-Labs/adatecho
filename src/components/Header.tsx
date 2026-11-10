import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav } from '../data'
import { ChevronDown, CloseIcon, LogoMark, MenuIcon } from './Icons'

export default function Header() {
  const { open, setOpen, active, setActive } = useNavState()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="nav-pill">
        <Link to="/" className="brand" aria-label="Adatecho home" onClick={() => setOpen(false)}>
          <LogoMark />
          <span>adatecho</span>
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          {nav.map((group) => (
            <div
              key={group.label}
              className={`nav-item${active === group.label ? ' is-open' : ''}`}
              onMouseEnter={() => setActive(group.label)}
              onMouseLeave={() => setActive(null)}
            >
              <button type="button" className="nav-trigger" aria-expanded={active === group.label}>
                {group.label}
                <ChevronDown />
              </button>
              <div className="nav-panel" hidden={active !== group.label}>
                {group.items.map((item) => (
                  <Link key={item.title} to={item.to} className="nav-card" onClick={() => setActive(null)}>
                    <strong>{item.title}</strong>
                    {item.body ? <span>{item.body}</span> : null}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <NavLink to="/company" className="nav-link">
            Why Adatecho
          </NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-ghost">
            Sign in
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Speak to an expert
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Toggle menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer${open ? ' is-open' : ''}`} hidden={!open}>
        <div className="mobile-drawer-inner">
          {nav.map((group) => (
            <div key={group.label} className="mobile-group">
              <p>{group.label}</p>
              {group.items.map((item) => (
                <Link key={item.title} to={item.to} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
          <Link to="/company" onClick={() => setOpen(false)}>
            Why Adatecho
          </Link>
          <div className="mobile-cta">
            <Link to="/contact" className="btn btn-ghost" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Speak to an expert
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function useNavState() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  return { open, setOpen, active, setActive }
}
