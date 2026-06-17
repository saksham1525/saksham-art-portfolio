import letterboxdData from '../../letterboxd-saksham_1525.json'

function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export const reviewEntries = Object.fromEntries(
  letterboxdData.films
    .filter(f => f.review && f.rating >= 4)
    .map(f => [toSlug(f.name), { content: [f.review] }])
)
