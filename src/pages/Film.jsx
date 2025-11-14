import EmptySection from '../components/EmptySection'
import { filmProjects } from '../data/projects'

function Film() {
  return <EmptySection sectionId="film" navItems={filmProjects} />
}

export default Film
