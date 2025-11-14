import PageLayout from '../components/PageLayout'
import { filmProjects } from '../data/projects'

function Film() {
  return <PageLayout sectionId="film" navItems={filmProjects} />
}

export default Film
