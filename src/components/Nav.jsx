import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onPortfolio = pathname === '/portfolio'
  const onLetsTalk = pathname === '/lets-talk'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${onPortfolio ? 'nav--on-portfolio' : ''} ${onLetsTalk ? 'nav--on-lets-talk' : ''}`}>
      <Link to="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
        <img src="/assets/logos/primary-logo.png" alt="The Site Strategist" />
      </Link>

      <button
        className={`nav__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(m => !m)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <NavLink
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                isActive ? (l.to === '/' ? 'nav-active nav-active--home' : 'nav-active') : ''
              }
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link to="/lets-talk" className="nav__cta" onClick={() => setMenuOpen(false)}>
            Let's Talk
          </Link>
        </li>
      </ul>
    </nav>
  )
}
