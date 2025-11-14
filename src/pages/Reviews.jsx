import PageLayout from '../components/PageLayout'
import { reviewProjects } from '../data/projects'

function Reviews() {
  return <PageLayout sectionId="reviews" navItems={reviewProjects} />
}

export default Reviews
