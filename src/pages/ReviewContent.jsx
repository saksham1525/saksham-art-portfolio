import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import ContentEntry from '../components/ContentEntry'
import { reviewProjects } from '../data/projects'
import { reviewEntries } from '../data/reviews'

function ReviewContent() {
  const { slug } = useParams()
  const entry = reviewEntries[slug]

  return (
    <PageLayout sectionId="reviews" navItems={reviewProjects} currentPath={`/reviews/${slug}`}>
      {entry && <ContentEntry content={entry.content} showTitle={false} />}
    </PageLayout>
  )
}

export default ReviewContent
