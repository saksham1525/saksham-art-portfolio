import { Link } from 'react-router-dom'

function ProjectGrid({ projects }) {
  return (
    <ul className="project-grid">
      {projects.map((project, index) => (
        <li key={index} className="project-item">
          <Link to={project.link} className="project-link">
            <div className="project-thumbnail">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-overlay">
              <div className="project-title">
                <strong>{project.title}</strong>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProjectGrid

