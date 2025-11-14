import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Film from './pages/Film'
import FilmContent from './pages/FilmContent'
import Edits from './pages/Edits'
import Poetry from './pages/Poetry'
import Plays from './pages/Plays'
import PlaysContent from './pages/PlaysContent'
import Reviews from './pages/Reviews'
import ReviewContent from './pages/ReviewContent'
import VideoPlayer from './pages/VideoPlayer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/video/:slug" element={<VideoPlayer />} />
      <Route path="/film" element={<Film />} />
      <Route path="/film/:slug" element={<FilmContent />} />
      <Route path="/edits" element={<Edits />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/plays" element={<Plays />} />
      <Route path="/plays/:slug" element={<PlaysContent />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/reviews/:slug" element={<ReviewContent />} />
    </Routes>
  )
}

export default App

