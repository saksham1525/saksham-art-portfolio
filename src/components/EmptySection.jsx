import PageLayout from './PageLayout'

function EmptySection({ sectionId, navItems, text }) {
  return (
    <PageLayout sectionId={sectionId} navItems={navItems} currentPath={null}>
      {text && (
        <div className="poetry-content">
          <article className="poetry-entry">
            <div className="body">
              <p style={{ fontSize: '16px' }}>{text}</p>
            </div>
          </article>
        </div>
      )}
    </PageLayout>
  )
}

export default EmptySection

