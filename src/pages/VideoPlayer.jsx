import { useParams, Link } from 'react-router-dom'
import { videoData } from '../data/videos'
import '../styles/VideoPlayer.css'

function VideoPlayer() {
  const { slug } = useParams()
  const video = videoData[slug]

  if (!video) {
    return <div>Video not found</div>
  }

  const getEmbedUrl = () => {
    if (video.platform === 'youtube') {
      return `https://www.youtube.com/embed/${video.videoId}`
    } else if (video.platform === 'vimeo') {
      return `https://player.vimeo.com/video/${video.videoId}?badge=0&autopause=0&player_id=0&app_id=58479`
    }
  }

  return (
    <div className="video-page">
      <Link to="/" className="close-button" title="Close">&times;</Link>
      <div className="video-container">
        <div className="video-wrapper">
          <iframe 
            src={getEmbedUrl()} 
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

