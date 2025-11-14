import EmptySection from '../components/EmptySection'
import { playsProjects } from '../data/projects'

function Plays() {
  return <EmptySection sectionId="plays" navItems={playsProjects} />
}

export default Plays
