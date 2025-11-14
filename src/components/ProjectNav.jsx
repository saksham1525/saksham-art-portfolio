import { Link } from 'react-router-dom'

function ProjectNav({ items, currentPath }) {
  return (
    <nav className="nav-projects">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={currentPath === item.path ? 'on' : ''}>
            <Link to={item.path} title={item.title}>
              <h1>{item.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ProjectNav

