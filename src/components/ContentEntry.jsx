function ContentEntry({ title, content, showTitle = true, image, imageAlt }) {
  return (
    <div className="poetry-content">
      <article className="poetry-entry">
        {showTitle && title && (
          <header>
            <h1 className="entry-title">
              <a href="#">{title}</a>
            </h1>
          </header>
        )}
        <div className="body">
          {content.map((item, i) => {
            if (typeof item === 'string') {
              return <p key={i}>{item}</p>
            } else if (item.type === 'verse') {
              return <p key={i}><em>{item.text}</em></p>
            }
            return null
          })}
        </div>
      </article>
      {image && (
        <div className="film-image" style={{ marginTop: '150px', marginBottom: '40px', marginLeft: '-50px', textAlign: 'left' }}>
          <img src={image} alt={imageAlt} style={{ width: '70%', height: 'auto', display: 'block' }} />
        </div>
      )}
    </div>
  )
}

export default ContentEntry

