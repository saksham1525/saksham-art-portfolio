import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { filmProjects } from '../data/projects'
import { filmEntries } from '../data/films'

function FilmContent() {
  const { slug } = useParams()
  const entry = filmEntries[slug]
  const project = filmProjects.find(p => p.path === `/film/${slug}`)

  return (
    <PageLayout sectionId="film" navItems={filmProjects} currentPath={`/film/${slug}`}>
      {entry && entry.content.length > 0 && (
        <div className="poetry-content">
          <article className="poetry-entry">
            <div className="body">
              {entry.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
          {entry.image && (
            <div className="film-image" style={{ marginTop: '150px', marginBottom: '40px', marginLeft: '-200px', textAlign: 'left' }}>
              <a href={project?.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <img src={entry.image} alt={slug} style={{ maxWidth: '70%', height: 'auto', display: 'block', cursor: 'pointer' }} />
              </a>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  )
}

export default FilmContent

