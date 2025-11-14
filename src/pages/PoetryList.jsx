import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { poetryList } from '../data/poetry'

function PoetryList() {
  return (
    <PageLayout sectionId="poetry">
      <div className="poetry-list-minimal">
        {poetryList.map((poem, index) => (
          <div key={index}>
            <Link to={`/poetry/${poem.slug}`}>{poem.title}</Link>
            <br />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default PoetryList

