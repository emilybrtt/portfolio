import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const anchorLinks = [
  { label: 'Sobre', hash: '#inicio' },
  { label: 'Formação', hash: '#academico' },
  { label: 'Projetos', hash: '#projetos' },
  { label: 'Contato', hash: '#contato' },
]

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const anchorLinkState = useMemo(() => {
    if (!isHome) {
      return null
    }

    return location.hash || '#inicio'
  }, [isHome, location.hash])

  const getAnchorClassName = (hash: string) => {
    const isActive = anchorLinkState === hash
    return `nav-link${isActive ? ' active-link' : ''}`
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/#inicio" className="logo" onClick={() => setMenuOpen(false)}>
            Emily Britto
          </Link>
          <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
            {anchorLinks.map(({ label, hash }) => (
              <li key={hash}>
                <Link
                  to={{ pathname: '/', hash }}
                  className={getAnchorClassName(hash)}
                  aria-current={anchorLinkState === hash ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <NavLink
                to="/mkt"
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active-link' : ''}`
                }
              >
                Marketing
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Alternar menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
