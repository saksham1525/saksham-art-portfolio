import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import ContentEntry from '../components/ContentEntry'
import { filmProjects } from '../data/projects'
import { filmEntries } from '../data/films'

function FilmContent() {
  const { slug } = useParams()
  const entry = filmEntries[slug]

  return (
    <PageLayout sectionId="film" navItems={filmProjects} currentPath={`/film/${slug}`}>
      {entry && (
        <ContentEntry 
          content={entry.content} 
          showTitle={false} 
          image={entry.image} 
          imageAlt={slug} 
        />
      )}
    </PageLayout>
  )
}

export default FilmContent
