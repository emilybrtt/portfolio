import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { playNavigationTransition } from './utils/navigation'

const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Contato', path: '/contato' },
]

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const syncNavIndicator = useCallback((target?: HTMLElement | null) => {
    const nav = navRef.current
    const activeItem =
      target ??
      nav?.querySelector<HTMLElement>(
        '.nav-menu .nav-link.active-link, .nav-menu .nav-link[aria-current="page"]',
      )

    if (!nav || !activeItem || window.matchMedia('(max-width: 860px)').matches) {
      nav?.style.setProperty('--nav-indicator-opacity', '0')
      return
    }

    const navRect = nav.getBoundingClientRect()
    const itemRect = activeItem.getBoundingClientRect()

    if (itemRect.width <= 0 || itemRect.height <= 0) {
      nav.style.setProperty('--nav-indicator-opacity', '0')
      return
    }

    nav.style.setProperty('--nav-indicator-left', `${itemRect.left - navRect.left}px`)
    nav.style.setProperty('--nav-indicator-width', `${itemRect.width}px`)
    nav.style.setProperty('--nav-indicator-opacity', '1')
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })

    const frame = window.requestAnimationFrame(() => syncNavIndicator())
    const handleResize = () => syncNavIndicator()

    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
    }
  }, [location.pathname, syncNavIndicator])

  const handleRouteClick = () => {
    setMenuOpen(false)
    playNavigationTransition()
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container" ref={navRef} onPointerLeave={() => syncNavIndicator()}>
          <span className="nav-indicator" aria-hidden="true" />
          <Link
            to="/"
            className="logo"
            onClick={handleRouteClick}
          >
            <span>EB</span>
            Emily Britto
          </Link>
          <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active-link' : ''}`
                  }
                  onClick={handleRouteClick}
                  onFocus={(event) => syncNavIndicator(event.currentTarget)}
                  onPointerEnter={(event) => syncNavIndicator(event.currentTarget)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
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
      <div className="nav-transition-wash" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <main>
        <div className="page-route" key={location.pathname}>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default App
