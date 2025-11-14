import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { poetryEntries } from '../data/poetry'

function PoetryContent() {
  const { slug } = useParams()
  const poem = poetryEntries[slug]

  return (
    <PageLayout sectionId="poetry">
      {poem && (
        <div className="poetry-content">
          <article className="poetry-entry">
            <div className="body" style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
              {poem.content}
            </div>
          </article>
        </div>
      )}
    </PageLayout>
  )
}

export default PoetryContent

