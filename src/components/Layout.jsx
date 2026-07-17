import { NavLink, Outlet } from 'react-router-dom'

const routes = [
  { to: '/', label: 'Home', icon: 'bi-house' },
  { to: '/about', label: 'About', icon: 'bi-person' },
  { to: '/resume', label: 'Resume', icon: 'bi-file-earmark-text' },
  { to: '/contact', label: 'Contact', icon: 'bi-envelope' },
]

const socials = [
  { href: 'https://twitter.com', icon: 'bi-twitter-x', label: 'Twitter' },
  { href: 'https://facebook.com', icon: 'bi-facebook', label: 'Facebook' },
  { href: 'https://instagram.com', icon: 'bi-instagram', label: 'Instagram' },
  { href: 'https://linkedin.com', icon: 'bi-linkedin', label: 'LinkedIn' },
]

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="sidebar">
        <div className="sidebar__profile">
          <img
            src="/assets/img/my-profile-img.jpg"
            alt="Portrait of Sang Vannet"
            className="sidebar__avatar"
          />
          <h1 className="sidebar__name">Sang Vannet</h1>
          <p className="sidebar__role">UI/UX Designer &amp; Web Developer</p>
        </div>

        <div className="sidebar__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
              <i className={`bi ${s.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>

        <nav className="sidebar__nav" aria-label="Site sections">
          <ul>
            {routes.map((r) => (
              <li key={r.to}>
                <NavLink
                  to={r.to}
                  end={r.to === '/'}
                  className={({ isActive }) => 'sidebar__link' + (isActive ? ' sidebar__link--active' : '')}
                >
                  <i className={`bi ${r.icon}`} aria-hidden="true" />
                  <span>{r.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="sidebar__credit">
          Design adapted from <a href="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/" target="_blank" rel="noreferrer">iPortfolio</a> by BootstrapMade, distributed by ThemeWagon.
        </p>
      </header>

      <main className="page">
        <Outlet />
      </main>
    </div>
  )
}
