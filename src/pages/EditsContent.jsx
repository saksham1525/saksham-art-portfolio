import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { editProjects } from '../data/projects'
import { editEntries } from '../data/edits'

function EditsContent() {
  const { slug } = useParams()
  const entry = editEntries[slug]
  
  const getImage = () => {
    if (!entry) return null
    return entry.images ? entry.images[Math.floor(Math.random() * entry.images.length)] : entry.image
  }

  return (
    <PageLayout sectionId="edits" navItems={editProjects} currentPath={`/edits/${slug}`}>
      {entry && (
        <div className="poetry-content">
          {entry.content.length > 0 && (
            <article className="poetry-entry">
              <div className="body" style={{ textAlign: 'right' }}>
                {entry.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          )}
          {getImage() && (
            <div className="edit-image" style={{ marginTop: '120px', marginBottom: '40px', marginLeft: '-200px', textAlign: 'left' }}>
              <img src={getImage()} alt={slug} style={{ maxWidth: '80%', height: 'auto', display: 'block' }} />
            </div>
          )}
        </div>
      )}
    </PageLayout>
  )
}

export default EditsContent

