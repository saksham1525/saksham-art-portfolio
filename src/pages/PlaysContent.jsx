import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { playsProjects } from '../data/projects'

function PlaysContent() {
  const { slug } = useParams()
  return <PageLayout sectionId="plays" navItems={playsProjects} currentPath={`/plays/${slug}`} />
}

export default PlaysContent
