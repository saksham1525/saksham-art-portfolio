import PageLayout from '../components/PageLayout'
import ContentEntry from '../components/ContentEntry'
import { poetryProjects } from '../data/projects'
import { poetryEntries } from '../data/poetry'

function Poetry() {
  return (
    <PageLayout sectionId="poetry" navItems={poetryProjects} currentPath="/poetry">
      {poetryEntries.map((entry, index) => (
        <ContentEntry key={index} title={entry.title} content={entry.content} />
      ))}
    </PageLayout>
  )
}

export default Poetry
