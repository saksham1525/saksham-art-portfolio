import { useMemo, useState } from 'react'
import PageLayout from '../components/PageLayout'
import letterboxdData from '../../letterboxd-saksham_1525.json'

function renderRating(rating) {
  const full = Math.floor(rating)
  const half = rating % 1 !== 0
  const empty = 5 - full - (half ? 1 : 0)
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty)
}

const isWorthy = (f) =>
  f.liked || (!!f.review && (f.rating == null || f.rating >= 4))

function Watchlist() {
  const [expanded, setExpanded] = useState(null)

  const filmsByYear = useMemo(() => {
    const sorted = letterboxdData.films
      .filter(isWorthy)
      .sort((a, b) => new Date(b.date_watched) - new Date(a.date_watched))
    const groups = {}
    sorted.forEach((film, i) => {
      const year = film.date_watched.slice(0, 4)
      if (!groups[year]) groups[year] = []
      groups[year].push({ ...film, _id: `${film.name}-${i}` })
    })
    return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a))
  }, [])

  const total = useMemo(() => letterboxdData.films.filter(isWorthy).length, [])

  const toggle = (id) => setExpanded(prev => prev === id ? null : id)

  return (
    <PageLayout sectionId="watchlist">
      <div className="watchlist-content">
        <p className="watchlist-count">{total} films</p>
        {filmsByYear.map(([year, films]) => (
          <div key={year} className="watchlist-year-group">
            <h2 className="watchlist-year">{year}</h2>
            <ul className="watchlist-list">
              {films.map((film) => (
                <li key={film._id} className="watchlist-item">
                  <div className="watchlist-row">
                    <span className="film-left">
                      <a
                        href={film.letterboxd_uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="film-title"
                      >
                        {film.name}
                      </a>
                      {film.liked && <span className="film-liked">♥</span>}
                    </span>
                    <span className="film-meta">
                      <span className="film-year">{film.year}</span>
                      {film.rating != null && (
                        <span className="film-rating">{renderRating(film.rating)}</span>
                      )}
                      {film.review ? (
                        <button
                          className="film-review-toggle"
                          onClick={() => toggle(film._id)}
                          aria-label="toggle review"
                        >
                          {expanded === film._id ? '−' : '+'}
                        </button>
                      ) : (
                        <span className="film-review-toggle-placeholder" />
                      )}
                    </span>
                  </div>
                  {expanded === film._id && film.review && (
                    <p
                      className="film-review"
                      dangerouslySetInnerHTML={{ __html: film.review }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default Watchlist
