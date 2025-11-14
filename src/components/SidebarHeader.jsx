import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE_TITLE } from '../constants/navigation'

function SidebarHeader() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header id="header">
      <h1 id="title">
        <Link to="/" title={SITE_TITLE}>{SITE_TITLE}</Link>
      </h1>
      <nav id="nav" className="nav">
        <ul>
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className={isActive(path) ? 'on' : ''}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SidebarHeader

