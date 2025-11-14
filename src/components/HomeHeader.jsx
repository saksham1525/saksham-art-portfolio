import { Link } from 'react-router-dom'

function HomeHeader() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="brand brand-img">
            <img src="/images/image.jpg" alt="Logo" />
          </Link>
          <nav className="main-nav">
            <Link to="/archive">archive</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader

