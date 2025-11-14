import EmptySection from '../components/EmptySection'
import { reviewProjects } from '../data/projects'

function Reviews() {
  return <EmptySection sectionId="reviews" navItems={reviewProjects} />
}

export default Reviews
